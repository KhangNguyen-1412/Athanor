export interface Landmark {
  id: string;
  name: string;
  vietnameseTitle: string;
  factionId: string;
  category: 'veda_temple' | 'norman_realm' | 'afata_realm' | 'lokheim_realm' | 'surrounding_realm';
  position: { x: number; y: number }; // Percentage in 1920x1080 canvas
  iconType: 'temple' | 'castle' | 'academy' | 'tree' | 'abyss' | 'barrier' | 'port' | 'island' | 'desert' | 'dragon' | 'valley';
  shortDesc: string;
  lore: string;
  imageUrl?: string;
  galleryUrls?: string[];
  heroIds: string[];
}

export const ATHANOR_LANDMARKS: Landmark[] = [
  // ==========================================
  // THÁP QUANG MINH (VEDA) — CÁC ĐIỆN THỜ THỦ LĨNH
  // ==========================================
  {
    id: 'veda_central_see',
    name: 'Giáo Đình Trung Ương',
    vietnameseTitle: 'Thánh Điện Tối Cao Của Nữ Thần Ánh Sáng',
    factionId: 'veda',
    category: 'veda_temple',
    position: { x: 44.5, y: 31.8 },
    iconType: 'temple',
    shortDesc: 'Trung tâm quyền lực tối cao của Tháp Quang Minh, ngự trị bởi Nữ Thần Ilumia.',
    lore: 'Giáo Đình Trung Ương ngự trên tầng cao nhất của Tháp Quang Minh, phóng tầm mắt bao quát toàn cõi Athanor. Đây là nơi Nữ Thần Ánh Sáng Ilumia ban bố các thần dụ, duy trì kỷ cương Ánh Sáng và kiểm soát các thế lực dưới trần gian bằng chính sách cứng rắn xen lẫn lôi kéo tinh vi.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    heroIds: ['ilumia', 'edras', 'chaugnar']
  },
  {
    id: 'veda_justice_temple',
    name: 'Điện Công Lý',
    vietnameseTitle: 'Phán Quyết Lôi Quang Khắc Nghiệt',
    factionId: 'veda',
    category: 'veda_temple',
    position: { x: 40.8, y: 34.2 },
    iconType: 'temple',
    shortDesc: 'Nơi phán quyết tội đồ và doanh trại của Lôi Quang Tulen cùng Đội Đặc Nhiệm Ánh Sáng.',
    lore: 'Điện Công Lý là cơ quan hành pháp tối cao của Veda. Tulen sau khi tự lĩnh ngộ lôi quang bẩm sinh đã tiếp quản điện thờ này, lãnh đạo Tiểu Đội Ánh Sáng gồm Laville, Zata, Rouie và Terri săn lùng những kẻ phản bội và chống lại mầm mống ma quỷ.',
    heroIds: ['tulen', 'laville', 'zata', 'rouie', 'terri']
  },
  {
    id: 'veda_gospel_temple',
    name: 'Điện Phúc Âm',
    vietnameseTitle: 'Thánh Địa Luân Hồi & Cứu Chuộc',
    factionId: 'veda',
    category: 'veda_temple',
    position: { x: 48.2, y: 34.2 },
    iconType: 'temple',
    shortDesc: 'Nơi đại diện thần linh cai quản luân hồi và cứu chuộc linh hồn dưới sự dẫn dắt của Lauriel.',
    lore: 'Được canh giữ bởi Đại Thiên Sứ Lauriel cùng Bright - người mang ánh sáng bất tử kế thừa từ Đấng Sáng Tạo Edras. Nơi đây che chở những linh hồn thánh thiện và truyền giảng thông điệp cứu rỗi khắp lục địa.',
    heroIds: ['lauriel', 'bright']
  },
  {
    id: 'veda_wisdom_temple',
    name: 'Điện Trí Tuệ',
    vietnameseTitle: 'Thư Viện Cổ Điển & Ngọn Lửa Thiêng',
    factionId: 'veda',
    category: 'veda_temple',
    position: { x: 42.0, y: 37.8 },
    iconType: 'temple',
    shortDesc: 'Nơi cất giữ thư tịch cổ đại và ngọn lửa thiêng của Đại Hiền Triết Ignis.',
    lore: 'Đại Hiền Triết Ignis đã dành trọn cuộc đời nghiên cứu Ngọn Lửa Thiêng tại đây. Trí tuệ thần thánh từ điện thờ này là ngọn hải đăng soi sáng cho các học giả và thánh đồ trước những cạm bẫy của bóng tối.',
    heroIds: ['ignis']
  },
  {
    id: 'veda_wealth_temple',
    name: 'Điện Tài Phá',
    vietnameseTitle: 'Huyết Mạch Tài Chính & Hoàng Kim',
    factionId: 'veda',
    category: 'veda_temple',
    position: { x: 47.0, y: 37.8 },
    iconType: 'temple',
    shortDesc: 'Ngân khố của Veda do Đại Gia Gildur cai quản với quyền lực hoàng kim tuyệt đối.',
    lore: 'Điện Tài Phá nắm giữ kho vàng vô tận và huyết mạch tài chính của lục địa. Gildur gia nhập Veda vì khát khao quyền lực và danh vọng tối cao, biến vàng ròng thành thứ vũ khí trói buộc cả lòng người lẫn ma quỷ.',
    heroIds: ['gildur']
  },
  {
    id: 'veda_cloud_temple',
    name: 'Điện Mây Phủ',
    vietnameseTitle: 'Thánh Đồ Tu Luyện & Hộ Pháp Veda',
    factionId: 'veda',
    category: 'veda_temple',
    position: { x: 44.5, y: 39.8 },
    iconType: 'temple',
    shortDesc: 'Tầng tu luyện của Jinna, Yorn, Enzo và sứ giả hộ mệnh Xeniel.',
    lore: 'Khu vực thanh tịnh nơi Đại thiền sư Jinna bảo vệ chuỗi hạt luân hồi, Xạ thủ Thần mặt trời Yorn rèn luyện cung thuật, Enzo thực thi công lý thẩm mỹ, và Sứ đồ Xeniel luôn sẵn sàng xả thân che chở thánh địa.',
    heroIds: ['yorn', 'xeniel', 'enzo', 'jinna']
  },

  // ==========================================
  // RỪNG NGUYÊN SINH (AFATA) — LỤC ĐỊA ELBORN & 5 ĐỊA DANH HUYỀN THOẠI
  // ==========================================
  {
    id: 'afata_verno_forest',
    name: 'Rừng Verno (Verno Forest)',
    vietnameseTitle: 'Thần Rừng Cổ Thụ & Thông Thương Lộ',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 14.2, y: 48.0 },
    iconType: 'tree',
    shortDesc: 'Khu rừng đại cổ thụ linh thiêng với các vòng đai giáp hộ vệ, rễ phát sáng ngọc bích và con đường thông thương huyết mạch.',
    lore: 'Nằm tại trung tâm Rừng Nguyên Sinh, Rừng Verno là mái nhà của các đại thụ cổ thụ ngàn năm tuổi. Thân cây được tộc tinh linh rèn đúc các vòng đai giáp kim loại elven bảo vệ vững chắc. Mạch rễ khổng lồ bò trên đá phát ra ánh sáng ngọc lục bảo huyền ảo. Xuyên qua tán rừng là Thông thương lộ lát đá — tuyến giao thương cổ xưa nối liền Afata với các vùng đất lân cận, nơi có Vòng tròn cự thạch Druid tôn nghiêm canh giữ linh hồn đất mẹ.',
    imageUrl: '/landmarks/afata/verno_forest.png',
    galleryUrls: ['/landmarks/afata/verno_forest.png', '/landmarks/afata/Rừng Verno.png'],
    heroIds: ['tel_annas', 'krixi', 'ybneth', 'elandorr']
  },
  {
    id: 'afata_verno_valley',
    name: 'Sơn Cốc Verno (Verno Valley)',
    vietnameseTitle: 'Thung Lũng Nhà Trên Cây & Suối Tinh Thể',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 13.0, y: 53.0 },
    iconType: 'tree',
    shortDesc: 'Thung lũng lòng chảo thanh bình với các chòi gỗ tổ thụ trên ngọn cây, dòng suối uốn lượn và thảm tinh thể ma pháp phát quang.',
    lore: 'Nép mình giữa các dãy núi đá sừng sững, Sơn cốc Verno là nơi sinh sống yên bình nhất của các bộ tộc Afata. Những ngôi nhà gỗ, nhà tổ chim mộc mạc được xây dựng bám vào thân và chạc rễ đại thụ, nối với nhau bằng cầu treo và thang dây. Dưới thung lũng, dòng suối nhỏ trong vắt len lỏi qua thảm cỏ rực rỡ những cụm tinh thể dạ quang màu lam ngọc phát sáng êm dịu trong bóng hoàng hôn.',
    imageUrl: '/landmarks/afata/verno_valley.png',
    galleryUrls: ['/landmarks/afata/verno_valley.png', '/landmarks/afata/Sơn cốc Verno.png'],
    heroIds: ['krixi', 'helen', 'payna', 'aya']
  },
  {
    id: 'afata_elda_river',
    name: 'Sông Elda (Elda River)',
    vietnameseTitle: 'Dòng Sông Biên Giới & Phân Định Hai Thái Cực',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 21.0, y: 56.5 },
    iconType: 'valley',
    shortDesc: 'Dòng sông chiến lược chia cắt Afata thanh bình (rào rễ cây, phế tích elven) và Vực Hỗn Mang (núi lửa, dung nham rực lửa).',
    lore: 'Dòng sông Elda là chiến tuyến tự nhiên ngăn cách Rừng Nguyên Sinh với bờ cõi hắc ám của Vực Hỗn Mang. Một bên bờ tây là rừng rậm nguyên sinh với những rào chắn rễ cây cổ thụ đan kết kiên cố cùng phế tích cổng vòm elven cổ kính; bên bờ đông đối diện là vùng tử địa hoang tàn với đá bazan nứt nẻ, dòng nham thạch đỏ rực rỉ ra từ lòng đất và vũ khí chiến trường cắm xiên sau những trận thư hùng khốc liệt.',
    imageUrl: '/landmarks/afata/elda_river.png',
    galleryUrls: ['/landmarks/afata/elda_river.png', '/landmarks/afata/Sông Elda.png'],
    heroIds: ['tel_annas', 'lumburr', 'maloch', 'volkath', 'omen']
  },
  {
    id: 'afata_elborn_cliffs',
    name: 'Vách Núi Elborn (Elborn Cliffs)',
    vietnameseTitle: 'Vách Đá Rễ Thần Thụ & Động Cổ Tinh Thể',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 9.0, y: 45.0 },
    iconType: 'valley',
    shortDesc: 'Dãy vách đá karst cao chọc trời quấn rễ cây cổ thụ khổng lồ, động đá khắc phù điêu và vỉa thạch anh lam ngọc.',
    lore: 'Vươn cao sừng sững ở phía tây lục địa Elborn, Vách núi Elborn là kỳ quan địa chất hùng vĩ bị sương mù vĩnh cửu che phủ. Những rễ thần thụ khổng lồ cuộn chặt quanh các trụ đá karst như những con rồng hóa thạch. Trong vách đá là hệ thống hang động cổ ngữ khắc ghi bí thuật thiên nhiên, nơi các vỉa tinh thể thạch anh phát quang rực rỡ cạnh những dòng thác nước đổ từ đỉnh cao xuống lòng hồ Elborn trong vắt.',
    imageUrl: '/landmarks/afata/elborn_cliffs.png',
    galleryUrls: [
      '/landmarks/afata/elborn_cliffs.png',
      '/landmarks/afata/elborn_lake.png',
      '/landmarks/afata/Vách núi Elborn.png'
    ],
    heroIds: ['lumburr', 'ybneth', 'kilgroth']
  },
  {
    id: 'afata_verno_mountains',
    name: 'Sơn Mạch Verno (Verno Mountains)',
    vietnameseTitle: 'Bức Tường Đá Răng Cưa Vĩ Đại Phương Bắc',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 16.5, y: 39.5 },
    iconType: 'valley',
    shortDesc: 'Dãy núi đá nhọn hoắt điệp trùng che chở toàn bộ Rừng Nguyên Sinh khỏi những cơn gió lạnh và thế lực phương bắc.',
    lore: 'Sơn mạch Verno là bức tường thành tự nhiên vĩ đại nhất của Rừng Nguyên Sinh. Dãy núi đá răng cưa trải dài trùng điệp với các đỉnh chóp chạm mây trời, ôm trọn những thảm rừng bạt ngàn xanh thẳm dưới chân dốc. Đây là chướng ngại địa hình bất khả xâm phạm, bảo vệ hệ sinh thái thần tiên của Afata khỏi mọi thế lực ngoại bang suốt hàng vạn năm.',
    imageUrl: '/landmarks/afata/verno_mountains.png',
    galleryUrls: ['/landmarks/afata/verno_mountains.png', '/landmarks/afata/Sơn mạch Verno.png'],
    heroIds: ['tel_annas', 'lumburr', 'baldum']
  },
  {
    id: 'afata_world_tree',
    name: 'Cây Thế Giới (World Tree)',
    vietnameseTitle: 'Trái Tim Rừng Nguyên Sinh & Thần Thụ Khởi Nguyên',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 13.3, y: 46.5 },
    iconType: 'tree',
    shortDesc: 'Cổ thụ tinh thể thần thánh với thân xoắn đôi phát sáng, ôm trọn các tinh cầu sinh mệnh và vươn tán cánh vũ bao trùm Biển Hoa Linh.',
    lore: 'Ngự trị tại trung tâm lòng chảo Rừng Nguyên Sinh (Lục Địa Elborn), Cây Thế Giới là cội nguồn của toàn bộ sinh mệnh và ma thuật thiên nhiên trên cõi Athanor. Thân cây là cấu trúc xoắn đôi tinh thể phát quang rực rỡ, ôm trọn lấy 4 tinh cầu sinh mệnh thuần khiết. Tán cây xòe rộng như đôi cánh phượng hoàng thần thoại phát ra ánh sáng lam ngọc, tưới xuống những thác ánh sáng nhiệm màu nuôi dưỡng Biển Hoa Linh và che chở Nữ Hoàng Tinh Linh Tel’Annas cùng muông thú cõi Elborn.',
    imageUrl: '/landmarks/afata/dawn_world_tree.png',
    galleryUrls: ['/landmarks/afata/dawn_world_tree.png', '/landmarks/afata/Tổ thụ bình minh.png'],
    heroIds: ['tel_annas', 'krixi', 'payna', 'helen', 'ybneth']
  },
  {
    id: 'afata_sea_of_flowers',
    name: 'Biển Hoa Linh (Sea of Spirit Flowers)',
    vietnameseTitle: 'Thảm Hoa Tinh Linh Lam Ngọc Dưới Chân Thần Thụ',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 16.8, y: 51.5 },
    iconType: 'tree',
    shortDesc: 'Thung lũng thảm hoa tinh linh 6 cánh lung linh tỏa sắc ngọc lam huyền ảo dưới chân Cây Thế Giới.',
    lore: 'Trải rộng khắp lòng chảo núi lửa dưới bóng mát của Cây Thế Giới, Biển Hoa Linh là cánh đồng hoa ma thuật tinh khôi bậc nhất Athanor. Những đóa hoa linh 6 cánh sắc lam ngọc và trắng tinh khôi tỏa hương thanh khiết, phản chiếu ánh sáng nhiệm màu của thần thụ. Mỗi khi gió ngàn thổi qua, ngàn vạn cánh hoa và bụi sáng phát quang bay lượn tạo nên cảnh tượng thần tiên say đắm lòng người.',
    imageUrl: '/landmarks/afata/Sơn cốc Verno.png',
    heroIds: ['krixi', 'aya', 'elandorr', 'payna', 'helen']
  },
  {
    id: 'afata_genesis_spring',
    name: 'Suối Nguồn Ánh Sáng (Spring of Light)',
    vietnameseTitle: 'Thung Lũng Nước Thiêng Tinh Khiết & Trái Tim Sinh Mệnh Afata',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 18.0, y: 52.5 },
    iconType: 'tree',
    shortDesc: 'Thung lũng nước thiêng lọt thỏm giữa rễ cây thần thụ Y’bneth, nơi sinh ra các tinh linh bướm tiên và được thần hộ mệnh Payna, Helen chữa lành vạn vật.',
    lore: 'Suối Nguồn Ánh Sáng nằm sâu trong vùng trung tâm lõi của Khu Rừng Chạng Vạng (Rừng Nguyên Sinh Elborn) ở phía Tây của Lục địa Athanor. Đây là thung lũng nước thiêng lọt thỏm giữa những rễ cây cổ thụ khổng lồ của Thần thụ Y’bneth, nơi dòng suối chảy qua vách đá thạch anh phát quang đổ xuống hồ nước trong vắt với màn sương ánh sáng lấp lánh bao phủ. Nơi đây là trái tim sinh mệnh của toàn bộ tộc Afata, cái nôi của các tinh linh bướm tiên (giống Krixi) và được bảo bọc bởi thần hộ mệnh Payna cùng Helen dưới sự trị vì của Nữ Hoàng Tel’Annas.',
    imageUrl: '/landmarks/afata/Sông Elda.png',
    heroIds: ['tel_annas', 'krixi', 'payna', 'helen', 'ybneth', 'lumburr', 'aya', 'elandorr']
  },
  {
    id: 'afata_wildwood',
    name: 'Rừng Thẳm Thú Tộc',
    vietnameseTitle: 'Lãnh Địa Hoang Dã & Thủy Tộc',
    factionId: 'afata',
    category: 'afata_realm',
    position: { x: 10.5, y: 55.5 },
    iconType: 'tree',
    shortDesc: 'Rừng rậm và duyên hải phía tây do các chiến binh thú tộc và đại dương trấn thủ.',
    lore: 'Vùng biên cương rừng rậm bảo hộ bởi Kil’Groth, Cresht đại dương cùng những thợ săn nhanh nhẹn như Fennik, Slimz, tạo thành tiền đồn tự nhiên ngăn chặn mọi kẻ xâm lăng.',
    imageUrl: '/landmarks/afata/Vách núi Elborn.png',
    heroIds: ['kilgroth', 'cresht', 'fennik', 'slimz', 'teeri']
  },

  // ==========================================
  // VƯƠNG QUỐC NORMAN & CÁC VÙNG LÂN CẬN
  // ==========================================
  {
    id: 'norman_capital',
    name: 'Thành Khởi Nguyên (Norman Castle)',
    vietnameseTitle: 'Viên Ngọc Quý Của Văn Minh Nhân Loại & Cửa Ngõ Chặn Đứng Vực Hỗn Mang',
    factionId: 'norman',
    category: 'norman_realm',
    position: { x: 69.5, y: 56.0 },
    iconType: 'castle',
    shortDesc: 'Thủ phủ tối cao của loài người tại trung tâm phía nam Athanor, án ngữ trước Vực Hỗn Mang với hào sâu tự nhiên, lâu đài cơ giới và sự trị vì của Vua Thane.',
    lore: 'Thành Khởi Nguyên (Lâu Đài Khởi Nguyên) tọa lạc ở khu vực trung tâm phía Nam của Lục địa Athanor, nằm kiên cố trên một vùng đồng bằng rộng lớn, án ngữ ngay trước cửa ngõ dẫn tới Vực Hỗn Mang. Tòa thành được bảo vệ bởi hệ thống sông ngòi tạo thành các hào sâu tự nhiên và những bức tường thành đá khổng lồ. Nơi đây kết hợp hài hòa kiến trúc vương quyền châu Âu hoành tráng với công nghệ khoa học đột phá của Lâu Đài Cơ Giới. Dưới sự trị vì của Đức Vua Thane (Thanh Gươm Anh Dũng), Thành Khởi Nguyên là biểu tượng của liên minh Okka - Norman - Tân Liên Hiệp, quy tụ lực lượng chiến mã bọc thép hoàng gia, khí cầu cơ giới tuần tra và chim cơ máy trinh sát.',
    imageUrl: '/landmarks/norman_kingdom.jpg',
    heroIds: ['thane', 'astrid', 'butterfly', 'violet', 'valhein', 'raz', 'mortos', 'florentino', 'quillen', 'amily', 'veres', 'rourke', 'moren']
  },
  {
    id: 'carano_academy',
    name: 'Học Viện Ma Pháp Carano',
    vietnameseTitle: 'Cái Nôi Pháp Sư Vĩ Đại & Pháo Đài Ma Thuật Giữa Sông Losarth',
    factionId: 'carano',
    category: 'norman_realm',
    position: { x: 58.0, y: 47.5 },
    iconType: 'academy',
    shortDesc: 'Pháo đài ma thuật biệt lập giữa dòng sông Losarth tại biên giới phía bắc Vương quốc Norman, nổi bật với Tam Đại Tháp chọc trời và thần thú Tí Nị của Ishar.',
    lore: 'Học viện Ma pháp Carano tọa lạc ở phía Đông Nam Lục địa Athanor, tại khu vực biên giới phía Bắc của Vương quốc Norman. Được bao bọc hoàn toàn bởi dòng sông Losarth rộng lớn, học viện biến thành một hòn đảo/pháo đài đường thủy tự nhiên tách biệt với thế giới bên ngoài nhằm bảo đảm an toàn cho các nghiên cứu ma thuật nguy hiểm. Học viện do Hội đồng Pháp thuật gồm Tam Cự Đầu (Hiệu trưởng Dirak, D’Arcy, Sephera) quản lý, sở hữu các phòng thí nghiệm lơ lửng, Người Đá hộ vệ canh gác bờ sông, Tinh linh nguyên tố bay lượn, bé gấu thần thú Tí Nị của Ishar và Gia tộc Tiên cá bơi lội dưới dòng Losarth.',
    imageUrl: '/landmarks/carano_academy.jpg',
    galleryUrls: ['/landmarks/carano_academy.jpg', '/landmarks/carano_bridge.jpg', '/landmarks/carano_delante.jpg'],
    heroIds: ['dirak', 'darcy', 'sephera', 'ishar', 'keera', 'paine', 'lorion', 'bright', 'bonnie', 'annette']
  },
  {
    id: 'twilight_valley',
    name: 'Thung Lũng Chạng Vạng',
    vietnameseTitle: 'Tiền Tuyến Thung Lũng Sương Mờ',
    factionId: 'norman',
    category: 'norman_realm',
    position: { x: 64.0, y: 65.5 },
    iconType: 'valley',
    shortDesc: 'Vùng thung lũng hiểm trở bên ngoài thành Norman, tiền tuyến đối đầu với bóng tối.',
    lore: 'Nằm chắn giữa kinh đô Norman và vùng hoang dã, Thung Lũng Chạng Vạng là nơi diễn ra các cuộc chạm trán khốc liệt. Đây cũng là nơi gắn liền với câu chuyện định mệnh của Allain, Sinestrea và Dextra trong cuộc chiến sinh tử.',
    heroIds: ['allain', 'sinestrea', 'dextra']
  },
  {
    id: 'okka_kingdom',
    name: 'Vương Quốc Okka (Okka Kingdom)',
    vietnameseTitle: 'Vương Quốc Lập Quốc Đầu Tiên Của Loài Người & Cái Nôi Hiệp Sĩ Cổ Xưa',
    factionId: 'norman',
    category: 'norman_realm',
    position: { x: 44.5, y: 56.5 },
    iconType: 'castle',
    shortDesc: 'Vương quốc lâu đời nhất của loài người tọa lạc tại biên giới Đồng bằng Ánh Trăng và Rừng Elborne, nổi bật với lâu đài đá thô, kỵ binh bọc giáp và Thánh Kiếm của Vua Arthur.',
    lore: 'Vương quốc Okka là vương quốc lập quốc đầu tiên và lâu đời nhất của loài người trên lục địa Athanor. Lãnh thổ Okka tọa lạc tại biên giới giữa Đồng bằng Ánh Trăng (Moonlit Plains) và Rừng Nguyên Sinh Elborne (Elborne Woods). Nằm kẹp giữa đồng bằng lộng gió và rừng già, địa hình Okka đan xen đồng cỏ cao, đồi thấp và rìa rừng rậm rạp tạo thành hàng rào phòng thủ tự nhiên vững chắc. Trung tâm vương quốc sừng sững tòa lâu đài đá thô kiên cố của Vua Arthur, tượng đài Thánh Kiếm công lý, cờ hiệu hiệp sĩ vương quyền cùng hệ sinh thái độc đáo: giống chiến mã bọc giáp nặng huyền thoại và những chú hươu ánh sáng thần thoại dịu thuần từ rừng Elborne.',
    heroIds: ['arthur', 'roxie', 'florentino']
  },
  {
    id: 'free_federation',
    name: 'Tân Liên Hiệp (The Free Federation)',
    vietnameseTitle: 'Thủ Phủ Khoa Học Kỹ Thuật, Xưởng Đúc Khổng Lồ & Khát Vọng Tự Do',
    factionId: 'tan_lien_hiep',
    category: 'norman_realm',
    position: { x: 62.0, y: 78.0 },
    iconType: 'castle',
    shortDesc: 'Thành phố cơ giới hiện đại ở phía Đông Nam Athanor với xưởng đúc khổng lồ của Moren, hệ thống đường ray monorail, người máy chiến đấu và chim cơ máy trinh sát.',
    lore: 'Tân Liên Hiệp (The Federation of Free Peoples) là siêu thế lực đại diện cho sự phát triển vượt bậc của khoa học kỹ thuật, công nghệ cơ giới và khát vọng tự do của con người. Tọa lạc ở phía Đông Nam Lục địa Athanor, địa hình nơi đây được cơ giới hóa bằng sắt thép với Thành phố Cơ Giới (Steel City), xưởng đúc luyện kim khổng lồ của Đại Sư Moren, mạng lưới đường ống năng lượng ma thạch và tuyến đường ray xe lửa trên cao (monorail). Nơi đây được vận hành bởi Hội đồng Tự Do gồm Moren, Thị trưởng Rourke, Max, Wisp cùng dàn chiến binh cơ giới tinh anh.',
    heroIds: ['moren', 'rourke', 'max', 'wisp', 'celica', 'capheny', 'brunhilda', 'quillen', 'veres', 'errol', 'skud']
  },
  {
    id: 'norman_outer_forts',
    name: 'Hệ Thống Thành Trì Bao Quanh',
    vietnameseTitle: 'Vành Đai Pháo Đài Phía Đông',
    factionId: 'norman',
    category: 'norman_realm',
    position: { x: 76.5, y: 62.0 },
    iconType: 'castle',
    shortDesc: 'Chuỗi pháo đài vệ tinh kiên cố bảo vệ biên ải phía đông của vương quốc.',
    lore: 'Hệ thống pháo đài đá vôi trải dài ngăn cách bình nguyên Norman với biên giới hoang vu, là tấm lá chắn đầu tiên báo động và chặn đứng quân đoàn sa đọa.',
    heroIds: ['mortos', 'valhein', 'astrid']
  },

  // ==========================================
  // VỰC HỖN MANG (LOKHEIM) & MÀN PHÉP THUẬT TRẤN GIỮ
  // ==========================================
  {
    id: 'carano_barrier',
    name: 'Màn Phép Thuật Trấn Giữ (Carano Ward)',
    vietnameseTitle: 'Kết Giới Đại Phong Ấn Quỷ Dữ Carano',
    factionId: 'carano',
    category: 'lokheim_realm',
    position: { x: 87.5, y: 69.4 },
    iconType: 'barrier',
    shortDesc: 'Màn chắn ma thuật khổng lồ bao trùm toàn bộ Vực Hỗn Mang do các pháp sư Học viện Carano lập nên để ngăn quỷ dữ tràn ra.',
    lore: 'Trải dài dọc theo biên giới phía đông của Norman và bao trùm trọn vẹn toàn cõi Vực Hỗn Mang, màn phép thuật này là một kết giới năng lượng cổ ngữ vĩ đại. Các pháp sư tinh anh của Học viện Carano ngày đêm truyền năng lượng duy trì phong ấn, cô lập quân đoàn ác quỷ sa đọa bên trong kết giới không cho thoát ra ngoài.',
    heroIds: ['darcy', 'dirak', 'sephera']
  },
  {
    id: 'lokheim_dark_throne',
    name: 'Vực Hỗn Mang (The Abyss)',
    vietnameseTitle: 'Hang Ổ Đen Tối Tộc Lokheim & Ngai Vàng Của Chúa Tể Volkath',
    factionId: 'lokheim',
    category: 'lokheim_realm',
    position: { x: 92.5, y: 69.5 },
    iconType: 'abyss',
    shortDesc: 'Hang ổ đen tối nằm sâu dưới lòng đất với khe nứt nham thạch, khí độc lưu huỳnh, ngai vàng của Chúa tể Volkath cùng 4 đại ác ma lĩnh chủ và bầy trùng quỷ Kriknak.',
    lore: 'Vực Hỗn Mang (Abyss) là hang ổ đen tối của tộc Lokheim, đại diện cho phe phản diện chính mang dã tâm hủy diệt và nuốt chửng toàn cõi Athanor. Địa hình nơi đây nằm sâu dưới lòng đất với những khe nứt địa chất khổng lồ cô lập khỏi ánh mặt trời, ngập tràn nham thạch nóng chảy, dòng sông độc tố và đá hắc diện thạch. Nơi đây do Chúa Tể Hắc Ám Volkath cai trị tối cao cùng Bốn Ác Ma Lĩnh Chủ (Maloch, Veera, Marja, Kahlii), sở hữu hệ sinh thái tà ác: loài trùng quỷ giáp thép của Kriknak, quỷ đói ăn xác Grakk, dị chủng hóa thú và các linh hồn oán hận rên xiết.',
    heroIds: ['volkath', 'maloch', 'veera', 'marja', 'kahlii', 'kriknak', 'grakk', 'mganga', 'preyta', 'omen', 'zephys', 'nakroth']
  },
  {
    id: 'lokheim_blood_marsh',
    name: 'Huyết Đầm Lầy & Địa Ngục',
    vietnameseTitle: 'Vùng Đất Tăm Tối Của Độc Dược & Sa Đọa',
    factionId: 'lokheim',
    category: 'lokheim_realm',
    position: { x: 91.5, y: 82.0 },
    iconType: 'abyss',
    shortDesc: 'Doanh trại quỷ dữ và vùng đầm lầy độc chết người của Mganga và Preyta.',
    lore: 'Nơi sản sinh những thí nghiệm ma thuật đen tối và dịch bệnh kinh hoàng. Quân đoàn sa đọa tập hợp tại đây luôn tìm cách khoét sâu vào các điểm yếu của màn phong ấn.',
    heroIds: ['mganga', 'preyta', 'mina', 'taara', 'arduin', 'skud', 'natalya']
  },
  {
    id: 'lokheim_rift',
    name: 'Vết Nứt Không Gian (The Rift)',
    vietnameseTitle: 'Cổng Âm Ngục Tối & Lưỡi Hái Tử Thần',
    factionId: 'lokheim',
    category: 'lokheim_realm',
    position: { x: 94.5, y: 59.0 },
    iconType: 'abyss',
    shortDesc: 'Cánh cổng kết nối cõi chết do Zephys, Nakroth và Omen canh giữ.',
    lore: 'Vực thẳm không đáy nơi linh hồn tội lỗi bị đày ải. Những sứ giả thần chết Nakroth và Zephys thu nạp linh hồn để phục vụ cho ngai vàng bóng tối.',
    heroIds: ['zephys', 'nakroth', 'omen', 'hayate']
  },

  // ==========================================
  // CÁC VÙNG ĐẤT PHỤ CẬN (BẮC & ĐÔNG BẮC)
  // ==========================================
  {
    id: 'pearl_haven',
    name: 'Hải Linh Trấn (Sea Breeze Town)',
    vietnameseTitle: 'Thị Trấn Cảng Biển Lộng Gió & Phong Thuật Duyên Hải',
    factionId: 'hai_linh_tran',
    category: 'norman_realm',
    position: { x: 77.5, y: 65.5 },
    iconType: 'port',
    shortDesc: 'Phía đông nam lục địa Athanor, bờ biển Vương quốc Norman. Vùng biển lộng gió với ngọn hải đăng lớn.',
    lore: 'Thị trấn cảng biển bình dị do con người làm chủ, vận hành bởi Hội đồng ngư dân. Nằm tại vùng khí lưu giao thoa thường xuyên đón nhận những trận bão bất chợt, đây là nơi Pháp sư Annette dùng phong thuật ma pháp xua tan giông bão, bảo vệ tàu bè. Cùng với chàng thủy thủ Ata lướt sóng, đàn chim hải âu ánh sáng dẫn đường và hàng triệu sinh vật phù du phát quang ven vịnh, Hải Linh Trấn là bến cảng thanh bình ngập tràn sức sống.',
    heroIds: ['annette', 'ata', 'yan', 'dolia', 'hainuo']
  },
  {
    id: 'mist_island',
    name: 'Đảo Sương Mù (Mist Island)',
    vietnameseTitle: 'Thánh Địa Ninja Cô Lập & Khế Ước Thái Cổ Long',
    factionId: 'dao_suong_mu',
    category: 'surrounding_realm',
    position: { x: 46.5, y: 18.5 },
    iconType: 'island',
    shortDesc: 'Phía nam Biển Ánh Sáng, ngay phía bắc núi thánh Mount Orphean. Màn sương vĩnh cửu bao phủ.',
    lore: 'Hòn đảo hiểm trở cô lập giữa Biển Ánh Sáng (Sea of Holy Light), tiền đồn quân sự hải ngoại tối mật của Tháp Quang Minh. Quanh năm chìm trong màn sương mù huyền bí đóng vai trò lớp khiên ngụy trang cho tộc Ninja khỏi thế lực tà ác. Nơi đây từng ký khế ước thiêng liêng với Thái Cổ Long (Ancient Dragon) - Thần Long cổ đại hộ quốc truyền Long Hồn cho các thế hệ Airi, Aoi và đại đao kiếm khách Tachi trấn thủ các vách đá trước những quái vật biển sâu hung tợn.',
    imageUrl: '/landmarks/mist_island.jpg',
    galleryUrls: [
      '/landmarks/mist_island.jpg',
      '/place/viesnap.vn_tiktok_7350886617642503426-20.jpeg'
    ],
    heroIds: ['airi', 'ryoma', 'aoi', 'tachi', 'hayate']
  },
  {
    id: 'helios_desert',
    name: 'Sa Mạc Helios',
    vietnameseTitle: 'Biển Cát Hoàng Kim & Đế Chế Cổ Đại Phía Bắc',
    factionId: 'sa_mac_helios',
    category: 'surrounding_realm',
    position: { x: 68.0, y: 25.0 },
    iconType: 'desert',
    shortDesc: 'Tuốt ở phía bắc của Vương quốc Norman và Tháp Quang Minh, biển cát cát cháy.',
    lore: 'Vương triều cổ đại từng rực rỡ dưới ánh mặt trời sa mạc. Nơi đây chôn vùi bí mật của Cát Bụi Vĩnh Hằng, nơi Hoàng tử Murad với Thanh Gươm Thời Gian và Nữ sát thủ Yena chiến đấu giải phóng vương triều khỏi tà ma Azzen’Ka.',
    heroIds: ['murad', 'azzenka', 'yena']
  },
  {
    id: 'dragon_kingdom',
    name: 'Vương Quốc Rồng (Long Chi Quốc)',
    vietnameseTitle: 'Vùng Đất Tiên Cảnh Non Nước Của Mưa, Sương & Hoàng Quyền',
    factionId: 'long_chi_quoc',
    category: 'surrounding_realm',
    position: { x: 72.5, y: 21.5 },
    iconType: 'dragon',
    shortDesc: 'Vương quốc cổ trang phương Đông mang phước lành của mưa xuân, sương khói và hoàng cung nguy nga.',
    lore: '“Vương quốc được đặt tên theo loài rồng, nhưng không thấy bóng dáng loài rồng. Rồng không tồn tại giữa trời và đất, nó tồn tại trong lòng mỗi con người ở đây.” Nằm ở phía Đông Lục địa Athanor, biệt lập cách xa Tháp Quang Minh và kề sát Đế quốc Helios, Vương Quốc Rồng là tiên cảnh non nước trù phú ngập tràn sắc hoa đào, thác nước và mưa xuân nhẹ bao phủ quanh năm. Tương truyền hai linh thú bảo hộ vĩ đại là Thần Long Mây Mù (Mist Dragon) và Thần Long Mưa Thuần (Rain Dragon) đã hy sinh hóa giải lời nguyền độc địa của giáo sĩ Helios, một rồng hồi sinh đất đai, một rồng hóa kết giới vô hình bảo vệ bờ cõi. Hiện tại, vương quyền loài người đang biến động dữ dội bởi cuộc tranh ngai vàng giữa Thập công chúa Yue và Hoàng tử Ji, nơi các kỳ tài như võ sĩ quyền pháp Qi (Võ quán Sùng Minh) và họa sư ma pháp Yan (Họa phái Mộng Sơn với thần bút và hạc giấy ma thuật) hội tụ bảo vệ tương lai vương quốc.',
    imageUrl: '/landmarks/dragon_kingdom.jpg',
    galleryUrls: [
      '/landmarks/dragon_kingdom.jpg',
      '/place/viesnap.vn_tiktok_7350886617642503426-25.jpeg'
    ],
    heroIds: ['yue', 'yan', 'qi', 'trieu_van', 'lu_bo', 'dieu_thuyen', 'ngo_khong']
  }
];

