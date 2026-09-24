import React, { useState, useEffect, useRef, useMemo } from 'react';
import type { Hero } from '../../types/athanor';
import { TIMELINE_ERAS } from '../../data/loreTimelineData';
import { HEROES_DATA } from '../../data/heroesData';
import { FACTIONS_DATA } from '../../data/factionsData';
import { heroCustomStore } from '../../utils/heroCustomStore';
import {
  Compass,
  Swords,
  Scroll,
  Lock,
  Unlock,
  ArrowRight,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import './Timeline.css';

interface TimelineProps {
  onSelectHero: (hero: Hero) => void;
  onNavigateToMap?: (target: { x: number; y: number; landmarkId?: string; locationName?: string }) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onSelectHero, onNavigateToMap }) => {
  const [, setTick] = useState<number>(0);
  const [activeEraId, setActiveEraId] = useState<string>(TIMELINE_ERAS[0]?.id || 'era-genesis');
  const [unlockedSeals, setUnlockedSeals] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleUpdate = () => setTick((v) => v + 1);
    window.addEventListener('athanor-hero-updated', handleUpdate);
    return () => window.removeEventListener('athanor-hero-updated', handleUpdate);
  }, []);

  // Tự động phát hiện Kỷ nguyên đang hiển thị trong tầm mắt
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const eraId = entry.target.getAttribute('data-era-id');
          if (eraId) setActiveEraId(eraId);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    const eraElements = document.querySelectorAll('.editorial-era-section');
    eraElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const romanEpochs = ['I', 'II', 'III', 'IV', 'V'];

  const scrollToEra = (eraId: string) => {
    const el = document.getElementById(eraId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveEraId(eraId);
    }
  };

  const handleUnlockSeal = (secretId: string) => {
    setUnlockedSeals((prev) => ({
      ...prev,
      [secretId]: true
    }));
  };

  const heroMap = useMemo(() => {
    const map = new Map<string, Hero>();
    HEROES_DATA.forEach((h) => map.set(h.id.toLowerCase(), h));
    return map;
  }, []);

  const getHero = (id?: string): Hero | null => {
    if (!id) return null;
    const hero = heroMap.get(id.toLowerCase());
    if (!hero) return null;
    return heroCustomStore.applyOverride(hero);
  };

  return (
    <div className="editorial-timeline-page">
      {/* Vầng ánh sáng môi trường Cerulean thanh lịch */}
      <div className="timeline-dynamic-ambient-glow" />

      {/* TOP EDITORIAL HEADING */}
      <div className="timeline-editorial-header">
        <div className="timeline-badge-row">
          <span className="timeline-count-badge">5 KỶ NGUYÊN SỬ THI</span>
          <span className="timeline-filter-chip">10.000+ NĂM LỊCH SỬ</span>
          <span className="timeline-filter-chip">VĂN KHỐ HOÀNG GIA ATHANOR</span>
        </div>

        <h1 className="timeline-editorial-title">
          Biên Niên Sử & <span className="timeline-title-accent">Thời Khắc Định Đoạt</span>
        </h1>
        <p className="timeline-editorial-desc">
          Lịch sử vạn năm của lục địa Athanor — nơi trật tự Ánh Sáng, ngọn lửa Hỗn Mang và ý chí bất khuất của con người giao tranh để định đoạt vận mệnh thế giới.
        </p>
      </div>

      {/* STICKY CELESTIAL EPOCH STEPPER (Thanh Điều Hướng 5 Kỷ Nguyên) */}
      <nav className="sticky-epoch-stepper" aria-label="Điều hướng các Kỷ nguyên Athanor">
        <div className="epoch-stepper-inner">
          {TIMELINE_ERAS.map((era, index) => {
            const roman = romanEpochs[index] || `${index + 1}`;
            const isActive = era.id === activeEraId;

            return (
              <button
                key={era.id}
                className={`epoch-step-btn ${isActive ? 'active' : ''}`}
                onClick={() => scrollToEra(era.id)}
              >
                <div className="epoch-step-badge">
                  <span className="epoch-roman-num">{roman}</span>
                </div>
                <div className="epoch-step-info">
                  <span className="epoch-step-period">{era.period}</span>
                  <span className="epoch-step-name">{era.eraName.split('&')[0]}</span>
                </div>
                {isActive && <div className="epoch-step-glow-indicator" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* MAIN CHRONICLES CONTAINER (5 KỶ NGUYÊN SỬ THI) */}
      <div className="timeline-eras-container">
        {TIMELINE_ERAS.map((era, index) => {
          const faction = FACTIONS_DATA[era.keyFactionId];
          const roman = romanEpochs[index] || `${index + 1}`;
          const featuredHeroes = heroCustomStore
            .getActiveHeroes(HEROES_DATA)
            .filter((h) => era.featuredHeroIds.includes(h.id));

          const clashLeftHero = era.clash ? getHero(era.clash.leftHeroId) : null;
          const clashRightHero = era.clash ? getHero(era.clash.rightHeroId) : null;
          const isSecretUnlocked = era.secretLore ? !!unlockedSeals[era.secretLore.id] : false;

          return (
            <article
              id={era.id}
              key={era.id}
              data-era-id={era.id}
              className="editorial-era-section animate-slide-up"
            >
              {/* 1. KEY ART BANNER ĐIỆN ẢNH */}
              <div className="era-hero-banner">
                {era.bannerUrl && (
                  <img
                    src={era.bannerUrl}
                    alt={era.title}
                    className="era-banner-img"
                    loading="lazy"
                  />
                )}
                <div className="era-banner-overlay" />

                <div className="era-banner-content">
                  <div className="era-banner-top-tags">
                    <span className="era-chapter-badge">
                      CHƯƠNG {roman} // {era.period.toUpperCase()}
                    </span>
                    <span className="era-faction-badge">
                      {faction?.name}
                    </span>
                  </div>

                  <h2 className="era-banner-title">{era.title}</h2>
                  <div className="era-banner-epoch-name">{era.eraName}</div>

                  {/* GOLDEN QUOTE (TRÍCH DẪN VÀNG ĐỊNH MỆNH) */}
                  {era.quote && (
                    <blockquote className="era-golden-quote">
                      <div className="quote-marks">“</div>
                      <p className="quote-text">{era.quote.text}</p>
                      <footer className="quote-footer">
                        <cite className="quote-author">{era.quote.author}</cite>
                        <span className="quote-role">— {era.quote.role}</span>
                      </footer>
                    </blockquote>
                  )}
                </div>
              </div>

              {/* 2. DUAL CLASH SHOWCASE (KHUNG ĐỐI ĐẦU HAI BĂNG CỰC) */}
              {era.clash && clashLeftHero && clashRightHero && (
                <div className="era-clash-card">
                  <div className="clash-header">
                    <div className="clash-tag">
                      <Swords size={14} className="clash-icon" />
                      <span>ĐỐI ĐẦU ĐỊNH MỆNH</span>
                    </div>
                    <h3 className="clash-title">{era.clash.title}</h3>
                    <p className="clash-desc">{era.clash.desc}</p>
                  </div>

                  <div className="clash-duel-stage">
                    {/* Champion Băng Cực Trái */}
                    <div
                      className="clash-fighter clash-left"
                      onClick={() => onSelectHero(clashLeftHero)}
                      role="button"
                      tabIndex={0}
                      title={`Xem chi tiết tướng ${clashLeftHero.name}`}
                    >
                      <div className="fighter-avatar-wrap">
                        <img src={clashLeftHero.avatarUrl} alt={clashLeftHero.name} className="fighter-avatar" />
                        <div className="fighter-ring left-ring" />
                      </div>
                      <div className="fighter-meta">
                        <span className="fighter-side-tag">{era.clash.leftFactionTitle}</span>
                        <strong className="fighter-name">{clashLeftHero.name}</strong>
                        <span className="fighter-title">{clashLeftHero.title}</span>
                      </div>
                    </div>

                    {/* Huy hiệu Giao Tranh & Cán Cân Quyền Lực */}
                    <div className="clash-versus-center">
                      <div className="clash-swords-emblem">
                        <span>VS</span>
                      </div>
                      <div className="clash-balance-container">
                        <div className="clash-balance-labels">
                          <span>{era.clash.powerBalance}%</span>
                          <span>TƯƠNG QUAN LỰC LƯỢNG</span>
                          <span>{100 - era.clash.powerBalance}%</span>
                        </div>
                        <div className="clash-balance-bar">
                          <div
                            className="balance-fill-left"
                            style={{ width: `${era.clash.powerBalance}%` }}
                          />
                          <div
                            className="balance-fill-right"
                            style={{ width: `${100 - era.clash.powerBalance}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Champion Băng Cực Phải */}
                    <div
                      className="clash-fighter clash-right"
                      onClick={() => onSelectHero(clashRightHero)}
                      role="button"
                      tabIndex={0}
                      title={`Xem chi tiết tướng ${clashRightHero.name}`}
                    >
                      <div className="fighter-avatar-wrap">
                        <img src={clashRightHero.avatarUrl} alt={clashRightHero.name} className="fighter-avatar" />
                        <div className="fighter-ring right-ring" />
                      </div>
                      <div className="fighter-meta">
                        <span className="fighter-side-tag">{era.clash.rightFactionTitle}</span>
                        <strong className="fighter-name">{clashRightHero.name}</strong>
                        <span className="fighter-title">{clashRightHero.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. NARRATIVE SUMMARY & INCIDENT DOSSIER CARDS */}
              <div className="era-narrative-block">
                <h4 className="narrative-heading">
                  <Scroll size={16} /> BỐI CẢNH LỊCH SỬ THỜI ĐẠI
                </h4>
                <p className="era-literary-summary">{era.summary}</p>
              </div>

              {/* CÁC BIẾN CỐ LỊCH SỬ THEN CHỐT CÓ NÚT FLY-TO-MAP */}
              <div className="era-incidents-grid-block">
                <div className="incidents-header">
                  <span className="incidents-title">CÁC BIẾN CỐ LỊCH SỬ THEN CHỐT:</span>
                  <span className="incidents-count">{era.majorEvents.length} BIẾN CỐ ĐƯỢC GHI NHẬN</span>
                </div>

                <div className="incidents-cards-grid">
                  {era.majorEvents.map((evt, eIdx) => {
                    const isObj = typeof evt === 'object';
                    const eventTitle = isObj ? evt.title : `Biến cố lịch sử #${eIdx + 1}`;
                    const eventDesc = isObj ? evt.desc : evt;
                    const eventCategory = isObj ? evt.category : 'war';
                    const eventEpoch = isObj ? evt.yearOrEpoch : `Năm thứ ${eIdx * 25 + 1}`;
                    const mapTarget = isObj ? evt.mapTarget : undefined;

                    const getCategoryLabel = (cat: string) => {
                      switch (cat) {
                        case 'war': return 'ĐẠI CHIẾN';
                        case 'magic': return 'MA THUẬT CỔ';
                        case 'tragedy': return 'BI KỊCH SỬ THI';
                        case 'oracle': return 'THẦN DỤ KHỞI NGUYÊN';
                        case 'treaty': return 'MINH ƯỚC ATHANOR';
                        default: return 'BIẾN CỐ LỊCH SỬ';
                      }
                    };

                    return (
                      <div key={isObj ? evt.id : eIdx} className="incident-dossier-card">
                        <div className="incident-card-top">
                          <span className="incident-cat-badge">
                            {getCategoryLabel(eventCategory)}
                          </span>
                          <span className="incident-year-badge">{eventEpoch}</span>
                        </div>

                        <h4 className="incident-card-title">{eventTitle}</h4>
                        <p className="incident-card-desc">{eventDesc}</p>

                        {/* NÚT FLY-TO-MAP: ĐỒNG BỘ TRỰC TIẾP VỚI BẢN ĐỒ 3D */}
                        {mapTarget && onNavigateToMap && (
                          <div className="incident-map-action">
                            <button
                              className="fly-to-map-button"
                              onClick={() => onNavigateToMap(mapTarget)}
                              title={`Chuyển đến ${mapTarget.locationName} trên Bản Đồ Thế Giới`}
                            >
                              <Compass size={14} className="compass-icon" />
                              <span className="fly-location-name">
                                Xem Chiến Trường: <strong>{mapTarget.locationName}</strong>
                              </span>
                              <ArrowRight size={13} className="fly-arrow" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. CẤM THƯ ATHANOR (FORBIDDEN CODEX ARCHIVES — GAMIFICATION) */}
              {era.secretLore && (
                <div className={`forbidden-codex-card ${isSecretUnlocked ? 'unlocked' : 'sealed'}`}>
                  <div className="codex-seal-container">
                    <div className="codex-seal-emblem">
                      {isSecretUnlocked ? <Unlock size={24} /> : <Lock size={24} />}
                    </div>

                    <div className="codex-header-text">
                      <div className="codex-classification-tag">
                        <ShieldAlert size={13} />
                        <span>{isSecretUnlocked ? 'CẤM THƯ ĐÃ GIẢI MÃ' : 'TÀI LIỆU BỊ NIÊM PHONG // CẤM KỴ'}</span>
                      </div>
                      <h4 className="codex-title">{era.secretLore.title}</h4>
                      <p className="codex-source">Nguồn: {era.secretLore.authorOrSource}</p>
                    </div>
                  </div>

                  {!isSecretUnlocked ? (
                    <div className="codex-locked-body">
                      <p className="codex-hint">
                        <Sparkles size={14} /> {era.secretLore.revealHint}
                      </p>
                      <button
                        className="break-seal-btn"
                        onClick={() => handleUnlockSeal(era.secretLore!.id)}
                      >
                        <Unlock size={14} />
                        <span>PHÁ PHONG ẤN CỔ NGỮ</span>
                      </button>
                    </div>
                  ) : (
                    <div className="codex-unlocked-content animate-scale-up">
                      <div className="codex-classified-watermark">CLASSIFIED</div>
                      <p className="codex-revealed-text">{era.secretLore.content}</p>
                      <div className="codex-archive-footer">
                        <span>✦ Lưu trữ tại Văn Khố Hoàng Gia Athanor</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 5. NHÂN VẬT ĐỊNH HÌNH THỜI ĐẠI */}
              <div className="era-personages-footer">
                <span className="personages-label">NHÂN VẬT ĐỊNH HÌNH KỶ NGUYÊN NÀY:</span>
                <div className="personages-chips-row">
                  {featuredHeroes.map((hero) => (
                    <button
                      key={hero.id}
                      className="personage-editorial-chip"
                      onClick={() => onSelectHero(hero)}
                    >
                      <img src={hero.avatarUrl} alt={hero.name} />
                      <span>{hero.name}</span>
                      <ArrowRight size={11} className="chip-arrow" />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
