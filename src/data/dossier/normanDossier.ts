import type { HeroDossierItem } from './types';

export const NORMAN_DOSSIERS: Record<string, HeroDossierItem> = {
  arthur: {
    birthplace: 'Thành Bang Okka (Norman)',
    birthday: '20/04',
    height: '188 cm',
    secretProfile: {
      organizationRole: 'Minh Chủ Liên Minh Khởi Nguyên - Vua Của Vương Quốc Norman',
      otherStory: 'Dù là vị quốc vương uy nghiêm của toàn vương quốc, chàng vẫn giữ thói quen tự mình cho chiến mã ăn táo mỗi sáng và thích ngồi ăn súp bánh mì cùng những người lính gác cổng bình dị.',
      secret: 'Thanh Thánh Kiếm trên tay chàng chỉ thức tỉnh trọn vẹn quyền năng tối thượng khi người cầm nó sẵn sàng hy sinh tính mạng của chính mình vì sinh mệnh của thần dân vương quốc.'
    },
    specialLore: 'Giơ Cao Thánh Kiếm Thống Nhất: Trong thời khắc đất nước Norman bị chia cắt bởi nội chiến và ngoại xâm đe dọa, Arthur đã rút thanh gươm cắm sâu trong đá thánh, tập hợp toàn bộ các lãnh chúa kiêu ngạo dưới một lá cờ công lý duy nhất.'
  },
  thane: {
    birthplace: 'Hoàng Cung Norman Cổ (Norman)',
    birthday: '15/08',
    height: '190 cm',
    secretProfile: {
      organizationRole: 'Đại Hộ Quốc Công - Tổng Chỉ Huy Quân Đội Hoàng Gia Norman',
      otherStory: 'Rất thích sưu tầm các loại bản đồ quân sự cổ xưa; chàng có thể thức trắng đêm bên ngọn nến le lói để tính toán chi tiết lộ trình tiếp tế lương thảo cho từng tiền đồn biên giới xa xôi.',
      secret: 'Chàng từng từ chối ngai vàng tối cao để nhường lại cho Arthur vì tin tưởng tuyệt đối rằng chỉ có Arthur mới đủ lòng bao dung để gắn kết các chủng tộc trên toàn lục địa Athanor.'
    },
    specialLore: 'Nhát Kiếm Xung Kích Quyết Tử: Khi cổng thành thủ đô bị xe phá thành của ma tộc húc đổ trong đêm giông bão, Thane đã một mình giơ cao đại kiếm lao thẳng vào giữa làn mưa tên, chém gãy trục xe và đẩy lùi toàn bộ quân địch.'
  },
  florentino: {
    birthplace: 'Lãnh Địa Hoa Hồng Okka (Norman)',
    birthday: '14/02',
    height: '182 cm',
    secretProfile: {
      organizationRole: 'Đệ Nhất Kiếm Khách Quý Tộc - Đội Trưởng Tiên Phong Hoa Hồng',
      otherStory: 'Luôn mang theo những đóa hoa hồng nhung tươi thắm để tặng các quý cô thanh lịch; chàng coi việc chiến đấu sinh tử như một điệu van nhẹ nhàng lướt trên sàn khiêu vũ tráng lệ.',
      secret: 'Đằng sau nụ cười phong lưu lãng tử là nỗi đau không bao giờ nguôi ngoai về người bạn tri kỷ đã ngã xuống trong một trận đấu kiếm bảo vệ danh dự gia tộc thời niên thiếu.'
    },
    specialLore: 'Điệu Van Tử Thần Giữa Muôn Hoa: Một mình Florentino giữa vòng vây của hai mươi tên sát thủ tinh nhuệ, chàng lướt nhẹ qua từng cánh hoa hồng rơi, tung ra những đường kiếm hoa mỹ hạ gục toàn bộ đối thủ mà vạt áo không hề vấy một giọt máu.'
  },
  astrid: {
    birthplace: 'Lâu Đài Hoa Hồng Đỏ (Norman)',
    birthday: '06/07',
    height: '174 cm',
    secretProfile: {
      organizationRole: 'Nữ Đại Công Tước Hoa Hồng Đỏ - Chỉ Huy Đội Cận Vệ Hoàng Gia',
      otherStory: 'Từ nhỏ đã từ chối mặc váy dạ hội diêm dúa để khoác giáp sắt tập kiếm cùng phụ thân; nàng rất thích phi ngựa băng qua những cánh đồng lúa mì vàng óng ngút tầm mắt.',
      secret: 'Nàng kế thừa tước vị và thanh cự kiếm ngọn lửa khi mới tròn mười sáu tuổi sau khi cha và anh trai hy sinh oanh liệt trên chiến trường phương Bắc xa xôi.'
    },
    specialLore: 'Lời Thề Thanh Kiếm Lửa: Khoác lên mình bộ giáp đẫm máu của phụ thân, Astrid giơ cao cự kiếm thề trước hàng vạn binh sĩ sẽ chiến đấu đến hơi thở cuối cùng để bảo vệ danh dự ngọn cờ Hoa Hồng Đỏ bất diệt.'
  },
  allain: {
    birthplace: 'Trại Trẻ Mồ Côi Biên Giới Norman',
    birthday: '25/05',
    height: '176 cm',
    secretProfile: {
      organizationRole: 'Song Kiếm Sĩ Tự Do - Cựu Thành Viên Đào Tẩu Hội Ám Hoàng',
      otherStory: 'Rất thích ăn bánh táo nướng giòn ngọt và luôn bị mất phương hướng khi đi dạo trong các thành phố lớn; chàng coi Butterfly là người bạn quan trọng nhất trong cuộc đời mình.',
      secret: 'Ký ức thời thơ ấu của cậu đã bị Quillen xóa sạch bằng tà thuật thôi miên để biến cậu thành một cỗ máy giết người vô cảm trước khi cậu dũng cảm trốn thoát tìm lại chính mình.'
    },
    specialLore: 'Song Kiếm Bạt Trảm: Khi Butterfly bị thích khách của Hội Ám Hoàng dồn vào chân tường nguy cấp, Allain đã rút song kiếm ánh sáng và bóng tối, thi triển tuyệt kỹ bạt kiếm chém tan toàn bộ kẻ thù trong một chớp mắt rực rỡ.'
  },
  butterfly: {
    birthplace: 'Khu Phố Kiếm Sĩ Norman',
    birthday: '18/05',
    height: '168 cm',
    secretProfile: {
      organizationRole: 'Đệ Nhất Kiếm Khách Đánh Thuê - Trưởng Nhóm Thợ Săn Tiền Thưởng',
      otherStory: 'Luôn ghi chép cẩn thận từng khoản thù lao vào một cuốn sổ tay nhỏ màu hồng dễ thương; cô nàng thích ăn kem vani sau khi hoàn thành mỗi bản hợp đồng tác chiến cam go.',
      secret: 'Cô luôn âm thầm dùng toàn bộ tiền thưởng kiếm được từ các phi vụ nguy hiểm để tài trợ cho trại trẻ mồ côi nơi cô và Allain từng lớn lên cùng nhau bên lò sưởi ấm.'
    },
    specialLore: 'Ám Sát Trong Chớp Mắt: Nhận nhiệm vụ tiêu diệt tên bạo chúa khét tiếng giữa tiệc rượu xa hoa canh phòng cẩn mật, Butterfly đã hóa thành vệt bóng mờ lướt qua ba lớp bảo vệ, kết liễu mục tiêu chỉ bằng một nhát đoản kiếm duy nhất.'
  },
  valhein: {
    birthplace: 'Làng Thợ Săn Huyết Tộc Norman',
    birthday: '13/11',
    height: '180 cm',
    secretProfile: {
      organizationRole: 'Thợ Săn Ma Cà Rồng Huyền Thoại - Đội Trưởng Biệt Đội Trừ Tà',
      otherStory: 'Có bộ sưu tập áo choàng da cổ đứng và những chiếc mũ phớt tinh tế; chàng luôn ngậm một điếu xì gà thơm lừng mỗi khi ngồi một mình lau chùi khẩu súng lục bạc trừ tà.',
      secret: 'Gia đình chàng từng bị huyết tộc tàn sát ngay trước mắt chàng; chàng mang trong mình lời nguyền miễn nhiễm với ma cà rồng nhưng đổi lại không bao giờ có được giấc ngủ yên bình trọn vẹn.'
    },
    specialLore: 'Viên Đạn Bạc Định Mệnh: Một mình Valhein xông vào lâu đài của chúa tể ma cà rồng ngàn năm tuổi, bắn ra phát đạn bạc xuyên thẳng qua trái tim ác quỷ, giải phóng toàn bộ vùng đất khỏi bóng đêm kinh hoàng.'
  },
  violet: {
    birthplace: 'Thành Phố Công Nghiệp Norman',
    birthday: '07/07',
    height: '169 cm',
    secretProfile: {
      organizationRole: 'Đội Trưởng Hoa Tiêu Xạ Thủ - Trưởng Ban Pháo Binh Hoàng Gia',
      otherStory: 'Rất thích tự tay nâng cấp và lau chùi cặp súng ngắn bọc vàng lấp lánh của mình; cô nàng luôn có một túi kẹo cao su bạc hà trong túi áo tác chiến để nhai giảm căng thẳng.',
      secret: 'Khẩu súng của cô từng bắn nhầm vào người đồng đội cũ trong một đêm bão tuyết mù mịt, vết thương lòng đó khiến cô luôn ám ảnh phải tập luyện bắn chuẩn xác tuyệt đối đến từng mi-li-mét.'
    },
    specialLore: 'Cú Lộn Nhào Bắn Tỉa Hoàn Hảo: Trong trận phục kích của quân đoàn dị giáo, Violet đã thực hiện cú lộn nhào né loạt đạn pháo rồi bắn một viên đạn xuyên phá kích nổ kho thuốc súng của đối phương cách xa nửa cây số.'
  },
  richter: {
    birthplace: 'Vùng Đất Thợ Săn Quỷ Norman',
    birthday: '30/08',
    height: '184 cm',
    secretProfile: {
      organizationRole: 'Đại Đội Trưởng Thợ Săn Quỷ - Bậc Thầy Thích Ứng Môi Trường',
      otherStory: 'Thích ngồi uống bia đen tại các quán rượu ven đường và lắng nghe những câu chuyện về các loài quái vật bí ẩn từ miệng các thương nhân lữ hành qua lại.',
      secret: 'Thanh kiếm biến sắc của ông hấp thụ ma thuật từ đất, bụi cỏ và dòng nước, nhưng mỗi lần biến đổi trạng thái lại hút đi một phần hơi ấm của trái tim ông khiến ông ngày càng trầm lặng.'
    },
    specialLore: 'Kiếm Khí Đoạt Mệnh: Giữa bãi lầy ngập tràn ma thú phục kích trong đêm mưa, Richter đã biến lưỡi kiếm thành sắc xanh của cỏ độc, tung đường kiếm chém đứt đầu ba con quái vật chỉ trong một nhịp thở ngắn ngủi.'
  },
  alice: {
    birthplace: 'Học Viện Ma Pháp Hoàng Gia Norman',
    birthday: '01/06',
    height: '132 cm',
    secretProfile: {
      organizationRole: 'Tiểu Thư Thần Kỳ - Trợ Thủ Đáng Yêu Nhất Lâu Đài Khởi Nguyên',
      otherStory: 'Thích ôm gấu bông phép thuật bay lơ lửng khắp các hành lang lâu đài và phân phát kẹo sao phát sáng lung linh cho các binh sĩ gác cổng đang mệt mỏi sau ca trực.',
      secret: 'Dù trông như một cô bé tí hon ngây thơ, Alice thực chất mang dòng máu của một pháp sư thời không cổ đại có thể làm chậm cả dòng chảy thời gian của cả một chiến trường rộng lớn.'
    },
    specialLore: 'Lá Chắn Thời Gian Ma Thuật: Khi một quả cầu lửa khổng lồ sắp rơi xuống quảng trường đông đúc, Alice đã dang tay tạo nên vòng tròn ma pháp thời gian khổng lồ làm đóng băng quả cầu lửa giữa không trung cứu sống hàng ngàn người.'
  },
  rourke: {
    birthplace: 'Thị Trấn Thợ Rừng Norman',
    birthday: '12/04',
    height: '187 cm',
    secretProfile: {
      organizationRole: 'Thuyền Trưởng Biên Phòng - Thủ Lĩnh Lực Lượng Tự Vệ Địa Phương',
      otherStory: 'Luôn có một chú chim ưng đậu trên bờ vai rắn chắc; ông thích ngồi bên đống lửa tự tay đẽo những chiếc nỏ gỗ nhỏ xinh cho trẻ em nghèo trong thị trấn biên giới.',
      secret: 'Ông từng là một sĩ quan cấp cao trong quân đội hoàng gia nhưng đã chủ động nộp đơn giải ngũ vì chán ghét những mưu mô tranh giành quyền lực bẩn thỉu chốn cung đình xa hoa.'
    },
    specialLore: 'Tấm Khiên Năng Lượng Thép: Khi quân cướp biển ma quái đổ bộ lên bến cảng thị trấn, Rourke đã bật chiếc nỏ pháo bọc khiên năng lượng lao thẳng vào soái hạm địch, quét sạch boong tàu chỉ bằng vài phát đại bác cận chiến.'
  },
  moren: {
    birthplace: 'Xưởng Cơ Khí Hoàng Gia Norman',
    birthday: '22/10',
    height: '155 cm',
    secretProfile: {
      organizationRole: 'Đại Thợ Rèn Cơ Giới - Viện Trưởng Viện Nghiên Cứu Vũ Khí',
      otherStory: 'Tính tình cực kỳ cộc cằn và nóng nảy nhưng lại có bàn tay khéo léo vô song; ông có thể chế tạo một khẩu súng thần công từ một đống phế liệu sắt rỉ mục nát.',
      secret: 'Khẩu súng đại bác từ trường mà ông tự hào nhất thực chất được chế tạo từ mảnh vỡ của một cỗ máy hủy diệt cổ xưa mà ông vô tình đào được dưới đáy mỏ than bỏ hoang.'
    },
    specialLore: 'Bão Từ Trường Công Nghệ: Bị quân ma thú bao vây trong xưởng rèn, Moren đã ném ra quả lựu đạn từ trường cực mạnh hút toàn bộ vũ khí kim loại của quân địch lại một chỗ rồi bắn nổ tung hủy diệt kẻ thù.'
  },
  kaine: {
    birthplace: 'Lãnh Địa Quý Tộc Bóng Đêm Norman',
    birthday: '27/05',
    height: '185 cm',
    secretProfile: {
      organizationRole: 'Ám Dạ Du Hiệp - Thích Khách Bóng Đêm Hoàng Triều',
      otherStory: 'Luôn khoác chiếc áo choàng bóng tối bí ẩn; chàng thích đứng trên đỉnh các ống khói cao nhất của thành phố để quan sát trật tự đêm đen tĩnh mịch.',
      secret: 'Chàng chính là người thừa kế hợp pháp của một gia tộc quý tộc bị thanh trừng oan uổng năm xưa, chọn cách sống trong bóng tối để bảo vệ công lý mà pháp luật không thể chạm tới.'
    },
    specialLore: 'Đòn Ám Sát Vô Hình: Giữa phòng tiệc canh phòng cẩn mật của tên quan tham nhũng phản quốc, Kaine đã hòa mình vào màn đêm, tung lưỡi dao bóng tối đoạt mạng mục tiêu rồi biến mất như một cơn gió vô hình.'
  },
  stuart: {
    birthplace: 'Thành Phố Ngầm Norman',
    birthday: '01/04',
    height: '182 cm',
    secretProfile: {
      organizationRole: 'Bậc Thầy Hề Quỷ - Thủ Lĩnh Băng Đảng Hỗn Loạn',
      otherStory: 'Luôn mang theo những quả bóng bay phát nổ và những chiếc hộp quà chứa pháo hoa; hắn coi chiến tranh là một vở hài kịch khổng lồ cần những tiếng cười điên loạn vang dội.',
      secret: 'Nụ cười trên khuôn mặt hắn che giấu một bộ óc thiên tài tội phạm với khả năng tính toán quỹ đạo đạn và chất nổ đạt độ chính xác đến từng mi-li-mét một cách rợn người.'
    },
    specialLore: 'Màn Pháo Hoa Cuồng Loạn: Bị bao vây bởi cả một tiểu đoàn quân cảnh, Stuart đã kích hoạt chuỗi hộp quà phát nổ liên hoàn, biến cả quảng trường thành một sân khấu pháo hoa rực rỡ và tẩu thoát trên chiếc dù lượn sắc màu.'
  },
  batman: {
    birthplace: 'Thành Phố Gotham (Liên Minh Khách Mời Norman)',
    birthday: '19/02',
    height: '188 cm',
    secretProfile: {
      organizationRole: 'Hiệp Sĩ Bóng Đêm - Đồng Minh Chiến Lược Lâu Đài Khởi Nguyên',
      otherStory: 'Thường ẩn mình trên những tháp chuông cao nhất của Lâu Đài Khởi Nguyên để ghi chép lại các mối hiểm họa tiềm tàng đe dọa sự an nguy của toàn lục địa Athanor.',
      secret: 'Chàng đã chuẩn bị sẵn một kế hoạch tác chiến vô hiệu hóa cho từng vị tướng hùng mạnh nhất của cả Athanor trong trường hợp họ bị tà thuật thao túng tâm trí làm phản.'
    },
    specialLore: 'Đêm Phán Quyết Bóng Tối: Một mình Batman đã thâm nhập vào mật cứ ngầm của tổ chức tội phạm xuyên quốc gia, vô hiệu hóa toàn bộ hệ thống bẫy rập tinh vi và bắt sống kẻ đầu sỏ trong im lặng tuyệt đối.'
  },
  superman: {
    birthplace: 'Hành Tinh Krypton (Liên Minh Khách Mời Norman)',
    birthday: '29/02',
    height: '191 cm',
    secretProfile: {
      organizationRole: 'Người Đàn Ông Thép - Biểu Tượng Hy Vọng Của Nhân Loại',
      otherStory: 'Rất thích giúp đỡ những người nông dân Norman thu hoạch mùa màng bằng sức mạnh phi thường của mình mà không cần bất kỳ sự đền đáp vật chất nào.',
      secret: 'Nguồn sức mạnh vô tận của chàng phụ thuộc vào năng lượng bức xạ mặt trời vàng; nếu mặt trời bị tà thuật che khuất, thể lực của chàng sẽ suy giảm nghiêm trọng.'
    },
    specialLore: 'Cú Đẩy Bất Khả Thi: Khi một mảnh thiên thạch rực lửa sắp lao xuống phá hủy hoàn toàn thủ đô Norman, Superman đã bay vút lên tầng khí quyển, dùng hai tay chặn đứng và đẩy lùi mảnh thiên thạch vào vũ trụ sâu thẳm.'
  },
  the_flash: {
    birthplace: 'Thành Phố Central (Liên Minh Khách Mời Norman)',
    birthday: '19/05',
    height: '180 cm',
    secretProfile: {
      organizationRole: 'Tia Chớp Đỏ - Sứ Giả Tốc Độ Tối Thượng',
      otherStory: 'Cần nạp một lượng calo khổng lồ mỗi ngày; cậu có thể ăn hết ba mươi cái bánh mì kẹp thịt Norman chỉ trong vòng chưa đầy năm giây đồng hồ ngắn ngủi.',
      secret: 'Tốc độ của cậu có thể xé toạc rào cản thời gian để quay về quá khứ, nhưng cậu luôn tự kiềm chế nghiêm ngặt vì biết rằng thay đổi lịch sử sẽ dẫn đến những nghịch lý thảm họa khôn lường.'
    },
    specialLore: 'Cơn Bão Tốc Độ Cứu Hộ: Trong trận động đất dữ dội làm sụp đổ cả một khu phố cổ, The Flash đã chạy với tốc độ ánh sáng cứu thoát an toàn hơn ba trăm người dân trước khi tòa nhà cuối cùng đổ sụp.'
  },
  wonder_woman: {
    birthplace: 'Đảo Thiên Đường Themyscira (Liên Minh Khách Mời Norman)',
    birthday: '22/03',
    height: '183 cm',
    secretProfile: {
      organizationRole: 'Chiến Binh Bất Tử - Nữ Đại Sứ Hòa Bình Của Amazon',
      otherStory: 'Rất thích đọ kiếm cùng nữ tướng Astrid và chia sẻ những câu chuyện sử thi anh hùng cổ xưa bên đống lửa trại hoàng gia bập bùng.',
      secret: 'Sợi Dây Thừng Chân Thật của nàng có thể buộc bất kỳ ai chạm vào phải nói ra sự thật trần trụi nhất trong tâm can, kể cả những tà thần hùng mạnh nhất của Vực Hỗn Mang.'
    },
    specialLore: 'Bức Tường Khiên Thần Thánh: Đứng trước luồng sóng xung kích hủy diệt của ma quỷ, Wonder Woman bắt chéo hai chiếc vòng tay hộ mệnh, giải phóng luồng sóng thần thánh đẩy lùi toàn bộ bầy quái vật hung tợn.'
  },
  bijan: {
    birthplace: 'Vùng Đất Cát Biên Giới Norman',
    birthday: '14/09',
    height: '186 cm',
    secretProfile: {
      organizationRole: 'Dũng Sĩ Sa Mạc - Chỉ Huy Đội Thiết Sa Chiến Xa',
      otherStory: 'Rất cưng chiều chú thú cưỡi khổng lồ của mình; chàng thường chia sẻ bình nước ngọt duy nhất của mình cho nó giữa cái nắng chang chang của sa mạc cằn cỗi.',
      secret: 'Chàng từng là một nô lệ chiến binh bị ép tham gia các đấu trường sinh tử đẫm máu cho đến khi tự mình đập tan xiềng xích và dẫn đầu cuộc khởi nghĩa nô lệ tự do.'
    },
    specialLore: 'Cú Tông Chiến Xa Định Mệnh: Lái cỗ chiến xa lao thẳng qua bão cát sa mạc mịt mùng, Bijan đã húc tung đội hình kỵ binh bọc giáp của địch, giải cứu đoàn xe cứu trợ của vương quốc an toàn trở về.'
  },
  charlotte: {
    birthplace: 'Đất Nước Của Hoa Lily (Norman Khách Mời)',
    birthday: '12/08',
    height: '172 cm',
    secretProfile: {
      organizationRole: 'Nữ Hiệp Sĩ Hoa Kiếm - Sứ Giả Danh Dự Phương Tây',
      otherStory: 'Luôn giữ tư thế đứng thẳng tắp chuẩn mực của một kỵ sĩ quý tộc danh giá; nàng thích thưởng thức trà hoa hồng sau mỗi buổi luyện kiếm buổi sớm mai.',
      secret: 'Bảy nhát kiếm hình hoa lục giác của nàng là tuyệt kỹ bí truyền gia tộc, chỉ được truyền dạy cho người có trái tim hoàn toàn thuần khiết và kiên định trước mọi cám dỗ.'
    },
    specialLore: 'Lục Giác Hoa Kiếm Đoạt Mệnh: Giữa vòng vây của bầy sói quỷ, Charlotte đã thi triển bảy đường kiếm chớp nhoáng tạo thành đóa hoa kiếm ánh sáng rực rỡ, hạ gục toàn bộ kẻ thù trong một hơi thở thanh nhã.'
  },
  iggy: {
    birthplace: 'Thành Phố Pháp Thuật Norman',
    birthday: '17/01',
    height: '162 cm',
    secretProfile: {
      organizationRole: 'Thần Đồng Hỏa Ma Pháp - Pháp Sư Ngọn Lửa Đen',
      otherStory: 'Có tính cách kiêu kỳ và dễ nổi cáu nếu bị ai đó gọi là "đứa trẻ con"; cậu thích chơi với những quả cầu lửa ma quái lơ lửng trên đầu ngón tay tinh nghịch.',
      secret: 'Cậu mang trong mình dòng máu ma thuật hắc ám bị nguyền rủa từ tổ tiên, khiến ngọn lửa của cậu không thể dập tắt bằng nước thông thường mà chỉ có thể kiểm soát bằng ý chí thép kiên cường.'
    },
    specialLore: 'Cơn Bão Lửa Hủy Diệt: Khi trại huấn luyện bị lũ quái vật đột kích trong đêm, Iggy đã phóng ra những quả cầu lửa đen liên hoàn thiêu rụi toàn bộ doanh trại địch thành tro bụi cứu nguy các đồng môn.'
  },
  garret: {
    birthplace: 'Pháo Đài Biên Cương Norman',
    birthday: '04/10',
    height: '194 cm',
    secretProfile: {
      organizationRole: 'Thiết Vệ Trọng Khiên - Đại Đội Trưởng Tiên Phong Thiết Kỵ',
      otherStory: 'Thích tự mình dùng đá mài bén rìu chiến mỗi tối và luôn mang theo chiếc bánh quy khô của người mẹ già trao tặng trước ngày lên đường tòng quân bảo vệ tổ quốc.',
      secret: 'Tấm khiên thép của ông từng đỡ đòn chí mạng cho vua Arthur trong một trận phục kích ác liệt, mang trên mình vết nứt biểu tượng cho lòng trung thành tuyệt đối của người lính.'
    },
    specialLore: 'Bức Tường Thép Bất Diệt: Một mình Garret dựng chiếc trọng khiên chặn ngang hẻm núi hiểm trở, cản bước hàng ngàn binh sĩ địch suốt năm giờ liền cho đến khi viện binh hoàng gia đến nơi cứu viện.'
  }
};
