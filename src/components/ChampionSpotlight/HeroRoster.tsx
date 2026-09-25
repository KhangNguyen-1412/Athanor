import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Hero, FactionId, HeroRole } from '../../types/athanor';
import { HEROES_DATA } from '../../data/heroesData';
import { FACTIONS_DATA } from '../../data/factionsData';
import { getHeroSkins } from '../../data/skinsData';
import { heroCustomStore } from '../../utils/heroCustomStore';
import { Search, X, RotateCcw, SlidersHorizontal, Trash2 } from 'lucide-react';
import { EditorialDropdown, type DropdownOption } from '../common/EditorialDropdown';
import './HeroRoster.css';

// Arthur, Moren, and Rourke are historically and lore-wise the core heroes of Vương Quốc Okka
export const OKKA_HERO_IDS = new Set(['arthur', 'moren', 'rourke']);

export const matchesFaction = (hero: Hero, targetFaction: FactionId | 'all'): boolean => {
  if (targetFaction === 'all') return true;

  if (targetFaction === 'okka') {
    return OKKA_HERO_IDS.has(hero.id);
  }

  // Vương quốc Norman: Học viện ma pháp Carano. Sa mạc Helios và Hải linh trấn thuộc quyền cai trị của Vương quốc Norman.
  if (targetFaction === 'norman') {
    return (
      hero.factionId === 'norman' ||
      hero.factionId === 'carano' ||
      hero.factionId === 'sa_mac_helios' ||
      hero.factionId === 'hai_linh_tran'
    ) && !OKKA_HERO_IDS.has(hero.id);
  }

  // Vực hỗn mang (không bao gồm Hội Ám Hoàng vì Hội Ám Hoàng thuộc Liên Bang Tự Do)
  if (targetFaction === 'lokheim') {
    return hero.factionId === 'lokheim';
  }

  // Liên bang tự do bao gồm: Hội ám hoàng và các tướng khác.
  if (targetFaction === 'tan_lien_hiep') {
    return (
      hero.factionId === 'tan_lien_hiep' ||
      (hero.factionId as string) === 'tan-lien-hiep' ||
      hero.factionId === 'hoi_am_hoang'
    );
  }

  if (targetFaction === 'afata') {
    return hero.factionId === 'afata';
  }

  // Tháp quang minh bao gồm đảo sương mù nữa
  if (targetFaction === 'veda') {
    return hero.factionId === 'veda' || hero.factionId === 'dao_suong_mu';
  }

  // Vương Quốc Rồng (Long Trì Quốc)
  if (targetFaction === 'long_chi_quoc') {
    return hero.factionId === 'long_chi_quoc';
  }

  // Không thuộc thế lực nào (Vô thế lực / Lãng khách / DC Superheroes / Dị giới)
  if (targetFaction === 'unaffiliated') {
    const isVeda = hero.factionId === 'veda' || hero.factionId === 'dao_suong_mu';
    const isLokheim = hero.factionId === 'lokheim';
    const isAfata = hero.factionId === 'afata';
    const isNorman = (
      hero.factionId === 'norman' ||
      hero.factionId === 'carano' ||
      hero.factionId === 'sa_mac_helios' ||
      hero.factionId === 'hai_linh_tran'
    ) && !OKKA_HERO_IDS.has(hero.id);
    const isOkka = OKKA_HERO_IDS.has(hero.id);
    const isTanLienHiep = (
      hero.factionId === 'tan_lien_hiep' ||
      (hero.factionId as string) === 'tan-lien-hiep' ||
      hero.factionId === 'hoi_am_hoang'
    );
    const isLongChiQuoc = hero.factionId === 'long_chi_quoc';
    return !isVeda && !isLokheim && !isAfata && !isNorman && !isOkka && !isTanLienHiep && !isLongChiQuoc;
  }

  return hero.factionId === targetFaction;
};

export const getHeroPrimaryFactionName = (hero: Hero): string => {
  if (OKKA_HERO_IDS.has(hero.id)) return 'Vương Quốc Okka';
  if (hero.factionId === 'veda' || hero.factionId === 'dao_suong_mu') {
    return hero.factionId === 'dao_suong_mu' ? 'Tháp Quang Minh (Đảo Sương Mù)' : 'Tháp Quang Minh (Veda)';
  }
  if (hero.factionId === 'norman' || hero.factionId === 'carano' || hero.factionId === 'sa_mac_helios' || hero.factionId === 'hai_linh_tran') {
    if (hero.factionId === 'carano') return 'Vương Quốc Norman (Carano)';
    if (hero.factionId === 'sa_mac_helios') return 'Vương Quốc Norman (Helios)';
    if (hero.factionId === 'hai_linh_tran') return 'Vương Quốc Norman (Hải Linh)';
    return 'Vương Quốc Norman';
  }
  if (hero.factionId === 'tan_lien_hiep' || (hero.factionId as string) === 'tan-lien-hiep' || hero.factionId === 'hoi_am_hoang') {
    if (hero.factionId === 'hoi_am_hoang') return 'Liên Bang Tự Do (Hội Ám Hoàng)';
    return 'Liên Bang Tự Do';
  }
  if (hero.factionId === 'lokheim') return 'Vực Hỗn Mang (Lokheim)';
  if (hero.factionId === 'afata') return 'Rừng Nguyên Sinh (Afata)';
  if (hero.factionId === 'long_chi_quoc') return 'Vương Quốc Rồng (Long Trì)';
  return 'Lãng Khách / Tự Do';
};

