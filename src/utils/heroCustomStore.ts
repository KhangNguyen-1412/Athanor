import type { Hero, LoreRelation, FactionId, HeroRole } from '../types/athanor';
import { RELATIONS_DATA } from '../data/relationsData';

export interface CustomHeroOverride {
  // Identity & General Info
  name?: string;
  title?: string;
  quote?: string;
  role?: HeroRole;
  secondaryRole?: HeroRole | '';
  birthday?: string;
  height?: string;
  birthplace?: string;
  factionId?: FactionId;

  // Combat Stats
  stats?: {
    damage?: number;
    mobility?: number;
    toughness?: number;
    crowdControl?: number;
    difficulty?: number;
  };

  // Secret Dossier & Special Lore
  organizationRole?: string;
  secret?: string;
  secretStory?: string;
  otherStory?: string;
  specialLore?: string;
  lore?: string;

  // Visual Media
  avatarUrl?: string;
  bannerUrl?: string;
  skillIcons?: Record<string, string>; // slot -> url
  spotlightVideoUrl?: string;
}

// Backward compatibility alias
export type CustomHeroMedia = CustomHeroOverride;

const STORAGE_KEY_PREFIX = 'athanor_hero_override_';
const RELATIONS_STORAGE_KEY = 'athanor_custom_relations_v1';
const DELETED_HEROES_STORAGE_KEY = 'athanor_deleted_heroes_v1';

