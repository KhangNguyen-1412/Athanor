import type { Hero, HeroSkin } from '../types/athanor';
import { OFFICIAL_SKINS_MAP } from './officialSkinsData';

/**
 * Danh bạ trang phục chính thức của các vị tướng Liên Quân Mobile
 * Cung cấp đầy đủ Splash Art (ảnh lớn), Avatar Thumbnail (hình nhỏ),
 * Phân cấp bậc (Mặc định, Bậc A, Bậc S, Bậc S+, Bậc SS, Bậc SSS, Thứ Nguyên Vệ Thần, Tuyệt Sắc...),
 * cùng câu thoại và hiệu ứng độc quyền.
 */

export const HERO_SKINS_MAP: Record<string, HeroSkin[]> = {
  // =========================================================================
  // FLORENTINO
  // =========================================================================
  florentino: [
    {
      id: 'florentino-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9527c1cbad1c0656d0a4adf1dcec38e35c25f62d77d671.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/62cda115a78344fc4fa5154881c9da255c25f64ee994d1.jpg',
      quote: 'Hãy nhảy cùng ta một khúc hoa hồng rực rỡ!',
      description: 'Trang phục khởi nguyên của Kiếm Khách Hào Hoa Florentino.',
      effects: ['Cốt cách quý tộc Norman']
    },
    {
      id: 'florentino-vu-kiem-su',
      name: 'Vũ Kiếm Sư',
      tier: 'Bậc A',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/db3ef663c12e5b2af2933f609aba74795c25f6691e1091.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/db3ef663c12e5b2af2933f609aba74795c25f6691e1091.jpg',
      quote: 'Kiếm pháp của ta là nghệ thuật thuần khiết.',
      description: 'Bộ trang phục biểu diễn vũ kiếm trác tuyệt.',
      effects: ['Ngoại hình kiếm sĩ lãng du']
    },
    {
      id: 'florentino-giam-sat-tinh-he',
      name: 'Giám Sát Tinh Hệ',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0d8171fed4e3d81310901b52ce41ff505d55457196e041.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0d8171fed4e3d81310901b52ce41ff505d55457196e041.jpg',
      quote: 'Tinh hà vạn dặm cũng không bằng một nhát kiếm của ta.',
      description: 'Sứ giả công lý bảo hộ trật tự các thiên hà xa xôi.',
      effects: ['Hiệu ứng hoa tinh tú neon', 'Biến về vũ trụ ánh sáng', 'Âm thanh không gian số']
    },
    {
      id: 'florentino-kiem-si-olympic',
      name: 'Kiếm Sĩ Olympic',
      tier: 'Bậc S',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7e826cf4463b78fbccf1a24dabb6e3b75fa8b8738c04a1.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7e826cf4463b78fbccf1a24dabb6e3b75fa8b8739b3001.png',
      quote: 'Vinh quang thể thao thuộc về kẻ dũng cảm nhất!',
      description: 'Nhà vô địch bộ môn đấu kiếm danh giá thế vận hội.',
      effects: ['Hiệu ứng kiếm thể thao', 'Vòng nguyệt quế chiến thắng']
    },
    {
      id: 'florentino-seven',
      name: 'SEVEN',
      tier: 'Collab',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/425a6d75f5bb71953d616a2e0003fc5a5fbcc15a065121.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/425a6d75f5bb71953d616a2e0003fc5a5fbcc15a133a01.jpg',
      quote: 'Sức mạnh ánh sáng Ultraman thức tỉnh!',
      description: 'Trang phục hợp tác đặc biệt thương hiệu đình đám Ultraman.',
      effects: ['Hiệu ứng tia sáng siêu nhân', 'Lồng tiếng độc quyền Nhật Bản', 'Hoạt ảnh biến thân siêu cấp']
    },
    {
      id: 'florentino-than-thoai-hy-lap',
      name: 'Thần Thoại Hy Lạp',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d29813c1e81bd9584113bc1443d1b7505fc525672c8c01.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d29813c1e81bd9584113bc1443d1b7505fc525673b9d01.jpg',
      quote: 'Vẻ đẹp của các vị thần trên đỉnh Olympus ngự trị nơi đây.',
      description: 'Hóa thân thành anh hùng thần thoại Hy Lạp cổ đại.',
      effects: ['Lá nguyệt quế thần thánh', 'Bụi vàng Olympus hào nhoáng', 'Âm hưởng đàn hạc thiêng']
    },
    {
      id: 'florentino-ta-long-kiem-si',
      name: 'Tà Long Kiếm Sĩ',
      tier: 'Bậc SS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/de5061df09c85a6a17243c77c6e0b1a96117879494ef41.png',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/790628b34594e5b2ec184db6eb4fdae061178795136ee1.png',
      quote: 'Huyết long cuộn trào trong từng đường kiếm ma mị.',
      description: 'Kiếm sĩ thức tỉnh sức mạnh từ long mạch cổ đại.',
      effects: ['Rồng bóng tối uốn lượn', 'Chiêu thức hỏa long đỏ thẫm', 'Biến về triệu hồi Tà Long']
    },
    {
      id: 'florentino-hisoka',
      name: 'Hisoka',
      tier: 'Collab',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b16e265cd55913d2a88127fc48f25f2d6597ac047e9281.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b16e265cd55913d2a88127fc48f25f2d6597ac04886ca1-e1718877798103.jpg',
      quote: 'Ảo thuật gia bí ẩn... lá bài định đoạt sinh tử!',
      description: 'Hợp tác bom tấn Hunter x Hunter tái hiện gã hề ma thuật Hisoka Morow.',
      effects: ['Lá bài ma thuật phát sáng', 'Bungeegum biến ảo', 'Lồng tiếng phong cách quái đản']
    },
    {
      id: 'florentino-ba-vuong-am-nhac',
      name: 'Bá Vương Âm Nhạc',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/62a0422102d9677c455bc4e8391b92ff6597ac48213da1.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/62a0422102d9677c455bc4e8391b92ff6597ac482841f1-e1718877788431.jpg',
      quote: 'Hãy để những nốt nhạc điện tử thắp sáng đêm nay!',
      description: 'Siêu sao DJ dẫn đầu làn sóng EDM toàn cầu.',
      effects: ['Sóng âm thanh neon rực rỡ', 'Sàn nhảy ánh sáng hào quang', 'Giai điệu synthwave cuốn hút']
    }
  ],

  // =========================================================================
  // NAKROTH
  // =========================================================================
  nakroth: [
    {
      id: 'nakroth-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/50a88477e44151ee8ef4cfb354c22fdc5ec64ff164ffc1.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/50a88477e44151ee8ef4cfb354c22fdc5ec64ff1761fb1.jpg',
      quote: 'Tội ác phải trả giá bằng linh hồn dưới ngục tối!',
      description: 'Phán quan nghiêm minh canh giữ ranh giới cõi chết.',
      effects: ['Song đao trừng trị tội lỗi']
    },
    {
      id: 'nakroth-quan-doan-dia-nguc',
      name: 'Quân Đoàn Địa Ngục',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/995f2c0aed2b757d6f45dd32510ce1075c49395e2ce761.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/995f2c0aed2b757d6f45dd32510ce1075c49395e346631.jpg',
      quote: 'Ngọn lửa địa ngục sẽ thiêu rụi mọi kẻ cản đường!',
      description: 'Thủ lĩnh đội quân bóng tối thức tỉnh từ nham thạch.',
      effects: ['Hỏa ngục rực cháy', 'Song đao quỷ lửa cuồng nộ', 'Biến về triệu hồi cổng địa ngục']
    },
    {
      id: 'nakroth-bboy-cong-nghe',
      name: 'BBoy Công Nghệ',
      tier: 'Bậc S',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9ca27ec280c4befd2e299ff144b0058459b29278ce71f1.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9ca27ec280c4befd2e299ff144b0058459b29278de58d1.jpg',
      quote: 'Âm bass bùng nổ, vũ điệu đường phố bắt đầu!',
      description: 'Vũ công breakdance đỉnh cao sở hữu phong cách thời thượng.',
      effects: ['Hiệu ứng đường phố graffiti', 'Vũ đạo lướt điêu luyện']
    },
    {
      id: 'nakroth-sieu-viet',
      name: 'Siêu Việt',
      tier: 'Bậc SS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fa5833ffec89683fe89029070d78806f5a815a03490201.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fa5833ffec89683fe89029070d78806f5a815a03596fc1.jpg',
      quote: 'Vượt qua giới hạn con người... đạt tới trạng thái siêu việt!',
      description: 'Trang phục nâng cấp tối thượng thế hệ 5 cấp độ tiến hóa.',
      effects: ['Nâng cấp hiệu ứng 5 bậc', 'Lưỡi đao công nghệ ánh sáng', 'Biến về công nghệ phản trọng lực']
    },
    {
      id: 'nakroth-khieu-chien-aic',
      name: 'Khiêu Chiến AIC',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c2f3364ac1c81a67cc39e031b05d21ef5c41d1a4017951.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c2f3364ac1c81a67cc39e031b05d21ef5c41d1a408b401.jpg',
      quote: 'Đấu trường danh vọng chỉ tôn vinh kẻ chiến thắng tuyệt đối!',
      description: 'Trang phục vinh danh giải đấu thể thao điện tử AIC Quốc tế.',
      effects: ['Logo AIC rực rỡ', 'Hiệu ứng ánh kim vàng xanh', 'Biến về nâng cúp vinh quang']
    },
    {
      id: 'nakroth-loi-quang-su',
      name: 'Lôi Quang Sứ',
      tier: 'Bậc SSS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/001dbf5c41b23b35b4142dcd51e15db66594e429c0ce31.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/001dbf5c41b23b35b4142dcd51e15db66594e429c0ce31.jpg',
      quote: 'Lôi kiếp giáng trần, sấm sét xé tan màn đêm hắc ám!',
      description: 'Vị thần mang sức mạnh sấm sét tối cao giáng lâm chiến trường.',
      effects: ['Sấm sét hoàng kim rền vang', 'Hoạt ảnh chiêu thức biến ảo vũ bão', 'Lồng tiếng thần thánh độc quyền']
    },
    {
      id: 'nakroth-thu-nguyen-ve-than',
      name: 'Thứ Nguyên Vệ Thần',
      tier: 'Thứ Nguyên Vệ Thần',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3ed4166b122119a4a0f23bb1069e0e456594e6280fd0a1.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3ed4166b122119a4a0f23bb1069e0e456594e6280fd0a1.jpg',
      quote: 'Tôi sẽ bảo vệ hòa bình của thành phố anime này bằng cả tính mạng!',
      description: 'Chiến binh thứ nguyên sở hữu hoạt ảnh phong cách anime Nhật Bản sống động.',
      effects: ['Hoạt ảnh biến về tương tác độc nhất', 'Khung ảnh thứ nguyên anime', 'Lồng tiếng thần tượng Nhật Bản']
    },
    {
      id: 'nakroth-tiec-bai-bien',
      name: 'Tiệc Bãi Biển',
      tier: 'Tiệc Bãi Biển',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4eefc190795ff89d196522b182e776746116ce3ccadec1.png',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8dc3de369880e1cd0dda0f27b0c4ae976116ce3d4f06f1.png',
      quote: 'Mùa hè rực nắng, lướt sóng cùng tôi nào!',
      description: 'Sát thủ lướt ván siêu ngầu khuấy đảo bờ biển nhiệt đới.',
      effects: ['Bọt sóng biển đại dương', 'Cá mập bơi lượn khi tung chiêu', 'Hiệu ứng mát lạnh sảng khoái']
    }
  ],

  // =========================================================================
  // RAZ
  // =========================================================================
  raz: [
    {
      id: 'raz-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz_head.jpg',
      quote: 'Nắm đấm của ta thiêu đốt bằng ý chí kiên định!',
      description: 'Quyền vương bảo hộ những khu phố ngầm tại Tân Liên Hiệp.',
      effects: ['Quyền cước hỏa diệm']
    },
    {
      id: 'raz-muay-thai',
      name: 'Đại Sứ Muay Thái',
      tier: 'Bậc SS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz_muay_thai.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz_muay_thai_thumb.jpg',
      quote: 'Võ đài này là của ta! Đón nhận đòn gối bay sấm sét!',
      description: 'Huyền thoại quyền Thái Lan dũng mãnh và tôn nghiêm.',
      effects: ['Âm nhạc truyền thống Muay Thái', 'Đòn đánh rồng lửa Thái Lan', 'Biến về múa Wai Kru tôn kính']
    },
    {
      id: 'raz-sieu-cap-than-quyen',
      name: 'Siêu Cấp Thần Quyền',
      tier: 'Bậc SSS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz_than_quyen.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz_than_quyen_thumb.jpg',
      quote: 'Quyền năng vũ trụ hội tụ trong quả đấm sấm sét!',
      description: 'Quyền vương tối thượng khai mở tiềm năng vô tận của thiên hà.',
      effects: ['Tinh cầu nổ tung theo cú đấm', 'Hào quang vàng ròng chói lóa', 'Biến về vương tọa quyền năng']
    },
    {
      id: 'raz-bboy-thoat-xac',
      name: 'Bboy Thoát Xác',
      tier: 'Bậc S',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz_bboy.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Raz_bboy_thumb.jpg',
      quote: 'Nhịp điệu đường phố dẫn dắt từng cú combo điêu luyện.',
      description: 'Võ sĩ hip-hop ngông cuồng làm chủ sàn diễn.',
      effects: ['Hiệu ứng graffiti neon', 'Giai điệu hip-hop dồn dập']
    }
  ],

  // =========================================================================
  // TULEN
  // =========================================================================
  tulen: [
    {
      id: 'tulen-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/07210c9e529faa7766ba324bd86b75165a81722f3eab81.jpg',
      quote: 'Lôi điện là trật tự và quy luật tối cao của trời đất!',
      description: 'Hoàng tử sấm sét kiêu hãnh của Tháp Quang Minh Veda.',
      effects: ['Lôi thần chưởng uy lực']
    },
    {
      id: 'tulen-tan-nien-ve-than',
      name: 'Tân Niên Vệ Thần',
      tier: 'Bậc SSS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen_tannien.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen_tannien_thumb.jpg',
      quote: 'Mùa xuân thái bình mang ánh dương xua tan tà khí!',
      description: 'Thần hộ mệnh mang lại may mắn, thịnh vượng đầu năm mới.',
      effects: ['Rồng vàng kim quang chói lọi', 'Lồng đèn và pháo hoa rực rỡ', 'Biến về múa rồng nghênh xuân']
    },
    {
      id: 'tulen-chi-ton-kiem-tien',
      name: 'Chí Tôn Kiếm Tiên',
      tier: 'Tuyệt Sắc',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen_kiemtien.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen_kiemtien_thumb.jpg',
      quote: 'Ngự kiếm phi hành, vượt qua cửu trùng thiên mây ngút ngàn.',
      description: 'Kiếm tiên thoát tục ngộ đạo từ đỉnh núi thần tiên.',
      effects: ['Vạn kiếm quy tông', 'Hạc trắng bay lượn tiên cảnh', 'Âm nhạc cổ phong tao nhã']
    },
    {
      id: 'tulen-phu-thuy-am-nhac',
      name: 'Phù Thủy Âm Nhạc',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen_amnhac.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen_amnhac_thumb.jpg',
      quote: 'Mỗi cú sét đánh là một nốt cao trào của bản giao hưởng.',
      description: 'Nhà soạn nhạc thiên tài kết hợp lôi điện và phím đàn synthesizer.',
      effects: ['Phím đàn piano ánh sáng', 'Sóng âm phổ quang phổ sắc']
    }
  ],

  // =========================================================================
  // LILIANA
  // =========================================================================
  liliana: [
    {
      id: 'liliana-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana_head.jpg',
      quote: 'Ngàn năm luân chuyển, tri thức thế gian vẫn là điều say đắm nhất.',
      description: 'Hồ ly chín đuôi thấu hiểu cội nguồn linh hồn Athanor.',
      effects: ['Biến hình linh hồ ma thuật']
    },
    {
      id: 'liliana-nguyet-mi-ly',
      name: 'Nguyệt Mị Ly',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana_nguyetmily.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana_nguyetmily_thumb.jpg',
      quote: 'Dưới ánh trăng rằm, vẻ đẹp yêu hồ mê hoặc vạn chúng sinh.',
      description: 'Nàng hồ ly trăng tròn mang sắc tím huyền ảo ma mị.',
      effects: ['Ánh trăng huyền ảo tím bạc', 'Cánh hoa anh đào rơi', 'Hồ ly trăng rằm thần bí']
    },
    {
      id: 'liliana-ho-quy-phi',
      name: 'Hồ Quý Phi',
      tier: 'Bậc SS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana_hoquyphi.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana_hoquyphi_thumb.jpg',
      quote: 'Sắc nước hương trời, vương giả cũng phải nghiêng mình quy phục.',
      description: 'Quý phi quyền quý chốn cung đình phương Đông hoa lệ.',
      effects: ['Khổng tước xòe đuôi ngũ sắc', 'Màn lụa hoàng gia thanh thoát', 'Biến về kiệu hoa quý tộc']
    },
    {
      id: 'liliana-wave',
      name: 'WaVe',
      tier: 'Bậc SSS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana_wave.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Liliana_wave_thumb.jpg',
      quote: 'WaVe on top! Giọng ca của tôi sẽ chạm đến trái tim bạn!',
      description: 'Trưởng nhóm nhạc thần tượng ảo toàn cầu WaVe.',
      effects: ['Sân khấu thần tượng hologram', 'Vũ đạo K-Pop độc quyền', 'Lồng tiếng idol chuyên nghiệp']
    }
  ],

  // =========================================================================
  // ARTHUR
  // =========================================================================
  arthur: [
    {
      id: 'arthur-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/06/Honeyview_Arthur_1.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/06/Honeyview_Arthur_111-e1718875297358.jpg',
      quote: 'Chính nghĩa và thanh gươm của vương quốc sẽ quét sạch bóng tối!',
      description: 'Vị vua hiệp sĩ khai quốc của Lâu Đài Khởi Nguyên.',
      effects: ['Gươm thần công lý']
    },
    {
      id: 'arthur-hoang-kim-cot',
      name: 'Hoàng Kim Cốt',
      tier: 'Bậc S',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Arthur_hoangkimcot.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Arthur_hoangkimcot_thumb.jpg',
      quote: 'Giáp vàng bất hoại, linh hồn hiệp sĩ trường tồn muôn đời.',
      description: 'Bộ giáp hoàng gia rèn từ vàng ròng thánh tích cổ.',
      effects: ['Hào quang vàng rực rỡ', 'Thánh kiếm chói lóa']
    },
    {
      id: 'arthur-sieu-viet',
      name: 'Siêu Việt',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Arthur_sieuviet.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Arthur_sieuviet_thumb.jpg',
      quote: 'Năng lượng hạt nhân đã sẵn sàng, trật tự công lý thiết lập!',
      description: 'Chiến binh robot cơ giáp thế hệ mới bảo vệ thành phố tương lai.',
      effects: ['Tia laser năng lượng xanh lam', 'Lá chắn plasma bảo vệ', 'Biến về phóng tên lửa']
    },
    {
      id: 'arthur-lanh-chua-xuong',
      name: 'Lãnh Chúa Xương',
      tier: 'Bậc A',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Arthur_lanhchuaxuong.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Arthur_lanhchuaxuong_thumb.jpg',
      quote: 'Bóng đêm phục tùng thanh kiếm bị nguyền rủa!',
      description: 'Kỵ sĩ bóng ma thức tỉnh từ nghĩa địa các vị vua.',
      effects: ['Lửa ma trơi lục bảo', 'Giáp xương tử thần']
    }
  ],

  // =========================================================================
  // VALHEIN
  // =========================================================================
  valhein: [
    {
      id: 'valhein-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein_head.jpg',
      quote: 'Viên đạn bạc này dành tặng cho lũ ác quỷ săn đêm!',
      description: 'Thợ săn ma cà rồng trứ danh của Đế Chế Norman.',
      effects: ['Ám khí phi đao sắc bén']
    },
    {
      id: 'valhein-hoang-tu-bang',
      name: 'Hoàng Tử Băng',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein_hoangtubang.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein_hoangtubang_thumb.jpg',
      quote: 'Băng tuyết lạnh giá sẽ đóng băng nhịp đập trái tim kẻ thù.',
      description: 'Hoàng tử băng giá bảo hộ vương quốc mùa đông vĩnh cửu.',
      effects: ['Bông tuyết pha lê phát sáng', 'Băng giá lan tỏa theo bước chạy', 'Biến về lâu đài tuyết']
    },
    {
      id: 'valhein-vu-khi-toi-thuong',
      name: 'Vũ Khí Tối Thượng',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein_vukhi.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein_vukhi_thumb.jpg',
      quote: 'Hệ thống nhắm bắn khóa mục tiêu... Bắn hạ!',
      description: 'Đặc vụ công nghệ tương lai sở hữu khẩu súng trường lượng tử.',
      effects: ['Tia điện từ trường đỏ', 'Giao diện ngắm HUD điện tử']
    },
    {
      id: 'valhein-khieu-chien-aic',
      name: 'Khiêu Chiến AIC',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein_aic.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Valhein_aic_thumb.jpg',
      quote: 'Chiến thắng thuộc về xạ thủ có độ chuẩn xác tuyệt đối!',
      description: 'Trang phục thể thao điện tử danh giá dành riêng cho xạ thủ quốc dân.',
      effects: ['Cúp vô địch rực sáng', 'Hiệu ứng vàng xanh thể thao']
    }
  ],

  // =========================================================================
  // MURAD
  // =========================================================================
  murad: [
    {
      id: 'murad-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad_head.jpg',
      quote: 'Thời gian trôi chảy như cát sa mạc, không ai có thể giữ lại.',
      description: 'Hoàng tử sa mạc nắm giữ sức mạnh ngưng đọng thời gian.',
      effects: ['Ảo ảnh tàn ảnh thời gian']
    },
    {
      id: 'murad-sieu-viet',
      name: 'Siêu Việt',
      tier: 'Bậc SS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad_sieuviet.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad_sieuviet_thumb.jpg',
      quote: 'Thời gian trong tầm tay ta... Khởi động bước nhảy lượng tử!',
      description: 'Chiến binh điều khiển thời không đến từ tương lai cơ khí.',
      effects: ['Ảo ảnh cơ giáp số', 'Cắt xẻ không gian đa chiều', 'Biến về du hành thời không']
    },
    {
      id: 'murad-chi-ton-than-kiem',
      name: 'Chí Tôn Thần Kiếm',
      tier: 'Tuyệt Sắc',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad_chiton.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad_chiton_thumb.jpg',
      quote: 'Một kiếm đoạn giang sơn, ngàn dặm không lưu dấu vết.',
      description: 'Bậc thầy kiếm thuật phương Đông đạt cảnh giới tuyệt đỉnh vô song.',
      effects: ['Vệt kiếm thư pháp mực tàu', 'Cánh hoa rơi tao nhã', 'Lồng tiếng võ hiệp hào sảng']
    },
    {
      id: 'murad-than-tuong-hoc-duong',
      name: 'Thần Tượng Học Đường',
      tier: 'Học Đường',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad_hocduong.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Murad_hocduong_thumb.jpg',
      quote: 'Tiết học này do tôi làm chủ nhiệm đấy nhé!',
      description: 'Học sinh cá biệt tài năng của học viện Athanor.',
      effects: ['Phấn trắng bảng đen', 'Thước kẻ thước đo năng động']
    }
  ],

  // =========================================================================
  // ALLAIN
  // =========================================================================
  allain: [
    {
      id: 'allain-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain_head.jpg',
      quote: 'Song kiếm trong tay, tôi sẽ tìm lại ký ức đã mất!',
      description: 'Kiếm sĩ mất trí nhớ sở hữu song kiếm ánh sáng và bóng tối.',
      effects: ['Song kiếm trảm kích']
    },
    {
      id: 'allain-hiep-si-hac-am',
      name: 'Hiệp Sĩ Hắc Ám Kirito',
      tier: 'Collab',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain_kirito.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain_kirito_thumb.jpg',
      quote: 'Starburst Stream! Mười sáu nhát chém xé tan thế giới ảo!',
      description: 'Hợp tác đình đám Sword Art Online tái hiện kiếm sĩ đen Kirito.',
      effects: ['Kỹ năng 16 hit Starburst Stream', 'Song kiếm Elucidator & Dark Repulser', 'Lồng tiếng Matsuoka Yoshitsugu']
    },
    {
      id: 'allain-rong-trang-mat-xanh',
      name: 'Rồng Trắng Mắt Xanh',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain_rongtrang.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain_rongtrang_thumb.jpg',
      quote: 'Tiếng gầm của loài rồng trắng thức tỉnh ngàn cân kiếm khí!',
      description: 'Hiệp sĩ được rồng thiêng phương Bắc ban tặng sức mạnh.',
      effects: ['Long hồn lam ngọc bay lượn', 'Bão tuyết trảm kích', 'Biến về triệu hồi Rồng Trắng']
    },
    {
      id: 'allain-tuyet-son-tuyet-kiem',
      name: 'Tuyệt Sơn Tuyết Kiếm',
      tier: 'Bậc SS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain_tuyetkiem.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Allain_tuyetkiem_thumb.jpg',
      quote: 'Tuyết rơi trên đỉnh núi cao cũng không lạnh bằng lưỡi kiếm này.',
      description: 'Kiếm khách phiêu bạt đỉnh núi tuyết ngàn năm.',
      effects: ['Băng sơn phong kiếm', 'Hào quang ngọc bích băng đăng']
    }
  ],

  // =========================================================================
  // LAVILLE
  // =========================================================================
  laville: [
    {
      id: 'laville-default',
      name: 'Mặc Định',
      tier: 'Mặc Định',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville_head.jpg',
      quote: 'Bắn trước hỏi sau, đó là phong cách của Laville này!',
      description: 'Xạ thủ tinh nghịch thuộc Biệt Đội Ánh Sáng Veda.',
      effects: ['Song súng ánh sáng liên hoàn']
    },
    {
      id: 'laville-kim-quy-than-vuong',
      name: 'Kim Quy Thần Vương',
      tier: 'Bậc SSS',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville_kimquy.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville_kimquy_thumb.jpg',
      quote: 'Thần Kim Quy giáng thế, bảo vệ giang sơn bình an muôn thuở!',
      description: 'Trang phục thuần Việt lấy cảm hứng từ truyền thuyết Thần Kim Quy trao nỏ thần.',
      effects: ['Nỏ thần kim sắc bắn đạn thần', 'Vòng xoay mai rùa thần bí', 'Lồng tiếng hào sảng phong cách sử thi Việt']
    },
    {
      id: 'laville-xa-than-tinh-han',
      name: 'Xạ Thần Tinh Hán',
      tier: 'Bậc S+',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville_tinhhan.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville_tinhhan_thumb.jpg',
      quote: 'Mỗi phát bắn là một chòm sao rơi trúng mục tiêu!',
      description: 'Chiến binh vũ trụ tuần tra dải ngân hà rộng lớn.',
      effects: ['Đạn sao băng rơi', 'Tinh đồ ngân hà phát sáng']
    },
    {
      id: 'laville-tay-dua-duong-pho',
      name: 'Tay Đua Đường Phố',
      tier: 'Bậc A',
      bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville_taydua.jpg',
      avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Laville_taydua_thumb.jpg',
      quote: 'Bám chắc vào, tốc độ này không dành cho kẻ yếu tim đâu!',
      description: 'Tay đua drift cừ khôi của thế giới ngầm Tân Liên Hiệp.',
      effects: ['Khói lốp xe bốc cháy', 'Đèn pha tốc độ cao']
    }
  ]
};