// Royal Celestial Star Emblem for Wanderers / Neutral Heroes
const NeutralFactionEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 44, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 2px 6px rgba(180, 140, 54, 0.35))' }}
  >
    <defs>
      <linearGradient id="neutralGoldGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="45%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#92691e" />
      </linearGradient>
      <radialGradient id="neutralCenterGlow" cx="32" cy="32" r="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c084fc" stopOpacity="0.25" />
        <stop offset="60%" stopColor="#7e22ce" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#neutralCenterGlow)" stroke="url(#neutralGoldGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="32" cy="32" r="23" stroke="url(#neutralGoldGrad)" strokeWidth="0.8" strokeOpacity="0.6" />
    <path
      d="M32 6 L35.5 25.5 L55 22 L38.5 32 L55 42 L35.5 38.5 L32 58 L28.5 38.5 L9 42 L25.5 32 L9 22 L28.5 25.5 Z"
      fill="url(#neutralGoldGrad)"
      stroke="#ffffff"
      strokeWidth="0.4"
      strokeOpacity="0.5"
    />
    <circle cx="32" cy="32" r="5" fill="#ffffff" />
    <circle cx="32" cy="32" r="3.2" fill="#7e22ce" />
    <circle cx="32" cy="32" r="1.5" fill="#fef08a" />
  </svg>
);

export interface FactionShowcaseConfig {
  id: FactionId;
  name: string;
  shortName: string;
  motto: string;
  logoUrl?: string;
  fallbackUrl?: string;
  color: string;
  isNeutral?: boolean;
}

export const FACTION_SHOWCASE_ITEMS: FactionShowcaseConfig[] = [
  {
    id: 'veda',
    name: 'Tháp Quang Minh',
    shortName: 'Veda',
    motto: 'Thánh Địa Ánh Sáng & Đảo Sương Mù',
    logoUrl: '/theluc/Tháp quang minh.png',
    fallbackUrl: '/theluc/veda.png',
    color: '#0284c7',
  },
  {
    id: 'lokheim',
    name: 'Vực Hỗn Mang',
    shortName: 'Lokheim',
    motto: 'Vương Triều Sa Đọa & Vực Thẳm',
    logoUrl: '/theluc/Vực hỗn mang.png',
    fallbackUrl: '/theluc/lokheim.png',
    color: '#dc2626',
  },
  {
    id: 'afata',
    name: 'Rừng Nguyên Sinh',
    shortName: 'Afata',
    motto: 'Suối Nguồn Sinh Mệnh & Tinh Linh',
    logoUrl: '/theluc/Rừng nguyên sinh.png',
    fallbackUrl: '/theluc/afata.png',
    color: '#059669',
  },
  {
    id: 'norman',
    name: 'Vương Quốc Norman',
    shortName: 'Norman',
    motto: 'Norman, Carano, Helios & Hải Linh',
    logoUrl: '/theluc/Vương quốc Norman.png',
    fallbackUrl: '/theluc/norman.png',
    color: '#2563eb',
  },
  {
    id: 'okka',
    name: 'Vương Quốc Okka',
    shortName: 'Okka',
    motto: 'Dãy Núi Thép & Hiệp Sĩ',
    logoUrl: '/theluc/Vương quốc Okka.png',
    fallbackUrl: '/theluc/okka.png',
    color: '#d97706',
  },
  {
    id: 'tan_lien_hiep',
    name: 'Liên Bang Tự Do',
    shortName: 'Liên Bang',
    motto: 'Cơ Giới Mildar & Hội Ám Hoàng',
    logoUrl: '/theluc/Liên bang tự do.png',
    fallbackUrl: '/theluc/tanlienhiep.png',
    color: '#0891b2',
  },
  {
    id: 'long_chi_quoc',
    name: 'Vương Quốc Rồng',
    shortName: 'Long Trì',
    motto: 'Đất Thánh Huyết Long & Quyền Bá Vương',
    logoUrl: '/theluc/Vương quốc rồng.png',
    fallbackUrl: '/theluc/vuongquocrong.png',
    color: '#ea580c',
  },
  {
    id: 'unaffiliated',
    name: 'Không Thuộc Thế Lực',
    shortName: 'Lãng Khách',
    motto: 'Lãng Khách, Du Hiệp & Dị Giới',
    color: '#9333ea',
    isNeutral: true,
  },
];

interface HeroRosterProps {
  onSelectHero: (hero: Hero) => void;
}

type SortKey = 'default' | 'name_asc' | 'name_desc' | 'damage' | 'mobility' | 'difficulty' | 'toughness';

