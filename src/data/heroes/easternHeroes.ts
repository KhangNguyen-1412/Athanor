import type { Hero } from '../../types/athanor';

export const EASTERN_HEROES: Hero[] = [
  {
    id: 'yue',
    name: 'Yue',
    title: 'Ngọc Nữ Cung Cấm',
    factionId: 'long_chi_quoc',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3ee26051086fee856dc6df74811e9e35658d4142ce14c1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_8a768c6b749bbc7534111a8ad65ebe12658d4ab8e8a25.jpg',
    quote: 'Mỗi nan quạt khép mở là sinh mệnh của một kẻ dám mạo phạm cung đình!',
    stats: { damage: 10, toughness: 3, mobility: 6, crowdControl: 5, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Vương Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/82ae4742edc540255c564e6063e48aba658d46e5796b01.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi lần tung chiêu 1 hoặc chiêu 2, Yue tích lũy 1 điểm dấu ấn Vương Khí. Khi tích đủ 2 điểm, chiêu 1 và chiêu 2 lập tức được làm mới và cường hóa thành phiên bản bắn 4 luồng quạt.',
        comboTip: 'Tích 1 điểm nộ trước giao tranh để có thể kích hoạt bắn 4 luồng quạt cường hóa liên tục.'
      },
      {
        slot: 'skill1',
        name: 'Cắt Cánh Gần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cf8a12a5c5ebbbe70091f021daf8e050658d474f2d2091.png',
        cooldown: '4.0s',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Bắn ra 2 luồng quạt ma thuật bay cắt chéo nhau ở cự ly gần. Điểm giao nhau của hai đường quạt gây gấp đôi sát thương phép lên kẻ địch.',
        comboTip: 'Căn khoảng cách sao cho tâm giao nhau của hai đường quạt trúng chính xác vào người tướng địch.'
      },
      {
        slot: 'skill2',
        name: 'Cắt Cánh Xa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a55b338cb9438057c73daf054b8f092a658d4779757c01.png',
        cooldown: '4.0s',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Bắn ra 2 luồng quạt ma thuật bay cắt chéo nhau ở cự ly xa. Kẻ địch đứng ngay tâm giao điểm sẽ phải gánh chịu sát thương phép nhân đôi cực kỳ hủy diệt.',
        comboTip: 'Chiêu cấu rỉa máu tầm xa chủ lực của Yue, có thể bốc hơi 70% máu xạ thủ địch nếu trúng tâm giao nhau.'
      },
      {
        slot: 'ultimate',
        name: 'Đạo Cung Phòng Vệ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/837bcf68f3c69f541f83e48a6f771670658d47ac8f2bd1.png',
        cooldown: '25.0s',
        energyCost: '80',
        damageType: 'Phép',
        description: 'Yue lướt lùi về phía sau, đẩy văng tất cả kẻ địch trước mặt và gây sát thương phép lên chúng, đồng thời tăng mạnh tốc độ di chuyển.',
        comboTip: 'Kỹ năng tự vệ hoàn hảo khi bị sát thủ đối phương áp sát bất ngờ.'
      }
    ],
    lore: `Công chúa cành vàng lá ngọc của Vương Triều Phương Đông cổ kính. Yue sở hữu cốt cách thanh cao cùng tài năng ma thuật quạt lụa độc nhất vô nhị. Đằng sau tấm rèm ngọc cung cấm, nàng đã âm thầm học cách nắm giữ quyền lực và dùng những đường quạt sắc lẹm xé toạc mọi âm mưu soán ngôi của các phe cánh phản loạn.`,
    battleTips: [
      'Căn cự ly tâm giao điểm của chiêu 1 và chiêu 2 là chìa khóa quyết định sức mạnh của Yue.',
      'Chiêu cuối vừa đẩy lùi địch vừa giúp Yue giật lùi về sau, kết hợp chiêu 1 cường hóa để phản công sốc chết kẻ đuổi theo.',
      'Lên trang bị thuần sát thương phép và xuyên giáp như Trượng Bùng Nổ và Vương Miện Hecate.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương', 'Sách Thánh'],
    relatedHeroIds: ['yan', 'qi', 'ryoma', 'airi', 'lu_bo']
  },

  {
    id: 'lu_bo',
    name: 'Lữ Bố',
    title: 'Vô Địch Chiến Thần',
    factionId: 'long_chi_quoc',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ecbf2434edb2b16cc0d5b286a88ab4335d2565110472b1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/01636074d1a9826c4db917dae38a7de25d2562df2144b1.jpg',
    quote: 'Ai dám cản bước Phương Thiên Họa Kích của ta trên cõi đời này?!',
    stats: { damage: 9, toughness: 9, mobility: 7, crowdControl: 6, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Chúa Tể Chiến Trường',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f37dcb80bb5fbf602aed1389bbc354e9583e9f7c3831d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi khi Lữ Bố tung chiêu hoặc đánh thường trúng kẻ địch, thời gian hồi của chiêu 2 Phương Thiên Họa Kích được giảm 1 giây.',
        comboTip: 'Chém tay liên tục để xả chiêu 2 làm chậm đối thủ không ngừng nghỉ.'
      },
      {
        slot: 'skill1',
        name: 'Xích Thố Tung Hoành',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c6588d59c1afa5baeed5fcd2510c392d583e9ff83495c1.png',
        cooldown: '8.0s (Lướt 3 lần)',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lữ Bố lướt kiếm chém về phía trước gây sát thương vật lý, có thể lướt 3 lần liên tiếp. Nhát chém thứ 3 dậm mạnh hất tung kẻ địch.',
        comboTip: 'Dùng để bám đuổi con mồi và vượt qua các địa hình mỏng, nhát thứ 3 hất tung để ngắt chiêu địch.'
      },
      {
        slot: 'skill2',
        name: 'Phương Thiên Họa Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9e2bb847f78fd378623a06995fb0311b583ea025bce151.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng ra một luồng kiếm khí từ đại kích làm chậm 50% tốc chạy của kẻ địch và gây sát thương vật lý tầm xa.',
        comboTip: 'Kỹ năng làm chậm tầm xa giúp Lữ Bố dễ dàng áp sát mục tiêu bằng chuỗi chiêu 1.'
      },
      {
        slot: 'ultimate',
        name: 'Chiến Thần Vô Song',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/470890bc984393b1c7b2e54fcc0c5635583ea08f285451.png',
        cooldown: '30.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lữ Bố bộc phát chiến thần chi lực: Tăng công vật lý, kháng hiệu ứng khống chế cực lớn. Mỗi đòn đánh thường và kỹ năng trúng đích ĐỀU HỒI LƯỢNG MÁU KHỔNG LỒ trong 8 giây.',
        comboTip: 'Bật chiêu cuối khi bắt đầu lao vào đánh tay đôi, càng chém máu hồi lại càng đầy ắp.'
      }
    ],
    lore: `Chiến thần vô địch thiên hạ của phương đông cổ xưa, người sở hữu ngựa Xích Thố và ngọn Phương Thiên Họa Kích từng khuấy đảo muôn trùng chiến trận. Lữ Bố kiêu dũng tuyệt luân, coi khinh mọi giới hạn phàm trần. Khi lạc bước đến hoang mạc sương mù Athanor, ông tiếp tục vung kích tìm kiếm những trận huyết chiến đỉnh cao để khẳng định ngôi vị đệ nhất chiến thần.`,
    battleTips: [
      'Khả năng hút máu của chiêu cuối cực kỳ mạnh mẽ, giúp Lữ Bố lật kèo 1vs2 hoặc 1vs3 ngoạn mục.',
      'Sử dụng các đòn đánh thường xen kẽ giữa các lần lướt của chiêu 1 để giảm hồi chiêu 2 tối đa.',
      'Lên Áo Choàng Băng Giá để kẻ địch không có cơ hội chạy thoát khỏi tầm kích.'
    ],
    recommendedItems: ['Rìu Leviathan', 'Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['dieu_thuyen', 'trieu_van', 'qi', 'ryoma', 'airi']
  },

  {
    id: 'dieu_thuyen',
    name: 'Điêu Thuyền',
    title: 'Tuyệt Sắc Giai Nhân',
    factionId: 'long_chi_quoc',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d93ee5059a95c391548419e69b6b9d1a5d2564f4eba891.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3168dfb2fc31f95f3a735fccc752acfa5d2564561915a1.jpg',
    quote: 'Trái tim của chàng có lạnh giá đến đâu cũng sẽ tan chảy trước vẻ đẹp này!',
    stats: { damage: 8, toughness: 5, mobility: 4, crowdControl: 10, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Nữ Hoàng Băng Tuyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1ff46a17c8edeb23e5a18ba72dd95b885df33f0f8a2fe1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Điêu Thuyền sở hữu một lớp khiên băng bảo hộ chặn hoàn toàn sát thương và hiệu ứng khống chế của một kỹ năng đầu tiên trúng phải. Sát thương lên mục tiêu bị đóng băng tăng thêm.',
        comboTip: 'Lớp giáp băng nội tại giúp Điêu Thuyền an tâm tung chiêu đóng băng kẻ địch mà không sợ bị khống chế ngắt chiêu.'
      },
      {
        slot: 'skill1',
        name: 'Sương Giá',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/86702ec163da19f76a810a6dc3f387d35df33f4cac2831.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Tung chưởng sương băng vào khu vực chỉ định gây sát thương phép và làm chậm 50% tốc chạy của kẻ địch trong 2 giây.',
        comboTip: 'Làm chậm kẻ địch bằng chiêu 1 trước để đặt chiêu 2 đóng băng đạt tỉ lệ trúng 100%.'
      },
      {
        slot: 'skill2',
        name: 'Độ Không Tuyệt Đối',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/281bcee21905d1b8d61901374191c0b35df33f5b1c5e61.png',
        cooldown: '8.0s (Tích trữ 2 lần)',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tạo một vùng băng tuyết sau 0.75 giây đóng băng cứng ngắc tất cả kẻ địch bên trong trong 2.5 giây. Tích trữ tối đa 2 lần sử dụng.',
        comboTip: 'Kỹ năng khống chế cứng lâu nhất game; có thể đặt 2 vòng băng liên tiếp để khóa mục tiêu tới 5 giây.'
      },
      {
        slot: 'ultimate',
        name: 'Bão Tuyết Vũ Điệu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5dd0ed7d03c4e8950b2ac677f84ac99d5df33f6c51e161.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Điêu Thuyền nhảy múa triệu hồi cơn bão tuyết khổng lồ trút mưa băng liên tục xung quanh, tăng mạnh giáp vật lý và gây sát thương phép hủy diệt lên mọi kẻ địch trong vùng.',
        comboTip: 'Chỉ bật chiêu cuối sau khi đã đóng băng trúng kẻ địch để chúng chịu trọn vẹn toàn bộ các đợt mưa băng.'
      }
    ],
    lore: `Giai nhân tuyệt sắc nghiêng nước nghiêng thành vùng viễn đông, người nắm giữ trái tim của Chiến Thần Lữ Bố. Điêu Thuyền mang vẻ đẹp kiêu sa băng giá và thuật điều khiển hàn băng ma thuật thượng thừa. Nàng cùng Lữ Bố phiêu bạt qua các vùng hoang mạc sương mù, dùng vũ điệu băng tuyết của mình để bảo vệ người thương và định đoạt số phận kẻ thù.`,
    battleTips: [
      'Combo bất bại: Chiêu 1 làm chậm -> Chiêu 2 đóng băng đón đầu -> Bật chiêu cuối xả bão tuyết.',
      'Lớp khiên băng nội tại hồi lại khi rời giao tranh, rất lợi hại để chống lại các pha câu kéo bắt bớ.',
      'Lên Trượng Băng và Vương Miện Hecate để tối ưu hóa lượng sát thương dồn vào mục tiêu bị đóng băng.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Băng', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['lu_bo', 'trieu_van', 'yue', 'qi', 'ryoma']
  },

  {
    id: 'qi',
    name: 'Qi',
    title: 'Võ Sư Bánh Bao',
    factionId: 'long_chi_quoc',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6da178e8a2c2871aeb856bec0f669ccd5d5684e01acd31.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ea8c78314832bcfd0425b344bed537895d568654b3ddf1.jpg',
    quote: 'Nắm đấm của ta căng tràn năng lượng, ăn một quyền bánh bao này xem nào!',
    stats: { damage: 9, toughness: 8, mobility: 8, crowdControl: 8, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Chân Khí Hộ Thân',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7c9b07994c38fc903852284ec6e883a25d56851f880311.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi khi tung kỹ năng, Qi tăng giáp vật lý (cộng dồn 3 lần) và 2 đòn đánh thường tiếp theo được tăng tốc đánh cùng khả năng hồi lượng máu lớn.',
        comboTip: 'Luôn đánh thường 2 cái sau mỗi lần bấm chiêu để vừa hồi máu vừa duy trì giáp cộng dồn.'
      },
      {
        slot: 'skill1',
        name: 'Truy Tinh Quyền',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4411d2b8009b551aca8e5577f47392615d56856f8e8d41.png',
        cooldown: '6.0s',
        energyCost: '45',
        damageType: 'Vật lý',
        description: 'Lướt quyền về phía trước gây sát thương vật lý và hất tung tất cả kẻ địch trúng phải trong 0.5 giây.',
        comboTip: 'Dùng để áp sát nhanh, hất tung mở đầu chuỗi combo đấm đẩy vào tường.'
      },
      {
        slot: 'skill2',
        name: 'Chấn Khí Quyền',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/45fce7b0fd3d5b88b6732951bc6757565d5685b60d4ae1.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Tung ra 4 cú đấm liên thanh cực nhanh về phía trước gây sát thương vật lý và TRỪ GIÁP kẻ địch liên tục (giảm tới hàng trăm điểm giáp).',
        comboTip: 'Kỹ năng trừ giáp kinh hoàng, khiến các tướng chống chịu cũng mềm như tờ giấy.'
      },
      {
        slot: 'ultimate',
        name: 'Đoạt Mệnh Quyền',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4ed221dbe5cdfd8dd50aa63a30e6bc435d56860fb9b191.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Đấm mạnh đẩy lùi tất cả kẻ địch trước mặt. NẾU KẺ ĐỊCH VA VÀO ĐỊA HÌNH VÁCH TƯỜNG, chúng sẽ bị làm choáng 1.5 giây và Qi mở khóa cú lướt đấm thứ 2 gây sát thương theo % máu đã mất.',
        comboTip: 'Chủ động dùng Tốc Biến hoặc chiêu 1 để căn góc đấm kẻ địch va vào tường kích hoạt cú đấm dứt điểm.'
      }
    ],
    lore: `Nữ truyền nhân của phái võ Chân Khí Quyền phương đông lừng danh. Sau khi phụ thân mất tích và võ quán bị kẻ gian phá hoại, Qi mang theo túi bánh bao yêu thích dấn thân vào hành trình phiêu lưu khắp lục địa để tìm lại tung tích cha và khôi phục thanh danh của môn phái bằng đôi nắm đấm thép uy mãnh.`,
    battleTips: [
      'Giao tranh gần các bờ tường trong rừng là lãnh địa của Qi; cú đấm chiêu cuối vào tường đảm bảo 100% mục tiêu bốc hơi.',
      'Sử dụng combo Chiêu 1 hất tung -> Chiêu 2 trừ giáp -> Chiêu cuối đấm vào tường -> Kích hoạt lần 2 dứt điểm.',
      'Lên Thương Longinus và Phức Hợp Kiếm để tối đa hóa lượng sát thương đòn đánh nội tại.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['ryoma', 'yan', 'airi', 'yue', 'lu_bo']
  },

  {
    id: 'ryoma',
    name: 'Ryoma',
    title: 'Kiếm Khách Hoàng Gia',
    factionId: 'long_chi_quoc',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2f3fe854b98e664415c024a1e9f0396259d9b9ddb39921.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d6387bf2921a4e035684e94bdb92b66859d9beed58d161.jpg',
    quote: 'Thanh naginata này chém rách gió thu, và không một kẻ thù nào có thể chạm vào vạt áo ta!',
    stats: { damage: 9, toughness: 6, mobility: 8, crowdControl: 7, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Vết Chém Hoàng Gia',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bd8668ab8fb1ce4e7029f569c7de2d7f59d9bbe1372731.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi 5 giây, đòn đánh thường kế tiếp vung kiếm tầm xa hình nón gây sát thương vật lý và làm chậm 50% kẻ địch ở rìa ngoài kiếm ảnh.',
        comboTip: 'Tận dụng sải tay dài của đòn nội tại để cấu rỉa máu đối phương ngoài tầm đáp trả của chúng.'
      },
      {
        slot: 'skill1',
        name: 'Thần Hành Bách Biến',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0479c7521aaed4e2661250b328959e6d59d9bcc4dd7931.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Ryoma nhảy lùi ngược về sau và vung đao chém kẻ địch phía trước gây sát thương. Nếu chém trúng tướng địch, hồi chiêu giảm đi 3 giây.',
        comboTip: 'Nhớ kéo cần chiêu 1 ngược hướng bạn muốn nhảy tới để lướt qua địa hình hoặc áp sát con mồi.'
      },
      {
        slot: 'skill2',
        name: 'Nhất Kích Tất Sát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6dea11a5e20d8a5708d50882be0ed26a59d9be1fd08ce1.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Đâm kiếm cực nhanh theo đường thẳng gây sát thương vật lý lên tất cả kẻ địch. Kẻ địch đứng ở nửa sau mũi kiếm SẼ BỊ LÀM CHOÁNG 0.75 GIÂY.',
        comboTip: 'Căn khoảng cách chuẩn xác để đầu mũi kiếm đâm trúng kẻ địch gây choáng tức thì.'
      },
      {
        slot: 'ultimate',
        name: 'Loạn Vũ Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/922bbe6fc66c4ca836b04448bba7896859d9beb8472db1.png',
        cooldown: '12.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Ryoma đâm kiếm liên tiếp 4 lần về phía trước với tốc độ ánh sáng, mỗi nhát đâm gây sát thương vật lý và hồi lượng máu lớn với mỗi tướng địch trúng đòn.',
        comboTip: 'Thời gian hồi chiêu siêu ngắn (chỉ hơn 10s), xả chiêu cuối liên tục để gây sát thương và hồi phục máu.'
      }
    ],
    lore: `Kiếm khách huyền thoại xuất thân từ đội Cận Vệ Hoàng Gia phương đông. Mang trong mình nỗi đau mất đi người huynh đệ kết nghĩa trong cuộc chiến đẫm máu, Ryoma rũ bỏ danh vọng quyền quý, mang thanh vũ khí naginata lang bạt khắp các vùng đất hoang vu của Athanor, tìm kiếm sự thanh thản trong tâm hồn qua từng đường kiếm siêu phàm.`,
    battleTips: [
      'Ryoma là bậc thầy cấu rỉa và thả diều cận chiến; hãy luôn giữ cự ly tối đa của đầu mũi kiếm chiêu 2.',
      'Kỹ năng chiêu 1 nhảy giật lùi, hãy tập kéo ngược để lướt tới truy đuổi kẻ địch một cách mượt mà.',
      'Lên Thương Xuyên Phá và Phức Hợp Kiếm để phát đâm nội tại rút hơn nửa cây máu xạ thủ đối phương.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Xuyên Phá', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['airi', 'qi', 'yan', 'tachi', 'aoi']
  },

  {
    id: 'yan',
    name: 'Yan',
    title: 'Họa Sư Thần Bút',
    factionId: 'long_chi_quoc',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f9471319a98fac8dce266dc86cd1efea658d4042ae0051.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c981df9f322a34a4bc1ba3eaed5f1e1b658d4055d310e-2.jpg',
    quote: 'Vạn vật đất trời đều là nét vẽ, và ngọn bút của ta sẽ vẽ nên khúc tráng ca!',
    stats: { damage: 9, toughness: 7, mobility: 9, crowdControl: 7, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Họa Bút Xuất Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fc03070fa0ef1f470c555beb9152c711658d4b4936dfe1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Mỗi khi tung kỹ năng trúng đích, Yan tích lũy 1 điểm Mực. Đạt 2 điểm mực, đòn đánh kế tiếp được cường hóa theo kỹ năng vừa tung: Kiếm Thuật (hất tung) hoặc Đao Thuật (hồi máu và lướt).',
        comboTip: 'Linh hoạt lựa chọn cường hóa chiêu 1 để hất tung khống chế hoặc cường hóa chiêu 2 để lướt né chiêu hồi máu.'
      },
      {
        slot: 'skill1',
        name: 'Phá Sơn Bút Pháp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b12b549ed8ffba3c0efc7d9b98983168658d4b8c83cfd1.png',
        cooldown: '4.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung bút chém hình bán nguyệt gây sát thương vật lý và làm chậm mục tiêu. Đòn cường hóa nhảy bổ lên dộng mạnh gây choáng diện rộng.',
        comboTip: 'Dùng chiêu 1 cường hóa để tiếp cận và khống chế cứng kẻ địch trong giao tranh.'
      },
      {
        slot: 'skill2',
        name: 'Hoành Long Khúc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a2e7df0c941762e644b87d746de7b945658d4bc41b9051.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Yan lướt theo đường vòng cung nửa hình tròn gây sát thương vật lý và không thể bị chọn làm mục tiêu trong lúc lướt.',
        comboTip: 'Khoảnh khắc không thể bị chọn làm mục tiêu giúp Yan né tránh toàn bộ chiêu thức nguy hiểm của đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Thần Lai Chi Bút',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/feb702cd4e7e030035b78c12e8d563c7658d4c124bbf41.png',
        cooldown: '35.0s',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Khai mở toàn bộ cảnh giới họa thuật: Tăng công vật lý, xuyên giáp, tốc chạy và mở khóa tầng cảnh giới thứ 3 cho bộ kỹ năng, đồng thời lập tức hồi lại chiêu 1 và 2.',
        comboTip: 'Bật chiêu cuối để mở khóa trạng thái múa liên hoàn không ngừng nghỉ, biến Yan thành con quái vật giao tranh tổng.'
      }
    ],
    lore: `Thiếu niên họa sĩ thiên tài phương đông mang cây bút lông thần kỳ có thể biến những bức họa thành sự thật sống động. Yan chu du tìm kiếm cảm hứng vẽ tranh trên khắp đại lục Athanor. Cùng đường nét bút pháp biến hóa khôn lường kết hợp kiếm pháp uyển chuyển, cậu đã giải cứu vô số người dân vô tội khỏi móng vuốt của quái vật.`,
    battleTips: [
      'Yan ở cấp 12 trở đi đạt cảnh giới tối thượng của chiêu cuối, khả năng múa lướt và hồi phục gần như vô tận.',
      'Sử dụng chiêu 2 khéo léo để outplay các chiêu khống chế cứng và sát thương dồn của địch.',
      'Lên trang bị đấu sĩ có giảm hồi chiêu như Thương Longinus và Phức Hợp Kiếm.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['yue', 'qi', 'ryoma', 'airi', 'tachi']
  },

  {
    id: 'airi',
    name: 'Airi',
    title: 'Ninja Rồng Thần',
    factionId: 'dao_suong_mu',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/04999ff87145b9005694ffd78e1530a660017059a8fc11.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/airi-default.jpg',
    quote: 'Long hồn thức tỉnh trong huyết quản, song kiếm ninja sẽ trừng phạt cái ác!',
    stats: { damage: 10, toughness: 6, mobility: 9, crowdControl: 7, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Sắc Lẻm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a680b3ce90b3f5d780a20ef0ceace6095965d6fbdd1901.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Mỗi khi Airi tung chiêu thức, 2 đòn đánh thường kế tiếp GÂY HOÀN TOÀN SÁT THƯƠNG CHUẨN CÓ THỂ CHÍ MẠNG và hồi phục một lượng máu lớn cho nàng.',
        comboTip: 'Sát thương chuẩn chí mạng khiến Airi chém xuyên thủng mọi loại giáp, đấu sĩ hay tanker cũng gục ngã.'
      },
      {
        slot: 'skill1',
        name: 'Phi Tiêu Kiếm Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a862ba282b57fbec5e8db45ea4b8265c5965d755a10731.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng phi tiêu ninja bay theo đường thẳng, gây sát thương vật lý và làm choáng 0.75 giây tất cả kẻ địch trên đường bay.',
        comboTip: 'Phi tiêu làm choáng tầm xa, dùng để giữ chân con mồi trước khi lướt chiêu 2 áp sát.'
      },
      {
        slot: 'skill2',
        name: 'Kiếm Vũ Lướt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0b7b557a6b6c38b7f70a6cf9b4d7557a5965d796996871.png',
        cooldown: '8.0s (Tích trữ 3 lần)',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Airi lướt nhanh về hướng chỉ định gây sát thương vật lý, tích trữ tối đa 3 lần lướt. Đòn đánh thường trúng đích giúp giảm thời gian hồi chiêu lướt.',
        comboTip: '3 lần lướt cho phép Airi băng qua mọi địa hình vách đá và truy đuổi bất kỳ mục tiêu nào.'
      },
      {
        slot: 'ultimate',
        name: 'Long Kiếm Phán Quyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e84a26cea6cfe4af2961dcc5c5c917735965d7d24a2331.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Airi phi thân lên không trung triệu hồi Rồng Thần giáng xuống làm choáng diện rộng, nhận lượng lá chắn khổng lồ và giới hạn sát thương tối đa gánh chịu mỗi đòn đánh.',
        comboTip: 'Chiêu cuối giúp Airi không thể bị sốc sát thương chết ngay, mở ra cơ hội múa kiếm chém sát thương chuẩn hủy diệt.'
      }
    ],
    lore: `Nữ ninja truyền nhân đời thứ 23 của gia tộc Rồng Thần tại Đảo Sương Mù phương đông. Khi Chúa Tể Hắc Ám Volkath hồi sinh và đe dọa hủy diệt thánh địa quê hương, Airi đã dũng cảm hy sinh bản thân hấp thụ long hồn thượng cổ, dùng song kiếm trảm phong đánh bại ác ma, trở thành biểu tượng anh hùng bất tử của nhẫn giả.`,
    battleTips: [
      'Giai đoạn cuối trận Airi là nỗi khiếp sợ tột cùng với khả năng chém sát thương chuẩn chí mạng 2000-3000 mỗi nhát.',
      'Chiêu cuối giới hạn sát thương nhận vào, bật ngay khi lao vào giữa 5 tướng địch để quẩy an toàn.',
      'Lên Đao Truy Hồn, Thương Longinus và Phức Hợp Kiếm để tối ưu hóa hiệu quả sát thương chuẩn.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Đao Truy Hồn', 'Thương Longinus', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['ryoma', 'tachi', 'aoi', 'yan', 'volkath']
  },

  {
    id: 'tachi',
    name: 'Tachi',
    title: 'Cuồng Ma Trảm',
    factionId: 'dao_suong_mu',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ea94a6f76e867283974c8ced9d3aa2c5658d3150230cf1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_8c3022ef9a08c13742633d33ff24bbc7658d3166d78f4.jpg',
    quote: 'Phong ấn này một khi được giải khai, đao của ta sẽ nhuốm đỏ máu tươi!',
    stats: { damage: 9, toughness: 8, mobility: 7, crowdControl: 6, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Phong Ấn Đoạt Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7cd9b58e1e970271f44dc228c6e26903658d3631467ef1-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Đánh trúng kẻ địch từ 4 hướng (trước, sau, trái, phải) sẽ giải trừ phong ấn thanh kiếm: Tăng tốc đánh, nhận lá chắn khổng lồ và chuyển toàn bộ đòn đánh thường thành SÁT THƯƠNG CHUẨN.',
        comboTip: 'Di chuyển vòng quanh mục tiêu để chém vỡ cả 4 hướng phong ấn mở khóa trạng thái đao chuẩn.'
      },
      {
        slot: 'skill1',
        name: 'Đao Khí Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8c0817f6168d5f00a608560cbdec891e658d3644a84361-1.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung đao chém ra luồng đao khí hình nón gây sát thương và làm chậm kẻ địch. Khi đã giải ấn, chiêu 1 được gồng tụ phóng ra nhát chém sát thương chuẩn cực mạnh và miễn khống.',
        comboTip: 'Sau khi giải ấn phong ấn thành công, gồng chiêu 1 để chém một nhát sát thương chuẩn quét sạch đối phương.'
      },
      {
        slot: 'skill2',
        name: 'Phục Ma Đao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2e2b94c4fcace09d3572a62527d454df658d362a164811-1.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt tới chém xoay vòng gây sát thương vật lý lên kẻ địch xung quanh, đồng thời kích hoạt giải trừ 1 hướng phong ấn gần nhất.',
        comboTip: 'Dùng chiêu 2 để lướt qua người kẻ địch và lập tức chém vỡ hướng phong ấn phía sau lưng chúng.'
      },
      {
        slot: 'ultimate',
        name: 'Thập Tự Trảm Quyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/82f13998234732299acdfc3887efeb8d658d364f9a90e1-1.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Tachi bay lên không trung không thể bị chọn làm mục tiêu chém ra hai vệt đao hình chữ thập, sau đó đáp xuống gây sát thương chuẩn diện rộng và LẬP TỨC GIẢI TRỪ TOÀN BỘ PHONG ẤN.',
        comboTip: 'Chiêu cuối giúp giải ấn lập tức mà không cần di chuyển chém 4 hướng, bật ngay khi muốn dồn sát thương khẩn cấp.'
      }
    ],
    lore: `Chiến binh lang thang mang thanh kiếm ma quỷ bị phong ấn nhiều tầng xuất thân từ Đảo Sương Mù phương đông. Tachi chiến đấu để áp chế con quỷ trong thanh kiếm, luôn tìm kiếm những đối thủ kiệt xuất để trui rèn ý chí sắt đá. Lưỡi đao của anh một khi giải khai phong ấn sẽ biến thành cơn lốc sát thương chuẩn hủy diệt.`,
    battleTips: [
      'Tập luyện thao tác di chuyển mượt mà để phá vỡ 4 góc phong ấn trong thời gian ngắn nhất.',
      'Chiêu cuối giúp bạn né được các đòn hiểm và mở phong ấn ngay lập tức, cực kỳ hữu dụng trong giao tranh tổng.',
      'Lên trang bị nửa công nửa thủ để vừa trâu bò vừa chém sát thương chuẩn bào mòn đối phương.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['airi', 'ryoma', 'aoi', 'yan', 'murad']
  },

  {
    id: 'aoi',
    name: 'Aoi',
    title: 'Long Thảo Thần Nữ',
    factionId: 'dao_suong_mu',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f1db425eba8ea88e5d4d8427c1706bcf6100183de1cc11.jpeg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/903116d41657ef05bd406f336674d7166100211c25e9f1.png',
    quote: 'Móng vuốt rồng này sẽ đưa ta bay lượn qua mọi đỉnh ngọn cây và tước đoạt sinh mệnh của ngươi!',
    stats: { damage: 10, toughness: 4, mobility: 10, crowdControl: 7, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Long Lực Bộc Phát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d090723f6839411cd883b00a59e6b0e5610003228d5b91-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi khi dùng kỹ năng trúng đích, Aoi tích lũy điểm Long Lực (tối đa 4 điểm). Đòn đánh thường kế tiếp lướt tới vồ lấy mục tiêu gây thêm sát thương và tăng tầm đánh.',
        comboTip: 'Các đòn đánh thường nội tại giúp Aoi đu bám mục tiêu liên tục không cho kẻ địch chạy thoát.'
      },
      {
        slot: 'skill1',
        name: 'Long Trảo Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/03cf07846d820b35c5807245d2d162b5610004030ecb01.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung đôi móng vuốt rồng chém về phía trước gây sát thương và nhận lá chắn. Nếu đang trong trạng thái đu dây chiêu 2, lao xuống hất tung kẻ địch.',
        comboTip: 'Dùng chiêu 1 trong lúc đang bay đu dây để đáp đất hất tung diện rộng mở màn ám sát.'
      },
      {
        slot: 'skill2',
        name: 'Long Trảo Đu Dây',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/934f022f6377ad5e3528a1607d3b917c610004fe7e68f1.png',
        cooldown: '12.0s (Tích trữ 2 lần)',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Bắn móng vuốt cắm vào địa hình vách tường để kéo người bay tới hoặc bay xoay vòng quanh điểm cắm móng vuốt, tích lũy tốc độ và nộ khí cực lớn.',
        comboTip: 'Kỹ năng làm nên thương hiệu của Aoi: đu dây vượt nửa bản đồ trong chớp mắt và vòng qua dàn chắn của địch.'
      },
      {
        slot: 'ultimate',
        name: 'Long Diệt Tuyệt Sát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/56979016c5face439d6e9312fbb2de8b610005ba6d24e1.png',
        cooldown: '35.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Aoi phi thân bay lượn lên không trung không thể bị chọn làm mục tiêu, quét móng vuốt gây sát thương liên tiếp rồi lộn nhào lùi về sau bắn ra luồng năng lượng dứt điểm.',
        comboTip: 'Dùng chiêu cuối để né sát thương và khống chế sau khi đã dồn combo, sau đó lùi về an toàn.'
      }
    ],
    lore: `Cô thiếu nữ nhẫn giả thiên tài của Đảo Sương Mù phương đông, người kế thừa chiếc vuốt rồng thiêng liêng của Thần Long. Aoi có tính cách nhanh nhẹn, hoạt bát và lòng quả cảm vô song. Với đôi vuốt rồng thần kỳ, nàng bay lượn trên ngọn cây xuyên qua các vách núi hiểm trở, trở thành cơn ác mộng rình rập từ trên cao đối với quân thù.`,
    battleTips: [
      'Aoi là một trong những sát thủ có độ cơ động và biến ảo cao nhất Athanor nhờ kỹ năng đu dây chiêu 2.',
      'Luyện tập cắm móng vuốt vào các góc tường chuẩn xác để xoay vòng lấy gia tốc bay thẳng vào chủ lực địch.',
      'Chiêu cuối giúp Aoi hoàn toàn bất tử trong 1.5 giây, hãy dùng để né các chiêu khống chế chí mạng.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thương Xuyên Phá', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['airi', 'ryoma', 'tachi', 'yan', 'murad']
  },

  {
    id: 'dolia',
    name: 'Dolia',
    title: 'Tiên Cá Đại Dương',
    factionId: 'hai_linh_tran',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15900s.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/15900.jpg',
    quote: 'Giai điệu của đại dương sẽ làm tươi mới mọi linh hồn và thức tỉnh sức mạnh tiềm ẩn!',
    stats: { damage: 5, toughness: 6, mobility: 8, crowdControl: 8, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Tiên Cá Lướt Sóng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/Remove-bg.ai_1720691341447.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi đi vào khu vực có nước (sông hoặc vũng nước chiêu 2), Dolia biến thành hình thái tiên cá: Tăng tốc chạy, hồi phục máu và năng lượng liên tục không cần về tế đàn.',
        comboTip: 'Luôn di chuyển dọc theo sông để có tốc độ chạy tối đa và hồi phục đầy ắp năng lượng.'
      },
      {
        slot: 'skill1',
        name: 'Khúc Hát Đại Dương',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/Remove-bg.ai_1720691340115.png',
        cooldown: '7.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Cất tiếng hát tạo 4 đợt sóng âm lan tỏa ra xung quanh. Đợt sóng thứ 4 gây sát thương phép lớn và làm choáng hoặc đẩy lùi kẻ địch.',
        comboTip: 'Tiếng hát sóng âm lan tỏa cực rộng, dùng để check bụi và làm chậm đối thủ từ xa.'
      },
      {
        slot: 'skill2',
        name: 'Vũ Điệu Lạc Nước',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/Remove-bg.ai_1720691338833.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Nhảy lướt tới một vị trí tạo ra một vũng nước đại dương lớn. Đồng minh đứng trong vũng nước được hồi máu, bản thân Dolia lập tức biến thành người cá.',
        comboTip: 'Tạo vũng nước ngay dưới chân đồng đội trong giao tranh để liên tục hồi máu cho cả đội.'
      },
      {
        slot: 'ultimate',
        name: 'Thiên Lại Chi Âm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/Remove-bg.ai_1720691343045.png',
        cooldown: '45.0s',
        energyCost: '100',
        damageType: 'Hỗ trợ',
        description: 'Dolia cất tiếng hát liên kết với một tướng đồng minh chỉ định: LẬP TỨC LÀM MỚI TOÀN BỘ THỜI GIAN HỒI CHIÊU CUỐI CỦA ĐỒNG MINH ĐÓ! Nếu tự dùng, làm mới chiêu của bản thân.',
        comboTip: 'Làm mới chiêu cuối cho các đồng đội có chiêu cuối hủy diệt như Ilumia, Maloch, Tulen, Yorn để họ xả chiêu 2 lần liên tiếp.'
      }
    ],
    lore: `Nàng tiên cá xinh đẹp mang giọng hát ma thuật chữa lành từ đại dương sâu thẳm phương đông. Dolia từng cứu chàng thiếu niên Hainuo khỏi cơn bão biển và giữa họ nảy sinh tình cảm sâu đậm vượt qua sự khác biệt giống loài. Nàng bước lên cạn mang giai điệu của biển khơi trợ giúp các đồng minh chống lại tai ương bóng tối.`,
    battleTips: [
      'Chiêu cuối của Dolia là kỹ năng độc nhất vô nhị giúp đồng đội tung 2 lần chiêu cuối liên tiếp trong giao tranh.',
      'Hãy chọn mục tiêu kết nối cẩn thận: ưu tiên các pháp sư hoặc đấu sĩ có chiêu cuối diện rộng mạnh mẽ.',
      'Đứng trong vũng nước chiêu 2 giúp Dolia hồi phục liên tục mà không bao giờ phải biến về nhà hồi máu.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Băng', 'Khiên Huyền Thoại', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['hainuo', 'yue', 'airi', 'tulen', 'ilumia']
  },

  {
    id: 'hainuo',
    name: 'Hainuo',
    title: 'Thần Tử Vận Mệnh',
    factionId: 'hai_linh_tran',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/04/heino-2.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/04/heino.jpg',
    quote: 'Dòng chảy số phận có thể xoay vần, và ta nắm giữ quyền năng đảo ngược thời gian!',
    stats: { damage: 9, toughness: 7, mobility: 8, crowdControl: 7, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Vận Mệnh Song Hành',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/04/heino-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Hainuo có hai dạng chiến đấu: Tầm Xa (bắn đạn kiếm ma thuật) và Cận Chiến (vung kiếm năng lượng nhận thêm giáp và hồi máu khi chém trúng địch).',
        comboTip: 'Chuyển sang cận chiến khi cần solo tay đôi trâu bò hoặc chuyển sang tầm xa để cấu rỉa an toàn.'
      },
      {
        slot: 'skill1',
        name: 'Mệnh Kiếm Phán Quyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/04/heino-3.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Phóng kiếm ma thuật đánh dấu ấn lên kẻ địch gây sát thương phép. Tái kích hoạt hoặc ném thêm kiếm sẽ gây thêm sát thương dồn lên các mục tiêu dính ấn.',
        comboTip: 'Đánh dấu nhiều mục tiêu bằng chiêu 1 để các phát kiếm kế tiếp nảy sát thương lan cực mạnh.'
      },
      {
        slot: 'skill2',
        name: 'Thời Không Biến Hoán',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/04/heino-6.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Lướt tới một vị trí. Nếu xung quanh có tướng địch, Hainuo chuyển sang Dạng Cận Chiến; nếu không có tướng địch, chuyển sang Dạng Tầm Xa.',
        comboTip: 'Chủ động lướt lại gần tướng địch để kích hoạt dạng cận chiến nhận lượng giáp và máu khổng lồ.'
      },
      {
        slot: 'ultimate',
        name: 'Đảo Ngược Thời Gian',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/04/heino-4.png',
        cooldown: '50.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Sau khi vận sức, Hainuo ĐẢO NGƯỢC THỜI GIAN trở về vị trí và lượng máu của bản thân cách đây vài giây, ĐỒNG THỜI HỒI PHỤC LẠI MÁU CHO TRỤ NHÀ nếu đứng gần trụ!',
        comboTip: 'Chiêu cuối giúp hồi sinh lại cây máu của chính mình và sửa cả trụ nhà đồng minh bị phá.'
      }
    ],
    lore: `Người thừa kế tộc Thần Tử Vận Mệnh cổ xưa tại phương đông, người nắm giữ bánh xe thời gian và tri mệnh thần trượng. Hainuo từng được nàng tiên cá Dolia cứu mạng trong một trận bão biển định mệnh. Chàng sở hữu khả năng kỳ diệu đảo ngược thời gian và phục hưng sự sống, bảo hộ bình yên cho muôn dân trước sự tàn phá của thời gian và bóng tối.`,
    battleTips: [
      'Hainuo dạng cận chiến cực kỳ trâu bò và hồi máu liên tục, có thể câu kéo thời gian cho cả đội.',
      'Chiêu cuối có thể sửa máu trụ nhà, rất giá trị trong các pha thủ nhà chính trước đợt lính mega.',
      'Phối hợp ăn ý cùng Dolia để được hồi lại chiêu cuối đảo ngược thời gian 2 lần liên tiếp.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Mặt Nạ Berith', 'Trượng Băng', 'Vương Miện Hecate', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['dolia', 'yue', 'yan', 'murad', 'dirak']
  },

  {
    id: 'murad',
    name: 'Murad',
    title: 'Lãng Khách Thời Không',
    factionId: 'sa_mac_helios',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7dba55e7f433ab78ac6bd2cdfeec13495983e122346461.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e3db6ff94f1becebd8f742e611ed285f5983e664388801.jpg',
    quote: 'Thời gian và không gian chỉ là đồ chơi dưới lưỡi kiếm cát của ta!',
    stats: { damage: 10, toughness: 3, mobility: 10, crowdControl: 6, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Hồn Khí Sa Mạc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/863f1aba1f10c9a64ac30680540653a05983e1c9496ea1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Đòn đánh thường liên tục thứ 4 trong 3 giây giúp Murad tăng công vật lý và GIẢI PHÓNG PHONG ẤN CHO CHIÊU CUỐI ẢO ẢNH TRẢM trong 5 giây.',
        comboTip: 'Đánh quái rừng hoặc lính 4 cái để mở khóa chiêu cuối trước khi lướt vào xả sát thương lên tướng địch.'
      },
      {
        slot: 'skill1',
        name: 'Tàn Ảnh Đao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/314a4d54b1110b401c608bb567c489f35983e237e3bff1.png',
        cooldown: '8.0s (3 giai đoạn)',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Lướt lần 1 và lần 2 gây sát thương và làm choáng 0.5s kẻ địch. Lần 3 bấm lập tức giật ngược trở về vị trí tàn ảnh ban đầu.',
        comboTip: 'Để lại bóng ở nơi an toàn (trong bụi), lướt 2 nhịp vào giao tranh rồi giật bóng về không tốn một giọt máu.'
      },
      {
        slot: 'skill2',
        name: 'Vô Ảnh Vực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8640f2d55ca4720d721db33c196690905983e5d69d99f1.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Tạo một vùng sa mạc thời không. Trong lúc vẽ vòng, Murad KHÔNG THỂ BỊ CHỌN LÀM MỤC TIÊU. Kẻ địch chạm vào viền vòng bị trừ lượng lớn giáp và làm chậm 90%.',
        comboTip: 'Canh viền chiêu 2 chạm vào người đối thủ để trừ sạch giáp vật lý trước khi tung chiêu cuối.'
      },
      {
        slot: 'ultimate',
        name: 'Ảo Ảnh Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4095e69eb302efb640d9c20759eaeac65983e63a25d431.png',
        cooldown: '12.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Murad hóa thành ảo ảnh chém 5 nhát kiếm siêu tốc vào toàn bộ kẻ địch trong vùng. Trong suốt thời gian chém, anh hoàn toàn MIỄN NHIỄM MỌI SÁT THƯƠNG VÀ KHỐNG CHẾ.',
        comboTip: 'Combo chuẩn: Tích 4 đòn đánh thường -> Chiêu 1 lướt 2 lần vào tâm giao tranh -> Chiêu 2 trừ giáp -> Chiêu cuối xả 5 nhát kiếm -> Chiêu 1 giật về bóng an toàn.'
      }
    ],
    lore: `Hoàng tử của Vương Quốc Sa Mạc Helios từng hưng thịnh rực rỡ. Khi vương quốc bị Azzen'Ka và quái vật sa mạc tàn phá cướp mất Thần Khí Thời Không, Murad khoác lên mình tấm khăn choàng lãng khách, cầm thanh kiếm cát lưu vong tìm cách giành lại di sản của tổ tiên và phục hưng giang sơn cùng Yena.`,
    battleTips: [
      'Murad phụ thuộc vào việc tích điểm nội tại để mở chiêu cuối; hãy bảo vệ các bãi quái rừng gần đường làm bàn đạp.',
      'Chiêu 2 và Chiêu cuối đều có trạng thái không thể bị chọn làm mục tiêu; hãy dùng để né các chiêu sát thương tử thần.',
      'Cảnh giác kẻ địch phục kích tại vị trí tàn ảnh bóng ban đầu của chiêu 1.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thương Xuyên Phá', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['yena', 'azzen_ka', 'florentino', 'allain']
  },

  {
    id: 'azzen_ka',
    name: "Azzen'Ka",
    title: 'U Hồn Sa Mạc',
    factionId: 'sa_mac_helios',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/12700_B51-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/10/12700_B51.jpg',
    quote: 'Cát bụi sẽ nuốt chửng linh hồn ngươi và chôn vùi ký ức ngàn năm!',
    stats: { damage: 8, toughness: 4, mobility: 3, crowdControl: 10, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Bẫy Cát Hóa Đá',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Kỹ năng trúng đích gán 1 điểm dấu ấn cát (tối đa 3 điểm). Khi tích đủ 3 điểm, kẻ địch BỊ HÓA ĐÁ TRONG 1 GIÂY và phải gánh chịu sát thương phép phát nổ.',
        comboTip: 'Xả liên tiếp các kỹ năng vào đám đông kẻ địch để kích hoạt hóa đá liên hoàn cả đội hình.'
      },
      {
        slot: 'skill1',
        name: 'Cồn Cát Hung Dữ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4-1.png',
        cooldown: '7.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Triệu hồi một cột cát phun trào từ lòng đất sau 0.5 giây, gây sát thương phép và hất tung kẻ địch trong 1 giây.',
        comboTip: 'Đặt cồn cát đón đầu bước chân của kẻ địch hoặc đặt ngay dưới chân đối thủ đang bị hóa đá.'
      },
      {
        slot: 'skill2',
        name: 'Bụi Cát Tà Ác',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3-1.png',
        cooldown: '6.0s',
        energyCost: '65',
        damageType: 'Phép',
        description: 'Ném ra một quả cầu cát nảy qua lại giữa các kẻ địch (tối đa 6 lần nảy), gây sát thương phép và gắn điểm dấu ấn hóa đá trên mỗi lần nảy.',
        comboTip: 'Khi có từ 2 kẻ địch đứng cạnh nhau, chiêu 2 sẽ nảy liên tục kích hoạt hóa đá lập tức.'
      },
      {
        slot: 'ultimate',
        name: 'Sa Mạc Bão Tố',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2-1.png',
        cooldown: '35.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Bắn ra một cơn bão cát khổng lồ lăn về phía trước và dừng lại khi chạm tướng địch, tạo thành một vũng lầy cát cuốn làm chậm cực mạnh và liên tục hóa đá kẻ địch bên trong.',
        comboTip: 'Chặn kín lối đi hẹp ở hang Rồng hoặc đường sông để bão cát nuốt trọn toàn bộ đội hình đối thủ.'
      }
    ],
    lore: `Vị thần cát cổ xưa ngự trị nơi hoang mạc Sa Mạc Helios sâu thẳm. Azzen'Ka đã chôn vùi vương triều sa mạc của cha ông Murad dưới biển cát vô tận để cướp lấy nguồn năng lượng thời không. Với linh hồn bất tử hòa lẫn trong từng hạt cát, hắn gieo rắc bão cát chết chóc và biến mọi kẻ xâm phạm thành những bức tượng đá vô hồn.`,
    battleTips: [
      'Azzen\'Ka là chúa tể khống chế diện rộng trong không gian hẹp; hãy mời gọi giao tranh ở hang Tà Thần/Rồng.',
      'Sử dụng chiêu 2 nảy liên tục giữa lính và tướng để cấu rỉa và tích stack hóa đá an toàn từ xa.',
      'Lên Trượng Băng và Mặt Nạ Berith để bão cát chiêu cuối trở thành đầm lầy tử thần làm chậm 90% không thể chạy thoát.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Băng', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['murad', 'yena', 'bijan', 'aleister', 'mganga']
  },

  {
    id: 'yena',
    name: 'Yena',
    title: 'Vũ Cơ Bán Nguyệt',
    factionId: 'sa_mac_helios',
    role: 'Đấu Sĩ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/61fa157164bf9d99e65bf40b802fb5745cfe1cd72c4671.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/70ea305ed24716682532486c9625a8315cfe1cf6922681.jpg',
    quote: 'Vũ điệu của ta kết thúc cũng là lúc sinh mệnh ngươi dừng lại.',
    stats: { damage: 9, toughness: 7, mobility: 9, crowdControl: 8, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Bán Nguyệt Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/843e42c9e6559bd076697edb1ca0289a5cfe1e17037891.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Dạng Loan Đao (song đao): Tăng 40 tốc chạy, đánh trúng 5 lần gây câm lặng và làm chậm mục tiêu. Dạng Viên Đao (đại đao): Tăng mạnh công vật lý, khi tung chiêu được MIỄN NHIỄM MỌI KHỐNG CHẾ và giảm 50% sát thương gánh chịu.',
        comboTip: 'Gắn đủ 5 dấu ấn nguyệt luân để làm câm lặng đối thủ trước khi chuyển sang đại đao khống chế liên hoàn.'
      },
      {
        slot: 'skill1',
        name: 'Toái Nguyệt Trảm / Tụ Khí Bạt Đao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/abd8ee3ebabd4c68ef78f23333cd642e5cfe1ebde3e391.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Dạng Loan Đao: Lướt tới chém xoay tròn, nếu trúng tướng hoặc lính được lướt thêm lần thứ hai miễn phí. Dạng Viên Đao: Tụ lực chém một nhát đại đao cực mạnh gây sát thương khổng lồ và hất tung kẻ địch.',
        comboTip: 'Lướt trúng mục tiêu để kích hoạt lướt lần 2, tích dấu ấn cực nhanh.'
      },
      {
        slot: 'skill2',
        name: 'Luân Vũ Đao / Tứ Châm Đao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1f2b38047938b69bc2d5b127d317bc035cfe2049d27681.png',
        cooldown: '12.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Dạng Loan Đao: Phóng ra đôi song đao xoay tròn tại điểm chỉ định liên tục gây sát thương và làm chậm kẻ địch. Dạng Viên Đao: Vung đại đao chém liên hoàn 4 nhát đẩy lùi liên tục mục tiêu theo hướng chỉ định.',
        comboTip: 'Dùng chiêu 2 đại đao để đẩy đối thủ vào trụ hoặc đẩy ngược về phía đồng đội dồn sát thương.'
      },
      {
        slot: 'ultimate',
        name: 'Mãn Nguyệt Trảm / Hoán Đao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/605c29916ce0ffee01a7cfbb4a240da35cfe2083765691.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Ghép hoặc tách đôi Bán Nguyệt Đao luân chuyển mượt mà giữa dạng Loan Đao (song đao) và Viên Đao (đại đao), gây sát thương diện rộng và tăng mạnh tốc đánh hoặc công vật lý.',
        comboTip: 'Luân phiên hoán đổi vũ khí liên tục để vừa sở hữu độ cơ động sát thủ, vừa có độ chống chịu miễn khống như một đấu sĩ hàng đầu.'
      }
    ],
    lore: `Từng là đệ nhất vũ cơ của hoàng cung Sa Mạc Helios. Khi bạo chúa cát Azzen'Ka nuốt chửng vương quốc và tàn sát hoàng tộc, nàng cởi bỏ xiêm y lụa là, cầm đôi Bán Nguyệt Đao đứng lên lãnh đạo nghĩa quân sa mạc kháng chiến. Nàng cùng Hoàng tử Murad chia sẻ lời thề ước sinh tử, quyết tâm giải phóng quê hương khỏi biển cát tử thần.`,
    battleTips: [
      'Combo chuẩn: Dạng Song Đao (Chiêu 2 ném làm chậm -> Chiêu 1 lướt 2 lần kích hoạt câm lặng) -> Chiêu cuối đổi sang Đại Đao -> Chiêu 2 đẩy lùi 4 nhát -> Chiêu 1 tụ lực chém kết liễu.',
      'Tận dụng trạng thái miễn khống chế và giảm 50% sát thương của chiêu 1 và chiêu 2 dạng đại đao để ao nhầy các chiêu khống chế cứng của kẻ địch.',
      'Yena rất mạnh trong các pha solo đường Tà Thần và bắt lẻ xạ thủ/pháp sư chủ lực.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huy Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['murad', 'azzen_ka', 'florentino', 'airi']
  },

  {
    id: 'trieu_van',
    name: 'Triệu Vân',
    title: 'Kỵ Sĩ Rồng',
    factionId: 'long_chi_quoc',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d7088075d6e144e11f476782718320865d256521539c41.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6ee0ca6c7839effd7b244bbe29f50a9e5d256414a590a1.jpg',
    quote: 'Thương thần xuất kích, vạn quân không kẻ nào có thể ngăn cản bước chân ta!',
    stats: { damage: 9, toughness: 8, mobility: 8, crowdControl: 6, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Long Hồn Tích Lũy',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c4c30e2bbb92f6451616aad727d7e4f6583f91b76395c1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi điểm hạ gục hoặc phụ giúp tăng vĩnh viễn cho Triệu Vân một lượng công vật lý và máu tối đa (cộng dồn tối đa 20 tầng).',
        comboTip: 'Tích cực tham gia giao tranh sớm để nhanh chóng đạt tối đa 20 điểm nội tại biến Triệu Vân thành cỗ máy chiến tranh.'
      },
      {
        slot: 'skill1',
        name: 'Long Huyết Tăng Tốc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b423b60ace8fa24f232e0ea0b93139c2583f91dbc16a21.png',
        cooldown: '7.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'LẬP TỨC GIẢI TRỪ MỌI HIỆU ỨNG KHỐNG CHẾ, tăng 80% tốc chạy giảm dần và cường hóa đòn đánh thường kế tiếp gây thêm sát thương và làm chậm.',
        comboTip: 'Dùng như một chiêu Thanh Tẩy miễn phí để thoát khỏi choáng của đối phương hoặc truy đuổi mục tiêu.'
      },
      {
        slot: 'skill2',
        name: 'Long Hống Quét Sạch',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a926a11ef79ed1dceb0cba3b8a492a72583f91f585a131.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Gầm lên quét ngọn giáo xung quanh gây sát thương vật lý, tăng 200% TỐC ĐỘ ĐÁNH và hút máu cực lớn trong 3.5 giây.',
        comboTip: 'Bật chiêu 2 giúp Triệu Vân đâm giáo liên thanh như máy xỉa răng, hồi máu cực nhiều.'
      },
      {
        slot: 'ultimate',
        name: 'Long Kích Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/df3478164b28aa86cd357861f3bce209583f9214701d31.png',
        cooldown: '24.0s',
        energyCost: '80',
        damageType: 'Chuẩn',
        description: 'Nhảy bổ vào dộng ngọn giáo xuống đất gây sát thương chuẩn và hất tung mục tiêu. Trong 5 giây kế tiếp, MỌI ĐÒN ĐÁNH VÀ KỸ NĂNG CỦA TRIỆU VÂN ĐỀU KÈM THÊM SÁT THƯƠNG CHUẨN theo % máu tối đa.',
        comboTip: 'Bổ chiêu cuối trước rồi bật chiêu 2 đâm liên thanh để kích hoạt sát thương chuẩn liên tục theo phần trăm máu.'
      }
    ],
    lore: `Danh tướng dũng mãnh tuyệt trần đến từ phương đông, một mình một ngựa xông pha muôn trùng vây hãm cứu ấu chúa. Triệu Vân mang trong mình long hồn quật khởi cùng ngọn thương thép bách chiến bách thắng. Anh được các thế lực tôn kính như một mẫu mực của lòng trung nghĩa kiên trinh và sự quả cảm bất khuất.`,
    battleTips: [
      'Chiêu 1 có khả năng thanh tẩy mọi khống chế, hãy giữ lại khi bị đối phương khống chế để phản công bất ngờ.',
      'Chiêu cuối kích hoạt sát thương chuẩn theo % máu, giúp Triệu Vân solo thắng mọi đấu sĩ và đỡ đòn.',
      'Lên Rìu Leviathan và Phức Hợp Kiếm để vừa trâu bò vừa có sát thương dồn cực khỏe.'
    ],
    recommendedItems: ['Rìu Leviathan', 'Giày Kiên Cường', 'Thương Longinus', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['lu_bo', 'dieu_thuyen', 'arthur', 'qi', 'ryoma']
  },

  {
    id: 'ming',
    name: 'Ming',
    title: 'Tiên Nhân Bói Toán',
    factionId: 'long_chi_quoc',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/58ba051be8f5ab56c0ea840ceb29c489658d529e847cf1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/94b141b6a7a9f000afd4997de18796e1658d53c7eda711.jpg',
    quote: 'Sợi tơ duyên này kết nối sinh mệnh và vận mệnh của hai ta!',
    stats: { damage: 6, toughness: 6, mobility: 6, crowdControl: 6, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Chiêm Tinh Quyền',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/00_9435406.webp',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Mỗi đòn đánh thường thứ 3 của Ming gây sát thương phép và hồi máu cho bản thân cùng đồng minh đang được liên kết.',
        comboTip: 'Đánh thường liên tục vào lính hoặc quái để hồi phục máu cho đồng minh được dây liên kết.'
      },
      {
        slot: 'skill1',
        name: 'Sợi Xích Vận Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ming1.png',
        cooldown: '3.0s',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Phóng ra sợi tơ ma thuật liên kết với mục tiêu: Nếu là đồng minh, tăng mạnh công vật lý/phép và tốc chạy; nếu là kẻ địch, trừ công, làm chậm và gây sát thương liên tục.',
        comboTip: 'Luôn duy trì dây xích liên kết với xạ thủ hoặc sát thủ chủ lực của đội bạn.'
      },
      {
        slot: 'skill2',
        name: 'Hoán Chuyển Quẻ Cát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ming2.png',
        cooldown: '3.0s',
        energyCost: '30',
        damageType: 'Hỗ trợ',
        description: 'Chuyển đổi thuộc tính của sợi xích: Dây Đỏ (tăng công vật lý và công phép) sang Dây Vàng (tăng lượng lớn giáp và kháng phép).',
        comboTip: 'Dùng Dây Đỏ khi tấn công và chuyển sang Dây Vàng khi đồng minh đang bị dồn sát thương.'
      },
      {
        slot: 'ultimate',
        name: 'Đoạt Mệnh Cải Vận',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/33_9927194.webp',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Chuẩn',
        description: 'Sau 0.75 giây vận sức, Ming hy sinh một phần máu của bản thân để HỒI PHỤC LƯỢNG MÁU CHUẨN CỰC KHỦNG cho đồng minh liên kết (hoặc gây sát thương chuẩn khổng lồ nếu xích kẻ địch).',
        comboTip: 'Bơm đầy ngay tức khắc hơn nửa cây máu cho xạ thủ sắp tử trận trong giao tranh.'
      }
    ],
    lore: `Bậc thầy chiêm tinh bói toán thần bí đến từ hoàng cung phương đông cổ đại. Ming nắm giữ pháp khí la bàn chiêm tinh có thể nhìn thấu sợi dây vận mệnh ràng buộc giữa sinh mệnh muôn loài. Chàng đồng hành cùng các chiến binh quả cảm, dùng sợi xích pháp thuật để cường hóa sức mạnh và cải biến tử cục thành thắng lợi.`,
    battleTips: [
      'Ming là trợ thủ bảo kê xạ thủ (như Yorn, Valhein, Capheny) bá đạo nhất game, biến xạ thủ thành quái vật hủy diệt.',
      'Chuyển sang Dây Vàng (chiêu 2) để xạ thủ của bạn nhận hàng trăm giáp khi bị sát thủ địch lao vào.',
      'Chiêu cuối tiêu tốn máu của Ming nhưng bản thân sẽ tự hồi phục lại nhanh chóng sau vài giây.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Mặt Nạ Berith', 'Giáp Gaia', 'Khiên Huyền Thoại', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['yue', 'erin', 'trieu_van', 'lu_bo', 'dolia']
  },

  {
    id: 'erin',
    name: 'Erin',
    title: 'Nàng Tiên Ánh Sáng',
    factionId: 'dao_suong_mu',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a1d3b1c36a643cb6d58c704139a2c24d65af7afac34cb1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d283b5fb9c1b8f7d86a8b189e123361765af7b2c55e681.jpg',
    quote: 'Ánh trăng và cánh hoa tinh linh sẽ dẫn lối cho những mũi tên thần!',
    stats: { damage: 9, toughness: 4, mobility: 8, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Vũ Điệu Tinh Linh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Remove-bg.ai_1718794259849.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Tất cả đòn đánh thường của Erin ĐỀU GÂY SÁT THƯƠNG PHÉP. Mỗi đòn đánh tích nộ, khi đầy nộ giúp Erin lướt nhanh một quãng ngắn và cường hóa phát bắn kế tiếp xuyên thấu.',
        comboTip: 'Liên tục vừa bắn vừa lướt theo nhịp đòn đánh nội tại để thả diều đối thủ mượt mà.'
      },
      {
        slot: 'skill1',
        name: 'Nguyệt Diệp Tiễn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Remove-bg.ai_1718794258394.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Bắn ra một mũi tên lá ánh trăng nổ bung thành vòng tròn hoa gây sát thương phép và làm chậm kẻ địch chạm vào rìa hoa 50%.',
        comboTip: 'Dùng để cấu rỉa máu từ xa và hạn chế đường di chuyển của sát thủ địch.'
      },
      {
        slot: 'skill2',
        name: 'Hàn Nguyệt Vũ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Remove-bg.ai_1718794256820.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Hỗ trợ',
        description: 'Lập tức làm đầy thanh nộ nội tại, nhận miễn nhiễm làm chậm và tăng 40% tốc đánh trong 3 giây.',
        comboTip: 'Bấm chiêu 2 để lướt ngay lập tức né chiêu và xả đạn phép với tốc độ ánh sáng.'
      },
      {
        slot: 'ultimate',
        name: 'Tinh Hoa Tỏa Sáng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Remove-bg.ai_1718794236406.png',
        cooldown: '30.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Tự động tích lũy các tia nguyệt quang (tối đa 18 tia). Kích hoạt để bay lướt và bắn liên tiếp hàng loạt tia nguyệt quang đuổi theo kẻ địch gây sát thương phép kinh hoàng.',
        comboTip: 'Bật chiêu cuối xả trọn 18 tia nguyệt quang vừa di chuyển vừa bốc hơi mục tiêu trong tích tắc.'
      }
    ],
    lore: `Nàng tiên tinh linh của tộc Elf ánh trăng phương đông, người sở hữu cây cung ánh sáng đan dệt từ tơ trăng và lá rừng thiêng. Erin có tính cách hồn nhiên, yêu thích tự do và âm nhạc. Nàng đồng hành cùng Ming và các anh hùng phương đông, mang đôi cánh thần tiên thắp sáng những vùng hoang mạc u tối.`,
    battleTips: [
      'Erin là xạ thủ thuần sát thương phép, khiến kẻ địch lên giáp vật lý trở nên hoàn toàn vô nghĩa.',
      'Tích lũy tối đa điểm lông vũ nguyệt quang trước giao tranh để chiêu cuối bắn ra đủ 18 tia.',
      'Lên Gươm Tận Thế, Thập Tự Kiếm và Vương Miện Hecate để tối ưu hóa tốc đánh và sát thương phép.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Thập Tự Kiếm', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['ming', 'yue', 'dolia', 'valhein', 'krixi']
  },

  {
    id: 'bill',
    name: 'Bill',
    title: 'Đấu Sĩ Rừng Sâu',
    factionId: 'dao_suong_mu',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/01/59900-2.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/01/59900-1.jpg',
    quote: 'Mặt đất sẽ rung chuyển dưới từng bước chân vững chãi của ta!',
    stats: { damage: 6, toughness: 10, mobility: 5, crowdControl: 9, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Bạch Thạch Cốt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/01/SeaTalk_IMG_20250124_115334.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi chịu sát thương vượt quá 10% máu tối đa trong 1 đòn đánh, Bill được nhận một lớp lá chắn bằng đá hấp thụ sát thương và tăng 30% giáp trong 4 giây.',
        comboTip: 'Nội tại tạo giáp liên tục giúp Bill trở thành bao cát chịu đòn cự phách cho cả đội.'
      },
      {
        slot: 'skill1',
        name: 'Đại Địa Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/01/SeaTalk_IMG_20250124_115341.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Nện cây cọc đá khổng lồ xuống đất tạo một rãnh nứt địa hình làm choáng 0.75 giây và gây sát thương vật lý lên tất cả kẻ địch trước mặt.',
        comboTip: 'Kỹ năng làm choáng diện rộng theo đường thẳng mở màn giao tranh tuyệt vời.'
      },
      {
        slot: 'skill2',
        name: 'Xung Kích Sơn Băng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/01/SeaTalk_IMG_20250124_115345.png',
        cooldown: '9.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Bill cuộn người lăn mạnh về phía trước húc văng tất cả kẻ địch cản đường và làm chậm 50% tốc chạy của chúng.',
        comboTip: 'Dùng để tiếp cận mở đường cho chiêu 1 và chiêu cuối giữ chân kẻ thù.'
      },
      {
        slot: 'ultimate',
        name: 'Thiên Địa Trấn Áp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/01/SeaTalk_IMG_20250124_115350.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Nhảy vọt lên cao rồi dậm sập mặt đất tạo thành một đấu trường đá khép kín trong 3.5 giây. Kẻ địch bị nhốt bên trong không thể thoát ra và chịu sát thương vật lý liên tục.',
        comboTip: 'Nhốt toàn bộ chủ lực địch vào trong đấu trường đá để đồng đội xả chiêu diện rộng hủy diệt.'
      }
    ],
    lore: `Chiến binh hộ vệ cự thạch sống tại các rặng núi đá giáp ranh vùng sương mù phương đông. Bill sở hữu thể chất khổng lồ tựa núi non cùng trái tim kiên định son sắt. Ông sử dụng cột đá thiên nhiên làm vũ khí, luôn đi đầu che chắn cho đồng đội và giữ vững ranh giới chống lại sự xâm lấn của bóng tối.`,
    battleTips: [
      'Chiêu cuối tạo lồng đá giữ chân không cho kẻ địch chạy thoát, hãy nhốt các tướng không có chiêu lướt.',
      'Sử dụng chiêu 2 lăn tới húc văng đối thủ về phía đội hình mình.',
      'Lên toàn bộ trang bị chống chịu như Giáp Gaia, Khiên Thất Truyền để tận dụng tối đa lượng máu nội tại.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Thất Truyền', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['wiro', 'gark', 'trieu_van', 'lu_bo', 'qi']
  },

  {
    id: 'gark',
    name: 'Gark',
    title: 'Ma Tượng Sa Mạc',
    factionId: 'dao_suong_mu',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/IMG-SQR-0200x0200-080150-ket-thuc.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_100333.jpg',
    quote: 'Những pho tượng cổ xưa vẫn canh giữ cát vàng từ thuở sơ khai!',
    stats: { damage: 6, toughness: 10, mobility: 4, crowdControl: 9, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Sa Tượng Hộ Thể',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103402.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi khi đứng yên hoặc dùng kỹ năng, Gark hóa cứng cơ thể thành sa thạch, tăng 40% kháng hiệu ứng khống chế và giảm 25% sát thương gánh chịu.',
        comboTip: 'Khả năng giảm sát thương tự nhiên giúp Gark đứng vững trước mọi hỏa lực dồn ép của đối phương.'
      },
      {
        slot: 'skill1',
        name: 'Cát Cuộn Nộ Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103407.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Gark đập hai tay xuống đất giải phóng vòng sóng cát cuốn hút tất cả kẻ địch xung quanh vào người và gây sát thương phép.',
        comboTip: 'Hút kẻ địch lại gần bản thân để chúng không thể tiếp cận các chủ lực của bạn.'
      },
      {
        slot: 'skill2',
        name: 'Tượng Cát Trấn Áp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103412.png',
        cooldown: '9.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Bắn ra cánh tay sa thạch tóm lấy một kẻ địch từ xa và kéo bản thân bay tới đè bẹp mục tiêu làm choáng trong 1 giây.',
        comboTip: 'Công cụ tiếp cận và khóa mục tiêu tầm xa rất lợi hại khi đi gank cùng đồng đội.'
      },
      {
        slot: 'ultimate',
        name: 'Bão Cát Thần Bí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103416.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Hóa thành pho tượng khổng lồ phát nổ bão cát cuốn tròn xung quanh trong 4 giây, liên tục làm chậm 80%, câm lặng và gây sát thương phép lên tất cả kẻ địch trong tầm ảnh hưởng.',
        comboTip: 'Lao vào tâm giao tranh bật chiêu cuối để câm lặng và làm chậm tê liệt toàn bộ đội hình đối thủ.'
      }
    ],
    lore: `Bức ma tượng sa thạch cổ đại được tạo nên từ ngàn năm trước bởi nền văn minh sa mạc huyền bí. Trải qua bao thăng trầm dâu bể, Gark thức tỉnh linh hồn để bảo vệ những di tích cổ xưa và nguồn nước ngầm quý giá khỏi sự tàn phá của quỷ dữ và những kẻ cướp mộ tham lam.`,
    battleTips: [
      'Gark là vị tướng đỡ đòn cực kỳ khó chịu với hiệu ứng câm lặng và hút kẻ địch liên tục.',
      'Sử dụng chiêu 2 kéo vào mục tiêu rồi lập tức bật chiêu cuối cản trở giao tranh của đối phương.',
      'Lên Mặt Nạ Berith và Trượng Băng để bão cát chiêu cuối thiêu đốt và làm chậm đối thủ tới cạn kiệt máu.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Mặt Nạ Berith', 'Khiên Thất Truyền', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['bill', 'wiro', 'azzen_ka', 'murad', 'bijan']
  },

  {
    id: 'wiro',
    name: 'Wiro',
    title: 'Rìu Thần Bão Tố',
    factionId: 'tu_do',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/61015ea8f83c0a833833297bb927ccd35be3c4834cd261.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/86f414b37cd13c697508282c15fa05805be3c49c7aa571.jpg',
    quote: 'Cây rìu thần 212 này sẽ trừng trị mọi kẻ ác và bảo vệ người dân vô tội!',
    stats: { damage: 7, toughness: 10, mobility: 5, crowdControl: 9, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: '212 Bất Tử Hồi Sinh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ecc03f4eaf6d4d648c978283265675125be3c56e447e11.png',
        cooldown: '90.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi chịu sát thương chí tử, Wiro KHÔNG BỊ CHẾT mà rơi vào trạng thái bất động phục hồi trong 4.5 giây, tạo 3 dấu ấn phong ấn xung quanh. Đồng minh giẫm lên cả 3 dấu ấn giúp Wiro lập tức sống lại đầy máu và gây nổ sát thương diện rộng.',
        comboTip: 'Báo hiệu cho đồng đội giẫm lên các dấu ấn chân để hồi sinh Wiro ngay giữa giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Rìu Thần Cường Hóa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/422c3790fb4c0f1b095ad46b38a84ee25be3c59f22a4e1.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Cường hóa 3 đòn đánh thường kế tiếp tăng mạnh sát thương, đòn thứ 3 sẽ dậm rìu hất tung kẻ địch trong 0.75 giây.',
        comboTip: 'Đòn đánh thứ 3 hất tung, dùng để ngắt các kỹ năng niệm chú nguy hiểm của đối phương.'
      },
      {
        slot: 'skill2',
        name: 'Càn Khôn Húc Đẩy',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d93ab64d1f2dc0e21acea5eb197eb22a5be3c60f360db1.png',
        cooldown: '10.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Wiro ủi mạnh về phía trước đẩy lùi tất cả kẻ địch. Nếu ủi kẻ địch va vào địa hình vách tường, chúng sẽ bị làm choáng trong 1 giây.',
        comboTip: 'Ủi đối thủ dính vào tường để gây choáng rồi bồi thêm chuỗi đòn chiêu 1 hất tung.'
      },
      {
        slot: 'ultimate',
        name: 'Cuồng Lôi Trảm Phạt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a2d1f0696fe65c174f293e7bef5fdd905be3c6b17b5fb1.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Wiro vận sức tích tụ sấm sét vào cây rìu thần rồi dộng cực mạnh xuống đất hất tung tất cả kẻ địch xung quanh lên không trung. Kẻ địch rơi xuống sẽ tạo sóng chấn động gây thêm sát thương lan.',
        comboTip: 'Vận sức tối đa kết hợp Tốc Biến nhảy vào tâm giao tranh để hất tung cả 5 tướng địch trong nháy mắt.'
      }
    ],
    lore: `Anh hùng hiệp nghĩa phương đông mang dòng máu huyền thoại Wiro Sableng 212. Với chiếc rìu thần mang số hiệu 212 và võ nghệ trượng nghĩa, Wiro luôn đứng về phía kẻ yếu, diệt trừ gian tà và ác quỷ trên khắp cõi Athanor. Tinh thần bất khuất giúp anh có thể hồi sinh mạnh mẽ ngay cả khi đối mặt với ranh giới của cái chết.`,
    battleTips: [
      'Combo mở giao tranh kinh điển: Vận sức chiêu cuối tối đa -> Tốc Biến vào giữa đội hình địch hất tung toàn bộ.',
      'Nội tại hồi sinh biến Wiro thành tiền tuyến cực kỳ lì lợm và an tâm mở giao tranh.',
      'Chiêu 2 có thể dùng để ủi kẻ địch bay ngược về trụ nhà đồng minh.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Thất Truyền', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['bill', 'gark', 'trieu_van', 'lu_bo', 'qi']
  },

  {
    id: 'flowborn',
    name: 'Flowborn',
    title: 'Dòng Chảy Vô Tận',
    factionId: 'tu_do',
    role: 'Xạ Thủ',
    secondaryRole: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/IMG-SQR-0200x0200-080150-ket-thuc.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_100333.jpg',
    quote: 'Dòng chảy không có hình dạng — ta cũng vậy. Hãy thử bắt lấy gió mà xem.',
    stats: { damage: 9, toughness: 4, mobility: 8, crowdControl: 5, difficulty: 9 },

    // ── DẠNG CHỦ LỰC: XẠ THỦ (/d/flowborn/) ──
    skills: [
      {
        slot: 'passive',
        name: 'Dòng chảy năng lượng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103402.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Flowborn tại tế đàn có thể dẫn "Dòng chảy" vào cơ thể để tôi luyện bản thân, nhận Tốc đánh và cường hóa một trong bốn thuộc tính:\n\nSinh mệnh: Nhận thêm Máu tối đa\nXuyên phá: Nhận thêm Công vật lý\nGia Tốc: Nhận thêm Tốc chạy\nTĩnh tâm: Nhận thêm Giảm hồi chiêu\n\nĐòn đánh thường cường hóa: Phóng ra nỏ tiễn xuyên thấu gây thêm sát thương vật lý; khi trúng mục tiêu sẽ kéo dài quãng bay nhưng giảm 30% sát thương. Có thể tiêu hao 1 tầng "Dòng chảy" để sử dụng.',
        comboTip: 'Tận dụng tế đàn để chọn thuộc tính phù hợp với tình huống trận đấu. Xuyên phá nếu địch nhiều giáp, Gia Tốc nếu cần kite.'
      },
      {
        slot: 'skill1',
        name: 'Dòng chảy hội tụ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103407.png',
        cooldown: '10.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Flowborn hội tụ "Dòng chảy", gây sát thương vật lý và đẩy lùi kẻ địch lân cận, đồng thời nhận hồi máu và 5 tầng cộng dồn "Dòng chảy". Giảm 1/2 thời gian hồi chiêu của Nỏ tiễn phá không và Nỏ tiễn liên hoàn. Tướng đồng đội và lính đồng minh xung quanh sẽ cung cấp thêm chỉ số hồi phục và số cộng dồn "Dòng chảy".',
        comboTip: 'Dùng khi bị vây tại chỗ để hồi máu và nạp Dòng chảy nhanh, đồng thời đẩy lùi địch áp sát.'
      },
      {
        slot: 'skill2',
        name: 'Nỏ tiễn phá không',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103412.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Flowborn bắn một nỏ tiễn khổng lồ về mục tiêu chỉ định (có thể bị tướng địch chặn lại), gây sát thương vật lý và đẩy lùi đơn vị không phải tướng. Sau khi tung chiêu có thể lướt một đoạn (dùng lại trong 2 giây sẽ được cường hóa):\n\nLần 2: Tăng 25% sát thương nỏ.\nLần 3: Lơ lửng đồng thời tăng 50% sát thương nỏ.\n\nCó thể tiêu hao 4 tầng "Dòng chảy" để sử dụng thêm một lần.',
        comboTip: 'Dùng 3 lần liên tiếp để đạt mức sát thương tối đa. Lướt sau bắn giúp vừa cơ động vừa duy trì hỏa lực.'
      },
      {
        slot: 'ultimate',
        name: 'Nỏ tiễn liên hoàn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103416.png',
        cooldown: '50.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Flowborn bắn 7 loạt nỏ tiễn nhẹ vào khu vực chỉ định (khóa mục tiêu trong phạm vi), gây sát thương vật lý và tăng tốc chạy. Dùng lại sẽ được lơ lửng. Có thể tiêu hao 5 tầng "Dòng chảy" để sử dụng thêm một lần.',
        comboTip: 'Kết hợp với chiêu 1 để nạp Dòng chảy liên tục, giúp có thể dùng chiêu cuối nhiều lần hơn trong một giao tranh.'
      }
    ],

    // ── DẠNG XEN KẼ: PHÁP SƯ (/d/flowborn-2/) ──
    altForms: [
      {
        formId: 'mage',
        formName: 'Dạng Pháp Sư',
        role: 'Pháp Sư',
        avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/IMG-SQR-0200x0200-080148-2.jpg',
        bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_100333.jpg',
        source: 'Liên Quân Mobile',
        skills: [
          {
            slot: 'passive',
            name: 'Dòng chảy năng lượng',
            iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103402.png',
            cooldown: 'Nội tại',
            energyCost: '0',
            damageType: 'Phép',
            description: 'Flowborn khi ở trong tế đàn có thể dẫn "Dòng chảy" vào cơ thể để tôi luyện bản thân, nhận công phép (tăng theo cấp tướng) và cường hóa một trong bốn thuộc tính:\n\nSinh mệnh: Nhận thêm máu tối đa\nXuyên phá: Nhận thêm xuyên giáp phép\nGia tốc: Nhận thêm tốc chạy\nTĩnh tâm: Nhận thêm giảm hồi chiêu\n\nCó thể tiêu hao 1 tầng "Dòng chảy" để thi triển đòn đánh thường cường hóa, truyền dẫn sang kẻ địch lân cận (tối đa 4 lần) và gây thêm sát thương phép.',
            comboTip: 'Ưu tiên chọn Xuyên phá phép để tối đa hóa sát thương kỹ năng. Tích đủ Dòng chảy trước giao tranh.'
          },
          {
            slot: 'skill1',
            name: 'Dòng chảy hội tụ',
            iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260403_103407.png',
            cooldown: '10.0s',
            energyCost: '0',
            damageType: 'Phép',
            description: 'Flowborn tụ hội "Dòng chảy" gây sát thương phép, đẩy lùi kẻ địch xung quanh và hồi phục bản thân, nhận 5 tầng "Dòng chảy" đồng thời giảm 50% thời gian hồi chiêu của Dòng chảy pháp trận và Dòng chảy hủy diệt. Tướng và lính đồng minh ở gần giúp tăng thêm lượng hồi phục và số tầng "Dòng chảy" nhận được.',
            comboTip: 'Luôn dùng chiêu này để nạp đủ Dòng chảy trước khi xả combo pháp trận + hủy diệt.'
          },
          {
            slot: 'skill2',
            name: 'Dòng chảy pháp trận',
            iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260420_183315-2.png',
            cooldown: '8.0s',
            energyCost: '0',
            damageType: 'Phép',
            description: 'Flowborn ném một pháp trận theo hướng chỉ định gây sát thương lên kẻ địch trúng chiêu và làm chậm (duy trì 1 giây) đồng thời tiếp tục gây sát thương liên tục. Trong vòng 2 giây nếu thi triển liên tiếp sẽ tăng thêm hiệu ứng:\n\nPháp trận cấp 2: Tăng 25 phạm vi, gây choáng thay vì làm chậm\nPháp trận cấp 3: Tăng 50 phạm vi, gây choáng thay vì làm chậm\n\nCó thể tiêu hao 4 tầng "Dòng chảy" để thi triển thêm một lần.',
            comboTip: 'Bắn liên tiếp 3 lần để đạt cấp 3 — choáng diện rộng cực kỳ hiệu quả trong giao tranh đội.'
          },
          {
            slot: 'ultimate',
            name: 'Dòng chảy hủy diệt',
            iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/04/SeaTalk_IMG_20260420_183319-1.png',
            cooldown: '50.0s',
            energyCost: '0',
            damageType: 'Phép',
            description: 'Flowborn duy trì dẫn dắt một luồng sáng gây sát thương liên tục lên các mục tiêu bị liên kết. Khi bắt đầu, luồng sáng sẽ gây thêm sát thương và làm chậm mục tiêu 1 giây. Có thể tiêu hao 5 tầng "Dòng chảy" để thi triển thêm một lần; đồng thời trong thời gian duy trì có thể sử dụng các chiêu khác.',
            comboTip: 'Kết hợp chiêu cuối với pháp trận cấp 3 để khóa cứng và thiêu rụi mục tiêu không thể thoát.'
          }
        ]
      }
    ],

    // ── GHI CHÚ 5 DẠNG TỪ VGVD ──
    vgvdForms: ['Xạ Thủ', 'Pháp Sư', 'Trợ Thủ', 'Rừng', 'Đỡ Đòn'],

    lore: `Một thực thể siêu việt được sinh ra từ giao điểm của năm dòng năng lượng huyền bí cổ đại. Flowborn không có nguồn gốc cố định — tướng này xuất hiện khi thế giới cần sự cân bằng giữa các lực lượng đối lập.

Khả năng đặc biệt nhất của Flowborn là sự biến hóa vô hạn: tướng này có thể hóa thân thành Xạ Thủ tung tên vật lý hoặc Pháp Sư điều khiển pháp trận năng lượng tùy theo tình huống chiến đấu. Dù ở hình thái nào, "Dòng chảy" — nguồn năng lượng nguyên thủy mà Flowborn khai thác — vẫn là cốt lõi quyết định sức mạnh.

Truyền thuyết kể rằng trong thế giới Vương Giả Vinh Diệu, Flowborn từng tồn tại đầy đủ với năm hình thái: Xạ Thủ, Pháp Sư, Trợ Thủ, Rừng và Đỡ Đòn — biểu trưng cho năm nguyên tố của vũ trụ. Tuy nhiên khi bước qua cánh cổng chiều không gian sang Athanor của Liên Quân Mobile, chỉ hai hình thái nguyên sơ nhất là Xạ Thủ và Pháp Sư được hiện thân đầy đủ.`,

    battleTips: [
      'Flowborn có 2 phiên bản riêng biệt trong Liên Quân Mobile: Dạng Xạ Thủ (nỏ vật lý) và Dạng Pháp Sư (pháp trận năng lượng).',
      'Dạng Xạ Thủ: Mạnh nhất khi tích đủ Dòng chảy và bắn nỏ liên hoàn 3 lần cường hóa liên tiếp.',
      'Dạng Pháp Sư: Kiểm soát diện rộng siêu mạnh — xả pháp trận 3 cấp để choáng toàn bộ địch trong giao tranh đội.',
      'Cả 2 dạng đều chia sẻ cơ chế "Dòng chảy" — hãy quản lý tầng Dòng chảy như tài nguyên chiến lược.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Trượng Hỗn Mang', 'Mặt Nạ Berith', 'Vương Miện Hecate', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['wiro', 'gark', 'murad', 'bijan']
  }
];
