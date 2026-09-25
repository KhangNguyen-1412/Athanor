import { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header/Header';
import type { NavTab } from './components/Header/Header';
import { HeroRoster } from './components/ChampionSpotlight/HeroRoster';
import type { Faction, Hero } from './types/athanor';
import './App.css';

// Lazy load heavy subsystems on-demand to ensure instantaneous first-paint
const AthanorCanvas = lazy(() =>
  import('./components/Map3D/AthanorCanvas').then((m) => ({ default: m.AthanorCanvas }))
);
const HeroDetailPage = lazy(() =>
  import('./components/ChampionSpotlight/HeroDetailPage').then((m) => ({ default: m.HeroDetailPage }))
);
const LoreGraph = lazy(() =>
  import('./components/LoreGraph/LoreGraph').then((m) => ({ default: m.LoreGraph }))
);
const Timeline = lazy(() =>
  import('./components/Timeline/Timeline').then((m) => ({ default: m.Timeline }))
);
const FactionDetailModal = lazy(() =>
  import('./components/FactionDetail/FactionDetailModal').then((m) => ({ default: m.FactionDetailModal }))
);

function AthanorSectionLoader({ message = 'Đang tải dữ liệu Athanor...' }: { message?: string }) {
  return (
    <div className="athanor-section-loader" role="status" aria-live="polite">
      <div className="loader-portal">
        <div className="loader-ring-outer" />
        <div className="loader-ring-inner" />
        <div className="loader-core-emblem">✦</div>
      </div>
      <span className="loader-text">{message}</span>
      <span className="loader-sub">ATHANOR ARCHIVES • ARENA OF VALOR</span>
    </div>
  );
}

export function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('roster');
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [mapFocusTarget, setMapFocusTarget] = useState<{ x: number; y: number; landmarkId?: string; locationName?: string } | null>(null);

  const handleSelectFaction = (faction: Faction) => {
    setSelectedFaction(faction);
  };

  const handleSelectHero = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const handleSelectTab = (tab: NavTab) => {
    setSelectedHero(null);
    setCurrentTab(tab);
  };

  return (
    <div className="athanor-app">
      {/* Top Navigation Bar */}
      <Header currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Main View Area */}
      <main className="athanor-main-content">
        {selectedHero ? (
          <Suspense fallback={<AthanorSectionLoader message="Đang khởi tạo hồ sơ tác chiến anh hùng..." />}>
            <HeroDetailPage
              hero={selectedHero}
              onBack={() => setSelectedHero(null)}
              onSelectHero={handleSelectHero}
            />
          </Suspense>
        ) : (
          <>
            {currentTab === 'map' && (
              <div className="map-view-wrapper">
                <Suspense fallback={<AthanorSectionLoader message="Đang kiến tạo không gian 3D Đại Lục Athanor..." />}>
                  <AthanorCanvas
                    onSelectFaction={handleSelectFaction}
                    selectedFactionId={selectedFaction?.id}
                    onSelectHero={handleSelectHero}
                    focusTarget={mapFocusTarget}
                    onClearFocusTarget={() => setMapFocusTarget(null)}
                  />
                </Suspense>
              </div>
            )}

            {currentTab === 'roster' && (
              <HeroRoster onSelectHero={handleSelectHero} />
            )}

            {currentTab === 'lore' && (
              <Suspense fallback={<AthanorSectionLoader message="Đang giải mã mạng lưới liên kết nhân vật..." />}>
                <LoreGraph onSelectHero={handleSelectHero} />
              </Suspense>
            )}

            {currentTab === 'timeline' && (
              <Suspense fallback={<AthanorSectionLoader message="Đang mở cuộn giấy biên niên sử sử thi..." />}>
                <Timeline
                  onSelectHero={handleSelectHero}
                />
              </Suspense>
            )}
          </>
        )}
      </main>

      {/* Faction Detail Modal */}
      {selectedFaction && (
        <Suspense fallback={null}>
          <FactionDetailModal
            faction={selectedFaction}
            onClose={() => setSelectedFaction(null)}
            onSelectHero={(hero) => {
              setSelectedFaction(null);
              setSelectedHero(hero);
            }}
          />
        </Suspense>
      )}

      {/* Minimalist Global Footer */}
      {currentTab !== 'map' && (
        <footer className="minimal-footer">
          <div className="minimal-footer-inner">
            <div className="footer-brand-row">
              <img 
                src="/lienquan-gold-logo.png" 
                alt="Liên Quân Mobile" 
                className="footer-lq-logo" 
              />
              <span className="footer-brand-name">ATHANOR ARCHIVES</span>
              <span className="footer-dot">•</span>
              <span className="footer-subtext">Bách khoa toàn thư 129 tướng & 1,228 trang phục Liên Quân Mobile</span>
            </div>
            <p className="footer-copyright">
              Bản quyền hình ảnh, thương hiệu và tư liệu thuộc về Garena & Level Infinite / Tencent Games. Tuyển tập Athanor phi lợi nhuận.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
