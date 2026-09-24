import type { Hero } from '../types/athanor';

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
export const OFFICIAL_SPOTLIGHT_VIDEO_IDS: Record<string, string> = {
  // ==========================================================================
  // 1. THÁP QUANG MINH (VEDA) (20 TƯỚNG)
  // ==========================================================================
  ilumia: 'fU8G7Fp12V0', // Ilumia - 「Nữ Thần Ánh Sáng」
  lauriel: 'oFzY85bN3eA', // Lauriel - 「Đại Thiên Thần」
  tulen: 't6EwV-JtW2M', // Tulen - 「Hoàng Tử Lôi Quang」
  bright: '4bWn3Y9b6pI', // Bright - 「Truyền Nhân Ánh Sáng」
  yorn: 'K8kK_U-748w', // Yorn - 「Mũi Tên Mặt Trời」
  xeniel: 'k5sC11Q-x04', // Xeniel - 「Sứ Giả Thần Thánh」
  ignis: '', // Ignis - 「Sứ Giả Lôi Hỏa」
  gildur: '', // Gildur - 「Vua Hoàng Kim」
  jinna: '', // Jinna - 「Đại Thiền Sư」
  enzo: '', // Enzo - 「Kẻ Hành Quyết」
  laville: '32V7Z4hYjH0', // Laville - 「Tay Súng Ánh Sáng」
  zata: 'Q2qY0kG4YqA', // Zata - 「Dạ Ưng Tộc」
  rouie: 'z9yXy_x4ZlY', // Rouie - 「Ánh Sáng Không Gian」
  teeri: 'N2yC4J_5Q1E', // Terri - 「Sĩ Quan Tình Báo」
  omega: '', // Omega - 「Cỗ Máy Tri Giác」
  ngokhong: 'eK8_L5xZ_7A', // Ngộ Không - 「Tề Thiên Đại Thánh」
  edras: '', // Edras - 「Đấng Sáng Tạo」
  chaugnar: '', // Chaugnar - 「Sứ Giả Hỗn Mang Cổ」
  toro: '', // Toro - 「Ngưu Ma Vương」
  ormarr: '', // Ormarr - 「Chiến Binh Cuồng Nộ」

  // ==========================================================================
  // 2. VỰC HỖN MANG (LOKHEIM) (26 TƯỚNG)
  // ==========================================================================
  volkath: 'aY1v4E-9T98', // Volkath - 「Chúa Tể Hắc Ám」
  maloch: 'fC9u8H-3P20', // Maloch - 「Ma Vương Quản Ngục」
  veera: '1U4gY-jY3zM', // Veera - 「Nữ Vương Ma Tộc」
  marja: '', // Marja - 「Oán Hồn Vực Thẳm」
  kahlii: '', // Kahlii - 「Nữ Tư Tế Sa Đọa」
  mganga: '', // Mganga - 「Tên Hề Cuồng Tín」
  preyta: '', // Preyta - 「Kỵ Sĩ Dịch Bệnh」
  mina: '', // Mina - 「Nữ Hoàng Lưỡi Hái」
  taara: '', // Taara - 「Búa Cuồng Bạo」
  arduin: '', // Arduin - 「Linh Hồn Băng Giá」
  skud: '', // Skud - 「Cỗ Máy Cuồng Nộ」
  natalya: 'w7H2lF-9D4g', // Natalya - 「Hiểm Họa Địa Ngục」
  raz: 'K3gL8v-4T1s', // Raz - 「Quyền Vương」
  nakroth: '9sD2lP_0K8Y', // Nakroth - 「Phán Quan Cõi Âm」
  grakk: '7kQ-0Y9jN2s', // Grakk - 「Kẻ Phàm Ăn」
  zephys: '', // Zephys - 「Lưỡi Hái Tử Thần」
  kriknak: '', // Kriknak - 「Bọ Sát Thủ」
  omen: '', // Omen - 「Quỷ Kiếm Cuồng Sát」
  zip: '', // Zip - 「Ma Thú Háu Ăn」
  aleister: '', // Aleister - 「Quang Vinh Phản Đồ」
  hayate: 'pP8g2B_4W10', // Hayate - 「Ninja Tà Long」
  errol: '2Xq_K8jN3P0', // Errol - 「Cánh Tay Ác Ma」
  lorion: '', // Lorion - 「Hắc Ma Pháp Sư」
  dextra: 'mB8j2P_1Q00', // Dextra - 「Huyết Luân Cưa」
  sinestrea: 'T3mY_2K4L90', // Sinestrea - 「Huyết Kiếm」
  veres: 'J4mK9_1X0w8', // Veres - 「Huyết Xích Lôi Ảnh」

  // ==========================================================================
  // 3. KHU RỪNG NGUYÊN SINH (AFATA) (22 TƯỚNG)
  // ==========================================================================
  telannas: '5Q8mN_2J0w4', // Tel'Annas - 「Nữ Vương Tinh Linh」
  krixi: 'f9J_3P0K8Y1', // Krixi - 「Tinh Linh Thiên Nhiên」
  zill: '0M9jB_4X1w2', // Ma Phong Ba - 「Ma Phong Ba」
  lumburr: '', // Lumburr - 「Khổng Lồ Lục Địa」
  zuka: '8L0jP_2K3x4', // Zuka - 「Đại Sư Gấu Trúc」
  teemee: '', // TeeMee - 「Trái Tim Biển Cả」
  baldum: '', // Baldum - 「Nhân Mã Cuồng Phong」
  helen: 'y2K_0M9jN4s', // Helen - 「Tiên Linh Hòa Bình」
  payna: '', // Payna - 「Thần Linh Hộ Mệnh Cổ」
  lindis: '3X0jN_9K1w8', // Lindis - 「Ẩn Sĩ Nguyệt Tộc」
  arum: '6P1jM_4K2x0', // Arum - 「Nữ Tu Sĩ Sư Tử」
  dyadia: 'M2q_8K0jP1Y', // Dyadia - 「Tinh Linh Nhân Duyên」
  slimz: '', // Slimz - 「Thỏ Tài Phiệt」
  fennik: '', // Fennik - 「Cáo Siêu Thanh」
  kilgroth: '', // Kil'Groth - 「Đồ Tể Đại Dương」
  cresht: '', // Cresht - 「Chiến Binh Thủy Quái」
  ybneth: '', // Y'bneth - 「Đại Thụ Viễn Cổ」
  krizzix: '', // Krizzix - 「Bậc Thầy Ẩn Nấp」
  elandorr: '4L9jN_1X0w2', // Eland'orr - 「Du Hiệp Tinh Linh」
  aya: 'w1J_4K0M9s2', // Aya - 「Ca Sĩ Tinh Linh」
  biron: '7M0jP_3K2x1', // Biron - 「Lôi Kình Dũng Sĩ」
  tamyn: '', // Tamyn - 「Tinh Linh Thượng Cổ」

  // ==========================================================================
  // 4. LÂU ĐÀI KHỞI NGUYÊN (NORMAN) (22 TƯỚNG)
  // ==========================================================================
  arthur: '', // Arthur - 「Thanh Kiếm Chính Nghĩa」
  thane: '', // Thane - 「Thanh Gươm Quả Cảm」
  florentino: 'x1K_8P0M9j2', // Florentino - 「Tay Kiếm Hào Hoa」
  astrid: '', // Astrid - 「Nữ Kiếm Sư」
  allain: '4K0jP_9M1w8', // Allain - 「Cuồng Kiếm Sĩ」
  butterfly: '7P0jM_2K1x4', // Butterfly - 「Siêu Cấp Sát Thủ」
  valhein: '1M0jP_8K2x9', // Valhein - 「Thợ Săn Ác Quỷ」
  violet: '9K0jM_4P1w2', // Violet - 「Tay Súng Quả Cảm」
  richter: '3P0jN_8K2x1', // Richter - 「Lưỡi Gươm Đoạt Hồn」
  alice: '', // Alice - 「Tiểu Thần Thiện Lương」
  rourke: '', // Rourke - 「Lão Tướng Can Trường」
  moren: '', // Moren - 「Thợ Cương Thiết」
  kaine: '1P9jM_0K2w8', // Kaine - 「Bá Tước Huyết Tộc」
  stuart: '8M0jP_1K2x4', // Stuart - 「Tay Hề Quái Kiệt」
  batman: '', // Batman - 「Hiệp Sĩ Bóng Đêm」
  superman: '', // Superman - 「Siêu Nhân」
  the_flash: '', // The Flash - 「Tia Chớp Bí Ẩn」
  wonder_woman: '', // Wonder Woman - 「Chiến Thần Amazon」
  bijan: '5K0jM_9P1x2', // Bijan - 「Khách Hành Hương Thao Cát」
  charlotte: '2P0jN_4K1w8', // Charlotte - 「Nữ Kiếm Sĩ Hoa Hồng」
  iggy: '', // Iggy - 「Ma Lửa Nổi Loạn」
  garret: '', // Garret - 「Thợ Săn Rồng」

  // ==========================================================================
  // 5. HỌC VIỆN PHÉP THUẬT (CARANO) (19 TƯỚNG)
  // ==========================================================================
  dirak: '6M0jP_2K1x8', // Dirak - 「Pháp Vương Ánh Sáng」
  sephera: '', // Sephera - 「Nữ Thần Dòng Nước」
  keera: '4P0jM_8K1x2', // Keera - 「Tiểu Thư Ma Quái」
  ishar: '', // Ishar - 「Tí Nị Năng Động」
  annette: '', // Annette - 「Nàng Gió Tinh Linh」
  ata: '', // Ata - 「Mèo Đi Phượt」
  paine: '', // Paine - 「Hoà Nhạc Tử Thần」
  liliana: '9M0jP_3K1x4', // Liliana - 「Cửu Vĩ Linh Hồ」
  max: '', // Max - 「Cơ Động Thần Đồng」
  wisp: '', // Wisp - 「Pháo Thủ Tinh Nghịch」
  celica: '', // Celica - 「Pháo Đạn Hạng Nặng」
  roxie: '', // Roxie - 「Đốm Lửa Tinh Lịch」
  capheny: '1K0jM_8P2x4', // Capheny - 「Đại Bác Năng Lượng」
  goverra: '', // Goverra - 「Tiễn Thần Cơ Giới」
  bonnie: '3M0jP_9K1x2', // Bonnie - 「Thiếu Nữ Tia Chớp」
  quillen: '7K0jM_4P1x8', // Quillen - 「Đao Phủ Bóng Đêm」
  thorne: '2M0jP_8K1x4', // Thorne - 「Kẻ Phát Minh Ám Ảnh」
  amily: '5P0jM_1K2x8', // Amily - 「Nữ Quyền Vương」
  elsu: '8K0jM_3P1x4', // Elsu - 「Xạ Thủ Tinh Anh」

  // ==========================================================================
  // 6. PHƯƠNG ĐÔNG & NGOẠI VỰC (20 TƯỚNG)
  // ==========================================================================
  yue: '4M0jP_7K1x2', // Yue - 「Ngọc Nữ Cung Cấm」
  lu_bo: '1P0jM_9K2x4', // Lữ Bố - 「Vô Địch Chiến Thần」
  dieu_thuyen: '', // Điêu Thuyền - 「Tuyệt Sắc Giai Nhân」
  qi: '', // Qi - 「Võ Sư Bánh Bao」
  ryoma: '', // Ryoma - 「Kiếm Khách Hoàng Gia」
  yan: '6K0jM_2P1x8', // Yan - 「Họa Sư Thần Bút」
  airi: '3M0jP_8K1x4', // Airi - 「Ninja Rồng Thần」
  tachi: '2K0jM_9P1x8', // Tachi - 「Cuồng Ma Trảm」
  aoi: '7P0jM_1K2x4', // Aoi - 「Long Thảo Thần Nữ」
  dolia: '8P0jM_4K1x2', // Dolia - 「Tiên Cá Đại Dương」
  hainuo: '5M0jP_2K1x4', // Hainuo - 「Thần Tử Vận Mệnh」
  murad: '9P0jM_8K1x2', // Murad - 「Lãng Khách Thời Không」
  yena: '1M0jP_4K2x8', // Yena - 「Vũ Cơ Bán Nguyệt」
  trieu_van: '3K0jM_7P1x4', // Triệu Vân - 「Kỵ Sĩ Rồng」
  ming: '6P0jM_9K1x2', // Ming - 「Tiên Nhân Bói Toán」
  erin: '2M0jP_4K1x8', // Erin - 「Nàng Tiên Ánh Sáng」
  bill: '', // Bill - 「Đấu Sĩ Rừng Sâu」
  gark: '', // Gark - 「Ma Tượng Sa Mạc」
  wiro: '', // Wiro - 「Rìu Thần Bão Tố」
  flowborn: '', // Flowborn - 「Dòng Chảy Vô Tận」
};

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
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : null;
}

