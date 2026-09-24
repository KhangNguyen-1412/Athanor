import React, { useState, useMemo, useEffect } from 'react';
import type { Hero, LoreRelation, RelationCategory, FactionId, HeroRole } from '../../types/athanor';
import { HEROES_DATA } from '../../data/heroesData';
import { FACTIONS_DATA } from '../../data/factionsData';
import { heroCustomStore } from '../../utils/heroCustomStore';
import { relationCategoryStore, renderCategoryIcon } from '../../utils/relationCategoryStore';
import { RelationCategoryModal } from './RelationCategoryModal';
import {
  X,
  Upload,
  Check,
  RotateCcw,
  Copy,
  Image as ImageIcon,
  Plus,
  Trash2,
  Edit3,
  Search,
  Camera,
  Network,
  Tag,
  MapPin,
  Building2,
  Globe,
  User,
  Zap,
  BookOpen,
  Ruler,
  Calendar,
  Quote,
  Shield,
  Sparkles,
  Sliders
} from 'lucide-react';
import { useBodyScrollLock } from '../../utils/useBodyScrollLock';
import { RadarChart } from './RadarChart';
import './HeroImageEditorModal.css';

interface HeroImageEditorModalProps {
  hero: Hero;
  onClose: () => void;
  onUpdated: (updatedHero: Hero) => void;
}

type EditorTab = 'info' | 'stats' | 'region' | 'secret' | 'media' | 'relations';

const ALL_ROLES: HeroRole[] = [
  'Đấu Sĩ',
  'Pháp Sư',
  'Xạ Thủ',
  'Sát Thủ',
  'Đỡ Đòn',
  'Trợ Thủ'
];

interface RelationDraft {
  id?: string;
  targetHeroId: string;
  relationType: string;
  label: string;
  description: string;
}

