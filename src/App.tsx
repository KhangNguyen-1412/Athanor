import { useState } from 'react';
import { Header } from './components/Header/Header';
import type { NavTab } from './components/Header/Header';
import { AthanorCanvas } from './components/Map3D/AthanorCanvas';
import { FactionDetailModal } from './components/FactionDetail/FactionDetailModal';
import { HeroRoster } from './components/ChampionSpotlight/HeroRoster';
import { HeroDetailPage } from './components/ChampionSpotlight/HeroDetailPage';
import { LoreGraph } from './components/LoreGraph/LoreGraph';
import { Timeline } from './components/Timeline/Timeline';
import type { Faction, Hero } from './types/athanor';
import './App.css';

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
          <HeroDetailPage
            hero={selectedHero}
            onBack={() => setSelectedHero(null)}
            onSelectHero={handleSelectHero}
          />
        ) : (
          <>
            {currentTab === 'map' && (
              <div className="map-view-wrapper">
                <AthanorCanvas
                  onSelectFaction={handleSelectFaction}
                  selectedFactionId={selectedFaction?.id}
                  onSelectHero={handleSelectHero}
                  focusTarget={mapFocusTarget}
                  onClearFocusTarget={() => setMapFocusTarget(null)}
                />
              </div>
            )}

            {currentTab === 'roster' && (
              <HeroRoster onSelectHero={handleSelectHero} />
            )}

            {currentTab === 'lore' && (
              <LoreGraph onSelectHero={handleSelectHero} />
            )}

            {currentTab === 'timeline' && (
              <Timeline
                onSelectHero={handleSelectHero}
              />
            )}
          </>
        )}
      </main>

      {/* Faction Detail Modal */}
      {selectedFaction && (
        <FactionDetailModal
          faction={selectedFaction}
          onClose={() => setSelectedFaction(null)}
          onSelectHero={(hero) => {
            setSelectedFaction(null);
            setSelectedHero(hero);
          }}
        />
      )}

      {/* Minimalist Global Footer */}
      {currentTab !== 'map' && (
        <footer className="minimal-footer">
          <div className="minimal-footer-inner">
            <div className="footer-brand-row">
              <span className="footer-brand-name">ATHANOR</span>
              <span className="footer-dot">•</span>
              <span className="footer-subtext">Bách khoa toàn thư 129 tướng & thế lực Liên Quân Mobile</span>
            </div>
            <p className="footer-copyright">
              Bản quyền hình ảnh và tư liệu thuộc về Garena & Level Infinite. Dự án cộng đồng phi lợi nhuận.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
