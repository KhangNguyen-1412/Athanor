import React, { useState, useCallback, useEffect } from 'react';
import { FACTIONS_DATA } from '../../data/factionsData';
import type { Landmark, MajorFactionMacro } from '../../data/landmarksData';
import { LandmarkDetailModal } from './LandmarkDetailModal';
import { Athanor3DScene, type PanTrigger, type ZoomTrigger } from './Athanor3DScene';
import type { Faction, FactionId, Hero } from '../../types/athanor';
import './Map3D.css';

export interface MapFocusTarget {
  x: number;
  y: number;
  locationName?: string;
  landmarkId?: string;
}

interface Map3DProps {
  onSelectFaction: (faction: Faction) => void;
  selectedFactionId?: FactionId | null;
  onSelectHero?: (hero: Hero) => void;
  focusTarget?: MapFocusTarget | null;
  onClearFocusTarget?: () => void;
}

export const AthanorCanvas: React.FC<Map3DProps> = ({
  onSelectFaction,
  selectedFactionId,
  onSelectHero,
  focusTarget,
  onClearFocusTarget,
}) => {
  const [zoomMode, setZoomMode] = useState<'macro' | 'micro'>('macro');
  const [isCinematicTilt, setIsCinematicTilt] = useState<boolean>(false);
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);
  const [interactionMode, setInteractionMode] = useState<'pan' | 'orbit'>('pan');
  const [panTrigger, setPanTrigger] = useState<PanTrigger | null>(null);
  const [zoomTrigger, setZoomTrigger] = useState<ZoomTrigger | null>(null);

  const [showLabels, setShowLabels] = useState<boolean>(true);

  const factions = Object.values(FACTIONS_DATA);

  // Phím tắt bật/tắt chú thích (Phím L)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') return;
      if (e.key === 'l' || e.key === 'L') {
        setShowLabels((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Chọn địa danh để mở modal
  const handleSelectLandmark = useCallback((lm: Landmark) => {
    setSelectedLandmark(lm);
  }, []);

  // Chọn 1 trong 4 đại thế lực ở góc nhìn toàn cảnh
  const handleSelectMacro = useCallback(
    (macro: MajorFactionMacro) => {
      const faction = FACTIONS_DATA[macro.id as FactionId];
      if (faction) {
        onSelectFaction(faction);
      }
      setZoomMode('micro');
    },
    [onSelectFaction]
  );

  // Nhấp pill ở thanh điều hướng đáy
  const handleNavPillClick = useCallback(
    (faction: Faction) => {
      onSelectFaction(faction);
      setZoomMode('micro');
    },
    [onSelectFaction]
  );

  return (
    <div className="athanor-map-wrapper">
      {/* 1. KHÔNG GIAN 3D THREE.JS (PROCEDURAL WEBGL TERRAIN & INFINITE OCEAN) */}
      <Athanor3DScene
        zoomMode={zoomMode}
        setZoomMode={setZoomMode}
        selectedFactionId={selectedFactionId}
        focusTarget={focusTarget}
        onSelectLandmark={handleSelectLandmark}
        onSelectFactionMacro={handleSelectMacro}
        isCinematicTilt={isCinematicTilt}
        interactionMode={interactionMode}
        panTrigger={panTrigger}
        zoomTrigger={zoomTrigger}
        showLabels={showLabels}
      />

      {/* 2. KHẢO CỨU ĐỊA ĐỒ — EDITORIAL MASTHEAD */}
      <header className="editorial-map-masthead">
        <div className="editorial-map-masthead-inner">
          <div className="masthead-pretitle">BÁCH KHOA TOÀN THƯ ATHANOR · KHẢO CỨU ĐỊA LÝ</div>
          <h1 className="masthead-main-title">Địa Đồ Lục Địa Athanor</h1>
          <p className="masthead-sub-title">
            {zoomMode === 'macro'
              ? isCinematicTilt
                ? 'Quan sát toàn cảnh 3D · Phối cảnh nghiêng viễn vọng'
                : 'Tứ Đại Thế Lực & Ranh giới vương quốc'
              : 'Khảo sát địa thế chi tiết · Đền thờ & Kỳ quan sinh thái'}
          </p>
        </div>
      </header>

      {/* 3. THANH CÔNG CỤ ĐỊA LÝ EDITORIAL (TOOLBAR) */}
      <nav className="editorial-map-toolbar" aria-label="Thanh công cụ bản đồ">
        <button
          className={`editorial-tool-btn ${interactionMode === 'pan' && !isCinematicTilt ? 'active' : ''}`}
          onClick={() => {
            setInteractionMode('pan');
            setIsCinematicTilt(false);
          }}
          title="Kéo chuột trái hoặc phím mũi tên để lướt bản đồ"
        >
          Lướt Bản Đồ
        </button>

        <button
          className={`editorial-tool-btn ${interactionMode === 'orbit' && !isCinematicTilt ? 'active' : ''}`}
          onClick={() => {
            setInteractionMode('orbit');
            setIsCinematicTilt(false);
          }}
          title="Xoay 360 độ góc nhìn không gian 3D"
        >
          Xoay Không Gian
        </button>

        <button
          className={`editorial-tool-btn ${isCinematicTilt ? 'active' : ''}`}
          onClick={() => {
            setIsCinematicTilt((prev) => !prev);
          }}
          title="Bật / tắt góc nhìn nghiêng viễn cảnh"
        >
          Góc Nghiêng
        </button>

        <button
          className={`editorial-tool-btn ${showLabels ? 'active' : ''}`}
          onClick={() => setShowLabels((prev) => !prev)}
          title={showLabels ? 'Ẩn địa danh (Phím L)' : 'Hiện địa danh (Phím L)'}
        >
          {showLabels ? 'Ẩn Địa Danh' : 'Hiện Địa Danh'}
        </button>

        <button
          className="editorial-tool-btn tool-btn-reset"
          onClick={() => {
            setIsCinematicTilt(false);
            setZoomMode('macro');
            setPanTrigger({ dir: 'reset', count: Date.now() });
            if (onClearFocusTarget) onClearFocusTarget();
          }}
          title="Về toàn cảnh trung tâm thế giới Athanor"
        >
          Toàn Cảnh
        </button>
      </nav>

      {/* 4. THANH CHỈ MỤC THẾ LỰC EDITORIAL (CARTOGRAPHIC FACTION INDEX) */}
      <div className="editorial-faction-nav" aria-label="Chỉ mục các thế lực">
        {factions.map((faction) => (
          <button
            key={faction.id}
            className={`editorial-faction-chip ${selectedFactionId === faction.id ? 'active' : ''}`}
            style={{
              '--faction-color': faction.color,
            } as React.CSSProperties}
            onClick={() => handleNavPillClick(faction)}
            title={faction.name}
          >
            <span className="editorial-chip-dot" style={{ backgroundColor: faction.color }} />
            <span className="editorial-chip-name">{faction.name.split(' (')[0]}</span>
          </button>
        ))}
      </div>

      {/* 5. LA BÀN & BỘ ĐIỀU KHIỂN ĐỊA LÝ EDITORIAL (COMPASS & ZOOM DECK) */}
      <aside className="editorial-map-controls" aria-label="Bộ điều khiển bản đồ">
        {/* La bàn phương hướng */}
        <div
          className="editorial-compass-badge"
          onClick={() => {
            setIsCinematicTilt(false);
            setZoomMode('macro');
            setPanTrigger({ dir: 'reset', count: Date.now() });
            if (onClearFocusTarget) onClearFocusTarget();
          }}
          title="Định hướng chính Bắc · Bấm để về trung tâm"
        >
          <span className="compass-needle">✦</span>
          <span className="compass-cardinal">BẮC</span>
        </div>

        {/* Cụm thu phóng & điều hướng viễn vọng */}
        <div className="editorial-zoom-deck">
          <button
            className="editorial-ctrl-btn"
            onClick={() => setZoomTrigger({ type: 'in', count: Date.now() })}
            title="Phóng to quan sát (+)"
            aria-label="Phóng to"
          >
            ＋
          </button>
          <button
            className="editorial-ctrl-btn"
            onClick={() => setZoomTrigger({ type: 'out', count: Date.now() })}
            title="Thu nhỏ toàn cảnh (−)"
            aria-label="Thu nhỏ"
          >
            －
          </button>
          <button
            className={`editorial-ctrl-btn ${isCinematicTilt ? 'active' : ''}`}
            onClick={() => setIsCinematicTilt((prev) => !prev)}
            title="Góc nhìn nghiêng viễn vọng (Tilt)"
            aria-label="Góc nghiêng"
          >
            ◬
          </button>
          <button
            className={`editorial-ctrl-btn ${showLabels ? 'active' : ''}`}
            onClick={() => setShowLabels((prev) => !prev)}
            title={showLabels ? 'Ẩn địa danh (Phím L)' : 'Hiện địa danh (Phím L)'}
            aria-label="Địa danh"
          >
            ¶
          </button>
        </div>
      </aside>

      {/* 6. CHÚ GIẢI THAO TÁC EDITORIAL FOOTNOTE */}
      <footer className="editorial-map-footnote">
        <span className="footnote-mark">※</span>
        <span className="footnote-text">
          {interactionMode === 'pan'
            ? 'Kéo chuột trái để di chuyển · Giữ chuột phải hoặc Shift để xoay 360° · Phím L để bật/tắt chú thích · Nhấp vào địa danh để xem khảo cứu lịch sử'
            : 'Xoay 360° không gian 3D · Chọn "Lướt Bản Đồ" để lướt toạ độ · Phím L để bật/tắt chú thích · Nhấp vào địa danh để xem khảo cứu lịch sử'}
        </span>
      </footer>

      {/* 7. MODAL CHI TIẾT ĐỊA DANH KHI ĐƯỢC CHỌN */}
      <LandmarkDetailModal
        landmark={selectedLandmark}
        onClose={() => setSelectedLandmark(null)}
        onSelectHero={onSelectHero}
      />
    </div>
  );
};
