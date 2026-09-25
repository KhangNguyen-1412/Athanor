import React, { useState, useEffect, useMemo } from 'react';
import type { Hero, Skill, HeroForm, HeroSkin } from '../../types/athanor';
import { FACTIONS_DATA } from '../../data/factionsData';
import { HEROES_DATA } from '../../data/heroesData';
import { heroCustomStore } from '../../utils/heroCustomStore';
import { getHeroSpotlight } from '../../data/spotlightData';
import { getHeroSkins, getSkinTierSlug } from '../../data/skinsData';
import { HeroImageEditorModal, type EditorTab } from './HeroImageEditorModal';
import { HeroRelationsOrbitDiagram } from './HeroRelationsOrbitDiagram';
import { RadarChart } from './RadarChart';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Lock,
  BookOpen,
  Building2,
  Zap,
  ShieldAlert,
  Edit3,
  Trash2,
  PlayCircle,
  ExternalLink,
  Sparkles,
  Video,
  Flame,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Shield,
  FileText,
  Maximize2,
  X
} from 'lucide-react';
import './HeroDetailPage.css';
import './HeroModal.css';

interface HeroDetailPageProps {
  hero: Hero;
  onBack: () => void;
  onSelectHero: (hero: Hero) => void;
}

type DetailTab = 'combat' | 'secret' | 'lore' | 'spotlight';

