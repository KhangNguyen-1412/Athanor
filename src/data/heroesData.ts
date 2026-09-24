import type { Hero } from '../types/athanor';
import { VEDA_HEROES as RAW_VEDA_HEROES } from './heroes/vedaHeroes';
import { LOKHEIM_HEROES as RAW_LOKHEIM_HEROES } from './heroes/lokheimHeroes';
import { AFATA_HEROES as RAW_AFATA_HEROES } from './heroes/afataHeroes';
import { NORMAN_HEROES as RAW_NORMAN_HEROES } from './heroes/normanHeroes';
import { CARANO_HEROES as RAW_CARANO_HEROES } from './heroes/caranoHeroes';
import { EASTERN_HEROES as RAW_EASTERN_HEROES } from './heroes/easternHeroes';
import { HERO_DOSSIERS } from './dossier';

const enrichHero = (hero: Hero): Hero => {
  const dossier = HERO_DOSSIERS[hero.id];
  if (!dossier) return hero;
  return {
    ...hero,
    birthplace: dossier.birthplace,
    birthday: dossier.birthday,
    height: dossier.height,
    secretProfile: dossier.secretProfile,
    specialLore: dossier.specialLore,
  };
};

export const VEDA_HEROES: Hero[] = RAW_VEDA_HEROES.map(enrichHero);
export const LOKHEIM_HEROES: Hero[] = RAW_LOKHEIM_HEROES.map(enrichHero);
export const AFATA_HEROES: Hero[] = RAW_AFATA_HEROES.map(enrichHero);
export const NORMAN_HEROES: Hero[] = RAW_NORMAN_HEROES.map(enrichHero);
export const CARANO_HEROES: Hero[] = RAW_CARANO_HEROES.map(enrichHero);
export const EASTERN_HEROES: Hero[] = RAW_EASTERN_HEROES.map(enrichHero);

/**
 * Danh mục toàn bộ 129 Tướng của Liên Quân Mobile trong Thế Giới Athanor
 * Được bổ sung đầy đủ:
 * - Nơi sinh, Sinh nhật, Chiều cao
 * - Hồ sơ mật (Vai trò trong hội, Câu chuyện khác, Bí mật của tướng)
 * - Cốt truyện đặc biệt của mỗi tướng
 */
export const HEROES_DATA: Hero[] = [
  ...VEDA_HEROES,
  ...LOKHEIM_HEROES,
  ...AFATA_HEROES,
  ...NORMAN_HEROES,
  ...CARANO_HEROES,
  ...EASTERN_HEROES,
];

export { HERO_DOSSIERS };

