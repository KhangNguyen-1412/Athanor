import React, { useState, useEffect, useMemo } from 'react';
import type { Hero, Skill, HeroForm } from '../../types/athanor';
import { FACTIONS_DATA } from '../../data/factionsData';
import { HEROES_DATA } from '../../data/heroesData';
import { heroCustomStore } from '../../utils/heroCustomStore';
import { HeroImageEditorModal } from './HeroImageEditorModal';
import { RadarChart } from './RadarChart';
import {
  X,
  ArrowRight,
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
  CheckCircle2
} from 'lucide-react';
import { getHeroSpotlight } from '../../data/spotlightData';
import { useBodyScrollLock } from '../../utils/useBodyScrollLock';
import './HeroModal.css';

interface HeroModalProps {
  hero: Hero | null;
  onClose: () => void;
  onSelectRelatedHero: (hero: Hero) => void;
}

type ModalTab = 'combat' | 'secret' | 'lore' | 'spotlight';

export const HeroModal: React.FC<HeroModalProps> = ({
  hero,
  onClose,
  onSelectRelatedHero
}) => {
  useBodyScrollLock(Boolean(hero));

  const [currentHero, setCurrentHero] = useState<Hero | null>(() => hero ? heroCustomStore.applyOverride(hero) : null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [overrideTick, setOverrideTick] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<ModalTab>('combat');
  const [activeSkillIndex, setActiveSkillIndex] = useState<number>(0);
  const [activeFormId, setActiveFormId] = useState<string | null>(null);

  useEffect(() => {
    if (hero) {
      setCurrentHero(heroCustomStore.applyOverride(hero));
      setActiveSkillIndex(0);
      setActiveTab('combat');
    }
  }, [hero, overrideTick]);

  useEffect(() => {
    setActiveSkillIndex(0);
    setActiveFormId(null);
  }, [hero]);

  useEffect(() => {
    const handleUpdate = () => {
      setOverrideTick((v) => v + 1);
      if (hero) {
        setCurrentHero(heroCustomStore.applyOverride(hero));
      }
    };
    window.addEventListener('athanor-hero-updated', handleUpdate);
    return () => window.removeEventListener('athanor-hero-updated', handleUpdate);
  }, [hero]);

  // Find relationships — apply heroCustomStore override (excluding deleted heroes)
  const allHeroesWithOverrides = useMemo(() => {
    return heroCustomStore.getActiveHeroes(HEROES_DATA);
  }, [overrideTick]);

  const heroRelations = useMemo(() => {
    if (!currentHero) return [];
    return heroCustomStore.getHeroRelations(currentHero.id).map((rel) => {
      const isSource = rel.sourceHeroId === currentHero.id;
      const relatedHeroId = isSource ? rel.targetHeroId : rel.sourceHeroId;
      const relatedHero = allHeroesWithOverrides.find((h) => h.id === relatedHeroId);
      return {
        ...rel,
        relatedHero
      };
    }).filter((r) => r.relatedHero !== undefined);
  }, [currentHero, allHeroesWithOverrides]);

  // Direct related heroes
  const directRelatedHeroes = useMemo(() => {
    if (!currentHero) return [];
    return (currentHero.relatedHeroIds || [])
      .map((rId) => allHeroesWithOverrides.find((h) => h.id === rId))
      .filter((h): h is Hero => h !== undefined);
  }, [currentHero, allHeroesWithOverrides]);

  if (!hero || !currentHero) return null;

  const slotLabels: Record<string, string> = {
    passive: 'Nội tại',
    skill1: 'Chiêu 1',
    skill2: 'Chiêu 2',
    ultimate: 'Chiêu cuối'
  };

  const getDamageBadgeClass = (dmgType: string) => {
    switch (dmgType) {
      case 'Chuẩn': return 'dmg-badge-true';
      case 'Phép': return 'dmg-badge-magic';
      case 'Vật lý': return 'dmg-badge-physical';
      default: return 'dmg-badge-support';
    }
  };

  const handleDeleteHero = () => {
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa vị tướng "${currentHero.name}" khỏi Athanor?\n\nTướng này sẽ được ẩn khỏi Danh Bạ, Bản Đồ và Hồ Sơ (bạn có thể khôi phục lại bất kỳ lúc nào từ danh bạ tướng).`
    );
    if (confirmed) {
      heroCustomStore.deleteHero(currentHero.id);
      onClose();
    }
  };

  const faction = FACTIONS_DATA[currentHero.factionId];

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
  const displayAvatar = activeForm?.avatarUrl ?? currentHero.avatarUrl;
  const displayBanner = activeForm?.bannerUrl ?? currentHero.bannerUrl;
  const displayRole = activeForm?.role ?? currentHero.role;

  const activeSkill: Skill = displaySkills[activeSkillIndex] || displaySkills[0];

  const paragraphs = currentHero.lore.split('\n\n');
  const specialLoreParagraphs = (currentHero.specialLore || currentHero.lore).split('\n\n');
  const spotlightInfo = getHeroSpotlight(currentHero, faction?.name);

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
        className="minimal-modal-container animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Hero Header */}
        <div className="minimal-hero-header">
          <div className="minimal-header-cover">
            <img src={displayBanner} alt={currentHero.name} className="minimal-banner-img" />
            <div className="minimal-banner-scrim" />
          </div>

          {/* Action Row */}
          <div className="minimal-top-actions">
            <button
              type="button"
              className={`minimal-action-btn action-spotlight-btn ${activeTab === 'spotlight' ? 'active-spotlight-toggle' : ''}`}
              onClick={() => setActiveTab('spotlight')}
              title="Xem video và cẩm nang Tâm Điểm Tướng chính thức của Garena"
            >
              <PlayCircle size={13} className="spotlight-btn-icon" />
              <span>Xem Tâm Điểm</span>
            </button>
            <button
              type="button"
              className="minimal-action-btn"
              onClick={() => setIsEditorOpen(true)}
              title="Chỉnh sửa thông tin, chỉ số, hình ảnh và mối quan hệ"
            >
              <Edit3 size={13} />
              <span>Sửa thông tin tướng</span>
            </button>
            <button
              type="button"
              className="minimal-action-btn action-delete-btn"
              onClick={handleDeleteHero}
              title="Xóa vị tướng này khỏi danh bạ Athanor"
            >
              <Trash2 size={13} />
              <span>Xóa tướng</span>
            </button>
            <button
              type="button"
              className="minimal-close-btn"
              onClick={onClose}
              title="Đóng hồ sơ"
            >
              <X size={16} />
            </button>
          </div>

          {/* Hero Identity Row */}
          <div className="minimal-hero-intro">
            <img src={displayAvatar} alt={currentHero.name} className="minimal-hero-avatar" />
            <div className="minimal-intro-text">
              <div className="minimal-tags-wrap">
                <span
                  className="minimal-pill pill-faction"
                  style={{
                    color: faction?.color,
                    borderColor: `${faction?.color}35`,
                    backgroundColor: `${faction?.color}12`
                  }}
                >
                  {faction?.name}
                </span>
                <span className="minimal-pill pill-role">
                  {displayRole}{!activeFormId && currentHero.secondaryRole ? ` • ${currentHero.secondaryRole}` : ''}
                </span>
                {currentHero.birthplace && (
                  <span className="minimal-pill pill-meta" title="Nơi sinh">
                    <MapPin size={11} className="pill-icon" />
                    <span>{currentHero.birthplace}</span>
                  </span>
                )}
                {currentHero.birthday && (
                  <span className="minimal-pill pill-meta" title="Sinh nhật">
                    <Calendar size={11} className="pill-icon" />
                    <span>{currentHero.birthday}</span>
                  </span>
                )}
                {currentHero.height && (
                  <span className="minimal-pill pill-meta" title="Chiều cao">
                    <Ruler size={11} className="pill-icon" />
                    <span>{currentHero.height}</span>
                  </span>
                )}
              </div>

              <h1 className="minimal-hero-name">
                {currentHero.name}
                <span className="minimal-hero-epithet">「{currentHero.title}」</span>
              </h1>

              <p className="minimal-hero-quote">
                “{currentHero.quote}”
              </p>
            </div>
          </div>

          {/* Minimalist Segmented Tabs Bar */}
          <nav className="minimal-tabs-bar">
            <button
              type="button"
              className={`minimal-tab-btn ${activeTab === 'combat' ? 'active' : ''}`}
              onClick={() => setActiveTab('combat')}
            >
              <Zap size={13} />
              <span>Tác Chiến & Kỹ Năng</span>
            </button>
            <button
              type="button"
              className={`minimal-tab-btn ${activeTab === 'secret' ? 'active active-secret' : ''}`}
              onClick={() => setActiveTab('secret')}
            >
              <Lock size={13} />
              <span>Hồ Sơ Mật</span>
            </button>
            <button
              type="button"
              className={`minimal-tab-btn ${activeTab === 'lore' ? 'active' : ''}`}
              onClick={() => setActiveTab('lore')}
            >
              <BookOpen size={13} />
              <span>Sử Thi & Quan Hệ</span>
            </button>
            <button
              type="button"
              className={`minimal-tab-btn ${activeTab === 'spotlight' ? 'active active-spotlight' : ''}`}
              onClick={() => setActiveTab('spotlight')}
            >
              <PlayCircle size={13} />
              <span>Tâm Điểm Tướng</span>
              <span className="tab-live-badge">HD</span>
            </button>
          </nav>
        </div>

        {/* Minimalist Scrollable Content Body */}
        <div className="minimal-modal-body">
          {/* TAB 1: COMBAT & SKILLS */}
          {activeTab === 'combat' && (
            <div className="minimal-tab-pane animate-fade-in">
              {/* Skill Selector Row */}
              <div className="minimal-skills-section">
                {/* Form Switcher — only for heroes with altForms */}
                {currentHero.altForms && currentHero.altForms.length > 0 && (
                  <div className="form-switcher">
                    <span className="form-switcher-label">Hình thái:</span>
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

                <div className="minimal-section-title">
                  BỘ CHIÊU THỨC{activeForm ? ` — ${activeForm.formName.toUpperCase()}` : ' QUÂN ĐẠO'}
                </div>

                <div className="minimal-skill-selector">
                  {displaySkills.map((skill, idx) => (
                    <button
                      key={skill.slot}
                      type="button"
                      className={`minimal-skill-btn ${activeSkillIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveSkillIndex(idx)}
                      style={{
                        borderColor: activeSkillIndex === idx ? faction?.color : undefined
                      }}
                    >
                      <div className="minimal-skill-icon-frame">
                        {skill.iconUrl ? (
                          <img src={skill.iconUrl} alt={skill.name} className="minimal-skill-icon" />
                        ) : (
                          <span className="minimal-skill-glyph">
                            {idx === 0 ? 'P' : idx === 3 ? 'Ult' : `S${idx}`}
                          </span>
                        )}
                      </div>
                      <div className="minimal-skill-btn-text">
                        <span className="minimal-skill-slot">{slotLabels[skill.slot]}</span>
                        <span className="minimal-skill-name">{skill.name}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Active Skill Details Card */}
                <div className="minimal-active-skill-card">
                  <div className="minimal-skill-header-row">
                    <div className="minimal-active-skill-lead">
                      {activeSkill.iconUrl && (
                        <div className="minimal-active-icon-wrap">
                          <img src={activeSkill.iconUrl} alt={activeSkill.name} className="minimal-active-icon-img" />
                        </div>
                      )}
                      <div className="minimal-skill-title-col">
                        <h4 className="minimal-active-skill-title">{activeSkill.name}</h4>
                        <span className="minimal-active-skill-slot">
                          {slotLabels[activeSkill.slot]} // {activeSkill.damageType}
                        </span>
                      </div>
                    </div>

                    <div className="minimal-skill-metrics">
                      <span className={`minimal-dmg-badge ${getDamageBadgeClass(activeSkill.damageType)}`}>
                        {activeSkill.damageType}
                      </span>
                      <span className="minimal-metric-chip">Hồi chiêu: {activeSkill.cooldown}</span>
                      <span className="minimal-metric-chip">Tiêu hao: {activeSkill.energyCost}</span>
                    </div>
                  </div>

                  <p className="minimal-skill-description">{activeSkill.description}</p>

                  {activeSkill.comboTip && (
                    <div className="minimal-combo-tip">
                      <span className="minimal-combo-label">Mẹo thực chiến:</span>
                      <p className="minimal-combo-text">{activeSkill.comboTip}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats & Tactics Grid */}
              <div className="minimal-combat-grid">
                {/* Tactical Radar Chart */}
                <div className="minimal-card combat-radar-card">
                  <h4 className="minimal-card-heading">CHỈ SỐ NĂNG LỰC TÁC CHIẾN</h4>
                  <div className="radar-wrapper">
                    <RadarChart stats={currentHero.stats} color={faction?.color || '#007ba7'} size={200} />
                  </div>
                </div>

                {/* Doctrine Tips & Armory */}
                <div className="minimal-card combat-doctrine-card">
                  <h4 className="minimal-card-heading">QUY TẮC CHIẾN ĐẤU</h4>
                  <ul className="minimal-tips-list">
                    {currentHero.battleTips.map((tip, idx) => (
                      <li key={idx}>
                        <span className="tip-bullet">•</span>
                        <span className="tip-text">{tip}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="minimal-card-heading armory-heading">TRANG BỊ ĐỀ CỬ</h4>
                  <div className="minimal-armory-pills">
                    {currentHero.recommendedItems.map((item, idx) => (
                      <span key={idx} className="minimal-armory-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SECRET DOSSIER */}
          {activeTab === 'secret' && (
            <div className="minimal-tab-pane animate-fade-in">
              <div className="minimal-secret-stack">
                {/* Card 1: Role in Organization */}
                <div className="minimal-secret-card">
                  <div className="secret-card-header">
                    <Building2 size={16} className="secret-header-icon text-cerulean" />
                    <h3 className="secret-card-title">VAI TRÒ TRONG HỘI & TỔ CHỨC</h3>
                  </div>
                  <div className="secret-card-content">
                    <div className="role-highlight-text">
                      {currentHero.secretProfile?.organizationRole || (currentHero.factionId === 'tu_do' ? 'Lãng khách độc hành / Hiệp sĩ tự do' : 'Thành viên thế lực Athanor')}
                    </div>
                    <p className="role-note-text">
                      {currentHero.factionId === 'tu_do'
                        ? 'Nhân vật tự do, hành hiệp độc lập hoặc du hành thứ nguyên, không thuộc địa giới hay vương triều bảo hộ nào.'
                        : <>Trọng trách chiến lược thuộc thế lực <strong>{faction?.name}</strong>. Giữ vị thế cốt lõi trong các quyết sách và chiến dịch lịch sử.</>}
                    </p>
                  </div>
                </div>

                {/* Card 2: Untold Story / Anecdote */}
                <div className="minimal-secret-card">
                  <div className="secret-card-header">
                    <BookOpen size={16} className="secret-header-icon text-cerulean" />
                    <h3 className="secret-card-title">CÂU CHUYỆN KHÁC // GIAI THOẠI ĐỜI THƯỜNG</h3>
                  </div>
                  <div className="secret-card-content">
                    <p className="other-story-prose">
                      {currentHero.secretProfile?.otherStory || 'Chưa có ghi chép ngoại truyện bổ sung.'}
                    </p>
                  </div>
                </div>

                {/* Card 3: Deep Secret */}
                <div className="minimal-secret-card secret-classified-card">
                  <div className="secret-card-header">
                    <ShieldAlert size={16} className="secret-header-icon text-jasper" />
                    <h3 className="secret-card-title text-jasper">BÍ MẬT CỦA TƯỚNG ĐÓ // TUYỆT MẬT</h3>
                  </div>
                  <div className="secret-card-content">
                    <p className="classified-secret-prose">
                      {currentHero.secretProfile?.secret || 'Hồ sơ bảo mật tối cao chưa được giải mật.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LORE & RELATIONS */}
          {activeTab === 'lore' && (
            <div className="minimal-tab-pane animate-fade-in">
              <div className="minimal-lore-stack">
                {/* Special Lore Chronicle */}
                <div className="minimal-lore-card special-chronicle-card">
                  <div className="lore-card-header">
                    <span className="lore-accent-badge">BẢN HÙNG CA SỬ THI</span>
                    <h3 className="lore-card-title">
                      CỐT TRUYỆN ĐẶC BIỆT: {currentHero.name.toUpperCase()}
                    </h3>
                  </div>
                  <div className="lore-prose-body">
                    {specialLoreParagraphs.map((para, idx) => (
                      <p key={idx} className={idx === 0 ? 'minimal-drop-cap' : ''}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Standard Lore */}
                <div className="minimal-lore-card">
                  <div className="lore-card-header">
                    <h3 className="lore-card-title">TIỂU SỬ ĐẠI LỤC ATHANOR</h3>
                  </div>
                  <div className="lore-prose-body muted-prose">
                    {paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Relations */}
                {heroRelations.length > 0 ? (
                  <div className="minimal-lore-card">
                    <div className="lore-card-header">
                      <h3 className="lore-card-title">SỢI DÂY ĐỊNH MỆNH</h3>
                    </div>
                    <div className="minimal-relations-grid">
                      {heroRelations.map((rel) => {
                        const related = rel.relatedHero!;
                        return (
                          <div
                            key={rel.id}
                            className="minimal-relation-item"
                            onClick={() => onSelectRelatedHero(related)}
                          >
                            <img src={related.avatarUrl} alt={related.name} className="relation-avatar" />
                            <div className="relation-content">
                              <div className="relation-name-row">
                                <span className="relation-name">{related.name}</span>
                                <span className="relation-type-chip">{rel.label}</span>
                              </div>
                              <p className="relation-desc">{rel.description}</p>
                            </div>
                            <ArrowRight size={13} className="relation-arrow" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : directRelatedHeroes.length > 0 ? (
                  <div className="minimal-lore-card">
                    <div className="lore-card-header">
                      <h3 className="lore-card-title">NHÂN VẬT LIÊN HỆ SỬ THI</h3>
                    </div>
                    <div className="minimal-relations-grid">
                      {directRelatedHeroes.map((related) => {
                        const relFaction = FACTIONS_DATA[related.factionId];
                        return (
                          <div
                            key={related.id}
                            className="minimal-relation-item"
                            onClick={() => onSelectRelatedHero(related)}
                          >
                            <img src={related.avatarUrl} alt={related.name} className="relation-avatar" />
                            <div className="relation-content">
                              <div className="relation-name-row">
                                <span className="relation-name">{related.name}</span>
                                <span className="relation-type-chip" style={{ color: relFaction?.color }}>
                                  {relFaction?.name || related.role}
                                </span>
                              </div>
                              <p className="relation-desc">「{related.title}」 — {related.role} thuộc {relFaction?.name || 'Athanor'}.</p>
                            </div>
                            <ArrowRight size={13} className="relation-arrow" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          {/* TAB 4: CHAMPION SPOTLIGHT (TÂM ĐIỂM TƯỚNG) */}
          {activeTab === 'spotlight' && (
            <div className="minimal-tab-pane animate-fade-in spotlight-pane">
              {/* Spotlight Top Header Card */}
              <div className="spotlight-header-card">
                <div className="spotlight-badge-row">
                  <span className="spotlight-official-badge">
                    <Video size={13} />
                    <span>GARENA LIÊN QUÂN MOBILE • OFFICIAL SPOTLIGHT</span>
                  </span>
                  <span className="spotlight-role-badge">
                    {displayRole}
                  </span>
                </div>
                <h2 className="spotlight-title">
                  TÂM ĐIỂM TƯỚNG: {currentHero.name.toUpperCase()}
                  <span className="spotlight-title-epithet"> — 「{currentHero.title}」</span>
                </h2>
                <p className="spotlight-desc">
                  {spotlightInfo.highlightSummary}
                </p>

                <div className="spotlight-actions-bar">
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
                    onClick={() => setIsEditorOpen(true)}
                    title="Đổi hoặc gắn link video YouTube tùy chỉnh cho tướng này"
                  >
                    <Edit3 size={13} />
                    <span>Gắn link video riêng</span>
                  </button>
                </div>
              </div>

              {/* Video Player Display */}
              <div className="spotlight-media-card">
                {spotlightInfo.embedUrl ? (
                  <div className="spotlight-player-container">
                    <iframe
                      className="spotlight-iframe"
                      src={spotlightInfo.embedUrl}
                      title={`Tâm Điểm Tướng ${currentHero.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="spotlight-fallback-hero">
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
                        <PlayCircle size={44} />
                      </a>
                      <div className="spotlight-fallback-text">
                        <span className="fallback-tag">VIDEO CẨM NANG CHÍNH THỨC</span>
                        <h3 className="fallback-heading">Xem Tâm Điểm Tướng {currentHero.name} Trên YouTube</h3>
                        <p className="fallback-sub">
                          Khám phá video hướng dẫn chi tiết về kỹ năng, bảng ngọc và mẹo tác chiến của {currentHero.name} từ Garena Liên Quân Mobile.
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

                <div className="spotlight-player-footer">
                  <div className="spotlight-source-info">
                    <span className="source-dot" />
                    <span>Phát hành bởi: <strong>{spotlightInfo.channelName}</strong> (Liên Quân Mobile eSports)</span>
                  </div>
                  <a
                    href={spotlightInfo.youtubeSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotlight-troubleshoot-link"
                  >
                    <span>Xem thêm mẹo giao tranh & giáo án {currentHero.name}</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Tactical Analysis & Combos Grid */}
              <div className="spotlight-tactics-grid">
                {/* Tactical Tips Card */}
                <div className="minimal-combat-card">
                  <div className="combat-card-header">
                    <Flame size={14} className="combat-card-icon" style={{ color: '#f59e0b' }} />
                    <h3 className="combat-card-title">MẸO TÁC CHIẾN MŨI NHỌN</h3>
                  </div>
                  <ul className="spotlight-tips-list">
                    {spotlightInfo.keyTactics.map((tip, idx) => (
                      <li key={idx} className="spotlight-tip-item">
                        <CheckCircle2 size={14} className="tip-check-icon" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Combos Card */}
                <div className="minimal-combat-card">
                  <div className="combat-card-header">
                    <Zap size={14} className="combat-card-icon" style={{ color: '#eab308' }} />
                    <h3 className="combat-card-title">CHUỖI COMBO KHUYÊN DÙNG</h3>
                  </div>
                  <div className="spotlight-combo-steps">
                    {displaySkills.filter((s) => s.comboTip).map((skill, idx) => (
                      <div key={skill.slot} className="spotlight-combo-card">
                        <div className="combo-card-tag">
                          <span>Bước {idx + 1}</span>
                          <span className="combo-skill-name">[{slotLabels[skill.slot]}] {skill.name}</span>
                        </div>
                        <p className="combo-card-tip">{skill.comboTip}</p>
                      </div>
                    ))}
                    {!displaySkills.some((s) => s.comboTip) && (
                      <p className="spotlight-empty-tip">
                        Khởi đầu bằng kỹ năng khống chế, dồn sát thương mục tiêu chủ lực đối phương và giữ lại chiêu thức thoát thân khi bị áp sát.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Recommended Items & Equipment in Spotlight */}
              {currentHero.recommendedItems && currentHero.recommendedItems.length > 0 && (
                <div className="minimal-combat-card spotlight-items-card">
                  <div className="combat-card-header">
                    <ShieldAlert size={14} className="combat-card-icon" />
                    <h3 className="combat-card-title">TRANG BỊ TRẤN PHÁI ĐỀ XUẤT</h3>
                  </div>
                  <div className="minimal-items-flow">
                    {currentHero.recommendedItems.map((item, idx) => (
                      <div key={idx} className="minimal-item-tag">
                        <span className="item-order">{idx + 1}</span>
                        <span className="item-name">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hero Image Editor Modal */}
      {isEditorOpen && (
        <HeroImageEditorModal
          hero={currentHero}
          onClose={() => setIsEditorOpen(false)}
          onUpdated={(updated) => {
            setCurrentHero(updated);
          }}
        />
      )}
    </div>
  );
};