/**
 * Trình tạo danh sách trang phục đầy đủ cho bất kỳ vị tướng nào trong 129 tướng Athanor.
 * - Luôn đảm bảo Trang phục Mặc Định nằm ở vị trí đầu tiên (index 0).
 * - Sử dụng kho dữ liệu chính thức từ Garena Liên Quân Mobile (OFFICIAL_SKINS_MAP).
 * - Tự động bổ sung các trang phục đặc thù nếu tướng là nhân vật biên niên sử cũ (Payna, Batman...)
 */
export function getHeroSkins(hero: Hero): HeroSkin[] {
  const customSkins: HeroSkin[] = hero.skins || [];

  // 1. Tìm kiếm trong kho trang phục chính thức Garena OFFICIAL_SKINS_MAP
  const officialKey = hero.id in OFFICIAL_SKINS_MAP
    ? hero.id
    : Object.keys(OFFICIAL_SKINS_MAP).find(
        (k) =>
          k.toLowerCase() === hero.id.toLowerCase() ||
          k.toLowerCase().replace(/[^a-z0-9]/g, '') === hero.id.toLowerCase().replace(/[^a-z0-9]/g, '')
      );

  const officialSkins = officialKey ? OFFICIAL_SKINS_MAP[officialKey] : undefined;

  if (officialSkins && officialSkins.length > 0) {
    const presetSkins = HERO_SKINS_MAP[hero.id] || [];

    const enriched = officialSkins.map((skin, idx) => {
      const matchingPreset =
        presetSkins.find(
          (p) =>
            p.id === skin.id ||
            p.name.toLowerCase() === skin.name.toLowerCase() ||
            p.name.toLowerCase().includes(skin.name.toLowerCase())
        ) || (idx === 0 ? presetSkins[0] : undefined);

      if (idx === 0) {
        return {
          ...skin,
          bannerUrl: hero.bannerUrl || skin.bannerUrl,
          avatarUrl: hero.avatarUrl || skin.avatarUrl,
          quote: hero.quote || matchingPreset?.quote || skin.quote,
          description: skin.description || matchingPreset?.description,
          effects: matchingPreset?.effects || skin.effects
        };
      }

      return {
        ...skin,
        quote: matchingPreset?.quote || skin.quote,
        description: matchingPreset?.description || skin.description,
        effects: matchingPreset?.effects || skin.effects
      };
    });

    return [...enriched, ...customSkins];
  }

  // 2. Nếu tướng có cấu hình riêng trong HERO_SKINS_MAP
  const presetSkins = HERO_SKINS_MAP[hero.id];
  if (presetSkins && presetSkins.length > 0) {
    const defaultPreset = presetSkins[0];
    const normalizedDefault: HeroSkin = {
      ...defaultPreset,
      bannerUrl: hero.bannerUrl || defaultPreset.bannerUrl,
      avatarUrl: hero.avatarUrl || defaultPreset.avatarUrl,
      quote: hero.quote || defaultPreset.quote
    };

    return [normalizedDefault, ...presetSkins.slice(1), ...customSkins];
  }

  // 3. Với các tướng biên niên sử đặc biệt chưa có trên website Garena hiện tại:
  const defaultSkin: HeroSkin = {
    id: `${hero.id}-default`,
    name: 'Mặc Định',
    tier: 'Mặc Định',
    bannerUrl: hero.bannerUrl,
    avatarUrl: hero.avatarUrl,
    quote: hero.quote,
    description: `Trang phục nguyên bản của ${hero.name} trong biên niên sử Athanor.`,
    effects: ['Diện mạo truyền thống anh hùng']
  };

  const skinA: HeroSkin = {
    id: `${hero.id}-skin-a`,
    name: `${hero.name} Hiệp Sĩ Khởi Nguyên`,
    tier: 'Bậc A',
    bannerUrl: hero.bannerUrl,
    avatarUrl: hero.avatarUrl,
    quote: `${hero.quote}`,
    description: `Bộ chiến giáp tuần tra tác chiến thực địa của ${hero.name}.`,
    effects: ['Ngoại hình hiệp sĩ thực chiến']
  };

  const skinS: HeroSkin = {
    id: `${hero.id}-skin-s`,
    name: `${hero.name} Thần Thoại Tinh Vân`,
    tier: 'Bậc S',
    bannerUrl: hero.bannerUrl,
    avatarUrl: hero.avatarUrl,
    quote: `Sức mạnh của các vì tinh tú soi sáng con đường ta đi!`,
    description: `Hóa thân huyền ảo kết tinh từ năng lượng tinh tú thiên hà.`,
    effects: ['Hiệu ứng chiêu thức tinh hà', 'Hào quang neon vũ trụ']
  };

  const skinSS: HeroSkin = {
    id: `${hero.id}-skin-ss`,
    name: `${hero.name} Siêu Việt Tối Thượng`,
    tier: 'Bậc SS',
    bannerUrl: hero.bannerUrl,
    avatarUrl: hero.avatarUrl,
    quote: `Phá vỡ mọi giới hạn thể xác, đạt tới cảnh giới bất bại!`,
    description: `Dạng thức tiến hóa đỉnh cao vượt qua ranh giới trần tục.`,
    effects: ['Tiến hóa diện mạo đa cấp độ', 'Hoạt ảnh chiêu thức mãn nhãn', 'Biến về tương tác thần thánh']
  };

  return [defaultSkin, skinA, skinS, skinSS, ...customSkins];
}

/**
 * Trả về class CSS hoặc slug đại diện cho phân cấp bậc của trang phục
 */
export function getSkinTierSlug(tier?: string): string {
  if (!tier) return 'default';
  const t = tier.toLowerCase();
  if (t.includes('thứ nguyên')) return 'dimension';
  if (t.includes('sss')) return 'sss';
  if (t.includes('tuyệt sắc')) return 'tuyetsac';
  if (t.includes('ss')) return 'ss';
  if (t.includes('s+')) return 's-plus';
  if (t.includes('bậc s') || t === 's') return 's';
  if (t.includes('bậc a') || t === 'a') return 'a';
  if (t.includes('collab')) return 'collab';
  if (t.includes('tiệc bãi biển') || t.includes('biển')) return 'beach';
  if (t.includes('fmvp') || t.includes('quán quân')) return 'champion';
  if (t.includes('học đường') || t.includes('học viện')) return 'academy';
  if (t.includes('thưởng hạng') || t.includes('hạng')) return 'rank';
  if (t.includes('hạn định') || t.includes('hạn chế')) return 'limited';
  return 'default';
}

