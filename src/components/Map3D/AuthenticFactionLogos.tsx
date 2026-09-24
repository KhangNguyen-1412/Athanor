import React from 'react';

interface FactionLogoProps {
  factionId: string;
  size?: number;
  className?: string;
}

export const AuthenticFactionLogo: React.FC<FactionLogoProps> = ({
  factionId,
  size = 56,
  className = ''
}) => {
  switch (factionId) {
    // =========================================================================
    // 1. THÁP QUANG MINH (VEDA)
    // Tam giác vàng đảo ngược, vòng quỹ đạo vũ trụ lơ lửng 3D, biểu tượng tam quang
    // =========================================================================
    case 'veda':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`authentic-faction-logo veda-logo ${className}`}
        >
          <defs>
            <linearGradient id="gold-veda-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <filter id="veda-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Vòng hào quang quỹ đạo thiên thể 3D quay quanh Tháp */}
          <ellipse
            cx="50"
            cy="46"
            rx="45"
            ry="18"
            fill="none"
            stroke="url(#gold-veda-grad)"
            strokeWidth="2.5"
            transform="rotate(-16 50 46)"
            opacity="0.85"
            filter="url(#veda-glow)"
          />
          <ellipse
            cx="50"
            cy="46"
            rx="42"
            ry="11"
            fill="none"
            stroke="url(#gold-veda-grad)"
            strokeWidth="1.5"
            transform="rotate(-16 50 46)"
            opacity="0.6"
            strokeDasharray="5 3"
          />

          {/* Tam giác thần thánh đảo ngược (Tháp Quang Minh) */}
          <polygon
            points="24,28 76,28 50,74"
            fill="url(#gold-veda-grad)"
            filter="drop-shadow(0 2px 6px rgba(0,0,0,0.85))"
          />

          {/* Đĩa tròn trung tâm & Biểu tượng Tam Quang Thánh Thể */}
          <circle cx="50" cy="42" r="14" fill="#1c1608" opacity="0.8" />
          <path
            d="M 50 32 L 50 42 M 50 42 L 41 48 M 50 42 L 59 48"
            stroke="url(#gold-veda-grad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="50" cy="42" r="4.2" fill="url(#gold-veda-grad)" />

          {/* Mũi nhọn đền thờ phía dưới */}
          <polygon points="46,71 54,71 50,86" fill="url(#gold-veda-grad)" />
        </svg>
      );

    // =========================================================================
    // 2. KHU RỪNG NGUYÊN SINH (AFATA)
    // Hạt giống khởi nguyên nở hoa / chiếc đàn hạc linh thiêng của Cây Thế Giới
    // =========================================================================
    case 'afata':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`authentic-faction-logo afata-logo ${className}`}
        >
          <defs>
            <linearGradient id="gold-afata-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
            <filter id="afata-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Đài hoa / cánh uốn bao quanh bên ngoài */}
          <path
            d="M 50 90 C 40 76 16 62 14 46 C 12 34 26 34 32 44 C 38 54 44 68 50 80 C 56 68 62 54 68 44 C 74 34 88 34 86 46 C 84 62 60 76 50 90 Z"
            fill="url(#gold-afata-grad)"
            filter="url(#afata-glow)"
          />

          {/* Nụ mầm số 8 vươn cao trung tâm */}
          <path
            d="M 50 10 C 41 22 36 34 44 46 C 50 54 55 62 50 76 C 45 62 50 54 56 46 C 64 34 59 22 50 10 Z"
            fill="url(#gold-afata-grad)"
          />
          <circle cx="50" cy="30" r="4" fill="#0f172a" />
        </svg>
      );

    // =========================================================================
    // 3. VƯƠNG QUỐC NORMAN (LÂU ĐÀI KHỞI NGUYÊN)
    // Huy hiệu vương miện mặt trời & giọt sương khởi nguyên xoáy tròn kiêu hãnh
    // =========================================================================
    case 'norman':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`authentic-faction-logo norman-logo ${className}`}
        >
          <defs>
            <linearGradient id="gold-norman-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="65%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
            <filter id="norman-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dải xoắn ốc mặt trời bao quanh */}
          <path
            d="M 50 10 C 62 10 82 24 84 48 C 86 72 68 88 50 90 C 30 92 14 74 16 52 C 18 32 32 18 48 10 C 44 18 32 30 32 50 C 32 66 44 76 56 74 C 68 72 74 60 72 48 C 70 34 58 22 50 10 Z"
            fill="url(#gold-norman-grad)"
            filter="url(#norman-glow)"
          />

          {/* Giọt sương / ngọn lửa khởi nguyên chính tâm */}
          <path
            d="M 50 32 C 52 38 58 48 58 54 C 58 60 54 64 50 64 C 46 64 42 60 42 54 C 42 48 48 38 50 32 Z"
            fill="url(#gold-norman-grad)"
          />
        </svg>
      );

    // =========================================================================
    // 4. VƯƠNG QUỐC OKKA
    // Biểu tượng cánh đại bàng / mũ giáp hiệp sĩ sừng rồng phương Tây
    // =========================================================================
    case 'okka':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`authentic-faction-logo okka-logo ${className}`}
        >
          <defs>
            <linearGradient id="gold-okka-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <filter id="okka-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Đôi cánh hiệp sĩ sải rộng phía trên */}
          <path
            d="M 12 28 C 26 26 40 38 50 44 C 60 38 74 26 88 28 C 84 38 72 48 60 48 C 54 48 52 50 50 54 C 48 50 46 48 40 48 C 28 48 16 38 12 28 Z"
            fill="url(#gold-okka-grad)"
            filter="url(#okka-glow)"
          />

          {/* Tầng vuốt rồng / nanh giáp bên dưới */}
          <path
            d="M 22 46 C 34 50 44 58 50 68 C 56 58 66 50 78 46 C 72 56 64 64 56 68 C 54 69 52 72 50 76 C 48 72 46 69 44 68 C 36 64 28 56 22 46 Z"
            fill="url(#gold-okka-grad)"
          />

          {/* Mũi nhọn gai giáp trung tâm */}
          <polygon points="50,72 55,82 50,92 45,82" fill="url(#gold-okka-grad)" />

          {/* Kim cương hộ thân hai bên */}
          <polygon points="26,60 30,64 26,68 22,64" fill="url(#gold-okka-grad)" />
          <polygon points="74,60 78,64 74,68 70,64" fill="url(#gold-okka-grad)" />
        </svg>
      );

    // =========================================================================
    // 5. VỰC HỖN MANG (LOKHEIM)
    // Huy hiệu cánh quỷ sa đọa & Con mắt hỗn mang ma vương Volkath
    // =========================================================================
    case 'lokheim':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`authentic-faction-logo lokheim-logo ${className}`}
        >
          <defs>
            <linearGradient id="lokheim-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="25%" stopColor="#f87171" />
              <stop offset="65%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#450a0a" />
            </linearGradient>
            <radialGradient id="abyss-eye-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#450a0a" />
            </radialGradient>
            <filter id="lokheim-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Đôi cánh ác quỷ dơi sải rộng gai nhọn */}
          <path
            d="M 50 28 C 38 12 18 10 8 18 C 14 34 26 44 36 50 C 24 52 14 62 10 74 C 24 70 38 64 48 58 C 48 68 44 80 50 92 C 56 80 52 68 52 58 C 62 64 76 70 90 74 C 86 62 76 52 64 50 C 74 44 86 34 92 18 C 82 10 62 12 50 28 Z"
            fill="url(#lokheim-grad)"
            filter="url(#lokheim-glow)"
          />

          {/* Con mắt hỗn mang cõi âm */}
          <circle cx="50" cy="46" r="12" fill="#090d16" stroke="#f87171" strokeWidth="2.2" />
          <circle cx="50" cy="46" r="6" fill="url(#abyss-eye-glow)" />
          <circle cx="50" cy="46" r="2.5" fill="#000000" />
        </svg>
      );

    // =========================================================================
    // 6. TÂN LIÊN HIỆP (THE FREE FEDERATION)
    // Tháp công nghệ obelisk cơ khí & bánh răng năng lượng khoa học
    // =========================================================================
    case 'tan_lien_hiep':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`authentic-faction-logo tanlienhiep-logo ${className}`}
        >
          <defs>
            <linearGradient id="tanlienhiep-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fed7aa" />
              <stop offset="70%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
            <filter id="fed-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Tháp công nghệ Obelisk */}
          <path
            d="M 46 14 L 54 14 L 58 60 L 74 68 L 76 76 L 24 76 L 26 68 L 42 60 Z"
            fill="url(#tanlienhiep-grad)"
            filter="url(#fed-glow)"
          />

          {/* Lõi phản ứng cơ khí bánh răng */}
          <circle cx="50" cy="68" r="8" fill="#18181b" stroke="url(#tanlienhiep-grad)" strokeWidth="2.5" />
          <circle cx="50" cy="68" r="3" fill="url(#tanlienhiep-grad)" />

          {/* Vòng cung từ trường đáy tháp */}
          <path
            d="M 36 82 Q 50 94 64 82"
            stroke="url(#tanlienhiep-grad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Rãnh dẫn truyền năng lượng */}
          <line x1="50" y1="20" x2="50" y2="58" stroke="#18181b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
          <circle cx="50" cy="50" r="30" fill="#eab308" opacity="0.8" />
        </svg>
      );
  }
};