export const HeroImageEditorModal: React.FC<HeroImageEditorModalProps> = ({
  hero,
  onClose,
  onUpdated
}) => {
  useBodyScrollLock(true);

  const [activeTab, setActiveTab] = useState<EditorTab>('info');
  const [categories, setCategories] = useState<RelationCategory[]>(() =>
    relationCategoryStore.getCategories()
  );
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const refresh = () => setCategories(relationCategoryStore.getCategories());
    window.addEventListener('athanor-categories-updated', refresh);
    return () => window.removeEventListener('athanor-categories-updated', refresh);
  }, []);

  const currentOverride = heroCustomStore.getOverride(hero.id) || {};

  // 1. Identity & General Info state
  const [name, setName] = useState<string>(hero.name || '');
  const [title, setTitle] = useState<string>(hero.title || '');
  const [quote, setQuote] = useState<string>(hero.quote || '');
  const [role, setRole] = useState<HeroRole>(hero.role);
  const [secondaryRole, setSecondaryRole] = useState<string>(hero.secondaryRole || '');
  const [birthday, setBirthday] = useState<string>(hero.birthday || '');
  const [height, setHeight] = useState<string>(hero.height || '');
  const [birthplace, setBirthplace] = useState<string>(hero.birthplace || '');
  const [factionId, setFactionId] = useState<FactionId>(hero.factionId);

  // 2. Combat Stats state
  const [damage, setDamage] = useState<number>(hero.stats.damage);
  const [mobility, setMobility] = useState<number>(hero.stats.mobility);
  const [toughness, setToughness] = useState<number>(hero.stats.toughness);
  const [crowdControl, setCrowdControl] = useState<number>(hero.stats.crowdControl ?? 5);
  const [difficulty, setDifficulty] = useState<number>(hero.stats.difficulty);

  // 3. Secret Profile & Special Lore state
  const [organizationRole, setOrganizationRole] = useState<string>(
    hero.secretProfile?.organizationRole || ''
  );
  const [secretStory, setSecretStory] = useState<string>(
    hero.secretProfile?.secret || (hero.secretProfile as any)?.secretStory || ''
  );
  const [otherStory, setOtherStory] = useState<string>(
    hero.secretProfile?.otherStory || ''
  );
  const [specialLore, setSpecialLore] = useState<string>(
    hero.specialLore || ''
  );
  const [lore, setLore] = useState<string>(
    hero.lore || ''
  );

  // 4. Media state
  const [avatarUrl, setAvatarUrl] = useState<string>(hero.avatarUrl || '');
  const [bannerUrl, setBannerUrl] = useState<string>(hero.bannerUrl || '');
  const [spotlightVideoUrl, setSpotlightVideoUrl] = useState<string>(hero.spotlightVideoUrl || '');
  const [skillIcons, setSkillIcons] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = { ...(currentOverride.skillIcons || {}) };
    hero.skills.forEach((s) => {
      if (!initial[s.slot] && s.iconUrl) {
        initial[s.slot] = s.iconUrl;
      }
    });
    return initial;
  });

  // 5. Relations state
  const [relations, setRelations] = useState<LoreRelation[]>(() =>
    heroCustomStore.getHeroRelations(hero.id)
  );

  // Form state for adding/editing a relation
  const [isEditingRelation, setIsEditingRelation] = useState<boolean>(false);
  const [relationDraft, setRelationDraft] = useState<RelationDraft>({
    targetHeroId: '',
    relationType: 'enemy',
    label: '',
    description: ''
  });
  const [targetHeroSearch, setTargetHeroSearch] = useState<string>('');

  const [copied, setCopied] = useState<boolean>(false);

  // All other heroes (exclude current hero and deleted heroes) with latest overrides
  const allOtherHeroes = useMemo(() => {
    return heroCustomStore.getActiveHeroes(HEROES_DATA).filter((h) => h.id !== hero.id);
  }, [hero.id]);

  // Filtered heroes for selector in relation form
  const filteredOtherHeroes = useMemo(() => {
    if (!targetHeroSearch.trim()) return allOtherHeroes;
    const q = targetHeroSearch.toLowerCase();
    return allOtherHeroes.filter(
      (h) =>
        h.name.toLowerCase().includes(q) ||
        h.title.toLowerCase().includes(q) ||
        FACTIONS_DATA[h.factionId]?.name.toLowerCase().includes(q)
    );
  }, [allOtherHeroes, targetHeroSearch]);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: 'avatar' | 'banner' | string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (loadEvt) => {
      const result = loadEvt.target?.result as string;
      if (target === 'avatar') {
        setAvatarUrl(result);
      } else if (target === 'banner') {
        setBannerUrl(result);
      } else {
        setSkillIcons((prev) => ({ ...prev, [target]: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  // Open add new relation form
  const handleOpenAddRelation = () => {
    const defaultTarget = allOtherHeroes[0]?.id || '';
    setRelationDraft({
      targetHeroId: defaultTarget,
      relationType: 'enemy',
      label: '',
      description: ''
    });
    setTargetHeroSearch('');
    setIsEditingRelation(true);
  };

  // Open edit relation form
  const handleOpenEditRelation = (rel: LoreRelation) => {
    const otherId = rel.sourceHeroId === hero.id ? rel.targetHeroId : rel.sourceHeroId;
    setRelationDraft({
      id: rel.id,
      targetHeroId: otherId,
      relationType: rel.relationType,
      label: rel.label,
      description: rel.description
    });
    setTargetHeroSearch('');
    setIsEditingRelation(true);
  };

  // Delete a relation
  const handleDeleteRelation = (relId: string) => {
    setRelations((prev) => prev.filter((r) => r.id !== relId));
  };

  // Save draft relation into local relations array
  const handleSaveRelationDraft = () => {
    if (!relationDraft.targetHeroId) {
      alert('Vui lòng chọn một tướng để thiết lập mối quan hệ.');
      return;
    }
    if (!relationDraft.label.trim()) {
      alert('Vui lòng nhập tên hoặc danh hiệu của mối quan hệ.');
      return;
    }

    if (relationDraft.id) {
      setRelations((prev) =>
        prev.map((r) => {
          if (r.id === relationDraft.id) {
            return {
              ...r,
              sourceHeroId: hero.id,
              targetHeroId: relationDraft.targetHeroId,
              relationType: relationDraft.relationType,
              label: relationDraft.label.trim(),
              description: relationDraft.description.trim()
            };
          }
          return r;
        })
      );
    } else {
      const newRel: LoreRelation = {
        id: `rel-${hero.id}-${relationDraft.targetHeroId}-${Date.now()}`,
        sourceHeroId: hero.id,
        targetHeroId: relationDraft.targetHeroId,
        relationType: relationDraft.relationType,
        label: relationDraft.label.trim(),
        description: relationDraft.description.trim()
      };
      setRelations((prev) => [newRel, ...prev]);
    }

    setIsEditingRelation(false);
  };

  // Master Save: Persists Identity, Region, Stats, Secret Profile, Media and Relations
  const handleSave = () => {
    heroCustomStore.saveOverride(hero.id, {
      name: name.trim() || hero.name,
      title: title.trim() || hero.title,
      quote: quote.trim(),
      role,
      secondaryRole: (secondaryRole.trim() as HeroRole) || undefined,
      birthday: birthday.trim(),
      height: height.trim(),
      birthplace: birthplace.trim(),
      factionId,
      stats: {
        damage: Number(damage),
        mobility: Number(mobility),
        toughness: Number(toughness),
        crowdControl: Number(crowdControl),
        difficulty: Number(difficulty)
      },
      organizationRole: organizationRole.trim(),
      secret: secretStory.trim(),
      secretStory: secretStory.trim(),
      otherStory: otherStory.trim(),
      specialLore: specialLore.trim(),
      lore: lore.trim(),
      avatarUrl,
      bannerUrl,
      skillIcons,
      spotlightVideoUrl: spotlightVideoUrl.trim() || undefined
    });

    // Save relations
    heroCustomStore.saveHeroRelations(hero.id, relations);

    // Re-apply and close
    const updated = heroCustomStore.applyOverride(hero);
    onUpdated(updated);
    onClose();
  };

  // Master Reset
  const handleReset = () => {
    heroCustomStore.clearOverride(hero.id);
    heroCustomStore.resetHeroRelations(hero.id);

    setName(hero.name);
    setTitle(hero.title);
    setQuote(hero.quote);
    setRole(hero.role);
    setSecondaryRole(hero.secondaryRole || '');
    setBirthday(hero.birthday || '');
    setHeight(hero.height || '');
    setBirthplace(hero.birthplace || '');
    setFactionId(hero.factionId);

    setDamage(hero.stats.damage);
    setMobility(hero.stats.mobility);
    setToughness(hero.stats.toughness);
    setCrowdControl(hero.stats.crowdControl ?? 5);
    setDifficulty(hero.stats.difficulty);

    setOrganizationRole(hero.secretProfile?.organizationRole || '');
    setSecretStory(hero.secretProfile?.secret || (hero.secretProfile as any)?.secretStory || '');
    setOtherStory(hero.secretProfile?.otherStory || '');
    setSpecialLore(hero.specialLore || '');
    setLore(hero.lore || '');

    setAvatarUrl(hero.avatarUrl);
    setBannerUrl(hero.bannerUrl);
    setSkillIcons(() => {
      const initial: Record<string, string> = {};
      hero.skills.forEach((s) => {
        if (s.iconUrl) initial[s.slot] = s.iconUrl;
      });
      return initial;
    });
    setRelations(heroCustomStore.getHeroRelations(hero.id));

    const updated = heroCustomStore.applyOverride(hero);
    onUpdated(updated);
    onClose();
  };

  // Delete Hero
  const handleDeleteHero = () => {
    const heroDisplayName = name.trim() || hero.name;
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa vị tướng "${heroDisplayName}" khỏi Athanor?\n\nTướng này sẽ được ẩn khỏi Danh Bạ, Bản Đồ và Hồ Sơ (bạn có thể khôi phục lại bất kỳ lúc nào từ danh bạ tướng).`
    );
    if (confirmed) {
      heroCustomStore.deleteHero(hero.id);
      onClose();
    }
  };

  const copyCodeSnippet = () => {
    const finalName = name.trim() || hero.name;
    const snippet = `// Cập nhật cho tướng ${finalName} (${hero.id}):
name: '${finalName}',
title: '${title.trim() || hero.title}',
quote: '${quote.trim()}',
role: '${role}',
${secondaryRole ? `secondaryRole: '${secondaryRole}',\n` : ''}birthplace: '${birthplace.trim()}',
birthday: '${birthday.trim()}',
height: '${height.trim()}',
factionId: '${factionId}',
stats: {
  damage: ${damage},
  toughness: ${toughness},
  mobility: ${mobility},
  crowdControl: ${crowdControl},
  difficulty: ${difficulty}
},
secretProfile: {
  organizationRole: '${organizationRole.trim()}',
  otherStory: '${otherStory.trim()}',
  secret: '${secretStory.trim()}'
},
specialLore: '${specialLore.trim()}',
lore: '${lore.trim()}',
avatarUrl: '${avatarUrl.startsWith('data:') ? '/images/heroes/' + hero.id + '_avatar.png' : avatarUrl}',
bannerUrl: '${bannerUrl.startsWith('data:') ? '/images/heroes/' + hero.id + '_banner.jpg' : bannerUrl}',

// Kỹ năng:
${hero.skills
  .map(
    (s) => `// ${s.name} (${s.slot}):
iconUrl: '${skillIcons[s.slot] || ''}'`
  )
  .join('\n')}

// Quan hệ sử thi (${relations.length} mối quan hệ):
${JSON.stringify(relations, null, 2)}`;

    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const slotLabels: Record<string, string> = {
    passive: 'NỘI TẠI',
    skill1: 'CHIÊU 1',
    skill2: 'CHIÊU 2',
    ultimate: 'CHIÊU CUỐI'
  };

  const selectedFaction = FACTIONS_DATA[factionId];

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onWheel={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      <div
        className="minimal-editor-container animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimalist Top Header */}
        <div className="minimal-editor-header">
          <div className="editor-title-row">
            <h3 className="editor-hero-name">
              Chỉnh Sửa Hồ Sơ: {name.trim() || hero.name}
              <span className="editor-hero-title">「{title.trim() || hero.title}」</span>
            </h3>
            <span
              className="editor-current-faction-badge"
              style={{
                color: selectedFaction?.color,
                borderColor: `${selectedFaction?.color}40`,
                backgroundColor: `${selectedFaction?.color}14`
              }}
            >
              {selectedFaction?.name}
            </span>
          </div>

          <button
            type="button"
            className="minimal-close-btn"
            onClick={onClose}
            title="Đóng cửa sổ"
          >
            <X size={15} />
          </button>
        </div>

        {/* Minimalist Tab Navigation Bar */}
        <div className="minimal-editor-tabs-bar custom-scrollbar">
          <button
            type="button"
            className={`editor-tab-btn ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            <User size={14} />
            <span>THÔNG TIN CHUNG</span>
          </button>
          <button
            type="button"
            className={`editor-tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            <Sliders size={14} />
            <span>CHỈ SỐ TÁC CHIẾN</span>
          </button>
          <button
            type="button"
            className={`editor-tab-btn ${activeTab === 'region' ? 'active' : ''}`}
            onClick={() => setActiveTab('region')}
          >
            <Globe size={14} />
            <span>VÙNG ĐẤT & THẾ LỰC</span>
          </button>
          <button
            type="button"
            className={`editor-tab-btn ${activeTab === 'secret' ? 'active' : ''}`}
            onClick={() => setActiveTab('secret')}
          >
            <BookOpen size={14} />
            <span>HỒ SƠ MẬT & ĐIỂN TÍCH</span>
          </button>
          <button
            type="button"
            className={`editor-tab-btn ${activeTab === 'media' ? 'active' : ''}`}
            onClick={() => setActiveTab('media')}
          >
            <Camera size={14} />
            <span>HÌNH ẢNH & CHIÊU THỨC</span>
          </button>
          <button
            type="button"
            className={`editor-tab-btn ${activeTab === 'relations' ? 'active' : ''}`}
            onClick={() => setActiveTab('relations')}
          >
            <Network size={14} />
            <span>MỐI QUAN HỆ ({relations.length})</span>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="minimal-editor-body custom-scrollbar">
          {/* TAB: GENERAL INFO */}
          {activeTab === 'info' && (
            <div className="editor-tab-pane animate-fade-in">
              {/* 1. Tên & Danh hiệu */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">1. ĐỊNH DANH & DANH HIỆU TƯỚNG</h4>
                </div>
                <div className="form-grid-2">
                  <div className="form-field-item">
                    <label className="field-label-sm">Tên Tướng</label>
                    <div className="input-icon-wrap">
                      <User size={15} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                      <input
                        type="text"
                        placeholder="Ví dụ: Murad, Florentino, Ilumia..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="minimal-input-field"
                      />
                    </div>
                  </div>
                  <div className="form-field-item">
                    <label className="field-label-sm">Danh Hiệu</label>
                    <div className="input-icon-wrap">
                      <Sparkles size={15} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                      <input
                        type="text"
                        placeholder="Ví dụ: Lãng Khách Thời Không, Nữ Hoàng..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="minimal-input-field"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Câu trích dẫn / Châm ngôn */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">2. CÂU DANH NGÔN THƯƠNG HIỆU</h4>
                </div>
                <div className="input-icon-wrap">
                  <Quote size={15} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                  <input
                    type="text"
                    placeholder="Ví dụ: Con người lãng quên thời gian, nhưng thời gian không lãng quên ai cả..."
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    className="minimal-input-field"
                  />
                </div>
              </div>

              {/* 3. Vai trò chiến trường */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">3. VAI TRÒ CHIẾN ĐẤU TRÊN ĐẤU TRƯỜNG</h4>
                </div>
                <div className="form-grid-2">
                  <div className="form-field-item">
                    <label className="field-label-sm">Vai Trò Chính</label>
                    <div className="role-chips-group">
                      {ALL_ROLES.map((r) => (
                        <button
                          key={r}
                          type="button"
                          className={`role-chip-btn ${role === r ? 'active' : ''}`}
                          onClick={() => setRole(r)}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-field-item">
                    <label className="field-label-sm">Vai Trò Phụ</label>
                    <div className="role-chips-group">
                      <button
                        type="button"
                        className={`role-chip-btn ${secondaryRole === '' ? 'active' : ''}`}
                        onClick={() => setSecondaryRole('')}
                      >
                        Không có
                      </button>
                      {ALL_ROLES.map((r) => (
                        <button
                          key={r}
                          type="button"
                          className={`role-chip-btn ${secondaryRole === r ? 'active' : ''}`}
                          onClick={() => setSecondaryRole(secondaryRole === r ? '' : r)}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Nhân trắc học & Khởi nguyên */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">4. NHÂN TRẮC HỌC & XUẤT THÂN</h4>
                </div>
                <div className="form-grid-3">
                  <div className="form-field-item">
                    <label className="field-label-sm">Nơi sinh / Quê quán</label>
                    <div className="input-icon-wrap">
                      <MapPin size={15} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                      <input
                        type="text"
                        placeholder="Ví dụ: Sa mạc Helios, Norman..."
                        value={birthplace}
                        onChange={(e) => setBirthplace(e.target.value)}
                        className="minimal-input-field"
                      />
                    </div>
                  </div>
                  <div className="form-field-item">
                    <label className="field-label-sm">Sinh nhật</label>
                    <div className="input-icon-wrap">
                      <Calendar size={15} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                      <input
                        type="text"
                        placeholder="Ví dụ: 15/09"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="minimal-input-field"
                      />
                    </div>
                  </div>
                  <div className="form-field-item">
                    <label className="field-label-sm">Chiều cao</label>
                    <div className="input-icon-wrap">
                      <Ruler size={15} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                      <input
                        type="text"
                        placeholder="Ví dụ: 178 cm"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="minimal-input-field"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: COMBAT STATS */}
          {activeTab === 'stats' && (
            <div className="editor-tab-pane animate-fade-in">
              <div className="stats-editor-layout">
                {/* Sliders Column */}
                <div className="stats-sliders-col">
                  {/* Damage */}
                  <div className="stat-slider-card">
                    <div className="stat-slider-top">
                      <div className="stat-slider-title-row">
                        <Zap size={15} className="stat-icon-dmg" />
                        <span className="stat-slider-name">SÁT THƯƠNG</span>
                      </div>
                      <span className="stat-slider-value badge-dmg">{damage} / 10</span>
                    </div>
                    <div className="stat-slider-track-wrap">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={damage}
                        onChange={(e) => setDamage(Number(e.target.value))}
                        className="stat-range-input"
                      />
                      <div
                        className="stat-range-fill fill-dmg"
                        style={{ width: `${(damage / 10) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Toughness */}
                  <div className="stat-slider-card">
                    <div className="stat-slider-top">
                      <div className="stat-slider-title-row">
                        <Shield size={15} className="stat-icon-tough" />
                        <span className="stat-slider-name">CHỐNG CHỊU</span>
                      </div>
                      <span className="stat-slider-value badge-tough">{toughness} / 10</span>
                    </div>
                    <div className="stat-slider-track-wrap">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={toughness}
                        onChange={(e) => setToughness(Number(e.target.value))}
                        className="stat-range-input"
                      />
                      <div
                        className="stat-range-fill fill-tough"
                        style={{ width: `${(toughness / 10) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Mobility */}
                  <div className="stat-slider-card">
                    <div className="stat-slider-top">
                      <div className="stat-slider-title-row">
                        <Sparkles size={15} className="stat-icon-mobi" />
                        <span className="stat-slider-name">CƠ ĐỘNG</span>
                      </div>
                      <span className="stat-slider-value badge-mobi">{mobility} / 10</span>
                    </div>
                    <div className="stat-slider-track-wrap">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={mobility}
                        onChange={(e) => setMobility(Number(e.target.value))}
                        className="stat-range-input"
                      />
                      <div
                        className="stat-range-fill fill-mobi"
                        style={{ width: `${(mobility / 10) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Crowd Control */}
                  <div className="stat-slider-card">
                    <div className="stat-slider-top">
                      <div className="stat-slider-title-row">
                        <Sliders size={15} className="stat-icon-cc" />
                        <span className="stat-slider-name">KHỐNG CHẾ</span>
                      </div>
                      <span className="stat-slider-value badge-cc">{crowdControl} / 10</span>
                    </div>
                    <div className="stat-slider-track-wrap">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={crowdControl}
                        onChange={(e) => setCrowdControl(Number(e.target.value))}
                        className="stat-range-input"
                      />
                      <div
                        className="stat-range-fill fill-cc"
                        style={{ width: `${(crowdControl / 10) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div className="stat-slider-card">
                    <div className="stat-slider-top">
                      <div className="stat-slider-title-row">
                        <User size={15} className="stat-icon-diff" />
                        <span className="stat-slider-name">ĐỘ KHÓ THAO TÁC</span>
                      </div>
                      <span className="stat-slider-value badge-diff">{difficulty} / 10</span>
                    </div>
                    <div className="stat-slider-track-wrap">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={difficulty}
                        onChange={(e) => setDifficulty(Number(e.target.value))}
                        className="stat-range-input"
                      />
                      <div
                        className="stat-range-fill fill-diff"
                        style={{ width: `${(difficulty / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Radar Chart Live Preview Column */}
                <div className="stats-radar-col">
                  <div className="radar-preview-card">
                    <h5 className="radar-preview-title">MÔ PHỎNG NĂNG LỰC TÁC CHIẾN</h5>
                    <div className="radar-canvas-wrap">
                      <RadarChart
                        stats={{
                          damage,
                          toughness,
                          mobility,
                          crowdControl,
                          difficulty
                        }}
                        color={selectedFaction?.color || '#007ba7'}
                        size={190}
                      />
                    </div>
                    <div className="radar-total-score">
                      <span>Tổng điểm lực chiến:</span>
                      <strong>{damage + toughness + mobility + crowdControl + difficulty} / 50</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REGION & FACTION */}
          {activeTab === 'region' && (
            <div className="editor-tab-pane animate-fade-in">

              {/* Faction Selector */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">1. CHỌN THẾ LỰC / VÙNG ĐẤT BẢO HỘ</h4>
                </div>

                <div className="faction-cards-grid">
                  {Object.values(FACTIONS_DATA).map((fac) => {
                    const isSelected = factionId === fac.id;
                    return (
                      <div
                        key={fac.id}
                        className={`faction-select-card ${isSelected ? 'selected' : ''}`}
                        style={{
                          borderColor: isSelected ? fac.color : undefined,
                          backgroundColor: isSelected ? `${fac.color}0d` : undefined
                        }}
                        onClick={() => setFactionId(fac.id)}
                      >
                        <div className="faction-card-top-row">
                          <span
                            className="faction-mini-chip"
                            style={{
                              color: fac.color,
                              backgroundColor: `${fac.color}15`,
                              borderColor: `${fac.color}30`
                            }}
                          >
                            {fac.englishName}
                          </span>
                          {isSelected && (
                            <div
                              className="faction-check-circle"
                              style={{ backgroundColor: fac.color }}
                            >
                              <Check size={11} color="#ffffff" />
                            </div>
                          )}
                        </div>

                        <h5 className="faction-card-title">{fac.name}</h5>
                        <p className="faction-card-desc">Lãnh tụ: {fac.leader}</p>
                        <span className="faction-card-territory">{fac.territory}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Birthplace Input */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">2. NƠI SINH & KHỞI NGUYÊN</h4>
                </div>
                <div className="input-icon-wrap">
                  <MapPin size={16} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                  <input
                    type="text"
                    placeholder="Ví dụ: Okka (Norman), Thành Phố Carano, Rừng Nguyên Sinh, Ải Nhạn Môn..."
                    value={birthplace}
                    onChange={(e) => setBirthplace(e.target.value)}
                    className="minimal-input-field"
                  />
                </div>
              </div>

              {/* Organization Role Input */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">3. VAI TRÒ TRONG HỘI & TỔ CHỨC</h4>
                </div>
                <div className="input-icon-wrap">
                  <Building2 size={16} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                  <input
                    type="text"
                    placeholder="Ví dụ: Giáo Hoàng Tháp Quang Minh, Đại Tướng Quân Lâu Đài Khởi Nguyên..."
                    value={organizationRole}
                    onChange={(e) => setOrganizationRole(e.target.value)}
                    className="minimal-input-field"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: SECRET PROFILE & LORE */}
          {activeTab === 'secret' && (
            <div className="editor-tab-pane animate-fade-in">
              {/* 1. Vai trò trong hội / bang phái */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">1. VAI TRÒ TRONG HỘI & TỔ CHỨC</h4>
                </div>
                <div className="input-icon-wrap">
                  <Building2 size={16} className="input-lead-icon" style={{ color: selectedFaction?.color }} />
                  <input
                    type="text"
                    placeholder="Ví dụ: Đại Tướng Quân Lâu Đài Khởi Nguyên, Trưởng Lão Veda..."
                    value={organizationRole}
                    onChange={(e) => setOrganizationRole(e.target.value)}
                    className="minimal-input-field"
                  />
                </div>
              </div>

              {/* 2. Bí mật của tướng (Tuyệt mật) */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title text-jasper-title">2. BÍ MẬT CỦA TƯỚNG ĐÓ // TUYỆT MẬT</h4>
                </div>
                <textarea
                  className="minimal-textarea custom-scrollbar secret-classified-textarea"
                  rows={3}
                  placeholder="Nhập bí mật sâu kín nhất của tướng..."
                  value={secretStory}
                  onChange={(e) => setSecretStory(e.target.value)}
                />
              </div>

              {/* 3. Giai thoại đời thường / Câu chuyện khác */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">3. CÂU CHUYỆN KHÁC // GIAI THOẠI ĐỜI THƯỜNG</h4>
                </div>
                <textarea
                  className="minimal-textarea custom-scrollbar"
                  rows={3}
                  placeholder="Nhập giai thoại đời thường hoặc câu chuyện khác..."
                  value={otherStory}
                  onChange={(e) => setOtherStory(e.target.value)}
                />
              </div>

              {/* 4. Cốt truyện đặc biệt / Hùng ca sử thi */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">4. CỐT TRUYỆN ĐẶC BIỆT // BẢN HÙNG CA SỬ THI</h4>
                </div>
                <textarea
                  className="minimal-textarea custom-scrollbar"
                  rows={4}
                  placeholder="Nhập bản hùng ca sử thi hoặc cốt truyện đặc biệt..."
                  value={specialLore}
                  onChange={(e) => setSpecialLore(e.target.value)}
                />
              </div>

              {/* 5. Tiểu sử Đại Lục Athanor */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">5. TIỂU SỬ ĐẠI LỤC ATHANOR</h4>
                </div>
                <textarea
                  className="minimal-textarea custom-scrollbar"
                  rows={4}
                  placeholder="Nhập tiểu sử Athanor..."
                  value={lore}
                  onChange={(e) => setLore(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* TAB: MEDIA & SKILLS */}
          {activeTab === 'media' && (
            <div className="editor-tab-pane animate-fade-in">

              {/* Avatar */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">ẢNH ĐẠI DIỆN TƯỚNG</h4>
                </div>
                <div className="media-preview-row">
                  <div className="avatar-preview-box">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="Avatar Preview" className="preview-img" />
                    ) : (
                      <ImageIcon size={22} className="placeholder-icon" />
                    )}
                  </div>
                  <div className="media-inputs-col">
                    <input
                      type="text"
                      placeholder="Dán link ảnh online (https://...)"
                      value={avatarUrl}
                      onChange={(e) => setAvatarUrl(e.target.value)}
                      className="minimal-input-field"
                    />
                    <label className="minimal-upload-btn">
                      <Upload size={13} />
                      <span>Chọn ảnh từ máy tính...</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'avatar')}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Banner */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">HÌNH NỀN SPLASH ART</h4>
                </div>
                <div className="media-preview-row banner-preview-row">
                  <div className="banner-preview-box">
                    {bannerUrl ? (
                      <img src={bannerUrl} alt="Banner Preview" className="preview-banner-img" />
                    ) : (
                      <ImageIcon size={22} className="placeholder-icon" />
                    )}
                  </div>
                  <div className="media-inputs-col">
                    <input
                      type="text"
                      placeholder="Dán link ảnh bìa online (https://...)"
                      value={bannerUrl}
                      onChange={(e) => setBannerUrl(e.target.value)}
                      className="minimal-input-field"
                    />
                    <label className="minimal-upload-btn">
                      <Upload size={13} />
                      <span>Chọn ảnh bìa từ máy tính...</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'banner')}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Skill Icons */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">BỘ BIỂU TƯỢNG 4 KỸ NĂNG</h4>
                </div>

                <div className="skills-grid">
                  {hero.skills.map((skill) => {
                    const currentIcon = skillIcons[skill.slot] || '';
                    return (
                      <div key={skill.slot} className="skill-edit-card">
                        <div className="skill-edit-card-head">
                          <span className="skill-slot-tag">{slotLabels[skill.slot]}</span>
                          <span className="skill-card-name">{skill.name}</span>
                        </div>
                        <div className="skill-preview-line">
                          <div className="skill-thumb-box">
                            {currentIcon ? (
                              <img src={currentIcon} alt={skill.name} className="skill-thumb" />
                            ) : (
                              <span className="skill-empty">Trống</span>
                            )}
                          </div>
                          <div className="skill-inputs">
                            <input
                              type="text"
                              placeholder="Link icon (https://...)"
                              value={currentIcon}
                              onChange={(e) => {
                                const val = e.target.value;
                                setSkillIcons((prev) => ({ ...prev, [skill.slot]: val }));
                              }}
                              className="minimal-input-field sm-input"
                            />
                            <label className="minimal-upload-btn sm-upload-btn">
                              <Upload size={11} />
                              <span>Tải file...</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, skill.slot)}
                                style={{ display: 'none' }}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Video Spotlight URL */}
              <div className="editor-field-section">
                <div className="field-section-head">
                  <h4 className="field-section-title">VIDEO TÂM ĐIỂM TƯỚNG</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <input
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=... (Để trống để dùng video mặc định của Garena)"
                    value={spotlightVideoUrl}
                    onChange={(e) => setSpotlightVideoUrl(e.target.value)}
                    className="minimal-input-field"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RELATIONS */}
          {activeTab === 'relations' && (
            <div className="editor-tab-pane animate-fade-in">
              <div className="relations-head-bar">
                <div>
                  <h4 className="field-section-title">MẠNG LƯỚI QUAN HỆ SỬ THI</h4>
                  <p className="relations-lead-text">
                    Tùy chỉnh các mối thù hận, liên minh, tình ái hoặc truyền thừa sư đồ của {hero.name}.
                  </p>
                </div>

                <div className="relations-action-buttons">
                  <button
                    type="button"
                    className="minimal-btn-outline"
                    onClick={() => setIsCategoryModalOpen(true)}
                    title="Quản lý danh mục loại quan hệ"
                  >
                    <Tag size={13} />
                    <span>Danh mục ({categories.length})</span>
                  </button>
                  {!isEditingRelation && (
                    <button
                      type="button"
                      className="minimal-btn-accent"
                      onClick={handleOpenAddRelation}
                    >
                      <Plus size={13} />
                      <span>Thêm quan hệ</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Add / Edit Relation Form */}
              {isEditingRelation && (
                <div className="relation-edit-panel">
                  <div className="relation-panel-header">
                    <h5 className="panel-title">
                      {relationDraft.id ? 'CHỈNH SỬA MỐI QUAN HỆ' : 'THIẾT LẬP MỐI QUAN HỆ MỚI'}
                    </h5>
                    <button
                      type="button"
                      className="minimal-close-sm"
                      onClick={() => setIsEditingRelation(false)}
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <div className="relation-form-body">
                    {/* Target Hero Picker */}
                    <div className="form-subgroup">
                      <label className="subgroup-label">1. CHỌN TƯỚNG LIÊN HỆ:</label>
                      <div className="search-wrap-sm">
                        <Search size={13} className="search-icon-sm" />
                        <input
                          type="text"
                          className="minimal-input-field sm-input"
                          placeholder="Tìm tướng theo tên hoặc thế lực..."
                          value={targetHeroSearch}
                          onChange={(e) => setTargetHeroSearch(e.target.value)}
                        />
                      </div>

                      <div className="target-heroes-scroll custom-scrollbar">
                        {filteredOtherHeroes.map((target) => {
                          const isSelected = relationDraft.targetHeroId === target.id;
                          const tFaction = FACTIONS_DATA[target.factionId];
                          return (
                            <button
                              key={target.id}
                              type="button"
                              className={`target-hero-chip ${isSelected ? 'selected' : ''}`}
                              onClick={() =>
                                setRelationDraft((prev) => ({ ...prev, targetHeroId: target.id }))
                              }
                            >
                              <img src={target.avatarUrl} alt={target.name} className="chip-avatar" />
                              <div className="chip-info">
                                <span className="chip-name">{target.name}</span>
                                <span className="chip-fac" style={{ color: tFaction?.color }}>
                                  {tFaction?.name}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Relation Type Selector */}
                    <div className="form-subgroup">
                      <div className="subgroup-label-row">
                        <label className="subgroup-label">2. LOẠI QUAN HỆ:</label>
                        <button
                          type="button"
                          className="link-btn-sm"
                          onClick={() => setIsCategoryModalOpen(true)}
                        >
                          <Tag size={11} />
                          <span>Tạo mới danh mục</span>
                        </button>
                      </div>
                      <div className="category-chips-grid">
                        {categories.map((cat) => {
                          const isSelected = relationDraft.relationType === cat.id;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              className={`cat-select-btn ${isSelected ? 'active' : ''}`}
                              style={{
                                borderColor: isSelected ? cat.color : undefined,
                                color: isSelected ? cat.color : undefined,
                                background: isSelected ? `${cat.color}15` : undefined
                              }}
                              onClick={() =>
                                setRelationDraft((prev) => ({ ...prev, relationType: cat.id }))
                              }
                            >
                              {renderCategoryIcon(cat.iconName, 12)}
                              <span>{cat.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Relation Title / Label */}
                    <div className="form-subgroup">
                      <label className="subgroup-label">3. TIÊU ĐỀ MỐI QUAN HỆ:</label>
                      <input
                        type="text"
                        className="minimal-input-field"
                        placeholder="Ví dụ: Tử Thù Ngàn Năm, Đôi Bạn Tri Kỷ, Thầy Trò Truyền Thừa..."
                        value={relationDraft.label}
                        onChange={(e) =>
                          setRelationDraft((prev) => ({ ...prev, label: e.target.value }))
                        }
                      />
                    </div>

                    {/* Relation Description */}
                    <div className="form-subgroup">
                      <label className="subgroup-label">4. ĐIỂN TÍCH / CHI TIẾT MỐI QUAN HỆ:</label>
                      <textarea
                        className="minimal-textarea custom-scrollbar"
                        rows={3}
                        placeholder="Mô tả bối cảnh, câu chuyện, ân oán hoặc duyên nợ giữa hai nhân vật..."
                        value={relationDraft.description}
                        onChange={(e) =>
                          setRelationDraft((prev) => ({ ...prev, description: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="relation-panel-actions">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setIsEditingRelation(false)}
                    >
                      Hủy
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={handleSaveRelationDraft}
                    >
                      <Check size={13} />
                      <span>{relationDraft.id ? 'Cập Nhật Quan Hệ' : 'Thêm Vào Danh Sách'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Relations List */}
              <div className="relations-stack">
                {relations.length === 0 ? (
                  <div className="relations-empty-box">
                    <p>Hiện chưa có mối quan hệ nào cho tướng này.</p>
                    <button
                      type="button"
                      className="minimal-btn-accent"
                      onClick={handleOpenAddRelation}
                    >
                      <Plus size={13} />
                      <span>Tạo mối quan hệ đầu tiên</span>
                    </button>
                  </div>
                ) : (
                  relations.map((rel) => {
                    const otherId = rel.sourceHeroId === hero.id ? rel.targetHeroId : rel.sourceHeroId;
                    const otherHero = allOtherHeroes.find((h) => h.id === otherId);
                    const oFaction = otherHero ? FACTIONS_DATA[otherHero.factionId] : null;
                    const config = relationCategoryStore.getCategory(rel.relationType);

                    return (
                      <div key={rel.id} className="relation-item-card">
                        <div className="rel-card-left">
                          <img
                            src={otherHero?.avatarUrl || ''}
                            alt={otherHero?.name || otherId}
                            className="rel-card-avatar"
                          />
                          <div className="rel-card-info">
                            <div className="rel-name-row">
                              <span className="rel-name">{otherHero?.name || otherId}</span>
                              <span
                                className="rel-badge"
                                style={{
                                  borderColor: config.color,
                                  color: config.color,
                                  background: `${config.color}15`
                                }}
                              >
                                {renderCategoryIcon(config.iconName, 11)}
                                <span>{config.name}</span>
                              </span>
                            </div>
                            <span className="rel-faction-text" style={{ color: oFaction?.color }}>
                              {oFaction?.name || otherHero?.role}
                            </span>
                            <div className="rel-label">「{rel.label}」</div>
                            <p className="rel-desc">
                              {rel.description || 'Chưa có mô tả điển tích cho mối quan hệ này.'}
                            </p>
                          </div>
                        </div>

                        <div className="rel-card-btns">
                          <button
                            type="button"
                            className="rel-icon-btn"
                            title="Chỉnh sửa quan hệ này"
                            onClick={() => handleOpenEditRelation(rel)}
                          >
                            <Edit3 size={13} />
                            <span>Sửa</span>
                          </button>
                          <button
                            type="button"
                            className="rel-icon-btn delete"
                            title="Xóa mối quan hệ"
                            onClick={() => handleDeleteRelation(rel.id)}
                          >
                            <Trash2 size={13} />
                            <span>Xóa</span>
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Minimalist Footer Bar */}
        <div className="minimal-editor-footer">
          <div className="footer-left-buttons">
            <button
              type="button"
              className="footer-link-btn text-danger-btn"
              onClick={handleDeleteHero}
              title="Xóa vị tướng này khỏi danh bạ Athanor"
            >
              <Trash2 size={13} />
            </button>
          </div>

          <div className="footer-right-buttons">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Đóng
            </button>
            <button type="button" className="btn-primary" onClick={handleSave}>
              <Check size={14} />
              <span>Lưu & Áp Dụng Ngay</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Management Submodal */}
      <RelationCategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
      />
    </div>
  );
};
