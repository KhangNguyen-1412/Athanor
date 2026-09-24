import type { LoreRelation } from '../types/athanor';

export const RELATIONS_DATA: LoreRelation[] = [
  // Cặp đôi Hải Linh Trấn
  {
    id: 'rel-dolia-hainuo',
    sourceHeroId: 'dolia',
    targetHeroId: 'hainuo',
    relationType: 'love',
    label: 'Tình Yêu Vượt Định Mệnh',
    description: 'Dolia cất Khúc Hát Nhân Ngư chấp nhận xóa sạch ký ức tình yêu để cứu biển cả; Hainuo dùng Sợi Dây Định Mệnh và cuốn Nhật Ký Tình Yêu phá vỡ thiên mệnh, trùng phùng và trao vương miện cho Dolia dưới bầu trời pháo hoa.'
  },

  // Tình sử và ân oán Vực Hỗn Mang
  {
    id: 'rel-volkath-marja',
    sourceHeroId: 'volkath',
    targetHeroId: 'marja',
    relationType: 'love',
    label: 'Tình Si & Hận Thù Vực Thẳm',
    description: 'Marja từng là nữ thần Tháp Quang Minh yêu say đắm Volkath, vì chàng mà bị Veda tra tấn dã man cho đến khi được ma năng của Volkath cứu thoát và hóa thân thành Oán Hồn Vực Thẳm.'
  },
  {
    id: 'rel-volkath-maloch',
    sourceHeroId: 'volkath',
    targetHeroId: 'maloch',
    relationType: 'ally',
    label: 'Cố Hữu Sa Đọa',
    description: 'Đôi bạn thân từ thuở ở Tháp Quang Minh cùng rời bỏ phe Ánh Sáng, khai sinh Vực Hỗn Mang và chia nhau quyền cai quản cõi hắc ám.'
  },
  {
    id: 'rel-volkath-veera',
    sourceHeroId: 'volkath',
    targetHeroId: 'veera',
    relationType: 'love',
    label: 'Chiến Lược Gia Trung Thành',
    description: 'Veera từng là bán thần Tháp Quang Minh theo Volkath rời đi, trở thành chiến lược gia mưu mô thu nạp nhân tài và dâng trọn trái tim cho chúa tể.'
  },
  {
    id: 'rel-volkath-telannas',
    sourceHeroId: 'volkath',
    targetHeroId: 'telannas',
    relationType: 'enemy',
    label: 'Mũi Tên Định Mệnh',
    description: 'Tel\'Annas đã kéo Cung Thần Ánh Sao bắn xuyên tim Volkath trong trận chiến viễn cổ, khiến nàng phải ngủ say ngàn năm vì tà khí phản phệ.'
  },
  {
    id: 'rel-volkath-bright',
    sourceHeroId: 'volkath',
    targetHeroId: 'bright',
    relationType: 'enemy',
    label: 'Phản Đồ & Truyền Nhân Edras',
    description: 'Volkath phản bội sát hại sư phụ Edras; Bright là học trò cuối cùng thừa hưởng sức mạnh bất tử của Edras mang sứ mệnh tiêu diệt chúa tể hắc ám.'
  },

  // Long Chí Quốc & Phương Đông
  {
    id: 'rel-lubo-dieuthuyen',
    sourceHeroId: 'lubo',
    targetHeroId: 'dieuthuyen',
    relationType: 'love',
    label: 'Thiên Cổ Bi Tình',
    description: 'Điêu Thuyền dùng pháp thuật giải trừ Long tộc trớ chú giải thoát nhân tính cho Lữ Bố, nhưng sau cùng phải đau đớn rời xa khi chàng ngày càng khát máu cuồng sát.'
  },
  {
    id: 'rel-yue-lubo',
    sourceHeroId: 'yue',
    targetHeroId: 'lubo',
    relationType: 'rival',
    label: 'Tranh Đoạt Vương Quyền',
    description: 'Thập công chúa Yue dùng bảo vật Lục Hào Phiến và trí mưu cơ biến điều phối cục diện vương triều Long Chí Quốc, kiềm tỏa sức mạnh vô song của Chiến Thần Lữ Bố.'
  },
  {
    id: 'rel-airi-maloch',
    sourceHeroId: 'airi',
    targetHeroId: 'maloch',
    relationType: 'enemy',
    label: 'Vết Chém Rồng Thiêng',
    description: 'Khi Vực Hỗn Mang xâm lăng Tháp Quang Minh, Airi kích hoạt Dấu Ấn Rồng thi triển nhát chém tuyệt mỹ khiến Ma Vương Maloch trọng thương phải rút chạy.'
  },
  {
    id: 'rel-tachi-airi',
    sourceHeroId: 'tachi',
    targetHeroId: 'airi',
    relationType: 'mentor',
    label: 'Long Hồn & Hanzo Khởi Thủy',
    description: 'Tachi là hiện thân Thái Cổ Thần Long và Hanzo đời thứ nhất, dùng Long Tước Bội Đao dẫn dắt và ban phúc cho thế hệ Ninja xuất chúng như Airi.'
  },
  {
    id: 'rel-hayate-airi',
    sourceHeroId: 'hayate',
    targetHeroId: 'airi',
    relationType: 'rival',
    label: 'Huynh Muội & Lý Tưởng Ngược Lối',
    description: 'Hayate là anh trai Airi, vì bất bình trước khế ước bất công ép tộc nhân chết oan cho Veda nên đã bắt tay Vực Hỗn Mang để chặt đứt xiềng xích, đối đầu trực tiếp với Airi.'
  },

  // Lâu Đài Khởi Nguyên, Norman & Okka
  {
    id: 'rel-arthur-thane',
    sourceHeroId: 'arthur',
    targetHeroId: 'thane',
    relationType: 'ally',
    label: 'Hai Vị Vua Vĩ Đại',
    description: 'Arthur đặt nền móng Lâu Đài Khởi Nguyên; Thane kế thừa ngọn kiếm Excalibur và khẩn cầu Lauriel thanh tẩy đưa Arthur trở về từ bóng tối xác khô Mortos.'
  },
  {
    id: 'rel-arthur-maloch',
    sourceHeroId: 'arthur',
    targetHeroId: 'maloch',
    relationType: 'enemy',
    label: 'Mối Thù Hắc Hóa Mortos',
    description: 'Maloch từng lập mưu giăng bẫy nguyền rủa Arthur biến thành cỗ máy xương khô Mortos trước khi ngài được cứu rỗi để trị vì Vương Quốc Okka.'
  },
  {
    id: 'rel-allain-butterfly',
    sourceHeroId: 'allain',
    targetHeroId: 'butterfly',
    relationType: 'kin',
    label: 'Tỷ Đệ Thanh Mai Trúc Mã',
    description: 'Cùng lớn lên trong Công Hội Lính Đánh Thuê tại Thành Chiến Binh; sau khi Allain bị Hội Ám Hoàng bắt làm vật thí nghiệm và mất trí nhớ, cả hai đã kỳ diệu hội ngộ.'
  },
  {
    id: 'rel-thane-florentino',
    sourceHeroId: 'thane',
    targetHeroId: 'florentino',
    relationType: 'ally',
    label: 'Quân Thần & Hậu Phương',
    description: 'Vua Thane tin cậy Florentino trong việc vận hành kinh tế thành phố và bảo hộ gia tộc Hoa Hồng của Nữ Bá Tước Astrid trước ngọn lửa chiến tranh.'
  },
  {
    id: 'rel-taara-gildur',
    sourceHeroId: 'taara',
    targetHeroId: 'gildur',
    relationType: 'enemy',
    label: 'Ân Oán Bóc Lột & Phản Bội',
    description: 'Gildur tham lam quỵt thưởng chiến công của Taara tại Dãy Núi Thép Okka, tống giam cô và tăng gấp đôi sưu thuế, đẩy Taara vào ngọn lửa băng sa đọa của Maloch.'
  },
  {
    id: 'rel-taara-maloch',
    sourceHeroId: 'taara',
    targetHeroId: 'maloch',
    relationType: 'ally',
    label: 'Chiến Tướng Sa Đọa',
    description: 'Phẫn uất trước sự đạo đức giả của Tháp Quang Minh, Taara theo Maloch gia nhập Vực Hỗn Mang và chỉ huy các đợt càn quét báo thù.'
  },

  // Tân Liên Hiệp & Carano
  {
    id: 'rel-goverra-quillen',
    sourceHeroId: 'goverra',
    targetHeroId: 'quillen',
    relationType: 'enemy',
    label: 'Tuyên Chiến Công Khai',
    description: 'Goverra đại diện gia tộc Vidu công khai tuyên chiến với Hội Ám Hoàng của Quillen trên truyền hình, dùng vũ khí ma thạch siêu tần số đập tan các âm mưu diệt dị tộc.'
  },
  {
    id: 'rel-bonnie-quillen',
    sourceHeroId: 'bonnie',
    targetHeroId: 'quillen',
    relationType: 'enemy',
    label: 'Trốn Thoát Quân Xưởng',
    description: 'Bonnie lãnh đạo nhóm trẻ em khổ sai dùng Lõi Năng Lượng Andura siêu cấp bùng nổ phá tan phòng giam của tổ chức hắc ám Hội Ám Hoàng.'
  },
  {
    id: 'rel-darcy-volkath',
    sourceHeroId: 'darcy',
    targetHeroId: 'volkath',
    relationType: 'enemy',
    label: 'Vết Rách Không Gian',
    description: 'D\'Arcy từng bị giam cầm trong chiều không gian hỗn mang của Volkath nhưng bằng trí tuệ ma pháp đã thoát ra và tạo lập phong ấn cản bước ma vương.'
  },

  // Tháp Quang Minh & Thánh Đồ
  {
    id: 'rel-tulen-aleister',
    sourceHeroId: 'tulen',
    targetHeroId: 'aleister',
    relationType: 'rival',
    label: 'Sư Đồ Phán Quyết',
    description: 'Aleister ghen tị tài năng sấm sét của Tulen rồi phản bội theo Veera; Tulen đứng đầu Điện Công Lý quyết tâm truy lùng và phán quyết kẻ phản đồ.'
  },
  {
    id: 'rel-veera-aleister',
    sourceHeroId: 'veera',
    targetHeroId: 'aleister',
    relationType: 'ally',
    label: 'Mê Hoặc & Thu Nạp',
    description: 'Veera dùng vẻ quyến rũ ma mị lôi kéo thiên tài Aleister phản bội Tháp Quang Minh, biến hắn thành mưu sĩ thâm độc của Vực Hỗn Mang.'
  },
  {
    id: 'rel-ilumia-tulen',
    sourceHeroId: 'ilumia',
    targetHeroId: 'tulen',
    relationType: 'ally',
    label: 'Đồng liêu',
    description: 'Tulen là Điện chủ Điện Công Lý, cánh tay đắc lực và đồng minh quyền lực tối cao sát cánh cùng Nữ Thần Ilumia trị vì Tháp Quang Minh.'
  },
  {
    id: 'rel-ilumia-volkath',
    sourceHeroId: 'ilumia',
    targetHeroId: 'volkath',
    relationType: 'enemy',
    label: 'Thù địch',
    description: 'Kẻ phản bội Đấng Sáng Tạo Edras và chúa tể Vực Hỗn Mang. Ilumia xem Volkath là tử thù số một của Tháp Quang Minh và lãnh đạo thánh chiến truy cùng diệt tận.'
  },
  {
    id: 'rel-ilumia-marja',
    sourceHeroId: 'ilumia',
    targetHeroId: 'marja',
    relationType: 'enemy',
    label: 'Thù địch',
    description: 'Từng là đồng môn dưới trướng Edras, Marja vì si tình Volkath mà bị giam cầm tra tấn; sau khi hóa thân thành Oán Hồn Vực Thẳm, nàng ôm mối hận thù thấu xương với Ilumia.'
  },
  {
    id: 'rel-ilumia-telannas',
    sourceHeroId: 'ilumia',
    targetHeroId: 'telannas',
    relationType: 'ally',
    label: 'Hợp tác',
    description: 'Nữ Thần Ánh Sáng Ilumia và Nữ Vương Rừng Nguyên Sinh Tel\'Annas thiết lập liên minh Thần Thánh, phối hợp sức mạnh ánh sáng và linh mộc đẩy lùi bóng tối ma quỷ.'
  },
  {
    id: 'rel-ilumia-arthur',
    sourceHeroId: 'ilumia',
    targetHeroId: 'arthur',
    relationType: 'ally',
    label: 'Hợp tác',
    description: 'Minh chủ Lâu Đài Khởi Nguyên Arthur hợp tác chặt chẽ cùng Giáo Đình Ilumia nhằm củng cố trật tự lục địa và bảo vệ các quốc gia loài người trước hiểm họa Vực Hỗn Mang.'
  },
  {
    id: 'rel-ilumia-lauriel',
    sourceHeroId: 'ilumia',
    targetHeroId: 'lauriel',
    relationType: 'ally',
    label: 'Đồng liêu',
    description: 'Đại Thiên Thần Lauriel là người gìn giữ Kinh Cầu Veda và bảo vệ đền thờ ánh sáng, sát cánh trung thành tuyệt đối bên Nữ Thần Ilumia.'
  },
  {
    id: 'rel-volkath-arthur',
    sourceHeroId: 'volkath',
    targetHeroId: 'arthur',
    relationType: 'enemy',
    label: 'Thù địch',
    description: 'Chúa tể Hắc Ám Volkath từng giăng bẫy nguyền rủa Arthur biến thành cỗ máy xương khô Mortos; Arthur sau khi thức tỉnh thề vung gươm tiêu diệt ma vương.'
  },
  {
    id: 'rel-tulen-volkath',
    sourceHeroId: 'tulen',
    targetHeroId: 'volkath',
    relationType: 'enemy',
    label: 'Thù địch',
    description: 'Tulen chỉ huy Tiểu Đội Ánh Sáng mang theo quyền năng sấm sét phán quyết, là một trong những mũi nhọn chủ lực phong tỏa sự trỗi dậy của Volkath.'
  },
  {
    id: 'rel-marja-telannas',
    sourceHeroId: 'marja',
    targetHeroId: 'telannas',
    relationType: 'enemy',
    label: 'Thù địch',
    description: 'Tel\'Annas từng bắn mũi tên định mệnh hạ gục Volkath, người mà Marja yêu say đắm. Mối thù nghìn năm khiến bầy trùng ảnh luôn tìm cách xâm hại rừng già Afata.'
  },
  {
    id: 'rel-arthur-telannas',
    sourceHeroId: 'arthur',
    targetHeroId: 'telannas',
    relationType: 'ally',
    label: 'Hợp tác',
    description: 'Hiệp ước liên minh cổ xưa giữa Nhân Tộc Lâu Đài Khởi Nguyên và Tinh Linh Rừng Nguyên Sinh, cùng hỗ trợ lẫn nhau bảo tồn sự sống trước làn sóng hắc ám.'
  },
  {
    id: 'rel-nakroth-zephys',
    sourceHeroId: 'nakroth',
    targetHeroId: 'zephys',
    relationType: 'ally',
    label: 'Đồng liêu',
    description: 'Bộ đôi phán quan và lưỡi hái cõi âm, cùng nhau thực thi các bản án linh hồn và phối hợp ăn ý trong các nhiệm vụ tác chiến của Quân Đoàn Trùng Ảnh.'
  },
  {
    id: 'rel-murad-azzen_ka',
    sourceHeroId: 'murad',
    targetHeroId: 'azzen_ka',
    relationType: 'enemy',
    label: 'Tử thù diệt quốc',
    description: 'Azzen\'Ka là tà thần sa mạc đã hủy diệt Hoàng Triều Sa Mạc Helios và sát hại phụ vương Murad; Murad quyết tâm dùng Đoản Đao Thời Không báo thù phục quốc.'
  },
  {
    id: 'rel-murad-yena',
    sourceHeroId: 'murad',
    targetHeroId: 'yena',
    relationType: 'love',
    label: 'Tri kỷ phục quốc',
    description: 'Yena cởi bỏ trang phục vũ cơ hoàng cung dẫn đầu nghĩa quân Sa Mạc Helios; cùng Hoàng tử Murad kề vai sát cánh chia sẻ lời thề ước phục hưng giang sơn.'
  },
  {
    id: 'rel-yena-azzen_ka',
    sourceHeroId: 'yena',
    targetHeroId: 'azzen_ka',
    relationType: 'enemy',
    label: 'Tử thù',
    description: 'Yena dẫn dắt nghĩa quân sa mạc quyết chiến chống lại ách đô hộ bạo tàn của tà thần Azzen\'Ka, thề bảo vệ những đồng bào còn sống sót.'
  },
  {
    id: 'rel-dextra-sinestrea',
    sourceHeroId: 'dextra',
    targetHeroId: 'sinestrea',
    relationType: 'love',
    label: 'Tình cảm',
    description: 'Mối liên kết máu thịt kỳ diệu; Dextra sẵn sàng hiến tế huyết mạch của bản thân để duy trì sinh mệnh và giấc ngủ cho cô bé Sinestrea.'
  },
  {
    id: 'rel-laville-rouie',
    sourceHeroId: 'laville',
    targetHeroId: 'rouie',
    relationType: 'ally',
    label: 'Đồng liêu',
    description: 'Đồng đội thân thiết trong Tiểu Đội Ánh Sáng của Tulen; Laville năng nổ luôn bảo bọc cô bạn nhút nhát Rouie mang pháp thuật không gian.'
  },
  {
    id: 'rel-krixi-nakroth',
    sourceHeroId: 'krixi',
    targetHeroId: 'nakroth',
    relationType: 'love',
    label: 'Duyên nợ',
    description: 'Cuộc gặp gỡ định mệnh nơi bìa rừng giữa Tinh Linh ngây thơ và Phán Quan cõi âm lạnh lùng đã gieo nên mối tơ vương bí ẩn vượt qua ranh giới chủng tộc.'
  }
];

