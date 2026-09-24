import type { HeroDossierItem } from './types';

export const AFATA_DOSSIERS: Record<string, HeroDossierItem> = {
  telannas: {
    birthplace: 'Cây Thế Giới Elborne (Afata)',
    birthday: '21/06',
    height: '172 cm',
    secretProfile: {
      organizationRole: 'Tinh Linh Nữ Vương Tối Cao - Đại Lãnh Tụ Khu Rừng Nguyên Sinh',
      otherStory: 'Rất thích lắng nghe tiếng thì thầm của gió luồn qua kẽ lá vào lúc bình minh; nàng có thể trò chuyện với mọi loài hoa dại nở trong rừng sâu thẳm.',
      secret: 'Nàng từng ngủ say suốt một ngàn năm sau khi bắn hạ chúa tể Volkath; vết thương hắc ám từ mũi tên ấy vẫn đang gặm nhấm tâm hồn nàng từng ngày trong im lặng.'
    },
    specialLore: 'Phát Bắn Định Mệnh Ngàn Năm: Trong đại chiến cổ xưa, khi thành lũy rừng rậm sắp thất thủ, Tel\'Annas đã kéo căng cánh cung thần tích tụ toàn bộ linh lực Cây Thế Giới, bắn một mũi tên xuyên tim Volkath chôn vùi chúa tể hắc ám xuống đáy vực thẳm.'
  },
  krixi: {
    birthplace: 'Vườn Bướm Tinh Linh (Afata)',
    birthday: '12/03',
    height: '156 cm',
    secretProfile: {
      organizationRole: 'Sứ Giả Tinh Linh Rừng Xanh - Hộ Vệ Thần Mộc',
      otherStory: 'Rất thích đùa giỡn với những chú bướm ngũ sắc và dạy cho các sinh vật nhỏ trong rừng những giai điệu cổ xưa của mẹ thiên nhiên huyền bí.',
      secret: 'Ẩn sau vẻ ngoài ngây thơ đáng yêu, Krixi sẵn sàng trừng phạt tàn bạo không thương tiếc bất kỳ kẻ nào dám chặt phá cây cối hay làm tổn thương muông thú của Afata.'
    },
    specialLore: 'Cơn Mưa Sao Băng Tinh Linh: Khi quân đoàn thợ săn gỗ tàn phá khu rừng thánh, Krixi đã dang rộng đôi cánh phát sáng, triệu hồi trận mưa sao băng thanh tẩy thiêu rụi toàn bộ máy móc cơ giới của kẻ xâm lược bảo vệ màu xanh bạt ngàn.'
  },
  zill: {
    birthplace: 'Hẻm Núi Ngàn Gió (Afata)',
    birthday: '23/09',
    height: '185 cm',
    secretProfile: {
      organizationRole: 'Phong Ma Thần Vực - Hộ Vệ Tối Cao Của Nữ Vương',
      otherStory: 'Không có hình dạng xác thịt cố định; hắn thích biến thành một cơn gió nhẹ lướt qua ngọn cỏ để xua tan cái nóng trưa hè cho các loài thú non đang say ngủ.',
      secret: 'Hắn vốn là hiện thân của sự hủy diệt hoang dã tự do, chỉ chịu khuất phục và phục vụ Tel\'Annas vì nàng là người duy nhất thấu hiểu nỗi cô độc bất tận của ngọn gió ngàn năm.'
    },
    specialLore: 'Phong Ba Cuồng Nộ: Khi một đàn rồng lửa định thiêu rụi Cây Thế Giới, Zill đã hóa thân thành cơn lốc xoáy khổng lồ mang theo ngàn lưỡi dao gió, xé toạc đàn rồng lửa ngay trên tầng mây bảo vệ tuyệt đối thần mộc.'
  },
  lumburr: {
    birthplace: 'Trái Tim Lòng Đất Thượng Cổ (Afata)',
    birthday: '08/08',
    height: '250 cm',
    secretProfile: {
      organizationRole: 'Cổ Thần Nham Thạch - Vệ Thần Lòng Đất Afata',
      otherStory: 'Mỗi bước đi của ông tạo nên những rung chấn nhẹ khiến hoa cỏ mọc lên tươi tốt; ông thường nằm ngủ giả làm một ngọn đồi xanh cho chim chóc tha rác về làm tổ.',
      secret: 'Trái tim bằng đá của ông lưu giữ ký ức về thời kỳ khai thiên lập địa của toàn cõi Athanor trước khi các vị thần Veda hay ma quỷ Lokheim xuất hiện tranh giành quyền lực.'
    },
    specialLore: 'Bức Tường Địa Chấn: Khi dòng dung nham từ núi lửa Lokheim tràn về bản làng tinh linh, Lumburr đã đấm mạnh xuống đất, dựng lên dãy núi đá sừng sững chặn đứng dòng nham thạch cứu vạn sinh linh thoát khỏi biển lửa.'
  },
  zuka: {
    birthplace: 'Rừng Trúc Đại Lục (Afata / Viễn Đông)',
    birthday: '15/04',
    height: '180 cm',
    secretProfile: {
      organizationRole: 'Đại Sư Trúc Quyền - Bậc Thầy Võ Học Tự Do Afata',
      otherStory: 'Rất mê ăn măng tươi luộc chấm mật ong rừng và có thể ngồi vừa ăn vừa thiền thăng bằng trên một cành trúc mảnh như sợi chỉ đu đưa theo gió.',
      secret: 'Cây gậy trúc của ông được hái từ bụi trúc mọc trên miệng núi lửa cổ đại, nhẹ như lông hồng nhưng khi dồn khí lực có thể đập vỡ khiên thép nặng ngàn cân của kỵ sĩ bọc giáp.'
    },
    specialLore: 'Cú Giáng Trầm Mặc: Đơn thương độc mã đối đầu với toán sơn tặc khét tiếng đang cướp bóc thôn làng dưới chân núi, Zuka dùng một đường quyền gậy trúc đánh gãy vũ khí của cả trăm tên cướp trong nháy mắt thu phục nhân tâm.'
  },
  teemee: {
    birthplace: 'Thung Lũng Rác Kỳ Diệu (Afata)',
    birthday: '01/04',
    height: '110 cm',
    secretProfile: {
      organizationRole: 'Đội Thu Gom Kho Báu Rừng Rậm - Thần Trộm Lương Thiện',
      otherStory: 'Tee và Mee liên tục cãi cọ xem ai là người điều khiển chiếc giáp sắt tốt hơn, nhưng hễ tìm thấy một miếng pho mát ngon là cả hai lại chia đôi ngọt ngào tình cảm.',
      secret: 'Chiếc vạc thần kỳ mà chúng cưỡi thực chất là một lò luyện giả kim thuật cổ có khả năng đảo ngược thời gian và hồi sinh sinh mệnh trong gang tấc khi dồn đủ năng lượng.'
    },
    specialLore: 'Sự Hồi Sinh Thần Kỳ: Giữa trận địa bom đạn nguy cấp khiến một đại tướng tinh linh ngã xuống, TeeMee đã kích hoạt chiếc vạc xả ra luồng khói thần kỳ rực rỡ, hồi sinh dũng sĩ trở lại chiến đấu ngoạn mục đảo ngược thế cờ.'
  },
  baldum: {
    birthplace: 'Thảo Nguyên Bất Tận (Afata)',
    birthday: '18/05',
    height: '225 cm',
    secretProfile: {
      organizationRole: 'Trưởng Lão Nhân Mã - Đội Trưởng Quân Đoàn Hộ Thần Mộc',
      otherStory: 'Có sở thích điêu khắc gỗ bằng chính móng guốc của mình; ông đã tạc nên hàng trăm bức tượng nhỏ tặng cho các em bé tinh linh trong rừng làm kỷ niệm tuổi thơ.',
      secret: 'Cột đá tổ tiên mà ông vác trên vai chứa đựng linh hồn của các chiến binh nhân mã cổ xưa, trao cho ông sức mạnh địa chấn bất khả chiến bại trước mọi thế lực xâm lược.'
    },
    specialLore: 'Địa Giam Vĩnh Cửu: Khi kỵ binh Lokheim tràn qua thung lũng, Baldum đã cắm mạnh cột đá tổ tiên xuống lòng đất, mở ra khe nứt giam cầm toàn bộ đoàn kỵ binh địch dưới tầng địa chất sâu cứu lấy cả thung lũng.'
  },
  helen: {
    birthplace: 'Dòng Suối Sinh Mệnh (Afata)',
    birthday: '10/05',
    height: '158 cm',
    secretProfile: {
      organizationRole: 'Tinh Linh Thần Dược - Kế Thừa Trưởng Lão Ánh Sáng Rừng Rậm',
      otherStory: 'Rất thích kết vòng hoa dại đội lên đầu muông thú và có thể bắt chước tiếng hót của hơn bốn mươi loài chim rừng khác nhau một cách hoàn hảo đến kỳ lạ.',
      secret: 'Nàng là người được Payna truyền trao viên ngọc linh hồn bảo hộ rừng xanh trước khi Payna lâm chung, mang trên vai sứ mệnh thiêng liêng gánh vác toàn bộ sinh mệnh của Afata.'
    },
    specialLore: 'Khúc Ca Chữa Lành: Trong đêm tuyết lạnh giá khi toàn bộ thú rừng ngã bệnh vì tà độc lây lan, Helen đã hát khúc ca sinh mệnh suốt đêm dài, phát ra ánh sáng ngọc bích xua tan mọi mầm bệnh cứu sống muôn loài.'
  },
  payna: {
    birthplace: 'Rừng Thiêng Elborne Cổ (Afata)',
    birthday: '14/07',
    height: '175 cm',
    secretProfile: {
      organizationRole: 'Cố Đại Trưởng Lão Afata - Thần Hộ Vệ Cội Nguồn',
      otherStory: 'Từng dùng đôi gạc hươu phát sáng của mình để soi đường cho đoàn người tị nạn vượt qua khu rừng tăm tối trong cuộc chiến ma thuật tàn khốc lần thứ nhất.',
      secret: 'Bà đã tự nguyện dùng cạn kiệt sinh mệnh của bản thân để che chắn đòn chí mạng của Aleister, bảo vệ an toàn tuyệt đối cho mầm non thế hệ mới Helen tiếp bước tương lai.'
    },
    specialLore: 'Ánh Sáng Hy Sinh Cuối Cùng: Khoảnh khắc ngã xuống trước móng vuốt ma quỷ bạo tàn, Payna đã giải phóng toàn bộ thần lực còn lại hóa thành lớp màng chắn bảo hộ vĩnh hằng quanh Cây Thế Giới, bất tử trong lòng muôn dân.'
  },
  lindis: {
    birthplace: 'Bộ Tộc Nguyệt Tộc (Afata)',
    birthday: '28/10',
    height: '168 cm',
    secretProfile: {
      organizationRole: 'Nữ Tế Mặt Trăng - Thủ Lĩnh Tinh Thần Nguyệt Tộc',
      otherStory: 'Rất thích đi dạo trong bụi rậm dưới ánh trăng rằm cùng chú sói tuyết bạc; cô có thể nhìn thấy những dấu vết vô hình mà mắt thường phàm nhân không thể nào thấy được.',
      secret: 'Linh hồn người chị gái song sinh đã hy sinh của cô luôn bay lượn bên cạnh dưới dạng một vầng sáng nguyệt quang dịu dàng bảo vệ cô khỏi mọi ám toán nguy hiểm.'
    },
    specialLore: 'Nguyệt Ảnh Phục Kích: Bị phục kích trong đêm tối bởi toán thích khách bóng đêm nguy hiểm, Lindis hòa mình vào bóng trăng, thoắt ẩn thoắt hiện bắn ra những mũi tên ánh trăng hạ gục từng kẻ địch trong im lặng tuyệt đối.'
  },
  arum: {
    birthplace: 'Thần Điện Sư Tử Cổ (Afata)',
    birthday: '17/03',
    height: '170 cm',
    secretProfile: {
      organizationRole: 'Nữ Chúa Thú Hồn - Trưởng Tế Tộc Muôn Thú',
      otherStory: 'Thường để ba con linh thú sư tử xanh nằm ngủ cuộn tròn quanh mình như những chú mèo con ấm áp trong những đêm mùa đông lạnh giá buốt xương.',
      secret: 'Mạng sống của nàng liên kết trực tiếp với sinh mệnh của linh thú; khi nàng dùng bí thuật trói buộc linh hồn đối phương, nỗi đau của nàng cũng sẽ xé nát tim gan kẻ địch không thể cứu vãn.'
    },
    specialLore: 'Khế Ước Thú Hồn: Để bảo vệ lãnh địa tổ tiên khỏi sự xâm lăng của tập đoàn thợ săn tàn bạo, Arum đã dũng cảm thực hiện nghi lễ hiến tế cổ xưa, triệu hồi ba linh thú cổ đại hợp nhất vĩnh cửu vào linh hồn mình.'
  },
  dyadia: {
    birthplace: 'Rừng Rậm Bí Ẩn Phương Nam (Afata)',
    birthday: '09/06',
    height: '164 cm',
    secretProfile: {
      organizationRole: 'Nữ Thần Kết Nối Linh Hồn - Sứ Giả Hòa Giải Afata',
      otherStory: 'Rất thích sưu tập những chiếc chuông gió bằng vỏ ốc và luôn mang theo những chiếc bùa bện từ cỏ thơm ngọt ngào để tặng cho những người lữ khách phương xa qua đường.',
      secret: 'Sợi dây liên kết của cô có thể đọc được ký ức sâu kín nhất của bất kỳ ai chạm vào nó, kể cả những bí mật tội lỗi đen tối mà họ muốn chôn giấu suốt cuộc đời phàm trần.'
    },
    specialLore: 'Bản Giao Hưởng Tâm Hồn: Trong cuộc xung đột đẫm máu giữa hai bộ tộc thú nhân bên bờ sông dữ, Dyadia đã phóng ra những dải lụa ánh sáng kết nối tâm trí hai thủ lĩnh, hóa giải thù hận ngàn năm chỉ bằng một cái ôm cảm thông.'
  },
  slimz: {
    birthplace: 'Thương Thành Rừng Thưa (Afata)',
    birthday: '09/09',
    height: '125 cm',
    secretProfile: {
      organizationRole: 'Đại Thương Nhân Tinh Quái - Chủ Tịch Hội Chợ Đen Rừng Xanh',
      otherStory: 'Có thể ngửi thấy mùi vàng bạc châu báu từ cách xa mười dặm đường; chiếc túi đeo chéo của hắn đựng đầy các loại tiền tệ của mọi quốc gia trên toàn lục địa Athanor.',
      secret: 'Cây lao của Slimz được tẩm một loại dầu trơn ma thuật độc quyền khiến nó có thể xuyên thủng lớp da dày nhất của những con quái vật cổ đại khổng lồ mà không hề bị mắc kẹt.'
    },
    specialLore: 'Cú Ném Bạc Tỷ: Khi lâu đài thương buôn của hắn bị lũ cướp bao vây đòi cống nạp, Slimz đã phóng cây lao từ đỉnh tháp canh trúng ngay bánh xe ngựa của tên thủ lĩnh, lật nhào toàn bộ kế hoạch cướp bóc trong nháy mắt.'
  },
  fennik: {
    birthplace: 'Hang Cáo Tốc Độ (Afata)',
    birthday: '20/05',
    height: '120 cm',
    secretProfile: {
      organizationRole: 'Thần Tốc Đạo Tặc - Hướng Dẫn Viên Trinh Sát Afata',
      otherStory: 'Cực kỳ mê món bánh quy bơ hạt phỉ giòn rụm; đôi tai to của chú cáo này có thể xoay 180 độ để nghe lén các cuộc trò chuyện cơ mật cách xa ba dãy nhà.',
      secret: 'Chiếc nỏ sấm sét của Fennik chạy bằng một viên pin năng lượng do Moren chế tạo mà cậu nhặt được trong một lần "mượn tạm" đồ ở kho vũ khí Lâu Đài Khởi Nguyên.'
    },
    specialLore: 'Cuộc Đào Tẩu Nghẹt Thở: Bị truy đuổi bởi cả một trung đội kỵ binh bọc thép biên phòng, Fennik đã ném ra chuỗi xích sấm sét quay cuồng xé toạc mặt đất, vừa phá hủy cầu treo vừa vẫy tay chào tạm biệt kẻ địch.'
  },
  kilgroth: {
    birthplace: 'Đáy Vực Biển Sâu (Afata / Vùng Biển)',
    birthday: '03/03',
    height: '215 cm',
    secretProfile: {
      organizationRole: 'Cuồng Đồ Biển Sâu - Chiến Thần Thủy Tộc',
      otherStory: 'Không bao giờ chịu rời xa ngọn giáo răng cưa khổng lồ của mình; mỗi khi tức giận, mang cá hai bên cổ hắn lại phập phồng phát ra những luồng bọt khí sôi sục sùng sục.',
      secret: 'Hắn mang trong mình nỗi hận diệt tộc tột cùng đối với Tà Thần Biển Sâu, chiến đấu không ngừng nghỉ chỉ để tìm kiếm cơ hội báo thù đẫm máu cho toàn bộ đồng loại đã khuất.'
    },
    specialLore: 'Cơn Thịnh Nộ Biển Đỏ: Bị hàng trăm ma thú bao vây dưới đáy rạn san hô, Kil\'Groth đã kích hoạt cuồng nộ tột độ, miễn nhiễm mọi bùa chú khống chế và xé toạc vòng vây trong một trận bão máu kinh hoàng rung chuyển đáy biển.'
  },
  cresht: {
    birthplace: 'Rạn San Hô Thượng Cổ (Afata)',
    birthday: '15/10',
    height: '160 cm (hóa khổng lồ: 380 cm)',
    secretProfile: {
      organizationRole: 'Thần Thú Thủy Triều - Hộ Vệ Sông Ngòi Rừng Rậm',
      otherStory: 'Lúc bình thường thích thu mình lại như một chú cá nhỏ hiền lành nổi trên mặt nước phơi nắng, khiến các chú chim ngỡ là một khúc gỗ mục trôi dạt vô hại.',
      secret: 'Cơn thịnh nộ thủy triều của ông là sự trỗi dậy của một thủy quái Kraken thượng cổ ngủ say bên dưới lớp vỏ bọc tí hon vô hại, sẵn sàng nhấn chìm cả một hạm đội chiến thuyền.'
    },
    specialLore: 'Cơn Đại Hồng Thủy: Khi quân xâm lược dựng đập ngăn dòng nước đổ vào rừng Afata, Cresht đã hóa thân thành quái thú khổng lồ gầm vang trời đất, vung ngọn giáo tạo sóng thần cao hai mươi mét cuốn phăng toàn bộ con đập kiên cố.'
  },
  ybneth: {
    birthplace: 'Cội Nguồn Mộc Tộc (Afata)',
    birthday: '01/01',
    height: '280 cm',
    secretProfile: {
      organizationRole: 'Cổ Thụ Ngàn Năm - Đại Thủ Hộ Cội Rễ Cây Thế Giới',
      otherStory: 'Rất thích để những chú sóc nhỏ làm tổ trong bộ râu lá rậm rạp của mình; mỗi lần ông cựa mình thức giấc là cả một cơn mưa quả sồi chín mọng lại rụng xuống đất cho muông thú.',
      secret: 'Bộ rễ của Y\'bneth đan xen sâu vào lòng đất khắp cõi Afata, giúp ông cảm nhận được từng bước chân lạ dù là nhỏ nhất đang lén lút xâm nhập vào biên giới rừng già.'
    },
    specialLore: 'Cú Vỗ Rừng Già: Đứng chắn trước lối vào thánh địa, Y\'bneth đã dang rộng hai cánh tay đại thụ vỗ một đòn sấm sét nghiền nát chiến xa tiên phong của quân đoàn cơ giới Lokheim, bảo vệ toàn vẹn vùng lõi.'
  },
  krizzix: {
    birthplace: 'Hang Động Tắc Kè Hoa (Afata)',
    birthday: '11/08',
    height: '130 cm',
    secretProfile: {
      organizationRole: 'Sứ Giả Ẩn Thân - Trinh Sát Trưởng Vô Hình Afata',
      otherStory: 'Có tài năng tàng hình hoàn hảo đến mức nhiều khi các bạn trong rừng ngồi đè lên người cậu mà vẫn không hề hay biết cậu đang ngồi đó đọc sách say sưa.',
      secret: 'Cây trượng phát sáng của cậu là một nhánh san hô cạn thời tiền sử có thể bẻ cong ánh sáng quang học và che giấu cả một đạo quân viễn chinh khỏi tầm mắt kẻ thù một cách kỳ diệu.'
    },
    specialLore: 'Màn Ngụy Trang Kỳ Diệu: Giúp cả một đoàn dân tị nạn gồm hàng trăm phụ nữ và trẻ em lướt qua ngay trước mũi đội tuần tra ma tộc mà không một tên lính nào phát hiện ra, đưa họ về miền đất hứa an toàn.'
  },
  elandorr: {
    birthplace: 'Vườn Bướm Linh Hồn (Afata)',
    birthday: '19/04',
    height: '177 cm',
    secretProfile: {
      organizationRole: 'Kẻ Dẫn Dắt Linh Hồn - Du Hiệp Đèn Lồng Bướm',
      otherStory: 'Luôn mang vẻ mặt đượm buồn thi vị; chàng thích chơi sáo trúc dưới bóng cây cổ thụ để xoa dịu những linh hồn lạc lối trong rừng đêm u tịch.',
      secret: 'Chiếc đèn lồng của chàng phong ấn linh hồn người yêu quá cố; mỗi cánh bướm ma thuật bay ra là một phần sinh lực của nàng đang hóa thân để bảo vệ chàng khỏi cái chết.'
    },
    specialLore: 'Vũ Điệu Bướm Tử Thần: Bị bao vây bởi lũ sói bóng tối đói khát, Eland\'orr đã thả chiếc đèn lồng ma thuật, thoắt biến qua lại giữa các đàn bướm phát sáng, bắn hạ từng con sói mà không để lại một dấu vết trên cỏ xanh.'
  },
  aya: {
    birthplace: 'Thung Lũng Ca Tinh (Afata)',
    birthday: '05/05',
    height: '142 cm',
    secretProfile: {
      organizationRole: 'Ca Sĩ Rừng Xanh - Linh Thú Cổ Động Tinh Thần Afata',
      otherStory: 'Rất thích ngồi trên đầu các dũng sĩ to lớn như Thane hay Baldum để ca hát líu lo và phân phát kẹo ngọt cho mọi người sau mỗi trận giao tranh thắng lợi vẻ vang.',
      secret: 'Giọng hát ngây thơ của Aya thực chất mang tần số cộng hưởng linh hồn cổ xưa, có thể xua tan mọi tà niệm đen tối nhất trong tâm trí của những chiến binh đang cuồng loạn.'
    },
    specialLore: 'Khúc Hát Hóa Thú: Khi một đại tướng đồng minh sắp bị bùa chú thao túng sát hại đồng đội mình, Aya đã cất tiếng hát trong trẻo biến kẻ địch xung quanh thành những chú thú bông nhỏ vô hại, cứu nguy toàn đội trong gang tấc.'
  },
  biron: {
    birthplace: 'Xưởng Cơ Khí Viễn Cổ (Afata/Norman)',
    birthday: '16/09',
    height: '182 cm',
    secretProfile: {
      organizationRole: 'Chiến Binh Cánh Tay Lôi Điện - Hộ Vệ Trẻ Tuổi Afata',
      otherStory: 'Rất thích đọ cơ bắp và thi uống sữa dê với các bạn trẻ trong làng; cậu luôn tự hào về cánh tay máy phát ra tia điện tí tách lấp lánh của mình.',
      secret: 'Cánh tay cơ giới của cậu được chế tạo từ mảnh tàn tích của một vị thần sấm thượng cổ, có khả năng hấp thụ và chuyển hóa mọi loại năng lượng sét của kẻ thù thành sức mạnh bản thân.'
    },
    specialLore: 'Cú Đấm Sấm Sét Quét Sạch: Đối đầu với cỗ máy nghiền đá khổng lồ của địch, Biron đã dồn toàn bộ điện tích vào cánh tay cơ khí, tung cú đấm trời giáng nổ tung cỗ máy cứu cả ngôi làng khỏi thảm họa diệt vong.'
  },
  tamyn: {
    birthplace: 'Thác Nước Pha Lê (Afata)',
    birthday: '26/11',
    height: '165 cm',
    secretProfile: {
      organizationRole: 'Nữ Vũ Công Thủy Tinh - Hộ Vệ Nguồn Nước Thiêng',
      otherStory: 'Những bước nhảy của cô trên mặt nước luôn để lại những đóa hoa sen ánh sáng nở rộ lung linh trong đêm trăng thanh bình.',
      secret: 'Cô có thể điều khiển dòng chảy ngầm của toàn bộ mạch nước ngọt Afata; nếu nguồn nước thiêng bị nhiễm độc, trái tim cô cũng sẽ tan vỡ theo dòng nước.'
    },
    specialLore: 'Điệu Múa Thanh Tẩy Đại Ngàn: Đứng trước dòng sông bị ma tộc đổ độc dược đen ngòm làm chết cá tôm, Tamyn đã múa điệu vũ cầu mưa thiêng liêng, gọi về cơn mưa rào ánh sáng thanh tẩy toàn bộ dòng nước xanh trong trở lại.'
  }
};