export const heroCustomStore = {
  getOverride(heroId: string): CustomHeroOverride | null {
    try {
      const data = localStorage.getItem(STORAGE_KEY_PREFIX + heroId);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveOverride(heroId: string, media: CustomHeroOverride) {
    try {
      localStorage.setItem(STORAGE_KEY_PREFIX + heroId, JSON.stringify(media));
      window.dispatchEvent(new CustomEvent('athanor-hero-updated', { detail: { heroId } }));
    } catch (e) {
      console.error('Failed to save hero override:', e);
    }
  },

  clearOverride(heroId: string) {
    try {
      localStorage.removeItem(STORAGE_KEY_PREFIX + heroId);
      window.dispatchEvent(new CustomEvent('athanor-hero-updated', { detail: { heroId } }));
    } catch (e) {
      console.error('Failed to clear hero override:', e);
    }
  },

  // ===== DELETED HEROES STORAGE =====
  getDeletedHeroIds(): string[] {
    try {
      const data = localStorage.getItem(DELETED_HEROES_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  isHeroDeleted(heroId: string): boolean {
    return this.getDeletedHeroIds().includes(heroId);
  },

  deleteHero(heroId: string) {
    try {
      const current = this.getDeletedHeroIds();
      if (!current.includes(heroId)) {
        current.push(heroId);
        localStorage.setItem(DELETED_HEROES_STORAGE_KEY, JSON.stringify(current));
        window.dispatchEvent(
          new CustomEvent('athanor-hero-updated', {
            detail: { heroId, action: 'delete' }
          })
        );
      }
    } catch (e) {
      console.error('Failed to delete hero:', e);
    }
  },

  restoreHero(heroId: string) {
    try {
      const current = this.getDeletedHeroIds().filter((id) => id !== heroId);
      localStorage.setItem(DELETED_HEROES_STORAGE_KEY, JSON.stringify(current));
      window.dispatchEvent(
        new CustomEvent('athanor-hero-updated', {
          detail: { heroId, action: 'restore' }
        })
      );
    } catch (e) {
      console.error('Failed to restore hero:', e);
    }
  },

  restoreAllHeroes() {
    try {
      localStorage.removeItem(DELETED_HEROES_STORAGE_KEY);
      window.dispatchEvent(
        new CustomEvent('athanor-hero-updated', {
          detail: { action: 'restore_all' }
        })
      );
    } catch (e) {
      console.error('Failed to restore all heroes:', e);
    }
  },

  getActiveHeroes(heroesList: Hero[]): Hero[] {
    const deletedSet = new Set(this.getDeletedHeroIds());
    return heroesList
      .filter((h) => !deletedSet.has(h.id))
      .map((h) => this.applyOverride(h));
  },

  getDeletedHeroes(heroesList: Hero[]): Hero[] {
    const deletedSet = new Set(this.getDeletedHeroIds());
    return heroesList
      .filter((h) => deletedSet.has(h.id))
      .map((h) => this.applyOverride(h));
  },

  // ===== RELATIONS STORAGE =====
  getRelations(): LoreRelation[] {
    try {
      const data = localStorage.getItem(RELATIONS_STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // fallback
    }
    return RELATIONS_DATA;
  },

  getHeroRelations(heroId: string): LoreRelation[] {
    return this.getRelations().filter(
      (rel) => rel.sourceHeroId === heroId || rel.targetHeroId === heroId
    );
  },

  saveHeroRelations(heroId: string, relations: LoreRelation[]) {
    try {
      const all = this.getRelations();
      // Remove old relations for this hero
      const remaining = all.filter(
        (rel) => rel.sourceHeroId !== heroId && rel.targetHeroId !== heroId
      );
      // Append the updated relations for this hero
      const updated = [...remaining, ...relations];
      localStorage.setItem(RELATIONS_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('athanor-hero-updated', { detail: { heroId } }));
    } catch (e) {
      console.error('Failed to save hero relations:', e);
    }
  },

  resetHeroRelations(heroId: string) {
    try {
      const all = this.getRelations();
      // Remove current relations for this hero from storage
      const remaining = all.filter(
        (rel) => rel.sourceHeroId !== heroId && rel.targetHeroId !== heroId
      );
      // Get canonical relations for this hero from original RELATIONS_DATA
      const original = RELATIONS_DATA.filter(
        (rel) => rel.sourceHeroId === heroId || rel.targetHeroId === heroId
      );
      const updated = [...remaining, ...original];
      localStorage.setItem(RELATIONS_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('athanor-hero-updated', { detail: { heroId } }));
    } catch (e) {
      console.error('Failed to reset hero relations:', e);
    }
  },

  applyOverride(hero: Hero): Hero {
    const override = this.getOverride(hero.id);
    const heroRelations = this.getHeroRelations(hero.id);
    const relationTargetIds = heroRelations.map((r) =>
      r.sourceHeroId === hero.id ? r.targetHeroId : r.sourceHeroId
    );
    // Combine relatedHeroIds with any new relation targets
    const combinedRelatedIds = Array.from(
      new Set([...(hero.relatedHeroIds || []), ...relationTargetIds])
    );

    const baseHero: Hero = {
      ...hero,
      name: override?.name !== undefined && override.name.trim() !== '' ? override.name.trim() : hero.name,
      title: override?.title !== undefined && override.title.trim() !== '' ? override.title.trim() : hero.title,
      quote: override?.quote !== undefined ? override.quote : hero.quote,
      role: (override?.role as HeroRole) || hero.role,
      secondaryRole: override?.secondaryRole !== undefined
        ? (override.secondaryRole ? (override.secondaryRole as HeroRole) : undefined)
        : hero.secondaryRole,
      birthday: override?.birthday !== undefined ? override.birthday : hero.birthday,
      height: override?.height !== undefined ? override.height : hero.height,
      birthplace: override?.birthplace !== undefined ? override.birthplace : hero.birthplace,
      factionId: override?.factionId || hero.factionId,
      specialLore: override?.specialLore !== undefined ? override.specialLore : hero.specialLore,
      lore: override?.lore !== undefined ? override.lore : hero.lore,
      avatarUrl: (override?.avatarUrl && !override.avatarUrl.includes('unsplash.com')) ? override.avatarUrl : hero.avatarUrl,
      bannerUrl: (override?.bannerUrl && !override.bannerUrl.includes('unsplash.com')) ? override.bannerUrl : hero.bannerUrl,
      skills: hero.skills.map((skill) => {
        const customIcon = override?.skillIcons?.[skill.slot];
        return (customIcon && !customIcon.includes('unsplash.com')) ? { ...skill, iconUrl: customIcon } : skill;
      }),
      stats: {
        damage: override?.stats?.damage !== undefined ? override.stats.damage : hero.stats.damage,
        mobility: override?.stats?.mobility !== undefined ? override.stats.mobility : hero.stats.mobility,
        toughness: override?.stats?.toughness !== undefined ? override.stats.toughness : hero.stats.toughness,
        crowdControl: override?.stats?.crowdControl !== undefined ? override.stats.crowdControl : hero.stats.crowdControl,
        difficulty: override?.stats?.difficulty !== undefined ? override.stats.difficulty : hero.stats.difficulty,
      },
      relatedHeroIds: combinedRelatedIds,
      spotlightVideoUrl: override?.spotlightVideoUrl !== undefined ? override.spotlightVideoUrl : hero.spotlightVideoUrl
    };

    if (
      override?.organizationRole !== undefined ||
      override?.secret !== undefined ||
      override?.secretStory !== undefined ||
      override?.otherStory !== undefined
    ) {
      const secretVal =
        override?.secret !== undefined
          ? override.secret
          : (override?.secretStory !== undefined
              ? override.secretStory
              : (baseHero.secretProfile?.secret || ''));

      baseHero.secretProfile = {
        organizationRole:
          override?.organizationRole !== undefined
            ? override.organizationRole
            : (baseHero.secretProfile?.organizationRole || ''),
        secret: secretVal,
        otherStory:
          override?.otherStory !== undefined
            ? override.otherStory
            : (baseHero.secretProfile?.otherStory || '')
      };
    }

    return baseHero;
  }
};

