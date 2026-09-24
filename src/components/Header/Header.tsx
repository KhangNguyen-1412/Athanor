import React, { useState } from 'react';
import { Volume2, VolumeX, Radio, Users, GitMerge, Clock } from 'lucide-react';
import { soundFX } from '../../utils/audioSynthesizer';
import './Header.css';

export type NavTab = 'map' | 'roster' | 'lore' | 'timeline';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab }) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isBgmActive, setIsBgmActive] = useState<boolean>(false);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundFX.setMuted(nextMuted);
  };

  const toggleBgm = () => {
    const active = soundFX.toggleAmbientMusic();
    setIsBgmActive(active);
  };

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'roster', label: 'Danh Bạ Tướng', icon: <Users size={15} /> },
    { id: 'lore', label: 'Mạng Lưới Quan Hệ', icon: <GitMerge size={15} /> },
    { id: 'timeline', label: 'Biên Niên Sử', icon: <Clock size={15} /> }
  ];

  return (
    <header className="minimal-header">
      <div className="minimal-header-container">
        {/* Brand Logo */}
        <div className="minimal-brand" onClick={() => onSelectTab('roster')}>
          <div className="minimal-brand-mark">
            <span className="brand-letter">A</span>
            <span className="brand-dot" />
          </div>
          <div className="minimal-brand-text">
            <span className="brand-title">ATHANOR</span>
            <span className="brand-caption">129 TƯỚNG LIÊN QUÂN</span>
          </div>
        </div>

        {/* Minimalist Navigation Tabs */}
        <nav className="minimal-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`minimal-nav-tab ${currentTab === item.id ? 'active' : ''}`}
              onClick={() => onSelectTab(item.id)}
            >
              <span className="nav-tab-icon">{item.icon}</span>
              <span className="nav-tab-text">{item.label}</span>
              {currentTab === item.id && <span className="nav-tab-indicator" />}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="minimal-header-actions">
          <button
            type="button"
            className={`minimal-sound-btn ${isBgmActive ? 'active' : ''}`}
            onClick={toggleBgm}
            title={isBgmActive ? 'Tắt nhạc nền thần thoại' : 'Bật nhạc nền thần thoại'}
          >
            <Radio size={14} />
            <span className="sound-label">BGM</span>
            {isBgmActive && <span className="sound-live-dot" />}
          </button>

          <button
            type="button"
            className={`minimal-mute-btn ${isMuted ? 'muted' : ''}`}
            onClick={toggleMute}
            title={isMuted ? 'Bật âm thanh' : 'Tắt toàn bộ âm thanh'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
};
