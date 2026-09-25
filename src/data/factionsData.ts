import type { Faction } from '../types/athanor';

export const FACTIONS_DATA: Record<string, Faction> = {
  veda: {
    id: 'veda',
    name: 'Tháp Quang Minh (Veda)',
    englishName: 'Veda / Temple of Light',
    subtitle: 'Thánh Địa Tối Cao Của Ánh Sáng, Tín Ngưỡng & Trật Tự Vĩnh Cửu',
    leader: 'Nữ Thần Ánh Sáng Ilumia & Đấng Sáng Tạo Edras (Đã Mất)',
    territory: 'Đỉnh núi Orsen lơ lửng giữa biển mây và các điện thờ Thiên giới',
    description: 'Nơi ngự trị của các vị thần ánh sáng, nắm giữ nguồn năng lượng khởi nguyên của Athanor, chia thành 6 khu vực cai quản trật tự và đức tin của lục địa.',
    lore: `Tháp Quang Minh (Veda) ngự trị trên đỉnh núi Orsen thiêng liêng, khởi nguyên do Đấng Sáng Tạo Edras kiến thiết cùng luật Ánh Sáng. Sau khi Edras bị đồ đệ phản đồ Volkath sát hại, quyền lực tối cao được chuyển giao cho Nữ Thần Ilumia đứng đầu Giáo Đình Trung Ương. 

Tháp Quang Minh được phân định thành các khu vực quyền lực nghiêm ngặt:
1. Giáo Đình Trung Ương (Ilumia): Nắm thực quyền tối cao, điều hành toàn bộ vương quốc bằng chính sách cứng rắn xen lẫn lôi kéo tinh vi.
2. Điện Phúc Âm (Lauriel): Nơi truyền bá tín ngưỡng, đại diện thần linh cai quản luân hồi và cứu chuộc linh hồn.
3. Điện Công Lý (Tulen): Phụ trách phán quyết hình pháp. Dù bị người thầy Aleister ghen tị bỏ mặc, Tulen tự tu luyện lôi quang bẩm sinh, kế thừa ngôi đền và lùng diệt kẻ phản bội.
4. Điện Trí Tuệ (Ignis): Nơi lưu trữ văn tự cổ và nghiên cứu Ngọn Lửa Thiêng đánh thức chân hỏa.
5. Điện Tài Phá (Gildur): Nắm giữ ngân khố và huyết mạch tài chính của lục địa, đến với Veda vì danh vọng và quyền lực tột đỉnh.
6. Điện Mây Phủ (Tầng Lớp Thánh Đồ): Nơi tu luyện của Đại thiền sư Jinna (bảo vệ chuỗi hạt luân hồi), Yorn (Mũi tên mặt trời), Enzo (Kẻ hành quyết thẩm mỹ hóa sự tra tấn), và Xeniel (sứ giả xả thân chắn đòn cứu Ilumia khỏi Nakroth & Zephys).

Dưới trướng Tulen còn có Tiểu Đội Ánh Sáng gồm Laville, Zata (Dạ Ưng Tộc khát khao gỡ phong ấn đôi cánh), Rouie (pháp sư không gian) và Terri (sĩ quan tình báo). Bên cạnh đó, Bright - đệ tử chân truyền cuối cùng mang sức mạnh bất tử của Edras - đang gánh vác sứ mệnh tiêu diệt hoàn toàn bóng tối Volkath.`,
    ideals: ['Trật Tự Ánh Sáng', 'Tín Ngưỡng Vĩnh Hằng', 'Phán Quyết Tối Cao'],
    color: '#0284c7',
    secondaryColor: '#007ba7',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [0, 8, -6],
    keyLandmarks: [
      'Giáo Đình Trung Ương (Ilumia)',
      'Điện Phúc Âm (Lauriel)',
      'Điện Công Lý (Tulen)',
      'Điện Trí Tuệ (Ignis)',
      'Điện Tài Phá (Gildur)',
      'Điện Mây Phủ (Thánh Đồ)'
    ],
    heroIds: [
      'ilumia', 'lauriel', 'tulen', 'bright', 'yorn',
      'xeniel', 'ignis', 'gildur', 'jinna', 'enzo',
      'laville', 'zata', 'rouie', 'terri', 'omega',
      'ngo_khong', 'edras', 'chaugnar', 'toro', 'ormarr'
    ]
  },

  lokheim: {
    id: 'lokheim',
    name: 'Vực Hỗn Mang (Lokheim)',
    englishName: 'Lokheim / The Abyss',
    subtitle: 'Vương Triều Bóng Tối & Ngọn Lửa Bất Diệt Của Các Kẻ Phản Bội Sa Đọa',
    leader: 'Chúa Tể Hắc Ám Volkath & Ma Vương Maloch',
    territory: 'Vết nứt không gian Lokheim, Huyết Đầm Lầy và Cõi Âm Ngục Tối',
    description: 'Vùng đất tăm tối dưới lòng đất Athanor, nơi hội tụ 5 vị Thủ Lĩnh Tối Cao từng xuất thân từ Tháp Quang Minh cùng các quân đoàn sa đọa khát máu.',
    lore: `Bất ngờ thay, toàn bộ 5 vị Thủ Lĩnh Tối Cao đứng đầu Vực Hỗn Mang đều từng xuất thân từ Tháp Quang Minh (phe Ánh Sáng) nhưng đã ly khai vì những ân oán khác nhau:
1. Volkath (Chúa Tể Hắc Ám): Từng là học trò của Edras và là tù binh Tháp Quang Minh. Hắn khám phá nguồn sức mạnh Hắc Ám nguyên thủy, vùng lên lật đổ ách thống trị của Ánh Sáng và khai sinh Vực Hỗn Mang.
2. Maloch (Ma Vương Quản Ngục): Bạn thân của Volkath, cùng rời bỏ Veda, nuốt chửng bóng tối để trở thành Vua địa ngục tàn bạo.
3. Veera (Nữ Vương Ma Tộc): Từng là bán thần rất được yêu mến ở Veda, cô theo Volkath trở thành chiến lược gia mưu mô thu nạp nhân tài.
4. Marja (Oán Hồn Vực Thẳm): Nữ thần Tháp Quang Minh, người yêu của Volkath. Vì tình yêu, cô bị Veda tra tấn dã man cho đến khi được ma năng của Volkath cứu thoát và hóa thân thành oán linh vực thẳm.
5. Kahlii (Nữ Tư Tế): Cựu nữ tư tế từ bi, vì căm phẫn sự vô tâm của thần linh trước thống khổ của con người nên đã hóa hận thù, chuyên cướp đoạt linh hồn.

Bộ máy quân sự Vực Hỗn Mang gồm 4 lực lượng nòng cốt:
- Quân Đoàn Của Veera: Mganga (hề tàn độc), Preyta (kỵ sĩ dịch bệnh), Mina (vật tế được Veera giải cứu), Taara (bị Tháp Quang Minh bóc lột, Gildur quỵt thưởng tống giam nên gieo mình vào bóng tối), Arduin (thủ lĩnh nhân loại bị ngọn lửa băng giá biến thành cỗ máy vô hồn), Skud, Natalya (đồ sát kẻ khinh miệt để gia nhập Vực Thẳm), và Raz (từng là gián điệp của Ánh Sáng cài vào).
- Quân Đoàn Hỗn Mang (Maloch): Nakroth (quý tộc sa đọa đi tìm sức mạnh trả thù) và Grakk (quỷ đói nuốt linh hồn).
- Quân Đoàn Trùng Ảnh (Marja): Zephys (tử thần thu thập vong linh) và Kriknak (bọ sát thủ trung thành).
- Độc Hành Giả: Omen (cỗ máy chém cuồng sát), Zip (ma thú đặc biệt của Veera), Aleister (cựu thiên tài Veda bị Veera quyến rũ), Hayate (ninja phản bội để giải phóng Đảo Sương Mù) và Errol (bị linh hồn Volkath chiếm cứ sau khi mất anh trai).`,
    ideals: ['Tự Do Tuyệt Đối', 'Sức Mạnh Tối Thượng', 'Báo Thù Ánh Sáng'],
    color: '#c43d3b',
    secondaryColor: '#991b1b',
    bannerUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [-8, -2, 6],
    keyLandmarks: [
      'Ngai Vàng Hắc Ám Volkath',
      'Vực Thẳm Địa Ngục Maloch',
      'Điện Mưu Lược Của Veera',
      'Huyết Trì Trùng Ảnh Marja',
      'Ngục Tối Linh Hồn Nakroth'
    ],
    heroIds: [
      'volkath', 'maloch', 'veera', 'marja', 'kahlii',
      'mganga', 'preyta', 'mina', 'taara', 'arduin',
      'skud', 'natalya', 'raz', 'nakroth', 'grakk',
      'zephys', 'kriknak', 'omen', 'zip', 'aleister',
      'hayate', 'errol', 'lorion'
    ]
  },

  afata: {
    id: 'afata',
    name: 'Khu Rừng Nguyên Sinh (Afata)',
    englishName: 'Twilight Forest / Afata',
    subtitle: 'Thánh Địa Của Tinh Linh, Sợi Dây Nhân Duyên & Suối Nguồn Sinh Mệnh',
    leader: "Nữ Vương Tinh Linh Tel'Annas",
    territory: 'Đại ngàn Afata hoang sơ, Suối Nguồn Sinh Mệnh và Rừng Verno',
    description: 'Vương quốc của loài Tinh linh, Cổ thụ và Thần thú hộ mệnh, nơi bảo vệ sự hài hòa của đại tự nhiên và điều phối các sợi dây Nhân Duyên của vạn vật.',
    lore: `Khu Rừng Nguyên Sinh (Rừng Chạng Vạng - Afata) là lá phổi xanh bất diệt của đại lục Athanor, đứng đầu bởi Nữ Vương Tinh Linh Tel'Annas. Trong trận chiến Hắc Ám đầu tiên, mũi tên định mệnh của Tel'Annas đã bắn gục chúa tể Volkath, nhưng vết thương ô nhiễm hắc ám buộc bà phải tự phong ấn vào giấc ngủ ngàn năm. Khi thức giấc, Tel'Annas thuần hóa được tà khí và tiếp tục dẫn dắt muôn loài.

Các lực lượng bảo vệ và cư dân của Rừng Nguyên Sinh:
1. Nữ Vương & Các Vị Thần Bảo Vệ: Tel'Annas, Krixi (lãnh tụ thủ vệ quân kiêm bạn thân Nữ Vương), Zill (ma phong ba tình nguyện canh giấc ngủ ngàn năm), Lumburr (khổng lồ lục địa), Zuka (đại sư gấu trúc tị nạn từ Long Chí Quốc), TeeMee (hai chú chồn hiệp sĩ), Baldum (nhân mã cổ đại), Helen (kế thừa Payna làm Thần hộ vệ biển hoa), Lindis (tư tế nguyệt tộc mang sức mạnh chị gái Luna trao lại), Arum (nữ tu sĩ sư tử), và Dyadia (tinh linh Nhân Duyên - người thao túng các sợi dây liên kết vô hình, ban phát Lương Duyên và trừng phạt bằng Ác Duyên).
2. Những Người Con Rời Khỏi Rừng: Thương nhân lọc lõi Slimz, Fennik siêu tốc, Đồ tể Kil'Groth liên minh báo thù Taara, Thủy quái Cresht, Đại thụ Y'bneth bảo hộ Rừng Verno, Krizzix ẩn nấp, Dextra (cùng Sinestrea lưu lạc đến Tân Liên Hiệp), Eland'orr (học viên trao đổi sang Học Viện Carano) và bé sóc hóa người Aya.
3. Nhân Vật Đã Hy Sinh Oanh Liệt: Thần linh hộ mệnh Payna - sư phụ của Helen và tri kỷ của Lauriel, đã hy sinh thân mình khi bảo vệ biển hoa trước đợt tấn công tàn bạo của Veera và Aleister.`,
    ideals: ['Bảo Hộ Sinh Mệnh', 'Sợi Dây Nhân Duyên', 'Cân Bằng Sinh Thái'],
    color: '#007ba7',
    secondaryColor: '#0284c7',
    bannerUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [8, 0, -4],
    keyLandmarks: [
      "Cổ Thụ Thế Giới Tel'Annas",
      'Biển Hoa Tinh Linh Helen',
      'Đền Nguyệt Tộc Lindis',
      'Suối Nguồn Nhân Duyên Dyadia',
      "Đại Ngàn Verno Y'bneth"
    ],
    heroIds: [
      'telannas', 'krixi', 'zill', 'lumburr', 'zuka',
      'teemee', 'baldum', 'helen', 'payna', 'lindis',
      'arum', 'dyadia', 'slimz', 'fennik', 'kilgroth',
      'cresht', 'ybneth', 'krizzix', 'elandorr', 'aya',
      'tamyn'
    ]
  },

  norman: {
    id: 'norman',
    name: 'Lâu Đài Khởi Nguyên, Norman & Okka',
    englishName: 'Castle of Dawn, Norman Kingdom & Okka',
    subtitle: 'Thành Trì Kiên Cường Của Nhân Loại & Ngọn Lửa Ý Chí Bất Diệt',
    leader: 'Vua Arthur (Cựu vương Khởi Nguyên, Vua Okka) & Vua Hiệp Sĩ Thane',
    territory: 'Bờ sông Don, Kinh đô Lâu Đài Khởi Nguyên, Norman & Dãy Núi Thép Okka',
    description: 'Khối liên minh của loài người gồm Lâu Đài Khởi Nguyên, Vương Quốc Norman và Vương Quốc Okka - nơi khai sinh trật tự hiệp sĩ và bảo vệ nền văn minh nhân loại.',
    lore: `Lịch sử nhân loại trên Athanor gắn liền với hai vị vua vĩ đại và ba thực thể vương quyền:
1. Lâu Đài Khởi Nguyên: Khởi lập bởi Vua Arthur - vị vua đầu tiên của loài người đã lãnh đạo chặn đứng hàng trăm cuộc tiến công của Ma vương Maloch, sáng lập Trật tự Hiệp Sĩ. Về sau Arthur bị Maloch hãm hại biến thành xác khô Mortos; nhờ Thane đánh bại và Lauriel dùng suối nguồn ánh sáng thanh tẩy, ngài đã phục hồi và đến cai trị Vương Quốc Okka. Ngai vàng Khởi Nguyên được kế thừa bởi Vua Thane (Thanh gươm anh dũng), người đoàn kết các hiệp sĩ như Nữ Bá Tước Astrid (Gia tộc Hoa Hồng), Raz (điệp viên dũng cảm), Valhein (thợ săn quỷ), và Rourke.
2. Vương Quốc Norman: Trung tâm của tầng lớp quý tộc hào nhoáng và chiến binh thiện chiến. Nơi đây sản sinh kiếm khách phong lưu Florentino (người ăn chơi nhưng giúp vận hành kinh tế thành phố), Nakroth (quý tộc bất bình giới cầm quyền mà gia nhập Lokheim), tiểu công chúa Alice, và sát thủ lính đánh thuê Butterfly. Ngoài ra còn có Allain (người từng bị Hội Ám Hoàng bắt làm vật thí nghiệm và mất trí nhớ), thợ săn quỷ Richter, Errol (mang cánh tay ác ma), cùng hai hắc ma pháp sư nguy hiểm: Iggy và Lorion (khối ma thạch hắc ám nuôi mộng biến Tân Liên Hiệp thành Vực Hỗn Mang thứ hai).
3. Vương Quốc Okka: Nơi Vua Arthur đang trị vì. Đây cũng là nơi sinh ra Bright (truyền nhân cuối cùng của Edras), thiên thần Xeniel, thiền sư Jinna, và đặc biệt là Taara - nữ thủ lĩnh bộ tộc Dãy Núi Thép từng lập công bảo vệ biên giới nhưng bị Gildur (Tháp Quang Minh) quỵt thưởng, tống giam và tăng sưu thuế dã man khiến cô uất hận dâng linh hồn cho bóng tối Maloch.`,
    ideals: ['Danh Dự Hiệp Sĩ', 'Ý Chí Tự Chủ', 'Không Đầu Hàng Số Mệnh'],
    color: '#c43d3b',
    secondaryColor: '#007ba7',
    bannerUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [-6, 3, -2],
    keyLandmarks: [
      'Pháo Đài Lâu Đài Khởi Nguyên',
      'Đại Cung Điện Vương Quốc Norman',
      'Thành Phố Chiến Binh (Butterfly & Allain)',
      'Dãy Núi Thép Okka (Cố Hương Taara)',
      'Thung Lũng Hoa Hồng Astrid'
    ],
    heroIds: [
      'arthur', 'thane', 'florentino', 'astrid', 'allain',
      'butterfly', 'valhein', 'violet', 'richter', 'alice',
      'rourke', 'moren', 'kaine', 'bijan', 'charlotte',
      'iggy', 'garret'
    ]
  },

  carano: {
    id: 'carano',
    name: 'Học Viện Ma Pháp Carano',
    englishName: 'Carano Academy of Magic',
    subtitle: 'Khai Sáng Tri Thức Ma Đạo Tối Thượng & Bảo Vệ Hòa Bình Tri Thức',
    leader: "Bộ Ba Viện Trưởng D'Arcy, Dirak & Sephera",
    territory: 'Tháp nổi Ma Pháp trên Dòng Sông Lô huyền bí',
    description: 'Học viện ma pháp trung lập lừng danh lơ lửng trên dòng Sông Lô — nơi giảng dạy ba trường phái không gian, nguyên tử và sinh mệnh cho những pháp sư xuất chúng nhất Athanor.',
    lore: `Học Viện Ma Pháp Carano được lập sau cuộc tấn công tàn bạo của các hắc ma pháp sư, ngự trị trên tòa tháp ma thuật kỳ diệu lơ lửng tại Sông Lô. Tam Đại Viện Trưởng gồm ba nhà huyền học vĩ đại:
1. Tòa Thư Viện D'Arcy (Không Gian): Pháp sư không gian-thời gian bậc thầy, từng bị cuốn vào vết rách thứ nguyên hỗn mang của Volkath và vượt qua giới hạn loài người để thuần thục ma thuật thứ nguyên.
2. Tòa Nguyên Tử Dirak (Nguyên Tố): Đại pháp sư nguyên tử có thể triệu hồi sức mạnh các nguyên tố cơ bản của vũ trụ, là cột sống phòng thủ của học viện.
3. Tòa Ranh Giới Sephera (Sinh Mệnh): Nữ pháp sư điều khiển ranh giới sinh và tử, đã giải cứu Keera khỏi bàn tay của Lorion hắc ám.

Đội ngũ giảng dạy và học viên ưu tú:
- Liliana (Cửu vĩ yêu hồ dạy bùa ngải quyến rũ), Paine (Nhạc trưởng điều khiển linh hồn).
- Học viên: Ishar (tiểu thư tài năng cùng thú cưng Tí Nị), Annette (ma pháp gió), Ata (mang Hải Hồn Chi Châu), Keera (bán tinh linh được Sephera giải cứu từ Lorion), Eland'orr (học viên trao đổi từ Rừng Afata).
- Elsu (thần điêu bắn tên Học Viện, tuần tra bầu trời bảo vệ tháp nổi).`,
    ideals: ['Tri Thức Là Ánh Sáng', 'Trung Lập & Học Thuật', 'Bảo Vệ Thế Giới'],
    color: '#0284c7',
    secondaryColor: '#007ba7',
    bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [4, 5, 4],
    keyLandmarks: [
      "Tòa Thư Viện D'Arcy (Không Gian)",
      'Tòa Nguyên Tử Dirak (Nguyên Tố)',
      'Tòa Ranh Giới Sephera (Sinh Mệnh)',
      'Phòng Thí Nghiệm Liliana & Paine',
      'Thư Khố Ma Thuật Cổ Đại'
    ],
    heroIds: [
      'd_arcy', 'dirak', 'sephera', 'keera', 'ishar',
      'annette', 'ata', 'paine', 'liliana', 'elandorr',
      'elsu'
    ]
  },

  tan_lien_hiep: {
    id: 'tan_lien_hiep',
    name: 'Tân Liên Hiệp',
    englishName: 'The Free Federation',
    subtitle: 'Đô Thị Cơ Giới Mildar & Cuộc Chiến Ngầm Chống Hội Ám Hoàng Tàn Bạo',
    leader: 'Đại Sư Moren (Mildar) & Nữ Hùng Goverra (Gia Tộc Vidu)',
    territory: 'Thành Bang Cơ Khí Mildar, Thủ Đô Casanova & Quân Xưởng Vidu',
    description: 'Liên Bang Tự Do tân tiến bậc nhất Athanor — nơi hội tụ các thiên tài cơ khí ma thạch, thám tử súng trường và những anh hùng dũng cảm đối đầu với Hội Ám Hoàng cực đoan.',
    lore: `Tân Liên Hiệp là khối liên minh dân chủ tân tiến nhất Athanor, được hình thành từ ba nhánh quyền lực:
1. Thành Bang Cơ Khí Mildar (Đại Sư Moren): "Đại gia đình cơ khí" của người thợ lùn thiên tài Moren — người chế tạo đến 50% số vũ khí mạnh nhất lục địa. Các đệ tử xuất sắc: Max (áo giáp chiến đấu), Wisp (ma thú cơ giới), Celica (nữ kiếm sĩ máy), Roxie (khoa học gia vũ khí), Capheny (nữ pháo thủ đào thoát từ Hội Ám Hoàng).
2. Gia Tộc Vidu & Goverra: Vidu là tập đoàn quân sự vũ khí lớn nhất Tân Liên Hiệp. Khi những kẻ thoái hóa trong gia tộc đã thỏa hiệp làm tay sai cho Hội Ám Hoàng, nữ cường nhân Goverra đã đứng lên tuyên chiến công khai trên sóng truyền hình, dùng năng lượng ma thạch Andura siêu tần số quét sạch bóng tối.
3. Khu Phế Tích Quân Xưởng & Bonnie: Cô bé thiên tài Bonnie bị giam cầm tại quân xưởng bí mật, đã dũng cảm gắn mảnh đá Andura vào thú bông để bảo vệ bạn bè: "Tất cả núp sau lưng tớ, tớ sẽ bảo kê!". Nhờ lõi Andura siêu cấp bùng nổ, Bonnie cứu thoát đám trẻ.
4. Hội Ám Hoàng & Những Kẻ Thù Ngầm: Tổ chức cực đoan muốn diệt chủng dị tộc do Quillen (thủ lĩnh bóng tối) và Thorne (đặc vụ phản diện) điều hành. Amily và những người trẻ trung thành dũng cảm chống lại bóng tối từ bên trong.`,
    ideals: ['Tự Do Công Nghệ', 'Đoàn Kết Chống Bạo Quyền', 'Tiến Bộ Andura'],
    color: '#c43d3b',
    secondaryColor: '#007ba7',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [6, 3, 7],
    keyLandmarks: [
      'Đại Xưởng Cơ Khí Mildar (Moren)',
      'Tập Đoàn Quân Sự Vidu (Goverra)',
      'Thủ Đô Hoa Lệ Casanova',
      'Khu Phế Tích Quân Xưởng (Bonnie)',
      'Bản Doanh Chống Hội Ám Hoàng'
    ],
    heroIds: [
      'max', 'wisp', 'celica', 'roxie', 'capheny',
      'goverra', 'bonnie', 'moren'
    ]
  },

  long_chi_quoc: {
    id: 'long_chi_quoc',
    name: 'Vương Quốc Rồng (Long Chí Quốc)',
    englishName: 'Dragon Kingdom',
    subtitle: 'Đất Thánh Của Dòng Huyết Long Cổ Đại & Quyền Bá Vương Phương Bắc',
    leader: 'Thập Công Chúa Yue & Chiến Thần Lữ Bố',
    territory: 'Vùng đất phương Bắc hùng vĩ của Đại Lục Athanor, Long Chí Quốc',
    description: 'Đất thánh của hai con Rồng Cổ đại đã hy sinh dựng lên vương quốc. Nơi đây sản sinh những anh hùng mang huyết mạch rồng thiêng và các mưu sĩ quyền mưu xoay chuyển vận mệnh.',
    lore: `Vương Quốc Rồng (Long Chí Quốc) nằm ở rìa phía Bắc đại lục, được hình thành từ sự hy sinh của hai con Rồng Cổ đại huyền thoại:
- Rồng Sinh Mệnh hóa thân thành núi sông và đất đai màu mỡ nuôi dưỡng sự sống muôn loài.
- Rồng Trí Tuệ dựng lên bức tường thành bất khả xâm phạm bảo vệ vương quốc rồi biến mất vào hư vô.

Xưa kia Long Chí Quốc đã đánh bại cuộc xâm lăng tàn bạo của Đế Quốc Helios và lời nguyền cát bụi. Những nhân vật vĩ đại xuất thân từ đây:
- Thập Công Chúa Yue: Mưu lược thâm sâu, mang bảo vật Lục Hào Phiến huyền bí, điều phối cục diện quyền lực vương triều Long Chí Quốc bằng trí tuệ hơn bạo lực.
- Lữ Bố (Chiến Thần Long Tộc): Mang dòng huyết cựu long Farnir, sức mạnh vô song bất bại. Điêu Thuyền đã hóa giải Long tộc trớ chú cho hắn nhưng phải rời xa vì hắn ngày càng khát máu điên cuồng.
- Điêu Thuyền: Mỹ nhân sở hữu pháp thuật siêu việt, đã hy sinh hạnh phúc để gỡ phong ấn cho Lữ Bố.
- Qi (Sùng Minh Quyền), Ryoma (rửa oan cho cha), Yan (họa sĩ Mộng Sơn với Sơn Hà Đồ và nửa kiếm gãy), Triệu Vân (tráng sĩ trung thành).`,
    ideals: ['Huyết Mạch Rồng Thiêng', 'Quyền Bá Phương Bắc', 'Danh Dự Cổ Xưa'],
    color: '#c43d3b',
    secondaryColor: '#d97706',
    bannerUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    logoUrl: '/theluc/Vương quốc rồng.png',
    emblemUrl: '/theluc/vuongquocrong.png',
    coordinates3D: [9, 0, 2],
    keyLandmarks: [
      'Hoàng Cung Long Chí Quốc (Yue)',
      'Võ Đài Chiến Thần Lữ Bố',
      'Sơn Môn Danh Họa Yan (Sơn Hà Đồ)',
      'Bãi Tập Qi & Ryoma',
      'Lăng Mộ Hai Rồng Cổ Đại'
    ],
    heroIds: [
      'yue', 'lu_bo', 'dieu_thuyen', 'qi', 'ryoma',
      'yan', 'trieu_van', 'zuka'
    ]
  },

  dao_suong_mu: {
    id: 'dao_suong_mu',
    name: 'Đảo Sương Mù',
    englishName: 'Mist Island',
    subtitle: 'Bí Thuật Ninja Cổ Truyền & Khế Ước Thiên Long Bất Khả Xâm Phạm',
    leader: 'Hokage Tachi (Thái Cổ Thần Long) & Airi (Ninja Trưởng)',
    territory: 'Quần Đảo Sương Mù huyền bí với Thiên Long Các linh thiêng',
    description: 'Vương quốc Ninja bí ẩn với khế ước thiên long ngàn năm — nơi tôi luyện những chiến binh hộ quốc tuyệt đỉnh mang dấu ấn Rồng Thiêng và bí thuật nhẫn thuật thâm sâu.',
    lore: `Đảo Sương Mù là xứ sở bí ẩn của dòng họ Ninja hộ quốc với khế ước thiên long lịch sử tại Thiên Long Các:
1. Tachi (Hiện Thân Thái Cổ Thần Long): Đại Hanzo đời thứ nhất, hiện thân của Thần Long cổ đại, mang Long Tước Bội Đao huyền thoại. Tachi ký kết khế ước với Tháp Quang Minh (Veda) thay mặt Đảo Sương Mù, dùng sức mạnh rồng thiêng dẫn dắt và ban phúc cho các thế hệ Ninja xuất sắc.
2. Airi (Ninja Trưởng Dấu Ấn Rồng): Mang Dấu Ấn Rồng trong huyết mạch, đã thi triển nhát chém Rồng Thiêng chí mạng khiến Ma Vương Maloch trọng thương phải rút lui khỏi Tháp Quang Minh.
3. Hayate (Ninja Phản Bội): Anh trai Airi, vì uất hận bản khế ước bất công ép tộc nhân chết oan cho Veda ngạo mạn đã bắt tay với Vực Hỗn Mang nhằm chặt đứt xiềng xích phong ấn — dù biết điều này đẩy cả đảo vào tay bóng tối.
4. Aoi (Long Trảo Thần Lực): Ninja mang móng vuốt rồng thiêng bí thuật.
5. Các Thành Viên: Ming (pháp sư ma pháp nước), Erin, Bill, Gark, Wiro — những Ninja và chiến binh bảo vệ đảo qua nhiều thế hệ.`,
    ideals: ['Bí Thuật Ninja', 'Khế Ước Thiên Long', 'Bảo Vệ Hòa Bình'],
    color: '#0284c7',
    secondaryColor: '#7c3aed',
    bannerUrl: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [11, 1, 5],
    keyLandmarks: [
      'Thiên Long Các (Khế Ước Tachi)',
      'Đền Ninja Trưởng Airi',
      'Võ Đường Nhẫn Thuật Cổ Truyền',
      'Vực Sương Mù Bí Ẩn',
      'Tháp Canh Biển Đảo'
    ],
    heroIds: [
      'airi', 'tachi', 'aoi', 'ming', 'erin',
      'bill', 'gark', 'wiro'
    ]
  },

  hai_linh_tran: {
    id: 'hai_linh_tran',
    name: 'Hải Linh Trấn',
    englishName: 'Pearl Haven / Mermaid Cove',
    subtitle: 'Khúc Hát Nhân Ngư Bất Tử & Tình Yêu Vượt Qua Định Mệnh Nghiệt Ngã',
    leader: 'Tư Tế Nhân Ngư Dolia & Nhà Thần Linh Hainuo',
    territory: 'Vịnh Biển Hải Linh Trấn và Đại Dương Dưới Nước',
    description: 'Vùng duyên hải huyền thoại của Tộc Nhân Ngư — nơi diễn ra thiên tình sử vượt định mệnh giữa Tư tế Dolia và Nhà Thần Linh Hainuo bằng sức mạnh biển cả bất diệt.',
    lore: `Hải Linh Trấn là nơi giao thoa giữa biển cả huyền bí và vùng duyên hải hoa lệ, gắn liền với thiên sử thi lay động lòng người:

Dolia & Hainuo — Tình Yêu Vượt Định Mệnh:
Khi quái vật biển cổ đại thức tỉnh uy hiếp Tộc Nhân Ngư, Tư tế Dolia đã cất lên "Khúc Hát Nhân Ngư" huyền diệu — nghi thức hy sinh bắt buộc phải xóa sạch hoàn toàn mọi ký ức về người mình yêu để bài ca phát huy tối đa sức mạnh. Dolia chấp nhận đánh đổi tình yêu để cứu nguy đồng loại. Thế nhưng Hainuo — người mang Sợi Dây Định Mệnh và cuốn Nhật Ký Tình Yêu quý giá — đã dùng ma pháp thời không bẻ gãy quy luật định mệnh nghiệt ngã, mở cánh cổng trùng phùng và trao cho Dolia chiếc vương miện ánh sáng dưới bầu trời pháo hoa rực rỡ.`,
    ideals: ['Tình Yêu Bất Tử', 'Biển Cả Vô Tận', 'Tri Kỷ Trọn Kiếp'],
    color: '#0369a1',
    secondaryColor: '#38bdf8',
    bannerUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [13, -2, 6],
    keyLandmarks: [
      'Cung Điện Nhân Ngư Dưới Nước (Dolia)',
      'Bến Cảng Pháo Hoa Định Mệnh (Hainuo)',
      'Vịnh Tình Yêu Nhân Ngư',
      'Đài Quan Sát Thủy Triều',
      'Rạn San Hô Ngàn Năm'
    ],
    heroIds: [
      'dolia', 'hainuo'
    ]
  },

  sa_mac_helios: {
    id: 'sa_mac_helios',
    name: 'Sa Mạc Helios',
    englishName: 'Helios Empire / Sun Desert',
    subtitle: 'Vương Triều Mặt Trời Rực Rỡ & Lời Thề Phục Quốc Giữa Biển Cát',
    leader: 'Hoàng Tử Murad & Thủ Lĩnh Nghĩa Quân Yena',
    territory: 'Biển Cát Vàng Helios, Đại Điện Mặt Trời Cổ Đại và Đài Thiên Văn Thời Không',
    description: 'Vương triều sa mạc từng hưng thịnh rực rỡ dưới ánh thái dương, nay chìm trong bão cát bởi tà thần Azzen\'Ka và đang trỗi dậy mạnh mẽ qua ngọn lửa phục quốc của Murad và Yena.',
    lore: `Sa Mạc Helios là vùng đất cát vàng huyền bí nằm giữa đại lục Athanor, nơi từng ngự trị một nền văn minh sa mạc rực rỡ với bí thuật điều khiển cát và dòng chảy thời gian:

1. Sự Trỗi Dậy và Bi Kịch Sụp Đổ Của Hoàng Triều:
Đế quốc Helios từng thống trị hoang mạc trù phú nhờ Thần Khí Thời Không do tổ tiên hoàng tộc nắm giữ. Sự thịnh vượng này khơi dậy lòng tham và sự đố kỵ của Azzen'Ka — tà thần cát cổ đại thức tỉnh từ vực sâu hoang mạc. Hắn triệu hồi đại bão cát nuốt chửng toàn bộ kinh thành hoa lệ, sát hại phụ vương Murad và biến vương quốc trù phú thành biển cát chết cằn cỗi chỉ trong một đêm định mệnh.

2. Ngọn Lửa Phục Quốc & Lời Thề Bán Nguyệt:
Hoàng tử Murad may mắn thoát nạn, khoác lên mình tấm khăn lãng khách mang theo thanh Đoản Đao Không Gian tàn tạ, thề báo thù diệt quốc. Cùng thời điểm đó, Yena — đệ nhất vũ cơ hoàng cung kiêm nghĩa sĩ sa mạc — cởi bỏ xiêm y lụa, cầm lấy đôi Bán Nguyệt Đao tập hợp những chiến binh sống sót thành lập Nghĩa Quân Sa Mạc. Giữa phong ba bão cát, Murad và Yena kề vai sát cánh, thổi bùng ngọn lửa kháng chiến quyết giành lại Thần Khí và tái thiết vương triều Helios huy hoàng.`,
    ideals: ['Phục Hưng Vương Triều', 'Thần Khí Thời Không', 'Ý Chí Bất Khuất'],
    color: '#d97706',
    secondaryColor: '#f59e0b',
    bannerUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [12.5, 1.8, 6.2],
    keyLandmarks: [
      'Đại Điện Mặt Trời Helios',
      'Đài Thiên Văn Thời Không (Murad)',
      'Căn Cứ Nghĩa Quân Sa Mạc (Yena)',
      'Vực Cát Tử Thần (Azzen\'Ka)',
      'Ốc Đảo Hoàng Gia Cổ Đại'
    ],
    heroIds: [
      'murad', 'azzen_ka', 'yena'
    ]
  },

  hoi_am_hoang: {
    id: 'hoi_am_hoang',
    name: 'Hội Ám Hoàng',
    englishName: 'Shadow Hand',
    subtitle: 'Bóng Tối Thanh Trừng & Hội Kín Sát Thủ Ma Pháp Ngầm',
    leader: 'Thống Lĩnh Tối Cao Quillen',
    territory: 'Tổng Hành Dinh Ngầm Tân Liên Hiệp & Mật Điện Ám Hoàng',
    description: 'Hội kín sát thủ bí mật do Nghị viên Quillen thành lập và chỉ huy, thao túng các hoạt động ngầm của đại lục nhằm đảm bảo vị thế độc tôn của nhân loại bằng kỷ luật máu và ám sát tàn khốc.',
    lore: `Hội Ám Hoàng (Shadow Hand) là tổ chức ngầm quyền lực và bí hiểm bậc nhất Athanor, ẩn mình dưới danh nghĩa các cơ quan lập pháp của Tân Liên Hiệp nhưng thực tế vận hành như một cỗ máy ám sát quy mô lớn:

1. Lý Tưởng & Kỷ Luật Sắt Của Quillen:
Nghị viên Quillen — một chính trị gia xuất chúng mang tư tưởng cực đoan về sự thuần khiết của giống loài con người. Với niềm tin rằng nhân loại chỉ có thể sinh tồn và thống trị nếu tiêu diệt mọi mối đe dọa từ Tinh Linh, Bán Nhân và Ác Ma, Quillen đã bí mật sáng lập Hội Ám Hoàng. Dưới trướng hắn, tổ chức thâu tóm các sát thủ thiên bẩm, tiến hành những cuộc huấn luyện tàn bạo "kẻ sống sót duy nhất" để tôi luyện nên những cỗ máy giết người vô cảm.

2. Những Thành Viên Cốt Cán & Bi Kịch Máu:
- Amily: Từng là sát thủ số một của hội sau khi buộc phải giết chết chính những người bạn huấn luyện cùng mình; nàng đã bẻ gãy đao phong, trốn chạy khỏi sự kiểm soát của Quillen và mang mối thù sâu sắc với tổ chức.
- Veres: Nữ chấp pháp tàn nhẫn sử dụng Huyết Xích ma thuật, luôn khao khát được Quillen công nhận và sẵn sàng tiêu diệt bất kỳ ai dám phản bội hội.
- Sinestrea & Dextra: Hai thiếu nữ mang dòng máu Huyết Ma cổ đại bí ẩn, gắn kết sinh mệnh máu thịt với nhau trong giấc ngủ ngàn năm và được hội thức tỉnh phục vụ các mưu đồ đẫm máu.
- Thorne: Thiên tài chế tạo ma súng với ba viên Ma Đạn ma thuật, vừa phụng sự như một xạ thủ sát thủ thượng thặng, vừa truy tìm bí ẩn nguồn cội ma pháp.`,
    ideals: ['Nhân Loại Thuần Khiết', 'Kỷ Luật Máu', 'Ám Sát Thanh Trừng'],
    color: '#991b1b',
    secondaryColor: '#e11d48',
    bannerUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [6.8, 3.2, 1.8],
    keyLandmarks: [
      'Mật Điện Ám Hoàng Ngầm',
      'Đấu Trường Huấn Luyện Tử Thần (Amily)',
      'Huyết Trì Thức Tỉnh (Sinestrea & Dextra)',
      'Xưởng Đúc Ma Đạn Của Thorne',
      'Tòa Án Trừng Phạt Veres'
    ],
    heroIds: [
      'quillen', 'amily', 'veres', 'sinestrea', 'dextra', 'thorne'
    ]
  },

  tu_do: {
    id: 'tu_do',
    name: 'Không Thuộc Vùng Nào (Tự Do)',
    englishName: 'Unaligned / Independent',
    subtitle: 'Lãng Khách Phiêu Bạt, Hiệp Sĩ Tự Do & Du Hành Thứ Nguyên',
    leader: 'Không có lãnh tụ (Hành động độc lập)',
    territory: 'Phiêu bạt tự do khắp cõi Athanor & Vũ trụ thứ nguyên',
    description: 'Tập hợp các vị tướng độc lập, lãng khách phiêu bạt, thợ săn tiền thưởng, hoặc các anh hùng du hành thứ nguyên đến từ thế giới khác không thuộc về bất kỳ thế lực hay vương quốc nào ở Athanor.',
    lore: `Không phải bất kỳ anh hùng nào tại Athanor cũng quy phục dưới ngọn cờ của Tháp Quang Minh hay sa ngã vào Vực Hỗn Mang. Trên lục địa rộng lớn này, luôn tồn tại những lãng khách lang bạt tự do, các hiệp sĩ độc hành không màng danh lợi, và đặc biệt là những vị anh hùng kiệt xuất đến từ các vũ trụ thứ nguyên khác qua vết nứt thời không.

Họ không chịu sự cai trị của bất kỳ vị vua hay thần linh nào, tự do hành hiệp theo lý tưởng công lý và đạo nghĩa của riêng mình.`,
    ideals: ['Tự Do Tuyệt Đối', 'Không Ràng Buộc', 'Hành Hiệp Độc Lập'],
    color: '#64748b',
    secondaryColor: '#94a3b8',
    bannerUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    coordinates3D: [0, 2, 0],
    keyLandmarks: [
      'Vết Nứt Thời Không',
      'Quán Trọ Lãng Khách',
      'Vùng Đất Hoang Tự Do'
    ],
    heroIds: [
      'batman', 'superman', 'wonder_woman', 'the_flash', 'stuart', 'wiro', 'biron'
    ]
  }
};

