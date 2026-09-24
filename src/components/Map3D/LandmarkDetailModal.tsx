import React from 'react';
import type { Landmark } from '../../data/landmarksData';
import { HEROES_DATA } from '../../data/heroesData';
import type { Hero } from '../../types/athanor';
import './LandmarkDetailModal.css';

interface LandmarkDetailModalProps {
  landmark: Landmark | null;
  onClose: () => void;
  onSelectHero?: (hero: Hero) => void;
}

export const LandmarkDetailModal: React.FC<LandmarkDetailModalProps> = ({
  landmark,
  onClose,
  onSelectHero
}) => {
  const [activeImage, setActiveImage] = React.useState<string>(
    landmark?.imageUrl || (landmark?.galleryUrls && landmark.galleryUrls[0]) || ''
  );
  const [tilt, setTilt] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = React.useState<number>(1);

  React.useEffect(() => {
    if (landmark) {
      setActiveImage(landmark.imageUrl || (landmark.galleryUrls && landmark.galleryUrls[0]) || '');
      setTilt({ x: 0, y: 0 });
      setIsFullscreen(false);
      setZoomLevel(1);
    }
  }, [landmark]);

  if (!landmark) return null;

  // Xử lý hiệu ứng nghiêng 3D Parallax khi di chuột
  const handleBannerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setTilt({ x: x * 8, y: -y * 8 });
  };

  const handleBannerMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Tìm danh sách tướng tương ứng
  const relatedHeroes = HEROES_DATA.filter((h) => landmark.heroIds.includes(h.id));

  return (
    <div className="landmark-modal-overlay" onClick={onClose}>
      <div className="landmark-modal-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
        {/* Nút đóng */}
        <button className="landmark-close-btn" onClick={onClose} aria-label="Đóng">
          ✕
        </button>

        {/* Banner hình ảnh 2.5D Living Diorama với chuyển động & chiều sâu */}
        {activeImage && (
          <div
            className="landmark-hero-banner living-diorama"
            onMouseMove={handleBannerMouseMove}
            onMouseLeave={handleBannerMouseLeave}
            style={{
              perspective: '1000px',
            }}
          >
            <div
              className="landmark-parallax-plane"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(1.06, 1.06, 1.06)`,
              }}
            >
              <img
                src={activeImage}
                alt={landmark.name}
                className="landmark-banner-img"
              />
              {/* Lớp sương mù động cuộn sóng */}
              <div className="diorama-mist-layer diorama-mist-1" />
              <div className="diorama-mist-layer diorama-mist-2" />
              {/* Lớp bụi tiên / hạt đốm sáng lơ lửng */}
              <div className="diorama-light-particles">
                <span className="particle p1" />
                <span className="particle p2" />
                <span className="particle p3" />
                <span className="particle p4" />
                <span className="particle p5" />
              </div>
            </div>

            <div className="landmark-banner-gradient" />
            <div className="landmark-banner-badge">
              <span>✦ KHẢO CỨU ĐỊA DANH ATHANOR ✦</span>
            </div>

            {/* Nút chiêm ngưỡng toàn màn hình */}
            <button
              className="landmark-inspect-btn"
              onClick={() => setIsFullscreen(true)}
              title="Phóng to chiêm ngưỡng từng chi tiết (Living Matte Painting)"
            >
              <span className="inspect-icon">✦</span>
              <span>Khảo Cứu Toàn Cảnh</span>
            </button>
          </div>
        )}

        {/* Nội dung chi tiết */}
        <div className="landmark-body">
          <div className="landmark-header-meta">
            <span className="landmark-tag">{landmark.vietnameseTitle}</span>
            <h2 className="landmark-title">{landmark.name}</h2>
            <p className="landmark-short-desc">{landmark.shortDesc}</p>
          </div>

          {/* Thư viện ảnh nếu có nhiều hơn 1 hình */}
          {landmark.galleryUrls && landmark.galleryUrls.length > 1 && (
            <div className="landmark-gallery-section">
              <div className="section-label">TƯ LIỆU HÌNH ẢNH ({landmark.galleryUrls.length})</div>
              <div className="landmark-gallery-row">
                {landmark.galleryUrls.map((url, idx) => (
                  <div
                    key={idx}
                    className={`landmark-gallery-thumb ${url === activeImage ? 'active-thumb' : ''}`}
                    onClick={() => setActiveImage(url)}
                    title={idx === 0 ? 'Bản họa địa thế chi tiết' : 'Tư liệu đối chiếu'}
                  >
                    <img src={url} alt={`${landmark.name} ${idx + 1}`} />
                    <span className="thumb-indicator">
                      {idx === 0 ? '✦ Bản Họa' : '✦ Tư Liệu'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cốt truyện / Lore */}
          <div className="landmark-lore-section">
            <div className="section-label">BIÊN NIÊN SỬ KÝ & BỐI CẢNH</div>
            <p className="landmark-lore-text">{landmark.lore}</p>
          </div>

          {/* Danh sách tướng hiện diện */}
          {relatedHeroes.length > 0 && (
            <div className="landmark-heroes-section">
              <div className="section-label">
                ANH HÙNG & THỦ LĨNH HIỆN DIỆN ({relatedHeroes.length})
              </div>
              <div className="landmark-heroes-grid">
                {relatedHeroes.map((hero) => (
                  <div
                    key={hero.id}
                    className="landmark-hero-chip"
                    onClick={() => {
                      if (onSelectHero) {
                        onSelectHero(hero);
                      }
                    }}
                    title={`Xem hồ sơ chi tiết của ${hero.name}`}
                  >
                    <img src={hero.avatarUrl} alt={hero.name} className="hero-chip-avatar" />
                    <div className="hero-chip-info">
                      <span className="hero-chip-name">{hero.name}</span>
                      <span className="hero-chip-role">{hero.role}</span>
                    </div>
                    <span className="hero-chip-arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL CHIÊM NGƯỠNG ĐIỆN ẢNH TOÀN MÀN HÌNH (LIVING CINEMATIC INSPECTOR) */}
      {isFullscreen && activeImage && (
        <div
          className="landmark-fullscreen-viewer"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="fullscreen-header" onClick={(e) => e.stopPropagation()}>
            <div className="fullscreen-title-box">
              <span className="fullscreen-badge">✦ KHẢO CỨU BẢN HỌA ĐIỆN ẢNH · ĐỘ NÉT CAO ✦</span>
              <span className="fullscreen-landmark-name">{landmark.name}</span>
            </div>
            <div className="fullscreen-controls">
              <button
                className="fullscreen-ctrl-btn"
                onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.2))}
                title="Thu nhỏ (−)"
              >
                －
              </button>
              <button
                className="fullscreen-ctrl-btn"
                onClick={() => setZoomLevel(1)}
                title="Tỉ lệ gốc 100%"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                className="fullscreen-ctrl-btn"
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
                title="Phóng to (＋)"
              >
                ＋
              </button>
              <button
                className="fullscreen-close-btn"
                onClick={() => setIsFullscreen(false)}
                title="Đóng (ESC)"
              >
                ✕
              </button>
            </div>
          </div>

          <div
            className="fullscreen-image-stage"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              e.preventDefault();
              setZoomLevel((z) => {
                if (e.deltaY < 0) return Math.min(2.5, z + 0.15);
                return Math.max(0.8, z - 0.15);
              });
            }}
          >
            <div
              className="fullscreen-image-wrapper"
              style={{
                transform: `scale(${zoomLevel})`,
              }}
            >
              <img
                src={activeImage}
                alt={landmark.name}
                className="fullscreen-active-img"
              />
              <div className="fullscreen-mist-layer mist-ambient-1" />
              <div className="fullscreen-mist-layer mist-ambient-2" />
            </div>
          </div>

          <div className="fullscreen-footer-hint">
            <span>※ Lăn chuột hoặc bấm nút để phóng to quan sát chi tiết bản họa địa thế · Bấm ✕ hoặc nhấn ra ngoài để trở lại bản đồ</span>
          </div>
        </div>
      )}
    </div>
  );
};
