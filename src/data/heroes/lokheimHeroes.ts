import type { Hero } from '../../types/athanor';

export const LOKHEIM_HEROES: Hero[] = [
  {
    id: 'volkath',
    name: 'Volkath',
    title: 'Chúa Tể Hắc Ám',
    factionId: 'lokheim',
    role: 'Đấu Sĩ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/219b09a656af5274629409109ea2802d5d9472fe58bd81.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/16727f5198e91db68433cb19b8bacc785d9479be738231.jpg',
    quote: 'Ánh sáng chỉ là sự giả dối tạm thời, bóng tối mới là chân lý vĩnh hằng của vạn vật!',
    stats: { damage: 9, toughness: 8, mobility: 7, crowdControl: 6, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Ma Quân',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9028882e6992247c2b75ab54d32e57805d947669674a81.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Đòn đánh và chiêu thức khắc dấu ấn Ma Quân lên mục tiêu. Đủ 3 tầng nổ sát thương vật lý và nhận lá chắn bảo hộ 15% máu tối đa.',
        comboTip: 'Tích tầng Ma Quân trên lính trước khi lao vào để có sẵn lá chắn dày.'
      },
      {
        slot: 'skill1',
        name: 'Bá Vương Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c8093b107821625255838756fab77e705d9476cc2d7ed1.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Chém hình bán nguyệt gây sát thương vật lý. Kẻ địch có dấu ấn Ma Quân sẽ bị làm choáng 1 giây.',
        comboTip: 'Kết hợp cùng chiêu 2 tiếp cận rồi tung chiêu 1 gây choáng chuẩn xác.'
      },
      {
        slot: 'skill2',
        name: 'Bá Vương Thâu Hồn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c6a9214656bf8ca09288125263c29bcf5d9477363544a1.png',
        cooldown: '9.0s',
        energyCost: '70',
        damageType: 'Vật lý',
        description: 'Bắn móng vuốt khóa mục tiêu. Tái kích hoạt: lướt tới nạn nhân gây sát thương kết liễu theo máu đã mất.',
        comboTip: 'Chiêu thức bắt lẻ vượt địa hình cực kỳ nguy hiểm khi tái kích hoạt.'
      },
      {
        slot: 'ultimate',
        name: 'Bất Tử Ma Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e7e996a58f8e328e7109d1bf45d14b345d9477eee21181.png',
        cooldown: '60.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Triệu hồi chiến mã hắc ám giải phóng mọi khống chế, tăng tốc chạy. Tái kích hoạt biến thân Ma Thần Bất Tử trong 3.5 giây miễn nhiễm mọi sát thương chết chóc.',
        comboTip: 'Kích hoạt chiến mã càn quét rồi biến thân Ma Thần để chống chịu toàn bộ dồn sát thương của đối phương.'
      }
    ],
    lore: `Từng là học trò của Đấng Sáng Tạo Edras và là tù binh của Tháp Quang Minh (phe Ánh Sáng). Hắn tìm thấy nguồn sức mạnh Hắc Ám nguyên thủy dưới lòng đất, vùng lên chống lại phe Ánh Sáng và sáng lập nên Vực Hỗn Mang. Dù từng bị Tel'Annas bắn xuyên tim ngủ say ngàn năm, Volkath đã phục sinh trên lưng Chiến Mã Hắc Ám thề biến đại lục thành tro tàn.`,
    battleTips: [
      'Canh thời điểm bật Chiêu cuối chuẩn xác để giải khống chế quan trọng của đối thủ.',
      'Chiêu 2 có thể vượt địa hình bám đuổi chủ lực đối phương rất xa.',
      'Tránh biến thân Ma Thần quá sớm khi chưa áp sát được mục tiêu trọng yếu.'
    ],
    recommendedItems: ['Thương Longinus', 'Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huy Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['veera', 'maloch', 'marja', 'bright', 'telannas']
  },

  {
    id: 'maloch',
    name: 'Maloch',
    title: 'Ma Vương Quản Ngục',
    factionId: 'lokheim',
    role: 'Đấu Sĩ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/752c4c954aa4a8f05a1b0be72aa5dc895c0def4d435aa1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/55b9bf4fb03f6003cfd70c03f75075b25c0def90947e01.jpg',
    quote: 'Nỗi đau là hương vị tuyệt diệu nhất, và toàn bộ địa ngục này thuộc về ta!',
    stats: { damage: 9, toughness: 9, mobility: 4, crowdControl: 7, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Ma Vương Quyền Năng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/73e54b1f8df0eb381adfbad790f113a458cb94ff75f2c1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Khi chiêu 1 chém trúng tướng địch, Maloch tiến vào trạng thái Ma Vương giúp các đòn đánh thường và chiêu thức gây 100% SÁT THƯƠNG CHUẨN và hồi máu.',
        comboTip: 'Luôn chém trúng tướng địch bằng chiêu 1 để mở khóa sát thương chuẩn xuyên mọi loại giáp.'
      },
      {
        slot: 'skill1',
        name: 'Quỷ Kiếm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/24b62183a512a387d2e219da08ce582058cb955d336261.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Vung đại đao chém vòng cung cực rộng. Trong trạng thái Ma Vương gây sát thương chuẩn và hồi 6% máu tối đa cho mỗi tướng trúng đòn.',
        comboTip: 'Di chuyển khéo léo để trúng nhiều tướng địch nhất có thể nhằm hồi một lượng máu khổng lồ.'
      },
      {
        slot: 'skill2',
        name: 'Đoạt Hồn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f0a0eae7b27866c5256dfefcc92a31bd58cb961cace651.png',
        cooldown: '11.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tước đoạt linh hồn kẻ địch phía trước, làm chậm và nhận lá chắn dày tương ứng số mục tiêu (tối đa 4 kẻ địch).',
        comboTip: 'Gom lính và tướng đối phương vào vùng chiêu 2 để nhận lượng giáp bảo hộ dày nhất.'
      },
      {
        slot: 'ultimate',
        name: 'Luyện Ngục',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/42c95ae0e99b6058e15ad49b6333f76758cb966fc93941.png',
        cooldown: '50.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng lên không trung rồi giáng xuống khu vực chỉ định, hất tung tất cả kẻ địch trong tâm chấn và tạo ra vùng Luyện Ngục làm chậm 80%.',
        comboTip: 'Mở giao tranh tổng hoàn hảo chặn đường lui của toàn bộ đội hình đối phương.'
      }
    ],
    lore: `Bạn thân của Volkath, cùng hắn dứt áo rời bỏ Tháp Quang Minh. Hắn hấp thụ sức mạnh bóng tối vô tận dưới đáy sâu, lột xác thành ác ma và trở thành Vua cai quản địa ngục. Maloch từng lập mưu giăng bẫy nguyền rủa vua Arthur thành xác khô Mortos và chỉ huy Quân Đoàn Hỗn Mang càn quét Athanor.`,
    battleTips: [
      'Giữ vị trí chém chiêu 1 trúng tướng địch để luôn duy trì trạng thái Ma Vương sát thương chuẩn.',
      'Chiêu 2 là nguồn tạo giáp ảo sinh tồn cực lớn trong giao tranh đông người.',
      'Chiêu cuối có thể bị ngắt nếu chọn điểm rơi sai lầm, hãy canh thời điểm đối phương đã dùng kỹ năng cơ động.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Đao Truy Hồn', 'Áo Choàng Băng Giá', 'Huy Chương Troy', 'Giáp Thống Khổ', 'Nanh Fenrir'],
    relatedHeroIds: ['volkath', 'veera', 'nakroth', 'arthur', 'airi']
  },

  {
    id: 'veera',
    name: 'Veera',
    title: 'Nữ Vương Ma Tộc',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/82a7e1d31f6b20d3faa502e1a215b76c6595119091e7a2-e1718879982854.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/82a7e1d31f6b20d3faa502e1a215b76c659511907dc242.jpg',
    quote: 'Trái tim kẻ nào càng khát khao quyền lực, kẻ đó càng dễ dàng làm nô lệ cho ta!',
    stats: { damage: 10, toughness: 3, mobility: 5, crowdControl: 8, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Mê Hoặc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/176fc67d18fbfe3f65f600c430711b8a583f90609e6321.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Khi hạ hoặc phụ mục tiêu, Veera được tăng tốc chạy cực lớn và làm mới ngay lập tức thời gian hồi chiêu của chiêu 1.',
        comboTip: 'Tận dụng tốc chạy tăng vọt sau khi dồn sốc hạ gục mục tiêu để rút lui an toàn.'
      },
      {
        slot: 'skill1',
        name: 'Dơi Địa Ngục',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/07a7ad7ec3f3002cb3af0ddb52b6eb16583f907c0b4a21.png',
        cooldown: '6.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Phóng ra bầy dơi quỷ theo đường thẳng gây sát thương phép lớn lên tất cả kẻ địch trên đường bay.',
        comboTip: 'Dùng để dọn lính nhanh từ cự ly xa hoặc kết thúc chuỗi combo sau khi làm choáng đối thủ.'
      },
      {
        slot: 'skill2',
        name: 'Hôn Gió',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a65e2024f0938dfca07679de26167f4d583f909eb3ad11.png',
        cooldown: '10.0s',
        energyCost: '80',
        damageType: 'Phép',
        description: 'Gửi nụ hôn ma quái khóa mục tiêu chỉ định, gây sát thương phép, trừ giáp phép và LÀM CHOÁNG nạn nhân 1.5 giây.',
        comboTip: 'Kỹ năng chỉ định mục tiêu chắc chắn trúng, là nỗi khiếp sợ của mọi sát thủ cơ động cao.'
      },
      {
        slot: 'ultimate',
        name: 'Tiểu Quỷ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3965e55122296fab01f566e10822a518583f90b8c7f991.png',
        cooldown: '24.0s',
        energyCost: '120',
        damageType: 'Phép',
        description: 'Triệu hồi 5 tiểu quỷ địa ngục liên tiếp lao vào mục tiêu trúng đòn (ưu tiên kẻ địch bị dính Hôn Gió), gây lượng sát thương phép dồn sốc khổng lồ.',
        comboTip: 'Combo chuẩn: Rình bụi -> Chiêu 2 (Hôn Gió) -> Chiêu cuối (Tiểu Quỷ) -> Chiêu 1 (Dơi Địa Ngục).'
      }
    ],
    lore: `Từng là bán thần rất được yêu quý tại Tháp Quang Minh (phe Ánh Sáng). Cô đi theo Volkath rời bỏ Veda và trở thành chiến lược gia đa mưu túc trí thu nạp nhân tài cho Vực Hỗn Mang. Dưới trướng Veera là Quân đoàn hùng hậu gồm 8 thành viên: Mganga, Preyta, Mina, Taara, Arduin, Skud, Natalya và Raz. Cô cũng là người quyến rũ lôi kéo Aleister phản bội Veda.`,
    battleTips: [
      'Là hung thần núp bụi cỏ, luôn di chuyển rình rập ở các bụi rậm đường sông để bắt lẻ chủ lực đối phương.',
      'Chiêu 2 là chiêu khóa mục tiêu định sẵn nên hãy ưu tiên khóa xạ thủ hoặc pháp sư địch.',
      'Giữ vị trí an toàn vì Veera rất mỏng manh và không có kỹ năng lướt cơ động.'
    ],
    recommendedItems: ['Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Quyền Trượng Rhea', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['volkath', 'maloch', 'aleister', 'taara', 'marja']
  },

  {
    id: 'marja',
    name: 'Marja',
    title: 'Oán Hồn Vực Thẳm',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1303e95b29e784888ae02d97848aed775b2b84e0372771.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/56dc9927ba2066213596079eb4e2a0ac5b2b86f3972b91.jpg',
    quote: 'Tình yêu của ta từng là ánh sáng, nhưng hận thù đã biến nó thành trùng ảnh vĩnh hằng!',
    stats: { damage: 7, toughness: 9, mobility: 5, crowdControl: 7, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Hồn Trùng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e249f63354b9561a4bc47e0b2dbd49255b2a1a08025d71.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Không dùng năng lượng. Mỗi đòn đánh và chiêu thức tích Hồn Trùng hồi máu liên tục, hút máu phép càng mạnh khi máu càng thấp.',
        comboTip: 'Càng ít máu Marja hồi phục càng kinh hoàng, đừng ngần ngại cò cưa ở ngưỡng máu tử thần.'
      },
      {
        slot: 'skill1',
        name: 'Sóng Trùng Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/034ba564162452cd1e774f4582693d725b2a1a3843b771.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Phóng ra làn sóng bọ trùng gây sát thương phép và làm chậm 40% tốc chạy của tất cả nạn nhân trúng đòn trong 2 giây.',
        comboTip: 'Chiêu thức dọn lính và cấu máu liên tục từ cự ly an toàn mà không tốn năng lượng.'
      },
      {
        slot: 'skill2',
        name: 'Phệ Hồn Trùng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/de303578817f474c5c6c39ba263d05085b2a1a64076671.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Triệu hồi bầy bọ hắc ám tấn công các mục tiêu xung quanh, gây sát thương phép và hồi máu theo số kẻ địch trúng chiêu.',
        comboTip: 'Dùng khi đứng giữa đám đông lính hoặc tướng địch để hồi lại lượng máu lớn tức thì.'
      },
      {
        slot: 'ultimate',
        name: 'Ác Hồn Biến Thân',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/06a960d2ce2c338df790364d743aabbb5b2a1a867e2d61.png',
        cooldown: '36.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Hóa thân thành bóng ma bất khả xâm phạm trong 2 giây, tăng tốc chạy và liên tục gây sát thương phép làm chậm xung quanh.',
        comboTip: 'Kỹ năng outplay tuyệt đỉnh: miễn nhiễm toàn bộ khống chế và sát thương, dùng để né các chiêu kết liễu.'
      }
    ],
    lore: `Từng là nữ thần cao quý của Tháp Quang Minh và là người yêu của Volkath. Vì tình yêu, cô bị Veda xem là kẻ phản bội và chịu cảnh giam cầm, tra tấn dã man cho đến khi được ma năng của Volkath cứu thoát. Gia nhập phe sa đọa, Marja chỉ huy Quân Đoàn Trùng Ảnh với hai thuộc hạ đắc lực là Lưỡi hái Zephys và Bọ sát thủ Kriknak.`,
    battleTips: [
      'Marja không dùng mana nên có thể trụ đường cực kỳ bền bỉ và cấu rỉa liên tục.',
      'Sử dụng chiêu cuối để ao nhây các chiêu thức sát thương sốc cực mạnh của sát thủ đối phương.',
      'Phù hợp với lối trang bị nửa công phép nửa chống chịu để phát huy tối đa nội tại hút máu.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Mặt Nạ Berith', 'Trượng Băng', 'Băng Nhẫn Skadi', 'Huân Chương Troy', 'Giáp Gaia'],
    relatedHeroIds: ['volkath', 'veera', 'zephys', 'kriknak']
  },

  {
    id: 'kahlii',
    name: 'Kahlii',
    title: 'Nữ Tư Tế Sa Đọa',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fe313975ef498b33a7bf995a05d6f8b75847d42a599181.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8721728df19c947374c8943ea44b6095583ff29cecd041.jpg',
    quote: 'Thần linh đã bỏ rơi con người, và linh hồn các ngươi sẽ thuộc về sự trừng phạt của ta!',
    stats: { damage: 10, toughness: 3, mobility: 6, crowdControl: 5, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Đoạt Hồn Đạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/355a060b024823d1a0877d5bd8a9b10b583f92de1ccf51.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Đòn đánh thường xuyên thấu qua tất cả mục tiêu trên đường bắn và gây thêm sát thương phép cực lớn.',
        comboTip: 'Tận dụng đòn đánh thường xuyên thấu để dọn đợt lính siêu nhanh và cấu máu đối phương nấp sau lính.'
      },
      {
        slot: 'skill1',
        name: 'Vực Căm Hận',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b9dbd19218465e0481692f202ca04de3583f931c2d6381.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Tạo vùng nước oán hận làm chậm liên tục và giáng sát thương phép dồn dập lên kẻ địch đứng bên trong.',
        comboTip: 'Đặt đón đầu hướng di chuyển của kẻ địch hoặc đặt ngay dưới chân trụ để thủ nhà.'
      },
      {
        slot: 'skill2',
        name: 'Linh Hồn Hộ Thể',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/54ca5724142325af1a99a4c10e8ccf72583f933d68efb1.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Nhận lớp lá chắn hấp thụ sát thương, tăng vĩnh viễn công phép và tăng mạnh tốc độ di chuyển khi lá chắn còn tồn tại.',
        comboTip: 'Luôn duy trì kích hoạt chiêu 2 để nhận lượng công phép và tốc chạy tối đa.'
      },
      {
        slot: 'ultimate',
        name: 'Quân Đoàn Ma Quái',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9a917293b0324ed65ab89625da69f728583f935c54e4f1.png',
        cooldown: '30.0s',
        energyCost: '120',
        damageType: 'Phép',
        description: 'Kahlii vừa di chuyển tự do vừa phóng ra liên tiếp 55 linh hồn ma quái theo hướng chỉ định gây lượng sát thương phép tầm siêu xa hủy diệt.',
        comboTip: 'Tuyệt kỹ xả sát thương tầm xa khủng khiếp nhất, dùng để ép trụ, thủ nhà hoặc quét sạch đội hình địch.'
      }
    ],
    lore: `Từng là nữ tư tế hiền lành, bao dung của Tháp Quang Minh. Nhưng khi nhận ra các vị thần quá vô tâm trước nỗi thống khổ của con người, cô sinh lòng căm phẫn thù hận và bỏ đi, trở thành 1 trong 5 Thủ Lĩnh Tối Cao của Vực Hỗn Mang chuyên cướp đoạt linh hồn để báo thù thần thánh.`,
    battleTips: [
      'Kahlii là pháp sư thủ nhà và đẩy trụ bậc nhất nhờ chiêu cuối có tầm xả đạn cực xa.',
      'Luôn giữ chiêu 2 để có lá chắn và tốc chạy thả diều kẻ địch.',
      'Chiêu cuối có thể vừa bắn vừa di chuyển tự do, hãy điều chỉnh góc bắn theo hướng đối phương tháo chạy.'
    ],
    recommendedItems: ['Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Băng', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['volkath', 'maloch', 'ilumia', 'lauriel']
  },

  {
    id: 'mganga',
    name: 'Mganga',
    title: 'Tên Hề Cuồng Tín',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/053654897539713c86a745376bc8e8125d25652cf33f01.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/956abd3fa2d1e8ac9dd80970323d22f45d25634f484341.jpg',
    quote: 'Một giọt độc dược, vạn sự diệt vong!',
    stats: { damage: 8, toughness: 5, mobility: 4, crowdControl: 6, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Tà Thuật Độc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7f606055e10fb99d854d5f19884104fd5a2a4ecca4d811.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Đòn đánh và chiêu thức găm ấn độc tà thuật (tối đa 5 tầng), liên tục rút máu kẻ địch và hồi máu cho đồng minh.',
        comboTip: 'Tích đủ 5 tầng độc trước khi kích hoạt chiêu cuối để gây sát thương và hồi máu tối đa.'
      },
      {
        slot: 'skill1',
        name: 'Độc Khí Tụ Lực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/106028c9d9a959b62d58ef789829ce945a2a501db67301.png',
        cooldown: '2.0s (Tích 3 lần)',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Ném bình độc khí ra đất làm chậm và tích ấn độc liên tục lên kẻ địch đứng trong vũng độc.',
        comboTip: 'Rải độc liên tục ở các lối đi hẹp để tích tầng nội tại lên nhiều tướng địch.'
      },
      {
        slot: 'skill2',
        name: 'Độc Chiếm Hữu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1b26da06352c048891cd5f8e9aa41d275a2a4f3e5f4df1.png',
        cooldown: '4.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Phóng luồng độc ma thuật theo đường thẳng, gây sát thương lên kẻ địch và hồi máu cho đồng minh trúng đòn.',
        comboTip: 'Vừa dùng để gây dame vừa bơm máu liên tục cho đồng đội đứng trước mặt.'
      },
      {
        slot: 'ultimate',
        name: 'Độc Dược Bùng Nổ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8f8bcd98cbc147e2db8a3c86c8411530583f900623aeb1.png',
        cooldown: '18.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Kích nổ tất cả dấu ấn độc trên toàn chiến trường, gây sát thương phép khổng lồ lên kẻ địch và hồi máu lớn cho đồng minh.',
        comboTip: 'Chờ đối phương dính đủ 5 tầng độc rồi bấm chiêu cuối để sốc dame rút cạn cây máu đối thủ.'
      }
    ],
    lore: `Tên hề cuồng tín ma thuật hắc ám và tàn ác thuộc Quân đoàn của Veera. Hắn dùng độc dược và thí nghiệm tà thuật để chế tạo nên quái vật Skud, đồng thời là kẻ đã cùng Veera giao dịch với Ninja Hayate để trao cho hắn sức mạnh bóng tối.`,
    battleTips: [
      'Mganga cực mạnh ở các pha giao tranh kéo dài nhờ khả năng vừa rút độc vừa hồi máu.',
      'Chiêu 1 có thể tích trữ 3 bình độc, hãy rải liên tục để kiểm soát bản đồ.',
      'Đạt đủ 5 tầng độc rồi mới bấm chiêu cuối để tối đa hóa lượng sát thương nổ.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Mặt Nạ Berith', 'Trượng Băng', 'Băng Nhẫn Skadi', 'Sách Truy Hồn', 'Giáp Gaia'],
    relatedHeroIds: ['veera', 'skud', 'hayate', 'lindis']
  },

  {
    id: 'preyta',
    name: 'Preyta',
    title: 'Kỵ Sĩ Dịch Bệnh',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f2f8893606262e7c0547c4f47f670995590bf38eabfc81.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/90b107838232d5d8db37eb34f4fa5f70590bf51876ccd1.jpg',
    quote: 'Dịch bệnh và tử thi sẽ phủ kín bầu trời Athanor!',
    stats: { damage: 9, toughness: 4, mobility: 6, crowdControl: 7, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Cưỡi Rồng Cốt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ac8aef131836caf5646fa660cad895bb590bf40f5cd461.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Preyta cưỡi rồng xương nhận thêm tốc độ di chuyển cơ bản cao hơn tất cả các pháp sư khác.',
        comboTip: 'Tốc chạy cao giúp Preyta đảo đường gank liên tục và né tránh kỹ năng định hướng dễ dàng.'
      },
      {
        slot: 'skill1',
        name: 'Hơi Thở Tử Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/88a1871d3fdd1b032a0e8a58c3f2583f590bf44f3636b1.png',
        cooldown: '6.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Tụ lực bắn ra luồng khí độc cực mạnh theo đường thẳng. Tụ lực càng lâu sát thương và tầm bắn càng xa.',
        comboTip: 'Núp trong bụi cỏ tụ lực tối đa để bắn bất ngờ thổi bay nửa cây máu của xạ thủ hoặc pháp sư địch.'
      },
      {
        slot: 'skill2',
        name: 'Khí Độc Nổ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b6ae875a9f960dcf91a8023f3eb854c8590bf4a781a751.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Ném bom dịch bệnh phát nổ đẩy lùi kẻ địch ra xa tâm chấn và làm chậm 50% tốc chạy.',
        comboTip: 'Đặt sau lưng kẻ địch để đẩy lùi chúng ngược về phía trụ hoặc đội hình của ta.'
      },
      {
        slot: 'ultimate',
        name: 'Dịch Hạch Thức Tỉnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4318a8dd0536d490049f0be5b0ab776b590bf4db0b69b1.png',
        cooldown: '35.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Cường hóa rồng độc, nhận lá chắn dày, tăng mạnh tốc đánh và tốc chạy. Đòn đánh thường được cường hóa gây sát thương phép lan diện rộng.',
        comboTip: 'Bật chiêu cuối để biến thành một xạ thủ pháp sư bắn lan xé nát đội hình đối phương trong giao tranh.'
      }
    ],
    lore: `Kỵ sĩ dịch bệnh sinh ra từ oán khí và tử thi trên chiến trường, cưỡi trên lưng con rồng xương độc địa thuộc Quân đoàn của Veera. Preyta gieo rắc dịch bệnh thối rữa và chết chóc khắp mọi nơi hắn đi qua.`,
    battleTips: [
      'Chiêu 1 tụ lực tối đa từ trong bụi cỏ có lượng sát thương sốc cực kỳ khủng khiếp.',
      'Chiêu cuối tăng lượng lớn lá chắn và tốc chạy giúp Preyta tự tin xả đòn đánh thường phép.',
      'Sử dụng chiêu 2 đẩy lùi sát thủ tiếp cận để bảo vệ bản thân.'
    ],
    recommendedItems: ['Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Thập Tự Kiếm', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['veera', 'volkath', 'mganga', 'skud']
  },

  {
    id: 'mina',
    name: 'Mina',
    title: 'Nữ Hoàng Lưỡi Hái',
    factionId: 'lokheim',
    role: 'Đỡ Đòn',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/09d93eb47007482254115f99686694d25847d3e83fdf41.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bb5c20dee5d6cd3a3c849064b9cfef405b345b1ac2e1e1.jpg',
    quote: 'Nỗi đau của ta sẽ trở thành địa ngục kéo các ngươi xuống mồ sâu!',
    stats: { damage: 6, toughness: 10, mobility: 6, crowdControl: 9, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Lưỡi Hái Phục Thù',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ede8901cd8ad08da6e9d727aab721b30583ea19737b621.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Nhận sát thương hoặc đánh thường tích 1 tầng nội tại (tối đa 10 tầng). Ở 10 tầng, chiêu 1 lập tức hồi lại và gây SÁT THƯƠNG CHUẨN kèm hồi máu lớn.',
        comboTip: 'Cố tình nhận sát thương để tích nhanh 10 tầng nội tại rồi xoay chiêu 1 liên tục hồi máu và gây sát thương chuẩn.'
      },
      {
        slot: 'skill1',
        name: 'Vũ Điệu Lưỡi Hái',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8e489944300fe5bad8bad805fed38a14583ea1e805fd51.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung lưỡi hái chém xoay tròn gây sát thương vật lý và hồi phục máu theo số lượng tướng trúng đòn.',
        comboTip: 'Kỹ năng hồi máu và xả dame chính trong cận chiến, không tốn năng lượng.'
      },
      {
        slot: 'skill2',
        name: 'Lưỡi Hái Tử Thần',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0e6e0ee90d9b39ec1d12c1e2189333575840ec769b3b41.png',
        cooldown: '9.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Quăng lưỡi hái kéo tất cả kẻ địch phía trước về cạnh Mina, làm chậm 50% tốc chạy của chúng.',
        comboTip: 'Kéo cả đàn kẻ địch hoặc bắt chủ lực đối phương về gần để tung chiêu cuối khiêu khích.'
      },
      {
        slot: 'ultimate',
        name: 'Ma Lực Khiêu Khích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/23cc07dc227dc8e80a2f506c00ca87525840ec99405da1.png',
        cooldown: '35.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mina khiêu khích tất cả kẻ địch xung quanh trong 2 giây, ép chúng phải đánh thường vào cô và giảm 50% sát thương chúng gây ra.',
        comboTip: 'Khống chế cứng diện rộng không thể giải trừ: Tốc Biến vào giữa đội hình rồi khiêu khích toàn bộ kẻ địch.'
      }
    ],
    lore: `Cô gái nghèo mang lời nguyền hắc ám từ lúc lọt lòng. Từng bị phe Ánh Sáng ruồng bỏ và dùng làm vật tế thần, cô đã được Veera cứu rỗi và đưa về Vực Hỗn Mang. Mang cây lưỡi hái tử thần khổng lồ, Mina phụng sự Veera với lòng trung thành tuyệt đối và sự căm hận sâu sắc với Tháp Quang Minh.`,
    battleTips: [
      'Mina cực mạnh khi đối đầu với các tướng đánh tay nhiều như xạ thủ hoặc đấu sĩ nhờ nội tại tích tầng siêu nhanh.',
      'Combo then chốt: Chiêu 2 kéo -> Chiêu cuối khiêu khích 2 giây -> Chiêu 1 xoay chém liên tục.',
      'Cầm bổ trợ Tốc Biến để tạo bất ngờ với cú Tốc Biến + Chiêu Cuối khiêu khích cả đội hình địch.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Thất Truyền', 'Giáp Thống Khổ'],
    relatedHeroIds: ['veera', 'volkath', 'taara', 'maloch']
  },

  {
    id: 'taara',
    name: 'Taara',
    title: 'Búa Cuồng Bạo',
    factionId: 'lokheim',
    role: 'Đỡ Đòn',
    secondaryRole: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f69423f533b12cbcd8ab15a7127e1e445e79e0b77e4ec1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f277ef736ed11c5cafa8c9a03624d15d5e4531fb5cc2d1.jpg',
    quote: 'Ngọn lửa băng giá rèn giũa ý chí ta, nợ máu của Tháp Quang Minh sẽ phải trả bằng máu!',
    stats: { damage: 6, toughness: 10, mobility: 6, crowdControl: 4, difficulty: 3 },
    skills: [
      {
        slot: 'passive',
        name: 'Chiến Ý',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f5fbd9c0377aff8cfad1fa66443bab905840e7300d82e1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi chiêu thức tiêu hao máu nhưng hồi 6% máu đã mất. Cứ 1% máu tổn thất giúp Taara nhận thêm lượng công vật lý lớn.',
        comboTip: 'Máu càng thấp sức sát thương từ búa của Taara càng kinh hoàng, kết hợp chiêu cuối để lật kèo.'
      },
      {
        slot: 'skill1',
        name: 'Trăn Trối',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/93b2c58aade2134597019530aecf192559706f88d9f831.png',
        cooldown: '10.0s',
        energyCost: 'Tiêu hao máu',
        damageType: 'Vật lý',
        description: 'Taara nhảy vồ đến điểm chỉ định nện búa tạ xuống đất làm chậm 60% tốc chạy nạn nhân trong 2 giây.',
        comboTip: 'Chiêu thức tiếp cận vượt địa hình cực tốt dùng để truy đuổi hoặc rút lui qua bờ tường.'
      },
      {
        slot: 'skill2',
        name: 'Đập Tan',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bdaeeab0844fbddc7c40493b0659932a59706f9bee6fe1.png',
        cooldown: '5.0s',
        energyCost: 'Tiêu hao máu',
        damageType: 'Vật lý',
        description: 'Taara xoay tròn chiếc búa tạ hai vòng, gây sát thương vật lý liên tiếp lên tất cả kẻ địch xung quanh.',
        comboTip: 'Chiêu xả sát thương chính trong các pha cận chiến, thời gian hồi cực ngắn.'
      },
      {
        slot: 'ultimate',
        name: 'Thân Thể Thép',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cd3129805ce41ebfd3a5e298eb2d78cc5840e7201f8591.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Kích hoạt ngọn lửa băng hồi phục 8% máu tối đa mỗi giây trong 9 giây liên tục và tăng 30% tốc độ di chuyển.',
        comboTip: 'Bật chiêu cuối khi máu tụt xuống khoảng 30-40% để vừa hồi phục đầy bình máu vừa tận dụng nội tại công vật lý cao.'
      }
    ],
    lore: `Sinh ra tại Dãy Núi Thép thuộc vương quốc Okka. Sau khi dũng cảm lập công đánh đuổi kẻ thù, cô bị Gildur (Tháp Quang Minh) quỵt thưởng, tống giam và tăng gấp đôi sưu thuế lên bộ lạc của mình. Quá phẫn uất trước sự đạo đức giả của Veda, Taara để ngọn lửa băng thiêu đốt linh hồn, gia nhập Vực Hỗn Mang theo Maloch để báo thù.`,
    battleTips: [
      'Taara là hung thần đẩy lẻ khó chịu bậc nhất, có thể hút 2-3 người đối phương lên bắt.',
      'Cầm bổ trợ Bộc Phá hoặc Tốc Hành để càn lướt vào tuyến sau đối phương.',
      'Cẩn thận trước các tướng có trang bị giảm hồi máu như Sách Truy Hồn hay Đao Truy Hồn.'
    ],
    recommendedItems: ['Áo Choàng Thần Ra', 'Giày Kiên Cường', 'Giáp Gaia', 'Khiên Thất Truyền', 'Phù Chú Trường Sinh', 'Giáp Thống Khổ'],
    relatedHeroIds: ['gildur', 'thane', 'maloch', 'veera']
  },

  {
    id: 'arduin',
    name: 'Arduin',
    title: 'Linh Hồn Băng Giá',
    factionId: 'lokheim',
    role: 'Đấu Sĩ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8ac7305489de39cfaa10eb13f5a7824559bb7d0c7f2cc1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d2fbd3a426cf020c1e2e6ad564e50e8c59bb7ee4047461.jpg',
    quote: 'Ngọn lửa băng giá phong ấn linh hồn ta, chỉ còn cỗ máy chiến tranh vô tận!',
    stats: { damage: 7, toughness: 9, mobility: 6, crowdControl: 8, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Hồn Huyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3d5de4f79e1fa9460374c0912bb8189e59bb7d715cf081.png',
        cooldown: '60.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi máu tụt xuống dưới 50%, mỗi đòn đánh hoặc chiêu thức trúng đích hồi phục 4% lượng máu tối đa cho Arduin trong 8 giây.',
        comboTip: 'Khi nội tại kích hoạt, liên tục chém thường để hồi phục đầy cây máu ngay trong giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Hồn Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f8faf6a889c6693c6c869df6e275543759bb7dee68e671.png',
        cooldown: '7.0s (2 lần)',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lần 1 vung rìu chém chậm kẻ địch; nếu trúng tướng địch sẽ mở khóa lần 2 nện đất hất tung kẻ địch trong 1 giây.',
        comboTip: 'Chém trúng lần 1 để mở khóa cú hất tung diện rộng của lần 2.'
      },
      {
        slot: 'skill2',
        name: 'Hồn Giáp Băng Giá',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/875ad531a1aa119b92a10a7c2671942759bb7e3f20cf81.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Chuẩn',
        description: 'Tạo lá chắn băng giá dày 12% máu tối đa, gây sát thương phép xung quanh và cường hóa 3 đòn đánh kế tiếp gây thêm SÁT THƯƠNG CHUẨN.',
        comboTip: 'Bật chiêu 2 để lấy giáp chặn đòn và chém sát thương chuẩn xé nát tanker đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Cỗ Máy Chiến Tranh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8633bfab8234064c0e52dca73f52587859bb7e9b23bb41.png',
        cooldown: '30.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Phóng chiếc rìu khổng lồ tới điểm chỉ định, làm choáng 1.5 giây kẻ địch đầu tiên rồi Arduin lướt tới chụp lấy rìu gây sát thương diện rộng và MIỄN KHỐNG trong lúc lướt.',
        comboTip: 'Chiêu thức mở giao tranh bắt lẻ tầm xa cực mạnh, có thể dùng để vượt tường rút lui an toàn.'
      }
    ],
    lore: `Từng là vị thủ lĩnh vĩ đại của loài người tại Vương quốc Norman kề vai sát cánh cùng Thane. Do trúng cạm bẫy mưu mô của Veera, Arduin lấy thân mình làm mồi nhử cho đồng đội rút lui, cuối cùng bị ngọn lửa băng giá thiêu đốt biến thành một cỗ máy chiến tranh vô hồn phục tùng Vực Hỗn Mang.`,
    battleTips: [
      'Arduin sở hữu bộ kỹ năng công thủ toàn diện với giáp ảo, khống chế cứng và sát thương chuẩn.',
      'Tận dụng chiêu cuối để mở giao tranh từ xa bắt chết xạ thủ đối phương.',
      'Khi máu dưới 50%, hãy bình tĩnh đánh thường để nội tại hồi máu phát huy hiệu quả tối đa.'
    ],
    recommendedItems: ['Áo Choàng Thần Ra', 'Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['veera', 'thane', 'arthur', 'maloch']
  },

  {
    id: 'skud',
    name: 'Skud',
    title: 'Cỗ Máy Cuồng Nộ',
    factionId: 'lokheim',
    role: 'Đấu Sĩ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2b128ebef47ab5a8a2ae9d3db754cd585ee5e21149f621.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/33ff4bfdda333cb5b7af2f2cbb4256a95ee5e258988741.jpg',
    quote: 'Nắm đấm của ác quỷ sẽ nghiền nát mọi chướng ngại vật!',
    stats: { damage: 8, toughness: 10, mobility: 6, crowdControl: 8, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Huyết Mạch Ác Quỷ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6cf0e49add400a08d80f8b8f82d4c00859153216d5d0b1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Skud nhận thêm lượng máu tối đa cực lớn tăng tiến theo trang bị. Đòn đánh thường định kỳ hồi phục máu và năng lượng cho Skud.',
        comboTip: 'Càng lên nhiều máu tối đa, đòn đánh và chiêu thức của Skud càng gây sát thương phép kinh hoàng.'
      },
      {
        slot: 'skill1',
        name: 'Găng Cuồng Bạo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c8640c212a2b6e9ded6d2fa5a77e73a559153257099591.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lao thẳng về phía trước húc bay kẻ địch và hất tung nạn nhân, tăng 60-100 giáp và giáp phép.',
        comboTip: 'Chiêu thức tiếp cận vượt địa hình cực nhanh dùng để hất tung mở đầu combo.'
      },
      {
        slot: 'skill2',
        name: 'Găng Điện Năng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/642b74bfb1796036891ece5d0a63f13f591532b18b7b71.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tụ điện năng vào găng tay trong 5 giây, tăng tốc chạy. Cú đấm tiếp theo nện xuống gây sát thương phép cực lớn theo phần trăm máu tối đa của Skud.',
        comboTip: 'Tụ điện đủ 5 giây rồi đấm một phát bốc hơi trụ hoặc thanh máu của xạ thủ đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Găng Cuồng Nộ Hất Văng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4fbacaad88dd3c4267d8fa603c76e8d15915330381a6b1.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Skud xoay găng nện cực mạnh hất văng tất cả kẻ địch xung quanh ra xa và làm choáng chúng 1 giây, hồi lại chiêu 1 ngay lập tức.',
        comboTip: 'Lướt chiêu 1 ra sau lưng kẻ địch rồi tung chiêu cuối hất chúng ngược về phía trụ hoặc đội hình của ta.'
      }
    ],
    lore: `Cỗ máy cuồng nộ do Mganga tạo ra trong phòng thí nghiệm tà thuật, mang trong mình dòng máu ác quỷ lai tạo cơ khí. Skud từng dẫn đầu cuộc tấn công tàn phá thành phố cơ giới của Moren và là vũ khí hủy diệt thuộc Quân đoàn Veera.`,
    battleTips: [
      'Skud sở hữu lượng máu khổng lồ bậc nhất trò chơi, hãy lên các trang bị cộng máu tối đa.',
      'Chiêu 2 đấm trụ cực kỳ nhanh, Skud là một trong những tướng đẩy trụ trộm nguy hiểm nhất.',
      'Combo: Tụ chiêu 2 -> Chiêu 1 lao vào hất tung -> Đấm chiêu 2 -> Chiêu cuối hất văng về đội hình.'
    ],
    recommendedItems: ['Áo Choàng Thần Ra', 'Giày Kiên Cường', 'Giáp Gaia', 'Phù Chú Trường Sinh', 'Rìu Leviathan', 'Nanh Fenrir'],
    relatedHeroIds: ['mganga', 'veera', 'moren', 'omega']
  },

  {
    id: 'natalya',
    name: 'Natalya',
    title: 'Hiểm Họa Địa Ngục',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a450850337d6a5d19250b1d1e39692f15eccc530c915e1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8f90ee32d1d033379b0062f5388370045eccc50b0f8f71.jpg',
    quote: 'Ngọn lửa địa ngục sẽ thiêu rụi sự ngạo mạn giả dối của các ngươi!',
    stats: { damage: 10, toughness: 4, mobility: 3, crowdControl: 7, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Ám Ảnh Ma Năng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f090bb49a72d9232a3cbbe2da6ca40aa587c405691ffa1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Mỗi chiêu thức trúng đích găm ma năng gây thêm sát thương phép (tối đa 10 tầng), giúp lượng sát thương liên hoàn bùng nổ theo cấp số nhân.',
        comboTip: 'Dồn trọn bộ chiêu thức vào cùng một mục tiêu để kích hoạt tối đa 10 tầng ma năng xóa sổ đối thủ.'
      },
      {
        slot: 'skill1',
        name: 'Ám Ảnh Ma Đạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/96017805bfd414e83b290913a9940801587c40dac72c41.png',
        cooldown: '3.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Phóng ra 5 quả cầu ma thuật hội tụ tại điểm chỉ định, gây lượng sát thương phép cực lớn nếu cả 5 quả cùng găm vào một mục tiêu.',
        comboTip: 'Căn điểm hội tụ của 5 quả cầu găm trúng đối phương để sốc dame ngay từ cấp độ 1.'
      },
      {
        slot: 'skill2',
        name: 'Vòng Xoáy Linh Hồn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/332cd5695f5a9e92a4df857c9738e159587c4138795151.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Phóng ra quả cầu năng lượng khổng lồ làm choáng kẻ địch 1 giây khi chạm phải rồi phân rã thành vùng xoáy làm chậm liên tục.',
        comboTip: 'Làm choáng mục tiêu bằng chiêu 2 trước rồi xả chiêu 1 và chiêu cuối vào vị trí cố định đó.'
      },
      {
        slot: 'ultimate',
        name: 'Tia Sáng Hủy Diệt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fad56c9d6ce4f59fdac2c9450dbc7132587c41cdc751e1.png',
        cooldown: '30.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Bắn ra tia laser năng lượng địa ngục khổng lồ liên tục gây sát thương phép khủng khiếp. Trong thời gian bắn, Natalya nhận lớp lá chắn dày và MIỄN NHIỄM MỌI KHỐNG CHẾ.',
        comboTip: 'Bật chiêu cuối để chặn đứng các pha khống chế cứng và xả lượng sát thương hủy diệt cả đội hình địch.'
      }
    ],
    lore: `Hậu duệ của tộc chiến sĩ mang lời nguyền bảo vệ Tháp Quang Minh. Vì quá chán ghét sự khinh miệt và bạc bẽo của những kẻ mà mình hy sinh bảo vệ, cô đã đồ sát tất cả các trưởng lão và dẫn thân vào Vực Hỗn Mang gia nhập Quân đoàn của Veera.`,
    battleTips: [
      'Natalya là pháp sư có lượng sát thương đầu game mạnh nhất Liên Quân, hãy chủ động cướp bùa hoặc ép đường từ sớm.',
      'Combo thần thánh: Chiêu 2 làm choáng -> Chiêu 1 hội tụ -> Chiêu cuối laser hủy diệt.',
      'Trong lúc tung chiêu cuối lớp lá chắn cung cấp khả năng miễn nhiễm khống chế, có thể hủy chiêu sớm nếu cần di chuyển.'
    ],
    recommendedItems: ['Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Mặt Nạ Berith', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['veera', 'volkath', 'mganga', 'aleister']
  },

  {
    id: 'raz',
    name: 'Raz',
    title: 'Quyền Vương',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6b79035779ab9195c76d91b3f2e7ca79591e6857831601.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c5cdd906de9c6f1e2a9f349a0c8a64ad591e6990ac0621.jpg',
    quote: 'Nắm đấm của ta rực cháy ngọn lửa công lý, xuyên thủng mọi âm mưu bóng tối!',
    stats: { damage: 10, toughness: 4, mobility: 9, crowdControl: 9, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Quán Tính Lướt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/28496fb3102bced9fbd0b35fe08872aa591e6dedf17181.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Sau mỗi lần tung chiêu thức, Raz có thể lướt nhanh theo hướng di chuyển. Đòn đánh thường thứ 3 đẩy lùi kẻ địch và gây sát thương phép lớn.',
        comboTip: 'Lướt quán tính sau mỗi chiêu thức để giữ khoảng cách, né chiêu và đổi góc tấn công.'
      },
      {
        slot: 'skill1',
        name: 'Cú Đấm Thăng Hoa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4b839616ce567a2780502da62b05956f591e6e31756d61.png',
        cooldown: '8.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Lao tới tung cú đấm móc hất tung tất cả kẻ địch lên không trung trong 1 giây.',
        comboTip: 'Chiêu thức áp sát và hất tung mở đầu chuỗi combo đẩy lùi liên hoàn.'
      },
      {
        slot: 'skill2',
        name: 'Cú Đấm Chân Không',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2041b9f316ef59f8b78bf2f9cdf5daff591e6e6c2c81d1.png',
        cooldown: '2.0s',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Phóng ra luồng kình khí cầu lửa gây sát thương phép, làm chậm 90% tốc chạy và giảm giáp phép của nạn nhân.',
        comboTip: 'Kỹ năng cấu rỉa liên tục hồi chiêu 2 giây, làm chậm cực nặng trước khi lao vào combo dồn sát thương.'
      },
      {
        slot: 'ultimate',
        name: 'Tả Xung Hữu Đột',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/65594eb93b7c5b165371bc69cbaace01591e6ea53e9ec1.png',
        cooldown: '25.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Raz hóa thành ngọn lửa cuồng nộ ủi thẳng về phía trước, đẩy lùi liên tục tất cả kẻ địch trên đường chạy và làm giảm công vật lý của chúng.',
        comboTip: 'Tốc Biến ra sau lưng kẻ địch rồi dùng chiêu cuối đẩy chúng ngược về phía đồng đội hoặc trụ.'
      }
    ],
    lore: `Thực chất là một điệp viên trung thành của Vua Thane (Lâu Đài Khởi Nguyên) cài vào Vực Hỗn Mang để điều tra bí mật. Dù bị phát hiện và dính lời nguyền tàn độc, anh vẫn kiên cường trốn thoát thành công và được Đại thiên sứ Lauriel dùng suối nguồn ánh sáng gột rửa.`,
    battleTips: [
      'Raz đòi hỏi kỹ năng định hướng và nhịp tay lướt quán tính cực cao để tối ưu độ cơ động.',
      'Chiêu 2 cấu rỉa liên tục hồi chiêu siêu ngắn, làm chậm và trừ giáp phép đối thủ.',
      'Combo huyền thoại: Chiêu 2 làm chậm -> Tốc Biến + Chiêu cuối đẩy lùi về -> Chiêu 1 hất tung -> Đánh thường đẩy tiếp.'
    ],
    recommendedItems: ['Giày Phù Thủy', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Quyền Trượng Rhea', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['thane', 'lauriel', 'veera', 'volkath']
  },

  {
    id: 'nakroth',
    name: 'Nakroth',
    title: 'Phán Quan Cõi Âm',
    factionId: 'lokheim',
    role: 'Sát Thủ',
    secondaryRole: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c7b840bdacd7e5a8b83af72ccd9ca1815ec64fdc5ffeb1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/50a88477e44151ee8ef4cfb354c22fdc5ec64ff164ffc1.jpg',
    quote: 'Trước lưỡi đao phán xét của ta, linh hồn ngươi chỉ là món nợ phải thanh toán!',
    stats: { damage: 9, toughness: 4, mobility: 10, crowdControl: 7, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Thẩm Phán Uy Nghi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/040abb9f3e93d6bc5cf4636f5430842e584a480b7b3c11.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi đòn đánh thứ 4 hất tung mục tiêu. Tung chiêu trúng đích tăng 50% tốc độ đánh.',
        comboTip: 'Tận dụng đòn đánh thứ 4 hất tung để ngắt chiêu niệm của đối thủ hoặc giữ chân chúng.'
      },
      {
        slot: 'skill1',
        name: 'Bồi Thẩm Đoàn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c672a914ad48130d0e9344982dca4d1b584a49a3b0a7c1.png',
        cooldown: '9.0s (2 lần lướt)',
        energyCost: '55',
        damageType: 'Vật lý',
        description: 'Lao về phía trước hất tung mục tiêu. Có thể tái kích hoạt lướt thêm một lần nữa qua các địa hình hiểm trở.',
        comboTip: 'Lướt lần 1 hất tung tiếp cận, gây sát thương rồi lướt lần 2 rút lui hoặc truy đuổi.'
      },
      {
        slot: 'skill2',
        name: 'Nguồn Cơn Rắc Rối',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/76f77f12dc382f1126ebff00a8693c6e584a49df153ea1.png',
        cooldown: '5.0s',
        energyCost: '55',
        damageType: 'Vật lý',
        description: 'Nhảy lùi ngược lại hướng chỉ định (lướt ngược), đòn đánh kế tiếp quét lưỡi đao cực mạnh gây sát thương lan.',
        comboTip: 'Kéo cần chiêu về phía sau để lao về phía trước. Đây là kỹ năng di chuyển linh hoạt bậc nhất bản đồ.'
      },
      {
        slot: 'ultimate',
        name: 'Gươm Hành Quyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e8446faef0331a84aa945b8308f54ebc584a4a007d82f1.png',
        cooldown: '30.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Vung song đao chém liên tiếp 4 nhát hình nón. Hoàn toàn MIỄN NHIỄM MỌI KHỐNG CHẾ trong khi chém, nhát cuối hất văng đối thủ.',
        comboTip: 'Bật chiêu cuối để chặn các kỹ năng khống chế cứng từ đối thủ và gây sát thương kết liễu an toàn.'
      }
    ],
    lore: `Sinh ra trong một gia đình quý tộc Norman nhưng bất bình trước sự thối nát, trục lợi của giới cầm quyền. Sau khi đồng đội ngã xuống trong oan ức, Nakroth rời bỏ quê hương gia nhập Quân Đoàn Hỗn Mang của Maloch, trở thành Phán Quan Cõi Âm công minh và thiết diện vô tư, dùng cặp song đao phán xét mọi linh hồn.`,
    battleTips: [
      'Tập luyện kỹ năng lướt ngược chiêu 2 để di chuyển mượt mà trên khắp bản đồ.',
      'Là tướng cướp rừng và đẩy lẻ trứ danh, tận dụng độ cơ động để tạo áp lực 3 đường.',
      'Hạn chế lao vào giữa giao tranh 5v5 đông người khi đối phương còn giữ nhiều chiêu thức khống chế diện rộng.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thương Longinus', 'Phức Hợp Kiếm', 'Thánh Kiếm', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['maloch', 'volkath', 'veera', 'grakk']
  },

  {
    id: 'grakk',
    name: 'Grakk',
    title: 'Kẻ Phàm Ăn',
    factionId: 'lokheim',
    role: 'Đỡ Đòn',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/040403525e2882c0e3a6794c31976c89585357ba19a351.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6e915f887da89ab7e327625a739c75c05ef5e9788f06e1.jpg',
    quote: 'Mùi hương của linh hồn tươi ngon... ta muốn nuốt chửng tất cả!',
    stats: { damage: 6, toughness: 10, mobility: 3, crowdControl: 10, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Huyết Tế Nổ Xác',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/6e6f3241f81eec8e869a61758b797e0f58535875ac29d1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Khi chịu sát thương vượt quá 10% máu hiện tại, Grakk kích nổ gây sát thương phép xung quanh. Khi chết, thi thể Grakk phát nổ dữ dội sau 2.5 giây.',
        comboTip: 'Tận dụng vụ nổ sau khi chết để kéo theo những kẻ địch ít máu đang có ý định đứng lại ăn mừng.'
      },
      {
        slot: 'skill1',
        name: 'Khí Áp Địa Ngục',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/55e94d9905b9e8ba91bb4b580e6f81c7585358c5214bd1.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Nện xuống đất làm chậm 80% tốc chạy và gây sát thương phép lên kẻ địch xung quanh.',
        comboTip: 'Dùng ngay sau khi kéo đối phương về để giữ chân chúng không cho tháo chạy.'
      },
      {
        slot: 'skill2',
        name: 'Dây Xích Ma Quái',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c1becb7a7f179f655a71ac03c236a7c4585359132ca081.png',
        cooldown: '12.0s',
        energyCost: '80',
        damageType: 'Phép',
        description: 'Quăng sợi xích dài kéo kẻ địch đầu tiên trúng đòn về cạnh Grakk. Nội tại: Mỗi mạng hạ hoặc phụ tăng vĩnh viễn máu tối đa.',
        comboTip: 'Chiêu thức kéo định mệnh tạo nên thương hiệu của Grakk, có thể kéo đối phương vào trong trụ hoặc kéo bùa quấy rối rừng.'
      },
      {
        slot: 'ultimate',
        name: 'Nuốt Chửng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ca4a5d365e46f50d9565bb0f361802fb5853594e609721.png',
        cooldown: '40.0s',
        energyCost: '130',
        damageType: 'Phép',
        description: 'Grakk há miệng khổng lồ liên tục hút kẻ địch phía trước vào bụng gây sát thương phép và nhận lớp lá chắn dày.',
        comboTip: 'Kéo trúng đối phương bằng chiêu 2 rồi lập tức bật chiêu cuối để hút chặt nạn nhân suốt 3 giây.'
      }
    ],
    lore: `Kẻ phàm ăn vô độ bị biến thành quỷ đói sau khi chết, phục tùng trong Quân Đoàn Hỗn Mang của Maloch. Grakk dùng xích sắt kéo và nuốt chửng linh hồn kẻ thù vào cái bụng không đáy của mình để ngày càng to lớn và mạnh mẽ hơn.`,
    battleTips: [
      'Độ chuẩn xác của cú kéo chiêu 2 quyết định 90% sức mạnh và độ nguy hiểm của Grakk.',
      'Có thể sang rừng đối phương từ cấp độ 1 để kéo bùa nhằm làm chậm nhịp đi rừng của kẻ địch.',
      'Combo: Chiêu 2 kéo -> Chiêu 1 làm chậm -> Chiêu cuối Nuốt Chửng khóa chặt.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huy Chương Troy', 'Giáp Thống Khổ'],
    relatedHeroIds: ['maloch', 'nakroth', 'volkath', 'veera']
  },

  {
    id: 'zephys',
    name: 'Zephys',
    title: 'Lưỡi Hái Tử Thần',
    factionId: 'lokheim',
    role: 'Đấu Sĩ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/zephys-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/zephys.jpg',
    quote: 'Lưỡi hái của ta không bao giờ chệch hướng, cõi âm đang đợi ngươi!',
    stats: { damage: 8, toughness: 9, mobility: 8, crowdControl: 7, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Bền Bỉ Cõi Âm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/70ea3a46ff247e47d163ea46602b5c78583f942dc9d111.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Cứ mỗi 3% máu tổn thất, Zephys nhận thêm 1% miễn giảm sát thương (máu càng thấp càng trâu bò không tưởng).',
        comboTip: 'Máu càng thấp Zephys càng chống chịu trâu bò, tự tin cò cưa và lật kèo ở ngưỡng máu tử thần.'
      },
      {
        slot: 'skill1',
        name: 'Đâm Lao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4ad1252ee55a82f317a6a95ff19b4713583f94522b4d81.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt về phía trước đâm thương gây sát thương vật lý, đòn đánh kế tiếp tăng tầm và làm chậm 25% tốc chạy.',
        comboTip: 'Chiêu thức cơ động vượt địa hình dùng để áp sát hoặc rút lui nhịp nhàng.'
      },
      {
        slot: 'skill2',
        name: 'Liên Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/90a9d93dc60fa770f3e6b49444547b1a583f946c760ee1.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Đâm kích liên tiếp 4 nhát hình nón gây sát thương vật lý và hồi phục máu cho Zephys theo mỗi nhát đâm trúng tướng.',
        comboTip: 'Nguồn hồi máu chính giúp Zephys duy trì thể lực lâu dài trong giao tranh tay đôi.'
      },
      {
        slot: 'ultimate',
        name: 'Không Kích Cõi Âm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d703a6ba6bf10afeaeb7771b4513ddef583f94858e4401.png',
        cooldown: '18.0s',
        energyCost: '90',
        damageType: 'Phép',
        description: 'Zephys nhảy bổ lên không trung rồi giáng mạnh xuống đất hất tung kẻ địch 1 giây, biến đòn đánh kế tiếp thành sát thương sấm sét.',
        comboTip: 'Chiêu thức mở giao tranh bắt lẻ then chốt, thời gian hồi cực ngắn ở giai đoạn cuối trận.'
      }
    ],
    lore: `Lưỡi hái tử thần kiệm lời, có nhiệm vụ thu thập linh hồn và duy trì trật tự cõi âm thuộc Quân Đoàn Trùng Ảnh của Marja. Hắn từng cùng Nakroth phối hợp thực hiện vụ ám sát nhằm vào Nữ thần Ilumia trên đỉnh Orsen trước khi bị Xeniel cản phá.`,
    battleTips: [
      'Zephys rất mạnh ở giai đoạn giữa trận nhờ lượng miễn thương khổng lồ khi lượng máu xuống thấp.',
      'Combo: Chiêu cuối nhảy vào hất tung -> Chiêu 2 đâm liên kích hồi máu -> Chiêu 1 lướt truy đuổi hoặc rút lui.',
      'Lên đồ nửa công nửa thủ để phát huy tối đa nội tại Bền Bỉ.'
    ],
    recommendedItems: ['Rìu Leviathan', 'Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Huân Chương Troy', 'Nanh Fenrir'],
    relatedHeroIds: ['marja', 'kriknak', 'nakroth', 'xeniel']
  },

  {
    id: 'kriknak',
    name: 'Kriknak',
    title: 'Bọ Sát Thủ',
    factionId: 'lokheim',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0dac2ca73eb28c03de2e43f85e868df458e710b5baeb41.png',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/96415e6f9da45b94a0590e3a08028c8958e7138edc4ce1-1.jpg',
    quote: 'Ẩn mình trong bóng tối, lưỡi dao độc sẽ kết liễu mọi sự sống!',
    stats: { damage: 10, toughness: 4, mobility: 9, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Nhấm Nháp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e8dfb6273f84fd8b443ab3b299c044b658e7119cd33581.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Sau khi tung chiêu thức, đòn đánh thường kế tiếp được cường hóa gây thêm lượng lớn sát thương vật lý.',
        comboTip: 'Xen kẽ một đòn đánh thường sau mỗi lần dùng chiêu để tối ưu hóa lượng sát thương dồn sốc.'
      },
      {
        slot: 'skill1',
        name: 'Ấu Trùng Quỷ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/87cb3cdc3a6b9336ebf2ce22439384b158e712d31da251.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Phóng ấu trùng găm vào kẻ địch gây sát thương và đánh dấu. Tấn công mục tiêu bị đánh dấu sẽ kích nổ gây sát thương theo phần trăm máu tối đa.',
        comboTip: 'Găm chiêu 1 trước rồi lao vào dồn sát thương để kích hoạt vụ nổ ấu trùng rút cạn cây máu đối phương.'
      },
      {
        slot: 'skill2',
        name: 'Bọ Húc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3830289ca423998dab73bb6db01e2e4058e713246c5851.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt nhanh về phía trước gây sát thương vật lý và hồi máu cho Kriknak cho mỗi tướng địch trúng đòn.',
        comboTip: 'Chiêu thức vượt địa hình cơ động dùng để tiếp cận hoặc rút lui và hồi phục máu.'
      },
      {
        slot: 'ultimate',
        name: 'Hiểm Họa Không Gian',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/60bf568276cfa9e91a00dd2aa172667558e7136958fe01.png',
        cooldown: '24.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Kriknak đập cánh bay lên không trung trong 6 giây, tăng tốc độ di chuyển cực đại. Tái kích hoạt đáp xuống đất đè bẹp kẻ địch làm chậm 50% và giảm sát thương của chúng.',
        comboTip: 'Bay lên lượn rình rập rồi đáp xuống kết hợp chiêu 1 đập tan nát xạ thủ hoặc pháp sư địch.'
      }
    ],
    lore: `Bọ sát thủ ẩn mình trong bóng tối sâu thẳm, vô cùng trung thành và sẵn sàng hy sinh tất cả vì chủ nhân Marja. Thuộc biên chế Quân Đoàn Trùng Ảnh, Kriknak là lưỡi dao ám sát chớp nhoáng reo rắc kinh hoàng khắp đại lục.`,
    battleTips: [
      'Kriknak là sát thủ dồn sát thương sốc chớp nhoáng hàng đầu, hãy ưu tiên bắt chủ lực yếu máu.',
      'Combo: Chiêu cuối bay lên -> Chiêu 1 đánh dấu -> Chiêu cuối đáp xuống -> Đánh thường -> Chiêu 2 lướt bồi thêm.',
      'Tận dụng tốc độ bay cực nhanh của chiêu cuối để kiểm soát và đi gank khắp 3 đường.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Du Mục', 'Thương Longinus', 'Phức Hợp Kiếm', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['marja', 'zephys', 'volkath', 'veera']
  },

  {
    id: 'omen',
    name: 'Omen',
    title: 'Quỷ Kiếm Cuồng Sát',
    factionId: 'lokheim',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/00a78d4f7222a428cd06b45252f88a565a73df2c56ad81.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ac091c4f83f63e5fe0d04d1d27d6c7f85a73df52368631.jpg',
    quote: 'Giết chóc không cần lý do, máu tươi là thứ duy nhất làm dịu cơn khát của ta!',
    stats: { damage: 9, toughness: 9, mobility: 5, crowdControl: 9, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Sát Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/18bbb17dcf38fcd980ebcff3492d8e925a742543919aa1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Đòn đánh thường tích 1 điểm sát khí (tối đa 5 điểm). Đủ 5 điểm kích hoạt trạng thái cuồng sát: tăng 60% tốc đánh, tốc chạy và đòn đánh gây SÁT THƯƠNG CHUẨN kèm giảm hồi chiêu 1 & 2.',
        comboTip: 'Đánh lính tích 4 điểm sát khí trước khi lao vào solo với tướng địch để lập tức bùng nổ sát thương chuẩn.'
      },
      {
        slot: 'skill1',
        name: 'Sát Kiếm Kéo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8d7d396327b9d42d05c8e8180d2713f95a7425ca5ef1a1.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung kiếm kéo tất cả kẻ địch trước mặt về cạnh Omen và làm chậm 25% tốc chạy của chúng.',
        comboTip: 'Kéo kẻ địch lại gần khi chúng có ý định tháo chạy ra khỏi tầm đánh cận chiến.'
      },
      {
        slot: 'skill2',
        name: 'Sát Niệm Miễn Thương',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5625a205a66d4ed1d3e2a18f155653565a74265d19d5d1.png',
        cooldown: '10.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Tăng 50-70% miễn giảm sát thương và 30% tốc chạy trong 2 giây. Trong thời gian này, phản lại đòn đánh thường của kẻ địch gây sát thương chuẩn và làm chậm.',
        comboTip: 'Kích hoạt ngay khi đối phương tung chiêu sốc sát thương lớn để triệt tiêu phần lớn lượng dame.'
      },
      {
        slot: 'ultimate',
        name: 'Sát Vực Giam Cầm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7d539aa98abcafd9934a9183fd8c30da5a7426ec141521.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Omen lướt tới cắm thanh kiếm tạo thành đấu trường giam cầm mục tiêu đầu tiên trúng đòn trong 5 giây. Kẻ địch hoàn toàn KHÔNG THỂ THOÁT RA KHỎI VÒNG (kể cả dùng Tốc Biến hay chiêu lướt).',
        comboTip: 'Bắt chết các tướng cơ động cao như Nakroth, Murad hay Florentino nhốt vào lồng để cả đội tiêu diệt.'
      }
    ],
    lore: `Ác quỷ khát máu cuồng sát sinh ra từ đáy sâu Vực Hỗn Mang, giết cả bạn lẫn thù, là cỗ máy chém kinh hoàng nhất đại lục. Omen hoạt động như một Độc Hành Giả liên minh với Vực Thẳm, nơi nào có chiến tranh đẫm máu nơi đó có lưỡi kiếm tàn bạo của hắn.`,
    battleTips: [
      'Omen là vua solo đường và đẩy lẻ số 1 của Liên Quân Mobile.',
      'Chiêu cuối giam cầm 5 giây là án tử cho bất kỳ vị tướng nào bị nhốt vào lồng.',
      'Thời điểm bật chiêu 2 miễn thương 70% quyết định khả năng ao nhây của Omen.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Đao Truy Hồn', 'Áo Choàng Băng Giá', 'Huân Chương Troy', 'Giáp Thống Khổ', 'Nanh Fenrir'],
    relatedHeroIds: ['volkath', 'maloch', 'veera', 'nakroth']
  },

  {
    id: 'zip',
    name: 'Zip',
    title: 'Ma Thú Háu Ăn',
    factionId: 'lokheim',
    role: 'Trợ Thủ',
    secondaryRole: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e0f8f382d1be41adc8947bf1b849479b5d3823c7418f71.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/608c1ed2a2d799a34dab477918c665565d3824106c1b51.jpg',
    quote: 'Ụm bòooo! Cái gì ăn được là Zip nuốt hết!',
    stats: { damage: 4, toughness: 9, mobility: 8, crowdControl: 9, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Căng Tròn Ma Quái',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/962645d2da9b844430d1d5ac1072cbb25d3ac86ecc8591.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi phồng to bụng, Zip nhận thêm lượng lớn giáp và giáp phép, phản đòn gây sát thương phép lên kẻ địch xung quanh.',
        comboTip: 'Hút đồng minh hoặc lính để biến thành quả bóng khổng lồ cực kỳ trâu bò.'
      },
      {
        slot: 'skill1',
        name: 'Ác Hồn Chú',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1d1170e66af811becb805934a3fa95a55d3ac8b5bbbca1.png',
        cooldown: '6.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Bắn ra tia năng lượng ma thuật làm choáng kẻ địch 0.5s và kết nối với mục tiêu thứ hai lân cận.',
        comboTip: 'Chiêu khống chế giữ chân đối thủ và liên kết sát thương giữa 2 kẻ địch.'
      },
      {
        slot: 'skill2',
        name: 'Khí Thôn Sơn Hà',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c64fd1262ed0d921a220fed54b3cdecf5d3ac90975b151.png',
        cooldown: '10.0s',
        energyCost: '80',
        damageType: 'Hỗ trợ',
        description: 'Zip há to mồm hút lính, quái rừng và TẤT CẢ ĐỒNG MINH vào bụng (đồng minh trong bụng hoàn toàn bất tử). Khi nhả ra ban lá chắn khổng lồ cho đồng đội.',
        comboTip: 'Kỹ năng bảo kê số 1 thế giới: nuốt xạ thủ đang bị bắt vào bụng rồi chạy thoát ra ngoài an toàn.'
      },
      {
        slot: 'ultimate',
        name: 'Lăn Lộn Bất Tận',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/22707a803789fdd00fb1e8de70d7cd645d3ac93b562d31.png',
        cooldown: '45.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Zip biến thành quả bóng tròn lăn nhanh với tốc độ cực đại, liên tục hất tung và gây sát thương phép lên tất cả kẻ địch trên đường lăn, MIỄN KHỐNG hoàn toàn.',
        comboTip: 'Nuốt đồng đội vào bụng rồi bật chiêu cuối lăn thẳng vào đội hình đối phương để mở giao tranh siêu dị.'
      }
    ],
    lore: `Một ma thú nhỏ nhắn, đáng yêu nhưng sở hữu trí tuệ đặc thù và dạ dày không đáy, là kỳ vọng lớn của Veera để chỉ huy các ma thú tại Vực Hỗn Mang. Zip có khả năng nuốt chửng mọi thứ từ quái rừng, lính cho đến đồng minh vào bụng để bảo vệ họ an toàn tuyệt đối.`,
    battleTips: [
      'Zip là vị trợ thủ sở hữu cơ chế bảo kê đồng đội ảo diệu nhất game.',
      'Chiêu 2 có thể nuốt lính đồng minh để hoãn lính đẩy vào trụ hoặc nuốt bùa rừng quấy rối đối thủ.',
      'Chiêu cuối lăn lộn có thể đập vào tường để đổi hướng liên tục gây choáng diện rộng.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Khiên Huyền Thoại', 'Giáp Gaia', 'Huân Chương Troy', 'Giáp Thống Khổ'],
    relatedHeroIds: ['veera', 'volkath', 'maloch', 'omen']
  },

  {
    id: 'aleister',
    name: 'Aleister',
    title: 'Quang Vinh Phản Đồ',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    secondaryRole: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/15600.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/aleister-00.jpg',
    quote: 'Thiên tài không cần sự gông cùm của đạo đức, chỉ có ma pháp tối thượng mới là chân lý!',
    stats: { damage: 8, toughness: 3, mobility: 4, crowdControl: 10, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Ma Thuật Đen',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/099af9c154213473b8764bc612e46f8758609997121da1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Chiêu thức ghim bùa chú lên mục tiêu. Đủ 3 bùa chú sẽ phát nổ gây sát thương chuẩn và làm chậm tốc chạy kẻ địch.',
        comboTip: 'Kết hợp ma trận chiêu 2 và vách ngăn chiêu 1 để kích hoạt nổ nội tại sát thương chuẩn liên tục.'
      },
      {
        slot: 'skill1',
        name: 'Vách Ngăn Hắc Ám',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/eddb1cdab796123ba4394629d6043bdc58609d1ac4e2f1.png',
        cooldown: '8.0s',
        energyCost: '80',
        damageType: 'Phép',
        description: 'Dựng lên bức tường sấm sét ma thuật. Kẻ địch bước qua bức tường sẽ bị làm choáng 1.25 giây và bị gắn 1 bùa chú.',
        comboTip: 'Chặn họng các lối đi hẹp trong rừng hoặc đón đầu đường truy đuổi của đối thủ.'
      },
      {
        slot: 'skill2',
        name: 'Ma Trận Hỗn Mang',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d49319c82de9b26df60814fc53aea16c58609d234740b1.png',
        cooldown: '10.0s (Tích 2 lần)',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tạo ma trận sấm sét giật liên tục 6 lần gây sát thương phép và tích lũy bùa chú nội tại cho mỗi lần đánh trúng.',
        comboTip: 'Dọn dẹp đợt lính từ xa siêu nhanh và ép góc giao tranh tổng cực mạnh.'
      },
      {
        slot: 'ultimate',
        name: 'Ngục Tù Vĩnh Cửu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ef7d4848fde0bd0f11bf1a278eb6ffd458609d2ade5f41.png',
        cooldown: '35.0s',
        energyCost: '130',
        damageType: 'Phép',
        description: 'Khóa chặt mục tiêu chỉ định trong tia sét hắc ám tối đa 2.5 giây, liên tục gây sát thương phép và khống chế cứng tuyệt đối (KHÔNG THỂ THANH TẨY).',
        comboTip: 'Bắt chết các sát thủ siêu cơ động như Nakroth, Murad hay Florentino khi chúng dám lao vào.'
      }
    ],
    lore: `Cựu ứng viên sáng giá bậc nhất của Cung Điện Ánh Sáng và là sư phụ dẫn dắt Tulen. Vì ghen tị trước thiên phú sấm sét của đệ tử và bị Veera quyến rũ mê hoặc, Aleister đã quay lưng phản bội Tháp Quang Minh, dâng hiến trí tuệ thiên tài cho Vực Hỗn Mang, trở thành kẻ phản đồ đa mưu túc trí.`,
    battleTips: [
      'Chiêu cuối khống chế cứng không thể thanh tẩy, hãy luôn đi cùng đồng đội để dồn sát thương kết liễu.',
      'Giữ vị trí an toàn phía sau vì Aleister phải đứng yên niệm chú trong suốt thời gian tung chiêu cuối.',
      'Tận dụng 2 điểm tích lũy của chiêu 2 để dọn đường và cấu rỉa liên tục.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Mặt Nạ Berith', 'Trượng Băng', 'Sách Truy Hồn', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['tulen', 'veera', 'volkath', 'ilumia']
  },

  {
    id: 'hayate',
    name: 'Hayate',
    title: 'Ninja Tà Long',
    factionId: 'lokheim',
    role: 'Xạ Thủ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/02c8e3d1db8ee8f32913b478884f33e05c8f254a7686f1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d0c33087d442efacbb2b543cee4527c45c8f29a4c7a521.jpg',
    quote: 'Bản khế ước bất công giam hãm ta, nhưng bóng tối Vực Thẳm đã cho ta sức mạnh tự do!',
    stats: { damage: 10, toughness: 3, mobility: 8, crowdControl: 2, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Ảo Ảnh Ngoạn Mục',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1d904ee6746be249c50bc3ae5d02f3de5c8f25c91ac421.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Đòn đánh và chiêu thức khắc dấu ấn tà linh. Đủ 6 tầng giúp các đòn tấn công kế tiếp trong 4 giây gây thêm SÁT THƯƠNG CHUẨN (có thể chí mạng).',
        comboTip: 'Tích đủ 6 điểm nội tại bằng chiêu 1 trước khi lao vào bão phi tiêu chiêu cuối để xả hàng tấn sát thương chuẩn.'
      },
      {
        slot: 'skill1',
        name: 'Chuỗi Phi Tiêu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5178f7bfaca92a7408df2416ec5985d55c8f26a66a7d31.png',
        cooldown: '5.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Vừa di chuyển tự do vừa liên tục phóng phi tiêu theo hướng chỉ định. Số lượng phi tiêu tăng tiến theo các mốc tốc đánh (tối đa 9 phi tiêu ở 150% tốc đánh).',
        comboTip: 'Vừa bắn vừa giữ khoảng cách di chuyển ziczac để cấu rỉa và tích tầng nội tại an toàn.'
      },
      {
        slot: 'skill2',
        name: 'Ảnh Độn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/af00ce5685ebd57209d003139755027c5c8f26d9590791.png',
        cooldown: '8.0s',
        energyCost: '110',
        damageType: 'Hỗ trợ',
        description: 'Lướt nhanh về hướng chỉ định. Nội tại: Khi có tướng địch ở gần, dưới chân xuất hiện vòng cảnh báo và tăng 10% tốc chạy cùng 15% sát thương.',
        comboTip: 'Vòng nội tại chiêu 2 giúp phát hiện kẻ địch đang rình rập tàng hình hoặc núp trong bụi cỏ lân cận.'
      },
      {
        slot: 'ultimate',
        name: 'Bão Phi Tiêu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/16fdd9e9f58817e4e8e1898da3e2a18e5c8f2987cb9d21.png',
        cooldown: '40.0s',
        energyCost: '140',
        damageType: 'Chuẩn',
        description: 'Dịch chuyển tức thời vào điểm chỉ định và phóng cơn bão phi tiêu 360 độ xung quanh. Kích hoạt toàn bộ nội tại sát thương chuẩn xé nát đội hình đối phương.',
        comboTip: 'Chờ đối phương tung hết khống chế cứng, kết hợp Thanh Tẩy rồi tốc biến chiêu cuối vào giữa đội hình quét sạch kẻ địch.'
      }
    ],
    lore: `Anh trai của Airi, một Ninja sở hữu tài năng thiên bẩm tại Đảo Sương Mù. Trải qua năm tháng chứng kiến đồng đội hy sinh vô ích để bảo vệ khế ước bất công với Tháp Quang Minh ngạo mạn, Hayate bắt tay với Mganga và Veera lấy sức mạnh bóng tối hòng chặt đứt khế ước này, giải phóng tộc nhân khỏi sự lệ thuộc.`,
    battleTips: [
      'Lên đồ ưu tiên đạt đủ mốc 150% tốc đánh càng sớm càng tốt để tối ưu hóa số lượng phi tiêu.',
      'Cầm bổ trợ Thanh Tẩy để tránh bị ngắt chiêu cuối khi lao vào tâm bão giao tranh.',
      'Sử dụng vòng sáng nội tại chiêu 2 để tránh bị sát thủ đối phương bắt lẻ trong bụi.'
    ],
    recommendedItems: ['Gươm Sấm Sét', 'Giày Kiên Cường', 'Rìu Hyoga', 'Diệt Thần Cung', 'Áo Choàng Băng Giá', 'Nanh Fenrir'],
    relatedHeroIds: ['airi', 'tachi', 'veera', 'volkath']
  },

  {
    id: 'errol',
    name: 'Errol',
    title: 'Cánh Tay Ác Ma',
    factionId: 'lokheim',
    role: 'Đấu Sĩ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5067bb53ba6435e11cc8777645d8de115cc136a9ca3b31.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4f1fac31ccf43069c43da3c95af27ead5cc134b34b3ab1.jpg',
    quote: 'Cánh tay này không ngừng gào thét đòi uống máu kẻ thù!',
    stats: { damage: 9, toughness: 7, mobility: 7, crowdControl: 6, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Tay Ác Ma Điên Cuồng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/53896de7cbe73493f40a3a27d5fa669f5ccac5fd14ea81.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Đòn đánh thường tích lũy điểm cuồng bạo (tối đa 5 điểm), tăng tốc đánh, tốc chạy và hút máu cực lớn nhưng giảm giáp bản thân. Đòn thứ 3 chém quét hình bán nguyệt.',
        comboTip: 'Tích đủ 5 điểm nội tại giúp chiêu 2 biến thành cú đại đao nện sát thương chuẩn khổng lồ.'
      },
      {
        slot: 'skill1',
        name: 'Tay Lướt Cắt Cổ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/25a3cdd058878621dfd704d5ab507d785ccac6c91291e1.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt tới phía trước chém ngang gây sát thương vật lý và làm chậm. Nếu trúng tướng địch, Errol dịch chuyển tức thời ra sau lưng mục tiêu.',
        comboTip: 'Dùng để né kỹ năng định hướng và bất ngờ xuất hiện phía sau lưng đối thủ.'
      },
      {
        slot: 'skill2',
        name: 'Mắt Xích Tội Lỗi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4108c124b8ec0abc25b22f613e7406f45ccac6b2030b01.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Vung cánh tay ác ma biến thành cự kiếm nện thẳng xuống đất hất tung kẻ địch 1 giây. Ở 5 tầng nội tại, chiêu thức gây SÁT THƯƠNG CHUẨN và hồi 100% máu.',
        comboTip: 'Tích đủ 5 tầng nội tại rồi nện chiêu 2 để một nhát kiếm bổ đôi cây máu của đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Mắt Ác Ma Bay Lên',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/691835535f456061c988ffde20962b815ccac615847471.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Errol phóng lên không trung trong 2 giây (hoàn toàn bất khả xâm phạm), liên tục bắn mưa gai máu xuống khu vực chỉ định rồi đáp xuống nện hất tung tất cả kẻ địch.',
        comboTip: 'Kỹ năng ao nhây và băng trụ tuyệt đỉnh, dùng né chiêu thức chết chóc rồi giáng xuống kết liễu đối thủ.'
      }
    ],
    lore: `Chiến binh dũng cảm của Vương quốc Norman. Cùng anh trai Kent tham gia khảo nghiệm ma thuật đen, chứng kiến anh trai lấy thân mình đỡ đòn ác ma hy sinh thảm khốc. Nỗi đau gián tiếp hại chết anh trai khiến tâm trí Errol suy sụp, tạo cơ hội cho linh hồn Volkath xâm nhập khiến hắn phân liệt và hóa điên.`,
    battleTips: [
      'Errol có lượng hút máu và sát thương chuẩn cực lớn ở chiêu 2 khi đủ 5 tầng nội tại.',
      'Chiêu cuối giúp Errol hoàn toàn biến mất khỏi bản đồ trong 2 giây để né tránh mọi sát thương.',
      'Chiêu 1 có thể dịch chuyển ra sau lưng đối thủ để né các chiêu thức định hướng.'
    ],
    recommendedItems: ['Thương Longinus', 'Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['volkath', 'maloch', 'veera', 'allain']
  },

  {
    id: 'lorion',
    name: 'Lorion',
    title: 'Hắc Ma Pháp Sư',
    factionId: 'lokheim',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/dab2c45af3206cd0ac30b450357aa8ce5fc5264d71f451.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4566ea9393c80328b2b695f9471fa4e05fc526067cb71.jpg',
    quote: 'Ma thạch hắc ám sẽ nuốt chửng linh hồn toàn cõi để kiến tạo trật tự mới!',
    stats: { damage: 9, toughness: 6, mobility: 8, crowdControl: 9, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Bí Thuật Hắc Ám',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a1805866abf95ce89a521ce73f82fdcd5fc5572a617401.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Khi Lôi Cầu ma thuật ở trên người hoặc bay ngoài không trung sẽ liên tục giật sét gây sát thương phép lên kẻ địch xung quanh và hồi máu cho Lorion.',
        comboTip: 'Điều khiển Lôi Cầu bay lượn liên tục giữa đám đông kẻ địch để tối đa hóa lượng sát thương giật sét.'
      },
      {
        slot: 'skill1',
        name: 'Lôi Cầu Định Hướng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/57b94ce693c7d8658acf8045cc17d8645fc5572390dc51.png',
        cooldown: '6.0s (2 lần chỉnh hướng)',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Điều khiển Lôi Cầu bay tới điểm chỉ định, gây sát thương phép trên đường bay và tại điểm dừng. Có thể tái kích hoạt đổi hướng bay lần 2.',
        comboTip: 'Đặt Lôi Cầu vào giữa đội hình đối phương để chuẩn bị kích hoạt chiêu 2 hoặc chiêu cuối.'
      },
      {
        slot: 'skill2',
        name: 'Tĩnh Điện Phóng Thích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/149a97c8274d68ee5b5eaa91bc9c180f5fc55714205851.png',
        cooldown: '2.0s (Tích 2 lần)',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Nếu Lôi Cầu ở trên người: Lorion kích nổ xung quanh gây sát thương phép. Nếu Lôi Cầu ở xa: Lorion lập tức biến thành tia sét dịch chuyển tới Lôi Cầu và MIỄN NHIỄM SÁT THƯƠNG trong thoáng chốc.',
        comboTip: 'Kỹ năng dịch chuyển không thời gian cực kỳ ảo diệu dùng để né chiêu và tiếp cận mục tiêu.'
      },
      {
        slot: 'ultimate',
        name: 'Bão Điện Hắc Ám',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5a6fe56cbba50d6110269af2597dbd5d5fc55731d213d1.png',
        cooldown: '40.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Tụ lực tại vị trí Lôi Cầu trong 1.5 giây rồi giải phóng cơn bão điện từ trường hất tung và GIỮ TẤT CẢ KẺ ĐỊCH TRÊN KHÔNG TRUNG suốt 1.5 giây.',
        comboTip: 'Phóng Lôi Cầu vào giữa đội hình địch bằng chiêu 1 rồi kích hoạt chiêu cuối hất tung toàn bộ đội hình đối phương.'
      }
    ],
    lore: `Cơ thể thực sự của Lorion đã bị tiêu diệt dưới tay D'Arcy. Hiện tại, hắn là một khối ma thạch hắc ám hấp thụ ký ức và pháp thuật của Lorion, dùng thân phận cũ kích hoạt ma pháp trận khổng lồ nhằm hiến tế sinh mạng cả Tân Liên Hiệp tạo ra Vực Hỗn Mang thứ hai. Hắn cũng từng giam cầm cô bé bán tinh linh Keera trước khi bị Sephera ngăn chặn.`,
    battleTips: [
      'Lorion là pháp sư kiểm soát không gian và giao tranh tổng số 1 đại lục.',
      'Sử dụng chiêu 2 để dịch chuyển tới vị trí Lôi Cầu nhằm ao nhây sát thương của sát thủ.',
      'Chiêu cuối giữ kẻ địch trên không trung suốt 1.5 giây tạo tiền đề quét sạch giao tranh.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Mặt Nạ Berith', 'Trượng Bùng Nổ', 'Băng Nhẫn Skadi', 'Huân Chương Troy', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['darcy', 'keera', 'sephera', 'volkath']
  },

  {
    id: 'dextra',
    name: 'Dextra',
    title: 'Huyết Luân Cưa',
    factionId: 'hoi_am_hoang',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/38f3158929eb4b95500db65559e52d525fc5244a521d11.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f6eb117d5a3dbb00aeaba0d20c16090f5fc5245f969631.jpg',
    quote: 'Lưỡi cưa rực máu sẽ chém đứt mọi đau thương, bảo vệ người quan trọng nhất!',
    stats: { damage: 8, toughness: 9, mobility: 7, crowdControl: 6, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Huyết Nguyện Đồng Điệu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/76d5901b0e914b1a59b3a22d0b2afeb85fc554ae5eb671.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi đòn đánh hoặc chiêu thức trúng đích tích lũy điểm huyết nguyện tăng công vật lý (tối đa 8 tầng). Liên kết đặc biệt với Sinestrea giúp cả hai hồi máu và tương trợ lẫn nhau.',
        comboTip: 'Đi chung với Sinestrea để kích hoạt tối đa các nội tại liên kết máu và hồi sinh đồng đội.'
      },
      {
        slot: 'skill1',
        name: 'Cưa Huyết Luân Lướt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cadc4185480b6621a2610796dd36acdd5fc554be39c861.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tăng tốc chạy, đòn đánh kế tiếp lướt tới chém xoay tròn gây sát thương vật lý và làm chậm 50% tốc chạy.',
        comboTip: 'Dùng để tiếp cận áp sát và làm chậm mục tiêu trước khi xả chiêu 2.'
      },
      {
        slot: 'skill2',
        name: 'Huyết Trảm Càn Quét',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ae0747041875de3c610e4fb7619272b65fc554c669deb1.png',
        cooldown: '5.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung lưỡi cưa quét xung quanh gây sát thương vật lý, hồi máu cho Dextra và cường hóa đòn đánh thường kế tiếp.',
        comboTip: 'Chiêu thức hồi máu và dọn dẹp giao tranh tầm gần thời gian hồi siêu ngắn.'
      },
      {
        slot: 'ultimate',
        name: 'Hiến Tế Huyết Luân Bất Tử',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b3620cf9d75a371b0955aa971a71765f5fc554cedd8ef1.png',
        cooldown: '50.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Dextra kích hoạt trạng thái Huyết Luân trong 3 giây: TẤT CẢ SÁT THƯƠNG NHẬN VÀO SẼ CHUYỂN HÓA THÀNH MÁU HỒI PHỤC (100% sát thương biến thành máu).',
        comboTip: 'Bật chiêu cuối khi sắp chết để biến toàn bộ sát thương dồn của đối thủ thành bình máu hồi phục đầy 100%.'
      }
    ],
    lore: `Chiến binh hộ vệ của Hội Ám Hoàng. Dextra gắn kết sinh mệnh máu thịt thiêng liêng cùng Sinestrea; vung lưỡi cưa huyết luân sẵn sàng nghiền nát mọi kẻ thù dám xâm phạm giấc ngủ hay sự an toàn của Sinestrea.`,
    battleTips: [
      'Chiêu cuối biến toàn bộ sát thương nhận vào thành hồi máu giúp Dextra bất tử tuyệt đối trong 3 giây.',
      'Dextra không sử dụng năng lượng, có thể liên tục dùng chiêu 1 và 2 để trao đổi chiêu thức đè đường.',
      'Rất mạnh trong các pha băng trụ vì sát thương của trụ bắn vào sẽ hồi đầy máu cho Dextra.'
    ],
    recommendedItems: ['Thương Longinus', 'Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['sinestrea', 'veres', 'quillen', 'thorne', 'amily']
  },

  {
    id: 'sinestrea',
    name: 'Sinestrea',
    title: 'Huyết Kiếm',
    factionId: 'hoi_am_hoang',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/680ef284724e077237f33cfc2d8fa72d5fa194bad60f31.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7d7d0372a94df56d5a0dd83f2a5980365fbcc4432bd961.jpg',
    quote: 'Máu của ta là sức mạnh, giấc ngủ ngàn năm sẽ chôn vùi kẻ thù!',
    stats: { damage: 10, toughness: 4, mobility: 8, crowdControl: 4, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Huyết Trà Biến Chuyển',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d0b146512f795a344b6f807ea1a945465fa1a0538f93b1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Sinestrea có thể chuyển đổi giữa cận chiến (dùng kiếm hồi máu) và đánh xa (bắn phi kiếm tiêu hao máu). Khi đứng yên 2.5 giây sẽ tàng hình ngủ say hoàn toàn.',
        comboTip: 'Chuyển sang đánh xa để ném phi kiếm cấu rỉa rồi chuyển về cận chiến lao vào chém hút máu.'
      },
      {
        slot: 'skill1',
        name: 'Huyết Bộ Tàng Hình',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e7ccb6ae0dc5d35470936654ee62b61b5fa19c6081d721.png',
        cooldown: '6.0s',
        energyCost: 'Tiêu hao máu',
        damageType: 'Vật lý',
        description: 'Lướt tới điểm chỉ định rồi lập tức tiến vào trạng thái ngủ say tàng hình ngay trong giao tranh, đòn đánh kế tiếp lướt chém cực mạnh.',
        comboTip: 'Lướt né chiêu rồi tàng hình đổi góc tấn công bất ngờ từ bóng tối.'
      },
      {
        slot: 'skill2',
        name: 'Huyết Vũ Thu Hồi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/77b68f6f87eab58d39931dd4b14d04165fa19cb580d1d1.png',
        cooldown: '4.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Thu hồi tất cả phi kiếm máu đã cắm trên mặt đất quay về bản thân, gây sát thương vật lý lên kẻ địch trên đường bay và hồi máu cho Sinestrea.',
        comboTip: 'Ném nhiều phi kiếm xa rồi bấm thu hồi để giật toàn bộ số kiếm xuyên qua người đối thủ dồn sát thương sốc.'
      },
      {
        slot: 'ultimate',
        name: 'Đổi Máu Tối Thượng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/89e44aa63095d912e088158a57d2771a5fa19f60bc8421.png',
        cooldown: '45.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Sinestrea liên kết với mục tiêu chỉ định: ĐỔI PHẦN TRĂM MÁU HIỆN TẠI GIỮA BẢN THÂN VÀ KẺ ĐỊCH (kẻ địch nhiều máu bị rút máu, Sinestrea ít máu nhận lượng máu đó).',
        comboTip: 'Để máu tụt xuống mức 10-15% rồi bấm chiêu cuối vào tướng đầy máu của đối phương để lật kèo trong tích tắc.'
      }
    ],
    lore: `Sát thủ mang dòng máu Huyết Ma cổ đại của Hội Ám Hoàng. Sinestrea sở hữu khả năng điều khiển dòng máu và giấc ngủ kỳ bí, thức tỉnh để thực thi các nhiệm vụ ám sát chết chóc dưới trướng hội trước khi tìm lại chân tướng quá khứ.`,
    battleTips: [
      'Kỹ năng đổi máu chiêu cuối là vũ khí lật kèo độc nhất vô nhị: máu càng ít đổi máu đối thủ càng lời.',
      'Chiêu 1 cho phép tàng hình ngay lập tức giữa giao tranh nếu không di chuyển.',
      'Cần thuần thục việc chuyển đổi linh hoạt giữa đánh xa găm kiếm và cận chiến thu hồi kiếm.'
    ],
    recommendedItems: ['Thánh Kiếm', 'Giày Du Mục', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Nanh Fenrir', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['dextra', 'quillen', 'veres', 'thorne', 'amily']
  },

  {
    id: 'veres',
    name: 'Veres',
    title: 'Huyết Xích Lôi Ảnh',
    factionId: 'hoi_am_hoang',
    role: 'Đấu Sĩ',
    secondaryRole: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/46c5f246040b9e750779aa41ffcbeaa15c3f06d63ce241.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c936a8d04e8d9b32b73311fa8ca6535f5c3f06ebd1a3d1.jpg',
    quote: 'Xích máu cuồng sát, kẻ nào dám cản bước sự sủng ái của ta!',
    stats: { damage: 9, toughness: 7, mobility: 7, crowdControl: 9, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Huyết Vũ Xích Xoay',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/04953fde3a271a4b8c51e0e952f647025c3f0788aa5f81.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Tung chiêu trúng đích tích 1 điểm nội tại (tối đa 4 điểm). Đủ 4 điểm kích hoạt xoay xích tròn gây sát thương vật lý, hồi máu lớn và giảm hồi toàn bộ chiêu thức.',
        comboTip: 'Tích đủ 4 tầng nội tại bằng chiêu 1 và 2 để liên tục múa xích xoay tròn hồi máu càn quét giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Song Xích Bắt Chéo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/239cac2b93846daaa53b33dfd806a0755c3f07c2726031.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng ra 2 sợi xích bắt chéo gây sát thương vật lý. Nếu trúng cả 2 sợi xích tại tâm chấn sẽ LÀM CHOÁNG nạn nhân 1 giây.',
        comboTip: 'Căn khoảng cách chuẩn xác để kẻ địch nằm ngay điểm giao nhau của 2 sợi xích gây choáng.'
      },
      {
        slot: 'skill2',
        name: 'Đoạt Mệnh Xích Kéo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/570b36e8787dd68016ae7749c7e8972b5c3f07f62a49b1.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng xích đẩy lùi kẻ địch ở gần hoặc kéo kẻ địch ở xa về phía mình, làm chậm 50% tốc chạy.',
        comboTip: 'Dùng để kéo kẻ địch ở rìa tầm đánh lại gần hoặc đẩy văng kẻ địch áp sát ra đúng điểm bắt chéo của chiêu 1.'
      },
      {
        slot: 'ultimate',
        name: 'Đoạt Mệnh Huyết Trảm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f149592ccc6dbf1684036a929df81c245c3f0827e0e9e1.png',
        cooldown: '24.0s',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Veres nhảy xổ tới cắm song xích xuống đất gây SÁT THƯƠNG CHUẨN khổng lồ. Trúng tướng địch giúp Veres tiến vào trạng thái Cuồng Nộ tăng công vật lý, xuyên giáp và kháng hiệu ứng.',
        comboTip: 'Tuyệt chiêu dứt điểm mục tiêu yếu máu bằng sát thương chuẩn và kích hoạt trạng thái cuồng nộ càn quét.'
      }
    ],
    lore: `Trẻ mồ côi lớn lên trong "Tu La Chiến Địa" đẫm máu của Hội Ám Hoàng. Veres vô cùng ngưỡng mộ Quillen và dùng thuật Huyết tế đoạt lấy sức mạnh ma tộc hòng lấy được sự tín nhiệm tối cao của hắn, trở thành sát thủ máu lạnh nguy hiểm hàng đầu.`,
    battleTips: [
      'Veres là vị tướng đấu sĩ đường tà thần cực mạnh nhờ khả năng múa xích hồi phục liên tục.',
      'Căn cự ly chuẩn xác để trúng chiêu 1 và 2 tích đủ 4 tầng nội tại kích hoạt xoay xích.',
      'Chiêu cuối gây sát thương chuẩn theo phần trăm máu mất, dùng để kết liễu tướng đỡ đòn rất hiệu quả.'
    ],
    recommendedItems: ['Thương Longinus', 'Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['quillen', 'amily', 'sinestrea', 'dextra']
  }
];
