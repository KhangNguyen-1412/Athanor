import React, { useState, useMemo, useEffect } from 'react';
import type { Hero, FactionId, HeroRole } from '../../types/athanor';
import { HEROES_DATA } from '../../data/heroesData';
import { FACTIONS_DATA } from '../../data/factionsData';
import { heroCustomStore } from '../../utils/heroCustomStore';
import { Search, X, RotateCcw, SlidersHorizontal, Columns, LayoutGrid, Trash2 } from 'lucide-react';
import { EditorialDropdown, type DropdownOption } from '../common/EditorialDropdown';
import './HeroRoster.css';

interface HeroRosterProps {
  onSelectHero: (hero: Hero) => void;
}

type SortKey = 'default' | 'name_asc' | 'name_desc' | 'damage' | 'mobility' | 'difficulty' | 'toughness';

export const HeroRoster: React.FC<HeroRosterProps> = ({ onSelectHero }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaction, setSelectedFaction] = useState<FactionId | 'all'>('all');
  const [selectedRole, setSelectedRole] = useState<HeroRole | 'all'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('default');
  const [viewMode, setViewMode] = useState<'landscape' | 'portrait'>('landscape');
  const [overrideVersion, setOverrideVersion] = useState<number>(0);
  const [showDeletedModal, setShowDeletedModal] = useState<boolean>(false);

  useEffect(() => {
    const handleUpdate = () => setOverrideVersion((v) => v + 1);
    window.addEventListener('athanor-hero-updated', handleUpdate);
    return () => window.removeEventListener('athanor-hero-updated', handleUpdate);
  }, []);

  const roles: HeroRole[] = ['Đấu Sĩ', 'Pháp Sư', 'Xạ Thủ', 'Sát Thủ', 'Đỡ Đòn', 'Trợ Thủ'];

  const allHeroes = useMemo(() => {
    return heroCustomStore.getActiveHeroes(HEROES_DATA);
  }, [overrideVersion]);

  const deletedHeroes = useMemo(() => {
    return heroCustomStore.getDeletedHeroes(HEROES_DATA);
  }, [overrideVersion]);

  // Dropdown options for Factions
  const factionOptions: DropdownOption[] = useMemo(() => {
    const opts: DropdownOption[] = [
      {
        value: 'all',
        label: 'TẤT CẢ THẾ LỰC',
        badge: allHeroes.length,
      }
    ];

    Object.values(FACTIONS_DATA).forEach((f) => {
      const count = allHeroes.filter((h) => h.factionId === f.id).length;
      opts.push({
        value: f.id,
        label: f.name,
        color: f.color,
        badge: count,
      });
    });

    return opts;
  }, [allHeroes]);

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

  // Count heroes per role
  const getRoleCount = (role: string) => {
    if (role === 'all') {
      if (selectedFaction === 'all') return allHeroes.length;
      return allHeroes.filter((h) => h.factionId === selectedFaction).length;
    }
    return allHeroes.filter((h) => {
      const matchFaction = selectedFaction === 'all' || h.factionId === selectedFaction;
      const matchRole = h.role === role || h.secondaryRole === role;
      return matchFaction && matchRole;
    }).length;
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedFaction !== 'all' ||
    selectedRole !== 'all' ||
    sortKey !== 'default';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedFaction('all');
    setSelectedRole('all');
    setSortKey('default');
  };

  const filteredHeroes = useMemo(() => {
    let result = allHeroes.filter((hero) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        hero.name.toLowerCase().includes(q) ||
        hero.title.toLowerCase().includes(q) ||
        (hero.birthplace && hero.birthplace.toLowerCase().includes(q)) ||
        (hero.secretProfile && hero.secretProfile.organizationRole.toLowerCase().includes(q));

      const matchFaction = selectedFaction === 'all' || hero.factionId === selectedFaction;
      const matchRole =
        selectedRole === 'all' ||
        hero.role === selectedRole ||
        hero.secondaryRole === selectedRole;

      return matchSearch && matchFaction && matchRole;
    });

    switch (sortKey) {
      case 'name_asc':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name, 'vi'));
        break;
      case 'name_desc':
        result = [...result].sort((a, b) => b.name.localeCompare(a.name, 'vi'));
        break;
      case 'damage':
        result = [...result].sort((a, b) => b.stats.damage - a.stats.damage);
        break;
      case 'mobility':
        result = [...result].sort((a, b) => b.stats.mobility - a.stats.mobility);
        break;
      case 'toughness':
        result = [...result].sort((a, b) => b.stats.toughness - a.stats.toughness);
        break;
      case 'difficulty':
        result = [...result].sort((a, b) => b.stats.difficulty - a.stats.difficulty);
        break;
    }
    return result;
  }, [allHeroes, searchQuery, selectedFaction, selectedRole, sortKey]);

  return (
    <div className="minimal-roster-page">
      {/* Top Clean Header */}
      <div className="minimal-roster-header">
        <div className="roster-header-top">
          <div>
            <div className="roster-badge-row">
              <span className="roster-count-badge">
                {filteredHeroes.length} / {allHeroes.length} VỊ TƯỚNG
              </span>
              {selectedFaction !== 'all' && (
                <span className="roster-filter-chip">
                  Phe: {FACTIONS_DATA[selectedFaction]?.name}
                </span>
              )}
              {selectedRole !== 'all' && (
                <span className="roster-filter-chip">
                  Vai trò: {selectedRole}
                </span>
              )}
              {deletedHeroes.length > 0 && (
                <button
                  type="button"
                  className="roster-deleted-badge-btn"
                  onClick={() => setShowDeletedModal(true)}
                  title="Xem danh sách tướng đã xóa và khôi phục"
                >
                  <Trash2 size={12} />
                  <span>Đã xóa ({deletedHeroes.length})</span>
                </button>
              )}
            </div>
            <h1 className="minimal-roster-title">
              Danh Bạ Tướng Athanor
            </h1>
            <p className="minimal-roster-desc">
              Tra cứu đầy đủ {allHeroes.length} vị tướng qua thông số tác chiến, nơi sinh, vai trò trong hội và bí mật cá nhân.
            </p>
          </div>
        </div>

        {/* Minimalist Unified Control Toolbar */}
        <div className="roster-toolbar-minimal">
          {/* Row 1: Search + Faction Dropdown + Sort Dropdown */}
          <div className="toolbar-search-row">
            <div className="minimal-search-box">
              <Search size={15} className="search-box-icon" />
              <input
                type="text"
                placeholder="Tìm tướng theo tên, danh hiệu, nơi sinh, chức vụ..."
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

            <div className="toolbar-selects-group">
              <div className="select-wrapper faction-select-wrapper">
                <EditorialDropdown
                  options={factionOptions}
                  value={selectedFaction}
                  onChange={(val) => setSelectedFaction(val as FactionId | 'all')}
                  placeholder="TẤT CẢ THẾ LỰC"
                />
              </div>

              <div className="select-wrapper sort-select-wrapper">
                <EditorialDropdown
                  options={sortOptions}
                  value={sortKey}
                  onChange={(val) => setSortKey(val as SortKey)}
                  placeholder="SẮP XẾP..."
                />
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  className="toolbar-reset-icon-btn"
                  onClick={resetFilters}
                  title="Đặt lại toàn bộ bộ lọc"
                >
                  <RotateCcw size={13} />
                  <span>Đặt lại</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Role Segmented Bar & Result Counter */}
          <div className="toolbar-roles-row">
            <div className="role-segmented-bar">
              <button
                type="button"
                className={`role-segment-tab ${selectedRole === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedRole('all')}
              >
                <span className="role-tab-text">Tất cả</span>
                <span className="role-tab-count">{getRoleCount('all')}</span>
              </button>
              {roles.map((role) => {
                const count = getRoleCount(role);
                return (
                  <button
                    key={role}
                    type="button"
                    className={`role-segment-tab ${selectedRole === role ? 'active' : ''}`}
                    onClick={() => setSelectedRole(role)}
                  >
                    <span className="role-tab-text">{role}</span>
                    <span className="role-tab-count">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="toolbar-controls-right">
              <div className="view-mode-segmented" title="Chế độ hiển thị">
                <button
                  type="button"
                  className={`view-mode-btn ${viewMode === 'landscape' ? 'active' : ''}`}
                  onClick={() => setViewMode('landscape')}
                  title="Thẻ ngang (Tối ưu tầm nhìn Laptop)"
                >
                  <Columns size={13} />
                  <span>Thẻ ngang</span>
                </button>
                <button
                  type="button"
                  className={`view-mode-btn ${viewMode === 'portrait' ? 'active' : ''}`}
                  onClick={() => setViewMode('portrait')}
                  title="Lưới đứng cổ điển"
                >
                  <LayoutGrid size={13} />
                  <span>Lưới đứng</span>
                </button>
              </div>

              <div className="toolbar-meta-count">
                <span className="meta-results-text">
                  Hiển thị <strong>{filteredHeroes.length}</strong> / {allHeroes.length} tướng
                </span>
              </div>
            </div>
          </div>

          {/* Active Filter Tags (Appears only when filtering) */}
          {hasActiveFilters && (
            <div className="toolbar-active-tags-row">
              <span className="active-tags-lead">
                <SlidersHorizontal size={11} />
                Đang lọc:
              </span>

              {selectedFaction !== 'all' && (
                <span
                  className="active-filter-badge"
                  style={{
                    color: FACTIONS_DATA[selectedFaction]?.color,
                    borderColor: `${FACTIONS_DATA[selectedFaction]?.color}40`,
                    backgroundColor: `${FACTIONS_DATA[selectedFaction]?.color}10`
                  }}
                >
                  <span
                    className="tag-color-dot"
                    style={{ backgroundColor: FACTIONS_DATA[selectedFaction]?.color }}
                  />
                  {FACTIONS_DATA[selectedFaction]?.name}
                  <button
                    type="button"
                    className="tag-close-btn"
                    onClick={() => setSelectedFaction('all')}
                    title="Bỏ lọc thế lực này"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {selectedRole !== 'all' && (
                <span className="active-filter-badge">
                  Vai trò: {selectedRole}
                  <button
                    type="button"
                    className="tag-close-btn"
                    onClick={() => setSelectedRole('all')}
                    title="Bỏ lọc vai trò"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {searchQuery.trim() !== '' && (
                <span className="active-filter-badge">
                  Từ khóa: "{searchQuery}"
                  <button
                    type="button"
                    className="tag-close-btn"
                    onClick={() => setSearchQuery('')}
                    title="Xóa từ khóa"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              {sortKey !== 'default' && (
                <span className="active-filter-badge">
                  {sortOptions.find((o) => o.value === sortKey)?.label}
                  <button
                    type="button"
                    className="tag-close-btn"
                    onClick={() => setSortKey('default')}
                    title="Về sắp xếp mặc định"
                  >
                    <X size={11} />
                  </button>
                </span>
              )}

              <button
                type="button"
                className="clear-all-filters-btn"
                onClick={resetFilters}
              >
                Xóa tất cả
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scrollable Hero Cards Container */}
      <div className="roster-scroll-container">
        {filteredHeroes.length === 0 ? (
          <div className="empty-editorial-state editorial-frame">
            <p className="editorial-lead">Không tìm thấy hồ sơ anh hùng phù hợp với tiêu chí tra cứu.</p>
          <button
            type="button"
            className="btn-secondary"
            style={{ marginTop: '12px' }}
            onClick={resetFilters}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : viewMode === 'landscape' ? (
        /* Landscape Cards Grid (Laptop Optimized) */
        <div className="landscape-plates-grid">
          {filteredHeroes.map((hero, index) => {
            const faction = FACTIONS_DATA[hero.factionId];
            const plateNo = index < 9 ? `№ 0${index + 1}` : `№ ${index + 1}`;

            return (
              <div
                key={hero.id}
                className="hero-landscape-card"
                onClick={() => onSelectHero(hero)}
                style={{
                  '--card-accent': faction?.color || '#007ba7'
                } as React.CSSProperties}
              >
                {/* Left Column: Visual Media Cover */}
                <div className="landscape-media-wrap">
                  <img src={hero.bannerUrl} alt={hero.name} className="landscape-bg-image" />
                  <div className="landscape-image-scrim" />
                  <img src={hero.avatarUrl} alt={hero.name} className="landscape-portrait" />
                  <span className="landscape-plate-no">{plateNo}</span>
                </div>

                {/* Right Column: Hero Dossier Text */}
                <div className="landscape-body">
                  <div className="landscape-header-line">
                    <div className="landscape-meta-tags">
                      <span className="landscape-role-tag">{hero.role}{hero.secondaryRole ? ` / ${hero.secondaryRole}` : ''}</span>
                      {hero.birthplace && (
                        <span className="landscape-birth-tag" title={`Nơi sinh: ${hero.birthplace}`}>
                          • {hero.birthplace.split('(')[0].trim()}
                        </span>
                      )}
                    </div>
                    <span className={`badge badge-${hero.factionId} landscape-faction-badge`}>
                      {faction?.name}
                    </span>
                  </div>

                  <div className="landscape-name-row">
                    <h3 className="landscape-hero-name">{hero.name}</h3>
                    <span className="landscape-hero-title">「{hero.title}」</span>
                  </div>

                  <p className="landscape-quote" title={hero.quote}>
                    "{hero.quote}"
                  </p>

                  <div className="landscape-footer">
                    <div className="landscape-stats-row">
                      <div className="mini-stat-pill" title="Sát thương">
                        <span className="stat-code">ST</span>
                        <span className="stat-num">{hero.stats.damage}</span>
                      </div>
                      <div className="mini-stat-pill" title="Cơ động">
                        <span className="stat-code">CĐ</span>
                        <span className="stat-num">{hero.stats.mobility}</span>
                      </div>
                      <div className="mini-stat-pill" title="Độ khó">
                        <span className="stat-code">ĐK</span>
                        <span className="stat-num">{hero.stats.difficulty}</span>
                      </div>
                    </div>

                    <div className="landscape-action-link">
                      <span>Hồ sơ</span>
                      <span className="landscape-arrow">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Classic Portrait Grid */
        <div className="editorial-plates-grid">
          {filteredHeroes.map((hero, index) => {
            const faction = FACTIONS_DATA[hero.factionId];
            const plateNo = index < 9 ? `№ 0${index + 1}` : `№ ${index + 1}`;

            return (
              <div
                key={hero.id}
                className="hero-editorial-card editorial-frame"
                onClick={() => onSelectHero(hero)}
                style={{
                  '--card-accent': faction?.color || '#007ba7'
                } as React.CSSProperties}
              >
                {/* Plate Index Header */}
                <div className="plate-header">
                  <span className="plate-number">{plateNo}</span>
                  <span className={`badge badge-${hero.factionId}`}>
                    {faction?.name}
                  </span>
                </div>

                {/* Card Media Section */}
                <div className="plate-media-wrap">
                  <img src={hero.bannerUrl} alt={hero.name} className="plate-bg-image" />
                  <div className="plate-image-scrim" />
                  <img src={hero.avatarUrl} alt={hero.name} className="plate-portrait" />
                </div>

                {/* Card Text & Typography */}
                <div className="plate-text-body">
                  <div className="plate-meta-row">
                    <span className="plate-role-tag">{hero.role}</span>
                    {hero.secondaryRole && (
                      <span className="plate-role-sub">/ {hero.secondaryRole}</span>
                    )}
                    {hero.birthplace && (
                      <span className="plate-birth-tag" title={`Nơi sinh: ${hero.birthplace}`}>
                        • {hero.birthplace.split('(')[0].trim()}
                      </span>
                    )}
                  </div>

                  <h3 className="plate-hero-name">{hero.name}</h3>
                  <div className="plate-hero-title">「{hero.title}」</div>

                  {/* Pull Quote excerpt */}
                  <p className="plate-quote-excerpt">
                    "{hero.quote}"
                  </p>

                  {/* Subtle Technical Attributes Indicator */}
                  <div className="plate-stats-footer">
                    <div className="plate-stat-col">
                      <span className="stat-dim-label">SÁT THƯƠNG</span>
                      <span className="stat-dim-val">{hero.stats.damage}/10</span>
                    </div>
                    <div className="plate-stat-col">
                      <span className="stat-dim-label">CƠ ĐỘNG</span>
                      <span className="stat-dim-val">{hero.stats.mobility}/10</span>
                    </div>
                    <div className="plate-stat-col">
                      <span className="stat-dim-label">ĐỘ KHÓ</span>
                      <span className="stat-dim-val">{hero.stats.difficulty}/10</span>
                    </div>
                  </div>

                  {/* View Details Action Link */}
                  <div className="plate-action-link">
                    <span>MỞ HỒ SƠ TÁC CHIẾN</span>
                    <span className="plate-arrow">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      </div>

      {/* Deleted Heroes Ledger Modal */}
      {showDeletedModal && (
        <div className="deleted-heroes-backdrop" onClick={() => setShowDeletedModal(false)}>
          <div className="deleted-heroes-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="deleted-heroes-header">
              <div className="deleted-heroes-title-wrap">
                <div className="deleted-heroes-eyebrow">LƯU TRỮ VĂN KHẢO // ARCHIVE</div>
                <h2 className="deleted-heroes-title">
                  Tướng Đã Xóa <span className="deleted-count-badge">({deletedHeroes.length})</span>
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
                Các vị tướng dưới đây đã bị ẩn khỏi danh bạ, bản đồ thế giới và biểu đồ quan hệ lore.
                Bạn có thể khôi phục từng tướng về trạng thái ban đầu hoặc khôi phục toàn bộ cùng lúc.
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

              {deletedHeroes.length === 0 ? (
                <div className="deleted-heroes-empty">
                  <p>Không có vị tướng nào trong danh sách đã xóa.</p>
                </div>
              ) : (
                <div className="deleted-heroes-list">
                  {deletedHeroes.map((hero) => {
                    const faction = FACTIONS_DATA[hero.factionId];
                    return (
                      <div key={hero.id} className="deleted-hero-card">
                        <div className="deleted-hero-avatar-wrap">
                          {hero.avatarUrl || hero.bannerUrl ? (
                            <img
                              src={hero.avatarUrl || hero.bannerUrl}
                              alt={hero.name}
                              className="deleted-hero-avatar"
                            />
                          ) : (
                            <div className="deleted-hero-fallback-avatar">
                              {hero.name.slice(0, 1)}
                            </div>
                          )}
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
                            {hero.birthplace && (
                              <span className="deleted-hero-region-tag">{hero.birthplace}</span>
                            )}
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
              )}
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