export const HeroDetailPage: React.FC<HeroDetailPageProps> = ({
  hero,
  onBack,
  onSelectHero
}) => {
  const [currentHero, setCurrentHero] = useState<Hero>(() => heroCustomStore.applyOverride(hero));
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [editorInitialTab, setEditorInitialTab] = useState<EditorTab>('info');
  const [editorFocusField, setEditorFocusField] = useState<string | undefined>(undefined);
  const [overrideTick, setOverrideTick] = useState<number>(0);

  const handleOpenEditor = (tab: EditorTab = 'info', focusField?: string) => {
    setEditorInitialTab(tab);
    setEditorFocusField(focusField);
    setIsEditorOpen(true);
  };
  const [activeTab, setActiveTab] = useState<DetailTab>('combat');
  const [activeSkillIndex, setActiveSkillIndex] = useState<number>(0);
  const [activeFormId, setActiveFormId] = useState<string | null>(null);
  const [isScrolledPastCover, setIsScrolledPastCover] = useState<boolean>(false);

  // Skins System
  const heroSkins: HeroSkin[] = useMemo(() => getHeroSkins(currentHero), [currentHero]);
  const [activeSkinId, setActiveSkinId] = useState<string>(() => heroSkins[0]?.id || 'default');
  const [isSkinModalOpen, setIsSkinModalOpen] = useState<boolean>(false);

  // Sync activeSkinId when hero changes
  useEffect(() => {
    const skins = getHeroSkins(currentHero);
    if (skins.length > 0) {
      setActiveSkinId(skins[0].id);
    }
  }, [currentHero.id]);

  const activeSkin: HeroSkin = useMemo(() => {
    return heroSkins.find((s) => s.id === activeSkinId) || heroSkins[0];
  }, [heroSkins, activeSkinId]);

  // Scroll to top when hero changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const updated = heroCustomStore.applyOverride(hero);
    setCurrentHero(updated);
    setActiveSkillIndex(0);
    setActiveFormId(null);
    setIsScrolledPastCover(false);
    const skins = getHeroSkins(updated);
    if (skins.length > 0) {
      setActiveSkinId(skins[0].id);
    }
  }, [hero, overrideTick]);

  // Track scroll position to shrink hero identity into sticky bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastCover(window.scrollY > 220);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleUpdate = () => {
      setOverrideTick((v) => v + 1);
      setCurrentHero(heroCustomStore.applyOverride(hero));
    };
    window.addEventListener('athanor-hero-updated', handleUpdate);
    return () => window.removeEventListener('athanor-hero-updated', handleUpdate);
  }, [hero]);

  const handleDeleteHero = () => {
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa vị tướng "${currentHero.name}" khỏi Athanor?\n\nTướng này sẽ được ẩn khỏi Danh Bạ, Bản Đồ và Hồ Sơ (bạn có thể khôi phục lại bất kỳ lúc nào từ danh bạ tướng).`
    );
    if (confirmed) {
      heroCustomStore.deleteHero(currentHero.id);
      onBack();
    }
  };

  const faction = FACTIONS_DATA[currentHero.factionId];
  const allActiveHeroes = useMemo(() => {
    void overrideTick;
    return heroCustomStore.getActiveHeroes(HEROES_DATA);
  }, [overrideTick]);

  // Compute previous and next hero for footer cycler
  const currentIndex = allActiveHeroes.findIndex((h) => h.id === currentHero.id);
  const prevHero = currentIndex > 0
    ? allActiveHeroes[currentIndex - 1]
    : allActiveHeroes[allActiveHeroes.length - 1];
  const nextHero = currentIndex >= 0 && currentIndex < allActiveHeroes.length - 1
    ? allActiveHeroes[currentIndex + 1]
    : allActiveHeroes[0];

  // Resolve active form (main hero or an altForm)
  const allForms: Array<{ id: string | null; label: string; role: string }> = [
    { id: null, label: `Dạng ${currentHero.role}`, role: currentHero.role }
  ];
  if (currentHero.altForms) {
    currentHero.altForms.forEach((f: HeroForm) => {
      allForms.push({ id: f.formId, label: f.formName, role: f.role });
    });
  }

  const activeForm: HeroForm | null = activeFormId
    ? (currentHero.altForms?.find((f: HeroForm) => f.formId === activeFormId) ?? null)
    : null;

  const displaySkills = activeForm ? activeForm.skills : currentHero.skills;
  const displayAvatar = activeSkin?.avatarUrl || activeForm?.avatarUrl || currentHero.avatarUrl;
  const displayBanner = activeSkin?.bannerUrl || activeForm?.bannerUrl || currentHero.bannerUrl;
  const displayRole = activeForm?.role ?? currentHero.role;
  const displayQuote = activeSkin?.quote || currentHero.quote;

  const activeSkill: Skill = displaySkills[activeSkillIndex] || displaySkills[0];

  const slotLabels: Record<string, { roman: string; name: string }> = {
    passive: { roman: 'P', name: 'Nội tại' },
    skill1: { roman: 'I', name: 'Chiêu 1' },
    skill2: { roman: 'II', name: 'Chiêu 2' },
    ultimate: { roman: 'III', name: 'Chiêu cuối' }
  };

  const getDamageBadgeClass = (dmgType: string) => {
    switch (dmgType) {
      case 'Chuẩn': return 'pill-damage-true';
      case 'Phép': return 'pill-damage-magic';
      case 'Vật lý': return 'pill-damage-physical';
      default: return '';
    }
  };

  const paragraphs = currentHero.lore.split('\n\n');
  const specialLoreParagraphs = (currentHero.specialLore || currentHero.lore).split('\n\n');
  const spotlightInfo = getHeroSpotlight(currentHero, faction?.name);

  return (
    <div className="hero-detail-page animate-fade-in">
      <div className="hero-detail-container">
        {/* Top Navigation Bar & Breadcrumbs */}
        <nav className="detail-top-nav-bar" aria-label="Thanh điều hướng chi tiết">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="detail-back-btn"
              onClick={onBack}
              title="Quay lại danh bạ hoặc màn hình trước"
            >
              <ArrowLeft size={16} />
              <span>Quay Lại</span>
            </button>

            <div className="detail-breadcrumbs">
              <span>Athanor</span>
              <span className="breadcrumb-sep">/</span>
              <span>{faction?.name || 'Thế Lực'}</span>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-active">{currentHero.name}</span>
            </div>
          </div>

          <div className="detail-top-actions">
            <button
              type="button"
              className={`detail-action-btn detail-action-spotlight-btn ${activeTab === 'spotlight' ? 'active' : ''}`}
              onClick={() => setActiveTab('spotlight')}
              title="Xem video và cẩm nang Tâm Điểm Tướng chính thức của Garena"
            >
              <PlayCircle size={14} />
              <span>Xem Tâm Điểm</span>
            </button>

            <button
              type="button"
              className="detail-action-btn"
              onClick={() => handleOpenEditor('info')}
              title="Chỉnh sửa thông tin, chỉ số, hình ảnh, video và mối quan hệ"
            >
              <Edit3 size={14} />
              <span>Sửa thông tin tướng</span>
            </button>

            <button
              type="button"
              className="detail-action-btn detail-action-delete-btn"
              onClick={handleDeleteHero}
              title="Xóa vị tướng này khỏi danh bạ Athanor"
            >
              <Trash2 size={14} />
              <span>Xóa tướng</span>
            </button>
          </div>
        </nav>

        {/* Hero Heroic Cover Banner with Skin Wardrobe */}
        <header className="hero-heroic-cover">
          <div className="cover-main-monograph">
            <div className="cover-banner-image-wrap">
              <img
                key={activeSkin?.id || 'banner'}
                src={displayBanner}
                alt={activeSkin?.name || currentHero.name}
                className="cover-banner-img animate-fade-in"
                onError={(e) => {
                  if (e.currentTarget.src !== currentHero.bannerUrl) {
                    e.currentTarget.src = currentHero.bannerUrl;
                  }
                }}
              />
              <div className="cover-gradient-scrim" />
            </div>

            <div className="cover-content-layout">
              <div className="cover-avatar-frame">
                <img
                  key={activeSkin?.id || 'avatar'}
                  src={displayAvatar}
                  alt={currentHero.name}
                  className="cover-avatar-img animate-fade-in"
                  onError={(e) => {
                    if (e.currentTarget.src !== currentHero.avatarUrl) {
                      e.currentTarget.src = currentHero.avatarUrl;
                    }
                  }}
                />
              </div>

              <div className="cover-info-col">
                <div className="cover-tags-row">
                  <span
                    className="cover-pill cover-pill-faction"
                    style={{
                      color: faction?.color,
                      borderColor: `${faction?.color}50`,
                      backgroundColor: `${faction?.color}18`
                    }}
                  >
                    {faction?.name}
                  </span>
                  <span className="cover-pill cover-pill-role">
                    {displayRole}{!activeFormId && currentHero.secondaryRole ? ` • ${currentHero.secondaryRole}` : ''}
                  </span>
                  {currentHero.birthplace && (
                    <span className="cover-pill cover-pill-meta" title="Nơi sinh">
                      <MapPin size={11} />
                      <span>{currentHero.birthplace}</span>
                    </span>
                  )}
                  {currentHero.birthday && (
                    <span className="cover-pill cover-pill-meta" title="Sinh nhật">
                      <Calendar size={11} />
                      <span>{currentHero.birthday}</span>
                    </span>
                  )}
                  {currentHero.height && (
                    <span className="cover-pill cover-pill-meta" title="Chiều cao">
                      <Ruler size={11} />
                      <span>{currentHero.height}</span>
                    </span>
                  )}
                  {activeSkin && activeSkin.tier && (
                    <span className={`cover-pill cover-pill-skin-tier tier-${getSkinTierSlug(activeSkin.tier)}`}>
                      <Sparkles size={11} />
                      <span>{activeSkin.tier}</span>
                    </span>
                  )}
                </div>

                <div className="cover-hero-title-row">
                  <h1 className="cover-hero-name">
                    {currentHero.name}
                    <span className="cover-hero-epithet">「{currentHero.title}」</span>
                  </h1>
                  {activeSkin && activeSkin.id !== heroSkins[0]?.id && (
                    <div className="cover-active-skin-title">
                      <span className="skin-title-prefix">Trang Phục:</span>
                      <span className="skin-title-name">{activeSkin.name}</span>
                    </div>
                  )}
                </div>

                <p className="cover-hero-quote">
                  “{displayQuote}”
                </p>
              </div>
            </div>
          </div>

          {/* Skin Wardrobe Carousel Dock */}
          <div className="cover-skin-dock">
            <div className="skin-dock-header">
              <div className="skin-dock-title-group">
                <span className="skin-dock-icon">✦</span>
                <span className="skin-dock-heading">BỘ SƯU TẬP TRANG PHỤC ({heroSkins.length})</span>
                <span className="skin-dock-current-name">
                  {activeSkin?.name}
                  {activeSkin?.tier && activeSkin.tier !== 'Mặc Định' && ` [${activeSkin.tier}]`}
                </span>
              </div>

              <button
                type="button"
                className="skin-dock-inspect-btn"
                onClick={() => setIsSkinModalOpen(true)}
                title="Xem toàn cảnh hình nền splash art kích thước lớn"
              >
                <Maximize2 size={13} />
                <span>Xem Toàn Cảnh</span>
              </button>
            </div>

            <div className="skin-dock-scroller">
              {heroSkins.map((skin) => {
                const isSelected = skin.id === activeSkin?.id;
                const thumbImg = skin.avatarUrl || skin.bannerUrl;
                const tierSlug = getSkinTierSlug(skin.tier);

                return (
                  <button
                    key={skin.id}
                    type="button"
                    className={`skin-dock-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setActiveSkinId(skin.id)}
                    title={`${skin.name} (${skin.tier || 'Trang phục'})`}
                  >
                    <div className="skin-dock-thumb-wrap">
                      <img
                        src={thumbImg}
                        alt={skin.name}
                        className="skin-dock-img"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = currentHero.avatarUrl;
                        }}
                      />
                      {skin.tier && skin.tier !== 'Mặc Định' && (
                        <span className={`skin-dock-tier-chip tier-${tierSlug}`}>
                          {skin.tier.replace('Bậc ', '')}
                        </span>
                      )}
                      {isSelected && <div className="skin-dock-active-glow" />}
                    </div>
                    <span className="skin-dock-label">{skin.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Sticky Segmented Tabs Bar with Collapsed Champion Identity */}
        <div className={`detail-tabs-sticky-wrap ${isScrolledPastCover ? 'sticky-compact-active' : ''}`}>
          <div className="sticky-inner-layout">
            <div
              className={`sticky-compact-hero ${isScrolledPastCover ? 'visible' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Nhấp để cuộn lên đầu trang"
            >
              <div
                className="sticky-compact-avatar-wrap"
                style={{ borderColor: faction?.color || '#0284c7' }}
              >
                <img
                  src={displayAvatar}
                  alt={currentHero.name}
                  className="sticky-compact-avatar"
                  onError={(e) => {
                    e.currentTarget.src = currentHero.avatarUrl;
                  }}
                />
              </div>
              <div className="sticky-compact-text">
                <div className="sticky-compact-name-row">
                  <span className="sticky-compact-name">{currentHero.name}</span>
                  {activeSkin && activeSkin.id !== heroSkins[0]?.id ? (
                    <span className="sticky-compact-epithet">「{activeSkin.name}」</span>
                  ) : currentHero.title ? (
                    <span className="sticky-compact-epithet">「{currentHero.title}」</span>
                  ) : null}
                </div>
                {displayQuote && (
                  <p className="sticky-compact-quote" title={displayQuote}>
                    “{displayQuote}”
                  </p>
                )}
              </div>
            </div>

            <nav className="detail-tabs-bar">
              <button
                type="button"
                className={`detail-tab-btn ${activeTab === 'combat' ? 'active' : ''}`}
                onClick={() => setActiveTab('combat')}
              >
                <Zap size={14} />
                <span>I. Tác Chiến & Kỹ Năng</span>
              </button>
              <button
                type="button"
                className={`detail-tab-btn active-secret ${activeTab === 'secret' ? 'active' : ''}`}
                onClick={() => setActiveTab('secret')}
              >
                <Lock size={14} />
                <span>II. Hồ Sơ Mật</span>
              </button>
              <button
                type="button"
                className={`detail-tab-btn active-lore ${activeTab === 'lore' ? 'active' : ''}`}
                onClick={() => setActiveTab('lore')}
              >
                <BookOpen size={14} />
                <span>III. Sử Thi & Quan Hệ</span>
              </button>
              <button
                type="button"
                className={`detail-tab-btn active-spotlight ${activeTab === 'spotlight' ? 'active' : ''}`}
                onClick={() => setActiveTab('spotlight')}
              >
                <PlayCircle size={14} />
                <span>IV. Tâm Điểm Tướng</span>
                <span className="tab-badge-hd">HD</span>
              </button>
            </nav>

          </div>
        </div>

        {/* Main Content Body */}
        <main className="detail-tab-pane">
          {/* ================================================================
              TAB 1: TÁC CHIẾN & KỸ NĂNG (TACTICAL CODEX - MINIMALIST)
              ================================================================ */}
          {activeTab === 'combat' && (
            <div className="animate-fade-in">
              {/* Form Switcher for heroes with altForms */}
              {currentHero.altForms && currentHero.altForms.length > 0 && (
                <div className="form-switcher" style={{ marginBottom: '20px' }}>
                  <span className="form-switcher-label">Hình thái tác chiến:</span>
                  <div className="form-switcher-buttons">
                    {allForms.map((f) => (
                      <button
                        key={f.id ?? 'main'}
                        type="button"
                        className={`form-switcher-btn ${activeFormId === f.id ? 'active' : ''}`}
                        style={activeFormId === f.id ? { borderColor: faction?.color, color: faction?.color } : undefined}
                        onClick={() => { setActiveFormId(f.id); setActiveSkillIndex(0); }}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                  {currentHero.vgvdForms && (
                    <span className="form-vgvd-note" title={`VGVD có ${currentHero.vgvdForms.length} dạng: ${currentHero.vgvdForms.join(', ')}`}>
                      VGVD: {currentHero.vgvdForms.join(' · ')}
                    </span>
                  )}
                </div>
              )}

              <div className="tactical-codex-grid">
                {/* Left Column: Skill Showcase & Tactical Directives */}
                <div className="codex-left-col">
                  <div className="codex-section-header">
                    <h3 className="codex-section-title">
                      <Zap size={14} style={{ color: faction?.color || '#0284c7' }} />
                      <span>BỘ CHIÊU THỨC QUÂN ĐẠO</span>
                    </h3>
                    <span className="codex-badge-minimal">4 KỸ NĂNG</span>
                  </div>

                  {/* 4 Skill Selector Bar */}
                  <div className="skill-selector-bar">
                    {displaySkills.map((skill, idx) => {
                      const slotMeta = slotLabels[skill.slot] || { roman: String(idx), name: skill.slot };
                      return (
                        <button
                          key={skill.slot}
                          type="button"
                          className={`skill-selector-item ${activeSkillIndex === idx ? 'active' : ''}`}
                          style={{
                            borderColor: activeSkillIndex === idx ? (faction?.color || '#0284c7') : undefined
                          }}
                          onClick={() => setActiveSkillIndex(idx)}
                        >
                          <div className="skill-icon-wrap">
                            {skill.iconUrl ? (
                              <img src={skill.iconUrl} alt={skill.name} className="skill-icon-img" />
                            ) : (
                              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>
                                {slotMeta.roman}
                              </span>
                            )}
                          </div>
                          <span className="skill-roman-slot">{slotMeta.roman} // {slotMeta.name}</span>
                          <span className="skill-short-name">{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Skill Deep Dive */}
                  {activeSkill && (
                    <div className="active-skill-card">
                      <div className="skill-card-top-row">
                        <div className="skill-title-group">
                          <span className="skill-slot-tag">
                            [{slotLabels[activeSkill.slot]?.roman || 'SKILL'}] {slotLabels[activeSkill.slot]?.name}
                          </span>
                          <h4 className="skill-full-name">{activeSkill.name}</h4>
                        </div>

                        <div className="skill-meta-pills">
                          <span className={`skill-meta-pill ${getDamageBadgeClass(activeSkill.damageType)}`}>
                            {activeSkill.damageType}
                          </span>
                          <span className="skill-meta-pill">Hồi chiêu: {activeSkill.cooldown}</span>
                          {activeSkill.energyCost !== '0' && activeSkill.energyCost !== 'Năng lượng' && (
                            <span className="skill-meta-pill">Tiêu hao: {activeSkill.energyCost}</span>
                          )}
                        </div>
                      </div>

                      <p className="skill-description-text">{activeSkill.description}</p>

                      {activeSkill.comboTip && (
                        <div className="skill-directive-box">
                          <span className="directive-label">Mẹo kết hợp:</span>
                          <span>{activeSkill.comboTip}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tactical Directives List */}
                  {currentHero.battleTips && currentHero.battleTips.length > 0 && (
                    <div className="tactical-tips-card">
                      <div className="codex-section-header" style={{ marginBottom: '12px' }}>
                        <h4 className="codex-section-title">
                          <Flame size={14} style={{ color: '#f59e0b' }} />
                          <span>CHỈ DẪN TÁC CHIẾN THỰC ĐỊA</span>
                        </h4>
                        <span className="codex-badge-minimal">GIÁO ÁN CHIẾN TRƯỜNG</span>
                      </div>

                      <div className="tactical-tips-list-wrap">
                        {currentHero.battleTips.map((tip, idx) => (
                          <div key={idx} className="tactical-tip-row">
                            <span className="tip-order-number">{String(idx + 1).padStart(2, '0')}</span>
                            <span className="tip-content-text">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Combat Matrix & Equipment */}
                <div className="codex-right-col">
                  {/* Combat Matrix Card */}
                  <div className="combat-matrix-card">
                    <div className="codex-section-header">
                      <h4 className="codex-section-title">
                        <Shield size={14} style={{ color: faction?.color || '#0284c7' }} />
                        <span>MA TRẬN NĂNG LỰC CHIẾN THUẬT</span>
                      </h4>
                      <span className="codex-badge-minimal">ĐỘ ĐỘC BẢN: {currentHero.stats.difficulty}/10</span>
                    </div>

                    <div className="matrix-radar-box">
                      <RadarChart stats={currentHero.stats} color={faction?.color || '#0284c7'} />
                    </div>

                    <div className="matrix-slender-bars">
                      <div className="matrix-bar-item">
                        <span className="matrix-bar-label">Sát thương</span>
                        <div className="matrix-bar-track">
                          <div className="matrix-bar-fill fill-red" style={{ width: `${currentHero.stats.damage * 10}%` }} />
                        </div>
                        <span className="matrix-bar-val">{currentHero.stats.damage}</span>
                      </div>

                      <div className="matrix-bar-item">
                        <span className="matrix-bar-label">Chống chịu</span>
                        <div className="matrix-bar-track">
                          <div className="matrix-bar-fill fill-green" style={{ width: `${currentHero.stats.toughness * 10}%` }} />
                        </div>
                        <span className="matrix-bar-val">{currentHero.stats.toughness}</span>
                      </div>

                      <div className="matrix-bar-item">
                        <span className="matrix-bar-label">Cơ động</span>
                        <div className="matrix-bar-track">
                          <div className="matrix-bar-fill fill-blue" style={{ width: `${currentHero.stats.mobility * 10}%` }} />
                        </div>
                        <span className="matrix-bar-val">{currentHero.stats.mobility}</span>
                      </div>

                      <div className="matrix-bar-item">
                        <span className="matrix-bar-label">Khống chế</span>
                        <div className="matrix-bar-track">
                          <div className="matrix-bar-fill fill-purple" style={{ width: `${currentHero.stats.crowdControl * 10}%` }} />
                        </div>
                        <span className="matrix-bar-val">{currentHero.stats.crowdControl}</span>
                      </div>

                      <div className="matrix-bar-item">
                        <span className="matrix-bar-label">Độ khó</span>
                        <div className="matrix-bar-track">
                          <div className="matrix-bar-fill fill-amber" style={{ width: `${currentHero.stats.difficulty * 10}%` }} />
                        </div>
                        <span className="matrix-bar-val">{currentHero.stats.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Equipment */}
                  {currentHero.recommendedItems && currentHero.recommendedItems.length > 0 && (
                    <div className="equipment-minimal-card">
                      <div className="codex-section-header" style={{ marginBottom: '12px' }}>
                        <h4 className="codex-section-title">
                          <ShieldAlert size={14} style={{ color: '#0284c7' }} />
                          <span>TRANG BỊ TRẤN PHÁI TIÊU CHUẨN</span>
                        </h4>
                        <span className="codex-badge-minimal">6 MÓN</span>
                      </div>

                      <div className="equipment-chips-grid">
                        {currentHero.recommendedItems.map((item, idx) => (
                          <div key={idx} className="equipment-chip-item">
                            <span className="item-index-badge">{idx + 1}</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 2: HỒ SƠ MẬT (CLASSIFIED ARCHIVAL DOSSIER)
              ================================================================ */}
          {activeTab === 'secret' && (
            <div className="animate-fade-in classified-dossier-wrap">
              {/* Archival Document Header */}
              <div className="archival-doc-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={16} style={{ color: '#b45309' }} />
                  <span className="archival-file-code">
                    LƯU TRỮ VĂN KHỐ ATHANOR // MÃ HỒ SƠ: ATH-SEC-{currentHero.id.toUpperCase()}
                  </span>
                </div>
                <span className="archival-stamp-seal">
                  <Lock size={12} />
                  <span>TUYỆT MẬT // LEVEL-S CONFIDENTIAL</span>
                </span>
              </div>

              {/* Dossier Blocks Grid */}
              <div className="dossier-blocks-grid">
                {/* 1. Vai trò trong hội */}
                {currentHero.secretProfile?.organizationRole && (
                  <div className="dossier-block-card">
                    <div className="dossier-block-head">
                      <Building2 size={15} style={{ color: '#0284c7' }} />
                      <h4 className="dossier-block-title">CƯƠNG VỊ // TỔ CHỨC CƠ MẬT</h4>
                    </div>
                    <p className="dossier-block-text">{currentHero.secretProfile.organizationRole}</p>
                  </div>
                )}

                {/* 2. Giai thoại đời thường */}
                {currentHero.secretProfile?.otherStory && (
                  <div className="dossier-block-card">
                    <div className="dossier-block-head">
                      <BookOpen size={15} style={{ color: '#10b981' }} />
                      <h4 className="dossier-block-title">GIAI THOẠI ĐỜI THƯỜNG // NGOẠI SỬ</h4>
                    </div>
                    <p className="dossier-block-text">{currentHero.secretProfile.otherStory}</p>
                  </div>
                )}

                {/* 3. Bí Mật Cốt Lõi (Tuyệt mật) */}
                {currentHero.secretProfile?.secret && (
                  <div className="dossier-block-card card-classified-secret card-full-width">
                    <div className="dossier-block-head" style={{ borderColor: 'rgba(180, 83, 9, 0.2)' }}>
                      <Lock size={15} style={{ color: '#b45309' }} />
                      <h4 className="dossier-block-title" style={{ color: '#92400e' }}>
                        BÍ MẬT SÂU KÍN // ĐIỀU CHƯA TỪNG ĐƯỢC TIẾT LỘ
                      </h4>
                    </div>
                    <p className="classified-secret-text">
                      “{currentHero.secretProfile.secret}”
                    </p>
                  </div>
                )}

                {/* 4. Bản Hùng Ca Sử Thi */}
                <div className="dossier-block-card card-full-width">
                  <div className="dossier-block-head">
                    <Zap size={15} style={{ color: '#f59e0b' }} />
                    <h4 className="dossier-block-title">BẢN HÙNG CA SỬ THI // CHIẾN TÍCH KHẮC CỐT</h4>
                  </div>
                  <div className="epic-chronicle-prose">
                    {specialLoreParagraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 3: SỬ THI & QUAN HỆ (CHRONICLE & CONSTELLATION)
              ================================================================ */}
          {activeTab === 'lore' && (
            <div className="animate-fade-in chronicle-layout-wrap">
              {/* Manuscript Biography */}
              <div className="biography-manuscript-card">
                <div className="manuscript-header">
                  <h4 className="manuscript-title">
                    <BookOpen size={15} style={{ color: '#0284c7' }} />
                    <span>BIÊN NIÊN SỬ ĐẠI LỤC ATHANOR</span>
                  </h4>
                  <span className="codex-badge-minimal">CHƯƠNG KÝ ỨC</span>
                </div>
                <div className="manuscript-paragraphs">
                  {paragraphs.map((p, idx) => (
                    <p key={idx} className="manuscript-p">{p}</p>
                  ))}
                </div>
              </div>

              {/* Sơ đồ Các Mối Duyên Nợ & Quan Hệ Chiến Sự (Arena of Valor Astrolabe Constellation) */}
              <HeroRelationsOrbitDiagram
                hero={currentHero}
                onSelectHero={onSelectHero}
              />
            </div>
          )}

          {/* ================================================================
              TAB 4: TÂM ĐIỂM TƯỚNG (CINEMATIC BROADCAST THEATER)
              ================================================================ */}
          {activeTab === 'spotlight' && (
            <div className="animate-fade-in spotlight-theater-wrap">
              {/* Broadcast Top Card */}
              <div className="spotlight-broadcast-card">
                <div className="broadcast-top-meta">
                  <span className="broadcast-official-tag">
                    <Video size={13} />
                    <span>GARENA LIÊN QUÂN MOBILE // OFFICIAL SPOTLIGHT</span>
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748b' }}>
                    {displayRole}
                  </span>
                </div>

                <h3 className="broadcast-title">
                  TÂM ĐIỂM TƯỚNG: {currentHero.name.toUpperCase()}
                  <span className="broadcast-title-sub"> — 「{currentHero.title}」</span>
                </h3>

                <p className="broadcast-summary-text">{spotlightInfo.highlightSummary}</p>

                <div className="broadcast-action-buttons">
                  <a
                    href={spotlightInfo.directWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight-primary-btn"
                  >
                    <PlayCircle size={15} />
                    <span>Mở Trên YouTube</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href={spotlightInfo.youtubeSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight-secondary-btn"
                  >
                    <Sparkles size={14} />
                    <span>Tìm Highlight & Giáo Án</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    type="button"
                    className="spotlight-edit-btn"
                    onClick={() => handleOpenEditor('media', 'spotlightVideo')}
                    title="Đổi hoặc gắn link video YouTube tùy chỉnh cho tướng này"
                  >
                    <Edit3 size={13} />
                    <span>Gắn link video riêng</span>
                  </button>
                </div>
              </div>

              {/* 16:9 Cinema Player Pedestal */}
              <div className="broadcast-player-pedestal">
                {spotlightInfo.embedUrl ? (
                  <div className="player-aspect-frame">
                    <iframe
                      src={spotlightInfo.embedUrl}
                      title={`Tâm Điểm Tướng ${currentHero.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="spotlight-fallback-hero" style={{ minHeight: '340px' }}>
                    <img
                      src={displayBanner}
                      alt={currentHero.name}
                      className="spotlight-fallback-banner"
                    />
                    <div className="spotlight-fallback-scrim" />
                    <div className="spotlight-fallback-content">
                      <a
                        href={spotlightInfo.directWatchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="spotlight-play-fab"
                        title="Bấm để xem video trên YouTube"
                      >
                        <PlayCircle size={48} />
                      </a>
                      <div className="spotlight-fallback-text">
                        <span className="fallback-tag">VIDEO CẨM NANG CHÍNH THỨC</span>
                        <h4 className="fallback-heading">Xem Tâm Điểm Tướng {currentHero.name} Trên YouTube</h4>
                        <p className="fallback-sub">
                          Khám phá video hướng dẫn chi tiết về kỹ năng, bảng ngọc và lối đánh của {currentHero.name} phát hành bởi Garena Liên Quân Mobile.
                        </p>
                      </div>
                      <a
                        href={spotlightInfo.directWatchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="spotlight-watch-now-btn"
                      >
                        <span>Xem Ngay Trên YouTube</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Combo Pipeline Flow (3-Phase Tactical Progression) */}
              <div className="combo-pipeline-card">
                <div className="codex-section-header" style={{ marginBottom: '6px' }}>
                  <h4 className="codex-section-title">
                    <Zap size={14} style={{ color: '#0284c7' }} />
                    <span>QUY TRÌNH COMBO LIÊN HOÀN 3 BƯỚC</span>
                  </h4>
                  <span className="codex-badge-minimal">CHIẾN THUẬT TIÊU CHUẨN</span>
                </div>

                <div className="pipeline-steps-flow">
                  {displaySkills.filter((s) => s.comboTip).slice(0, 3).map((skill, idx) => {
                    const phases = ['01 // MỞ GIAO TRANH', '02 // DỒN SÁT THƯƠNG', '03 // DỨT ĐIỂM & RÚT LUI'];
                    return (
                      <div key={skill.slot} className="pipeline-step-item">
                        <span className="pipeline-step-phase">
                          <Zap size={11} />
                          <span>{phases[idx] || `BƯỚC ${idx + 1}`}</span>
                        </span>
                        <span className="pipeline-step-skill">
                          [{slotLabels[skill.slot]?.roman || 'S'}] {skill.name}
                        </span>
                        <p className="pipeline-step-desc">{skill.comboTip}</p>
                      </div>
                    );
                  })}
                  {!displaySkills.some((s) => s.comboTip) && (
                    <div className="pipeline-step-item" style={{ gridColumn: '1 / -1' }}>
                      <p className="pipeline-step-desc" style={{ fontStyle: 'italic' }}>
                        Khởi đầu bằng kỹ năng khống chế mở đường, xả sát thương dồn ép chủ lực đối phương và để dành kỹ năng cơ động rút lui an toàn.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tactical Directives List */}
              <div className="tactical-tips-card" style={{ background: '#faf8f5' }}>
                <div className="codex-section-header" style={{ marginBottom: '12px' }}>
                  <h4 className="codex-section-title">
                    <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                    <span>TỔNG KẾT MẸO MŨI NHỌN</span>
                  </h4>
                  <span className="codex-badge-minimal">ĐÚC KẾT</span>
                </div>

                <div className="tactical-tips-list-wrap">
                  {spotlightInfo.keyTactics.map((tip, idx) => (
                    <div key={idx} className="tactical-tip-row">
                      <span className="tip-order-number" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                        ✓
                      </span>
                      <span className="tip-content-text">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* 129 Heroes Cycler Footer */}
        {allActiveHeroes.length > 1 && (
          <footer className="detail-footer-cycler">
            {prevHero && (
              <button
                type="button"
                className="cycler-btn cycler-btn-prev"
                onClick={() => onSelectHero(prevHero)}
                title={`Chuyển sang tướng trước: ${prevHero.name}`}
              >
                <ChevronLeft size={20} />
                <img src={prevHero.avatarUrl} alt={prevHero.name} className="cycler-avatar" />
                <div className="cycler-text-col">
                  <span className="cycler-sub">TƯỚNG TRƯỚC ĐÓ</span>
                  <span className="cycler-name">{prevHero.name}</span>
                </div>
              </button>
            )}

            {nextHero && (
              <button
                type="button"
                className="cycler-btn cycler-btn-next"
                onClick={() => onSelectHero(nextHero)}
                title={`Chuyển sang tướng tiếp theo: ${nextHero.name}`}
              >
                <div className="cycler-text-col" style={{ alignItems: 'flex-end' }}>
                  <span className="cycler-sub">TƯỚNG TIẾP THEO</span>
                  <span className="cycler-name">{nextHero.name}</span>
                </div>
                <img src={nextHero.avatarUrl} alt={nextHero.name} className="cycler-avatar" />
                <ChevronRight size={20} />
              </button>
            )}
          </footer>
        )}
      </div>

      {/* Hero Image & Data Editor Modal */}
      {isEditorOpen && (
        <HeroImageEditorModal
          hero={currentHero}
          initialTab={editorInitialTab}
          focusField={editorFocusField}
          onClose={() => setIsEditorOpen(false)}
          onUpdated={(updated) => {
            setCurrentHero(updated);
          }}
        />
      )}

      {/* Fullscreen Skin Splash Art Lightbox Modal */}
      {isSkinModalOpen && activeSkin && (
        <div
          className="skin-lightbox-backdrop animate-fade-in"
          onClick={() => setIsSkinModalOpen(false)}
        >
          <div
            className="skin-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="skin-lightbox-close-btn"
              onClick={() => setIsSkinModalOpen(false)}
              title="Đóng xem toàn cảnh (Esc)"
            >
              <X size={20} />
            </button>

            <div className="skin-lightbox-media-wrap">
              <img
                src={activeSkin.bannerUrl}
                alt={activeSkin.name}
                className="skin-lightbox-splash-img"
                onError={(e) => {
                  e.currentTarget.src = currentHero.bannerUrl;
                }}
              />
              <div className="skin-lightbox-vignette" />
            </div>

            {/* Lightbox Skin Info Panel */}
            <div className="skin-lightbox-footer-panel">
              <div className="skin-lightbox-info-left">
                <div className="skin-lightbox-tier-row">
                  <span className={`skin-lightbox-tier-badge tier-${getSkinTierSlug(activeSkin.tier)}`}>
                    {activeSkin.tier || 'Trang Phục'}
                  </span>
                  <span className="skin-lightbox-hero-name">{currentHero.name}</span>
                </div>
                <h2 className="skin-lightbox-skin-name">{activeSkin.name}</h2>
                {activeSkin.description && (
                  <p className="skin-lightbox-desc">{activeSkin.description}</p>
                )}
                {activeSkin.quote && (
                  <p className="skin-lightbox-quote">“{activeSkin.quote}”</p>
                )}
                {activeSkin.effects && activeSkin.effects.length > 0 && (
                  <div className="skin-lightbox-effects-row">
                    {activeSkin.effects.map((ef, idx) => (
                      <span key={idx} className="skin-lightbox-effect-tag">
                        ✦ {ef}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Skin Navigation Cycler */}
              <div className="skin-lightbox-nav-buttons">
                <button
                  type="button"
                  className="skin-nav-circle-btn"
                  title="Trang phục trước"
                  onClick={() => {
                    const curIdx = heroSkins.findIndex((s) => s.id === activeSkin.id);
                    const prevIdx = (curIdx - 1 + heroSkins.length) % heroSkins.length;
                    setActiveSkinId(heroSkins[prevIdx].id);
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="skin-lightbox-counter">
                  {heroSkins.findIndex((s) => s.id === activeSkin.id) + 1} / {heroSkins.length}
                </span>
                <button
                  type="button"
                  className="skin-nav-circle-btn"
                  title="Trang phục kế tiếp"
                  onClick={() => {
                    const curIdx = heroSkins.findIndex((s) => s.id === activeSkin.id);
                    const nextIdx = (curIdx + 1) % heroSkins.length;
                    setActiveSkinId(heroSkins[nextIdx].id);
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