export const HeroRoster: React.FC<HeroRosterProps> = ({ onSelectHero }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaction, setSelectedFaction] = useState<FactionId | 'all'>('all');
  const [selectedRole, setSelectedRole] = useState<HeroRole | 'all'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('default');
  const [overrideVersion, setOverrideVersion] = useState<number>(0);
  const [showDeletedModal, setShowDeletedModal] = useState<boolean>(false);

  // Faction Wheel Hovered Node Popover state (Kế bên, không phải modal)
  const [hoveredFactionId, setHoveredFactionId] = useState<FactionId | null>(null);
  const [hoveredOrbitHero, setHoveredOrbitHero] = useState<Hero | null>(null);
  const factionHoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Minimalist Hero Grid Hover Popover state (Khi tìm kiếm)
  const [hoveredHero, setHoveredHero] = useState<Hero | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number; placeAbove: boolean } | null>(null);

  useEffect(() => {
    const handleUpdate = () => setOverrideVersion((v) => v + 1);
    window.addEventListener('athanor-hero-updated', handleUpdate);
    return () => window.removeEventListener('athanor-hero-updated', handleUpdate);
  }, []);

  const roles: HeroRole[] = ['Đấu Sĩ', 'Pháp Sư', 'Xạ Thủ', 'Sát Thủ', 'Đỡ Đòn', 'Trợ Thủ'];

  const allHeroes = useMemo(() => {
    void overrideVersion;
    return heroCustomStore.getActiveHeroes(HEROES_DATA);
  }, [overrideVersion]);

  const deletedHeroes = useMemo(() => {
    void overrideVersion;
    return heroCustomStore.getDeletedHeroes(HEROES_DATA);
  }, [overrideVersion]);

  // Group heroes by faction
  const factionHeroGroups = useMemo(() => {
    const map = new Map<FactionId, Hero[]>();
    FACTION_SHOWCASE_ITEMS.forEach((f) => {
      map.set(f.id, allHeroes.filter((h) => matchesFaction(h, f.id)));
    });
    return map;
  }, [allHeroes]);

  // Role counts
  const roleCounts = useMemo(() => {
    const counts: Record<string, number> = { all: 0 };
    for (const h of allHeroes) {
      if (selectedFaction !== 'all' && !matchesFaction(h, selectedFaction)) {
        continue;
      }
      counts.all = (counts.all || 0) + 1;
      if (h.role) counts[h.role] = (counts[h.role] || 0) + 1;
      if (h.secondaryRole && h.secondaryRole !== h.role) {
        counts[h.secondaryRole] = (counts[h.secondaryRole] || 0) + 1;
      }
    }
    return counts;
  }, [allHeroes, selectedFaction]);

  const getRoleCount = (role: string) => roleCounts[role] || 0;

  // Dropdown options for Factions
  const factionOptions: DropdownOption[] = useMemo(() => {
    const opts: DropdownOption[] = [
      {
        value: 'all',
        label: 'TẤT CẢ THẾ LỰC',
        badge: allHeroes.length,
      }
    ];

    FACTION_SHOWCASE_ITEMS.forEach((f) => {
      const count = allHeroes.filter((h) => matchesFaction(h, f.id)).length;
      opts.push({
        value: f.id,
        label: f.name,
        color: f.color,
        badge: count,
      });
    });

    return opts;
  }, [allHeroes]);

  // Dropdown options for Roles
  const roleOptions: DropdownOption[] = useMemo(() => {
    const opts: DropdownOption[] = [
      { value: 'all', label: 'TẤT CẢ VAI TRÒ', badge: getRoleCount('all') }
    ];
    roles.forEach((r) => {
      opts.push({
        value: r,
        label: r,
        badge: getRoleCount(r),
      });
    });
    return opts;
  }, [allHeroes, selectedFaction, roleCounts]);

  // Dropdown options for Sorting
  const sortOptions: DropdownOption<SortKey>[] = [
    { value: 'default', label: 'Sắp xếp: Mặc định' },
    { value: 'name_asc', label: 'Tên tướng (A → Z)' },
    { value: 'name_desc', label: 'Tên tướng (Z → A)' },
    { value: 'damage', label: 'Sát thương cao nhất' },
    { value: 'mobility', label: 'Độ cơ động cao nhất' },
    { value: 'toughness', label: 'Độ chống chịu cao nhất' },
    { value: 'difficulty', label: 'Độ khó cao nhất' },
  ];

  // Trạng thái tìm kiếm: Khi người dùng gõ tên hoặc lọc vai trò
  const isSearching = searchQuery.trim() !== '' || selectedRole !== 'all';
  const hasActiveFilters = isSearching || selectedFaction !== 'all' || sortKey !== 'default';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedFaction('all');
    setSelectedRole('all');
    setSortKey('default');
    setHoveredFactionId(null);
  };

  // Filter and sort heroes (Chỉ dùng khi tìm kiếm)
  const filteredHeroes = useMemo(() => {
    if (!isSearching && selectedFaction === 'all') return [];

    let result = allHeroes.filter((hero) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === '' ||
        hero.name.toLowerCase().includes(q) ||
        hero.title.toLowerCase().includes(q) ||
        (hero.birthplace && hero.birthplace.toLowerCase().includes(q)) ||
        (hero.secretProfile && hero.secretProfile.organizationRole.toLowerCase().includes(q));

      const matchFaction = selectedFaction === 'all' || matchesFaction(hero, selectedFaction);
      const matchRole =
        selectedRole === 'all' ||
        hero.role === selectedRole ||
        hero.secondaryRole === selectedRole;

      return matchSearch && matchFaction && matchRole;
    });

    switch (sortKey) {
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
        break;
      case 'name_desc':
        result.sort((a, b) => b.name.localeCompare(a.name, 'vi'));
        break;
      case 'damage':
        result.sort((a, b) => b.stats.damage - a.stats.damage);
        break;
      case 'mobility':
        result.sort((a, b) => b.stats.mobility - a.stats.mobility);
        break;
      case 'toughness':
        result.sort((a, b) => b.stats.toughness - a.stats.toughness);
        break;
      case 'difficulty':
        result.sort((a, b) => b.stats.difficulty - a.stats.difficulty);
        break;
      default:
        break;
    }

    return result;
  }, [allHeroes, searchQuery, selectedFaction, selectedRole, sortKey, isSearching]);

  // Faction Wheel Node coordinates & layout (Bản đồ vòng tròn to hơn & motion di chuyển vào giữa)
  const factionWheelNodes = useMemo(() => {
    const radius = 225;
    const center = 280;
    const total = FACTION_SHOWCASE_ITEMS.length;

    return FACTION_SHOWCASE_ITEMS.map((item, index) => {
      const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
      const perimeterX = center + radius * Math.cos(angle);
      const perimeterY = center + radius * Math.sin(angle);
      const count = (factionHeroGroups.get(item.id) || []).length;
      
      const isSelected = selectedFaction === item.id;
      // Khi chọn thế lực này: Tọa độ chuyển động về tâm (280, 280)
      const x = isSelected ? center : perimeterX;
      const y = isSelected ? center : perimeterY;

      // Smart placement for beside-popup
      let side: 'left' | 'right' = 'right';
      let vAlign: 'top' | 'center' | 'bottom' = 'center';

      if (isSelected) {
        // Khi ở giữa, popup kế bên mở sang phải một cách chuẩn mực
        side = 'right';
        vAlign = 'center';
      } else {
        if (index === 0) { side = 'right'; vAlign = 'top'; }
        else if (index === 1) { side = 'right'; vAlign = 'top'; }
        else if (index === 2) { side = 'right'; vAlign = 'center'; }
        else if (index === 3) { side = 'right'; vAlign = 'bottom'; }
        else if (index === 4) { side = 'right'; vAlign = 'bottom'; }
        else if (index === 5) { side = 'left'; vAlign = 'bottom'; }
        else if (index === 6) { side = 'left'; vAlign = 'center'; }
        else if (index === 7) { side = 'left'; vAlign = 'top'; }
      }

      return { 
        ...item, 
        x, 
        y, 
        perimeterX, 
        perimeterY, 
        count, 
        side, 
        vAlign, 
        index,
        isSelected,
      };
    });
  }, [factionHeroGroups, selectedFaction]);

  // Faction Node Hover Handlers (Hiện popup kế bên)
  const handleFactionNodeMouseEnter = (factionId: FactionId) => {
    if (factionHoverTimerRef.current) {
      clearTimeout(factionHoverTimerRef.current);
      factionHoverTimerRef.current = null;
    }
    setHoveredFactionId(factionId);
    setHoveredOrbitHero(null);
  };

  const handleFactionNodeMouseLeave = () => {
    if (factionHoverTimerRef.current) {
      clearTimeout(factionHoverTimerRef.current);
    }
    factionHoverTimerRef.current = setTimeout(() => {
      setHoveredFactionId(null);
      setHoveredOrbitHero(null);
    }, 240);
  };

  const handlePopupMouseEnter = () => {
    if (factionHoverTimerRef.current) {
      clearTimeout(factionHoverTimerRef.current);
      factionHoverTimerRef.current = null;
    }
  };

  const handlePopupMouseLeave = () => {
    handleFactionNodeMouseLeave();
  };

  // Hero Avatar Hover Handlers (Khi tìm kiếm)
  const handleHeroMouseEnter = (hero: Hero, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const placeAbove = rect.top > 250;
    setHoveredHero(hero);
    setHoverPosition({
      x: rect.left + rect.width / 2,
      y: placeAbove ? rect.top - 8 : rect.bottom + 8,
      placeAbove,
    });
  };

  const handleHeroMouseLeave = () => {
    setHoveredHero(null);
    setHoverPosition(null);
  };

  return (
    <div className="hero-roster-page">
      {/* Folio Masthead */}
      <header className="roster-masthead-minimal">
        <div className="masthead-center-col">
          <div className="masthead-badge-row">
            <span className="masthead-eyebrow">ĐẠI LỤC ATHANOR // DANH BẠ ANH HÙNG</span>
          </div>
          <h1 className="masthead-serif-title">Bách Khoa Toàn Thư Tướng</h1>
          <p className="masthead-serif-sub">
            Rê chuột vào logo thế lực để xem các tướng trực thuộc xếp theo vòng tròn.
          </p>
        </div>
      </header>

      {/* MINIMALIST SEARCH & FILTER TOOLBAR */}
      <section className="roster-toolbar-minimal">
        <div className="toolbar-inner-wrap">
          {/* Input Tìm Kiếm */}
          <div className="minimal-search-box">
            <Search size={15} className="search-box-icon" />
            <input
              type="text"
              placeholder="Tìm tướng theo tên, danh hiệu, chức vụ, nơi sinh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-box-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                title="Xóa tìm kiếm"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Nhóm Dropdown */}
          <div className="toolbar-dropdowns-row">
            {/* Dropdown Thế Lực */}
            <div className="dropdown-cell">
              <EditorialDropdown
                options={factionOptions}
                value={selectedFaction}
                onChange={(val) => {
                  const fId = val as FactionId | 'all';
                  setSelectedFaction(fId);
                  if (fId !== 'all') {
                    setHoveredFactionId(fId);
                  }
                }}
                placeholder="TẤT CẢ THẾ LỰC"
              />
            </div>

            {/* Dropdown Vai Trò */}
            <div className="dropdown-cell">
              <EditorialDropdown
                options={roleOptions}
                value={selectedRole}
                onChange={(val) => setSelectedRole(val as HeroRole | 'all')}
                placeholder="TẤT CẢ VAI TRÒ"
              />
            </div>

            {/* Dropdown Sắp Xếp */}
            <div className="dropdown-cell">
              <EditorialDropdown
                options={sortOptions}
                value={sortKey}
                onChange={(val) => setSortKey(val as SortKey)}
                placeholder="SẮP XẾP..."
              />
            </div>

            {/* Nút Đặt Lại */}
            {hasActiveFilters && (
              <button
                type="button"
                className="toolbar-reset-btn"
                onClick={resetFilters}
                title="Đặt lại toàn bộ bộ lọc"
              >
                <RotateCcw size={13} />
                <span>Đặt lại</span>
              </button>
            )}
          </div>

          {/* Counter info */}
          <div className="toolbar-counter-cell">
            <span className="counter-text">
              {isSearching ? (
                <>Tìm thấy <strong>{filteredHeroes.length}</strong> / {allHeroes.length} tướng</>
              ) : (
                <>Tổng số <strong>{allHeroes.length}</strong> vị tướng</>
              )}
            </span>
          </div>
        </div>

        {/* Active Filter Tags */}
        {hasActiveFilters && (
          <div className="toolbar-active-tags-strip">
            <span className="tags-label">
              <SlidersHorizontal size={11} />
              Đang lọc:
            </span>

            {searchQuery.trim() !== '' && (
              <span className="active-tag-chip">
                "{searchQuery}"
                <button type="button" onClick={() => setSearchQuery('')} className="tag-remove-btn">
                  <X size={11} />
                </button>
              </span>
            )}

            {selectedRole !== 'all' && (
              <span className="active-tag-chip">
                Vai trò: {selectedRole}
                <button type="button" onClick={() => setSelectedRole('all')} className="tag-remove-btn">
                  <X size={11} />
                </button>
              </span>
            )}

            {selectedFaction !== 'all' && (() => {
              const activeFaction = FACTION_SHOWCASE_ITEMS.find((f) => f.id === selectedFaction);
              return (
                <span className="active-tag-chip">
                  Thế lực: {activeFaction?.name || selectedFaction}
                  <button type="button" onClick={() => setSelectedFaction('all')} className="tag-remove-btn">
                    <X size={11} />
                  </button>
                </span>
              );
            })()}

            <button type="button" className="tags-clear-all" onClick={resetFilters}>
              Xóa lọc
            </button>
          </div>
        )}
      </section>

      {/* 
        CHỈ HIỂN THỊ KẾT QUẢ KHI TÌM KIẾM
        MẶC ĐỊNH HOÀN TOÀN KHÔNG CÓ DANH SÁCH 130 TƯỚNG!
      */}
      {isSearching ? (
        <main className="roster-search-results-section animate-fade-in">
          <div className="search-results-header">
            <div>
              <span className="results-lead">KẾT QUẢ TRA CỨU</span>
              <h3 className="results-query-title">
                {searchQuery ? `Từ khóa: "${searchQuery}"` : `Phân lớp: ${selectedRole}`}
                <span className="results-count-badge">({filteredHeroes.length} tướng)</span>
              </h3>
            </div>
            <button type="button" className="close-search-btn" onClick={resetFilters}>
              <X size={14} />
              <span>Quay lại Vòng tròn Thế lực</span>
            </button>
          </div>

          {filteredHeroes.length === 0 ? (
            <div className="empty-search-state">
              <p className="empty-message">Không tìm thấy vị tướng nào phù hợp với từ khóa.</p>
              <button type="button" className="empty-reset-btn" onClick={resetFilters}>
                Quay lại Vòng tròn Thế lực
              </button>
            </div>
          ) : (
            <div className="minimal-search-avatar-grid">
              {filteredHeroes.map((hero) => (
                <button
                  key={hero.id}
                  type="button"
                  className="minimal-hero-avatar-btn"
                  onMouseEnter={(e) => handleHeroMouseEnter(hero, e)}
                  onMouseLeave={handleHeroMouseLeave}
                  onClick={() => onSelectHero(hero)}
                >
                  <div className="minimal-avatar-frame">
                    <img
                      src={hero.avatarUrl}
                      alt={hero.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = '/champions/default.png';
                      }}
                      className="minimal-avatar-img"
                    />
                    <span className="minimal-avatar-ring" />
                  </div>
                  <span className="minimal-hero-name">{hero.name}</span>
                </button>
              ))}
            </div>
          )}
        </main>
      ) : (
        /* VÒNG TRÒN LOGO CÁC THẾ LỰC (CIRCULAR FACTION WHEEL) - TRUNG TÂM DUY NHẤT */
        <section className="faction-wheel-section animate-fade-in">
          <div className="faction-wheel-container">
            {/* Astrolabe Background Circles (Kích thước lớn hơn, bao quát toàn diện) */}
            <svg className="faction-wheel-svg" viewBox="0 0 560 560" aria-hidden="true">
              <circle cx="280" cy="280" r="225" className="wheel-track-outer" />
              <circle cx="280" cy="280" r="135" className="wheel-track-inner" />
              <line x1="280" y1="20" x2="280" y2="540" className="wheel-axis" />
              <line x1="20" y1="280" x2="540" y2="280" className="wheel-axis" />
            </svg>

            {/* Center Hub (Tự động mờ đi khi có 1 thế lực di chuyển vào giữa) */}
            <div 
              className={`faction-wheel-center-hub ${selectedFaction !== 'all' ? 'is-faded-out' : ''}`}
              onClick={() => setSelectedFaction('all')}
              title="8 Đại Thế Lực Athanor"
            >
              <div className="wheel-hub-crest">
                <img src="/lienquan-gold-logo.png" alt="Athanor" className="hub-crest-logo" />
              </div>
              <span className="wheel-hub-title">Đại Lục Athanor</span>
              <span className="wheel-hub-sub">8 Đại Thế Lực</span>
              <span className="wheel-hub-hint">Rê chuột vào logo xem tướng</span>
            </div>

            {/* 8 Faction Nodes positioned circularly */}
            {factionWheelNodes.map((item) => {
              const isSelected = selectedFaction === item.id;
              const isDimmed = selectedFaction !== 'all' && !isSelected;
              const isHovered = hoveredFactionId === item.id;
              const isShowPopover = (isHovered || isSelected) && (!hoveredFactionId || hoveredFactionId === item.id);
              const factionHeroes = factionHeroGroups.get(item.id) || [];

              return (
                <div
                  key={item.id}
                  className={`faction-wheel-node-wrap ${isHovered ? 'is-active is-hovered' : ''} ${isSelected ? 'is-in-center' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                  style={{
                    left: `${item.x}px`,
                    top: `${item.y}px`,
                  }}
                  onMouseEnter={() => handleFactionNodeMouseEnter(item.id)}
                  onMouseLeave={handleFactionNodeMouseLeave}
                >
                  {/* Faction Circular Button */}
                  <button
                    type="button"
                    className="faction-wheel-node-btn"
                    onClick={() => {
                      if (selectedFaction === item.id) {
                        setSelectedFaction('all');
                      } else {
                        setSelectedFaction(item.id);
                        setHoveredFactionId(item.id);
                      }
                    }}
                    title={
                      isSelected
                        ? `${item.name} đang ở vị trí trung tâm. Nhấp để trở lại vòng tròn.`
                        : `${item.name} (${item.count} tướng). Nhấp để di chuyển vào trung tâm.`
                    }
                  >
                    <div className="wheel-node-badge-wrap">
                      {item.isNeutral ? (
                        <NeutralFactionEmblem size={72} />
                      ) : (
                        <img
                          src={encodeURI(item.logoUrl!)}
                          alt={item.name}
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            if (item.fallbackUrl) target.src = item.fallbackUrl;
                          }}
                          className="wheel-node-logo"
                        />
                      )}
                      <span className="wheel-node-count">{item.count}</span>
                    </div>
                    <span className="wheel-node-label">
                      {item.shortName}
                      {isSelected && <span className="label-center-tag"> • ✕ Thu hồi</span>}
                    </span>
                  </button>

                  {/* 
                    POPUP CỦA THẾ LỰC KẾ BÊN (KHÔNG PHẢI MODAL) 
                    CHỨA CÁC TƯỚNG SẮP XẾP THEO DẠNG VÒNG TRÒN
                  */}
                  {isShowPopover && (
                    <div
                      className={`faction-beside-popover side-${item.side} valign-${item.vAlign}`}
                      onMouseEnter={handlePopupMouseEnter}
                      onMouseLeave={handlePopupMouseLeave}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Notch Arrow pointing back to the logo */}
                      <div className={`beside-popover-notch notch-${item.side}`} />

                      {/* Header of Popup */}
                      <div className="beside-popover-header">
                        <div className="beside-header-title-row">
                          {item.isNeutral ? (
                            <NeutralFactionEmblem size={24} />
                          ) : (
                            <img
                              src={encodeURI(item.logoUrl!)}
                              alt={item.name}
                              className="beside-mini-logo"
                            />
                          )}
                          <span className="beside-faction-name">{item.name}</span>
                          <span className="beside-count-pill">{factionHeroes.length} Tướng</span>
                          {isSelected && (
                            <button
                              type="button"
                              className="beside-close-center-btn"
                              onClick={() => setSelectedFaction('all')}
                              title="Trở lại toàn bộ thế lực"
                            >
                              <X size={12} />
                            </button>
                          )}
                        </div>
                        <p className="beside-faction-motto">{item.motto}</p>
                      </div>

                      {/* Orbit Arena (Danh sách tướng sắp xếp theo dạng vòng tròn) */}
                      <div className="beside-orbit-container">
                        <svg className="beside-orbit-svg" viewBox="0 0 380 380" aria-hidden="true">
                          <circle cx="190" cy="190" r={factionHeroes.length > 12 ? 150 : 146} className="orbit-track-outer" />
                          {factionHeroes.length > 12 && (
                            <circle cx="190" cy="190" r="92" className="orbit-track-inner" />
                          )}
                        </svg>

                        {/* Center Hub inside Popover */}
                        <div className={`beside-center-preview ${factionHeroes.length > 12 ? 'is-dense' : ''}`}>
                          {hoveredOrbitHero ? (
                            <div className="beside-hero-preview-state animate-fade-in">
                              <img 
                                src={hoveredOrbitHero.avatarUrl} 
                                alt={hoveredOrbitHero.name} 
                                className="preview-mini-avatar" 
                              />
                              <span className="preview-name">{hoveredOrbitHero.name}</span>
                              <span className="preview-role">{hoveredOrbitHero.role}</span>
                              <span className="preview-hint">Nhấp xem chi tiết →</span>
                            </div>
                          ) : (
                            <div className="beside-faction-default-state animate-fade-in">
                              {item.isNeutral ? (
                                <NeutralFactionEmblem size={34} />
                              ) : (
                                <img
                                  src={encodeURI(item.logoUrl!)}
                                  alt={item.name}
                                  className="preview-default-logo"
                                />
                              )}
                              <span className="preview-orbit-prompt">Rê vào tướng</span>
                            </div>
                          )}
                        </div>

                        {/* Heroes positioned circularly */}
                        {factionHeroes.map((hero, k) => {
                          const total = factionHeroes.length;
                          let x = 190;
                          let y = 190;
                          let isOuter = true;

                          if (total <= 12) {
                            const r = 146;
                            const angle = -Math.PI / 2 + (k * 2 * Math.PI) / total;
                            x = 190 + r * Math.cos(angle);
                            y = 190 + r * Math.sin(angle);
                          } else {
                            const innerN = Math.floor(total / 2);
                            const outerN = total - innerN;
                            if (k < innerN) {
                              isOuter = false;
                              const r = 92;
                              const angle = -Math.PI / 2 + (k * 2 * Math.PI) / innerN;
                              x = 190 + r * Math.cos(angle);
                              y = 190 + r * Math.sin(angle);
                            } else {
                              const outIdx = k - innerN;
                              const r = 150;
                              const angle = -Math.PI / 2 + (outIdx * 2 * Math.PI) / outerN + (Math.PI / outerN);
                              x = 190 + r * Math.cos(angle);
                              y = 190 + r * Math.sin(angle);
                            }
                          }

                          const isHeroHovered = hoveredOrbitHero?.id === hero.id;

                          return (
                            <button
                              key={hero.id}
                              type="button"
                              className={`beside-orbit-hero-btn ${isOuter ? 'outer-node' : 'inner-node'} ${isHeroHovered ? 'active' : ''}`}
                              style={{ left: `${x}px`, top: `${y}px` }}
                              onMouseEnter={() => setHoveredOrbitHero(hero)}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectHero(hero);
                              }}
                              title={`${hero.name} — 「${hero.title}」(${hero.role})\nNhấp để mở hồ sơ`}
                            >
                              <img
                                src={hero.avatarUrl}
                                alt={hero.name}
                                className="beside-orbit-img"
                                loading="lazy"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* FLOATING HOVER CARD FOR HEROES (KHI TÌM KIẾM) */}
      {hoveredHero && hoverPosition && (
        <div
          className={`hero-floating-card ${hoverPosition.placeAbove ? 'placed-above' : 'placed-below'}`}
          style={{
            position: 'fixed',
            left: `${Math.max(16, Math.min(window.innerWidth - 300, hoverPosition.x - 140))}px`,
            top: hoverPosition.placeAbove ? 'auto' : `${hoverPosition.y}px`,
            bottom: hoverPosition.placeAbove ? `${window.innerHeight - hoverPosition.y}px` : 'auto',
            zIndex: 99999,
            pointerEvents: 'none',
          }}
        >
          {/* Card Notch pointer */}
          <div className={`floating-card-notch ${hoverPosition.placeAbove ? 'notch-bottom' : 'notch-top'}`} />

          {/* Header Row */}
          <div className="floating-card-header">
            <img 
              src={hoveredHero.avatarUrl} 
              alt={hoveredHero.name} 
              className="floating-hero-avatar"
            />
            <div className="floating-header-info">
              <h4 className="floating-hero-name">{hoveredHero.name}</h4>
              <span className="floating-hero-title">「{hoveredHero.title}」</span>
              <span className="floating-hero-role">{hoveredHero.role}</span>
            </div>
          </div>

          {/* Meta Info: Faction & Skins */}
          <div className="floating-meta-block">
            <div className="floating-meta-item">
              <span className="meta-item-label">Thế lực:</span>
              <span className="meta-item-val font-semibold">{getHeroPrimaryFactionName(hoveredHero)}</span>
            </div>
            <div className="floating-meta-item">
              <span className="meta-item-label">Trang phục:</span>
              <span className="meta-item-val text-cerulean font-semibold">
                ✦ {getHeroSkins(hoveredHero).length} Trang phục
              </span>
            </div>
          </div>

          {/* Combat Matrix Mini-Bars */}
          <div className="floating-combat-matrix">
            <div className="matrix-row">
              <span className="matrix-label">Sát thương</span>
              <div className="matrix-bar-track">
                <div 
                  className="matrix-bar-fill fill-cerulean" 
                  style={{ width: `${Math.min(100, hoveredHero.stats.damage * 10)}%` }} 
                />
              </div>
              <span className="matrix-val">{hoveredHero.stats.damage}</span>
            </div>

            <div className="matrix-row">
              <span className="matrix-label">Chống chịu</span>
              <div className="matrix-bar-track">
                <div 
                  className="matrix-bar-fill fill-jasper" 
                  style={{ width: `${Math.min(100, hoveredHero.stats.toughness * 10)}%` }} 
                />
              </div>
              <span className="matrix-val">{hoveredHero.stats.toughness}</span>
            </div>

            <div className="matrix-row">
              <span className="matrix-label">Cơ động</span>
              <div className="matrix-bar-track">
                <div 
                  className="matrix-bar-fill fill-cerulean" 
                  style={{ width: `${Math.min(100, hoveredHero.stats.mobility * 10)}%` }} 
                />
              </div>
              <span className="matrix-val">{hoveredHero.stats.mobility}</span>
            </div>

            <div className="matrix-row">
              <span className="matrix-label">Khống chế</span>
              <div className="matrix-bar-track">
                <div 
                  className="matrix-bar-fill fill-cerulean" 
                  style={{ width: `${Math.min(100, hoveredHero.stats.crowdControl * 10)}%` }} 
                />
              </div>
              <span className="matrix-val">{hoveredHero.stats.crowdControl}</span>
            </div>

            <div className="matrix-row">
              <span className="matrix-label">Độ khó</span>
              <div className="matrix-bar-track">
                <div 
                  className="matrix-bar-fill fill-jasper" 
                  style={{ width: `${Math.min(100, hoveredHero.stats.difficulty * 10)}%` }} 
                />
              </div>
              <span className="matrix-val">{hoveredHero.stats.difficulty}</span>
            </div>
          </div>

          <div className="floating-card-footer">
            <span>Bấm vào để xem hồ sơ chi tiết →</span>
          </div>
        </div>
      )}

      {/* Floating Archive/Trash button (Bottom Right) */}
      {deletedHeroes.length > 0 && (
        <button
          type="button"
          className="deleted-heroes-fab"
          onClick={() => setShowDeletedModal(true)}
          title={`Xem ${deletedHeroes.length} tướng đã ẩn trong kho lưu trữ`}
        >
          <Trash2 size={15} />
          <span>Kho ẩn ({deletedHeroes.length})</span>
        </button>
      )}

      {/* Deleted Heroes Ledger Modal */}
      {showDeletedModal && (
        <div className="deleted-heroes-backdrop" onClick={() => setShowDeletedModal(false)}>
          <div className="deleted-heroes-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="deleted-heroes-header">
              <div className="deleted-heroes-title-wrap">
                <div className="deleted-heroes-eyebrow">LƯU TRỮ VĂN KHẢO // ARCHIVE</div>
                <h2 className="deleted-heroes-title">
                  Tướng Đã Ẩn <span className="deleted-count-badge">({deletedHeroes.length})</span>
                </h2>
              </div>
              <button
                type="button"
                className="deleted-dialog-close-btn"
                onClick={() => setShowDeletedModal(false)}
                title="Đóng cửa sổ"
              >
                <X size={18} />
              </button>
            </div>

            <div className="deleted-heroes-body">
              <p className="deleted-heroes-desc">
                Các vị tướng dưới đây đã bị ẩn khỏi danh bạ. Bạn có thể khôi phục từng tướng về trạng thái ban đầu hoặc khôi phục toàn bộ cùng lúc.
              </p>

              {deletedHeroes.length > 0 && (
                <div className="deleted-heroes-bulk-bar">
                  <span className="bulk-bar-info">Tổng cộng {deletedHeroes.length} tướng trong kho lưu trữ</span>
                  <button
                    type="button"
                    className="bulk-restore-all-btn"
                    onClick={() => {
                      if (window.confirm('Bạn có muốn khôi phục toàn bộ các vị tướng đã xóa trở lại danh bạ không?')) {
                        heroCustomStore.restoreAllHeroes();
                      }
                    }}
                  >
                    <RotateCcw size={14} />
                    <span>Khôi phục tất cả</span>
                  </button>
                </div>
              )}

              <div className="deleted-heroes-list">
                {deletedHeroes.map((hero) => {
                  const faction = FACTIONS_DATA[hero.factionId];
                  return (
                    <div key={hero.id} className="deleted-hero-card">
                      <div className="deleted-hero-avatar-wrap">
                        <img
                          src={hero.avatarUrl || hero.bannerUrl}
                          alt={hero.name}
                          className="deleted-hero-avatar"
                        />
                      </div>

                      <div className="deleted-hero-info">
                        <div className="deleted-hero-name-row">
                          <span className="deleted-hero-name">{hero.name}</span>
                          <span className="deleted-hero-title">「{hero.title}」</span>
                        </div>
                        <div className="deleted-hero-meta-row">
                          <span
                            className="deleted-hero-faction-tag"
                            style={{ borderColor: faction?.color || '#94a3b8', color: faction?.color || '#94a3b8' }}
                          >
                            {faction?.name || hero.factionId}
                          </span>
                          <span className="deleted-hero-role-tag">{hero.role}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="deleted-hero-restore-btn"
                        onClick={() => heroCustomStore.restoreHero(hero.id)}
                        title={`Khôi phục ${hero.name}`}
                      >
                        <RotateCcw size={13} />
                        <span>Khôi phục</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="deleted-heroes-footer">
              <button
                type="button"
                className="deleted-dialog-done-btn"
                onClick={() => setShowDeletedModal(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
