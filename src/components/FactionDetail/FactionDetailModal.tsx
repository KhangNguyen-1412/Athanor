import React, { useState, useMemo, useEffect } from 'react';
import type { Faction, Hero, HeroRole } from '../../types/athanor';
import { HEROES_DATA } from '../../data/heroesData';
import { heroCustomStore } from '../../utils/heroCustomStore';
import { X, ArrowRight, Search, MapPin, Crown, Landmark } from 'lucide-react';
import { useBodyScrollLock } from '../../utils/useBodyScrollLock';
import { AuthenticFactionLogo } from '../Map3D/AuthenticFactionLogos';
import './FactionDetailModal.css';

interface FactionDetailModalProps {
  faction: Faction | null;
  onClose: () => void;
  onSelectHero: (hero: Hero) => void;
}

export const FactionDetailModal: React.FC<FactionDetailModalProps> = ({
  faction,
  onClose,
  onSelectHero
}) => {
  useBodyScrollLock(Boolean(faction));

  const [heroSearch, setHeroSearch] = useState('');
  const [heroRole, setHeroRole] = useState<HeroRole | 'all'>('all');

  if (!faction) return null;

  const [overrideTick, setOverrideTick] = useState<number>(0);

  useEffect(() => {
    const handleUpdate = () => setOverrideTick((v) => v + 1);
    window.addEventListener('athanor-hero-updated', handleUpdate);
    return () => window.removeEventListener('athanor-hero-updated', handleUpdate);
  }, []);

  const factionHeroes = useMemo(() =>
    heroCustomStore
      .getActiveHeroes(HEROES_DATA)
      .filter((h) => h.factionId === faction.id),
    [faction, overrideTick]
  );

  const roles: HeroRole[] = useMemo(() => {
    const set = new Set<HeroRole>();
    factionHeroes.forEach((h) => {
      set.add(h.role);
      if (h.secondaryRole) set.add(h.secondaryRole);
    });
    return Array.from(set);
  }, [factionHeroes]);

  const filteredHeroes = useMemo(() =>
    factionHeroes.filter((h) => {
      const matchSearch = heroSearch === '' ||
        h.name.toLowerCase().includes(heroSearch.toLowerCase()) ||
        h.title.toLowerCase().includes(heroSearch.toLowerCase());
      const matchRole = heroRole === 'all' || h.role === heroRole || h.secondaryRole === heroRole;
      return matchSearch && matchRole;
    }),
    [factionHeroes, heroSearch, heroRole]
  );

  const paragraphs = faction.lore.split('\n\n');

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
        className="minimal-faction-container animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Section */}
        <div className="minimal-faction-banner">
          <img src={faction.bannerUrl} alt={faction.name} className="faction-banner-img" />
          <div className="faction-banner-scrim" />

          {/* Top Close Button */}
          <button
            type="button"
            className="faction-close-btn"
            onClick={onClose}
            title="Đóng"
          >
            <X size={16} />
          </button>

          {/* Banner Meta & Title */}
          <div className="faction-banner-info">
            <div className="faction-badge-row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AuthenticFactionLogo factionId={faction.id} size={36} />
              <span
                className="faction-pill-badge"
                style={{
                  color: faction.color,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: `${faction.color}40`
                }}
              >
                {faction.englishName}
              </span>
              <span className="faction-hero-count">
                {factionHeroes.length} Tướng Lĩnh
              </span>
            </div>

            <h2 className="faction-main-name">
              {faction.name}
            </h2>
            <p className="faction-quote-subtitle">
              “{faction.subtitle}”
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="minimal-faction-body">
          {/* Key Leadership & Territory Grid */}
          <div className="faction-overview-grid">
            <div className="overview-card">
              <div className="overview-icon-wrap">
                <Crown size={15} style={{ color: faction.color }} />
              </div>
              <div className="overview-text">
                <span className="overview-label">LÃNH TỤ TỐI CAO</span>
                <span className="overview-value">{faction.leader}</span>
              </div>
            </div>

            <div className="overview-card">
              <div className="overview-icon-wrap">
                <MapPin size={15} style={{ color: faction.color }} />
              </div>
              <div className="overview-text">
                <span className="overview-label">ĐỊA GIỚI LÃNH THỔ</span>
                <span className="overview-value">{faction.territory}</span>
              </div>
            </div>
          </div>

          {/* Core Ideals */}
          <div className="faction-content-section">
            <h4 className="section-title">TÔN CHỈ & LÝ TƯỞNG CỐT LÕI</h4>
            <div className="faction-ideals-wrap">
              {faction.ideals.map((ideal, idx) => (
                <span key={idx} className="minimal-ideal-pill">
                  <span className="ideal-dot" style={{ backgroundColor: faction.color }} />
                  {ideal}
                </span>
              ))}
            </div>
          </div>

          {/* Lore Narrative */}
          <div className="faction-content-section">
            <h4 className="section-title">BIÊN NIÊN SỬ LÃNH ĐỊA</h4>
            <div className="faction-lore-text">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Key Landmarks */}
          <div className="faction-content-section">
            <h4 className="section-title">DANH THẮNG & THÁNH ĐỊA</h4>
            <div className="faction-landmarks-grid">
              {faction.keyLandmarks.map((landmark, idx) => (
                <div key={idx} className="minimal-landmark-card">
                  <Landmark size={14} style={{ color: faction.color }} />
                  <span>{landmark}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Faction Heroes Section */}
          <div className="faction-content-section">
            <div className="heroes-section-head">
              <h4 className="section-title">
                TƯỚNG LĨNH ĐẠI DIỆN ({filteredHeroes.length}/{factionHeroes.length})
              </h4>
            </div>

            {/* Filter Bar */}
            <div className="faction-hero-filter-bar">
              <div className="faction-search-wrap">
                <Search size={14} className="faction-search-icon" />
                <input
                  type="text"
                  className="faction-search-input"
                  placeholder="Tìm tướng theo tên, danh hiệu..."
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                />
              </div>

              <div className="faction-role-chips">
                <button
                  type="button"
                  className={`faction-role-chip ${heroRole === 'all' ? 'active' : ''}`}
                  onClick={() => setHeroRole('all')}
                >
                  Tất cả
                </button>
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={`faction-role-chip ${heroRole === role ? 'active' : ''}`}
                    onClick={() => setHeroRole(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Heroes Grid */}
            <div className="faction-heroes-grid">
              {filteredHeroes.length === 0 ? (
                <p className="faction-no-heroes">Không tìm thấy tướng phù hợp với bộ lọc.</p>
              ) : (
                filteredHeroes.map((hero) => (
                  <div
                    key={hero.id}
                    className="faction-hero-item"
                    onClick={() => onSelectHero(hero)}
                  >
                    <img src={hero.avatarUrl} alt={hero.name} className="faction-hero-avatar" />
                    <div className="faction-hero-info">
                      <div className="faction-hero-name-row">
                        <span className="faction-hero-name">{hero.name}</span>
                        <span className="faction-hero-role">{hero.role}</span>
                      </div>
                      <span className="faction-hero-title">「{hero.title}」</span>
                    </div>
                    <ArrowRight size={13} className="faction-hero-arrow" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
