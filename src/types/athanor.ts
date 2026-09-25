export type FactionId = 
  | 'veda' 
  | 'norman' 
  | 'afata' 
  | 'lokheim' 
  | 'carano'
  | 'tan_lien_hiep'
  | 'long_chi_quoc'
  | 'dao_suong_mu'
  | 'hai_linh_tran'
  | 'sa_mac_helios'
  | 'hoi_am_hoang'
  | 'tu_do'
  | 'okka'
  | 'unaffiliated';

export type HeroRole = 
  | 'Đấu Sĩ' 
  | 'Pháp Sư' 
  | 'Xạ Thủ' 
  | 'Sát Thủ' 
  | 'Đỡ Đòn' 
  | 'Trợ Thủ';

export interface HeroForm {
  formId: string;                  // e.g. 'mage', 'marksman'
  formName: string;                // e.g. 'Dạng Pháp Sư'
  role: HeroRole;
  avatarUrl?: string;              // Override avatar for this form
  bannerUrl?: string;              // Override banner for this form
  skills: Skill[];                 // This form's unique skill set
  source?: string;                 // e.g. 'Liên Quân Mobile', 'VGVD'
}

export interface Skill {
  slot: 'passive' | 'skill1' | 'skill2' | 'ultimate';
  name: string;
  iconUrl?: string;
  cooldown: string;
  energyCost: string;
  damageType: 'Vật lý' | 'Phép' | 'Chuẩn' | 'Hỗ trợ' | 'Hỗn hợp';
  description: string;
  comboTip?: string;
}

export interface HeroStats {
  damage: number;       // 1 - 10
  toughness: number;    // 1 - 10
  mobility: number;     // 1 - 10
  crowdControl: number; // 1 - 10
  difficulty: number;   // 1 - 10
}

export type SkinTier = 
  | 'Mặc Định'
  | 'Bậc A'
  | 'Bậc S'
  | 'Bậc S+'
  | 'Bậc SS'
  | 'Bậc SSS'
  | 'Tuyệt Sắc'
  | 'Thứ Nguyên Vệ Thần'
  | 'Hạn Chế'
  | 'Tiệc Bãi Biển'
  | 'Collab'
  | 'FMVP'
  | 'Quán Quân'
  | 'Học Đường'
  | 'Thưởng Hạng'
  | 'Hạn Định';

export interface HeroSkin {
  id: string;
  name: string;
  tier?: SkinTier | string;
  bannerUrl: string;
  avatarUrl?: string;
  quote?: string;
  description?: string;
  releaseYear?: string;
  effects?: string[];
}

export interface SecretProfile {
  organizationRole: string; // Vai trò trong hội / bang phái / tổ chức
  otherStory: string;       // Câu chuyện khác / giai thoại bên lề
  secret: string;           // Bí mật của tướng đó
}

export interface Hero {
  id: string;
  name: string;
  title: string;
  factionId: FactionId;
  role: HeroRole;
  secondaryRole?: HeroRole;
  avatarUrl: string;
  bannerUrl: string;
  quote: string;
  stats: HeroStats;
  skills: Skill[];
  lore: string;
  battleTips: string[];
  recommendedItems: string[];
  relatedHeroIds: string[];
  skins?: HeroSkin[];

  // Đa hình thái (dành cho tướng như Flowborn có nhiều dạng)
  altForms?: HeroForm[];           // Các hình thái LQ hiện tại (ngoài form chính)
  vgvdForms?: string[];            // Tên các hình thái tướng đã có trong VGVD

  // Hồ sơ nhân trắc & Bí mật sử thi
  birthplace?: string;
  birthday?: string;
  height?: string;
  secretProfile?: SecretProfile;
  specialLore?: string;

  // Video Tâm Điểm Tướng (YouTube embed hoặc video ID/URL)
  spotlightVideoUrl?: string;
}

export interface Faction {
  id: FactionId;
  name: string;
  englishName: string;
  subtitle: string;
  leader: string;
  territory: string;
  description: string;
  lore: string;
  ideals: string[];
  color: string;
  secondaryColor: string;
  bannerUrl: string;
  logoUrl?: string;
  emblemUrl?: string;
  coordinates3D: [number, number, number];
  keyLandmarks: string[];
  heroIds: string[];
}

export interface RelationCategory {
  id: string;
  name: string;
  color: string;
  iconName: string;
  description?: string;
  isDefault?: boolean;
}

export interface LoreRelation {
  id: string;
  sourceHeroId: string;
  targetHeroId: string;
  relationType: 'enemy' | 'ally' | 'rival' | 'love' | 'mentor' | 'kin' | string;
  label: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  desc: string;
  category: 'war' | 'magic' | 'tragedy' | 'oracle' | 'treaty';
  yearOrEpoch?: string;
  mapTarget?: {
    x: number;
    y: number;
    locationName: string;
    landmarkId?: string;
  };
}

export interface EraClash {
  leftHeroId: string;
  rightHeroId: string;
  title: string;
  desc: string;
  powerBalance: number; // 0 - 100 (e.g. 50 is balance)
  leftFactionTitle: string;
  rightFactionTitle: string;
}

export interface EraSecretLore {
  id: string;
  title: string;
  sealType: 'veda_wax' | 'lokheim_abyss' | 'carano_arcane' | 'afata_nature' | 'dragon_seal';
  content: string;
  revealHint: string;
  authorOrSource: string;
}

export interface TimelineEra {
  id: string;
  eraName: string;
  period: string;
  title: string;
  summary: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  bannerUrl?: string;
  themeColor?: string;
  clash?: EraClash;
  secretLore?: EraSecretLore;
  majorEvents: (string | TimelineEvent)[];
  featuredHeroIds: string[];
  keyFactionId: FactionId;
}
