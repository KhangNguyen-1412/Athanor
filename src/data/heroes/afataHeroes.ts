import type { Hero } from '../../types/athanor';

export const AFATA_HEROES: Hero[] = [
  {
    id: 'telannas',
    name: 'Tel\'Annas',
    title: 'Nữ Vương Tinh Linh',
    factionId: 'afata',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5064b1bbcb8dcac94f88292537d6c35459e96577aa90c1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/10ff0b5efd014145033937ecb15582c05ef5f6565f24f1.jpg',
    quote: 'Mỗi mũi tên của ta mang theo linh hồn của đại ngàn, thanh tẩy mọi bóng tối xâm lấn!',
    stats: { damage: 10, toughness: 3, mobility: 4, crowdControl: 6, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Sao Trời',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b1b99d92da0e373e36809d1ed2c9705159e9bfd8bf69c1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Tăng 8% công vật lý khi có tướng đồng minh xung quanh. Tầm đánh cơ bản xa hơn hầu hết các xạ thủ khác.',
        comboTip: 'Luôn di chuyển cùng trợ thủ để kích hoạt tối đa nội tại tăng công vật lý.'
      },
      {
        slot: 'skill1',
        name: 'Ưng Nhãn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ae5688049eae92b95f9305b0e4fd68e459e9c03a297371.png',
        cooldown: '8.0s',
        energyCost: '65',
        damageType: 'Hỗn hợp',
        description: 'Gia tăng tầm bắn cực đại và tốc đánh trong 3 giây. Đòn đánh gây đồng thời sát thương vật lý và sát thương phép làm chậm đối thủ.',
        comboTip: 'Bật Ưng Nhãn để bắn trụ ngoài tầm ngắm hoặc cấu rỉa kẻ địch từ khoảng cách chúng không thể chạm tới.'
      },
      {
        slot: 'skill2',
        name: 'Ám Tên',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/22c0bd0e001ea08e785626041a99c36c59e9c08e5fbb81.png',
        cooldown: '7.0s',
        energyCost: '70',
        damageType: 'Vật lý',
        description: 'Bắn ra 3 mũi tên hình nón gây sát thương vật lý và làm chậm 30% tốc chạy của tất cả mục tiêu trúng đòn.',
        comboTip: 'Dùng để kiểm tra bụi cỏ từ xa và làm chậm kẻ địch đang lao vào tiếp cận.'
      },
      {
        slot: 'ultimate',
        name: 'Hỗn Mang Tiễn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/17742dbde15b1f595f08b8c475b3bbe759e9c0e061d361.png',
        cooldown: '40.0s',
        energyCost: '130',
        damageType: 'Vật lý',
        description: 'Tụ lực bắn mũi tên ánh sao xuyên suốt bản đồ, gây sát thương vật lý cực lớn và làm choáng nạn nhân tối đa 1.75 giây (choáng tăng theo khoảng cách).',
        comboTip: 'Dùng mở giao tranh từ xa xuyên bản đồ hoặc ngắt chiêu niệm của đối thủ.'
      }
    ],
    lore: `Nữ Vương cai trị Rừng Nguyên Sinh, huyền thoại bảo vệ thế giới của phe Ánh Sáng. Trong lần Hắc Ám xâm lăng đầu tiên, nàng đã bắn mũi tên định mệnh xuyên tim kết liễu chúa tể Volkath. Do nhiễm tà khí hắc ám từ hắn, nàng phải tự phong ấn vào giấc ngủ ngàn năm. Khi tỉnh giấc, Tel'Annas đã thuần hóa được sức mạnh bóng tối và tiếp tục dẫn dắt muôn loài gìn giữ đại ngàn.`,
    battleTips: [
      'Giữ vị trí cực kỳ cẩn thận phía sau hàng phòng ngự vì Tel\'Annas không có chiêu lướt vượt địa hình.',
      'Sử dụng chiêu 1 để bào máu tướng đỡ đòn đối phương cực nhanh nhờ sát thương hỗn hợp phép/vật lý.',
      'Bắn chiêu cuối trúng mục tiêu quan trọng từ xa tạo tiền đề giao tranh hủy diệt.'
    ],
    recommendedItems: ['Cung Tà Ma', 'Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['krixi', 'volkath', 'dyadia', 'helen', 'elandorr']
  },

  {
    id: 'krixi',
    name: 'Krixi',
    title: 'Tinh Linh Thiên Nhiên',
    factionId: 'afata',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7f04b1fd7f0520dd1ccbd1caad6faf1a5847d3f72e85b1.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3fa6fb1c1695570e79df259229e7a6c9583ff18bcefb91.jpg',
    quote: 'Đôi cánh tinh linh đưa ta bay lượn, gió bão sẽ bảo vệ sự bình yên của khu rừng!',
    stats: { damage: 9, toughness: 3, mobility: 7, crowdControl: 7, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Tung Cánh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7abdce75ba41db1cd1885528a94333b9583f8f0c775cf1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi chiêu thức tung trúng đích, Krixi được tăng 25% tốc độ di chuyển trong 2 giây.',
        comboTip: 'Tận dụng tốc chạy tăng thêm sau khi tung chiêu để thả diều và né đòn đối thủ liên tục.'
      },
      {
        slot: 'skill1',
        name: 'Bướm Ảo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3fd35932afa8ccd33d19b5d76cb7828e583f8f2b47aab1.png',
        cooldown: '5.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Phóng ra ảo ảnh bướm bay tới rồi bay về, gây sát thương phép 2 lần (lượt đi và lượt về) lên tất cả mục tiêu trên đường bay.',
        comboTip: 'Chiêu thức cấu rỉa tầm xa chủ lực, căn cự ly để kẻ địch trúng cả 2 lần sát thương bướm bay.'
      },
      {
        slot: 'skill2',
        name: 'Bão Lá Hất Tung',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d7444475377539d29711d05b3052d1ba583f8f4e924891.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Triệu hồi cơn bão lá tại điểm chỉ định, hất tung tất cả kẻ địch trúng đòn lên không trung trong 1.5 giây.',
        comboTip: 'Kỹ năng khống chế cứng hất tung diện rộng tuyệt vời để mở giao tranh hoặc chặn sát thủ lao vào.'
      },
      {
        slot: 'ultimate',
        name: 'Mưa Sao Băng Tinh Linh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/87193cc0086f381baa431a3c5fa00789583f8f72544741.png',
        cooldown: '35.0s',
        energyCost: '120',
        damageType: 'Phép',
        description: 'Krixi vừa di chuyển tự do vừa liên tục giáng những đợt mưa sao băng xuống các kẻ địch xung quanh trong 5 giây (tối đa 4 đợt mỗi tướng).',
        comboTip: 'Bật chiêu cuối di chuyển quanh đội hình đối phương để xả lượng sát thương phép bão táp.'
      }
    ],
    lore: `Bạn thân từ thuở nhỏ của Nữ Vương Tel'Annas, giữ vai trò lãnh tụ thủ vệ quân Rừng Nguyên Sinh. Trong suốt ngàn năm Tel'Annas chìm vào giấc ngủ say, chính Krixi đã thay mặt Nữ Vương tập hợp và chỉ huy đội quân tinh linh kiên cường cản bước các đợt tấn công của Vực Hỗn Mang.`,
    battleTips: [
      'Krixi là pháp sư truyền thống có lối chơi toàn diện, dễ làm quen và cực kỳ hiệu quả.',
      'Combo: Chiêu 2 hất tung -> Chiêu 1 bướm bay 2 lượt -> Chiêu cuối mưa sao băng càn quét.',
      'Nội tại tăng 25% tốc chạy giúp Krixi di chuyển đảo gank và giữ cự ly giao tranh rất an toàn.'
    ],
    recommendedItems: ['Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Băng', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['telannas', 'zill', 'helen', 'dyadia']
  },

  {
    id: 'zill',
    name: 'Ma Phong Ba',
    title: 'Ma Phong Ba',
    factionId: 'afata',
    role: 'Sát Thủ',
    secondaryRole: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b1a6c37ad9558ac5767e25ded5b6fcf759966ca7c1d431.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/256b32f0089b83919788d8a4d0cf88cc59966ed3684ca1.jpg',
    quote: 'Gió tự do nay hóa thành phong ba bão táp, canh giữ giấc ngủ thiêng!',
    stats: { damage: 10, toughness: 4, mobility: 9, crowdControl: 5, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Bão Tố',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ff7bd506b87f98d90d728f711b2ec68a59966d33cf9471.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Chiêu thức khắc dấu ấn bão tố (tối đa 3 tầng). Đủ 3 tầng, đòn đánh thường kế tiếp gây sát thương phép lớn theo phần trăm máu và LÀM MỚI NGAY HỒI CHIÊU 2.',
        comboTip: 'Chém đòn đánh nội tại vào mục tiêu có 3 dấu ấn để hồi chiêu lướt liên tục nhảy múa.'
      },
      {
        slot: 'skill1',
        name: 'Phong Đao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/81927bc023db35282b06b318675f18ca59966e14ac7821.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Ném song đao gió theo đường thẳng gây sát thương phép và làm chậm 50% tốc chạy kẻ địch.',
        comboTip: 'Chiêu thức tầm xa dùng để tích 2 tầng dấu ấn bão tố lên mục tiêu.'
      },
      {
        slot: 'skill2',
        name: 'Phong Độn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9f4269a267080e49bfd0b37bd22405b359966e7e2e9a01.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Dịch chuyển tức thời tới điểm chỉ định, gây sát thương phép lên tất cả kẻ địch xung quanh điểm đến.',
        comboTip: 'Dùng để tiếp cận mục tiêu hoặc vượt địa hình thoát thân, hồi chiêu ngay khi kích hoạt nội tại.'
      },
      {
        slot: 'ultimate',
        name: 'Phong Ba Bão Táp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/670350a2da1c94dbe0f35ffd38c90fb259966ebdb623b1.png',
        cooldown: '35.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Zill hóa thân thành cơn lốc xoáy chém liên tiếp 5 nhát vào kẻ địch xung quanh. Trong suốt thời gian thi triển, Zill HOÀN TOÀN BẤT KHẢ XÂM PHẠM.',
        comboTip: 'Bắt lẻ mục tiêu đứng đơn độc để cả 5 nhát chém bão táp cùng găm vào một kẻ địch bốc hơi cây máu.'
      }
    ],
    lore: `Thân vệ của Rừng Nguyên Sinh. Zill vốn là một cơn gió tự do ngao du khắp đất trời, nhưng đã tình nguyện từ bỏ sự tự do đó để canh giữ giấc ngủ ngàn năm của Nữ Vương Tel'Annas. Khi chiến hỏa lại bùng lên, lưỡi đao phong ba của Zill lập tức trở thành nỗi khiếp đảm của quân đoàn bóng tối.`,
    battleTips: [
      'Zill là sát thủ phép đi rừng có độ cơ động và dồn sát thương đơn mục tiêu cực mạnh.',
      'Chiêu cuối giúp Zill hoàn toàn bất tử, hãy dùng để né các chiêu thức sát thương sốc chết người của đối thủ.',
      'Canh bắt các mục tiêu chủ lực đi lẻ để chiêu cuối không bị phân tán sát thương sang nhiều tướng khác.'
    ],
    recommendedItems: ['Gươm Loki', 'Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Quyền Trượng Rhea', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['telannas', 'krixi', 'lumburr', 'volkath']
  },

  {
    id: 'lumburr',
    name: 'Lumburr',
    title: 'Khổng Lồ Lục Địa',
    factionId: 'afata',
    role: 'Trợ Thủ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/119dc57d5a3a59b520b93a42301ffb135e7dedbf1c28a1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a30b48a090dae27485d5b60ca3a5865d587859276d69a1.jpg',
    quote: 'Mặt đất là tấm khiên bất diệt, bảo vệ sự sống của muôn loài!',
    stats: { damage: 4, toughness: 10, mobility: 6, crowdControl: 10, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Ỷ Cự Đại Địa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c1a3c5396b8cc76452b9bbbd8ba70aa65875b567028fb1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Lumburr tăng vĩnh viễn lượng lớn giáp và giáp phép cho bản thân và đồng minh có lượng máu thấp nhất ở gần.',
        comboTip: 'Luôn di chuyển sát cạnh xạ thủ để chia sẻ lượng giáp phòng ngự dày dặn của đất mẹ.'
      },
      {
        slot: 'skill1',
        name: 'Đất Bằng Bắn Phá',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a35f4b82e40be2c9be97123b6ddb1c375875b7dbe06a81.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Nện xuống đất làm văng đá nham thạch gây sát thương vật lý và GIẢM 25% CÔNG VẬT LÝ VÀ PHÉP của kẻ địch trúng đòn.',
        comboTip: 'Nện trúng sát thủ đối phương ngay khi chúng lao vào để giảm một phần tư sát thương của chúng.'
      },
      {
        slot: 'skill2',
        name: 'Bất Khả Cản Phá',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8460fbae99e55da9c206313656dc36205875b855bc9141.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Lao thẳng về phía trước hất tung kẻ địch trên đường chạy, đồng thời ban lá chắn và tăng tốc chạy cho đồng minh đi qua.',
        comboTip: 'Vừa dùng để hất tung khống chế mở giao tranh vừa lướt xuyên qua đồng đội để tạo giáp bảo vệ.'
      },
      {
        slot: 'ultimate',
        name: 'Long Trời Lở Đất',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fd854ecf2e82d85fcd8f1cc67f4512545875b89f098dc1.png',
        cooldown: '40.0s',
        energyCost: '110',
        damageType: 'Vật lý',
        description: 'Tụ lực rồi nện cực mạnh tạo vết nứt địa chấn khổng lồ xé toạc mặt đất, hất tung kẻ địch trong 1.5 giây và để lại dung nham làm chậm 60%.',
        comboTip: 'Mở giao tranh tổng hủy diệt ở các khu vực đường hẹp, hất tung cả đội hình đối phương.'
      }
    ],
    lore: `Nhận lời mời của Zill, vị thần khổng lồ lục địa rời khỏi nơi núi rừng tĩnh lặng để tham gia vào đội quân bảo vệ thế giới. Lumburr là tấm khiên vững chãi bằng đá tảng ngăn chặn hàng vạn ác quỷ xâm lăng bờ cõi Afata.`,
    battleTips: [
      'Lumburr là một trong những trợ thủ mở giao tranh khống chế cứng hoàn hảo nhất.',
      'Chiêu 1 giảm 25% công của kẻ địch, hãy luôn tung vào xạ thủ hoặc sát thủ đối phương trong giao tranh.',
      'Combo: Chiêu 2 húc hất tung tiếp cận -> Chiêu cuối nện vết nứt địa chấn -> Chiêu 1 giảm công.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huy Chương Troy', 'Giáp Thống Khổ'],
    relatedHeroIds: ['zill', 'telannas', 'zuka', 'helen']
  },

  {
    id: 'zuka',
    name: 'Zuka',
    title: 'Đại Sư Gấu Trúc',
    factionId: 'afata',
    role: 'Đấu Sĩ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d5166c51f37b444810f2ae3df056920d5c4938c59a4821.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ba9f847a4e2c11b8bb91aeb40dacb9865c4938a68a1261.jpg',
    quote: 'Trúc trượng hành hiệp trượng nghĩa, trừ gian diệt ác bảo vệ hòa bình!',
    stats: { damage: 10, toughness: 5, mobility: 10, crowdControl: 7, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Võ Công Trúc Trượng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3a93009e66b6b3e5ba706d98cacd5802596c75914e0ea1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Gây sát thương lên tướng địch giúp Zuka nhận thêm 20% công vật lý trong 4 giây. Sau mỗi lần dùng chiêu, đòn đánh kế tiếp được tăng tầm lướt và gây thêm sát thương.',
        comboTip: 'Luôn đánh thường một phát sau mỗi chiêu thức để tối đa hóa lượng sát thương đòn gõ trúc trượng.'
      },
      {
        slot: 'skill1',
        name: 'Loạn Đả Bổng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f34afbab2fedcab295fc114a696fb23c596c75c66d5b21.png',
        cooldown: '8.0s (2 lần lướt)',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt tới phía trước đánh bổng gây sát thương vật lý. Trong 5 giây có thể lướt thêm một lần nữa qua các địa hình hiểm trở.',
        comboTip: 'Lướt 1 -> Đánh thường -> Lướt 2 -> Đánh thường để dồn sát thương cơ động.'
      },
      {
        slot: 'skill2',
        name: 'Phi Thân Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/16c8ac0619c53a1bd59bd4dfa2dd3f6e596c76135df001.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Zuka lộn nhào về phía trước, nếu trúng tướng địch sẽ nhận lớp lá chắn dày và hất tung nạn nhân 0.75 giây.',
        comboTip: 'Kỹ năng tạo giáp ảo và khống chế hất tung tuyệt vời khi trao đổi chiêu thức.'
      },
      {
        slot: 'ultimate',
        name: 'Trầm Trọng Lực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0beb67ad3bb69a788afda77e97ac6283596c766121e3a1.png',
        cooldown: '30.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Zuka nhảy vút lên cao rồi giáng cây trúc trượng khổng lồ nện xuống đất, gây sát thương vật lý diện rộng và LÀM CHOÁNG 1 giây tất cả kẻ địch.',
        comboTip: 'Nhảy chiêu cuối từ trong bụi cỏ đè bẹp chủ lực đối phương rồi gõ liên hoàn kết liễu.'
      }
    ],
    lore: `Từng sống tại một ngôi làng trù phú thuộc Vương Quốc Rồng (Long Chí Quốc). Sau khi quê hương bị quân đoàn sa đọa tàn phá, Zuka rời đi, chu du tới Khu Rừng Nguyên Sinh Afata và liên minh với Lâu Đài Khởi Nguyên để chiến đấu bảo vệ hòa bình, hành hiệp trượng nghĩa cứu giúp muôn loài.`,
    battleTips: [
      'Zuka là sát thủ đấu sĩ cơ động bậc nhất với 4 lần lướt nhảy vượt mọi địa hình.',
      'Combo bắt lẻ một nốt nhạc: Chiêu cuối đè choáng -> Đánh thường -> Chiêu 2 hất tung lấy giáp -> Đánh thường -> Chiêu 1 -> Đánh thường.',
      'Rình rập trong bụi cỏ đường sông để bắt chết xạ thủ hoặc pháp sư đối phương di chuyển hớ hênh.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thương Longinus', 'Phức Hợp Kiếm', 'Thánh Kiếm', 'Nanh Fenrir'],
    relatedHeroIds: ['lumburr', 'telannas', 'yue', 'lubo']
  },

  {
    id: 'teemee',
    name: 'TeeMee',
    title: 'Trái Tim Biển Cả',
    factionId: 'afata',
    role: 'Trợ Thủ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d048143eef92ff2734c99f53b46e19db5a4dabef8a0fe1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/25e974e952adeaf416ea2bf3c751f7c05a4df884a0bf41.jpg',
    quote: 'Vàng rơi đầy đất, phép hồi sinh sẽ đưa bạn bè trở về!',
    stats: { damage: 5, toughness: 9, mobility: 7, crowdControl: 9, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Vàng Vơi Đầy',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5eb74ba71b90756d5801a46731a528f15a4dfae5ee3271.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi lính hoặc quái vật chết xung quanh, TeeMee và đồng minh lân cận ĐƯỢC NHẬN THÊM 25% VÀNG thưởng.',
        comboTip: 'Đi cùng xạ thủ để giúp xạ thủ tích lũy lượng tiền trang bị vượt trội hơn đối phương từ 1-2 món đồ.'
      },
      {
        slot: 'skill1',
        name: 'Rắm Thần Lực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7507ea316bb258ee034bd93d992ccc575a4dfb3779acf1.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'TeeMee phồng má nhịn đánh rắm, tăng dần tốc chạy. Khi phát nổ gây sát thương phép và làm choáng tối đa 1.5 giây (hồi chiêu ngay nếu nổ trúng tướng).',
        comboTip: 'Gồng chiêu 1 chạy nhanh tiếp cận rồi nổ choáng tối đa để làm mới chiêu thức nổ thêm lần nữa.'
      },
      {
        slot: 'skill2',
        name: 'Móc Xích Phóng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/01e493e6efcc881998595b091d51ec7a5a4dfb843dc091.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Phóng lưỡi móc xích vào mục tiêu (kể cả đồng minh), kéo bản thân bay vút tới mục tiêu và làm choáng 0.5 giây nếu là kẻ địch.',
        comboTip: 'Dùng để đu bám vào quái, lính hoặc đồng đội để rút ngắn khoảng cách tiếp cận.'
      },
      {
        slot: 'ultimate',
        name: 'Phục Sinh Thần Kỳ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/efe767e37dba520e1a005d3644f575cf5a4dfbde43c2c1.png',
        cooldown: '60.0s',
        energyCost: '130',
        damageType: 'Hỗ trợ',
        description: 'TeeMee tạo trận pháp phục sinh trong 3 giây. Nếu TeeMee hoặc đồng minh thấp máu nhất ngã xuống trong thời gian này, họ sẽ LẬP TỨC HỒI SINH với 2000 máu và nổ sát thương xung quanh.',
        comboTip: 'Canh thời điểm chủ lực bị dồn sát thương sốc sắp chết để bấm chiêu cuối hồi sinh lật ngược giao tranh.'
      }
    ],
    lore: `Hai chú chồn Tee và Mee đến từ Rừng Chạng Vạng. Sau khi nhặt được bộ giáp chiến binh do Max chế tạo trên chiến trường khắc chữ "Hồi Sinh", Mee mưu trí chỉ huy còn Tee điều khiển bộ giáp, cả hai lập nên chiến công lớn chống lại đạo quân Lokheim và trở thành cặp đôi hiệp sĩ quả cảm của Afata.`,
    battleTips: [
      'Nội tại tăng 25% vàng giúp đội bạn có lợi thế kinh tế vượt trội suốt trận đấu.',
      'Chiêu cuối hồi sinh đòi hỏi căn nhịp cực kỳ chuẩn xác trong 3 giây hiệu lực.',
      'Combo: Gồng chiêu 1 tăng tốc -> Chiêu 2 đu bám vào đối thủ -> Nổ chiêu 1 choáng tối đa -> Nổ tiếp lần 2.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huy Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['max', 'baldum', 'krixi', 'telannas']
  },

  {
    id: 'baldum',
    name: 'Baldum',
    title: 'Nhân Mã Cuồng Phong',
    factionId: 'afata',
    role: 'Trợ Thủ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e751e70db18557783c2d23c9e5383e095b6bb947482b11.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d9c34b86f1ad89c132e316672bfcd7f55b6bb975badd41.jpg',
    quote: 'Vó ngựa nhân mã dẫm nát bóng tối, biểu tượng sức mạnh bất khuất của Afata!',
    stats: { damage: 6, toughness: 10, mobility: 6, crowdControl: 10, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Cường Tráng Nhân Mã',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e5583ac5f59422b8d73fbc8a9352f0d05b6ac7a850e771.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Baldum nhận thêm 18% giáp từ trang bị chuyển hóa thành công vật lý, đòn đánh thường gây thêm sát thương phép.',
        comboTip: 'Càng lên nhiều giáp vật lý Baldum càng cứng cáp và đánh thường càng đau.'
      },
      {
        slot: 'skill1',
        name: 'Vật Tổ Vẩy Ngược',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3706348e31f3d458523fa5a33a0aa7de5b6aca86c25b11.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Baldum lướt tới húc kẻ địch và hất văng nạn nhân ra sau lưng mình, làm chậm 90% tốc chạy.',
        comboTip: 'Tốc Biến ra sau lưng kẻ địch rồi dùng chiêu 1 vẩy ngược đối phương về phía đội hình của ta.'
      },
      {
        slot: 'skill2',
        name: 'Địa Chấn Nhân Mã',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4400c91ee5474ad0c9726119be88da315b6acb6f623181.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Dẫm móng ngựa liên tục xuống đất gây sát thương vật lý diện rộng, làm chậm và GIẢM 30% SÁT THƯƠNG của kẻ địch xung quanh.',
        comboTip: 'Giảm sát thương diện rộng cực mạnh khi đứng giữa giao tranh tổng.'
      },
      {
        slot: 'ultimate',
        name: 'Địa Giam Chôn Vùi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/849f814ac016a6f58c8526b5c7a088175b6ace58c141b1.png',
        cooldown: '45.0s',
        energyCost: '110',
        damageType: 'Vật lý',
        description: 'Phóng vật tổ tạo một hố địa giam khổng lồ sau 0.5 giây. TẤT CẢ KẺ ĐỊCH RƠI VÀO HỐ BỊ CHÔN VÙI DƯỚI LÒNG ĐẤT TRONG 3 GIÂY (hoàn toàn bất động và không thể hành động).',
        comboTip: 'Chiêu thức cô lập chia cắt giao tranh số 1: chôn vùi tuyến trước để đội ta tiêu diệt tuyến sau hoặc ngược lại.'
      }
    ],
    lore: `Chiến binh nhân mã huyền thoại tồn tại từ thời kỳ sơ khai của vương quốc Afata. Baldum là biểu tượng sức mạnh kiên cường vững chãi, luôn xông pha dẫn đầu cổ vũ tinh thần cho hàng ngũ tinh linh chống lại đội quân Lokheim của Vực Hỗn Mang.`,
    battleTips: [
      'Chiêu cuối chôn vùi có thể dùng để cô lập các vị tướng nguy hiểm hoặc cứu trụ khi kẻ địch băng trụ.',
      'Combo: Chiêu 1 lướt vẩy ngược chủ lực đối phương về -> Chiêu 2 dẫm chân giảm sát thương.',
      'Cần tính toán điểm rơi của chiêu cuối để không bị đối phương né tránh bằng chiêu lướt.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huy Chương Troy', 'Giáp Thống Khổ'],
    relatedHeroIds: ['teemee', 'telannas', 'lumburr', 'volkath']
  },

  {
    id: 'helen',
    name: 'Helen',
    title: 'Tiên Linh Hòa Bình',
    factionId: 'afata',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e645dfa331fa48d593b33352e1f8030e636e1b3e19b951.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_3716a3efabe82c8eddbefd724e6d7a6f658d37928a262-1.jpg',
    quote: 'Hơi thở của Tổ Thụ và di nguyện của sư phụ Payna sẽ luôn chữa lành mọi vết thương!',
    stats: { damage: 4, toughness: 7, mobility: 6, crowdControl: 7, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Thần Hộ Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-4.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi bị tấn công nhận thêm lượng lớn tốc chạy và hồi máu liên tục trong 2 giây đồng thời phản đòn làm chậm kẻ tấn công.',
        comboTip: 'Nội tại giúp Helen cực kỳ khó bị sốc chết khi bị sát thủ đối phương bắt lẻ.'
      },
      {
        slot: 'skill1',
        name: 'Ánh Sáng Sinh Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-3.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Giải phóng hào quang ánh sáng hồi phục máu liên tục cho bản thân và tất cả đồng minh xung quanh trong 3 giây.',
        comboTip: 'Bật chiêu 1 khi đứng cạnh đồng minh để biến thành hồ máu di động hồi phục cho cả đội.'
      },
      {
        slot: 'skill2',
        name: 'Linh Hoa Rực Rỡ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-2.png',
        cooldown: '9.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Bắn ra một đóa hoa ánh sáng nảy liên tục giữa các mục tiêu tối đa 6 lần, gây sát thương phép và làm choáng mỗi nạn nhân trúng đòn 0.75 giây.',
        comboTip: 'Chiêu thức khống chế nảy lan cực kỳ khó chịu khi đối phương đứng co cụm gần nhau hoặc gần đàn lính.'
      },
      {
        slot: 'ultimate',
        name: 'Biển Hoa Che Chở',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-1.png',
        cooldown: '45.0s',
        energyCost: '120',
        damageType: 'Hỗ trợ',
        description: 'Tạo kết giới biển hoa thiêng liêng, ban tặng lượng lớn giáp và giáp phép cho toàn bộ đồng minh trong vùng, đồng thời hồi máu ồ ạt cho đồng đội thấp máu nhất.',
        comboTip: 'Kích hoạt khi đội hình đối phương chuẩn bị xả các chiêu thức diện rộng để hóa giải hoàn toàn đợt tấn công.'
      }
    ],
    lore: `Tinh linh cuối cùng do Tổ Thụ của Rừng Nguyên Sinh sinh ra. Từng mắc sai lầm khiến rừng bị xâm nhập và gián tiếp gây ra sự hy sinh anh dũng của sư phụ Payna, Helen đã nhận ra trách nhiệm, trưởng thành vượt bậc và chính thức kế thừa vị trí Thần Hộ Vệ Biển Hoa của Payna.`,
    battleTips: [
      'Helen là cỗ máy bơm máu số 1 Liên Quân, hãy luôn giữ vị trí đứng cạnh xạ thủ chủ lực.',
      'Chiêu 2 nảy làm choáng rất nhiều lần khi kẻ địch đứng gần lính hoặc đứng co cụm.',
      'Chiêu cuối tăng lượng giáp ảo khổng lồ giúp bảo vệ đồng đội khỏi những pha dồn sát thương sốc chết người.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Thuật Sĩ', 'Khiên Huyền Thoại', 'Huân Chương Troy', 'Giáp Gaia', 'Sách Truy Hồn'],
    relatedHeroIds: ['payna', 'telannas', 'lauriel', 'dyadia']
  },

  {
    id: 'payna',
    name: 'Payna',
    title: 'Thần Linh Hộ Mệnh Cổ',
    factionId: 'afata',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e645dfa331fa48d593b33352e1f8030e636e1b3e19b951.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_3716a3efabe82c8eddbefd724e6d7a6f658d37928a262-1.jpg',
    quote: 'Biển hoa của đại ngàn sẽ mãi mãi ngát hương che chở linh hồn vô tội!',
    stats: { damage: 4, toughness: 7, mobility: 5, crowdControl: 8, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Thần Thú Hộ Cốt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-4.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi bị tấn công phản đòn luồng ánh sáng ma thuật làm chậm kẻ địch và hồi phục máu cho đồng minh xung quanh.',
        comboTip: 'Chủ động đón nhận đòn đánh đầu tiên của đối phương để kích hoạt làm chậm kẻ địch.'
      },
      {
        slot: 'skill1',
        name: 'Chữa Lành Tự Nhiên',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-3.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Bơm một lượng máu lớn tức thì cho bản thân và đồng minh có lượng máu thấp nhất, tăng tốc đánh cho mục tiêu.',
        comboTip: 'Cứu cánh khẩn cấp cho xạ thủ trong các pha trao đổi chiêu thức gay cấn.'
      },
      {
        slot: 'skill2',
        name: 'Cú Nảy Rừng Rậm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-2.png',
        cooldown: '9.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Phóng ra chú chim ma thuật nảy liên tục giữa các mục tiêu, gây sát thương phép và làm choáng mỗi lần chạm.',
        comboTip: 'Rất nguy hiểm khi đối phương chỉ có 2 người đứng cạnh nhau, chú chim sẽ nảy qua lại làm choáng liên tục.'
      },
      {
        slot: 'ultimate',
        name: 'Kết Giới Thần Thánh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/helen-skill-1.png',
        cooldown: '40.0s',
        energyCost: '120',
        damageType: 'Phép',
        description: 'Tạo pháp trận biển hoa bao quanh bản thân, tăng giáp cho đồng đội và sau 2 giây làm choáng tất cả kẻ địch dám đứng trong vòng.',
        comboTip: 'Dựng kết giới ngay tâm giao tranh để ép kẻ địch phải phân tán tháo chạy ra ngoài.'
      }
    ],
    lore: `Cựu Thần linh hộ mệnh của Rừng Nguyên Sinh, sư phụ tôn kính của Helen và là người bạn tri kỷ thân thiết của Đại thiên sứ Lauriel (Tháp Quang Minh). Trong lần biển hoa bị Veera và Aleister tấn công dã man, Payna đã anh dũng hy sinh thân mình để bảo vệ sự tồn vong của biển hoa và các sinh linh rừng già.`,
    battleTips: [
      'Payna là vị tướng linh hồn tiền thân của Helen, biểu tượng cho lòng hy sinh bất tử của Afata.',
      'Chiêu 2 nảy làm choáng liên tục là công cụ khắc chế cứng những pha gank đường 2 người.',
      'Chiêu cuối làm choáng diện rộng sau 2 giây đòi hỏi giữ vị trí áp sát đối phương.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Thuật Sĩ', 'Khiên Huyền Thoại', 'Huân Chương Troy', 'Giáp Gaia', 'Sách Truy Hồn'],
    relatedHeroIds: ['helen', 'lauriel', 'veera', 'aleister']
  },

  {
    id: 'lindis',
    name: 'Lindis',
    title: 'Ẩn Sĩ Nguyệt Tộc',
    factionId: 'afata',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4b2928793044600d4ca60ec95fb31f205a73d88927ca01.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/741faa9b25ae476cda4ade9402d9498f5a617bf350b501.jpg',
    quote: 'Ánh trăng bạc soi đường, bóng đêm bụi cỏ là vương quốc của ta!',
    stats: { damage: 10, toughness: 3, mobility: 9, crowdControl: 4, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Phục Kích Bụi Cỏ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d5655f3a63b12b4fb6323c81f899ee785a61c0669e8f71.png',
        cooldown: '4.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi khi bước qua bụi cỏ, Lindis được tăng tốc chạy cực lớn và đòn đánh kế tiếp bắn ra 2 phát liên tiếp.',
        comboTip: 'Di chuyển luồn lách liên tục qua các bụi cỏ để duy trì trạng thái tăng tốc chạy và bắn đôi đòn đánh.'
      },
      {
        slot: 'skill1',
        name: 'Nguyệt Quang Soi Sáng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3af16fdd29f8abb9ef6ba8df82cf005a5a61c0c835c0e1.png',
        cooldown: '4.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Chiếu rọi ánh trăng soi sáng toàn bộ khu vực xung quanh trong 5 giây (phát hiện tướng tàng hình). Nội tại: Đánh 3 phát lên cùng mục tiêu gây sát thương nổ cực lớn.',
        comboTip: 'Dùng soi sáng các bụi rậm đường sông để vô hiệu hóa hoàn toàn ý định rình rập của sát thủ địch.'
      },
      {
        slot: 'skill2',
        name: 'Bẫy Nguyệt Vực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/50239f9433a5b986616eea9c275efb155a61c115efca01.png',
        cooldown: '12.0s (Tích 2 bẫy)',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Đặt bẫy tàng hình trên mặt đất. Kẻ địch giẫm phải sẽ bị làm chậm 30%, lộ tầm nhìn và chịu sát thương vật lý.',
        comboTip: 'Rải bẫy ở các ngã ba đường rừng và lối vào bùa để kiểm soát bản đồ tuyệt đối.'
      },
      {
        slot: 'ultimate',
        name: 'Ảo Ảnh Nguyệt Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4dc8f451d8703c7444fa829f9e81e3b75a61c15bc637d1.png',
        cooldown: '2.0s (Tích 5 lần)',
        energyCost: '30',
        damageType: 'Vật lý',
        description: 'Triệu hồi ảo ảnh Nguyệt thần tấn công kẻ địch, kích hoạt toàn bộ hiệu ứng đòn đánh và có thể chí mạng. Thời gian hồi chỉ 2 giây.',
        comboTip: 'Xả liên tục các lượt chiêu cuối xen kẽ đòn đánh thường khi đang trong bụi cỏ để sốc chết đối thủ.'
      }
    ],
    lore: `Cô gái kiên cường thuộc bộ lạc tôn sùng mặt trăng bạc tại Afata. Chị gái của cô là Luna đã dũng cảm hy sinh mạng sống dưới tay tên hề độc ác Mganga để nhường linh hồn và sức mạnh mặt trăng bạc lại cho Lindis, giúp cô sống sót và trở thành nữ tư tế nhân mã bảo vệ bộ lạc.`,
    battleTips: [
      'Lindis là chúa tể rừng già, hãy luôn giao tranh ở các khu vực có nhiều bụi rậm để tối ưu tốc chạy và bắn đôi.',
      'Chiêu 1 phát hiện tàng hình khắc chế hoàn toàn Ngộ Không, Batman, Quillen hay Sinestrea.',
      'Chiêu cuối tích trữ được tới 5 lần bắn, thời gian hồi siêu ngắn dùng để dồn sát thương bùng nổ.'
    ],
    recommendedItems: ['Cung Bão Tố', 'Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Diệt Thần Cung', 'Nanh Fenrir'],
    relatedHeroIds: ['mganga', 'telannas', 'krixi', 'arum']
  },

  {
    id: 'arum',
    name: 'Arum',
    title: 'Nữ Tu Sĩ Sư Tử',
    factionId: 'afata',
    role: 'Đỡ Đòn',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7faf7c96faeb8721b936e323becb57265afea9c3c8b281.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/73118eb1f1b222ddb80c532b489d49955afeba86eeda11.jpg',
    quote: 'Linh thú sư tử bảo hộ, sự ràng buộc linh hồn sẽ bắt các ngươi phải đền tội!',
    stats: { damage: 6, toughness: 10, mobility: 4, crowdControl: 10, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Hắc Ám Linh Thú',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f83d0571926891ec5b1643a58636f35c5afeaa15aec7e3.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Những con linh thú sư tử xoay quanh Arum gây sát thương phép lên kẻ địch chạm phải và hồi phục lượng máu lớn cho Arum.',
        comboTip: 'Luôn duy trì 3 con sư tử xoay quanh người và áp sát kẻ địch để liên tục hút máu hồi phục.'
      },
      {
        slot: 'skill1',
        name: 'Thú Kích Tụ Linh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6cb03008d187d276f3a4bab82e08dfaa5afeaa2a98fdf1-1.png',
        cooldown: '5.0s (giảm 50% khi trúng tướng)',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Triệu hồi 1 linh thú sư tử xoay quanh người (tối đa 3 con) và gây sát thương phép lên kẻ địch lân cận.',
        comboTip: 'Bấm chiêu 1 liên tục trước khi ra đường để tích sẵn 3 con linh thú ngay từ cấp độ 1.'
      },
      {
        slot: 'skill2',
        name: 'Thú Sổng Chuồng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/adf5f5a265e7b85f08b09f662c506f035afeaa3f3f46b1-1.png',
        cooldown: '9.0s',
        energyCost: '80',
        damageType: 'Phép',
        description: 'Phóng tất cả linh thú sư tử hiện có nện xuống đất theo đường thẳng: con thứ 1 làm chậm, con thứ 2 làm chậm nặng hơn, con thứ 3 LÀM CHOÁNG 1 giây.',
        comboTip: 'Chiêu thức làm choáng tầm xa, nện xong nhớ bấm ngay chiêu 1 để triệu hồi lại sư tử bảo vệ.'
      },
      {
        slot: 'ultimate',
        name: 'Thú Khóa Buộc Hồn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c415b718b520b76b0a9f023faa7357bf5afeaa52160bc1-1.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Chuẩn',
        description: 'Arum trói chặt mục tiêu chỉ định trong 2.5 giây (KHÔNG THỂ GIẢI BẰNG THANH TẨY). Trong thời gian này, CẢ HAI BỊ RÀNG BUỘC CHIA SẺ 100% SÁT THƯƠNG NHẬN VÀO.',
        comboTip: 'Khóa chặt chủ lực cơ động của đối thủ dưới tầm bắn của trụ hoặc giữa vòng vây để chúng tự chết.'
      }
    ],
    lore: `Bỏ trốn khỏi cuộc hôn nhân sắp đặt để cứu chú sư tử con Leo. Cô đến Rừng Chạng Vạng lập khế ước với bầy linh thú và trở thành nữ tu sĩ quyền năng cai quản tộc sư tử tại Afata, sở hữu ma thuật trói buộc linh hồn tối thượng.`,
    battleTips: [
      'Arum là chúa tể cận chiến đầu game, có thể một mình xâm lăng rừng đối phương từ cấp 1 nhờ nội tại hút máu.',
      'Chiêu cuối khóa cứng không thể thanh tẩy, là khắc tinh số 1 của Nakroth, Florentino, Murad hay Zuka.',
      'Cần giữ máu tối đa cao hơn kẻ địch khi dùng chiêu cuối để đảm bảo kẻ địch chết trước mình.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Giáp Gaia', 'Khiên Thất Truyền', 'Phù Chú Trường Sinh', 'Giáp Thống Khổ'],
    relatedHeroIds: ['telannas', 'lindis', 'krixi', 'volkath']
  },

  {
    id: 'dyadia',
    name: 'Dyadia',
    title: 'Tinh Linh Nhân Duyên',
    factionId: 'afata',
    role: 'Trợ Thủ',
    secondaryRole: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/01/SeaTalk_IMG_20260119_104427.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/01/SeaTalk_IMG_20260119_104243.jpg',
    quote: 'Sợi tơ vô hình nối liền vạn vật: chúc phúc bằng Lương Duyên và trừng phạt bằng Ác Duyên!',
    stats: { damage: 6, toughness: 6, mobility: 8, crowdControl: 9, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Tơ Duyên Huyền Ảo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/01/SeaTalk_IMG_20260119_104157.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Dyadia nhìn thấy các sợi dây liên kết định mệnh giữa các sinh linh. Kết nối với đồng minh tạo Lương Duyên tăng tốc chạy và hồi máu; kết nối với kẻ địch tạo Ác Duyên rút cạn sinh lực.',
        comboTip: 'Duy trì kết nối dây duyên liên tục để vừa hỗ trợ đồng đội vừa làm suy yếu kẻ thù.'
      },
      {
        slot: 'skill1',
        name: 'Lương Duyên Chúc Phúc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/01/SeaTalk_IMG_20260119_104201.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Hỗ trợ',
        description: 'Phóng ra sợi tơ ánh sáng kết nối với đồng minh, liên tục hồi phục máu và ban tặng lá chắn ma thuật chống chịu sát thương.',
        comboTip: 'Bảo vệ xạ thủ khỏi các pha sốc sát thương bất ngờ từ sát thủ địch.'
      },
      {
        slot: 'skill2',
        name: 'Ác Duyên Trừng Phạt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/01/SeaTalk_IMG_20260119_104204.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Bắn ra sợi tơ hắc ám trói vào tướng địch, liên tục rút máu và làm chậm tốc chạy. Nếu mục tiêu không kịp bứt đứt sợi tơ sau 2 giây sẽ bị làm choáng.',
        comboTip: 'Bắt lẻ mục tiêu chủ lực đối phương và ép chúng phải rút lui phá vỡ đội hình.'
      },
      {
        slot: 'ultimate',
        name: 'Thiên Địa Nhân Duyên',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/01/SeaTalk_IMG_20260119_104151.png',
        cooldown: '42.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Dyadia giải phóng bầy tinh linh ánh sáng bao phủ toàn bộ trận địa, liên kết tất cả đồng minh và kẻ địch trong vùng ảnh hưởng: hồi phục lượng máu khổng lồ cho đồng minh và gây sát thương phép diện rộng lên toàn bộ kẻ địch.',
        comboTip: 'Kích hoạt trong giao tranh tổng đông người để lật ngược hoàn toàn cục diện trận đánh.'
      }
    ],
    lore: `Khác với Krixi (tinh linh thiên nhiên) hay Helen (tinh linh hòa bình), Dyadia là một tinh linh cổ xưa đại diện cho sự kết nối và "Nhân Duyên" của vạn vật tại Khu Rừng Nguyên Sinh Afata. Cô nắm giữ khả năng nhìn thấy và thao túng các sợi dây liên kết vô hình giữa mọi sinh mệnh. Cùng bầy tinh linh ánh sáng bay lượn xung quanh, Dyadia ban phát "Lương Duyên" để chúc phúc đồng đội và gieo rắc "Ác Duyên" để trừng phạt kẻ xâm lăng.`,
    battleTips: [
      'Dyadia là mẫu trợ thủ bảo kê kiêm khống chế ép góc giao tranh cực kỳ khó chịu.',
      'Sử dụng chiêu 1 để liên tục giữ máu cho xạ thủ trong giai đoạn đi đường.',
      'Chiêu cuối có tầm ảnh hưởng rất rộng, hãy canh thời điểm cả 2 đội đang dồn vào giao tranh tổng.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Mặt Nạ Berith', 'Khiên Huyền Thoại', 'Huân Chương Troy', 'Giáp Gaia'],
    relatedHeroIds: ['telannas', 'krixi', 'helen', 'elandorr']
  },

  {
    id: 'slimz',
    name: 'Slimz',
    title: 'Thỏ Tài Phiệt',
    factionId: 'afata',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/122fe2fc229ca42dcbe6946db07ccd435b345a87702a11.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/634c22afa7d0cd2415d839aef09467b658f97ecbd99a31.jpg',
    quote: 'Thương mại công bằng, không có phe phái nào quan trọng bằng lợi nhuận!',
    stats: { damage: 10, toughness: 3, mobility: 8, crowdControl: 8, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Mũi Lao Xuyên Thấu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2a544d4c59467b9f71c50f7eba68cb9a58f97ce1ef87b1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi đòn đánh thứ 3 đâm xuyên qua mục tiêu gây thêm sát thương vật lý lan ra phía sau.',
        comboTip: 'Tận dụng phát bắn thứ 3 để dọn lính nhanh và xuyên thẳng vào tướng địch đứng sau.'
      },
      {
        slot: 'skill1',
        name: 'Lao Cơ Mật',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c7621e1d53ae690e9df5cdb6f497aa3558f97d66931e01.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Phóng một mũi lao tầm siêu xa. Mũi lao bay càng xa làm choáng càng lâu (tối đa tới 2.5 GIÂY) và tăng tốc đánh cho Slimz.',
        comboTip: 'Ngắm bắn mũi lao từ trong sương mù, trúng đích sẽ tạo cú choáng 2.5 giây cho cả đội ập vào dứt điểm.'
      },
      {
        slot: 'skill2',
        name: 'Lò Xo Nhảy Nhót',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/73a9a1f8d6d4a76956290913701cd99f58f97dbe6b1c21.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Hỗ trợ',
        description: 'Slimz bật nhảy tới điểm chỉ định qua địa hình mỏng, tăng công vật lý trong 5 giây.',
        comboTip: 'Chiêu lướt vượt tường linh hoạt dùng để né sát chiêu và chọn góc bắn an toàn.'
      },
      {
        slot: 'ultimate',
        name: 'Thuốc Cà Rốt Cuồng Nộ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/17f2e75a90ee62f88942f245934ff47658f97e22495511.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Uống thuốc kích thích, tăng 20% tốc chạy và mọi đòn đánh thường trong 8 giây gây thêm SÁT THƯƠNG THEO 4-6% MÁU TỐI ĐA của mục tiêu.',
        comboTip: 'Bật chiêu cuối để biến Slimz thành cỗ máy bắn nát mọi tướng đỡ đòn trâu bò nhất chỉ trong vài giây.'
      }
    ],
    lore: `Chọn khu vực giáp ranh giữa Lâu Đài Khởi Nguyên và Rừng Chạng Vạng để làm ăn buôn bán. Với Slimz, không có phe phái nào quan trọng hơn lợi nhuận và thương mại công bằng. Hắn từng hợp tác làm ăn với Moren trước khi lâu đài cơ giới bị phá hoại và cùng liên minh với Afata chống lại tà ác.`,
    battleTips: [
      'Slimz là xạ thủ bắn theo phần trăm máu tối đa cực kỳ khủng khiếp vào giai đoạn cuối trận.',
      'Độ chuẩn xác của mũi lao chiêu 1 từ cự ly xa quyết định khả năng bắt lẻ của Slimz.',
      'Chiêu 2 nhảy vượt địa hình giúp Slimz dễ dàng thả diều các đấu sĩ cận chiến.'
    ],
    recommendedItems: ['Thánh Kiếm', 'Giày Du Mục', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['moren', 'fennik', 'telannas', 'krixi']
  },

  {
    id: 'fennik',
    name: 'Fennik',
    title: 'Cáo Siêu Thanh',
    factionId: 'afata',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ab3f51a9731ffa085fd56a87139b8a775860e26837e191.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a00ae755390f1a8fbc90b078679647295ef5e8ff15ce61.jpg',
    quote: 'Nhanh như chớp, kho báu này đã nằm gọn trong túi ta!',
    stats: { damage: 10, toughness: 3, mobility: 9, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Tai Nhạy Cảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/23a00cc52342a14c30038228de5854a25860e5da849661.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Đòn đánh thường nổ lan gây sát thương lên các mục tiêu lân cận. Fennik có thể phát hiện tầm nhìn của kẻ địch đang tàng hình hoặc núp trong bụi cỏ lân cận.',
        comboTip: 'Tận dụng nội tại để phát hiện sớm các sát thủ đang rình rập trong bụi.'
      },
      {
        slot: 'skill1',
        name: 'Kíp Nổ Sấm Sét',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b44efe73ed49f1e2b7b31adf991386945860e5fd383411.png',
        cooldown: '7.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Gắn kíp nổ lên mục tiêu hoặc công trình trong 4 giây. Đánh đủ 4 đòn sẽ kích nổ ngay lập tức gây sát thương vật lý bùng nổ diện rộng.',
        comboTip: 'Gắn kíp nổ lên trụ hoặc rồng rồi bắn 4 phát để nổ tung mục tiêu trong nháy mắt.'
      },
      {
        slot: 'skill2',
        name: 'Nẹt Điện Lướt Vệt Sét',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/52d30ec6446a5aefea18560adec8073d59707161085f01.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Lướt nhanh về phía trước để lại vệt sét làm chậm và gây sát thương liên tục. Trong khi lướt Fennik BẤT KHẢ XÂM PHẠM.',
        comboTip: 'Khoảnh khắc lướt chiêu 2 giúp Fennik outplay hoàn toàn các chiêu thức dồn sát thương của đối thủ.'
      },
      {
        slot: 'ultimate',
        name: 'Lốc Sấm Sét',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/227792039c96a09c5264216583dcac1d5860e634403501.png',
        cooldown: '30.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Ném ra chiếc xích đu sấm sét xoay tròn liên tục tại điểm chỉ định, gây sát thương vật lý và làm chậm diện rộng, đồng thời tích tầng cho chiêu 1.',
        comboTip: 'Ném chiêu cuối vào mục tiêu bị găm chiêu 1 để kích nổ kíp nổ tức thì.'
      }
    ],
    lore: `Chú cáo siêu thanh tinh nghịch rời khỏi Rừng Nguyên Sinh để tự do hành nghề trộm cắp tại các thành bang Tân Liên Hiệp. Sở hữu đôi tai thính nhạy và đôi chân nhanh như chớp, Fennik luôn thoát khỏi mọi cạm bẫy hiểm nguy nhất.`,
    battleTips: [
      'Fennik là tướng xạ thủ ăn mục tiêu lớn (Rồng/Caesar) và đẩy trụ nhanh nhất trò chơi.',
      'Chiêu 2 có một khoảnh khắc bất tử hoàn toàn, hãy canh thời điểm để né các chiêu thức chết chóc.',
      'Combo: Chiêu 1 gắn kíp nổ -> Chiêu cuối xoay sét kích nổ -> Chiêu 2 lướt truy đuổi hoặc rút lui.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Nanh Fenrir'],
    relatedHeroIds: ['slimz', 'telannas', 'moren', 'krixi']
  },

  {
    id: 'kilgroth',
    name: 'Kil\'Groth',
    title: 'Đồ Tể Đại Dương',
    factionId: 'afata',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4dd76a3f07965ade3c71b89874b64b935a29291ca4a111.gif',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e23f0872bf3974b176e45684ba99dfc75a29fbcfa57491.jpg',
    quote: 'Cơn thịnh nộ của biển cả sẽ nhấn chìm tất cả lũ quỷ dữ!',
    stats: { damage: 9, toughness: 8, mobility: 7, crowdControl: 4, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Áp Suất Biển Sâu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0dd5a46133f416e70f5cc9e1e1767cfc5a292a1ebefc71.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi đòn đánh thường tăng tốc độ đánh (tối đa 8 tầng). Ở mốc tối đa, Kil\'Groth đạt tốc độ chém điên cuồng bậc nhất đại lục.',
        comboTip: 'Chém lính hoặc quái để tích đủ 8 tầng tốc đánh trước khi lao vào giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Sóng Biển Đâm Lao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/35766d268f4bcf8c3315140487a5da785a292a86def831.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt tới đâm lao gây sát thương vật lý và làm chậm 50% tốc chạy. Đâm trúng tướng địch giảm 4 giây hồi chiêu.',
        comboTip: 'Đâm trúng tướng địch giúp chiêu 1 chỉ còn 4 giây hồi chiêu để truy đuổi liên tục.'
      },
      {
        slot: 'skill2',
        name: 'Mâu Thần Rực Lửa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f08f0260703279666b228c847aab578a5a292b51031f41.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Cường hóa cây mâu: đòn đánh thường gây thêm sát thương phép và hồi phục lượng máu lớn cho Kil\'Groth (hồi máu tăng gấp 3 khi dưới 50% máu).',
        comboTip: 'Kích hoạt chiêu 2 khi cận chiến để vừa xả sát thương phép vừa hồi máu điên cuồng.'
      },
      {
        slot: 'ultimate',
        name: 'Ác Mộng Biển Khơi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d54e0da837d2dc76e49b451dd47f0fc05a292cab9ec8f1.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Hỗ trợ',
        description: 'Kil\'Groth giải phóng mọi khống chế, nhận 4 tầng nội tại tốc đánh và HOÀN TOÀN MIỄN NHIỄM MỌI HIỆU ỨNG KHỐNG CHẾ trong 6 giây.',
        comboTip: 'Bật chiêu cuối lao thẳng vào giữa đội hình địch, không có bất kỳ kỹ năng khống chế nào có thể ngăn cản bước chân của bạn.'
      }
    ],
    lore: `Lãnh chúa biển cả dũng mãnh. Dưới sự xâm lăng tàn bạo của Vực Hỗn Mang (đặc biệt là quân đoàn của Taara), Kil'Groth suýt tử trận nhưng may mắn được Thủy quái Cresht giải cứu. Từ đó, hắn liên minh với Rừng Nguyên Sinh Afata để báo thù phe sa đọa.`,
    battleTips: [
      'Kil\'Groth là quái vật chém tay đẩy trụ và bắt chủ lực nhờ chiêu cuối miễn nhiễm mọi khống chế.',
      'Chiêu 2 hồi máu cực khủng khi lượng máu tụt xuống dưới 50%, đừng ngần ngại đánh cược tay đôi.',
      'Lên trang bị tăng tốc đánh và hút máu để phát huy tối đa tiềm năng đồ tể.'
    ],
    recommendedItems: ['Rìu Leviathan', 'Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Đao Truy Hồn', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['cresht', 'taara', 'telannas', 'volkath']
  },

  {
    id: 'cresht',
    name: 'Cresht',
    title: 'Chiến Binh Thủy Quái',
    factionId: 'afata',
    role: 'Đỡ Đòn',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/04b0a1140d89b8ef0cd4a655753bbb895c4938662bc9f1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/795198870c5e6cfb68023c3fd65eb3bd5c4938766fb281.jpg',
    quote: 'Thủy quái khổng lồ thức tỉnh, ngọn sóng thần sẽ nuốt trọn bờ cõi!',
    stats: { damage: 6, toughness: 10, mobility: 6, crowdControl: 9, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Đại Dương Nộ Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/632fe18945adcc178b0ad8e180867c805886bb7dced341.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi đòn đánh hoặc chiêu thức tích lũy Nộ khí. Khi đầy nộ khí mới có thể kích hoạt Chiêu Cuối biến thân Thủy Quái khổng lồ.',
        comboTip: 'Liên tục đánh thường và xả chiêu vào lính hoặc quái để tích đầy thanh Nộ trước giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Đinh Ba Quét',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c01567e29ba17f34c33c6b39e341609b5886bba96b8101.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Dạng người: quét đinh ba đẩy lùi kẻ địch xung quanh. Dạng Thủy Quái: đập mạnh xuống đất gây sát thương vật lý diện rộng.',
        comboTip: 'Đẩy văng các sát thủ tiếp cận chủ lực để bảo vệ tuyến sau an toàn.'
      },
      {
        slot: 'skill2',
        name: 'Bọt Nước Nhảy Nhót',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bc35a5306c61ada7f16ec781336ff6de5886bbc2571a51.png',
        cooldown: '9.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Dạng người: nhảy vồ tới ban lá chắn cho bản thân và đồng minh. Dạng Thủy Quái: nhảy dậm xuống đất làm chậm kẻ địch.',
        comboTip: 'Nhảy tới đồng đội để tạo lớp lá chắn dày bảo vệ khỏi các chiêu thức cấu rỉa.'
      },
      {
        slot: 'ultimate',
        name: 'Thủy Thần Biến Thân Sóng Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2777a5439a03995f4ec18587bbf7eeae5886bbe451c711.png',
        cooldown: '40.0s',
        energyCost: 'Đầy Nộ',
        damageType: 'Vật lý',
        description: 'Cresht hóa thân thành Thủy Quái khổng lồ, tạo ra một cơn đại hồng thủy đẩy dạt kẻ địch sang 2 bên làm choáng 1.5 giây và NHẬN LÁ CHẮN TƯƠNG ĐƯƠNG 50% MÁU TỐI ĐA.',
        comboTip: 'Bật chiêu cuối mở giao tranh tổng hoàn hảo: tạo sóng thần đẩy dạt đối phương và biến thành quái vật máu trâu bất tử.'
      }
    ],
    lore: `Lãnh chúa biển Boiling bí ẩn. Từng tham gia chiến tranh cứu viện Kil'Groth thoát khỏi nanh vuốt của Taara, Cresht liên minh với Rừng Nguyên Sinh để phát triển lực lượng và bảo vệ đại dương khỏi sự ô nhiễm của ma năng Vực Thẳm.`,
    battleTips: [
      'Cresht cần đầy thanh nộ mới dùng được chiêu cuối, tuyệt đối không giao tranh lớn khi chưa có nộ.',
      'Lớp lá chắn 50% máu khi biến thân giúp Cresht có thể băng trụ và hút toàn bộ sát thương của đối phương.',
      'Sóng thần chiêu cuối có thể đẩy dạt và làm choáng đối phương từ khoảng cách rất xa.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huy Chương Troy', 'Giáp Thống Khổ'],
    relatedHeroIds: ['kilgroth', 'telannas', 'dolia', 'taara']
  },

  {
    id: 'ybneth',
    name: 'Y\'bneth',
    title: 'Đại Thụ Viễn Cổ',
    factionId: 'afata',
    role: 'Đỡ Đòn',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/173809566ede28d1fee0731e43a1912c5b98deb97c82f1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8276a829e1e1559b0a57f38ce7e1ac255b98deeacc49e1.jpg',
    quote: 'Rễ cây cắm sâu vào lòng đất, sự sống của rừng già là bất diệt!',
    stats: { damage: 6, toughness: 10, mobility: 5, crowdControl: 9, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Đại Thụ Sinh Sôi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6643012c1d188a583dd0c4e3a54d52d75b9a107ccf2fe1-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi đi vào bụi cỏ, Y\'bneth kích hoạt trạng thái cắm rễ hồi phục một lượng máu và năng lượng khổng lồ liên tục.',
        comboTip: 'Đứng trong bụi cỏ vài giây để hồi phục đầy bình máu mà không cần phải biến về tế đàn.'
      },
      {
        slot: 'skill1',
        name: 'Cây Dây Leo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/252b59789e9e095859129d4b4d28a2335b9a110d78ab61.png',
        cooldown: '6.0s (2 dạng)',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Vung dây leo đập tới phía trước làm chậm kẻ địch. Đủ 5 điểm tích lũy sẽ cường hóa húc thẳng về phía trước đẩy lùi kẻ địch.',
        comboTip: 'Cường hóa chiêu 1 để húc đẩy lùi đối thủ về phía trụ hoặc bẫy của đồng đội.'
      },
      {
        slot: 'skill2',
        name: 'Thiên Nhiên Vỗ Tay',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/89ef88c452e1dbadac993ba1c5d47b365b9a113ed39f31.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Vung 2 cánh tay đại thụ vỗ sập vào giữa. Nếu kẹp trúng kẻ địch ở cả 2 bên sẽ LÀM CHOÁNG chúng 1.25 giây.',
        comboTip: 'Căn kẹp trúng cả 2 bên (lính hoặc tướng) để kích hoạt cú choáng vỗ tay cực mạnh.'
      },
      {
        slot: 'ultimate',
        name: 'Hạt Giống Hỗn Loạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d78f18dc73aa1928fed16bfd5c28a8d85b9a11812f63e1.png',
        cooldown: '40.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Y\'bneth cắm rễ đứng yên bất tử, nhận lá chắn khổng lồ, MIỄN KHỐNG và liên tục bắn 20 hạt mầm gây sát thương phép làm chậm, làm choáng kẻ địch trúng 8 hạt.',
        comboTip: 'Cắm rễ chiêu cuối ngay giữa giao tranh tổng hoặc dưới chân trụ để chặn đứng mọi đợt tấn công của đối phương.'
      }
    ],
    lore: `Cây cổ thụ viễn cổ khát khao hiểu biết thế giới, rời Rừng Nguyên Sinh để đi tìm tòi tri thức và cuối cùng chọn Rừng Verno làm quê hương thứ hai, che chở cho muôn loài sinh linh nơi đó. Y'bneth là người bạn thân thiết của bậc thầy ẩn nấp Krizzix.`,
    battleTips: [
      'Nội tại hồi máu trong bụi cỏ giúp Y\'bneth trụ đường bền bỉ không bao giờ phải về nhà.',
      'Chiêu 2 vỗ tay kẹp choáng đòi hỏi căn góc đứng giữa các mục tiêu.',
      'Chiêu cuối tạo lượng lá chắn cực dày và xả mưa hạt giống kiểm soát cả một vùng đất rộng lớn.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Thất Truyền', 'Giáp Thống Khổ'],
    relatedHeroIds: ['krizzix', 'telannas', 'krixi', 'lumburr']
  },

  {
    id: 'krizzix',
    name: 'Krizzix',
    title: 'Bậc Thầy Ẩn Nấp',
    factionId: 'afata',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a7e49f01ef9804d479cb6537a9b51dee5db6c75c945151.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/332b544d59f6be44c5bcd9a42e315adc5db122625b37d1.jpg',
    quote: 'Ẩn mình vào thiên nhiên, đưa cả đội hình bất ngờ xuất kích!',
    stats: { damage: 4, toughness: 7, mobility: 9, crowdControl: 9, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Ẩn Nặc Tự Nhiên',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4f9a604dafd3695d5dbc25acf2652c315daec4e31a6281.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Khi rời khỏi tầm nhìn của kẻ địch, đòn đánh thường kế tiếp được cường hóa bắn lan gây sát thương phép và làm chậm 30% diện rộng.',
        comboTip: 'Chủ động lùi ra khỏi tầm nhìn lính để tích đòn bắn chậm diện rộng trước khi lao vào.'
      },
      {
        slot: 'skill1',
        name: 'Ngụy Trang Tàng Hình',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/14a64fbc2a349b851b5763ca7a4bd3e15daec54366a5c1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Krizzix tàng hình trong 4 giây và tăng 40% tốc chạy. Chạm vào tướng địch gây sát thương phép và GIẢM 25% GIÁP CỦA HỌ.',
        comboTip: 'Bật tàng hình luồn lách chạm vào chủ lực đối phương để trừ sạch giáp của chúng.'
      },
      {
        slot: 'skill2',
        name: 'Vạn Vật Hút Về',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7b4c636abbd8f977a7d8e69cc7d0ac8c5daec5dac44111.png',
        cooldown: '10.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Tạo vòng tròn từ trường xoay quanh bản thân. Sau 2 giây, HÚT TẤT CẢ KẺ ĐỊCH XUNG QUANH VỀ CẠNH KRIZZIX, LÀM CHOÁNG 1 GIÂY và tạo lá chắn cho đồng đội.',
        comboTip: 'Kỹ năng gom cụm đội hình địch thần thánh: Bật chiêu 2 chạy vào giữa đội hình rồi hút trọn cả 5 kẻ địch vào 1 điểm.'
      },
      {
        slot: 'ultimate',
        name: 'Tàng Hình Toàn Đội',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4aba50a38444a537adec3718c4e1fcee5daec619d7b621.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Hỗ trợ',
        description: 'Krizzix ban phép tàng hình và tăng 30% tốc chạy cho BẢN THÂN VÀ TẤT CẢ ĐỒNG MINH LÂN CẬN trong 4 giây, đồng thời soi sáng 1 tướng địch gần nhất.',
        comboTip: 'Kỹ năng mở giao tranh bất ngờ số 1: tàng hình cả 5 thành viên đội ta lao vào úp sọt đối thủ trong ngỡ ngàng.'
      }
    ],
    lore: `Vốn là người kế thừa vị trí tư tế cao quý của bộ tộc nhưng chọn bỏ trốn để có cuộc sống tự do bay nhảy giữa thiên nhiên hoang dã. Krizzix kết bạn thân thiết với Đại thụ Y'bneth và sử dụng tài năng ngụy trang đỉnh cao để dẫn dắt các cuộc tập kích bảo vệ rừng già.`,
    battleTips: [
      'Krizzix là trợ thủ mở giao tranh bất ngờ bậc nhất nhờ chiêu cuối tàng hình cả đội.',
      'Combo: Chiêu cuối tàng hình cả đội -> Chiêu 1 tàng hình tăng tốc -> Chiêu 2 chạy vào giữa đội hình hút gom cả đội địch.',
      'Chiêu 1 trừ giáp vật lý và giáp phép đối thủ, giúp xạ thủ và sát thủ đội ta dồn dame cực thấu.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Mặt Nạ Berith', 'Giáp Gaia', 'Huân Chương Troy'],
    relatedHeroIds: ['ybneth', 'telannas', 'krixi', 'fennik']
  },

  {
    id: 'elandorr',
    name: 'Eland\'orr',
    title: 'Du Hiệp Tinh Linh',
    factionId: 'afata',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/060f8e35db2f7fb1be51d7e5bdd1724a5db174d49d9de1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d5592bb2109b1367451f11bb876a58ce5db1778ec8cde1.jpg',
    quote: 'Điệp vũ bay lượn theo ngọn đèn tinh linh, tự do là khúc ca đẹp nhất!',
    stats: { damage: 10, toughness: 3, mobility: 10, crowdControl: 5, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Tinh Linh Ấn Điệp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/051bd10a7513ca6230f15ad7e7bd06c15db175df3b43d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Đòn đánh thường găm ấn điệp (tối đa 3 tầng). Đủ 3 tầng kích nổ gây sát thương phép diện rộng. Sau khi dùng chiêu, có thể tái kích hoạt để DỊCH CHUYỂN TỚI VỊ TRÍ ĐÈN TINH LINH.',
        comboTip: 'Thả đèn bằng chiêu thức rồi tái kích hoạt để dịch chuyển biến ảo như một bóng ma.'
      },
      {
        slot: 'skill1',
        name: 'Phi Điệp Lướt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/554bb47307190c11b26618df48f1b44a5db1768c0479d1.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt về phía trước để lại ngọn đèn tinh linh ở vị trí cũ. Tái kích hoạt: Eland\'orr dịch chuyển ngược về vị trí ngọn đèn.',
        comboTip: 'Lướt qua bờ tường bắn tỉa đối thủ rồi giật bóng ngược về an toàn 100%.'
      },
      {
        slot: 'skill2',
        name: 'Điệp Vũ Xoay Vòng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5487eed16ae93743f14b9edc0f83847d5db1770df15f01.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Thả ngọn đèn bay lượn quanh bản thân theo hình elip và bắn 2 luồng năng lượng. Tái kích hoạt: dịch chuyển tới vị trí ngọn đèn đang bay.',
        comboTip: 'Canh thời điểm ngọn đèn bay tới góc an toàn rồi kích hoạt dịch chuyển né chiêu đối thủ.'
      },
      {
        slot: 'ultimate',
        name: 'Phá Kén Đẩy Lùi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/72e446ddf742b9e01586cdfc00c5f0655db17700f0a121.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Phóng ngọn đèn tinh linh bay thẳng phía trước, ĐẨY LÙI TẤT CẢ KẺ ĐỊCH và làm choáng nếu chúng va vào tường. Tái kích hoạt: dịch chuyển tới ngọn đèn.',
        comboTip: 'Đẩy lùi sát thủ tiếp cận vào tường gây choáng rồi dịch chuyển truy đuổi dứt điểm.'
      }
    ],
    lore: `Chàng tinh linh tài hoa của Rừng Nguyên Sinh. Sau khi phạm sai lầm gây tổn hại đến phong ấn rừng, anh tự lưu đày chuộc tội, mang tiếng hát và sức mạnh ngọn đèn linh hồn bảo vệ hòa bình. Sau đó, anh được cử sang Học Viện Carano dưới tư cách học viên trao đổi, thu hút sự chú ý của mọi người nhờ phong thái thanh lịch, lạnh lùng.`,
    battleTips: [
      'Eland\'orr là xạ thủ có độ ảo diệu và khả năng biến ảo vị trí cao nhất trò chơi.',
      'Cần thuần thục kiểm soát vị trí ngọn đèn tinh linh để dịch chuyển né chiêu outplay đối thủ.',
      'Đòn đánh thường sau mỗi lần dùng chiêu sẽ bắn thêm một phát đạn phép bùng nổ nội tại.'
    ],
    recommendedItems: ['Cung Bão Tố', 'Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Diệt Thần Cung'],
    relatedHeroIds: ['aya', 'krixi', 'telannas', 'paine']
  },

  {
    id: 'aya',
    name: 'Aya',
    title: 'Ca Sĩ Tinh Linh',
    factionId: 'afata',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d4510fa53f153c5e259543597c96bb88658d3efcbcd0f1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b34ed5ce773e49a1dd2e3f4d126c946f658d3f10b6bf7-2.jpg',
    quote: 'La la la! Tiếng hát vui tươi sẽ mang lại nụ cười và sức mạnh cho bạn bè!',
    stats: { damage: 4, toughness: 8, mobility: 8, crowdControl: 8, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Sóc Nhỏ Đáng Yêu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7b7a9758645dcbb4da402a3bcf55df8d658d438e3695e1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi máu tụt xuống dưới 40%, Aya lập tức biến thành chú sóc nhỏ không thể bị chọn làm mục tiêu trong 3 giây và tăng tốc chạy.',
        comboTip: 'Nội tại bất tử hóa giúp Aya không bao giờ bị sốc chết đột ngột.'
      },
      {
        slot: 'skill1',
        name: 'Nốt Nhạc Vui Vẻ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6a64666569b09ee27814113455e03330658d43cce2b5b1.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Phóng ra quả cầu âm thanh nở to dần theo đường bay, gây sát thương phép, làm chậm và soi sáng tầm nhìn tướng địch.',
        comboTip: 'Chiêu cấu rỉa diện rộng cực kỳ khó chịu dùng để kiểm tra bụi rậm từ cự ly xa.'
      },
      {
        slot: 'skill2',
        name: 'Rừng Già Che Chở (Ngồi Lên Đầu)',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2c16a441a77ef0d629b8e0ea5f6c2914658d443158c501.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Aya nhảy lên đầu một tướng đồng minh, biến thành linh hồn bảo hộ (hoàn toàn bất tử) và ban tặng một lớp lá chắn khổng lồ cho đồng minh đó.',
        comboTip: 'Leo lên đầu đấu sĩ càn lướt (như Taara, Arthur, Florentino) để biến đồng đội thành cỗ xe tăng bất khả chiến bại.'
      },
      {
        slot: 'ultimate',
        name: 'Khúc Hát Biến Ảo Biến Thú',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/aaa53e7c45352b1194d90df281716fd8658d44aeca0771.png',
        cooldown: '40.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Aya tạo vùng âm nhạc mở rộng xung quanh đồng minh đang cưỡi. Kẻ địch đứng trong vùng sau 2 giây SẼ BỊ BIẾN THÀNH THÚ BÔNG nhỏ bé không thể đánh hay dùng chiêu.',
        comboTip: 'Khống chế cứng biến thú tập thể hóa giải hoàn toàn mọi nỗ lực lao vào của sát thủ đối phương.'
      }
    ],
    lore: `Chú sóc nhỏ đáng yêu được Eland'orr và Krixi giúp đỡ biến thành người tại Rừng Nguyên Sinh. Mang giọng hát trong trẻo ngọt ngào, Aya rời rừng để mang lời ca tiếng hát đi khắp Athanor và lùng tìm người bạn thân thiết thuở nhỏ Tiểu Bạch.`,
    battleTips: [
      'Aya là trợ thủ ký sinh leo lên đầu đồng minh bảo kê đồng đội cực mạnh.',
      'Chiêu 2 cung cấp lá chắn liên tục giúp đồng đội lao vào giao tranh tự tin không sợ chết.',
      'Chiêu cuối biến thú tập thể là kỹ năng lật ngược giao tranh tổng số 1 Liên Quân Mobile.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Băng', 'Huân Chương Troy', 'Sách Truy Hồn'],
    relatedHeroIds: ['elandorr', 'krixi', 'telannas', 'helen']
  },

  {
    id: 'biron',
    name: 'Biron',
    title: 'Lôi Kình Dũng Sĩ',
    factionId: 'tu_do',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/10/biron-artwork-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/10/biron-artwork.jpg',
    quote: 'Năng lượng sấm sét cuộn trào trong cánh tay cơ khí, dũng cảm đối mặt nghịch cảnh!',
    stats: { damage: 9, toughness: 9, mobility: 6, crowdControl: 7, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Lôi Kình Tích Tụ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/10/biron2.jpg',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Đòn đánh và chiêu thức tích lũy điểm năng lượng sấm sét (tối đa 3 vạch). Khi có năng lượng, các chiêu thức kế tiếp được cường hóa gấp đôi uy lực và hồi phục máu.',
        comboTip: 'Tích đầy 3 vạch năng lượng sấm sét trước khi tung chiêu để hồi máu và sát thương tối đa.'
      },
      {
        slot: 'skill1',
        name: 'Kình Lực Bộc Phát',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/10/biron1.jpeg',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung chùy điện nện 2 nhát liên tiếp gây sát thương vật lý và hồi phục máu dựa trên lượng máu đã mất.',
        comboTip: 'Chiêu thức trao đổi chiêu thức hồi máu cực mạnh ở đường Caesar.'
      },
      {
        slot: 'skill2',
        name: 'Sấm Chớp Đột Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/10/biron3.jpg',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt nhanh về phía trước tăng tốc chạy. Đòn đánh kế tiếp cường hóa nện chùy hất tung kẻ địch lên không trung.',
        comboTip: 'Lướt tiếp cận và hất tung mục tiêu mở màn cho chuỗi dồn sát thương sấm sét.'
      },
      {
        slot: 'ultimate',
        name: 'Lôi Thần Trấn Áp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/10/biron4.jpg',
        cooldown: '30.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Nện chùy điện xuống đất giải phóng vòng từ trường sấm sét khổng lồ, nhận lớp LÁ CHẮN TƯƠNG ĐƯƠNG 30% MÁU TỐI ĐA, làm chậm và gây sát thương liên tục.',
        comboTip: 'Bật chiêu cuối ngay giữa đám đông để nhận lượng lá chắn khổng lồ và làm chậm cả đội hình địch.'
      }
    ],
    lore: `Dũng sĩ dũng cảm mang cánh tay cơ khí tích tụ lôi kình sấm sét, chu du đến Rừng Nguyên Sinh Afata để tìm kiếm nguồn năng lượng cân bằng tự nhiên. Biron luôn tiên phong đứng ra bảo vệ những kẻ yếu thế trước sự ức hiếp của các thế lực tà ác.`,
    battleTips: [
      'Biron không dùng năng lượng, có thể liên tục dùng chiêu 1 để hồi phục máu trụ đường.',
      'Chiêu cuối mang lại lượng lá chắn khổng lồ thời gian hồi rất ngắn giúp Biron cực kỳ trâu bò.',
      'Tích đủ năng lượng trước khi lao vào để đòn đánh cường hóa hất tung và gây sát thương tối đa.'
    ],
    recommendedItems: ['Thương Longinus', 'Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['dyadia', 'telannas', 'moren', 'zuka']
  },

  {
    id: 'tamyn',
    name: 'Tamyn',
    title: 'Tinh Linh Thượng Cổ',
    factionId: 'afata',
    role: 'Pháp Sư',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/07/SeaTalk_IMG_20260722_163230-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/07/Screenshot-2026-07-06-102529-1.png',
    quote: 'Hơi thở ngàn năm của đại ngàn thức giấc, dệt nên khúc ca thanh tẩy vĩnh hằng!',
    stats: { damage: 9, toughness: 5, mobility: 7, crowdControl: 8, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Mộc Tinh Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/07/SeaTalk_IMG_20260706_163342-1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Mỗi chiêu thức trúng đích tích 1 tầng Mộc Tinh Khí. Đủ 3 tầng, đòn đánh kế tiếp bắn ra chùm quả cầu ánh sáng thanh tẩy làm chậm và giảm giáp phép của kẻ thù.',
        comboTip: 'Tích đủ 3 tầng nội tại để phát bắn kế tiếp bùng nổ sát thương phép xuyên kháng.'
      },
      {
        slot: 'skill1',
        name: 'Linh Cầu Thanh Tẩy',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/07/SeaTalk_IMG_20260706_163351-1.png',
        cooldown: '4.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Phóng ra quả cầu thực vật nảy lan giữa các mục tiêu, gây sát thương phép và tạo dấu ấn thiên nhiên.',
        comboTip: 'Chiêu thức cấu rỉa liên tục hồi chiêu ngắn dọn dẹp đường hiệu quả.'
      },
      {
        slot: 'skill2',
        name: 'Dây Leo Trói Buộc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/07/SeaTalk_IMG_20260706_163355-1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Triệu hồi thảm dây leo trồi lên từ lòng đất trói chân tất cả kẻ địch trong vùng chỉ định suốt 1.5 giây.',
        comboTip: 'Khóa chân nhiều mục tiêu cùng lúc để đồng đội xả sát thương dứt điểm.'
      },
      {
        slot: 'ultimate',
        name: 'Vũ Điệu Tinh Linh Đại Ngàn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2026/07/SeaTalk_IMG_20260706_163347-1.png',
        cooldown: '38.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Tamyn triệu hồi kết giới tinh linh thượng cổ rực rỡ, hồi phục máu liên tục cho toàn bộ đồng minh trong vùng đồng thời giáng sấm sét thiên nhiên làm choáng kẻ thù.',
        comboTip: 'Kích hoạt trong giao tranh tổng để biến toàn bộ khu vực tranh chấp thành thánh địa của phe ta.'
      }
    ],
    lore: `Vị tướng thứ 129 của đại lục Athanor - Tinh linh thượng cổ say ngủ trong lòng Cổ Thụ Thế Giới vừa thức tỉnh trong kỷ nguyên mới. Tamyn mang trong mình hơi thở sơ khai của đất trời, đóng vai trò cầu nối hòa hợp giữa muôn loài sinh linh Afata và các nền văn minh nhân loại.`,
    battleTips: [
      'Tamyn là pháp sư kiểm soát giao tranh và hỗ trợ hồi phục diện rộng tuyệt vời.',
      'Chiêu 2 trói chân diện rộng 1.5 giây mở màn hoàn hảo cho chiêu cuối bão tinh linh.',
      'Nội tại giảm giáp phép hỗ trợ tối đa cho các pháp sư đồng minh dồn dame.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Mặt Nạ Berith', 'Huân Chương Troy', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['telannas', 'helen', 'dyadia', 'krixi']
  }
];
