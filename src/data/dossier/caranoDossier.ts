import type { HeroDossierItem } from './types';

export const CARANO_DOSSIERS: Record<string, HeroDossierItem> = {
  d_arcy: {
    birthplace: 'Thành Phố Ma Pháp Tối Cao (Carano)',
    birthday: '11/02',
    height: '183 cm',
    secretProfile: {
      organizationRole: 'Viện Trưởng Danh Dự Ma Pháp Thứ Nguyên - Đồng Sáng Lập Carano',
      otherStory: 'Rất thích thưởng thức các loại bánh ngọt nhiều tầng và thường dùng ma thuật thứ nguyên để lấy sách từ tầng cao nhất của thư viện mà không cần phải rời khỏi chiếc ghế bành ấm áp.',
      secret: 'Cánh tay phải của ông từng bị ma thuật thứ nguyên nuốt chửng trong trận quyết chiến với sư phụ Lorion, nay được thay thế bằng một cánh tay năng lượng thuần khiết phát sáng.'
    },
    specialLore: 'Lập Trận Thứ Nguyên Chấn Thế: Khi quân đoàn Lokheim tràn vào học viện, D\'Arcy đã vẽ nên một ma trận không gian khổng lồ lật ngược toàn bộ chiến trường, dịch chuyển đạo quân xâm lược vào hư vô cứu lấy học viện.'
  },
  dirak: {
    birthplace: 'Gia Tộc Pháp Sư Cổ Carano',
    birthday: '24/08',
    height: '186 cm',
    secretProfile: {
      organizationRole: 'Viện Trưởng Hội Đồng Ma Pháp Carano - Đệ Nhất Pháp Sư Quân Đội',
      otherStory: 'Luôn tỏ ra nghiêm khắc với kỷ luật nhưng lại cực kỳ thương yêu học trò; ông có thói quen ký các văn kiện học viện bằng một chiếc bút lông ngỗng phát sáng ma thuật tinh xảo.',
      secret: 'Chiếc khiên ma thuật bảo hộ của ông được duy trì bằng chính nhịp tim của bản thân; nếu chiếc khiên bị vỡ vụn, tính mạng của ông cũng sẽ bị đe dọa trực tiếp đến tính mạng.'
    },
    specialLore: 'Bức Tường Ma Pháp Bất Hoại: Trong cuộc tập kích bằng pháo ma thuật của địch, Dirak đã dựng lên bức tường năng lượng cao trăm trượng che chở cho toàn bộ học sinh và giảng viên học viện thoát hiểm an toàn.'
  },
  sephera: {
    birthplace: 'Cung Điện Suối Nguồn Ma Thuật (Carano)',
    birthday: '16/11',
    height: '173 cm',
    secretProfile: {
      organizationRole: 'Viện Trưởng Pháp Thuật Thủy Tinh - Đồng Sáng Lập Hội Đồng Carano',
      otherStory: 'Tiếng đàn hạc nước của nàng có thể xoa dịu những cơn đau nhức đầu óc của các pháp sư sau những giờ nghiên cứu căng thẳng bên trang sách cổ thư ngàn năm.',
      secret: 'Nàng là người duy nhất nắm giữ chiếc chìa khóa mở kho lưu trữ cấm thuật tối thượng dưới đáy hồ nước ma thuật ngầm Carano được phong ấn từ thời cổ đại.'
    },
    specialLore: 'Khúc Ca Đại Thủy Triều: Khi ngọn lửa tà ma đe dọa thiêu rụi kho sách cổ thư Carano, Sephera đã gảy một khúc nhạc trên đàn hạc nước, triệu hồi cơn mưa rào ánh sáng dập tắt toàn bộ biển lửa hung tàn.'
  },
  keera: {
    birthplace: 'Cô Nhi Viện Bóng Tối Carano',
    birthday: '31/10',
    height: '154 cm',
    secretProfile: {
      organizationRole: 'Thần Đồng Ma Thuật Hắc Thủy - Học Viên Xuất Chúng Học Viện Carano',
      otherStory: 'Rất thích ăn kẹo bông gòn ngọt ngào và có thói quen đi xuyên qua các bức tường phòng học chỉ để dọa các bạn học cùng lớp giật mình cười đùa.',
      secret: 'Cô bé từng là vật thí nghiệm của một hội tà pháp trước khi được D\'Arcy và Sephera giải cứu; trong bóng tối của cô ẩn chứa một thực thể quái vật hắc thủy cực kỳ khát máu luôn chực chờ nuốt chửng kẻ thù.'
    },
    specialLore: 'Đi Qua Bóng Tối Đoạt Mạng: Trong kỳ thi sát hạch thực chiến, khi bị một con quái vật đá khổng lồ dồn vào chân tường, Keera đã hòa mình vào bức tường đá, xuất hiện sau lưng quái vật xé nát lõi ma thuật chỉ trong một cái chớp mắt.'
  },
  ishar: {
    birthplace: 'Gia Tộc Quý Tộc Phù Thủy Carano',
    birthday: '18/09',
    height: '156 cm',
    secretProfile: {
      organizationRole: 'Triệu Hồi Sư Tinh Nghịch - Học Viên Khoa Triệu Hồi Thú',
      otherStory: 'Chú thú cưng Tí Nị của cô bé cực kỳ háu ăn và thích ngủ trưa trên bàn học; Ishar luôn phải mang theo hàng túi bánh quy để dỗ dành nó nghe lời mỗi khi luyện tập thần chú.',
      secret: 'Tí Nị không phải là một sinh vật bình thường mà là hiện thân của một thú thần cổ đại bị phong ấn thu nhỏ lại để bảo vệ Ishar khỏi những kẻ mưu hại gia tộc cô từ trong bóng tối.'
    },
    specialLore: 'Lồng Giam Tinh Mộng: Khi một tên phản đồ toan bắt cóc các học viên nhỏ tuổi, Ishar đã chỉ huy Tí Nị phóng to thành quái thú khổng lồ đè bẹp đối thủ, đồng thời dựng lên lồng giam ma thuật bắt gọn kẻ ác giao cho giám thị.'
  },
  annette: {
    birthplace: 'Thị Trấn Cối Xay Gió Carano',
    birthday: '15/06',
    height: '160 cm',
    secretProfile: {
      organizationRole: 'Nữ Phù Thủy Gió Tập Sự - Pháp Sư Bảo Trợ Khí Tượng Carano',
      otherStory: 'Rất vụng về khi pha chế thuốc ma thuật và thường xuyên làm nổ tung vạc thuốc, nhưng khả năng dự báo thời tiết của cô bé thì chưa bao giờ sai lệch một giờ nào.',
      secret: 'Cây chổi phép thuật của cô được kết từ những nhánh cây đón gió đầu tiên của đỉnh núi tuyết, trao cho cô quyền năng tạo ra những cơn lốc xoáy đẩy lùi mọi nguy hiểm cận kề.'
    },
    specialLore: 'Mắt Bão Cứu Tinh: Trong một cơn bão ma thuật dữ dội đe dọa cuốn phăng cả ngôi làng ven biển, Annette đã dũng cảm cưỡi chổi bay vào giữa tâm bão, dựng nên vòng chắn gió cứu sống toàn bộ dân làng bình an.'
  },
  ata: {
    birthplace: 'Bến Tàu Hải Tặc Tự Do (Carano/Bờ Biển)',
    birthday: '08/07',
    height: '175 cm',
    secretProfile: {
      organizationRole: 'Vua Biển Tự Do - Thành Viên Danh Dự Hội Học Sinh Carano',
      otherStory: 'Rất thích ăn cá nướng và ngủ trưa trên những chiếc thuyền buồm rách; cậu luôn mang theo chiếc mỏ neo sắt nặng trịch như một món đồ chơi nhẹ tênh trên vai.',
      secret: 'Cậu có khả năng thở dưới nước như loài cá nhờ một viên ngọc hải hồn mà một nàng tiên cá đã trao tặng cậu khi cậu còn là một đứa trẻ trôi dạt trên biển khơi mênh mông.'
    },
    specialLore: 'Con Thuyền Chặn Sóng: Khi một con tàu cướp biển ma quái lao nhanh vào bến cảng Carano, Ata đã ném chiếc mỏ neo sắt xuống nước, dựng nên một con thuyền đá ma thuật chặn đứng mũi tàu địch bảo vệ bến cảng.'
  },
  paine: {
    birthplace: 'Nhà Hát Nhạc Kịch Cổ Carano',
    birthday: '12/12',
    height: '184 cm',
    secretProfile: {
      organizationRole: 'Nhạc Trưởng Linh Hồn - Giáo Sư Khoa Âm Luật Ma Pháp',
      otherStory: 'Luôn mặc bộ lễ phục màu đen sang trọng; chàng coi mỗi trận chiến như một bản giao hưởng hoành tráng và chỉ vung gậy nhạc trưởng khi nhịp điệu đạt đến cao trào nghẹt thở.',
      secret: 'Đôi tai của chàng nghe thấy được tiếng than khóc của những linh hồn đã khuất trong từng nốt nhạc, và chàng dùng chính những linh hồn đó để tạo nên những khúc ca tử thần đầy ám ảnh.'
    },
    specialLore: 'Bản Giao Hưởng Tử Thần: Đứng giữa nhà hát bị quân địch bao vây, Paine đã vung đũa chỉ huy tấu lên bản Sonata Định Mệnh, phân thân thành bóng ma lướt qua hàng ngũ địch kết liễu toàn bộ đối thủ trong một nốt nhạc cao trào.'
  },
  liliana: {
    birthplace: 'Vùng Đất Linh Hồ Viễn Cổ (Carano/Viễn Đông)',
    birthday: '09/09',
    height: '170 cm',
    secretProfile: {
      organizationRole: 'Cửu Vĩ Hồ Ly Ngàn Năm - Cố Vấn Tối Cao Thư Viện Carano',
      otherStory: 'Có sở thích đi dạo khắp các giảng đường dưới hình dạng một cô nữ sinh xinh đẹp để lắng nghe những bài giảng về lịch sử nhân loại mà nàng đã từng chứng kiến tận mắt hàng thế kỷ trước.',
      secret: 'Nàng đã sống hơn ngàn năm và chứng kiến sự suy tàn của nhiều nền văn minh cổ đại; chín chiếc đuôi của nàng chứa đựng chín loại ma thuật khởi nguyên của vũ trụ bao la.'
    },
    specialLore: 'Hồ Quang Tái Sinh: Khi một tà thần cổ đại thức tỉnh toan nuốt chửng thư viện ma thuật, Liliana đã hiện nguyên hình Cửu Vĩ Hồ Ly phát ra ánh sáng linh quang rực rỡ, dùng quả cầu ma thuật phong ấn tà thần vào cuốn sách cổ vĩnh viễn.'
  },
  max: {
    birthplace: 'Phố Thợ Máy Carano',
    birthday: '14/05',
    height: '135 cm',
    secretProfile: {
      organizationRole: 'Thần Đồng Cơ Khí Chế Tạo - Đội Trưởng Đội Đua Xe Bay Carano',
      otherStory: 'Có thể chế tạo một cỗ xe bay tự động từ những chiếc xoong chảo rỉ sét; cậu luôn đeo chiếc kính bảo hộ to bản trên trán và khuôn mặt lúc nào cũng dính vệt dầu mỡ đen nhánh.',
      secret: 'Động cơ bay sau lưng cậu chạy bằng một viên đá năng lượng vĩnh cửu mà sư phụ Moren đã bí mật trao cho cậu như món quà công nhận tài năng thiên bẩm xuất chúng.'
    },
    specialLore: 'Cú Bay Xuyên Lục Địa: Nhận được tín hiệu cầu cứu từ tiền đồn xa xôi, Max đã kích hoạt phản lực bay thẳng qua ba ngọn núi với tốc độ siêu thanh, lao thẳng xuống húc văng cỗ máy công thành của địch giải nguy đồng đội.'
  },
  wisp: {
    birthplace: 'Phố Thợ Máy Carano',
    birthday: '06/06',
    height: '128 cm',
    secretProfile: {
      organizationRole: 'Nữ Pháo Thủ Tí Hon - Thành Viên Đội Đua Carano',
      otherStory: 'Em gái nghịch ngợm của Max; cô bé thích ngồi trong buồng lái cỗ máy chiến đấu hình thú bông và bấm còi inh ỏi khắp các con phố học viện khiến ai cũng vừa bực vừa thương.',
      secret: 'Cỗ xe chiến đấu của cô bé được trang bị hệ thống pháo tự động bắn ra những viên kẹo phát nổ có sức công phá ngang ngửa thuốc nổ quân sự cao cấp do chính cô bé tự chế.'
    },
    specialLore: 'Cơn Mưa Pháo Hoa Oanh Tạc: Khi một bầy dơi quỷ định tấn công đoàn xe của học viện, Wisp đã xoay nòng pháo bắn ra hàng trăm quả pháo hoa rực rỡ nổ tung trên bầu trời xua tan đàn quái vật trong tiếng hò reo.'
  },
  celica: {
    birthplace: 'Doanh Trại Pháo Binh Carano',
    birthday: '21/08',
    height: '171 cm',
    secretProfile: {
      organizationRole: 'Đại Đội Trưởng Pháo Thủ Hạng Nặng - Trưởng Ban Phòng Thủ Thành Phố',
      otherStory: 'Rất thích uống cà phê đen đậm đặc không đường để giữ tỉnh táo trong những đêm canh gác trên tháp pháo; nàng có thể tính góc bắn pháo chỉ bằng mắt thường chuẩn xác kỳ diệu.',
      secret: 'Khẩu trọng pháo của nàng được thiết kế dựa trên bản vẽ pháo hạm cổ xưa, khi cắm chốt xuống đất nó có thể tạo ra uy lực tương đương một khẩu đại bác trên chiến hạm bọc thép hạng nặng.'
    },
    specialLore: 'Loạt Pháo Định Đoạt Trận Địa: Cắm chặt bệ pháo xuống đỉnh đồi hiểm trở, Celica đã bắn ba loạt đạn pháo tầm xa trúng đích sở chỉ huy của quân xâm lược cách xa ba dặm, làm tan rã cuộc công thành.'
  },
  roxie: {
    birthplace: 'Ngôi Làng Khai Khoáng Carano',
    birthday: '04/09',
    height: '164 cm',
    secretProfile: {
      organizationRole: 'Nhà Thám Hiểm Trẻ Tuổi - Hướng Dẫn Viên Thực Địa Học Viện',
      otherStory: 'Luôn mang theo một chú lừa nhỏ chở đầy bản đồ và mẫu khoáng thạch; cô bé thích trượt patin lửa trên những con đường lát đá của học viện mỗi sáng sớm mai.',
      secret: 'Chiếc ba lô phát sáng của cô chứa một tinh linh lửa tên là Agnie, sinh vật tí hon này có thể phóng ra ngọn lửa ma thuật kéo kẻ địch lại gần cô trong nháy mắt mà không bị bỏng.'
    },
    specialLore: 'Đường Trượt Rực Lửa: Bị lũ quái vật săn đuổi trong đường hầm mỏ tăm tối, Roxie đã kích hoạt patin lửa lướt nhanh tạo thành bức tường lửa phong tỏa đường hầm, cứu thoát toàn bộ đội thám hiểm an toàn.'
  },
  capheny: {
    birthplace: 'Gia Tộc Công Nghệ Carano/Norman',
    birthday: '14/09',
    height: '165 cm',
    secretProfile: {
      organizationRole: 'Nữ Pháo Binh Năng Lượng - Cựu Học Viên Quân Sự Carano',
      otherStory: 'Rất thích mặc những bộ váy lolita dễ thương dù phải vác trên vai khẩu pháo laser khổng lồ; cô luôn mang theo những chiếc kẹo que ngọt ngào bên mình để chia sẻ với bạn bè.',
      secret: 'Khẩu pháo laser của cô chạy bằng công nghệ năng lượng hạt nhân do cha cô chế tạo; cô đã trộm lấy nó và trốn khỏi gia đình khi phát hiện cha mình đang chế tạo vũ khí cho quân bạo tàn xâm lược.'
    },
    specialLore: 'Tia Laser Quét Sạch Chiến Hào: Một mình Capheny đứng trên cầu phòng thủ, xoay nòng pháo laser quét một đường thẳng thiêu rụi toàn bộ các chiến xa bọc giáp của kẻ phản trắc đang tiến vào thành phố.'
  },
  goverra: {
    birthplace: 'Viện Nghiên Cứu Sinh Học Carano',
    birthday: '03/12',
    height: '177 cm',
    secretProfile: {
      organizationRole: 'Giáo Sư Hóa Dược Ma Pháp - Trưởng Khoa Biến Đổi Vật Chất',
      otherStory: 'Luôn xuất hiện với chiếc áo khoác thí nghiệm dính đầy vết hóa chất phát quang; ông thích trò chuyện với những chiếc bình thí nghiệm sủi bọt như những người bạn tâm giao tri kỷ.',
      secret: 'Ông đã tự mình tiêm vào cơ thể một loại huyết thanh biến đổi gen ma thuật giúp ông miễn nhiễm với mọi loại độc dược trên đời nhưng đổi lại thân nhiệt luôn ở mức đóng băng lạnh ngắt.'
    },
    specialLore: 'Đòn Phản Ứng Dây Chuyền: Khi phòng thí nghiệm trung tâm bị quái vật xâm nhập, Goverra đã đổ hai lọ hóa chất xuống sàn tạo nên phản ứng phát nổ dây chuyền thiêu rụi lũ quái vật mà không làm hỏng một tài liệu nghiên cứu nào.'
  },
  bonnie: {
    birthplace: 'Vùng Đất Rác Ma Thuật Carano',
    birthday: '10/10',
    height: '140 cm',
    secretProfile: {
      organizationRole: 'Cô Bé Thao Túng Sấm Sét - Đội Trưởng Đội Tuần Tra Vùng Hoang Dã',
      otherStory: 'Thích chơi với chú cá mập bông phát ra tia sét tí tách và luôn đem những món đồ chơi kỳ lạ nhặt được từ bãi phế liệu đi tặng các bạn trong học viện khiến ai cũng thích thú.',
      secret: 'Chiếc ba lô cá mập của cô bé thực chất là một máy phát điện từ trường siêu mạnh có thể tạo ra lực hút sấm sét giam giữ cả một con quái thú bọc giáp khổng lồ không thể cựa quậy.'
    },
    specialLore: 'Cú Đớp Sấm Sét Kinh Hoàng: Khi một con sâu đất khổng lồ trồi lên định nuốt chửng khu ký túc xá, Bonnie đã ném chú cá mập bông xuống đất, kích hoạt bẫy sấm sét hút chặt con sâu đất xuống lòng đất giải cứu học viện.'
  },
  quillen: {
    birthplace: 'Tổng Hành Dinh Hội Ám Hoàng (Tân Liên Hiệp)',
    birthday: '07/04',
    height: '184 cm',
    secretProfile: {
      organizationRole: 'Thống Lĩnh Tối Cao Hội Ám Hoàng - Nghị Viên Tân Liên Hiệp',
      otherStory: 'Luôn giữ phong thái của một chính trị gia lịch lãm; hắn thích ngồi thưởng thức rượu vang đỏ một mình trong căn phòng làm việc kín mít không một tia ánh mặt trời lọt vào.',
      secret: 'Hắn tin tuyệt đối vào thuyết loài người thượng đẳng và coi mọi chủng tộc khác như tinh linh hay ma tộc là mối đe dọa cần phải bị diệt trừ triệt để để bảo toàn vị thế độc tôn của nhân loại.'
    },
    specialLore: 'Nhát Kiếm Thanh Trừng Trong Bóng Tối: Một mình Quillen xuất hiện từ hư vô phía sau lưng tên thủ lĩnh phiến quân đang phát biểu trước hàng vạn tín đồ, tung một nhát kiếm đoạt mạng mục tiêu rồi biến mất trong sự hỗn loạn kinh hoàng.'
  },
  thorne: {
    birthplace: 'Xưởng Ma Khí Hội Ám Hoàng (Carano)',
    birthday: '16/06',
    height: '172 cm',
    secretProfile: {
      organizationRole: 'Kỹ Sư Ma Súng Của Hội Ám Hoàng - Xạ Thủ Ba Ma Đạn',
      otherStory: 'Rất ít nói và luôn đeo găng tay da; cậu có thói quen tung hứng ba viên đạn ma thuật ma lực khác màu để rèn luyện sự tập trung trước mỗi phi vụ ám sát đầy nguy hiểm.',
      secret: 'Khẩu súng của cậu có thể bắn ra ba loại đạn ma thuật: tím (hủy diệt), vàng (làm chậm) và xanh lam (hút máu); mỗi viên đạn được nạp bằng chính năng lượng tinh thần của bản thân cậu.'
    },
    specialLore: 'Loạt Đạn Ma Thuật Tam Sắc: Đứng trên tầng thượng cách xa mục tiêu một dặm, Thorne đã nạp cùng lúc ba viên đạn tam sắc, bắn ra phát súng xuyên qua ba lớp kính chống đạn kết liễu mục tiêu hoàn hảo không một tiếng động.'
  },
  amily: {
    birthplace: 'Đấu Trường Sinh Tử Hội Ám Hoàng',
    birthday: '26/02',
    height: '175 cm',
    secretProfile: {
      organizationRole: 'Cựu Sát Thủ Số 1 Hội Ám Hoàng - Đao Phong Cuồng Nộ',
      otherStory: 'Rất thích ăn những món đồ ngọt mềm và luôn quấn dải băng quanh chiếc lưỡi dao sắc nhọn gắn trên cổ chân mỗi khi không ở trong trạng thái chiến đấu để tránh làm tổn thương người khác.',
      secret: 'Cô đã tự nguyện gắn những lưỡi dao thép vào đôi chân mình để trở thành cỗ máy giết người phục vụ Quillen nhằm bảo vệ tính mạng cho đứa em gái nhỏ đã thất lạc từ thuở nhỏ.'
    },
    specialLore: 'Cú Đá Cuồng Bạo Thoát Ly: Khi bị các sát thủ tinh nhuệ của Hội Ám Hoàng truy sát vì tội đào tẩu, Amily đã kích hoạt bộ giáp cuồng nộ, tung những cú đá xé gió hạ gục toàn bộ mười hai tên truy đuổi và biến mất vào rừng sâu.'
  },
  elsu: {
    birthplace: 'Thị Trấn Biên Giới Sa Mạc (Carano/Norman)',
    birthday: '02/08',
    height: '186 cm',
    secretProfile: {
      organizationRole: 'Xạ Thủ Bắn Tỉa Huyền Thoại - Hộ Vệ Thầm Lặng Thành Phố',
      otherStory: 'Có thể nằm bất động trong bụi cỏ suốt ba ngày đêm chỉ với một bi-đông nước để chờ đợi thời khắc mục tiêu xuất hiện trong tầm ngắm bắn tỉa của mình.',
      secret: 'Cánh tay phải của anh được cường hóa bằng ma thuật viễn thám giúp anh nhìn thấy chuyển động của một chiếc lá rơi cách xa hàng ngàn mét dù trong màn sương mù dày đặc nhất.'
    },
    specialLore: 'Phát Bắn Xuyên Màn Đêm: Giữa trận bão cát mù mịt khi đồng đội bị bao vây bởi lũ quái thú sa mạc hung dữ, Elsu đã nằm ngắm bắn từ đỉnh cồn cát, nã ba phát đạn xuyên phá tiêu diệt ba con đầu đàn giải nguy cho toàn đội.'
  }
};
