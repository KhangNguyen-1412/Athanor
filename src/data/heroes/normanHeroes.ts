import type { Hero } from '../../types/athanor';

export const NORMAN_HEROES: Hero[] = [
  {
    id: 'arthur',
    name: 'Arthur',
    title: 'Thanh Kiếm Chính Nghĩa',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/06/Honeyview_Arthur_111-e1718875297358.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/06/Honeyview_Arthur_1.jpg',
    quote: 'Chính nghĩa và thanh gươm của vương quốc sẽ quét sạch bóng tối!',
    stats: { damage: 7, toughness: 8, mobility: 6, crowdControl: 6, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Uy Dũng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fdcebeca1125f9b15b5964d4add5bb7559b28fc2a86d71.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Arthur được nhận thêm một lượng lớn giáp vật lý cơ bản, tăng dần theo cấp tướng, giúp bản thân cực kỳ trâu bò ngay từ đầu trận.',
        comboTip: 'Lợi thế phòng ngự tự nhiên giúp Arthur tự tin áp sát trao đổi chiêu thức thắng mọi kèo đấu sĩ đầu game.'
      },
      {
        slot: 'skill1',
        name: 'Gươm Chính Nghĩa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bd250e87a29673e1762e086cfcb399c459b28ffd4249e1.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tăng 30% tốc chạy trong 3 giây. Đòn đánh thường kế tiếp áp sát kẻ địch, gây sát thương vật lý và câm lặng mục tiêu trong 1 giây, đánh dấu ấn tăng sát thương phép.',
        comboTip: 'Dùng để truy đuổi kẻ địch, câm lặng pháp sư hoặc ngắt kỹ năng nguy hiểm của đối thủ.'
      },
      {
        slot: 'skill2',
        name: 'Thần Khí Hộ Thể',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b2f962b7ad2f10618759a0bbba7b741459b290455e0a61.png',
        cooldown: '9.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Triệu hồi các thanh kiếm ánh sáng xoay quanh bản thân trong 5 giây, liên tục chém vào tất cả kẻ địch xung quanh gây sát thương phép nhiều đợt.',
        comboTip: 'Bật chiêu 2 ngay sau khi chiêu 1 áp sát mục tiêu để tối ưu hóa lượng sát thương theo thời gian.'
      },
      {
        slot: 'ultimate',
        name: 'Công Lý Phán Quyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4fd7aa04e10867bcbc79a11cc1e5911c59b290902df361.png',
        cooldown: '35.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Nhảy bổ vào một tướng địch, gây sát thương vật lý cực mạnh kèm phần trăm máu tối đa và hất tung mục tiêu cùng những kẻ xung quanh trong 0.5 giây.',
        comboTip: 'Khóa chặt chủ lực địch bằng chuỗi combo: Chiêu 1 áp sát câm lặng -> Chiêu 2 xoay kiếm -> Chiêu cuối dứt điểm.'
      }
    ],
    lore: `Arthur là một trong những nhà lãnh đạo vĩ đại nhất của nhân loại, người đã đứng lên tập hợp các bộ tộc tản mác dưới chân núi Okka và thành lập nên Lâu Đài Khởi Nguyên hùng mạnh. Với thanh gươm công lý rực sáng trong tay, Arthur không bao giờ lùi bước trước bất kỳ bạo chúa hay quỷ dữ nào của Vực Hỗn Mang. Anh là ngọn hải đăng cho niềm tin và lòng can đảm của toàn bộ cư dân Đế Chế Norman.`,
    battleTips: [
      'Tận dụng thời gian hồi chiêu ngắn của chiêu 1 để di chuyển đảo gank và rượt đuổi kẻ thù.',
      'Chiêu 1 có hiệu ứng câm lặng, hãy canh thời điểm đối phương chuẩn bị tung chiêu lớn để vô hiệu hóa.',
      'Lên Áo Choàng Băng Giá để gia tăng khả năng làm chậm và gây sát thương kết hợp với chiêu 2.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Huyền Thoại', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['thane', 'astrid', 'allain', 'valhein', 'violet']
  },

  {
    id: 'thane',
    name: 'Thane',
    title: 'Thanh Gươm Quả Cảm',
    factionId: 'norman',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/71e488144b7dc9f13d40321ce0556efc5847d39f2071a1.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fd622bcdb9db848f9487f4c599adec97583ff08deb2382.jpg',
    quote: 'Vinh quang của vương quốc đặt trọn trên lưỡi kiếm và tấm khiên này!',
    stats: { damage: 5, toughness: 10, mobility: 4, crowdControl: 8, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Quyền Năng Tái Sinh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/19c9c4d9e177ee23ea0d5a9cefafb96a583e9dfef08821.png',
        cooldown: '75.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi máu tụt xuống dưới 30%, Thane hồi lại 24% máu tối đa trong 6 giây đồng thời nhận 25% giảm sát thương gánh chịu.',
        comboTip: 'Tận dụng nội tại phục hồi để câu kéo sát thương và kỹ năng của cả đội hình đối phương.'
      },
      {
        slot: 'skill1',
        name: 'Xung Phong',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d16cdf12dab4f627fe439a5e8252c4f4583e9e261cfaf1.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Thane lao về phía trước ủi phăng kẻ địch theo đường đi, gây sát thương vật lý và hất tung mục tiêu khi kết thúc chặng đường đẩy.',
        comboTip: 'Vòng ra sau lưng chủ lực địch rồi ủi ngược về phía đồng đội của mình.'
      },
      {
        slot: 'skill2',
        name: 'Gươm Can Đảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b0e3537a79816da5c312de91ee82217c583e9e469712e1.png',
        cooldown: '8.0s',
        energyCost: '65',
        damageType: 'Vật lý',
        description: 'Thane dộng mạnh thanh gươm xuống mặt đất, gây sát thương vật lý diện rộng, hất văng và làm chậm 90% tốc chạy của kẻ địch.',
        comboTip: 'Dùng nối tiếp ngay sau chiêu 1 để giữ chân mục tiêu không thể tẩu thoát.'
      },
      {
        slot: 'ultimate',
        name: 'Excalibur',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4ea990168ba972f3dc2b74f4eb9a2ccf583e9e6523ec91.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Chuẩn',
        description: 'Thane vận sức vung ra nhát chém ánh sáng hình nón cực đại, gây sát thương chuẩn khổng lồ cộng thêm phần trăm máu đã mất của nạn nhân và miễn khống khi tung chiêu.',
        comboTip: 'Chờ đối phương còn dưới 30% máu rồi tung chiêu kết liễu lập tức vì đây là sát thương chuẩn.'
      }
    ],
    lore: `Vị vua trị vì tối cao của Lâu Đài Khởi Nguyên, biểu tượng bất diệt cho tinh thần quật cường của loài người. Thane sở hữu thần kiếm Excalibur trứ danh mang sức mạnh ánh sáng xua tan bóng tối. Không chỉ là một chiến lược gia lỗi lạc trên bàn cờ chính trị Athanor, Thane luôn là người đầu tiên tiên phong xông pha nơi tiền tuyến rực lửa để che chắn cho binh lính và thần dân của mình.`,
    battleTips: [
      'Tốc Biến kết hợp Chiêu 1 từ trong bụi tạo ra pha mở giao tranh bất ngờ bắt sống chủ lực địch.',
      'Chiêu cuối gây sát thương chuẩn dựa trên máu đã mất, hãy dùng để kết liễu chứ không nên mở màn.',
      'Canh thời điểm nội tại hồi phục để làm bia đỡ đạn cho xạ thủ trong các pha ép trụ.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Thất Truyền', 'Giáp Gaia', 'Áo Choàng Băng Giá', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['arthur', 'astrid', 'florentino', 'violet', 'valhein']
  },

  {
    id: 'florentino',
    name: 'Florentino',
    title: 'Tay Kiếm Hào Hoa',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9527c1cbad1c0656d0a4adf1dcec38e35c25f62d77d671.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/62cda115a78344fc4fa5154881c9da255c25f64ee32a71.jpg',
    quote: 'Chiến trường chỉ là một sàn khiêu vũ, và ta là vũ công tao nhã nhất!',
    stats: { damage: 10, toughness: 6, mobility: 9, crowdControl: 7, difficulty: 10 },
    skills: [
      {
        slot: 'passive',
        name: 'Xuất Chúng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/766088d05000bab14cc070bf38dcb9675c25f6ba8ea1e1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Khi rời giao tranh hoặc nhặt hoa, đòn đánh thường kế tiếp lướt tới mục tiêu gây thêm sát thương và hồi máu, đồng thời tăng tốc lướt tiếp theo.',
        comboTip: 'Luôn căn góc lướt đòn đánh nội tại để nhặt hoa mượt mà không bị khựng động tác.'
      },
      {
        slot: 'skill1',
        name: 'Hào Hoa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/35d2872a18b582a73e299cb3f247b7755c25f6f2031781.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng đóa hoa hồng về phía trước, gây sát thương, làm choáng mục tiêu và làm rơi ra 3 đóa hoa rải rác xung quanh trong 5 giây.',
        comboTip: 'Độ chuẩn xác của chiêu 1 quyết định toàn bộ sức mạnh của chuỗi combo nhặt hoa múa kiếm.'
      },
      {
        slot: 'skill2',
        name: 'Thưởng Hoa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c5bd5a3d56514536551011a15ffcd2785c25f747f35421.png',
        cooldown: '1.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tung ra 3 nhát kiếm liên tiếp với hiệu ứng khác nhau: Nhát 1 làm chậm, nhát 2 hất tung, nhát 3 giảm hồi chiêu 1.',
        comboTip: 'Nhặt hoa -> Đánh thường lướt -> Chiêu 2 -> Nhặt hoa -> Đánh thường lướt -> Chiêu 2 xoay vòng liên tục.'
      },
      {
        slot: 'ultimate',
        name: 'Tài Hoa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d3a26dcc83110c22e458894a99f2f8525c25f772af8591.png',
        cooldown: '35.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lao đến thách đấu một tướng địch, làm rơi thêm 3 đóa hoa, tăng công vật lý, miễn khống chế và giảm 50% sát thương từ những kẻ không bị thách đấu.',
        comboTip: 'Kích hoạt chiêu cuối vào tướng ít khống chế hoặc tanker địch để múa an toàn giữa giao tranh hỗn loạn.'
      }
    ],
    lore: `Thiếu gia quyền quý của gia tộc quý tộc danh giá bậc nhất miền nam Đế Chế Norman. Đằng sau vẻ ngoài lãng tử, phong lưu và tài hoa là một kiếm sư vô song với những đường kiếm hoa mỹ tựa như vũ điệu tử thần. Florentino không màng danh lợi chốn cung đình, anh phiêu bạt giang hồ, dùng lưỡi kiếm sắc bén để trừng trị cái ác và tìm kiếm đối thủ xứng tầm trên khắp đại lục.`,
    battleTips: [
      'Luyện tập thành thục thao tác nhặt hoa không dùng nút di chuyển để đạt tốc độ múa tối đa.',
      'Trong giao tranh, bật chiêu cuối vào tướng địch thích hợp để nhận hiệu ứng miễn nhiễm khống chế.',
      'Tránh ném chiêu 1 hụt; nếu trượt chiêu 1, hãy lùi lại chờ thời gian hồi chiêu thay vì lao vào.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['astrid', 'richter', 'allain', 'butterfly', 'thane']
  },

  {
    id: 'astrid',
    name: 'Astrid',
    title: 'Nữ Kiếm Sư',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/91a969152f4340611e12e4eeb96a9aa259e021a48fbe91.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/15b20fb97ed730bbcffba74eec32be4659e0233890e451.jpg',
    quote: 'Ngọn lửa kiêu hãnh của gia tộc Hoa Hồng sẽ thiêu rụi mọi kẻ phản nghịch!',
    stats: { damage: 8, toughness: 7, mobility: 6, crowdControl: 6, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Kiếm Tâm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/abcf17da55f204e8f45e64916f86dc8b59e0221cc54241.png',
        cooldown: '24.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi máu tụt dưới 80%, Astrid tự tạo lá chắn hấp thụ sát thương. Đòn đánh thường và chiêu thức trúng đích giúp giảm mạnh hồi chiêu của nội tại này.',
        comboTip: 'Liên tục chém mục tiêu để kích hoạt lá chắn nhiều lần trong các cuộc đụng độ kéo dài.'
      },
      {
        slot: 'skill1',
        name: 'Bạt Kiếm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/10450bf3def43e5567d4e3cf7fc1e14259e022b19cf761.png',
        cooldown: '4.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Astrid vung kiếm xoay vòng gây sát thương vật lý lên kẻ địch xung quanh. Nếu đánh trúng tướng địch, cô nhận thêm tốc đánh và xuyên giáp.',
        comboTip: 'Dùng thường xuyên để dọn lính và tăng tốc độ chém thường liên hồi.'
      },
      {
        slot: 'skill2',
        name: 'Quả Cảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ad69e4b4519125fbf23419020c5973a459e022ea2af161.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt về phía chỉ định, cường hóa đòn đánh thường kế tiếp gây thêm sát thương vật lý, làm chậm đối thủ và giảm hồi chiêu 1.',
        comboTip: 'Kỹ năng cơ động duy nhất của Astrid, dùng để tiếp cận áp sát xạ thủ đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Cự Kiếm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c4a08f0a9a741a2054f4306f5d92591059e0232482e571.png',
        cooldown: '45.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Astrid gồng cự kiếm trong 1.5 giây, hoàn toàn miễn nhiễm mọi sát thương và khống chế, sau đó vung nhát chém quét hình nón gây sát thương chuẩn cực khủng và làm choáng kẻ địch nếu máu cô thấp hơn đối phương.',
        comboTip: 'Bật chiêu cuối khi gần cạn máu để né sát thương dồn tử thần và lật kèo ngoạn mục nhờ làm choáng + sát thương chuẩn.'
      }
    ],
    lore: `Người thừa kế duy nhất của gia tộc Hoa Hồng danh giá tại vương quốc Norman. Sau khi cha và anh trai hy sinh anh dũng trên chiến trường ngăn chặn loài quỷ, Astrid khoác lên mình bộ giáp sắt, cầm cự kiếm đứng lên kế thừa danh hiệu Nữ Bá Tước. Nàng thề trung thành với vua Thane và luôn chiến đấu quên mình bảo vệ biên giới phía nam của đại lục.`,
    battleTips: [
      'Thời gian bất tử trong chiêu cuối là chìa khóa để outplay các chiêu thức dồn sát thương cực lớn của địch.',
      'Chiêu 2 giúp vượt địa hình mỏng, hữu dụng khi đi gank hoặc truy đuổi.',
      'Lên trang bị công kết hợp thủ nửa nạc nửa mỡ để tối đa hóa hiệu quả hồi máu và lá chắn.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Giáp Gaia', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['thane', 'florentino', 'arthur', 'allain', 'butterfly']
  },

  {
    id: 'allain',
    name: 'Allain',
    title: 'Cuồng Kiếm Sĩ',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3aa1f0f335f87801117dbfa1d69b072b5ef1f1c297fe21.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d0ca908065803d3600f0faa0dd7ac14d5ef1fa859abe71.jpg',
    quote: 'Ký ức của ta có thể phai mờ, nhưng song kiếm sẽ không bao giờ phản bội bản năng!',
    stats: { damage: 9, toughness: 7, mobility: 7, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Kiếm Cuồng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7789135118fa5c462d8bb84286ae12125ef1f471d61203.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Đòn đánh thường của Allain gồm 4 đợt chém liên tiếp gây sát thương hỗn hợp (Vật lý, Phép và Chuẩn). Mỗi đòn đánh tăng tích lũy nộ giúp hồi máu và tăng miễn thương.',
        comboTip: 'Đứng lại chém tay liên tục để tích đầy thanh nộ trước khi tung chiêu 1 để gây sát thương tối đa.'
      },
      {
        slot: 'skill1',
        name: 'Kiếm Ảnh Cực Quang',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7ee1af6309a0779291bc62905134cbbb5ef1f961e15801-1.png',
        cooldown: '4.0s',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Tung ra chuỗi 9 nhát chém liên hồi về phía trước, gây sát thương vật lý, phép và chuẩn đồng thời hất tung đợt chém cuối cùng nếu tích đủ điểm nộ.',
        comboTip: 'Kỹ năng này có thể chí mạng và kích hoạt hiệu ứng đòn đánh, nguồn sát thương hủy diệt chính của Allain.'
      },
      {
        slot: 'skill2',
        name: 'Kiếm Thiểm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f58937ccb405488543127fa5ba25f93a5ef1fa2188c431-1.png',
        cooldown: '2.0s (Tích trữ 2 lần)',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Allain lướt chém xuyên qua kẻ địch, gây sát thương và trói chân mục tiêu đầu tiên trúng phải trong 1.5 giây.',
        comboTip: 'Dùng chiêu 2 để tiếp cận trói chân kẻ địch, sau đó xả trọn bộ chiêu 1 vào người chúng.'
      },
      {
        slot: 'ultimate',
        name: 'Kiếm Quy Tông',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c3339f412a7e0b1cb93b049ac24712165ef1fa73195831-1.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Khóa mục tiêu và phi thân lên không trung không thể bị chọn làm mục tiêu trong vài giây, sau đó giáng xuống gây sát thương chuẩn diện rộng và nhận lá chắn bảo hộ.',
        comboTip: 'Chiêu cuối có thể nhắm vào cả đồng minh để bảo kê hoặc đu bám sát thủ địch để tẩu thoát/truy kích.'
      }
    ],
    lore: `Một kiếm sĩ trẻ mất đi ký ức sau cuộc thí nghiệm ma thuật hắc ám bí mật của tổ chức Hội Ám Hoàng. Allain lang thang tìm lại danh tính của mình với đôi song kiếm mang hai thuộc tính đối lập. Anh tình cờ gặp lại người bạn thơ ấu Butterfly và cùng nhau đồng hành trên hành trình phá tan âm mưu thao túng đại lục của các thế lực đen tối.`,
    battleTips: [
      'Tích đủ 4 stack đòn đánh thường trước khi bật chiêu 1 để nhận khả năng miễn khống và sát thương chuẩn cực đại.',
      'Chiêu cuối giúp bạn hoàn toàn né tránh các kỹ năng khống chế hoặc sát thương dồn chí mạng từ đối phương.',
      'Lên trang bị tăng tốc đánh và tỉ lệ chí mạng như Thánh Kiếm và Song Đao Bão Táp.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['butterfly', 'thorne', 'astrid', 'florentino', 'dextra']
  },

  {
    id: 'butterfly',
    name: 'Butterfly',
    title: 'Siêu Cấp Sát Thủ',
    factionId: 'norman',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/769a9fe6cb9b9725127a094bb6dd36545f0ed6543592e1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/594f025c153d363cb992cd9d6f77d3905f0ed5818ffe61.jpg',
    quote: 'Chỉ cần một nhát kiếm chuẩn xác, số phận của ngươi đã được định đoạt!',
    stats: { damage: 10, toughness: 5, mobility: 7, crowdControl: 4, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Sát Thủ Bản Lĩnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/77c4fc2fecb4f45937a67e219fbc0f81583f9b70370fd1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Hạ gục hoặc hỗ trợ giúp tích điểm nội tại. Khi tích đủ 3 điểm, Butterfly lập tức làm mới thời gian hồi của tất cả các kỹ năng và nhận lá chắn.',
        comboTip: 'Chờ đợi thời cơ mục tiêu yếu máu để lao vào hạ gục và kích hoạt chuỗi hồi chiêu quét sạch đội hình.'
      },
      {
        slot: 'skill1',
        name: 'Quét Kiếm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/539eac97d51df1d9b8cbd53b4f504f28583f9b96065981.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung kiếm theo vòng tròn gây sát thương vật lý lên kẻ địch xung quanh, tăng tốc chạy và nhận lá chắn hấp thụ sát thương.',
        comboTip: 'Dùng chiêu 1 liên tục khi đi rừng hoặc áp sát để tăng khả năng chống chịu và bám đuổi.'
      },
      {
        slot: 'skill2',
        name: 'Phi Kiếm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e36b5b93879dd38e763ad069e0421b80583f9bb00362b1.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Đâm kiếm cực nhanh về phía trước theo đường thẳng, gây sát thương vật lý và tăng mạnh tốc đánh cùng tỉ lệ chí mạng trong vài giây.',
        comboTip: 'Dùng trúng chiêu 2 giúp các đòn đánh thường tiếp theo ra đòn với tốc độ chớp nhoáng.'
      },
      {
        slot: 'ultimate',
        name: 'Ám Sát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6678d992aeba66041ec7d4980756df7d583f9bcc06a9e1.png',
        cooldown: '13.5s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lập tức dịch chuyển xuất hiện sau lưng tướng địch ít máu nhất trong phạm vi, gây sát thương vật lý cực mạnh, làm chậm đối thủ và tăng miễn thương cho bản thân.',
        comboTip: 'Combo chuẩn: Chiêu cuối nhảy ra sau lưng -> Chiêu 2 tăng tốc đánh -> Chiêu 1 nhận giáp -> Đánh thường dứt điểm.'
      }
    ],
    lore: `Thành viên xuất sắc nhất của Hội Lính Thuê Khởi Nguyên, Butterfly mang trong mình sự nhanh nhẹn và chuẩn xác chết người. Nàng từng trải qua tuổi thơ khắc nghiệt và được huấn luyện thành một cỗ máy ám sát hoàn hảo. Dù bề ngoài lạnh lùng và kiệm lời, Butterfly luôn mang trong mình tấm lòng ấm áp và khát khao bảo vệ những người bạn thân thương như Allain và Astrid.`,
    battleTips: [
      'Không nên mở giao tranh đầu tiên; hãy kiên nhẫn núp bụi chờ đối phương dùng hết chiêu khống chế.',
      'Tập trung dồn sát thương vào tướng địch máu thấp nhất để kích hoạt nội tại làm mới chiêu liên hoàn.',
      'Sử dụng chiêu 1 nhận lá chắn để băng trụ hạ gục mục tiêu an toàn.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thương Longinus', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['allain', 'astrid', 'florentino', 'valhein', 'violet']
  },

  {
    id: 'valhein',
    name: 'Valhein',
    title: 'Thợ Săn Ác Quỷ',
    factionId: 'norman',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4b36c6e5e2d1ce9dd9e2841d2902043c5ee04efeb2f2d1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/83d9de6ce9963f9ea406db2edd81707f5ee04e75516431-1.jpg',
    quote: 'Mỗi viên đạn bạc là một bản án dành cho lũ quỷ dữ!',
    stats: { damage: 8, toughness: 4, mobility: 6, crowdControl: 7, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Ám Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b3fccac3d3894113f82174d3ec963500583e9cb3ac80c1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Mỗi đòn đánh thường thứ 3 bắn ra một phi tiêu ngẫu nhiên: Đỏ (sát thương lan), Xanh (hồi năng lượng), hoặc Vàng (làm choáng mục tiêu). Đồng thời nhận điểm thợ săn tăng tốc chạy.',
        comboTip: 'Thả diều liên tục bằng cách vừa bắn vừa di chuyển để tích lũy tốc chạy tối đa.'
      },
      {
        slot: 'skill1',
        name: 'Chuyến Săn Đẫm Máu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c40655d6952c05bcb1e43aec3037328e583e9d0761f741.png',
        cooldown: '5.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Ném ra một phi tiêu đỏ vào mục tiêu, gây sát thương phép diện rộng và tăng một điểm thợ săn tăng tốc chạy.',
        comboTip: 'Dùng để cấu rỉa máu tầm xa và dọn dẹp đợt lính nhanh chóng.'
      },
      {
        slot: 'skill2',
        name: 'Trừ Tà',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1ec3d200fd56cb45b716d1d5ee94a746583e9d4397bca1.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Ném phi tiêu vàng khóa thẳng vào kẻ địch, gây sát thương phép và làm choáng mục tiêu trong 0.75 giây.',
        comboTip: 'Chiêu khống chế chỉ định cực mạnh, dùng để ngắt chuỗi lao vào của sát thủ đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Bão Đạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0fd55b686edc386f5f1937a09de2d1f1583e9d6a7fcc51.png',
        cooldown: '24.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Bắn ra 6 viên đạn bạc hình quạt về phía trước, mỗi viên gây sát thương phép. Kẻ địch đứng càng gần sẽ trúng càng nhiều đạn bạc và chịu sát thương dồn khổng lồ.',
        comboTip: 'Áp sát bất ngờ hoặc chờ kẻ địch lao vào rồi dồn trọn 6 viên đạn ở cự ly 0m để sốc sát thương bốc hơi mục tiêu.'
      }
    ],
    lore: `Chiến binh huyền thoại của Hội Thợ Săn Norman, Valhein đã hiến dâng cả cuộc đời mình để tiêu diệt loài ma cà rồng và ác ma bóng tối sau khi gia đình anh bị tàn sát. Với khẩu súng bạc cổ xưa và áo choàng trừ tà, anh rảo bước khắp các vùng đất hoang vu của Athanor, gieo rắc nỗi khiếp sợ cho bất kỳ sinh vật bóng tối nào dám cả gan xuất hiện.`,
    battleTips: [
      'Valhein có khả năng gây sát thương hỗn hợp và thả diều cực kỳ khó chịu nhờ chiêu 2 choáng chỉ định.',
      'Chiêu cuối bắn tầm gần gây sát thương tối đa, rất lợi hại khi đối đầu với đấu sĩ cận chiến.',
      'Lên Gươm Sấm Sét và Kiếm Fafnir để tối ưu hóa tốc độ bắn và hiệu ứng đòn đánh.'
    ],
    recommendedItems: ['Giày Du Mục', 'Gươm Sấm Sét', 'Kiếm Fafnir', 'Thánh Kiếm', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['violet', 'kaine', 'arthur', 'thane', 'butterfly']
  },

  {
    id: 'violet',
    name: 'Violet',
    title: 'Tay Súng Quả Cảm',
    factionId: 'norman',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f91d8c95b3b0c11c6fe5b8ac20e48cbd5d25650254d571.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ed92932b8d6258aec8ac2cf8fbe571675d2564bb257571.jpg',
    quote: 'Mỗi phát súng hoa hồng của ta sẽ đặt dấu chấm hết cho cuộc đời ngươi!',
    stats: { damage: 10, toughness: 3, mobility: 8, crowdControl: 4, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Nạp Đạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6d9085b5467e44716e7a765f728522aa583f9beede5c91.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Đòn đánh thường trúng tướng địch giúp giảm 0.5 giây thời gian hồi của chiêu 1 Đạn Xuyên Thấu.',
        comboTip: 'Tận dụng đòn đánh thường liên tục giữa các lần lộn để hồi chiêu 1 gần như ngay lập tức.'
      },
      {
        slot: 'skill1',
        name: 'Đạn Xuyên Thấu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/522f042f716be264659132a46985900b583f9c136cfab1.png',
        cooldown: '4.5s',
        energyCost: '45',
        damageType: 'Vật lý',
        description: 'Lộn nhào về phía trước, cường hóa đòn bắn kế tiếp với tầm bắn siêu xa và uy lực xuyên thấu cực lớn, đồng thời tăng tốc chạy nếu có tướng địch xung quanh.',
        comboTip: 'Kỹ năng chủ lực gây 80% sát thương của Violet. Luôn lộn ngang hoặc lùi lại để giữ khoảng cách an toàn.'
      },
      {
        slot: 'skill2',
        name: 'Lựu Đạn Nổ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/445011d5eafb60f7618e27bc3a3299b9583f9c36bf0f21.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Ném một quả lựu đạn vào khu vực chỉ định, gây sát thương vật lý và làm chậm 90% tốc chạy của kẻ địch trúng phải trong 1 giây.',
        comboTip: 'Ném chiêu 2 để làm chậm mục tiêu trước khi tung phát bắn cường hóa từ chiêu 1.'
      },
      {
        slot: 'ultimate',
        name: 'Pháo Khai Hỏa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8e79f7702f1972e063a7e1f2b1c257ff583f9c4f499e21.png',
        cooldown: '25.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Bắn ra một quả pháo tầm siêu xa phát nổ khi trúng mục tiêu hoặc bay hết tầm, gây sát thương vật lý diện rộng kết liễu kẻ địch trốn chạy.',
        comboTip: 'Dùng để dọn lính từ xa hoặc bắn tỉa những mục tiêu trốn sau trụ sau giao tranh.'
      }
    ],
    lore: `Nữ thợ săn tài ba bậc nhất của Đế Chế Norman, nổi tiếng với biệt danh Hoa Hồng Thép. Violet sử dụng đôi súng ngắn được chế tác đặc biệt kết hợp cùng khẩu pháo hạng nặng sau lưng. Nàng sát cánh cùng Valhein trong cuộc chiến chống lại loài ma cà rồng và bóng tối Vực Hỗn Mang, luôn giữ nụ cười tự tin và ngón tay không bao giờ run rẩy trên cò súng.`,
    battleTips: [
      'Không nên lộn thẳng vào mặt kẻ địch bằng chiêu 1; hãy lộn chéo hoặc lộn lùi để giữ khoảng cách.',
      'Sử dụng tầm bắn vượt trội của chiêu 1 để bắn trụ địch từ ngoài tầm ngắm của trụ.',
      'Khi đã đủ trang bị chí mạng, một phát bắn chiêu 1 có thể rút hơn nửa cây máu của xạ thủ/pháp sư địch.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Thương Xuyên Phá', 'Nanh Fenrir', 'Cung Tà Ma'],
    relatedHeroIds: ['valhein', 'arthur', 'butterfly', 'florentino', 'richter']
  },

  {
    id: 'richter',
    name: 'Richter',
    title: 'Lưỡi Gươm Đoạt Hồn',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e6e08d2cc322676442cf420e4aefb6d85bd7d7620754b1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/774475336079e3d014b6e462e419cba85bd7d95d6ebbb1.jpg',
    quote: 'Môi trường xung quanh chính là vũ khí chết người nhất của một thợ săn quỷ!',
    stats: { damage: 9, toughness: 7, mobility: 8, crowdControl: 7, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Thanh Gươm Biến Ảo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a3e2659879688bfca5656b6b5e6ecece5bd7d7ee3035e1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Thanh kiếm của Richter đổi màu theo địa hình: Trong Bụi (Kiếm Đỏ - tăng sát thương), Dưới Nước (Kiếm Lam - tăng tốc chạy), Trên Đường (Kiếm Vàng - tăng miễn thương).',
        comboTip: 'Chủ động đứng trong bụi cỏ trước giao tranh để nhận trạng thái Kiếm Đỏ cực mạnh hất tung kẻ địch.'
      },
      {
        slot: 'skill1',
        name: 'Chặt & Chém',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/919271153d1246d766acde4dbe1bc9aa5bd7d84e6c1121.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt tới chém kẻ địch gây sát thương. Nếu trúng mục tiêu, chiêu lập tức hồi lại 1 lần nữa. Hiệu ứng phụ thuộc vào địa hình hiện tại (Kiếm Đỏ hất tung).',
        comboTip: 'Từ trong bụi lướt chiêu 1 ra để hất tung mục tiêu, sau đó tung tiếp lần 2 để tối đa sát thương.'
      },
      {
        slot: 'skill2',
        name: 'Công Thủ Toàn Diện',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/313ff250121ea48bd74b4ed4fa1306575bd7d895b1bf81.png',
        cooldown: '12.0s (Tích trữ 2 lần)',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Richter giơ kiếm lên đỡ đòn, hoàn toàn miễn nhiễm mọi sát thương và hiệu ứng khống chế trong 0.75 giây, sau đó phản đòn gây sát thương vật lý.',
        comboTip: 'Bấm chiêu 2 chuẩn xác để chặn đứng chiêu cuối hoặc các kỹ năng dồn sát thương một phát chết luôn của đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Vùng Đất Diệt Vong',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/53aa742633412d7f3d765fe2ccab4f065bd7d8cfcf6121.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Tạo một vùng ma trận hủy diệt xung quanh bản thân gây sát thương chuẩn liên tục. Đánh trúng kẻ địch 5 lần sẽ phát nổ gây sát thương chuẩn khổng lồ và câm lặng mục tiêu.',
        comboTip: 'Bật chiêu cuối rồi lao vào giữa đội hình địch, kết hợp chiêu 2 đỡ đòn để kích nổ sát thương chuẩn an toàn.'
      }
    ],
    lore: `Một cựu chiến binh dày dạn kinh nghiệm thuộc Quân Đoàn Diệt Quỷ miền biên viễn Norman. Richter là người sống sót duy nhất sau thảm họa thung lũng sương mù, nơi đồng đội anh hy sinh toàn bộ trước đàn quỷ dữ. Trải qua bao biến cố, Richter tôi luyện kiếm thuật hòa quyện với mọi địa hình tự nhiên, trở thành nỗi khiếp sợ rình rập trong từng bụi cỏ của Athanor.`,
    battleTips: [
      'Tận dụng bụi cỏ để kích hoạt trạng thái kiếm đỏ: lướt chiêu 1 hất tung 2 lần liên tiếp.',
      'Chiêu 2 là công cụ outplay đỉnh cao giúp né tránh hoàn toàn sát thương từ trụ và chiêu thức đối thủ.',
      'Richter đi hỗ trợ hoặc đường tà thần đều cực mạnh nhờ khả năng đảo gank chớp nhoáng.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['florentino', 'astrid', 'allain', 'violet', 'valhein']
  },

  {
    id: 'alice',
    name: 'Alice',
    title: 'Tiểu Thần Thiện Lương',
    factionId: 'norman',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b9dd8e24c0fbad107475f6e31f5e36365847d373da15b1.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9b84b7e2b3f71361cc8d0178afb6696e58462fa58e8e01.jpg',
    quote: 'Nhìn Alice bé nhỏ thế này thôi nhưng các bạn đừng coi thường nha!',
    stats: { damage: 4, toughness: 4, mobility: 7, crowdControl: 10, difficulty: 2 },
    skills: [
      {
        slot: 'passive',
        name: 'Bước Chân Thần Tốc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d0213a9d195a9085109b832dc77933e45a2a5f40c2c8c1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi khi sử dụng kỹ năng, Alice được tăng 20% tốc độ di chuyển trong 1 giây, giúp bé luôn lanh lẹ trên chiến trường.',
        comboTip: 'Xả chiêu liên tục để giữ tốc chạy cao nhằm né tránh kỹ năng định hướng của kẻ địch.'
      },
      {
        slot: 'skill1',
        name: 'Vụ Nổ Thời Không',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7dae9062d9c83673bb8f54745789f4b45a2a5f5abdc941.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Ném ra một quả cầu ma thuật phát nổ tại vị trí chỉ định, gây sát thương phép và làm choáng tất cả kẻ địch trong vùng trong 1 giây.',
        comboTip: 'Canh hướng di chuyển của đối phương để đặt cầu đón đầu làm choáng.'
      },
      {
        slot: 'skill2',
        name: 'Lá Chắn Thời Không',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5b1f357b3ef160f07e1d8b693e66beed5a2a5f775e5311.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Tạo một lớp lá chắn ma thuật cho bản thân và tất cả đồng minh lân cận, đồng thời tăng 30% tốc độ di chuyển cho toàn đội trong 2 giây.',
        comboTip: 'Bật chiêu 2 để giúp cả đội tăng tốc mở giao tranh hoặc rút lui an toàn khi bị phục kích.'
      },
      {
        slot: 'ultimate',
        name: 'Dòng Chảy Thời Không',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/59a46dfe54127c07a40e66299b5786265a2a5fdc81f251.png',
        cooldown: '30.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Triệu hồi một đầm lầy ma thuật khổng lồ làm chậm cực mạnh, giảm giáp phép, câm lặng 1 giây và gây sát thương phép liên tục lên những kẻ đứng bên trong.',
        comboTip: 'Rải chiêu cuối chặn kín các lối đi hẹp trong rừng hoặc ngay dưới chân mục tiêu bị đồng đội khống chế.'
      }
    ],
    lore: `Bé gái thiên thần tinh nghịch và hồn nhiên sống tại Lâu Đài Khởi Nguyên. Dù thân hình nhỏ nhắn như một đứa trẻ, Alice sở hữu quyền năng ma thuật thời không vô cùng uyên bác được các vị thần ban tặng. Với tấm lòng nhân hậu, bé luôn có mặt khắp nơi trên chiến trường để bảo bọc và mang lại niềm vui, may mắn cho đồng đội.`,
    battleTips: [
      'Chiêu cuối của Alice có thể xoay chuyển hoàn toàn cục diện giao tranh lớn trong không gian hẹp.',
      'Lên trang bị tối đa 40% giảm hồi chiêu để bật chiêu 2 tăng tốc và lá chắn liên tục cho đồng đội.',
      'Giữ vị trí an toàn ở tuyến sau, tránh bị sát thủ địch tiếp cận dồn sát thương.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Băng', 'Sách Truy Hồn', 'Khiên Huyền Thoại'],
    relatedHeroIds: ['arthur', 'thane', 'violet', 'valhein', 'moren']
  },

  {
    id: 'rourke',
    name: 'Rourke',
    title: 'Lão Tướng Can Trường',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/749d47479eb9744d656b5e7c59f213555b1914bf90d291.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f8aa14696ccc1cf02e6d2be8bb0676cc5b191602b90891.jpg',
    quote: 'Nỏ hạng nặng của ta sẵn sàng biến lũ quỷ thành tổ ong!',
    stats: { damage: 9, toughness: 8, mobility: 6, crowdControl: 5, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Tán Xạ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b52ee17b5b8bb892cb3ef1d653d9b42b5b191574985911.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Nỏ của Rourke bắn ra 4 mũi tên mỗi đòn đánh. Kẻ địch đứng càng gần sẽ chịu trọn cả 4 mũi tên và bị trừ giáp liên tục.',
        comboTip: 'Luôn áp sát dí thẳng nỏ vào mặt mục tiêu ở cự ly 0 mét để tối đa hóa lượng sát thương bộc phát.'
      },
      {
        slot: 'skill1',
        name: 'Đoạt Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/414630c4ecb1dc5025f40e40560004205b1915a32efc21.png',
        cooldown: '7.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Tăng 40% tốc chạy trong 1.5 giây và cường hóa đòn bắn kế tiếp bắn ra 4 mũi tên cực mạnh làm chậm mục tiêu.',
        comboTip: 'Bật chiêu 1 trước khi lao vào áp sát để đòn đánh đầu tiên gây sát thương hủy diệt.'
      },
      {
        slot: 'skill2',
        name: 'Xung Phong',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ddd0e9a9c0f9279536f5a6a8b33947785b1915c85a88f1.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Vật lý',
        description: 'Rourke ủi mạnh về phía trước, gây sát thương vật lý và đẩy lùi mục tiêu đầu tiên trúng phải, đồng thời giảm thời gian hồi chiêu 1.',
        comboTip: 'Dùng để húc trúng tướng địch, giữ chân chúng cho phát bắn đanh thép từ chiêu 1.'
      },
      {
        slot: 'ultimate',
        name: 'Càng Chiến Càng Hăng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5f23033261c44b644d0ec19e1b20e8135b1915f35a57e1.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Hỗ trợ',
        description: 'Loại bỏ mọi trạng thái khống chế, nhận lớp lá chắn khổng lồ hấp thụ sát thương. Chừng nào lá chắn còn tồn tại, Rourke hoàn toàn miễn nhiễm mọi hiệu ứng khống chế.',
        comboTip: 'Bật ngay khi chuẩn bị lao vào vòng vây địch hoặc khi vừa bị trúng chiêu choáng để lập tức phản công.'
      }
    ],
    lore: `Vị thuyền trưởng hải tặc khét tiếng nay đã quy thuận Lâu Đài Khởi Nguyên và trở thành thống đốc trấn giữ thị trấn biên giới. Rourke nổi tiếng với tính cách hào sảng, bộc trực và lòng quả cảm phi thường. Cùng với khẩu nỏ máy tự động uy lực vô song, ông là người bảo hộ vững chãi cho cư dân trước sự nhòm ngó của quái vật Vực Hỗn Mang.`,
    battleTips: [
      'Rourke là khắc tinh số một của các sát thủ và đấu sĩ cận chiến nhờ khả năng bắn cận bộc phát sát thương cực lớn.',
      'Chiêu cuối giúp miễn khống hoàn toàn nếu còn giáp; hãy tận dụng để càn quét trụ địch bắt lẻ đối phương.',
      'Đi rừng ăn mục tiêu lớn như Rồng và Tà Thần cực kỳ nhanh chóng nhờ nội tại trừ giáp.'
    ],
    recommendedItems: ['Rìu Leviathan', 'Giày Kiên Cường', 'Thương Longinus', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['moren', 'arthur', 'thane', 'valhein', 'violet']
  },

  {
    id: 'moren',
    name: 'Moren',
    title: 'Thợ Cương Thiết',
    factionId: 'norman',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/acqqwc-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/SeaTalk_IMG_20260119_104511.jpg',
    quote: 'Công nghệ cơ khí và thuốc súng là câu trả lời cho mọi vấn đề!',
    stats: { damage: 8, toughness: 8, mobility: 4, crowdControl: 6, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Tinh Chuẩn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/10cec5d7b06106c5e6d4c3ffaea19df05a3a34048b56d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Các đòn đánh thường và kỹ năng trúng đích tích lũy điểm cộng dồn giáp và kháng phép (lên đến hàng trăm điểm) và kích hoạt hồi máu khi tích đủ nợ.',
        comboTip: 'Liên tục bắn vào lính hoặc tướng để duy trì tối đa điểm phòng ngự biến Moren thành xạ thủ trâu bò nhất game.'
      },
      {
        slot: 'skill1',
        name: 'Súng Thần Công',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/SeaTalk_IMG_20260119_141612.png',
        cooldown: '8.0s',
        energyCost: '45',
        damageType: 'Vật lý',
        description: 'Tăng tốc chạy trong 1.5 giây và khiến 2 đòn đánh thường kế tiếp bắn ra đạn pháo cực mạnh, đồng thời giảm 0.5s hồi chiêu 1 với mỗi đòn bắn trúng đích.',
        comboTip: 'Bắn trúng mục tiêu sẽ giúp làm mới chiêu 1 liên tục không ngừng.'
      },
      {
        slot: 'skill2',
        name: 'Pháo Đẩy Lùi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/SeaTalk_IMG_20260119_141616.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Khai hỏa khẩu súng đẩy lùi tất cả kẻ địch trước mặt, gây sát thương vật lý và làm chậm 50% tốc chạy của chúng.',
        comboTip: 'Vũ khí tự vệ tuyệt vời giúp ngắt chiêu lao vào của sát thủ đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Trường Điện Từ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/SeaTalk_IMG_20260119_141619.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Bắn ra một quả cầu từ trường phát nổ tạo vùng điện từ trong 2.5 giây, làm chậm 50% tốc chạy. Kẻ địch trúng chiêu 2 đẩy lùi vào vùng từ trường sẽ bị làm choáng 1.5 giây.',
        comboTip: 'Combo sốc khống chế: Ném chiêu cuối phía sau địch -> Dùng chiêu 2 đẩy địch văng vào vùng từ trường gây choáng.'
      }
    ],
    lore: `Bậc thầy luyện kim và chế tạo vũ khí người lùn huyền thoại của Lâu Đài Khởi Nguyên. Moren từng làm việc tại Cung Điện Ánh Sáng nhưng đã rời đi vì bất đồng quan điểm sáng tạo. Với khẩu súng hai nòng tự chế và bộ giáp cơ khí bền bỉ, Moren chứng minh rằng khoa học cơ khí có thể đánh bại bất kỳ loại ma thuật cổ xưa nào.`,
    battleTips: [
      'Giai đoạn đầu trận khá yếu, hãy kiên nhẫn farm lính tích lũy trang bị chí mạng và hút máu.',
      'Khi đã đủ trang bị và full điểm nội tại, Moren có thể đứng solo 1vs1 bắn tay đôi thắng cả đấu sĩ sát thủ.',
      'Sử dụng combo Chiêu cuối + Chiêu 2 đẩy lùi vào vùng điện từ để làm choáng đối thủ.'
    ],
    recommendedItems: ['Giày Du Mục', 'Gươm Sấm Sét', 'Thánh Kiếm', 'Kiếm Fafnir', 'Cung Tà Ma', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['rourke', 'wisp', 'max', 'arthur', 'valhein']
  },

  {
    id: 'kaine',
    name: 'Kaine',
    title: 'Bá Tước Huyết Tộc',
    factionId: 'norman',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bb649e26633a61d78f7147d56c0828c6658d3bb600ae01.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_33fd0d5e6525e30f70365665736f768a658d3bf7a2129.jpg',
    quote: 'Màn đêm là vương quốc của ta, và máu của ngươi là chén rượu ngon nhất!',
    stats: { damage: 10, toughness: 3, mobility: 9, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Huyết Dạ Ẩn Thân',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2b7c2156ef7dc421f5e2a9fbe9b599de65af789b21f9e1-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi không chịu sát thương hoặc tung chiêu trong 3 giây, Kaine lập tức tiến vào trạng thái tàng hình vĩnh cửu. Đòn đánh giải tàng hình gây thêm sát thương và hồi máu.',
        comboTip: 'Di chuyển quanh bản đồ ở trạng thái tàng hình để soi tầm nhìn và rình rập chủ lực địch.'
      },
      {
        slot: 'skill1',
        name: 'Huyết Luân Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/382a074f1d9432068bf7045c6ea8966465af791c089fa1-1.png',
        cooldown: '5.0s',
        energyCost: '40',
        damageType: 'Vật lý',
        description: 'Vung đôi móng vuốt quỷ chém xoay tròn gây sát thương vật lý lên kẻ địch xung quanh, mục tiêu máu thấp nhất phải chịu gấp đôi sát thương.',
        comboTip: 'Dùng làm kỹ năng dọn quái rừng và dồn sát thương kết liễu cực nhanh.'
      },
      {
        slot: 'skill2',
        name: 'Huyết Tiêu Định Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/850413504faca4aa8ac66b306f7541e665af78eb686381-1.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Phóng phi tiêu dơi huyết tộc theo đường thẳng làm chậm mục tiêu. Đòn đánh kế tiếp lên kẻ dính tiêu sẽ làm choáng 1 giây và hồi lượng máu lớn.',
        comboTip: 'Phóng chiêu 2 trúng đích trước khi lao vào để có hiệu ứng làm choáng đối thủ.'
      },
      {
        slot: 'ultimate',
        name: 'Huyết Ảnh Đoạt Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e766c1f71e21dcce88f20bd12f4de20a65af7977e96321-1.png',
        cooldown: '30.0s',
        energyCost: '80',
        damageType: 'Vật lý',
        description: 'Kaine lướt thẳng về phía trước theo vệt chém huyết sắc hủy diệt, gây lượng sát thương vật lý kinh hoàng lên tất cả kẻ địch trên đường lướt.',
        comboTip: 'Từ trạng thái tàng hình: Chiêu 2 phóng tiêu -> Chiêu cuối lướt sốc sát thương làm choáng -> Chiêu 1 chém dứt điểm.'
      }
    ],
    lore: `Bá tước quý tộc thuộc dòng dõi ma cà rồng cổ xưa cư ngụ tại tòa lâu đài hắc ám miền biên ải Norman. Kaine sở hữu khả năng hòa mình vào bóng đêm tuyệt đối, thoắt ẩn thoắt hiện săn lùng những kẻ xấu số. Sau sự biến chuyển giao bản quyền DC, Kaine kế thừa trọn vẹn bộ kỹ năng săn mồi bóng đêm của Hiệp Sĩ Bóng Đêm Batman và mang diện mạo ma cà rồng đầy mê hoặc.`,
    battleTips: [
      'Tận dụng nội tại tàng hình vô tận để làm con mắt di động cung cấp vị trí rừng và chủ lực địch cho đồng đội.',
      'Cảnh giác khi đến gần tướng địch quá lâu vì biểu tượng mắt cảnh báo trên đầu chúng sẽ hiện lên báo hiệu.',
      'Lên trang bị dồn sát thương tối đa để hạ gục xạ thủ đối phương chỉ trong một nốt nhạc.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thương Xuyên Phá', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['valhein', 'violet', 'stuart', 'batman', 'arthur']
  },

  {
    id: 'stuart',
    name: 'Stuart',
    title: 'Tay Hề Quái Kiệt',
    factionId: 'tu_do',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/aaba7b63f6e2f5577fbb3465925c8026658d3d704767f1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/adbf6c46a0a33999cf187726ec876538658d3d2928408-scaled.jpg',
    quote: 'Tại sao phải nghiêm túc thế chứ? Trò chơi điên rồ này giờ mới chỉ bắt đầu thôi!',
    stats: { damage: 10, toughness: 4, mobility: 7, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Đạn Điên Loạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b415411193a3e45e49f8ce00aa8c400565af79ef2cb131.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Sau khi rời giao tranh hoặc dùng chiêu, đòn đánh kế tiếp bắn ra phát đạn uy lực tầm cực xa gây sát thương vật lý và làm chậm đối thủ.',
        comboTip: 'Cấu rỉa máu kẻ địch từ ngoài tầm nhìn bằng phát bắn nội tại kết hợp chiêu 1.'
      },
      {
        slot: 'skill1',
        name: 'Pháo Khủng Bố',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3df3edfb8555b9b8ecd43ee93a171e1565af7a1d159881.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Stuart giương khẩu súng bazooka bắn ra một quả tên lửa tầm siêu xa theo đường thẳng, gây sát thương vật lý nặng nề xuyên qua nhiều kẻ địch.',
        comboTip: 'Tầm bắn siêu xa, dùng để cấu máu và dọn lính an toàn từ sâu trong trụ nhà.'
      },
      {
        slot: 'skill2',
        name: 'Hề Bịp Bợm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0f3516de36f3284298f07019edf6300e65af7a4250e211.png',
        cooldown: '12.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Tăng 30% tốc chạy và hoàn toàn miễn nhiễm mọi sát thương vật lý gánh chịu trong 2 giây.',
        comboTip: 'Khắc tinh tuyệt đối của các sát thủ sốc dame vật lý; bật ngay khi địch lao vào áp sát.'
      },
      {
        slot: 'ultimate',
        name: 'Màn Diễn Độc Nhất',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/36d7c694111060366927a9a8c48c672a65af7a66ecde81.png',
        cooldown: '25.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Stuart phi thân đạp vào mặt tướng địch làm choáng 0.75s, gắn quả bom khí cười rồi lộn nhào ngược về sau bắn ra phát đạn uy lực cực lớn.',
        comboTip: 'Dùng để outplay sát thủ áp sát hoặc giữ khoảng cách an toàn khi bị gank.'
      }
    ],
    lore: `Gã hề điên rồ và quái đản xuất hiện tại các hẻm tối của thành thị Norman, kẻ kế thừa trọn vẹn phong cách chiến đấu hỗn loạn của The Joker. Với kho vũ khí thuốc nổ tự chế, quả đấm lò xo và nụ cười quái đản luôn thường trực trên môi, Stuart biến mọi chiến trường thành một rạp xiếc chết chóc nơi chỉ có tiếng cười quái dị vang vọng.`,
    battleTips: [
      'Chiêu 2 miễn nhiễm hoàn toàn sát thương vật lý, hãy giữ lại để đối phó khi sát thủ địch lao vào.',
      'Chiêu 1 có thời gian tụ bắn ngắn, hãy canh hướng di chuyển của đối phương để tỉa trúng mục tiêu.',
      'Chiêu cuối vừa gây choáng vừa đẩy bản thân lùi về sau, công cụ thả diều và tự vệ tối thượng.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Xuyên Phá', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Kiếm Muramasa', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['kaine', 'valhein', 'violet', 'florentino', 'batman']
  },

  {
    id: 'batman',
    name: 'Batman',
    title: 'Hiệp Sĩ Bóng Đêm',
    factionId: 'tu_do',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bb649e26633a61d78f7147d56c0828c6658d3bb600ae01.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_33fd0d5e6525e30f70365665736f768a658d3bf7a2129.jpg',
    quote: 'Ta là bóng đêm, ta là sự trừng phạt, ta là Batman!',
    stats: { damage: 9, toughness: 4, mobility: 8, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Truy Nã Kẻ Ác',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2b7c2156ef7dc421f5e2a9fbe9b599de65af789b21f9e1-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Batman được tăng 20% tốc độ di chuyển khi tiến lại gần các tướng địch trong tầm nhìn.',
        comboTip: 'Lợi thế tốc chạy giúp Batman luôn bắt kịp con mồi đang cố gắng bỏ chạy.'
      },
      {
        slot: 'skill1',
        name: 'Móng Vuốt Chân Không',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/382a074f1d9432068bf7045c6ea8966465af791c089fa1-1.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Vung vũ khí cận chiến tấn công tất cả kẻ địch xung quanh, mục tiêu ngẫu nhiên cạnh bên sẽ chịu gấp đôi sát thương.',
        comboTip: 'Kỹ năng dồn sát thương chính khi áp sát mục tiêu đơn lẻ.'
      },
      {
        slot: 'skill2',
        name: 'Phi Tiêu Dơi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/850413504faca4aa8ac66b306f7541e665af78eb686381-1.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Phóng phi tiêu dơi làm chậm mục tiêu. Đòn đánh tiếp theo làm choáng 1 giây và hồi máu cho Batman.',
        comboTip: 'Phải dùng trúng chiêu 2 để kích hoạt chuỗi khống chế làm choáng kẻ thù.'
      },
      {
        slot: 'ultimate',
        name: 'Dơi Đêm Ẩn Mình',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e766c1f71e21dcce88f20bd12f4de20a65af7977e96321-1.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Batman tiến vào trạng thái tàng hình trong 30 giây. Khi kích hoạt lần 2, anh lướt tới vồ lấy mục tiêu gây lượng sát thương cực lớn.',
        comboTip: 'Bật tàng hình từ xa, tiếp cận con mồi -> Phóng chiêu 2 -> Lướt chiêu cuối đập choáng -> Chiêu 1 dứt điểm.'
      }
    ],
    lore: `Vị anh hùng công lý huyền thoại từ vũ trụ DC được mời đến đại lục Athanor để trợ giúp liên minh chống lại các thế lực tà ác. Với trí tuệ siêu phàm, công nghệ đỉnh cao và võ thuật bậc thầy, Bruce Wayne khoác lên mình chiếc áo choàng bóng đêm, gieo rắc nỗi kinh hoàng cho bất kỳ kẻ thủ ác nào dám hoành hành tại Athanor.`,
    battleTips: [
      'Tận dụng thời gian tàng hình dài 30 giây của chiêu cuối để kiểm soát rừng đối phương.',
      'Nếu kẻ địch có dấu hiệu tụ tập đông bảo kê nhau, hãy kiên nhẫn chờ thời cơ bắt lẻ kẻ đi lạc.',
      'Lên đồ thuần sát lực để đảm bảo một combo sốc chết ngay lập tức xạ thủ hoặc pháp sư địch.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thương Xuyên Phá', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['superman', 'the_flash', 'wonder_woman', 'kaine', 'stuart']
  },

  {
    id: 'superman',
    name: 'Superman',
    title: 'Siêu Nhân',
    factionId: 'tu_do',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3310a88f1a679a6940e2f6e0da287c415a02b6ac709e01.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bc68101bdb00f4729a25fa5d94ab04d95a02b802549cc1.jpg',
    quote: 'Chừng nào ta còn đứng đây, hy vọng và hòa bình sẽ không bao giờ lụi tàn!',
    stats: { damage: 9, toughness: 8, mobility: 10, crowdControl: 9, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Siêu Phàm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/24bf7c4eaf085ee571ec7ce0de5904075a02b71f542431.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi di chuyển liên tục, Superman tích tụ năng lượng để chuyển sang trạng thái Phi Hành: Tăng 20% tốc chạy, đòn đánh và kỹ năng được cường hóa hoàn toàn với khả năng ủi đẩy và sát thương khủng.',
        comboTip: 'Luôn giữ ngón tay trên cần điều khiển di chuyển để duy trì trạng thái bay liên tục.'
      },
      {
        slot: 'skill1',
        name: 'Hơi Thở Băng Giá / Tia Laser',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7cc318a9ecf50c34796f27dbe32aee835a02b762c9a2b1.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Trạng thái bộ: Thổi hơi băng làm chậm kẻ địch 50%. Trạng thái bay: Bắn tia nhiệt từ mắt gây sát thương vật lý khổng lồ theo đường thẳng.',
        comboTip: 'Tia laser tầm xa có sát thương cực cao, dùng để dọn lính siêu tốc hoặc bắn tỉa mục tiêu máu thấp.'
      },
      {
        slot: 'skill2',
        name: 'Người Đàn Ông Thép',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/76c4654d08299b62d6f5839df0c951b15a02b7a14b16a1.png',
        cooldown: '12.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Trạng thái bộ: Giải phóng mọi hiệu ứng khống chế và tăng tốc chạy. Trạng thái bay: Dộng mạnh xuống đất gây sát thương và hất văng mọi kẻ địch xung quanh.',
        comboTip: 'Chiêu 2 trạng thái bộ là công cụ thanh tẩy tuyệt vời giúp thoát khỏi mọi bẫy khống chế.'
      },
      {
        slot: 'ultimate',
        name: 'Superman Tăng Tốc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e76cd16ed2ecab3a4890240819ff5f5b5a02b7ebee1cb1.png',
        cooldown: '50.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khai mở toàn bộ tiềm năng sức mạnh Krypton, giúp tốc độ tích tụ trạng thái Phi Hành tăng gấp đôi trong 10 giây, cho phép Superman liên tục bay và ủi đẩy kẻ địch.',
        comboTip: 'Bật chiêu cuối rồi liên tục chạy lấy đà ủi kẻ địch về trụ hoặc đẩy nát đội hình đối phương.'
      }
    ],
    lore: `Biểu tượng vĩ đại của công lý đến từ hành tinh Krypton. Với sức mạnh vô song, đôi mắt phóng laser nhiệt và tốc độ phi hành vượt âm thanh, Clark Kent là người bảo vệ thầm lặng cho nền văn minh nhân loại. Khi các chiều không gian giao nhau, Superman xuất hiện tại Athanor sát cánh cùng vua Thane và Lâu Đài Khởi Nguyên đẩy lui thảm họa bóng tối.`,
    battleTips: [
      'Superman sợ nhất là các hiệu ứng làm chậm liên tục khiến anh không thể vào trạng thái bay.',
      'Đảo gank liên tục sang 2 cánh nhờ tốc độ di chuyển siêu nhanh ở trạng thái phi hành.',
      'Trong giao tranh, vòng ra sau lưng đội hình địch để ủi các chủ lực của chúng về phía đồng đội.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Thương Longinus', 'Khiên Thất Truyền', 'Giáp Gaia', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['batman', 'the_flash', 'wonder_woman', 'thane', 'arthur']
  },

  {
    id: 'the_flash',
    name: 'The Flash',
    title: 'Tia Chớp Bí Ẩn',
    factionId: 'tu_do',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/dbb8d783c711cc0d2961e72cc8ed122c5ad9685dd58c11.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/efc981c9e4534651441b90a4b4945e055ad9688b050131.jpg',
    quote: 'Ta là người nhanh nhất còn sống trên thế giới này!',
    stats: { damage: 9, toughness: 5, mobility: 10, crowdControl: 7, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Thần Tốc Lực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/808777edec1f90c25ec449a87d9d73685ad969e8830a21.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Mỗi khi di chuyển đủ quãng đường, The Flash tích tụ Thần Tốc Lực. Đòn đánh thường kế tiếp lướt tới mục tiêu gây thêm sát thương phép, làm chậm 50% và tạo lá chắn.',
        comboTip: 'Đòn đánh nội tại giúp tiếp cận mục tiêu tức thì trước khi xả bộ chiêu thức sốc sát thương.'
      },
      {
        slot: 'skill1',
        name: 'Hành Trình Siêu Tốc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b8e01c4279ab212ba7ce5062a2ef3ae95ad96a81ac9421.png',
        cooldown: '10.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Lao vút về phía trước gây sát thương phép lên kẻ địch cản đường. Trong vòng vài giây, có thể tái kích hoạt để lập tức lướt ngược trở về vị trí ban đầu.',
        comboTip: 'Lao vào dồn sát thương rồi bấm chiêu 1 lần nữa để rút lui an toàn không một vết xước.'
      },
      {
        slot: 'skill2',
        name: 'Cú Đấm Chớp Nhoáng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/28e59ebddcaec5727f000077918d85695ad9711da360e1.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tung ra 5 cú đấm liên tiếp trong nháy mắt gây sát thương phép nhiều đợt, cú đấm cuối cùng gây gấp đôi sát thương và tăng tốc chạy cho The Flash.',
        comboTip: 'Dùng chiêu 2 ngay sau khi chiêu 1 tiếp cận mục tiêu để tối ưu lượng sát thương bộc phá.'
      },
      {
        slot: 'ultimate',
        name: 'Lốc Xoáy Chân Không',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1f3550ad239ebc98101e46028ffbddd25ad971a5cca0c1.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Chạy vòng tròn tạo ra một cơn lốc xoáy chân không khổng lồ. Trong thời gian này, Flash hoàn toàn không thể bị chọn làm mục tiêu. Khi kết thúc, cơn lốc hút tất cả kẻ địch vào tâm và gây sát thương phép cực lớn.',
        comboTip: 'Bật chiêu cuối giữa tâm giao tranh để né toàn bộ sát thương và gom gom cả đội hình đối phương.'
      }
    ],
    lore: `Barry Allen, nhà khoa học pháp y sở hữu tốc độ ánh sáng nhờ kết nối với Thần Tốc Lực (Speed Force). The Flash di chuyển với vận tốc vượt qua mọi định luật vật lý, có thể xuyên tường và du hành thời gian. Anh là tia sáng hy vọng mang lại sự cứu rỗi chớp nhoáng cho cư dân Athanor trước những hiểm họa khôn lường.`,
    battleTips: [
      'Combo kinh điển: Chiêu 1 lao vào -> Chiêu 2 đấm liên hoàn -> Chiêu cuối gom địch -> Bấm chiêu 1 bay về an toàn.',
      'Chiêu cuối giúp Flash bất khả xâm phạm trong 2 giây, dùng để ao-nhây các kỹ năng chí mạng của địch.',
      'Cần chú ý vị trí bóng ban đầu của chiêu 1 để tránh bị kẻ địch phục kích khi giật bóng về.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Gươm Tận Thế', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['superman', 'batman', 'wonder_woman', 'd_arcy', 'dirak']
  },

  {
    id: 'wonder_woman',
    name: 'Wonder Woman',
    title: 'Chiến Thần Amazon',
    factionId: 'tu_do',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/108ae03944a6aa1eb4313a2baa64efcd5a0e6c1551db11.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e0501e9f37b168c4782c85431ed330e95a0e6d4a2ecf31.jpg',
    quote: 'Chân lý và lòng dũng cảm sẽ dẫn lối cho mọi chiến binh chân chính!',
    stats: { damage: 8, toughness: 8, mobility: 7, crowdControl: 8, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Khiên Chân Lý',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1827b1d68988d8c443a10243b83c87235a0e6c68599c71.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Mỗi đòn đánh thứ 3, Wonder Woman ném khiên tấn công xuyên thấu kẻ địch gây sát thương chuẩn và hồi phục máu cho bản thân.',
        comboTip: 'Tận dụng đòn ném khiên tầm xa để cấu rỉa máu và duy trì lượng máu dồi dào khi đi đường.'
      },
      {
        slot: 'skill1',
        name: 'Khiên Kiếm Liên Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fca4aad1c20fbbca36f11c3ee8b23bb85a0e6cb46ea201.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt tới vung khiên dộng vào kẻ địch gây sát thương và làm chậm, sau đó vung kiếm chém nhát thứ 2 gây sát thương vật lý cực mạnh theo phần trăm máu.',
        comboTip: 'Kỹ năng áp sát và gây sát thương theo % máu, đánh cực đau lên cả các tướng đỡ đòn trâu bò.'
      },
      {
        slot: 'skill2',
        name: 'Dây Thừng Chân Lý',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/83d3d64c39b2d57719054cf87aad8a515a0e6cfb608e61.png',
        cooldown: '12.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Quăng Dây Thừng Chân Lý trúng mục tiêu: Nếu máu địch trên 50%, nàng kéo bản thân bay tới kẻ địch; nếu máu địch dưới 50%, nàng kéo phăng mục tiêu về phía mình.',
        comboTip: 'Quan sát thanh máu của mục tiêu để chọn phương án kéo mình tới hoặc giật địch về.'
      },
      {
        slot: 'ultimate',
        name: 'Giáp Tay Thần Thánh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/461014df38f770824080ac3db72e35d35a0e6d3abb89a1.png',
        cooldown: '45.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Đập mạnh hai chiếc vòng hộ thủ vào nhau phóng ra luồng sóng xung kích cực mạnh làm choáng kẻ địch trước mặt, đồng thời tạo lượng lá chắn khổng lồ và tăng tốc chạy cho tất cả đồng minh phía sau.',
        comboTip: 'Bảo kê đồng đội hoàn hảo trong giao tranh tổng bằng chiếc khiên lá chắn khổng lồ từ chiêu cuối.'
      }
    ],
    lore: `Công chúa Diana của tộc chiến binh Amazon huyền thoại. Được các vị thần Olympus ban tặng sức mạnh thể chất phi thường, Dây Thừng Chân Lý không thể phá hủy và đôi Giáp Tay Thần Thánh, nàng là biểu tượng của công lý, hòa bình và sự kiên định không gì khuất phục nổi trên đại lục Athanor.`,
    battleTips: [
      'Wonder Woman có thể đi đường tà thần hoặc đi rừng với khả năng chống chịu và mở giao tranh mẫu mực.',
      'Chiêu 2 là công cụ bắt lẻ cực kỳ khó chịu; hãy nhắm trúng vào chủ lực địch đang tháo chạy.',
      'Chiêu cuối mang lại lượng giáp ảo khổng lồ cho đồng đội phía sau, hãy dùng nó ở vị trí trước mặt xạ thủ của bạn.'
    ],
    recommendedItems: ['Rìu Leviathan', 'Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['superman', 'batman', 'the_flash', 'arthur', 'astrid']
  },

  {
    id: 'bijan',
    name: 'Bijan',
    title: 'Khách Hành Hương Thao Cát',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/856d30cb10953b9480dce5c5470bf81c658d50d87305a1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0c8d05c3314999644164ba2ea4fd6ef8658d51ffb29831.jpg',
    quote: 'Cát vàng sa mạc sẽ vùi lấp mọi xiềng xích nô lệ và áp bức!',
    stats: { damage: 8, toughness: 8, mobility: 8, crowdControl: 7, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Sa Đà Hộ Thân',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi chịu sát thương hoặc tung chiêu, Bijan tích lũy nộ khí giúp tăng mạnh giáp và hồi lại lượng máu lớn khi đòn đánh thường được cường hóa.',
        comboTip: 'Chủ động tích lũy điểm nội tại để luôn sẵn sàng trao đổi chiêu thức với đối thủ trên đường.'
      },
      {
        slot: 'skill1',
        name: 'Sa Lãng Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt về phía trước chém vệt cát gây sát thương vật lý, sau đó nhát chém thứ hai hất tung kẻ địch trong phạm vi.',
        comboTip: 'Kỹ năng khống chế hất tung diện rộng, dùng để giữ chân đối thủ phối hợp cùng đồng đội.'
      },
      {
        slot: 'skill2',
        name: 'Cường Đao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3.png',
        cooldown: '4.0s (3 giai đoạn)',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tung ra 3 nhát chém liên hoàn cực mạnh, mỗi nhát chém đều làm chậm mục tiêu và tăng thêm sát thương ở các nhát chém tiếp theo.',
        comboTip: 'Xen kẽ các đòn đánh thường giữa mỗi lần dùng chiêu 2 để tối ưu hóa lượng sát thương gây ra.'
      },
      {
        slot: 'ultimate',
        name: 'Sa Thú Xung Phong',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4.png',
        cooldown: '45.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Bijan cưỡi linh thú cát lướt đi với tốc độ cực nhanh trên toàn bản đồ. Một đồng minh có thể nhảy lên xe cùng đi! Khi đâm trúng địa hình hoặc tướng địch, gây nổ lớn hất tung và gây sát thương vật lý diện rộng.',
        comboTip: 'Chở theo một pháp sư hoặc xạ thủ/đấu sĩ lao thẳng vào dàn sau của đối phương để tạo ra pha gank không thể cản phá.'
      }
    ],
    lore: `Chiến binh quả cảm sinh ra từ các bộ tộc sa mạc giáp ranh Đế Chế Norman. Bijan từng là một đấu sĩ nô lệ quật khởi giành lại tự do cho đồng bào mình. Cùng người bạn đồng hành là chú linh thú cát trung thành, anh trở thành người dẫn lối cho những người lữ hành lương thiện và là ngọn cờ đấu tranh cho công lý và tự do khắp Athanor.`,
    battleTips: [
      'Chiêu cuối cho phép chở một đồng minh di chuyển khắp bản đồ, hãy phối hợp cùng đồng đội mở gank bất ngờ.',
      'Trong lúc lái linh thú cát, có thể chủ động kích hoạt lần 2 để nhảy xuống trước và cho linh thú tự đâm tới.',
      'Lên trang bị đấu sĩ nửa công nửa thủ để vừa trâu bò vừa có sát thương dọn dẹp giao tranh.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['arthur', 'florentino', 'charlotte', 'murad', 'allain']
  },

  {
    id: 'charlotte',
    name: 'Charlotte',
    title: 'Nữ Kiếm Sĩ Hoa Hồng',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/20600s.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/20600.jpg',
    quote: 'Mũi kiếm của ta thanh lịch như cánh hồng, nhưng sắc bén tựa gai nhọn!',
    stats: { damage: 9, toughness: 7, mobility: 8, crowdControl: 7, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Thất Tinh Quang Mang Kiếm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/1-removebg-preview.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Khi tung kỹ năng trúng đích, Charlotte tích lũy điểm dấu ấn. Tích đủ 5 điểm, đòn đánh kế tiếp chuyển thành Thất Tinh Kiếm: Lướt tới đâm 7 nhát kiếm liên hoàn, gây sát thương lớn, giảm tốc đánh đối thủ và miễn thương.',
        comboTip: 'Luôn duy trì và kích hoạt Thất Tinh Kiếm để nhận hiệu ứng miễn thương 40% trong giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Tam Giác Kiếm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/2-removebg-preview.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng ra một luồng kiếm khí hình tam giác về phía trước gây sát thương vật lý và tăng tốc độ chạy cực lớn cho Charlotte nếu trúng đích.',
        comboTip: 'Dùng chiêu 1 từ xa để gia tăng tốc chạy tiếp cận đối thủ và tích điểm nội tại đầu tiên.'
      },
      {
        slot: 'skill2',
        name: 'Tật Tinh Thứ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/3-removebg-preview.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt tới đâm kiếm 6 lần liên tiếp cực nhanh, gây sát thương vật lý liên hoàn và hồi một lượng máu lớn cho bản thân.',
        comboTip: 'Kỹ năng hồi máu và tích stack nội tại thần tốc, hồi chiêu rất nhanh khi chém trúng tướng địch.'
      },
      {
        slot: 'ultimate',
        name: 'Quang Mang Kiếm Trận',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/07/4-removebg-preview.png',
        cooldown: '18.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vẽ ra một kiếm trận hoa hồng 7 cánh trên mặt đất, nhận hiệu ứng miễn khống và giảm sát thương, sau đó hất tung tất cả kẻ địch trong vùng khi kiếm trận bộc phát.',
        comboTip: 'Dùng chiêu cuối để né khống chế của đối phương đồng thời giữ chân kẻ địch cho chuỗi Thất Tinh Kiếm.'
      }
    ],
    lore: `Nữ kiếm sĩ tài ba xuất thân từ gia tộc quý tộc danh giá của Đế Chế Norman, nổi tiếng với kỹ năng đâm kiếm hoa mỹ và chuẩn xác tuyệt đối. Charlotte khoác lên mình bộ giáp kiếm sĩ thanh lịch, chu du khắp các miền đất của Athanor để trau dồi kiếm đạo đỉnh cao và bảo vệ danh dự hiệp sĩ của gia tộc.`,
    battleTips: [
      'Charlotte là khắc tinh của mọi tướng phụ thuộc đòn đánh thường nhờ khả năng giảm tốc đánh kẻ địch lên đến 80%.',
      'Luôn canh thời gian để chuỗi combo kích hoạt Thất Tinh Kiếm diễn ra liên tục.',
      'Chiêu cuối có miễn khống chế và miễn thương lớn, hãy dùng để chặn đòn hiểm của đối thủ.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Giáp Gaia', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['florentino', 'astrid', 'allain', 'bijan', 'arthur']
  },

  {
    id: 'iggy',
    name: 'Iggy',
    title: 'Ma Lửa Nổi Loạn',
    factionId: 'norman',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b4563fbfd5756caeea04b7ef488ee39f60fffd803e9ab1.jpeg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6ac7db04e9ac98ca09584ce0b326d28260feffae629381.jpeg',
    quote: 'Ngọn lửa này không chịu sự kiểm soát của bất kỳ ai, hãy cháy rụi đi!',
    stats: { damage: 9, toughness: 4, mobility: 6, crowdControl: 6, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Hỏa Năng Tích Tụ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fa19d3fd1f2f8210a7f25dc35bdfc6e560feff5450d5e1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Iggy không dùng năng lượng thông thường mà sử dụng điểm Hỏa Năng (tối đa 3 điểm). Các kỹ năng tiêu tốn điểm hỏa năng và tự động hồi phục theo thời gian hoặc khi đánh trúng tướng địch.',
        comboTip: 'Quản lý điểm hỏa năng cẩn thận để không bị cạn kiệt đạn lửa giữa giao tranh quan trọng.'
      },
      {
        slot: 'skill1',
        name: 'Ma Thuật Lửa Điên Cuồng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e3500c0fbf9591faba7aaab9b8712d6c60fefbecc20e11.png',
        cooldown: '2.0s',
        energyCost: '1 Hỏa Năng',
        damageType: 'Phép',
        description: 'Bắn liên tiếp các quả cầu lửa vào khu vực chỉ định gây sát thương phép. Có thể bắn liên hoàn nhiều lần với tốc độ cực nhanh.',
        comboTip: 'Kỹ năng cấu rỉa máu và dọn lính siêu tốc từ cự ly an toàn.'
      },
      {
        slot: 'skill2',
        name: 'Hỏa Tốc Di Chuyển',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/92f4da3f04aaa4919d893c6c65ee30b660fefeb53a2e21.png',
        cooldown: '10.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Iggy nhận lượng tốc chạy khổng lồ trong vài giây. Trong thời gian này, chiêu 1 được cường hóa thành luồng lửa đẩy lùi và làm choáng kẻ địch trúng phải.',
        comboTip: 'Bật chiêu 2 để tăng tốc chạy trốn sát thủ hoặc lao lên làm choáng đối thủ.'
      },
      {
        slot: 'ultimate',
        name: 'Hỏa Bạo Tận Thế',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fb50e93ba4a478abc1c5e778a0e4fa6960fefeeed958d1.png',
        cooldown: '25.0s (Tích trữ 2 lần)',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Gồng sức phóng ra một quả cầu đại hỏa cầu khổng lồ với tầm bắn gần nửa bản đồ, phát nổ gây lượng sát thương phép hủy diệt diện rộng.',
        comboTip: 'Có thể tích trữ 2 lần đại hỏa cầu, dùng để bắn liên tiếp 2 phát dọn sạch dàn sau của đối phương.'
      }
    ],
    lore: `Cậu thiếu niên sở hữu ma thuật lửa bẩm sinh phi thường sinh ra tại thị trấn ngoại ô Norman. Do tính cách bốc đồng, ngang tàng và không chịu khuất phục trước bất kỳ khuôn phép nào, Iggy từng suýt bị trục xuất trước khi chứng minh được ngọn lửa của cậu có thể trở thành vũ khí vô giá bảo vệ biên cương vương quốc.`,
    battleTips: [
      'Tầm bắn của chiêu cuối cực kỳ xa, hãy quan sát bản đồ nhỏ để bắn tỉa chi viện cho đồng đội ở xa.',
      'Chiêu 2 kết hợp chiêu 1 là công cụ tự vệ hoàn hảo để đẩy lùi sát thủ lao vào.',
      'Lên trang bị tăng sát thương phép và xuyên giáp phép như Mặt Nạ Berith và Trượng Hỗn Mang.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['d_arcy', 'dirak', 'lorion', 'valhein', 'arthur']
  },

  {
    id: 'garret',
    name: 'Garret',
    title: 'Thợ Săn Rồng',
    factionId: 'norman',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/11/bolt-baron-225.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/11/59800.jpg',
    quote: 'Máu rồng rực cháy trong huyết quản, vũ khí của ta sẽ nghiền nát mọi kẻ ngáng đường!',
    stats: { damage: 9, toughness: 8, mobility: 6, crowdControl: 7, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Long Huyết Bá Thể',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/11/bolt-baron-passive.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Mỗi khi Garret tung kỹ năng hoặc tấn công, ông hấp thụ huyết mạch long tộc, tăng giáp, kháng phép và hồi phục máu theo phần trăm máu đã mất.',
        comboTip: 'Càng thấp máu, khả năng chống chịu và phục hồi của Garret càng trở nên điên cuồng.'
      },
      {
        slot: 'skill1',
        name: 'Long Kích Trảm Phong',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/11/bolt-baron-s1.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung đại đao chém ra luồng sóng xung kích hình bán nguyệt, gây sát thương vật lý và làm chậm kẻ địch, đòn chém ở rìa rìa gây thêm sát thương chuẩn.',
        comboTip: 'Canh cự ly chém trúng kẻ địch bằng rìa vũ khí để tối đa hóa sát thương chuẩn.'
      },
      {
        slot: 'skill2',
        name: 'Long Trảo Trói Buộc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/11/bolt-baron-s2.png',
        cooldown: '9.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Triệu hồi móng vuốt rồng từ lòng đất tóm lấy tất cả kẻ địch trong khu vực chỉ định, kéo chúng về phía bản thân và làm choáng 1 giây.',
        comboTip: 'Kỹ năng khống chế gom mục tiêu tuyệt vời trước khi tung chiêu cuối hủy diệt.'
      },
      {
        slot: 'ultimate',
        name: 'Nộ Long Giáng Trần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/11/bolt-baron-s3.png',
        cooldown: '35.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Nhảy vút lên không trung hóa thân thành hình ảnh nộ long cuồng nộ rồi giáng mạnh xuống tâm giao tranh, gây sát thương vật lý diện rộng khổng lồ và hất tung toàn bộ kẻ địch.',
        comboTip: 'Chiêu mở giao tranh mẫu mực, phối hợp nhịp nhàng cùng đồng đội để quét sạch cả đội hình địch.'
      }
    ],
    lore: `Chiến binh kỳ cựu mang dòng máu thợ săn rồng cổ xưa của phương bắc vương quốc Norman. Garret đã tiêu diệt vô số ác long vùng băng giá và hấp thụ sức mạnh của chúng vào thanh đại đao khổng lồ của mình. Khi vương quốc Norman đứng trước mối họa xâm lăng của Vực Hỗn Mang, ông trở về phục vụ dưới cờ vua Thane, trở thành bức tường thành không thể xuyên thủng.`,
    battleTips: [
      'Garret cực kỳ mạnh trong các pha giao tranh tổng ở địa hình hẹp trong rừng.',
      'Sử dụng chiêu 2 gom nhiều mục tiêu lại rồi dậm chiêu cuối hất tung cả đám.',
      'Lên trang bị đấu sĩ công thủ toàn diện để vừa quẩy lâu trong giao tranh vừa có sát thương hạ gục đối thủ.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Giáp Gaia', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['arthur', 'thane', 'astrid', 'allain', 'florentino']
  }
];