// 4 Đại Thế Lực Chính cho chế độ nhìn bao quát (Macro Overview)
export interface MajorFactionMacro {
  id: string;
  name: string;
  vietnameseTitle: string;
  position: { x: number; y: number };
  color: string;
  accentColor: string;
  shortDesc: string;
  focusTarget: { x: number; y: number };
}

export const MAJOR_FACTIONS_MACRO: MajorFactionMacro[] = [
  {
    id: 'veda',
    name: 'THÁP QUANG MINH',
    vietnameseTitle: 'Thánh Địa Trung Tâm Của Ánh Sáng & Tín Ngưỡng',
    position: { x: 44.5, y: 41.5 },
    color: '#eab308',
    accentColor: '#fef08a',
    shortDesc: 'Ngự ở chính giữa bản đồ, ngọn tháp thiên giới với khối chóp tam giác lật ngược xoay 3D và luồng sáng rực rỡ thấu mây xanh.',
    focusTarget: { x: 44.5, y: 35.5 }
  },
  {
    id: 'afata',
    name: 'RỪNG NGUYÊN SINH',
    vietnameseTitle: 'Lục Địa Elborn & Cội Nguồn Cây Thế Giới',
    position: { x: 13.5, y: 57.0 },
    color: '#22c55e',
    accentColor: '#86efac',
    shortDesc: 'Vùng miệng núi lửa xanh thẫm phía tây, nơi Cây Thế Giới tinh thể phát sáng rực rỡ bên Biển Hoa Linh.',
    focusTarget: { x: 13.3, y: 50.2 }
  },
  {
    id: 'norman',
    name: 'VƯƠNG QUỐC NORMAN',
    vietnameseTitle: 'Đế Đô Loài Người & Học Viện Ma Pháp Carano',
    position: { x: 67.0, y: 58.0 },
    color: '#3b82f6',
    accentColor: '#93c5fd',
    shortDesc: 'Bình nguyên trù phú phía đông, vương thành Khởi Nguyên kiên cố cùng pháo đài vệ tinh.',
    focusTarget: { x: 67.0, y: 58.0 }
  },
  {
    id: 'lokheim',
    name: 'VỰC HỖN MANG',
    vietnameseTitle: 'Cõi Âm Sa Đọa Sau Màn Phép Thuật Trấn Giữ',
    position: { x: 93.0, y: 70.0 },
    color: '#ef4444',
    accentColor: '#fca5a5',
    shortDesc: 'Toàn bộ vùng đất quỷ dữ phía đông bị bao trùm và phong ấn bởi Màn Phép Thuật Carano.',
    focusTarget: { x: 93.0, y: 70.0 }
  }
];