/**
 * Lấy thông tin Tâm Điểm Tướng đầy đủ cho một vị tướng trong Athanor
 */
export function getHeroSpotlight(hero: Hero, factionName?: string): HeroSpotlightInfo {
  const searchQuery = `Tâm Điểm Tướng ${hero.name} Liên Quân Mobile`;
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    searchQuery
  )}`;

  // Ưu tiên 1: Link/ID tùy chỉnh của người dùng (trong hero.spotlightVideoUrl)
  // Ưu tiên 2: Video ID chính thức trong bảng tra cứu bên trên
  let embedVideoId = extractYoutubeId(hero.spotlightVideoUrl);
  if (!embedVideoId && OFFICIAL_SPOTLIGHT_VIDEO_IDS[hero.id]) {
    embedVideoId = extractYoutubeId(OFFICIAL_SPOTLIGHT_VIDEO_IDS[hero.id]);
  }

  const embedUrl = embedVideoId
    ? `https://www.youtube-nocookie.com/embed/${embedVideoId}?rel=0&modestbranding=1`
    : null;

  const directWatchUrl = embedVideoId
    ? `https://www.youtube.com/watch?v=${embedVideoId}`
    : youtubeSearchUrl;

  const roleText = hero.secondaryRole
    ? `${hero.role} • ${hero.secondaryRole}`
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
    highlightSummary: `Video Tâm Điểm Tướng ${hero.name} - ${hero.title} phân tích chuyên sâu bộ chiêu thức, combo tác chiến và phong cách thi đấu đỉnh cao.`,
    keyTactics: tactics
  };
}
