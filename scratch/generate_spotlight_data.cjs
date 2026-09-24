const fs = require('fs');
const path = require('path');

const catalog = JSON.parse(fs.readFileSync('scratch/spotlight_catalog.json', 'utf8'));

// Read existing spotlightData.ts to preserve existing IDs
const currentContent = fs.readFileSync('src/data/spotlightData.ts', 'utf8');
const idMatches = [...currentContent.matchAll(/([a-zA-Z0-9_]+):\s*'([^']*)'/g)];
const existingIds = {};
idMatches.forEach(m => {
  if (m[2]) existingIds[m[1]] = m[2];
});

let dictEntries = '';
catalog.forEach((cat, cIdx) => {
  dictEntries += `\n  // ==========================================================================\n`;
  dictEntries += `  // ${cIdx + 1}. ${cat.category.toUpperCase()} (${cat.heroes.length} TƯỚNG)\n`;
  dictEntries += `  // ==========================================================================\n`;
  cat.heroes.forEach(h => {
    const val = existingIds[h.id] || '';
    dictEntries += `  ${h.id}: '${val}', // ${h.name} - 「${h.title}」\n`;
  });
});

const newSpotlightData = `import type { Hero } from '../types/athanor';

export interface HeroSpotlightInfo {
  heroId: string;
  heroName: string;
  officialTitle: string;
  role: string;
  factionName?: string;
  searchQuery: string;
  youtubeSearchUrl: string;
  embedUrl: string | null;
  directWatchUrl: string;
  channelName: string;
  highlightSummary: string;
  keyTactics: string[];
}

/**
 * ============================================================================
 * DANH MỤC VIDEO TÂM ĐIỂM TƯỚNG CỦA TOÀN BỘ 129 TƯỚNG LIÊN QUÂN MOBILE (ATHANOR)
 * ============================================================================
 * HƯỚNG DẪN CẬP NHẬT:
 * - Bạn có thể điền YouTube Video ID (11 ký tự) hoặc dán link YouTube đầy đủ
 *   (ví dụ: 'https://www.youtube.com/watch?v=...' hoặc 'https://youtu.be/...').
 * - Nếu để trống '', hệ thống tự động sinh link tra cứu & cẩm nang chuẩn của Garena.
 * - Bạn cũng có thể dán link trực tiếp từ giao diện website (Sửa thông tin tướng > Media).
 */
export const OFFICIAL_SPOTLIGHT_VIDEO_IDS: Record<string, string> = {${dictEntries}};

/**
 * Trích xuất YouTube Video ID từ chuỗi URL hoặc ID thuần 11 ký tự
 */
export function extractYoutubeId(input?: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Nếu người dùng nhập thẳng ID (11 ký tự)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Regex hỗ trợ các dạng URL YouTube phổ biến
  const match = trimmed.match(
    /(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&v=))([\\w-]{11})/
  );
  return match ? match[1] : null;
}

/**
 * Lấy thông tin Tâm Điểm Tướng đầy đủ cho một vị tướng trong Athanor
 */
export function getHeroSpotlight(hero: Hero, factionName?: string): HeroSpotlightInfo {
  const searchQuery = \`Tâm Điểm Tướng \${hero.name} Liên Quân Mobile\`;
  const youtubeSearchUrl = \`https://www.youtube.com/results?search_query=\${encodeURIComponent(
    searchQuery
  )}\`;

  // Ưu tiên 1: Link/ID tùy chỉnh của người dùng (trong hero.spotlightVideoUrl)
  // Ưu tiên 2: Video ID chính thức trong bảng tra cứu bên trên
  let embedVideoId = extractYoutubeId(hero.spotlightVideoUrl);
  if (!embedVideoId && OFFICIAL_SPOTLIGHT_VIDEO_IDS[hero.id]) {
    embedVideoId = extractYoutubeId(OFFICIAL_SPOTLIGHT_VIDEO_IDS[hero.id]);
  }

  const embedUrl = embedVideoId
    ? \`https://www.youtube-nocookie.com/embed/\${embedVideoId}?rel=0&modestbranding=1\`
    : null;

  const directWatchUrl = embedVideoId
    ? \`https://www.youtube.com/watch?v=\${embedVideoId}\`
    : youtubeSearchUrl;

  const roleText = hero.secondaryRole
    ? \`\${hero.role} • \${hero.secondaryRole}\`
    : hero.role;

  // Tóm tắt thế mạnh tác chiến từ stats
  const tactics: string[] = [];
  if (hero.stats.damage >= 8) tactics.push('Sát thương đầu ra cực lớn trong giao tranh');
  if (hero.stats.mobility >= 7) tactics.push('Độ cơ động cao, đảo gank và luồn lách linh hoạt');
  if (hero.stats.crowdControl >= 7) tactics.push('Khả năng khống chế diện rộng xuất sắc');
  if (hero.stats.toughness >= 8) tactics.push('Sức chống chịu bền bỉ, tiền tuyến vững chắc');
  if (hero.battleTips && hero.battleTips.length > 0) {
    tactics.push(hero.battleTips[0]);
  }

  return {
    heroId: hero.id,
    heroName: hero.name,
    officialTitle: hero.title,
    role: roleText,
    factionName,
    searchQuery,
    youtubeSearchUrl,
    embedUrl,
    directWatchUrl,
    channelName: 'Garena Liên Quân Mobile',
    highlightSummary: \`Video Tâm Điểm Tướng \${hero.name} - \${hero.title} phân tích chuyên sâu bộ chiêu thức, combo tác chiến và phong cách thi đấu đỉnh cao.\`,
    keyTactics: tactics
  };
}
`;

fs.writeFileSync('src/data/spotlightData.ts', newSpotlightData, 'utf8');
console.log('Updated src/data/spotlightData.ts successfully!');
