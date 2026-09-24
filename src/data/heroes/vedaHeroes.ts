import type { Hero } from '../../types/athanor';

export const VEDA_HEROES: Hero[] = [
  {
    id: 'ilumia',
    name: 'Ilumia',
    title: 'Nữ Thần Ánh Sáng',
    factionId: 'veda',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7ae8bcd437d0787c9f3bb9aa54907ede5ef5e858aff141.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/36f894796b86becd37dd6a8ad804a7bd5ef5ba26128291.jpg',
    quote: 'Ánh sáng soi rọi mọi ngóc ngách trần gian, và không kẻ nào thoát khỏi tầm mắt của ta!',
    stats: { damage: 8, toughness: 4, mobility: 3, crowdControl: 9, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Thần Lực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/765b060be45199ee3a2d5ae0c246bfc35902c5608447d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Sau mỗi 2 lần tung chiêu, chiêu 1 lập tức hồi lại và được cường hóa: tăng gấp đôi sát thương, kích thước và hất tung kẻ địch.',
        comboTip: 'Chủ động dùng chiêu 1 và 2 trước vào không khí để tích sẵn quả cầu cường hóa trước giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Quả Cầu Ánh Sáng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6a0be6816a1d3ca9887f6fb738e724a55902c5c6394b61.png',
        cooldown: '3.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Bắn ra quả cầu năng lượng phát nổ khi chạm kẻ địch đầu tiên hoặc bay hết tầm, gây sát thương phép trong phạm vi nhỏ.',
        comboTip: 'Thời gian hồi siêu ngắn, dùng liên tục để kiểm soát đường và kích hoạt nội tại.'
      },
      {
        slot: 'skill2',
        name: 'Trục Xuất',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/243331147c585656dac4f406a98faa375902c5be154631.png',
        cooldown: '9.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Giải phóng luồng ánh sáng thần thánh đẩy lùi tất cả kẻ địch áp sát xung quanh, gây sát thương phép và làm chậm 30% tốc chạy.',
        comboTip: 'Vũ khí tự vệ tuyệt vời trước các sát thủ lao vào, sau đó lập tức kích hoạt chiêu 1 cường hóa hất tung tiếp.'
      },
      {
        slot: 'ultimate',
        name: 'Thần Trận Toàn Cảnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6c19a40b93ffb1153f05d84fae59665d5902c6513069e1.png',
        cooldown: '60.0s',
        energyCost: '130',
        damageType: 'Phép',
        description: 'Triệu hồi thiên lôi giáng xuống chân TẤT CẢ các tướng địch trên toàn bản đồ, gây sát thương phép, làm choáng 1 giây và soi sáng tầm nhìn.',
        comboTip: 'Quan sát bản đồ nhỏ, bật chiêu cuối khi đối phương đang giao tranh lớn hoặc tụ tập ăn Tà Thần/Rồng.'
      }
    ],
    lore: `Đứng đầu Giáo Đình Trung Ương, nắm giữ quyền lực tối cao tuyệt đối tại Tháp Quang Minh trên đỉnh Orsen. Từng là một trong những đệ tử xuất sắc của Đấng Sáng Tạo Edras, sau khi sư phụ bị phản đồ Volkath sát hại, Ilumia đã kế thừa ngôi vị tối cao. Nàng là nhà lãnh đạo kiệt xuất, tài ba và đa mưu túc trí, áp dụng các chính sách cứng rắn xen lẫn lôi kéo khéo léo để bảo vệ vương quốc và duy trì tín ngưỡng ánh sáng trên toàn Athanor.`,
    battleTips: [
      'Chiêu cuối có phạm vi toàn bản đồ, hãy liên tục quan sát giao tranh ở các đường khác để hỗ trợ kịp thời.',
      'Combo tự bảo vệ: Chiêu 2 đẩy lùi sát thủ -> Chiêu 1 cường hóa hất tung -> Tốc Biến rút lui.',
      'Lên trang bị tối đa 40% giảm hồi chiêu để xả chiêu 1 liên tục không ngừng nghỉ.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Mặt Nạ Berith', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['tulen', 'volkath', 'telannas', 'arthur', 'marja', 'lauriel', 'bright']
  },

  {
    id: 'lauriel',
    name: 'Lauriel',
    title: 'Đại Thiên Thần',
    factionId: 'veda',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/18d4327ac2e366a736a060be082bbbef5943917dab8d81.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ef13b29ffd78bd266a4a076030458fa35d6f9976e118d1.jpg',
    quote: 'Đôi cánh thiên giới của ta bay đến đâu, công lý và lòng từ bi sẽ hiện hữu nơi đó!',
    stats: { damage: 8, toughness: 6, mobility: 8, crowdControl: 6, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Trời Phạt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8000fd109a7c64195f94717fe00280bd594391f57e04d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Mỗi chiêu thức trúng đích khắc 1 dấu ấn Trời Phạt. Đủ 4 dấu ấn sẽ kích nổ gây sát thương chuẩn diện rộng, hồi máu cho Lauriel và làm chậm 90% tốc chạy.',
        comboTip: 'Liên tục múa chiêu 1 và 2 trong vòng chiêu cuối để nổ nội tại sát thương chuẩn liên hoàn.'
      },
      {
        slot: 'skill1',
        name: 'Con Đường Sám Hối',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5a5681226ba05df824b239c29ee93f5e59439268b9e6b1.png',
        cooldown: '5.0s',
        energyCost: '65',
        damageType: 'Phép',
        description: 'Vạch ra một vệt sáng thiên giới gây sát thương phép. Sau khoảnh khắc vệt sáng phát nổ gây thêm một lượng sát thương phép tương đương.',
        comboTip: 'Vạch chiêu 1 đón đầu đường di chuyển của đối phương để trúng cả 2 lần sát thương.'
      },
      {
        slot: 'skill2',
        name: 'Đôi Cánh Thuần Khiết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/70aad1b7fcb85c6d3428a3c2aa57995f594392c3de4a41.png',
        cooldown: '10.0s (giảm 4s khi trúng địch)',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Lướt nhanh về hướng chỉ định và phóng ra 3 quả cầu ánh sáng. Trong khoảnh khắc lướt, Lauriel hoàn toàn miễn nhiễm mọi sát thương và khống chế.',
        comboTip: 'Khoảnh khắc lướt chiêu 2 có thể outplay hoàn toàn các kỹ năng khống chế và dồn dame của đối thủ.'
      },
      {
        slot: 'ultimate',
        name: 'Phán Xét',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/dc1bda89897f235ad1c8e97cae0313c15943931818e341.png',
        cooldown: '40.0s',
        energyCost: '140',
        damageType: 'Phép',
        description: 'Tạo ra một pháp trận thần thánh khổng lồ trên mặt đất. Khi đứng trong pháp trận này, thời gian hồi chiêu của chiêu 1 và chiêu 2 được giảm cực mạnh gần như hồi tức thì.',
        comboTip: 'Mở chiêu cuối ở địa hình hẹp để ép đối phương phải giao tranh trong pháp trận thần thánh.'
      }
    ],
    lore: `Đứng đầu Điện Phúc Âm, nơi truyền bá tín ngưỡng của Tháp Quang Minh. Mang trên mình đôi cánh thiên thần sáu cánh thuần khiết, Lauriel là hiện thân của lòng nhân từ và công lý, cai quản luân hồi và đại diện của thần linh trên chiến trường. Chính nàng là người đã dùng suối nguồn ánh sáng thanh tẩy giúp Arthur lấy lại lý trí khỏi lời nguyền xác khô Mortos.`,
    battleTips: [
      'Cần đạt tối đa 40% giảm hồi chiêu từ trang bị để múa chiêu 2 liên tục trong vòng chiêu cuối.',
      'Tập canh thời điểm lướt chiêu 2 để né sát thương chết chóc của kẻ thù.',
      'Lauriel rất mạnh khi giao tranh kéo dài với các đội hình nhiều đấu sĩ và đỡ đòn.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Mặt Nạ Berith', 'Khiên Huyền Thoại', 'Băng Nhẫn Skadi', 'Huân Chương Troy', 'Quyền Trượng Rhea'],
    relatedHeroIds: ['ilumia', 'tulen', 'arthur', 'helen', 'veera']
  },

  {
    id: 'tulen',
    name: 'Tulen',
    title: 'Hoàng Tử Lôi Quang',
    factionId: 'veda',
    role: 'Pháp Sư',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/07210c9e529faa7766ba324bd86b75165a81722f3eab81.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Tulen.jpg',
    quote: 'Sấm sét là ý chí của trời cao, và ta chính là kẻ thực thi bản án tử hình!',
    stats: { damage: 9, toughness: 4, mobility: 8, crowdControl: 4, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Lôi Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7b6a93e7160787f81dbe61e655fede055a87199177d9d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Khi chiêu thức trúng đích tích dấu ấn Lôi Sấm. Đủ 5 điểm kích hoạt 5 luồng sét tự động phóng vào các mục tiêu xung quanh gây sát thương phép liên tục.',
        comboTip: 'Tích 4 tầng nội tại trước khi lướt chiêu 2 vào đối thủ để lập tức kích hoạt 5 luồng sét sấy khô mục tiêu.'
      },
      {
        slot: 'skill1',
        name: 'Lôi Quang',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ae4c5c04d956e3f6c145771117fa394a5a8719f55580c1.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Bắn ra 3 tia sét theo hình nón. Nếu trúng cả 3 tia vào cùng một mục tiêu, sát thương tăng thêm và tích ngay 3 điểm nội tại.',
        comboTip: 'Áp sát ở cự ly gần để cả 3 luồng sét cùng găm vào một mục tiêu giúp tối đa hóa sát thương.'
      },
      {
        slot: 'skill2',
        name: 'Lôi Động',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/594056758e2e5be272abe3fd4f8c4dec5a871ac48bb3d1.png',
        cooldown: '2.0s (Tích 3 lần)',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Biến thành tia chớp lướt tới điểm chỉ định, gây sát thương phép tại cả điểm xuất phát và điểm đến, làm chậm 90% nếu trúng 2 lần liên tiếp.',
        comboTip: 'Chiêu thức cơ động đa dụng: dùng né chiêu, vượt địa hình, làm chậm và tích điểm Lôi Thần nhanh.'
      },
      {
        slot: 'ultimate',
        name: 'Lôi Điểu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/eed8944ca08fc1101b58873a37d164de5a871b26923b31.png',
        cooldown: '35.0s',
        energyCost: '120',
        damageType: 'Phép',
        description: 'Khóa mục tiêu rồi phóng ra chú chim sấm sét khổng lồ gây sát thương phép cộng thêm theo phần trăm máu đã mất. Hạ gục đối thủ hồi 80% hồi chiêu cuối và kích hoạt nội tại ngay.',
        comboTip: 'Chiêu thức kết liễu tối thượng. Luôn nhắm vào các tướng ít máu để kích hoạt chuỗi hạ gục liên hoàn.'
      }
    ],
    lore: `Đứng đầu Điện Công Lý, phụ trách phán quyết tại Tháp Quang Minh. Sinh ra với năng khiếu sấm sét bẩm sinh, dù từng bị người thầy Aleister ghen tị bỏ mặc, Tulen vẫn tự mình tu luyện thuần thục, kế thừa ngôi đền sấm sét và trở thành người đứng đầu Tiểu Đội Ánh Sáng lùng diệt kẻ phản đồ Aleister.`,
    battleTips: [
      'Tulen là mẫu pháp sư sát thủ cự ly tầm trung, cần di chuyển lắt léo để xả nội tại liên tục.',
      'Sử dụng Lôi Điểu khi kẻ địch còn dưới 30% máu để chắc chắn có điểm hạ gục.',
      'Tận dụng lính hoặc quái rừng để tích tầng nội tại trước khi đảo đường gank.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Quyền Trượng Rhea', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['ilumia', 'lauriel', 'aleister', 'bright', 'laville']
  },

  {
    id: 'bright',
    name: 'Bright',
    title: 'Truyền Nhân Ánh Sáng',
    factionId: 'veda',
    role: 'Xạ Thủ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0045a9d59dc140647f4fa67b446c732c5fc55919650441.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a7628c4829025419770e545fe49e6ed95fc55aa8f2cf21.jpg',
    quote: 'Ý chí của thầy Edras dẫn đường, thanh gươm ánh sáng sẽ chấm dứt màn đêm bất tận!',
    stats: { damage: 10, toughness: 5, mobility: 8, crowdControl: 4, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Thần Quyền',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9e3e9dcf54acc81b592d7801188f42225fc559f6533ac1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Chuyển đổi giữa cận chiến (dùng kiếm) và tầm xa (bắn tiễn). Bắn xa tích lũy dấu ấn Thần Quyền; cận chiến giải phóng dấu ấn gây sát thương chuẩn.',
        comboTip: 'Bắn xa tích đủ 5 điểm nội tại rồi áp sát chém cận chiến để nổ sát thương chuẩn bùng nổ.'
      },
      {
        slot: 'skill1',
        name: 'Quang Kích Bất Tận',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0b5a465715fb899c2203f7dbe1cac5625fc55a1fd83d61.png',
        cooldown: '7.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Bắn ra luồng giáo ánh sáng chữ thập làm chậm và đánh dấu. Đòn đánh kế tiếp lướt tới mục tiêu bị đánh dấu.',
        comboTip: 'Tung chiêu 1 trúng đích để tiếp cận mục tiêu từ khoảng cách rất xa.'
      },
      {
        slot: 'skill2',
        name: 'Thần Quang Đột Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9df13e9549bc147cbb366b151b42da3c5fc55a3f5c6fd1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Lướt tới chém mục tiêu, hồi phục máu cho bản thân và nhận 50% tốc độ đánh trong 3 giây.',
        comboTip: 'Dùng để tái tạo đòn đánh thường và hồi máu khẩn cấp khi đang cận chiến tay đôi.'
      },
      {
        slot: 'ultimate',
        name: 'Bất Tử Quang Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fd97222b24eca727ce3461cbb388f55e5fc55a57a25201.png',
        cooldown: '50.0s',
        energyCost: '120',
        damageType: 'Chuẩn',
        description: 'Trì hoãn mọi sát thương nhận vào trong 3 giây. Nếu hạ gục kẻ gây sát thương trong thời gian này, Bright xóa bỏ hoàn toàn sát thương bị trì hoãn đó.',
        comboTip: 'Bật chiêu cuối khi gần chết rồi dồn toàn bộ sát thương tiêu diệt chủ lực đối phương để sống sót.'
      }
    ],
    lore: `Cậu bé lương thiện sinh ra tại Okka, nhờ lòng nhân từ sẻ chia mẩu bánh mì nên được linh hồn Đấng Sáng Tạo Edras chọn làm học trò cuối cùng. Đồng hành cùng Edras chu du khắp Athanor chứng kiến bi kịch của muôn loài, Bright mang sức mạnh bất tử thần thánh để hoàn thành thiên mệnh đánh bại Volkath.`,
    battleTips: [
      'Chuyển đổi linh hoạt giữa xạ thủ tầm xa và đấu sĩ chém cận chiến sát thương chuẩn.',
      'Sử dụng chiêu cuối chuẩn nhịp khi lượng máu thấp để kích hoạt trạng thái bất tử 3 giây lật kèo.',
      'Chiêu 1 có tầm bắn cực xa giúp kiểm tra bụi cỏ và định vị đối thủ.'
    ],
    recommendedItems: ['Cung Bão Tố', 'Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Nanh Fenrir'],
    relatedHeroIds: ['ilumia', 'volkath', 'tulen', 'edras']
  },

  {
    id: 'yorn',
    name: 'Yorn',
    title: 'Mũi Tên Mặt Trời',
    factionId: 'veda',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/44086d0bc26a170b21038a7cbf9413365c4938b95b2f91.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/212b5120d63099d26da82b8ff1ed11875c49389ad616a1.jpg',
    quote: 'Mặt trời sẽ không bao giờ lặn chừng nào mũi tên của ta còn rực cháy!',
    stats: { damage: 10, toughness: 2, mobility: 4, crowdControl: 4, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Vô Tận Tiễn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/aa96e30c88b285f5516964dafa2b7332583f9719003581.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Sau mỗi chiêu thức hoặc đòn đánh thứ 5, đòn đánh kế tiếp bắn ra chuỗi 7 mũi tên liên hoàn gây sát thương vật lý theo phần trăm máu tối đa.',
        comboTip: 'Xen kẽ từng chiêu thức với đòn đánh thường để liên tục xả chuỗi bắn tỉa Vô Tận Tiễn sấy khô kẻ địch.'
      },
      {
        slot: 'skill1',
        name: 'Tên Nổ Ánh Sáng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/453285b62a7c798941bdd9d641b5de92583f977907f001.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Bắn mũi tên nổ gây sát thương vật lý và trói chân kẻ địch trong vùng tâm vụ nổ 0.75 giây.',
        comboTip: 'Kỹ năng khống chế giữ chân kẻ địch trước khi xả đòn bắn liên hoàn nội tại.'
      },
      {
        slot: 'skill2',
        name: 'Mưa Tên Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e890c128ee2533190bfdb6a4f7f2de37583f9799b1c8f1.png',
        cooldown: '12.0s',
        energyCost: '70',
        damageType: 'Vật lý',
        description: 'Triệu hồi vầng hào quang di chuyển trên không, liên tục thả mưa tên ánh sáng ngẫu nhiên xuống kẻ địch bên dưới.',
        comboTip: 'Bật chiêu 2 từ trước để kích hoạt nội tại bắn liên hoàn mà không cần trúng địch.'
      },
      {
        slot: 'ultimate',
        name: 'Tên Thần Toàn Bản Đồ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6d9603dd33ea12aaecc52ad81a480907583f97b0364911.png',
        cooldown: '18.0s',
        energyCost: '90',
        damageType: 'Vật lý',
        description: 'Bắn ra mũi tên mặt trời bay xuyên suốt toàn bộ bản đồ, gây lượng sát thương vật lý cực lớn cộng thêm phần trăm máu đã mất của mục tiêu trúng đòn đầu tiên.',
        comboTip: 'Quan sát bản đồ nhỏ để cướp mục tiêu lớn (Rồng/Caesar) hoặc kết liễu kẻ địch ít máu từ cự ly siêu xa.'
      }
    ],
    lore: `Sống tại Điện Mây Phủ thuộc tầng lớp Thánh Đồ dưới quyền cai quản của Ilumia. Yorn là chiến binh rực rỡ, xạ thủ tuyệt mỹ bậc nhất của Tháp Quang Minh, sở hữu Cung Tên Mặt Trời luôn cống hiến hết mình để tiêu diệt bóng tối và thanh tẩy mọi tà niệm trên Athanor.`,
    battleTips: [
      'Yorn có lượng sát thương cuối trận khủng khiếp nhất nhưng rất kém cơ động, luôn cần bảo kê.',
      'Thứ tự xả dame: Chiêu 1 -> Bắn nội tại -> Chiêu 2 -> Bắn nội tại -> Chiêu cuối -> Bắn nội tại.',
      'Chiêu cuối bắn xuyên bản đồ có thể dùng để check bụi cỏ và cấu máu từ xa.'
    ],
    recommendedItems: ['Thánh Kiếm', 'Giày Du Mục', 'Song Đao Bão Táp', 'Diệt Thần Cung', 'Cung Tà Ma', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['ilumia', 'lauriel', 'tulen', 'laville']
  },

  {
    id: 'xeniel',
    name: 'Xeniel',
    title: 'Sứ Giả Thần Thánh',
    factionId: 'veda',
    role: 'Đỡ Đòn',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a56369ce162e24700689527a54d89b755a179e8628f391.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/81f4a6d7c3f6bce399233e13f984bfe45a17a07e712b11.jpg',
    quote: 'Lời thề bảo hộ thiêng liêng sẽ vượt qua mọi khoảng cách trần thế!',
    stats: { damage: 5, toughness: 10, mobility: 6, crowdControl: 7, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Sách Thánh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/46e8c4740009ca31ce2e7954bb9cd16b5a179f1d105061.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Đòn đánh thường thứ ba gây thêm sát thương phép dựa trên 4-8% lượng máu tối đa của Xeniel.',
        comboTip: 'Càng lên nhiều máu, đòn đánh thứ 3 của Xeniel gây sát thương phép càng thấm thía.'
      },
      {
        slot: 'skill1',
        name: 'Thần Hộ Thể',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0d10686f7bc4c3560a0ddf5e9292d48d5a179f6e7ca8c1.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tạo lá chắn bảo hộ tương đương 15% máu tối đa. Sau 2.5 giây có thể tái kích hoạt để làm nổ khiên gây sát thương phép diện rộng.',
        comboTip: 'Bật khiên trước khi lao vào giao tranh, căn nổ khiên trúng nhiều tướng địch nhất.'
      },
      {
        slot: 'skill2',
        name: 'Chùy Thần Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d70060e371bfafc5cbe782809c5f0e415a17a02bebd9c1.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Nhảy vồ tới điểm chỉ định, gây sát thương phép và làm choáng 1.25 giây tất cả nạn nhân trong vùng ảnh hưởng.',
        comboTip: 'Chiêu thức vượt địa hình tiếp cận và mở giao tranh khống chế cứng cực kỳ hữu dụng.'
      },
      {
        slot: 'ultimate',
        name: 'Sứ Mệnh Cứu Thế',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2d430e7572c6a3d6f5aba143ce46f42b5a17a06fbde3c1.png',
        cooldown: '60.0s',
        energyCost: '130',
        damageType: 'Hỗ trợ',
        description: 'Chọn một đồng minh trên toàn bản đồ. Xeniel bay lên không trung ban giảm 40% sát thương cho mục tiêu đó. Sau 2.2 giây Xeniel đáp xuống hồi 15% máu cho đồng minh và hất tung kẻ địch.',
        comboTip: 'Cứu cánh thần thánh cho xạ thủ hoặc sát thủ đi gank lẻ, giúp lật ngược hoàn toàn pha bắt bớ.'
      }
    ],
    lore: `Tín đồ kiên trung tuyệt đối của Tháp Quang Minh sống tại Điện Mây Phủ. Trong cuộc mưu sát của Zephys và Nakroth nhằm vào Nữ thần Ilumia, Xeniel đã lấy thân mình đỡ đòn chí mạng bảo vệ Ilumia và được nàng trao tặng cho đôi cánh thiên thần ánh sáng quyền năng.`,
    battleTips: [
      'Liên tục quan sát thanh máu của đồng minh để kích hoạt chiêu cuối bay đến cứu giá xuyên bản đồ.',
      'Chiêu 1 vừa là công cụ chặn sát thương vừa là nguồn dame chính khi nổ khiên.',
      'Xeniel đi đường Tà Thần có thể đẩy lẻ liên tục vì có thể nhập vào giao tranh bất kỳ lúc nào.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Thất Truyền', 'Phù Chú Trường Sinh'],
    relatedHeroIds: ['ilumia', 'lauriel', 'tulen', 'zephys']
  },

  {
    id: 'ignis',
    name: 'Ignis',
    title: 'Sứ Giả Lôi Hỏa',
    factionId: 'veda',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a2c0e8ef7742c926f9bb10fbab12b03d5970da7009dc11.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/93ef18ffc1f43ef4966ef996bbf1aca65970de686b8c71.jpg',
    quote: 'Ngọn Lửa Thiêng sẽ thiêu rụi mọi tà niệm và khai mở chân lý trí tuệ!',
    stats: { damage: 8, toughness: 4, mobility: 6, crowdControl: 8, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Hỏa Ngôn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f779d04ee7bf9941cdb7b844ceccc3825970dd41a513d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Chiêu thức trúng đích đánh dấu Hỏa Ngôn trong 3 giây. Tung chiêu kế tiếp vào mục tiêu bị đánh dấu sẽ kích hoạt hiệu ứng cường hóa và hồi máu cho Ignis.',
        comboTip: 'Luôn đánh dấu Hỏa Ngôn trước để chiêu thức kế tiếp nhận hiệu ứng choáng, lá chắn hoặc sát thương chuẩn.'
      },
      {
        slot: 'skill1',
        name: 'Hỏa Cầu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0077baf3281acf1f5f7f4c6e9ac222e45970dd8d3234b1.png',
        cooldown: '3.0s',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Bắn ra cầu lửa phát nổ lan rộng ra phía sau khi chạm mục tiêu, tăng 40% tốc chạy và nhận lá chắn nếu mục tiêu có dấu Hỏa Ngôn.',
        comboTip: 'Chiêu thức cấu rỉa liên tục, tận dụng bắn trúng lính để nổ lan ra tướng địch đứng phía sau.'
      },
      {
        slot: 'skill2',
        name: 'Hỏa Hoạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/775babab1959d630492799db3fdda1e95970ddc9c80971.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Triệu hồi mưa lửa thiêu đốt khu vực chỉ định trong 3 giây. Nếu mục tiêu dính Hỏa Ngôn sẽ bị LÀM CHOÁNG 0.75 giây.',
        comboTip: 'Khống chế diện rộng cực mạnh để giữ chân cả đội hình đối phương trong giao tranh.'
      },
      {
        slot: 'ultimate',
        name: 'Hỏa Trận Thiêng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/df40e86b54272541af06fa2918b66b105970de097e1101.png',
        cooldown: '24.0s',
        energyCost: '100',
        damageType: 'Chuẩn',
        description: 'Tạo một pháp trận lửa thần khổng lồ phát nổ sau 1 giây gây sát thương phép cực lớn. Nếu kẻ địch có dấu Hỏa Ngôn sẽ phải chịu SÁT THƯƠNG CHUẨN.',
        comboTip: 'Kích nổ sát thương chuẩn xóa sổ toàn bộ tuyến chống chịu của kẻ địch nếu chúng đã bị dính dấu Hỏa Ngôn.'
      }
    ],
    lore: `Đứng đầu Điện Trí Tuệ tại Tháp Quang Minh. Là học giả uyên thâm dành cả đời nghiên cứu Ngọn Lửa Thiêng và các văn tự cổ. Trong đợt tấn công của binh đoàn bóng tối, Ignis đã kiên cường bảo vệ thư viện cổ tự và đánh thức được nguồn sức mạnh thần hỏa tối thượng.`,
    battleTips: [
      'Ignis phụ thuộc vào việc xả chiêu 1 liên tục để giữ dấu ấn Hỏa Ngôn và kích hoạt tốc chạy.',
      'Chiêu 2 kết hợp nội tại làm choáng diện rộng ngắt nhịp lao vào của đấu sĩ đối phương.',
      'Chiêu cuối gây sát thương chuẩn khi mục tiêu có dấu ấn, hãy combo chiêu 1 trước rồi mới tung chiêu cuối.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Mặt Nạ Berith', 'Trượng Băng', 'Băng Nhẫn Skadi', 'Trượng Bùng Nổ', 'Vương Miện Hecate'],
    relatedHeroIds: ['ilumia', 'tulen', 'gildur', 'jinna']
  },

  {
    id: 'gildur',
    name: 'Gildur',
    title: 'Vua Hoàng Kim',
    factionId: 'veda',
    role: 'Pháp Sư',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/10800_B40-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/gildur.jpg',
    quote: 'Vàng ròng có thể mua được tất cả, kể cả linh hồn và quyền lực của chư thần!',
    stats: { damage: 8, toughness: 7, mobility: 5, crowdControl: 10, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Bàn Tay Vàng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/58e624c3704c9cff80e399995587b1d1583f97d8ef93d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Đòn đánh thường thứ 4 hoặc sau khi dùng chiêu sẽ tạo lá chắn bảo hộ và đẩy lùi kẻ địch gây sát thương phép.',
        comboTip: 'Đánh thường tích tầng để chuẩn bị đòn đẩy lùi và lá chắn dày trước khi tiếp cận đối thủ.'
      },
      {
        slot: 'skill1',
        name: 'Quả Đấm Vàng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bb5662cdb8612ab9b8029eee61506203583f98349b55e1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Lướt nhanh về phía trước và tung quả đấm bằng vàng gây sát thương phép lên kẻ địch trên đường lướt.',
        comboTip: 'Dùng để lướt né chiêu, tiếp cận và kích hoạt ngay đòn đánh nội tại đẩy lùi.'
      },
      {
        slot: 'skill2',
        name: 'Vụ Nổ Vàng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8e5f6b01c181da843564f0545e82044c583f9852c50851.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Phóng ra một khối vàng ròng tầm xa phát nổ gây sát thương phép cực lớn và LÀM CHOÁNG kẻ địch 1.25 giây.',
        comboTip: 'Chiêu thức cấu rỉa và làm choáng tầm siêu xa trứ danh, mở đầu hoàn hảo cho mọi pha giao tranh.'
      },
      {
        slot: 'ultimate',
        name: 'Vương Quốc Vàng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0d8dfbda1278f5b546c4927dafb9e914583f986eafba51.png',
        cooldown: '35.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Gildur tạo một kết giới vàng ròng bao quanh bản thân, liên tục làm choáng và gây sát thương phép lên tất cả kẻ địch xung quanh suốt 3.5 giây.',
        comboTip: 'Lướt chiêu 1 + Tốc Biến vào giữa đội hình đối phương rồi dựng chiêu cuối để khóa chặt toàn bộ kẻ địch.'
      }
    ],
    lore: `Đứng đầu Điện Tài Phá tại Tháp Quang Minh, kiểm soát toàn bộ huyết mạch tài chính và mậu dịch của Athanor. Từng là đại quý tộc giàu có cảm thấy trống rỗng nên gia nhập Veda vì khát khao quyền lực tối cao. Chính sự tham lam bủn xỉn của Gildur đã quỵt công thưởng, tống giam Taara và tăng sưu thuế lên Dãy Núi Thép Okka, gián tiếp đẩy Taara sa đọa vào Vực Hỗn Mang.`,
    battleTips: [
      'Gildur có thể chơi theo phong cách pháp sư cấu rỉa sốc dame hoặc đỡ đòn mở giao tranh.',
      'Chiêu 2 là kỹ năng cấu rỉa làm choáng tầm cực xa, hãy luyện tập khả năng ngắm bắn chuẩn xác.',
      'Chiêu cuối có thể bị ngắt bởi khống chế cứng, hãy canh thời điểm đối phương đã dùng hết chiêu khống chế.'
    ],
    recommendedItems: ['Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Sách Truy Hồn', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['taara', 'ilumia', 'tulen', 'ignis']
  },

  {
    id: 'jinna',
    name: 'Jinna',
    title: 'Đại Thiền Sư',
    factionId: 'veda',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f3b0dc924b34f76c9265adb57758817a5b752794c417a1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a14ad9098b8b55a4f61df1c72c2ad2345b3458cc777cb1.jpg',
    quote: 'Thiền định tĩnh lặng như nước, nhưng giáng ma thì sấm sét vạn cân!',
    stats: { damage: 8, toughness: 7, mobility: 7, crowdControl: 5, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Ấn Chú',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/59b4b77ff8cffcd9edabb803ab39d35958ae5e4dbf5091.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Sau 4 lần tung chiêu hoặc đánh thường, đòn đánh kế tiếp bắn ra luồng năng lượng kình khí xuyên thấu gây sát thương phép cực lớn.',
        comboTip: 'Tích trước đòn bắn nội tại kình khí trước khi bật chiêu cuối lao vào giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Loạn Đả Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1140d9a1b24578afc5be77d3feeb0a2158ae5d91e6d131.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Phóng ra chuỗi hạt luân hồi nảy liên tục giữa tối đa 4 mục tiêu gây sát thương phép.',
        comboTip: 'Dọn lính nhanh và cấu máu đối phương an toàn khi chúng đứng gần lính.'
      },
      {
        slot: 'skill2',
        name: 'Hàng Ma Trận',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6f85326cbc1970a29fb46a21ec6b56cf58ae5c9b4755d1.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Nện luồng kình khí xuống đất gây sát thương phép diện rộng và LÀM CHẬM 50% tốc chạy của tất cả nạn nhân.',
        comboTip: 'Dùng ngay sau khi áp sát đối phương để giữ chân chúng trong phạm vi bão hạt của chiêu cuối.'
      },
      {
        slot: 'ultimate',
        name: 'Khiêu Vũ Của Hạt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/81b66a014676c487418fec2d8efa9ae258ae5acfa10001.png',
        cooldown: '35.0s',
        energyCost: '120',
        damageType: 'Phép',
        description: 'Kích hoạt chuỗi hạt luân hồi xoay quanh cực nhanh, tăng 80% tốc chạy và nhận tối đa 60% miễn giảm sát thương, liên tục giáng sát thương phép trong 5 giây.',
        comboTip: 'Bật chiêu cuối + Tốc Hành lao thẳng vào trung tâm đội hình đối phương càn quét như một cỗ xe tăng phép.'
      }
    ],
    lore: `Thuộc tầng lớp Thánh Đồ sống tại Điện Mây Phủ. Người mang trọng trách bảo vệ chuỗi hạt luân hồi phong ấn ma lực cổ xưa khỏi sự thèm khát của Maloch. Nhờ sự hướng dẫn của Lauriel, Jinna tu luyện thành công Bí Pháp Thiền Tông của Tháp Quang Minh, kết hợp sự tĩnh lặng nội tâm với sức mạnh hàng ma phục yêu.`,
    battleTips: [
      'Jinna cực kỳ trâu bò trong lúc bật chiêu cuối nhờ lượng miễn thương khổng lồ theo số tướng địch xung quanh.',
      'Cầm bổ trợ Tốc Hành để càn lướt áp sát xạ thủ và pháp sư đối phương.',
      'Chiêu 2 làm chậm diện rộng giúp giữ chặt kẻ địch để chuỗi hạt chiêu cuối xả trọn vẹn sát thương.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Trượng Bùng Nổ', 'Mặt Nạ Berith', 'Vương Miện Hecate', 'Băng Nhẫn Skadi', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['lauriel', 'ilumia', 'maloch', 'xeniel']
  },

  {
    id: 'enzo',
    name: 'Enzo',
    title: 'Kẻ Hành Quyết',
    factionId: 'veda',
    role: 'Sát Thủ',
    secondaryRole: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/81d7c827262287ce87639f3bfa048f5a5d149a6d571091.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/829bb771c29c1cc0bd2019cab9e101ec5d149a837935f1.jpg',
    quote: 'Hành quyết không chỉ là trừng phạt, đó là một tác phẩm nghệ thuật thuần khiết!',
    stats: { damage: 9, toughness: 4, mobility: 8, crowdControl: 9, difficulty: 10 },
    skills: [
      {
        slot: 'passive',
        name: 'Tín Ngưỡng Khát Máu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ba313101bb31ca0084902289baaea1d35d149b499c6881.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tấn công kẻ địch ở rìa tầm đánh gây thêm 35% sát thương và tăng tốc chạy. Hạ hoặc phụ mục tiêu kích hoạt trạng thái hưng phấn nhận 75% tốc chạy và 70% tốc đánh.',
        comboTip: 'Căn khoảng cách tấn công ở cự ly xa nhất của sợi xích để tối đa hóa lượng sát thương chí mạng.'
      },
      {
        slot: 'skill1',
        name: 'Truy Bức',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2ee397d65db4af16fc8425adc1fcc6eb5d149b67984ad1.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt nhanh theo hướng chỉ định, tăng công vật lý. Nếu đang trói mục tiêu bằng chiêu 2, lướt sẽ kéo nạn nhân về phía mình một đoạn.',
        comboTip: 'Dùng kết hợp với chiêu 2 để kéo giật đối thủ ra khỏi vùng an toàn hoặc kéo vào tầm bắn của trụ.'
      },
      {
        slot: 'skill2',
        name: 'Câu Hồn Sách',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/aa9f621027746a40fb28b2bade64b3b35d149ba19964e1.png',
        cooldown: '9.0s',
        energyCost: '70',
        damageType: 'Vật lý',
        description: 'Tụ lực rồi quăng lưỡi câu móc khóa mục tiêu. Tái kích hoạt: hất văng mục tiêu ra sau lưng Enzo. Kẻ địch bị móc giảm 25% sát thương gây lên Enzo.',
        comboTip: 'Kỹ năng cốt lõi: Móc trúng -> Chiêu 1 lướt kéo -> Tái kích hoạt chiêu 2 quăng ngược ra sau lưng cho đồng đội đập.'
      },
      {
        slot: 'ultimate',
        name: 'Hành Quyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d1888bf81be1273552f4cac4a5295a225d149bd225f791.png',
        cooldown: '2.5s (dùng khi móc trúng)',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Enzo lướt xuyên qua người nạn nhân bị móc trúng, gây lượng sát thương vật lý cực lớn và giảm 50% sát thương nhận vào trong lúc lướt.',
        comboTip: 'Thời gian hồi chiêu siêu ngắn, có thể lướt qua lướt lại nhiều lần quanh mục tiêu để né chiêu và dồn dame.'
      }
    ],
    lore: `Trưởng hình ty chấp pháp tại Điện Mây Phủ thuộc Tháp Quang Minh. Enzo mang tâm lý thẩm mỹ hóa sự tra tấn và coi hành quyết kẻ ác là một hình thức nghệ thuật thanh tẩy. Dù có phần tàn nhẫn, Tháp Quang Minh vẫn bao dung và trao cho hắn sứ mệnh thực thi bản án trừng trị tà linh.`,
    battleTips: [
      'Đòi hỏi kỹ năng định hướng móc chiêu 2 chuẩn xác để mở toàn bộ bộ combo.',
      'Sau khi có điểm hạ gục đầu tiên, nội tại tăng tốc đánh và tốc chạy biến Enzo thành quái vật càn quét.',
      'Căn cự ly đánh ở rìa câu liêm để gây sát thương tối đa.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Du Mục', 'Thương Longinus', 'Phức Hợp Kiếm', 'Thánh Kiếm', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['ilumia', 'lauriel', 'yorn', 'bright']
  },

  {
    id: 'laville',
    name: 'Laville',
    title: 'Tay Súng Ánh Sáng',
    factionId: 'veda',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c30059d2dc46ed31b72a4b02aa9e61f75eb136829228d1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/04a252fe1bade19ca0afc2ce206f5beb5eb1369ea820a1.jpg',
    quote: 'Bắn súng phải vui vẻ và tự do, cứ để đạn lạc tìm đúng mục tiêu!',
    stats: { damage: 9, toughness: 3, mobility: 6, crowdControl: 6, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Đạn Liên Thanh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0b76661f92471b3ed091c8124b5e4fa75eb1371715d2d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi đòn đánh thường trúng đích tích 1 tầng nội tại tăng tốc đánh (tối đa 3 tầng). Ở tầng 3, mỗi phát bắn tách thành 3 tia đạn liên thanh.',
        comboTip: 'Duy trì bắn lính hoặc quái để luôn giữ trạng thái 3 tia đạn liên thanh trước khi giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Đạn Cường Hóa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/eeebbefa841f2c544b0eaf730b2501ba5eb1375cdbc991.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Cường hóa vũ khí, bắn lan ra thêm 2 mục tiêu lân cận. Kết hợp nội tại sẽ bắn ra chùm 9 viên đạn xé nát đội hình đối phương.',
        comboTip: 'Bật chiêu 1 khi đã tích đủ 3 tầng nội tại để xả lượng sát thương lan đa mục tiêu hủy diệt.'
      },
      {
        slot: 'skill2',
        name: 'Khiên Phản Đòn Tinh Linh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9e349ef6a32f686840b5e79de3dad52d5eb13791bab9d1.png',
        cooldown: '10.0s',
        energyCost: '70',
        damageType: 'Hỗ trợ',
        description: 'Tăng 80% tốc chạy và nhận lá chắn vô hiệu hóa 1 kỹ năng kế tiếp của kẻ địch. Chặn chiêu thành công giúp Laville bất tử 0.5s và đòn đánh kế tiếp chí mạng.',
        comboTip: 'Canh thời điểm kẻ địch tung khống chế cứng (như chiêu 2 Veera, Tulen hay Raz) để chặn đứng và ao nhây hoàn toàn.'
      },
      {
        slot: 'ultimate',
        name: 'Đạn Thần Quang Toàn Bản Đồ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/215bd4a1b6d3fb2d95d4eb49cac578485eb137d1a09a01.png',
        cooldown: '40.0s',
        energyCost: '110',
        damageType: 'Vật lý',
        description: 'Bắn ra phát đạn ánh sáng khổng lồ bay xuyên toàn bản đồ. Làm choáng kẻ địch trúng đòn từ 0.5 đến tối đa 3.5 giây tùy theo khoảng cách bay.',
        comboTip: 'Bắn chiêu cuối hỗ trợ đồng đội ở các đường khác hoặc mở màn giao tranh tổng từ xa với cú choáng 3.5 giây.'
      }
    ],
    lore: `Chàng trai xuất thân từ Mildar, tính tình lạc quan vui vẻ, gia nhập Tháp Quang Minh ban đầu vì... muốn có tiền lương trả nợ. Với tài bắn súng thiên bẩm, Laville được Tulen tin tưởng cử làm đội trưởng Tiểu Đội Ánh Sáng cùng Zata và Rouie thực thi các nhiệm vụ truy tìm đá Andura.`,
    battleTips: [
      'Chiêu 2 là tuyệt kỹ ao nhây tối thượng của Laville, hãy giữ chiêu để phản xạ chặn chiêu thức nguy hiểm.',
      'Chiêu cuối bắn trúng từ cự ly xa sẽ làm choáng tới 3.5 giây, tạo tiền đề hoàn hảo cho đồng đội ập vào.',
      'Trong giao tranh tổng, bật chiêu 1 và giữ vị trí bắn để các chùm đạn liên thanh nảy lan khắp đội hình địch.'
    ],
    recommendedItems: ['Thánh Kiếm', 'Giày Du Mục', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['tulen', 'zata', 'rouie', 'teeri']
  },

  {
    id: 'zata',
    name: 'Zata',
    title: 'Dạ Ưng Tộc',
    factionId: 'veda',
    role: 'Pháp Sư',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fcd5c439a7cc37896ab98d568b662bec5ec66637da75d1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/de6c9c3fd4c4a6faa9d49124d72d0a145ec66697a07151.jpg',
    quote: 'Đôi cánh bị tước đoạt sẽ tìm lại bầu trời bằng ngọn lửa phục hận!',
    stats: { damage: 10, toughness: 4, mobility: 9, crowdControl: 4, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Phong Sát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0a7662d6f8220512ee843b6973c673065ec666f3bebde1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Đòn đánh thường thứ 3 được cường hóa xuyên thấu. Khi các chiêu thức của Zata va chạm vào nhau sẽ phát nổ gây sát thương phép và giảm hồi chiêu cuối.',
        comboTip: 'Chủ động tung chiêu 1 và 2 đan xen để tạo vụ nổ nội tại gây lượng dame phép bùng nổ.'
      },
      {
        slot: 'skill1',
        name: 'Ưng Gió',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/096608fb0eea9765b25f2a24fd28d6de5ec66717f3e641.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Bắn ra một luồng gió hình chim ưng giảm tốc độ bay khi chạm địch, gây sát thương phép trên đường bay và phát nổ ở cuối hành trình.',
        comboTip: 'Tung chiêu 1 mở đầu combo để tạo đường bay cho chiêu 2 và chiêu cuối kích hoạt bay.'
      },
      {
        slot: 'skill2',
        name: 'Vòi Rồng Hồi Quy',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bea9e3951d2aa5341b03f986e74834855ec6673b349321.png',
        cooldown: '8.0s (Tích 2 lần)',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tạo một cơn lốc xoáy tại điểm chỉ định rồi thu ngược về vị trí Zata, gây sát thương phép và làm chậm 40% tốc chạy kẻ địch.',
        comboTip: 'Đặt chiêu 2 đón đầu đường di chuyển rồi lướt theo hướng cơn lốc quay về để kích hoạt xung nhịp bay.'
      },
      {
        slot: 'ultimate',
        name: 'Thiên Dực Cất Cánh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0b9a58128a61ec62acd7f2bf48552d215ec6677d416231.png',
        cooldown: '40.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Zata lướt về phía trước. Nếu lướt trúng kẻ địch hoặc va chạm chiêu thức sẽ tích 1 tầng xung nhịp (lướt tối đa 3-5 lần). Đủ tầng giúp Zata bay vút lên không trung bất tử và xả liên tiếp mưa lông vũ hủy diệt.',
        comboTip: 'Combo chuẩn: Chiêu 1 -> Chiêu 2 -> Lướt theo chiều gió 3 lần -> Cất cánh bay bất tử xả mưa tên tiêu diệt mục tiêu.'
      }
    ],
    lore: `Hậu duệ kiêu hãnh của Dạ Ưng Tộc - tộc người từng bị Tháp Quang Minh tước đoạt đôi cánh trong quá khứ. Mang tính cách lạnh lùng, kín tiếng, Zata gia nhập Tiểu Đội Ánh Sáng dưới trướng Tulen với niềm hy vọng hoàn thành các sứ mệnh truy tìm đá Andura để phá giải phong ấn đôi cánh cho tộc nhân.`,
    battleTips: [
      'Zata là pháp sư sát thủ gank đường và bắt lẻ chủ lực số 1 nhờ khả năng cất cánh bay bất tử.',
      'Hãy luyện tập thuần thục thao tác nhấp nhả phím di chuyển khi lướt chiêu cuối để không bị đứt đoạn nhịp bay.',
      'Khi đang bay trên không trung Zata hoàn toàn không thể bị chọn làm mục tiêu.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Quyền Trượng Rhea', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['laville', 'rouie', 'tulen', 'teeri']
  },

  {
    id: 'rouie',
    name: 'Rouie',
    title: 'Ánh Sáng Không Gian',
    factionId: 'veda',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7f7ce6b3593a8ea52de5fa3be55469f85eb1402d093b71.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4ca89a4045850a44beaff09d25aca0e55eb13f364f5f71.jpg',
    quote: 'Không gian mở ra cánh cửa hy vọng, kết nối đồng đội dù ở bất cứ nơi đâu!',
    stats: { damage: 4, toughness: 6, mobility: 8, crowdControl: 7, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Quang Minh Dẫn Lối',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/97b90c80fc7cee1bf4a1b0fe0b873da25eb13f66cfa5c1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Tăng tốc chạy cho bản thân và 1 đồng minh gần nhất. Luôn nhìn thấy vị trí của các đồng minh yếu máu trên bản đồ.',
        comboTip: 'Di chuyển cùng xạ thủ hoặc người đi rừng để tăng tốc đảo đường kiểm soát mục tiêu.'
      },
      {
        slot: 'skill1',
        name: 'Thần Cảnh Quang Minh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cde357f1b60d1283058a800b72eb81125eb13f93abd591.png',
        cooldown: '8.0s (2 dạng)',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Bắn ra luồng sáng gây câm lặng, sau đó chuyển hóa thành luồng kình khí đẩy lùi và làm chậm kẻ địch, tăng tốc chạy cho đồng minh đi qua.',
        comboTip: 'Hiệu ứng câm lặng và đẩy lùi liên tiếp ngắt chiêu lao vào của sát thủ đối phương.'
      },
      {
        slot: 'skill2',
        name: 'Cổng Thần Về Tế Đàn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/541620c87481fd28c60fb965e11f05f65eb13fbd5e9a11.png',
        cooldown: '11.0s',
        energyCost: '70',
        damageType: 'Hỗ trợ',
        description: 'Tạo một vòng dịch chuyển về Tế Đàn. Sau 4 giây, tất cả đồng minh đứng trong vòng lập tức được đưa về Tế Đàn hồi đầy 100% máu và tăng tốc chạy cực đại.',
        comboTip: 'Đặt đón đầu cho đồng minh đang hấp hối bước vào để biến về hồi đầy máu tức thì.'
      },
      {
        slot: 'ultimate',
        name: 'Thần Môn Toàn Bản Đồ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0c86300a463a31a080d075cc95f363ea5eb1401d102031.png',
        cooldown: '55.0s',
        energyCost: '130',
        damageType: 'Hỗ trợ',
        description: 'Mở một đại truyền tống trận tại điểm chỉ định gây sát thương phép. TẤT CẢ đồng minh trên bản đồ có thể bấm nút truyền tống để xuất hiện ngay lập tức tại vị trí này.',
        comboTip: 'Tạo những pha hội quân 5 người bất ngờ lật ngược giao tranh hoặc tập kích ăn Tà Thần Caesar chớp nhoáng.'
      }
    ],
    lore: `Nữ pháp sư không gian có tính cách rụt rè, nhút nhát thuộc Tiểu Đội Ánh Sáng của Tulen. Dù ban đầu thiếu tự tin vào năng lực bản thân, Rouie đã nỗ lực không ngừng nghỉ để làm chủ pháp thuật không thời gian, trở thành mắt xích kết nối chiến thuật không thể thiếu của đội hình.`,
    battleTips: [
      'Combo dịch chuyển thần thánh: Đặt chiêu 2 hồi đầy máu -> Kích hoạt chiêu cuối để đồng minh bay trở lại chiến trường ngay lập tức.',
      'Chiêu 1 có khả năng câm lặng và đẩy lùi, rất hiệu quả trong việc bảo kê chủ lực.',
      'Cần giao tiếp tốt với đồng đội để tận dụng tối đa cổng truyền tống chiêu cuối.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Khiên Huyền Thoại', 'Huân Chương Troy', 'Giáp Gaia'],
    relatedHeroIds: ['laville', 'zata', 'tulen', 'teeri']
  },

  {
    id: 'teeri',
    name: 'Terri',
    title: 'Sĩ Quan Tình Báo',
    factionId: 'veda',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3499773a79087475e48194e0fd02e27d658d428c2cbe51.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_5c07ecc416b587cc22f3e4f0cca52ec9658d4a77a0867.jpg',
    quote: 'Song súng ánh sáng bay lượn, mọi bí mật bóng tối đều phải phơi bày!',
    stats: { damage: 10, toughness: 3, mobility: 6, crowdControl: 5, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Thần Khí Song Vũ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/acc868b3d43e9f5c68d111a9af0073a2658d482da9b141.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi khi đòn đánh hoặc chiêu thức trúng đích tích lũy năng lượng thần khí. Đủ tầng giúp đòn đánh kế tiếp cường hóa tăng tầm bắn và nảy lan sát thương.',
        comboTip: 'Tích năng lượng trước giao tranh để phát đạn đầu tiên nảy lan sát thương trúng nhiều tướng địch.'
      },
      {
        slot: 'skill1',
        name: 'Quang Tố Bắn Phá',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2d68eeddfab667400067001036cc286b658d4897ea3201.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Bắn ra chùm đạn ánh sáng khóa mục tiêu làm chậm 30% và gây sát thương vật lý liên tiếp.',
        comboTip: 'Dùng để giữ khoảng cách và làm chậm kẻ địch đang áp sát.'
      },
      {
        slot: 'skill2',
        name: 'Xuyên Thấu Luân Hồi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/052f865608b6c3605e93f72549fd7c3d658d48e2175331.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Tăng tốc chạy, cường hóa 4 đòn đánh kế tiếp bắn ra các phi đĩa ánh sáng xuyên thấu qua mục tiêu gây sát thương theo đường thẳng.',
        comboTip: 'Căn góc bắn thẳng hàng qua lính để phi đĩa xuyên thẳng vào xạ thủ hoặc pháp sư đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Song Vũ Bumerang Toàn Bản Đồ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8d252fcdf3a791146c9b7013a65aed1f658d49284b5c01.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Bắn ra cặp vũ khí ánh sáng bay xuyên toàn bản đồ rồi quay ngược trở về. Gây sát thương vật lý 2 lần (lượt đi và lượt về) theo phần trăm máu đã mất.',
        comboTip: 'Chiêu thức bắn tỉa xuyên bản đồ độc đáo có khả năng gây sát thương 2 lần, cực kỳ nguy hiểm trong giao tranh tổng.'
      }
    ],
    lore: `Cô bé từng bị gia đình hắt hủi vì sở hữu năng lực đặc biệt nhìn thấu ánh sáng. Sau đó, Terri được Đại thiên sứ Lauriel mang về Tháp Quang Minh bồi dưỡng, trở thành một sĩ quan tình báo xuất sắc thuộc Tiểu Đội Ánh Sáng của Tulen.`,
    battleTips: [
      'Terri có khả năng bắn lan và xuyên thấu cực mạnh trong các pha giao tranh co cụm.',
      'Chiêu 2 tăng tốc chạy giúp Terri thả diều đối thủ rất linh hoạt.',
      'Chiêu cuối có 2 lượt gây sát thương (lúc bay đi và lúc bay về), hãy tính toán đường bay để trúng trọn vẹn cả 2 lượt.'
    ],
    recommendedItems: ['Thánh Kiếm', 'Giày Du Mục', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Diệt Thần Cung', 'Nanh Fenrir'],
    relatedHeroIds: ['lauriel', 'laville', 'zata', 'rouie']
  },

  {
    id: 'omega',
    name: 'Omega',
    title: 'Cỗ Máy Tri Giác',
    factionId: 'veda',
    role: 'Đỡ Đòn',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cb7b811e7978882aefac079de6c93daf5fbcc5716f8ad1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1e85e21c964a18bba0550510c4ec18995fbcbaf76aa391.jpg',
    quote: 'Hủy diệt mọi loại vũ khí chiến tranh, thiết lập nền hòa bình tuyệt đối!',
    stats: { damage: 5, toughness: 10, mobility: 7, crowdControl: 9, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Chế Lệnh Hủy Diệt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2793706eb605b6c46e84b9c781324d475b30b70597bcf1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tất cả chiêu thức của Omega đều gây sát thương đầy đủ lên công trình (trụ). Định kỳ đòn đánh thường quét xung quanh gây sát thương chuẩn và làm choáng trụ.',
        comboTip: 'Omega là hung thần phá trụ và băng trụ số 1 đại lục, tận dụng để phá công trình chớp nhoáng.'
      },
      {
        slot: 'skill1',
        name: 'Chế Độ Siêu Tốc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e41502909ea0eab2494f6511f537259e583f926571d1d1.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Hỗ trợ',
        description: 'Nhận lá chắn dày, tăng 40% tốc chạy. Đòn đánh kế tiếp lướt tới hất tung kẻ địch lên không trung.',
        comboTip: 'Bật chiêu 1 để tăng tốc tiếp cận rồi hất tung chủ lực đối phương mở màn giao tranh.'
      },
      {
        slot: 'skill2',
        name: 'Chế Độ Nghiền Nát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/138572737910e863881f1d150fd6360f583f92837bad41.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Omega xoay 5 chiếc khiên xung quanh gây sát thương vật lý liên tục. Nhát cuối cùng nện xuống làm choáng 1 giây tất cả nạn nhân.',
        comboTip: 'Tiếp nối sau chiêu 1 để tạo chuỗi khống chế liên hoàn khiến đối thủ không thể di chuyển.'
      },
      {
        slot: 'ultimate',
        name: 'Khiên Pháo Hủy Diệt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7335d47f572b8741da6cbc124def537d583f92a544c171.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Triệu hồi vòng xoay khiên pháo khổng lồ đẩy lùi tất cả kẻ địch dám tiếp cận, chặn đứng các tia đạn định hướng và gây sát thương liên tục.',
        comboTip: 'Bật chiêu cuối che chắn hoàn toàn tuyến sau của đội hình khỏi các kỹ năng định hướng của kẻ thù.'
      }
    ],
    lore: `Cỗ máy chiến tranh bí ẩn mang tri giác độc lập, sở hữu quyền năng hủy diệt mọi loại vũ khí cơ giới. Từng cứu mạng Moren trong trận chiến bảo vệ thành phố, Omega gia nhập liên minh Tháp Quang Minh để chiến đấu vì một mục tiêu duy nhất: chấm dứt vĩnh viễn mọi cuộc chiến tranh đẫm máu trên Athanor.`,
    battleTips: [
      'Combo phá trụ và gank đường: Chiêu 1 hất tung -> Chiêu 2 làm choáng -> Chiêu cuối ép đối phương vào góc tường.',
      'Chiêu cuối có khả năng chặn đạn bắn định hướng cực kỳ hữu ích trước các xạ thủ như Tel\'Annas hay Laville.',
      'Khả năng gây sát thương và làm choáng trụ giúp Omega có thể băng trụ giết người rất sớm.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huy Chương Troy', 'Giáp Thống Khổ'],
    relatedHeroIds: ['moren', 'bright', 'ilumia', 'edras']
  },

  {
    id: 'ngokhong',
    name: 'Ngộ Không',
    title: 'Tề Thiên Đại Thánh',
    factionId: 'veda',
    role: 'Sát Thủ',
    secondaryRole: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/aea009bf921dd684d19ee76c0c1441215ef5c39d1bd6b1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f7caf66293969fdd7da4342e57c5cc525e45321aebe5f1.jpg',
    quote: 'Một gậy định càn khôn, dưới gậy Như Ý của Lão Tôn không kẻ nào sống sót!',
    stats: { damage: 10, toughness: 4, mobility: 8, crowdControl: 6, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Vô Thương',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7d6c8dc32e3d12f65abf40a137b790ce58dced53960b91.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi khi tung chiêu thức, đòn đánh kế tiếp được tăng tầm, lướt tới mục tiêu và nhận sẵn 15% tỉ lệ chí mạng bẩm sinh.',
        comboTip: 'Đập một gậy chí mạng sau mỗi lần tung chiêu thức để bốc hơi kẻ địch trong tích tắc.'
      },
      {
        slot: 'skill1',
        name: 'Phân Thân Ảo Ảnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e6aee705b5741fef3c136a8f6c67cf0658dcee169679a1.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Ngộ Không tàng hình trong 1.5 giây và để lại một ảo ảnh phát nổ. Tăng 40% tốc chạy khi đang tàng hình.',
        comboTip: 'Bật tàng hình để âm thầm áp sát xạ thủ đối phương rồi vung gậy nổ chí mạng.'
      },
      {
        slot: 'skill2',
        name: 'Cân Đẩu Vân',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/24016c828e2d50e922909935ccc274e958dcee94d847c1.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt tới điểm chỉ định, nhận thêm lượng lớn giáp và giáp phép nếu lướt trúng kẻ địch.',
        comboTip: 'Chiêu thức vượt địa hình cơ động dùng để truy đuổi hoặc thoát thân qua bờ tường mỏng.'
      },
      {
        slot: 'ultimate',
        name: 'Gậy Như Ý',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/79cecacdc7803258d966b07de4825b6058dcf1e236ebd1.png',
        cooldown: '30.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Vung gậy khổng lồ làm choáng tất cả kẻ địch xung quanh trong 1 giây. Tái kích hoạt: Ngộ Không lập tức tàng hình thêm một lần nữa trong 1.5 giây.',
        comboTip: 'Đập choáng diện rộng rồi tái kích hoạt tàng hình để đổi góc đánh gậy tiếp theo.'
      }
    ],
    lore: `Sinh linh huyền thoại từng bị giam dưới Ngũ Hành Sơn. Với tính khí hiếu chiến, ngang tàng và sức mạnh vô song, Ngộ Không bước vào cuộc chiến của Athanor, đứng về phe Tháp Quang Minh để tìm kiếm những đối thủ xứng tầm nhất đại lục.`,
    battleTips: [
      'Ngộ Không là hung thần chí mạng một gậy chết người giai đoạn giữa và cuối trận.',
      'Thứ tự combo sốc sát thương: Chiêu 1 tàng hình -> Đập thường -> Chiêu cuối làm choáng -> Đập thường -> Chiêu 2 -> Đập thường.',
      'Cần đạt các món đồ chí mạng chủ lực (Thánh Kiếm, Song Đao Bão Táp) càng sớm càng tốt.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Phức Hợp Kiếm', 'Nanh Fenrir'],
    relatedHeroIds: ['bright', 'ilumia', 'edras', 'tulen']
  },

  {
    id: 'edras',
    name: 'Edras',
    title: 'Đấng Sáng Tạo',
    factionId: 'veda',
    role: 'Pháp Sư',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/10/edrashead-2.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/10/59500.jpg',
    quote: 'Vạn vật sinh sôi từ ánh sáng, và trật tự sẽ tái sinh từ hư vô!',
    stats: { damage: 9, toughness: 7, mobility: 6, crowdControl: 8, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Nguyên Sơ Chi Lực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/10/7.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Edras tỏa ra ánh sáng nguyên sơ bảo hộ đồng minh lân cận, tăng 10% sát thương cho đồng đội và gây sát thương chuẩn định kỳ lên kẻ thù.',
        comboTip: 'Duy trì đứng giữa đội hình để vừa cường hóa hỏa lực cho đồng minh vừa thiêu đốt kẻ thù.'
      },
      {
        slot: 'skill1',
        name: 'Luật Ánh Sáng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/15.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Vạch ra bức màn luật lệ chân lý, làm câm lặng và trói chân kẻ địch vi phạm trong 1 giây.',
        comboTip: 'Kỹ năng khóa chặt bước tiến của các sát thủ hung hãn.'
      },
      {
        slot: 'skill2',
        name: 'Suối Nguồn Khởi Sinh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5.png',
        cooldown: '9.0s',
        energyCost: '80',
        damageType: 'Hỗ trợ',
        description: 'Triệu hồi suối nguồn sinh mệnh thanh tẩy mọi khống chế cho bản thân và đồng minh lân cận, hồi phục lượng máu lớn.',
        comboTip: 'Bảo vệ cả đội hình khỏi những pha mở giao tranh khống chế diện rộng nguy hiểm.'
      },
      {
        slot: 'ultimate',
        name: 'Sáng Tạo & Hư Vô',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6.png',
        cooldown: '50.0s',
        energyCost: '130',
        damageType: 'Chuẩn',
        description: 'Edras giải phóng toàn bộ thần lực nguyên sơ, tạo ra vụ nổ ánh sáng vũ trụ gây sát thương chuẩn khổng lồ lên toàn bộ kẻ địch trong phạm vi lớn.',
        comboTip: 'Chiêu thức quét sạch tàn dư giao tranh tổng với lượng sát thương chuẩn không thể ngăn cản.'
      }
    ],
    lore: `Nguyên Sơ Chi Thần, người đã sáng tạo nên luật Ánh Sáng và kiến thiết Tháp Quang Minh trên đỉnh Orsen. Ngài là sư phụ của những nhân vật đình đám nhất lịch sử (Volkath, Maloch, Marja, Ilumia). Sau khi bị đồ đệ Volkath phản bội và sát hại, linh hồn Edras vẫn trường tồn chu du khắp cõi, chọn Bright làm học trò cuối cùng để truyền thừa sức mạnh chấm dứt bóng tối.`,
    battleTips: [
      'Edras là hiện thân của cội nguồn ma pháp, cung cấp khả năng giải khống chế diện rộng cực kỳ quý giá.',
      'Chiêu cuối gây sát thương chuẩn bùng nổ, hãy canh thời điểm kẻ địch tập trung đông người.',
      'Nội tại tăng sát thương cho đồng minh biến Edras thành hạt nhân chiến thuật của cả đội.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Mặt Nạ Berith', 'Huân Chương Troy', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['bright', 'volkath', 'ilumia', 'maloch', 'marja']
  },

  {
    id: 'chaugnar',
    name: 'Chaugnar',
    title: 'Sứ Giả Hỗn Mang Cổ',
    factionId: 'veda',
    role: 'Trợ Thủ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3eb3c69cef807c5706a98cc4b799619b5b3456990e6501.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/11300.jpg',
    quote: 'Hỗn mang thượng cổ thức giấc, mọi xiềng xích khống chế đều tan biến!',
    stats: { damage: 6, toughness: 9, mobility: 7, crowdControl: 6, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Đại Hướng Đồng Khởi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c05f01160ebc39a2f5f31593c0115332583f94ab3b6441.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi khi tung chiêu 1, Chaugnar lập tức hóa giải mọi khống chế trên bản thân, tăng tốc chạy và giảm 15% sát thương nhận vào trong 2 giây.',
        comboTip: 'Chủ động tung chiêu 1 để giải phóng bản thân khỏi các hiệu ứng làm chậm và khống chế của đối thủ.'
      },
      {
        slot: 'skill1',
        name: 'Thủy Triều',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ede6e773ba9578bbad32f60bc4535736583f94c4188121.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Phóng ra luồng sóng nước hỗn mang hình nón, gây sát thương phép và làm chậm 50% tốc chạy của tất cả nạn nhân trúng đòn trong 2 giây.',
        comboTip: 'Kỹ năng làm chậm diện rộng liên tục để thả diều và kiểm soát thế trận.'
      },
      {
        slot: 'skill2',
        name: 'Nước Xoáy',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/29b04043c51909a37edfefa6a8cc7661583f94de863d01.png',
        cooldown: '3.0s',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Chaugnar quẫy nước xoáy xung quanh, gây sát thương phép và tích tầng tăng sát thương nước xoáy (tối đa 3 tầng) đồng thời giảm hồi chiêu 1.',
        comboTip: 'Xả chiêu 2 liên tục trong giao tranh cận chiến để tối đa hóa lượng sát thương dồn dập.'
      },
      {
        slot: 'ultimate',
        name: 'Hỗn Loạn Quang Phổ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b6a0ace14b74a33e038ff259c57c7e2f583f94fb4c0d01.png',
        cooldown: '40.0s',
        energyCost: '110',
        damageType: 'Hỗ trợ',
        description: 'Chaugnar cất tiếng gầm cổ xưa, HÓA GIẢI TOÀN BỘ KHỐNG CHẾ cho bản thân và tất cả đồng minh xung quanh, nhận miễn khống và tăng tốc chạy trong 3 giây.',
        comboTip: 'Khắc tinh số 1 của các đội hình nhiều khống chế diện rộng (như Gildur, Aleister, D\'Arcy, Alice).'
      }
    ],
    lore: `Sinh vật thượng cổ tồn tại từ thuở hỗn mang sơ khai, mang hình hài loài voi khổng lồ được Tháp Quang Minh phong ấn rồi sau đó thuần hóa. Chaugnar sở hữu quyền năng phá vỡ mọi quy luật trói buộc của không gian và ma thuật, là lá chắn miễn dịch khống chế tối thượng của phe Ánh Sáng.`,
    battleTips: [
      'Chaugnar là khắc tinh hoàn hảo của các đội hình sở hữu nhiều chiêu thức khống chế cứng.',
      'Bật chiêu cuối chuẩn xác ngay khoảnh khắc đối phương tung combo khống chế mở giao tranh.',
      'Chiêu 2 hồi siêu nhanh, hãy liên tục càn quét ở tuyến đầu giao tranh.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Mặt Nạ Berith', 'Khiên Huyền Thoại', 'Huân Chương Troy', 'Giáp Gaia'],
    relatedHeroIds: ['ilumia', 'lauriel', 'gildur', 'edras']
  },

  {
    id: 'toro',
    name: 'Toro',
    title: 'Ngưu Ma Vương',
    factionId: 'veda',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ffd2c29391b67831e97a0b16534a65d45ef5921c2bcb41.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b7b9e1d6feade741ed789349815ddabc5ef592310c8611.jpg',
    quote: 'Sức mạnh của Ngưu Ma Vương là bất khả lay chuyển, ai dám cản đường ta!',
    stats: { damage: 5, toughness: 10, mobility: 5, crowdControl: 9, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Mình Đồng Da Sắt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7b1f82597089ffdc9b4b2d66b6689173583f96b00b9b51.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Trong khi tung chiêu thức, Toro hoàn toàn MIỄN NHIỄM MỌI KHỐNG CHẾ và giảm 80% sát thương nhận vào.',
        comboTip: 'Căn thời điểm đối phương tung khống chế để bấm chiêu thức, biến Toro thành pháo đài bất khả xâm phạm.'
      },
      {
        slot: 'skill1',
        name: 'Sừng Trâu Húc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/432486becfdb9d6b687ca11d36effbe5583f96c9da1fe1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Toro lao thẳng về phía trước hất tung tất cả kẻ địch trên đường chạy lên không trung.',
        comboTip: 'Chiêu thức tiếp cận mở giao tranh xuyên qua địa hình mỏng.'
      },
      {
        slot: 'skill2',
        name: 'Dư Chấn Địa Cầu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/143e04008cfacbf91b933957d9690f14583f96e08f3141.png',
        cooldown: '7.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Toro tụ lực tạo lớp lá chắn dày rồi nện xuống đất làm chậm 80% tốc chạy và gây sát thương vật lý cực lớn.',
        comboTip: 'Tận dụng thời gian tụ lực để chặn đứng các kỹ năng khống chế cứng từ đối thủ.'
      },
      {
        slot: 'ultimate',
        name: 'Đại Địa Chấn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3006b635a01445334829a9c83c6e9a87583f96f9957a61.png',
        cooldown: '35.0s',
        energyCost: '110',
        damageType: 'Vật lý',
        description: 'Toro nện 3 nhát chùy khổng lồ xuống mặt đất: nhát 1 làm chậm, nhát 2 gây sát thương gấp đôi, nhát 3 hất tung tất cả kẻ địch trong vùng ảnh hưởng.',
        comboTip: 'Mở giao tranh tổng hủy diệt ở các khu vực hang Rồng hoặc lối đi hẹp trong rừng.'
      }
    ],
    lore: `Chiến binh dũng mãnh mang sức mạnh thể chất vô song được Tháp Quang Minh kính nể. Với bộ da đồng xương sắt không một loại vũ khí nào có thể xuyên thủng, Toro luôn là bức tường thành tiên phong dẫn đầu mọi cuộc đụng độ càn quét quân đoàn ác quỷ Lokheim.`,
    battleTips: [
      'Toro là tướng đỡ đòn trâu bò bậc nhất game nhờ nội tại miễn khống và giảm 80% sát thương khi dùng chiêu.',
      'Combo mở combat: Chiêu 1 húc vào -> Chiêu 2 lấy giáp làm chậm -> Chiêu cuối nện 3 phát hất tung cả đội hình địch.',
      'Luôn là người đi đầu check bụi cỏ và thu hút hỏa lực của đối phương.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huy Chương Troy', 'Giáp Thống Khổ'],
    relatedHeroIds: ['ngokhong', 'ilumia', 'xeniel', 'ormarr']
  },

  {
    id: 'ormarr',
    name: 'Ormarr',
    title: 'Chiến Binh Cuồng Nộ',
    factionId: 'veda',
    role: 'Đấu Sĩ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fd2a04f2b129ef58988f2d311eac83e45b6d0919e7d901.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/25b4f6bda1363a60445f8ab1c32449d25ec27a5a1d7411.jpg',
    quote: 'Chiến tranh là lẽ sống của ta, tiếng búa gầm vang sẽ chôn vùi kẻ thù!',
    stats: { damage: 7, toughness: 9, mobility: 6, crowdControl: 9, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Uy Dũng Gõ Búa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cac76363847391d6b4f9d581a043ea8a583f9a81dee021-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tất cả đòn đánh và chiêu thức có tỉ lệ kích hoạt làm choáng kẻ địch 0.75 giây và gây thêm sát thương vật lý theo phần trăm máu hiện tại của mục tiêu.',
        comboTip: 'Tỷ lệ làm choáng ngẫu nhiên biến Ormarr thành cơn ác mộng khống chế liên tục trong cận chiến.'
      },
      {
        slot: 'skill1',
        name: 'Búa Trùng Lao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/93cc8c63bc065f5fe786f2dc331e8998583f9aa3642481-1.png',
        cooldown: '7.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt tới phía trước, cường hóa đòn đánh thường kế tiếp hất tung nạn nhân lên không trung.',
        comboTip: 'Chiêu thức tiếp cận nhanh chóng kết hợp hất tung mở đầu combo.'
      },
      {
        slot: 'skill2',
        name: 'Búa Tạ Nện',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ee0b33849d37fd2ab6aa1c3a940a8f6c583f9affe6dcf1-1.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Nện búa tạ xuống đất gây sát thương vật lý và làm chậm. Tích lũy điểm chiến ý để nhát nện thứ 3 chắc chắn LÀM CHOÁNG đối thủ.',
        comboTip: 'Nện liên tục để tích điểm chắc chắn gây choáng.'
      },
      {
        slot: 'ultimate',
        name: 'Bão Búa Cuồng Nộ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/14c941885a33d2eb215d55f85d10943e583f9b287569b1-2.png',
        cooldown: '28.0s',
        energyCost: '90',
        damageType: 'Vật lý',
        description: 'Ormarr xoay tròn song búa liên tục quét sạch xung quanh, gây sát thương vật lý và liên tục kích hoạt tỷ lệ nổ nội tại làm choáng.',
        comboTip: 'Xoay búa giữa đám đông giao tranh để kích hoạt chuỗi choáng liên hoàn lên nhiều kẻ địch.'
      }
    ],
    lore: `Chiến binh cuồng nộ đến từ bộ tộc phương Bắc khắc nghiệt, sở hữu ngọn lửa chiến đấu bất diệt. Gia nhập liên minh Tháp Quang Minh với chiếc búa tạ khổng lồ, Ormarr luôn khát khao lao vào những điểm nóng giao tranh ác liệt nhất để chứng minh danh dự chiến binh.`,
    battleTips: [
      'Ormarr là tướng ép đường và cướp rừng cực mạnh ở giai đoạn đầu trận nhờ nội tại choáng theo phần trăm máu.',
      'Lên trang bị nửa công nửa thủ để vừa cứng cáp vừa có lượng dame quấy rối khó chịu.',
      'Cầm bổ trợ Tốc Biến để tạo đột biến kết hợp chiêu 1 hất tung chủ lực địch.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['toro', 'arthur', 'thane', 'ilumia']
  }
];
