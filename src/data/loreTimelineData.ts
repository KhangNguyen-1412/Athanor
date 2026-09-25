import type { TimelineEra } from '../types/athanor';

export const TIMELINE_ERAS: TimelineEra[] = [
  // =========================================================================
  // KỶ NGUYÊN I: KHỞI NGUYÊN & SÁNG TẠO
  // =========================================================================
  {
    id: 'era-genesis',
    eraName: 'Kỷ Nguyên Khởi Nguyên & Sáng Tạo',
    period: 'Kỷ Nguyên Thứ Nhất',
    title: 'Đấng Sáng Tạo Edras & Sự Ra Đời Của Thế Giới Athanor',
    themeColor: '#eab308',
    bannerUrl: '/gods/edras-light-god.jpg',
    quote: {
      text: 'Từ Suối Nguồn Khởi Nguyên, Ánh Sáng đã phân định ranh giới cho sinh mệnh và bóng tối. Nhưng trong hạt mầm của trật tự vĩnh hằng, bóng đen của sự hoài nghi đã bắt đầu bén rễ.',
      author: 'Đấng Sáng Tạo Edras',
      role: 'Khởi Nguyên Thần Chủ Veda'
    },
    summary: 'Đấng Sáng Tạo Edras kiến lập luật Ánh Sáng và Tháp Quang Minh trên đỉnh Orsen. Ngài thu nhận những học đồ kiệt xuất gồm Volkath, Maloch, Ilumia, Marja. Cùng thời kỳ, hai con Rồng Cổ đại hy sinh thân mình kiến tạo Vương Quốc Rồng (Long Trì Quốc) phương Bắc đẩy lùi lời nguyền cát bụi Helios.',
    clash: {
      leftHeroId: 'edras',
      rightHeroId: 'volkath',
      title: 'Ánh Sáng Khởi Thủy vs Khát Vọng Hỗn Mang',
      desc: 'Edras truyền dạy chân lý trật tự cho các đồ đệ, nhưng Volkath khát khao tự do và sức mạnh nguyên thủy vô biên, tạo nên vết nứt tư tưởng đầu tiên trong lịch sử thần thoại.',
      powerBalance: 70,
      leftFactionTitle: 'Thánh Sư Veda',
      rightFactionTitle: 'Đại Đồ Đệ Phản Nghịch'
    },
    secretLore: {
      id: 'secret-era-1',
      title: 'Di Nguyện Bí Mật Trong Thư Viện Orsen',
      sealType: 'veda_wax',
      content: 'Ghi chép bị Ilumia niêm phong bằng sáp vàng cấp tối mật: Edras trước khi ngã xuống đã tiên liệu Volkath sẽ bị sức mạnh Vực thẳm cám dỗ. Ngài đã bí mật truyền một phần chân nguyên Ánh Sáng Bất Tử cho Bright và cất giấu Lõi Năng Lượng Thiên Cầu trên đỉnh Tháp Quang Minh để chờ ngày đại quyết chiến.',
      revealHint: 'Chạm để phá dấu niêm phong sáp vàng của Giáo Đình Veda',
      authorOrSource: 'Mật lục của Đại Hiền Triết Ignis'
    },
    majorEvents: [
      {
        id: 'ev-1-1',
        title: 'Khai Sinh Trật Tự & Tháp Quang Minh',
        desc: 'Edras dùng Suối Nguồn Khởi Nguyên tạo ra trật tự cho lục địa Athanor, xây dựng Tháp Quang Minh trên đỉnh Orsen quanh năm tuyết phủ.',
        category: 'oracle',
        yearOrEpoch: 'Khởi Nguyên Niên',
        mapTarget: { x: 44.5, y: 35.5, locationName: 'Đỉnh Orsen — Tháp Quang Minh', landmarkId: 'veda_central_see' }
      },
      {
        id: 'ev-1-2',
        title: 'Sự Hy Sinh Của Song Long Thần Thoại (Mist & Rain Dragons)',
        desc: 'Hai con Rồng Cổ đại (Thần Long Mây Mù & Thần Long Mưa Thuần) hy sinh thân mình: một con hồi sinh lại sự sống cho vương quốc trước lời nguyền của Helios, con còn lại hóa kết giới vô hình bảo vệ cõi Long Chi Quốc phương Đông.',
        category: 'treaty',
        yearOrEpoch: 'Năm Khởi Nguyên 120',
        mapTarget: { x: 72.5, y: 21.5, locationName: 'Vương Quốc Rồng (Long Chi Quốc)', landmarkId: 'dragon_kingdom' }
      },
      {
        id: 'ev-1-3',
        title: 'Mầm Mống Bất Phục Của Đồ Đệ Volkath',
        desc: 'Volkath và Maloch bắt đầu hoài nghi luật lệ nghiêm ngặt của Tháp Quang Minh, lén lút tìm kiếm nguồn sức mạnh bóng tối sâu trong lòng đất cằn cỗi.',
        category: 'magic',
        yearOrEpoch: 'Năm Khởi Nguyên 350',
        mapTarget: { x: 42.0, y: 37.8, locationName: 'Điện Trí Tuệ Veda', landmarkId: 'veda_wisdom_temple' }
      }
    ],
    featuredHeroIds: ['volkath', 'ilumia', 'lauriel', 'bright', 'tulen'],
    keyFactionId: 'veda'
  },

  // =========================================================================
  // KỶ NGUYÊN II: SA ĐỌA & ĐẠI CHIẾN THẦN MA
  // =========================================================================
  {
    id: 'era-fall',
    eraName: 'Kỷ Nguyên Sa Đọa & Đại Chiến Thần Ma',
    period: 'Kỷ Nguyên Thứ Hai',
    title: '5 Thủ Lĩnh Ly Khai, Vua Arthur & Mũi Tên Tel\'Annas',
    themeColor: '#ef4444',
    bannerUrl: '/gods/lokheim-dark-god.jpg',
    quote: {
      text: 'Mũi tên này không bắn vì thù hận của riêng ta, mà bắn vì hơi thở của từng đóa hoa linh, từng nhành cây trên cõi Elborn thiêng liêng!',
      author: 'Nữ Vương Tel\'Annas',
      role: 'Lãnh Tụ Tối Cao Rừng Nguyên Sinh'
    },
    summary: 'Volkath phản bội sát hại Edras, cùng Maloch, Veera, Marja, Kahlii rời bỏ Tháp Quang Minh thành lập Vực Hỗn Mang. Vua Arthur dẫn đầu loài người đẩy lùi quân đoàn quỷ dữ, bị Maloch biến thành Mortos rồi được thanh tẩy. Cuộc chiến khép lại khi Nữ Vương Tel\'Annas bắn gục Volkath và chìm vào giấc ngủ ngàn năm.',
    clash: {
      leftHeroId: 'telannas',
      rightHeroId: 'volkath',
      title: 'Cung Thần Ánh Sao vs Chúa Tể Hắc Ám',
      desc: 'Trận huyết chiến chấn động cõi Athanor tại lòng chảo Elborn: Tel\'Annas dùng Cung Thần bắn xuyên tim Volkath tiêu diệt thân xác hắn, nhưng linh hồn Nữ Vương cũng bị hắc ma xâm lấn, buộc phải chìm vào giấc ngủ ngàn năm.',
      powerBalance: 52,
      leftFactionTitle: 'Nữ Vương Tinh Linh',
      rightFactionTitle: 'Chúa Tể Vực Hỗn Mang'
    },
    secretLore: {
      id: 'secret-era-2',
      title: 'Lời Thề Máu Giữa Marja & Volkath Dưới Đáy Vực',
      sealType: 'lokheim_abyss',
      content: 'Trước khi Volkath dẫn quân càn quét Tháp Quang Minh, Marja đã dùng huyết chú cổ xưa dâng hiến đôi mắt và ma lực thuần khiết của mình để tạo nên bùa hộ mệnh bảo tồn nguyên thần cho Volkath phòng khi hắn tử trận. Nhờ bản giao ước linh hồn này, Volkath mới không thực sự tan biến mà có thể chờ ngày phục sinh trên lưng chiến mã bóng tối.',
      revealHint: 'Chạm để giải trừ phù chú huyết ma của Vực Hỗn Mang',
      authorOrSource: 'Tàn cảo hắc ám thu được từ Marja'
    },
    majorEvents: [
      {
        id: 'ev-2-1',
        title: '5 Đại Thủ Lĩnh Ly Khai & Cái Chết Của Edras',
        desc: 'Cả 5 vị Thủ Lĩnh Tối Cao do Volkath cầm đầu dứt áo rời bỏ Tháp Quang Minh, sát hại Đấng Sáng Tạo Edras và khai sinh bộ máy quân sự Vực Hỗn Mang.',
        category: 'war',
        yearOrEpoch: 'Năm Sa Đọa Thứ Nhất',
        mapTarget: { x: 92.5, y: 69.5, locationName: 'Vực Hỗn Mang (Ngai Vàng Chúa Tể Volkath)', landmarkId: 'lokheim_dark_throne' }
      },
      {
        id: 'ev-2-2',
        title: 'Lời Nguyền Của Maloch & Bi Kịch Vua Arthur',
        desc: 'Vua Arthur lập Trật Tự Hiệp Sĩ bảo vệ nhân loại; bị Maloch hãm hại thành xác khô Mortos tà ác trước khi được thanh tẩy để trị vì Vương quốc Okka kiêu hãnh.',
        category: 'tragedy',
        yearOrEpoch: 'Năm Sa Đọa 45',
        mapTarget: { x: 44.5, y: 56.5, locationName: 'Vương Quốc Okka (Vương Quốc Cổ Xưa Nhất)', landmarkId: 'okka_kingdom' }
      },
      {
        id: 'ev-2-3',
        title: 'Huyết Chiến Rừng Nguyên Sinh & Mũi Tên Định Mệnh',
        desc: 'Tel\'Annas dùng Cung Thần Ánh Sao kết liễu thân xác Volkath; Thần hộ vệ Payna hy sinh che chở Biển Hoa Linh dưới chân Cây Thế Giới, truyền thừa vị trí cho Helen.',
        category: 'war',
        yearOrEpoch: 'Năm Sa Đọa 100',
        mapTarget: { x: 13.3, y: 50.2, locationName: 'Cây Thế Giới & Biển Hoa Linh', landmarkId: 'afata_world_tree' }
      }
    ],
    featuredHeroIds: ['volkath', 'maloch', 'arthur', 'telannas', 'marja', 'helen'],
    keyFactionId: 'lokheim'
  },

  // =========================================================================
  // KỶ NGUYÊN III: TRỖI DẬY NHÂN LOẠI & BI KỊCH SA ĐỌA
  // =========================================================================
  {
    id: 'era-human-dawn',
    eraName: 'Thời Kỳ Trỗi Dậy Của Nhân Loại & Bi Kịch Sa Đọa',
    period: 'Kỷ Nguyên Thứ Ba',
    title: 'Ngai Vàng Thane, Bi Kịch Taara & Học Viện Carano',
    themeColor: '#3b82f6',
    bannerUrl: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1400&q=80',
    quote: {
      text: 'Thép của Norman được rèn từ máu và ý chí kiên cường của con người, không phụ thuộc vào ân huệ của thần linh hay sự thương hại của ác quỷ!',
      author: 'Vua Thane',
      role: 'Đế Vương Lâu Đài Khởi Nguyên'
    },
    summary: 'Vua Thane kế thừa ngai vàng Lâu Đài Khởi Nguyên. Tại Okka, Gildur quỵt thưởng và tăng sưu thuế đẩy Taara vào bóng tối. Tại Casanova, Hội Ám Hoàng do Quillen cầm đầu trỗi dậy truy sát dị tộc; Allain bị bắt cóc làm vật thí nghiệm; Học Viện Carano thành lập để nghiên cứu tri thức ma thuật tự do.',
    clash: {
      leftHeroId: 'thane',
      rightHeroId: 'taara',
      title: 'Ngai Vàng Khởi Nguyên vs Cơn Thịnh Nộ Thợ Rèn',
      desc: 'Sự bất công thuế khóa và sự bóc lột của quý tộc Gildur tại Okka đẩy nữ thợ rèn Taara vào tuyệt vọng, cầm búa sa đọa dâng hiến linh hồn cho lửa băng của Maloch, trở thành vết thương nhức nhối của các hiệp sĩ loài người.',
      powerBalance: 58,
      leftFactionTitle: 'Vua Hiệp Sĩ Norman',
      rightFactionTitle: 'Đại Tướng Lửa Băng Sa Đọa'
    },
    secretLore: {
      id: 'secret-era-3',
      title: 'Hồ Sơ Mật Về Thí Nghiệm "Vũ Khí Sống" Allain',
      sealType: 'carano_arcane',
      content: 'Tập hồ sơ tuyệt mật trích xuất từ căn cứ Hội Ám Hoàng: Allain đã bị tẩy não hoàn toàn và cấy ghép dung dịch ma thạch hắc ám vào cơ thể để biến thành sát thủ diệt chủng vô cảm. Nữ kiếm khách Butterfly vì lùng kiếm tung tích Allain đã đào tẩu khỏi Thành Chiến Binh, mở đầu mối tình đầy trắc trở.',
      revealHint: 'Chạm để kích hoạt ấn ký ma pháp Học Viện Carano',
      authorOrSource: 'Bản lưu trữ Nghị Viện DeLante'
    },
    majorEvents: [
      {
        id: 'ev-3-1',
        title: 'Thống Nhất Vương Quốc Norman',
        desc: 'Vua Thane thống nhất các lãnh chúa nhân loại, xây dựng Lâu Đài Khởi Nguyên kiên cố bên bờ biển, chiêu mộ Nữ Bá Tước Astrid và Kiếm Thánh Florentino.',
        category: 'treaty',
        yearOrEpoch: 'Năm Nhân Loại 15',
        mapTarget: { x: 69.5, y: 56.0, locationName: 'Thành Lâu Đài Khởi Nguyên Norman', landmarkId: 'norman_capital' }
      },
      {
        id: 'ev-3-2',
        title: 'Khởi Sinh Học Viện Ma Pháp Carano',
        desc: 'Tam Cự Đầu (Dirak, D\'Arcy, Sephera) lập Học Viện Ma Pháp Carano trên đỉnh núi, kiến tạo các kết giới ma pháp vĩ đại bảo vệ loài người khỏi Vực Hỗn Mang.',
        category: 'magic',
        yearOrEpoch: 'Năm Nhân Loại 40',
        mapTarget: { x: 58.0, y: 47.5, locationName: 'Học Viện Ma Pháp Carano', landmarkId: 'carano_academy' }
      },
      {
        id: 'ev-3-3',
        title: 'Bi Kịch Sa Đọa Của Nữ Thợ Rèn Taara',
        desc: 'Taara bị Gildur bạc đãi tống giam, uất hận dâng hiến linh hồn cho ngọn lửa băng sa đọa của Maloch, trở thành thống soái càn quét các đồn lũy loài người.',
        category: 'tragedy',
        yearOrEpoch: 'Năm Nhân Loại 62',
        mapTarget: { x: 91.5, y: 82.0, locationName: 'Huyết Đầm Lầy Lokheim', landmarkId: 'lokheim_blood_marsh' }
      }
    ],
    featuredHeroIds: ['thane', 'taara', 'allain', 'butterfly', 'quillen', 'darcy'],
    keyFactionId: 'norman'
  },

  // =========================================================================
  // KỶ NGUYÊN IV: ĐAO BINH & NHỮNG KHÚC CA VƯỢT ĐỊNH MỆNH
  // =========================================================================
  {
    id: 'era-treason',
    eraName: 'Kỷ Nguyên Đao Binh & Những Khúc Ca Vượt Định Mệnh',
    period: 'Kỷ Nguyên Thứ Tư',
    title: 'Khúc Hát Nhân Ngư, Dấu Ấn Rồng & Lửa Tuyên Chiến Vidu',
    themeColor: '#06b6d4',
    bannerUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    quote: {
      text: 'Dù ký ức của ta có tan biến như bọt biển, chỉ cần giai điệu này còn ngân vang, đại dương và chàng sẽ mãi được bình yên dưới pháo hoa.',
      author: 'Dolia',
      role: 'Tiếng Hát Nhân Ngư Hải Linh Trấn'
    },
    summary: 'Sóng gió nổi lên khắp các miền đất: Dolia hy sinh ký ức cứu biển cả và được Hainuo dùng thời không phá vỡ định mệnh; Airi mang Dấu Ấn Rồng chém trọng thương Maloch trong khi Hayate quyết cắt đứt khế ước bất công; Goverra công khai tuyên chiến Hội Ám Hoàng; Bonnie bùng nổ năng lượng Andura giải thoát trẻ em khổ sai.',
    clash: {
      leftHeroId: 'airi',
      rightHeroId: 'maloch',
      title: 'Dấu Ấn Thần Long vs Ma Vương Quản Ngục',
      desc: 'Maloch mang quân đoàn hắc ám xâm lăng duyên hải phương Đông. Ninja Nữ Vương Airi thức tỉnh long hồn tổ tiên, vung nhát chém kinh thiên động địa chém đứt sừng Maloch đẩy lui quân thù ra biển khơi.',
      powerBalance: 62,
      leftFactionTitle: 'Long Kiếm Ninja Đảo Sương Mù',
      rightFactionTitle: 'Ma Vương Vực Hỗn Mang'
    },
    secretLore: {
      id: 'secret-era-4',
      title: 'Cuốn Nhật Ký Thất Lạc Của Hải Nặc (Hainuo)',
      sealType: 'dragon_seal',
      content: 'Trang nhật ký bị nước biển làm nhòe lưu giữ tại Hải Linh Trấn: Hainuo đã sử dụng Ma Trận Thời Gian gia tộc đảo ngược vòng lặp sinh tử nhằm cứu Dolia khỏi cái chết dưới đáy vực biển sâu, đánh đổi bằng chính vận mệnh và sợi tơ duyên của hai người trước khi họ tìm lại nhau dưới màn pháo hoa vịnh cảng.',
      revealHint: 'Chạm để giải ấn Long Phù phương Đông',
      authorOrSource: 'Gia tộc Thời Gian Hải Linh Trấn'
    },
    majorEvents: [
      {
        id: 'ev-4-1',
        title: 'Khúc Hát Nhân Ngư & Sợi Dây Định Mệnh',
        desc: 'Dolia cất Khúc Hát Nhân Ngư cứu vãn đại dương Hải Linh Trấn; Hainuo dùng Sợi Dây Định Mệnh và cuốn Nhật Ký Tình Yêu phá vỡ vòng lặp luân hồi.',
        category: 'magic',
        yearOrEpoch: 'Năm Sóng Gió 18',
        mapTarget: { x: 77.5, y: 65.5, locationName: 'Vịnh Cảng Hải Linh Trấn', landmarkId: 'pearl_haven' }
      },
      {
        id: 'ev-4-2',
        title: 'Nhát Chém Long Hồn & Cuộc Nổi Loạn Của Hayate',
        desc: 'Airi dùng nhát chém Dấu Ấn Rồng đẩy lui Ma Vương Maloch; Hayate bất mãn trước sự trói buộc bất công của Veda đã cấu kết Vực Hỗn Mang để giải phóng tộc Ninja.',
        category: 'war',
        yearOrEpoch: 'Năm Sóng Gió 32',
        mapTarget: { x: 46.5, y: 18.5, locationName: 'Đảo Sương Mù (Mist Island)', landmarkId: 'mist_island' }
      },
      {
        id: 'ev-4-3',
        title: 'Ngọn Lửa Kháng Chiến Tại Tân Liên Hiệp',
        desc: 'Goverra đại diện gia tộc Vidu kích hoạt vũ khí siêu tần số tuyên chiến Hội Ám Hoàng; Bonnie bùng nổ ma năng Andura giải cứu bạn bè khỏi công xưởng khổ sai.',
        category: 'war',
        yearOrEpoch: 'Năm Sóng Gió 45',
        mapTarget: { x: 62.0, y: 78.0, locationName: 'Tân Liên Hiệp (Thành Phố Cơ Giới Steel City)', landmarkId: 'free_federation' }
      }
    ],
    featuredHeroIds: ['dolia', 'hainuo', 'airi', 'hayate', 'goverra', 'bonnie', 'yue', 'lubo'],
    keyFactionId: 'long_chi_quoc'
  },

  // =========================================================================
  // KỶ NGUYÊN V: ĐẠI CHIẾN TÁI SINH TOÀN CÕI
  // =========================================================================
  {
    id: 'era-rebirth',
    eraName: 'Đại Chiến Tái Sinh Toàn Cõi',
    period: 'Kỷ Nguyên Hiện Tại',
    title: 'Volkath Tái Sinh & Cuộc Đụng Độ Cuối Cùng Của Các Thế Lực',
    themeColor: '#a855f7',
    bannerUrl: '/athanor-battle-watermark.jpg',
    quote: {
      text: 'Ngươi tưởng bóng tối đã kết thúc sau mũi tên ngàn năm trước sao? Ta trở lại không phải để đòi ngai vàng, mà để nuốt chửng toàn bộ thế giới của các ngươi!',
      author: 'Chúa Tể Volkath',
      role: 'Chúa Tể Hắc Ám Tái Sinh'
    },
    summary: 'Chúa Tể Hắc Ám Volkath chính thức tái sinh trên lưng Chiến Mã Hắc Ám. Nữ Vương Tel\'Annas thức tỉnh, Bright mang sức mạnh bất tử của Edras xuất trận, Tulen chỉ huy Tiểu Đội Ánh Sáng, Arthur cùng Thane dàn trận hiệp sĩ. Toàn bộ 6 thế lực lớn của Athanor bước vào trận đại quyết chiến định đoạt số phận của thế giới.',
    clash: {
      leftHeroId: 'bright',
      rightHeroId: 'volkath',
      title: 'Ánh Sáng Khởi Thủy Bất Tử vs Chúa Tể Tái Sinh',
      desc: 'Volkath phá tan phong ấn cưỡi chiến mã bóng tối quét qua Màn Phép Thuật; Bright mang thánh kiếm kế thừa chân nguyên Edras cùng Tulen và liên minh hiệp sĩ Thane - Arthur lập phòng tuyến sinh tử.',
      powerBalance: 50,
      leftFactionTitle: 'Thánh Kiếm Quang Minh Veda',
      rightFactionTitle: 'Chúa Tể Sa Đọa Tái Sinh'
    },
    secretLore: {
      id: 'secret-era-5',
      title: 'Bản Đồ Điểm Yếu Của Màn Phong Ấn Carano',
      sealType: 'carano_arcane',
      content: 'Mật báo khẩn cấp từ các trinh sát Carano: Quân đoàn Lokheim đã phát hiện 3 trụ phong ấn cổ ngữ dọc theo vách đá Norman. Điểm xung kích ác liệt nhất nằm ở eo biển phía Bắc và Mũi Đá Lokheim, nơi Maloch và Zephys đang dồn toàn bộ ma thạch hắc ám nhằm giật sập kết giới Carano Ward.',
      revealHint: 'Chạm để giải mã mật thư tác chiến khẩn cấp',
      authorOrSource: 'Hội Tình Báo Học Viện Carano'
    },
    majorEvents: [
      {
        id: 'ev-5-1',
        title: 'Kích Hoạt Màn Phép Thuật Trấn Giữ Carano',
        desc: 'Học Viện Carano huy động toàn bộ pháp sư thượng tầng thiết lập Màn Phép Thuật khổng lồ bao trùm toàn bộ Vực Hỗn Mang, cô lập quân đoàn sa đọa.',
        category: 'magic',
        yearOrEpoch: 'Năm Tái Sinh',
        mapTarget: { x: 87.5, y: 69.4, locationName: 'Màn Phép Thuật Trấn Giữ (Carano Ward)', landmarkId: 'carano_barrier' }
      },
      {
        id: 'ev-5-2',
        title: 'Chúa Tể Volkath Chính Thức Phục Sinh',
        desc: 'Volkath phá vỡ phong ấn Lokheim, hồi sinh trên lưng Chiến Mã Hắc Ám, triệu tập Maloch, Veera, Aleister, Taara dồn tổng lực tấn công các phòng tuyến.',
        category: 'war',
        yearOrEpoch: 'Năm Tái Sinh',
        mapTarget: { x: 92.5, y: 69.5, locationName: 'Vực Hỗn Mang (Ngai Vàng Chúa Tể Volkath)', landmarkId: 'lokheim_dark_throne' }
      },
      {
        id: 'ev-5-3',
        title: 'Đại Liên Minh Toàn Cõi Athanor Xuất Kích',
        desc: 'Nữ Vương Tel\'Annas thức tỉnh cùng muôn thú Rừng Nguyên Sinh; Bright, Tulen, Vua Thane, Vua Arthur và chiến binh Long Trì Quốc hợp lực dàn trận quyết chiến.',
        category: 'war',
        yearOrEpoch: 'Thời Khắc Hiện Tại',
        mapTarget: { x: 44.5, y: 35.5, locationName: 'Thánh Địa Tháp Quang Minh', landmarkId: 'veda_central_see' }
      }
    ],
    featuredHeroIds: ['volkath', 'bright', 'tulen', 'arthur', 'telannas', 'dyadia', 'goverra'],
    keyFactionId: 'veda'
  }
];


