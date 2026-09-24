import type { Hero } from '../../types/athanor';

export const CARANO_HEROES: Hero[] = [
  {
    id: 'd_arcy',
    name: "D'Arcy",
    title: 'Pháp Sư Thứ Nguyên',
    factionId: 'carano',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/903191ed8212c2c6c91f1f6f0a677a565c6102d8ecf4a1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c545d29232eefe7a4d455fa68e7a60305c6105982cb3c1.jpg',
    quote: 'Không gian và thời gian chỉ là những sợi chỉ nằm trong tay ta!',
    stats: { damage: 10, toughness: 4, mobility: 7, crowdControl: 8, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Lực Lượng Thứ Nguyên',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1e1b823f88a0dc19940ed7c47bc29c785c610336b93951.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: "Mỗi khi tung kỹ năng trúng đích, D'Arcy tích lũy Lực Lượng Thứ Nguyên. Khi đạt 100 điểm, ông hồi năng lượng, tăng tốc chạy và lập tức làm mới chiêu 1 và 2.",
        comboTip: 'Tích nộ trước giao tranh để có thể xả chiêu 1 và chiêu 2 hai lần liên tiếp.'
      },
      {
        slot: 'skill1',
        name: 'Du Hành Không Gian',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b9c027e6ee80d73922fe278102d0a21d5c61046573e9d1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: "D'Arcy bước vào chiều không gian khác, không thể bị chọn làm mục tiêu và tăng tốc chạy, đòn đánh thường kế tiếp gây lượng lớn sát thương phép tầm xa.",
        comboTip: 'Dùng để né sát thương chí mạng từ kẻ địch và rỉa máu đau điếng.'
      },
      {
        slot: 'skill2',
        name: 'Lập Phương Không Gian',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/403cd1c1df10fb20882b9587475393d15c6104e0b74cd1.png',
        cooldown: '6.0s',
        energyCost: '65',
        damageType: 'Phép',
        description: 'Tạo một khối lập phương ma thuật phát nổ sau 1.25 giây, gây sát thương phép cực kỳ khủng khiếp lên mọi kẻ địch trong vùng ảnh hưởng.',
        comboTip: 'Đặt chiêu 2 đón đầu đường chạy của kẻ địch hoặc đặt ngay tâm ma trận chiêu cuối.'
      },
      {
        slot: 'ultimate',
        name: 'Ma Trận Thứ Nguyên',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/864b099e9a6463ecacab419d5b8918a75c61057cbe9031.png',
        cooldown: '40.0s',
        energyCost: '120',
        damageType: 'Phép',
        description: 'Tạo một vòng tròn không gian ma thuật. Sau 2 giây, tất cả tướng địch đứng trong vùng sẽ bị cưỡng ép kéo giật ngược về tâm vòng tròn, D\'Arcy có thể tái kích hoạt để dịch chuyển tới tâm ma trận.',
        comboTip: 'Chiêu cuối trúng đích đảm bảo kẻ địch bị kéo về tâm, lập tức đặt chiêu 2 để dồn chết mục tiêu.'
      }
    ],
    lore: `Một trong Tam Đại Trưởng Lão sáng lập nên Học Viện Ma Pháp Carano lừng danh. Từng bị cuốn vào vết rách không gian hỗn mang và suýt mất mạng, D'Arcy đã vượt qua giới hạn của loài người để làm chủ ma thuật thứ nguyên không thời gian tối thượng. Cùng người bạn thân Dirak và Sephera, ông dẫn dắt các thế hệ pháp sư trẻ bảo vệ hòa bình Athanor.`,
    battleTips: [
      "Chiêu 1 của D'Arcy giúp miễn nhiễm mọi sát thương và khống chế trong 1.5 giây, cực kỳ hữu dụng để outplay sát thủ.",
      'Đặt chiêu 2 ngay sau khi chiêu cuối khóa mục tiêu vì thời gian nổ trùng khớp với thời điểm địch bị giật về tâm.',
      'Lên Gươm Tận Thế để tối đa hóa sát thương đòn đánh cường hóa từ chiêu 1.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Gươm Tận Thế', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['dirak', 'sephera', 'keera', 'paine', 'lorion']
  },

  {
    id: 'dirak',
    name: 'Dirak',
    title: 'Pháp Vương Ánh Sáng',
    factionId: 'carano',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ab0b68ebd2e8df3116d91231ec0e55fc5e16e1f05c8701-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ab0b68ebd2e8df3116d91231ec0e55fc5e16e1f05c8701.jpg',
    quote: 'Tấm khiên ma thuật của ta sẽ che chở cho tất cả những linh hồn hướng về ánh sáng!',
    stats: { damage: 8, toughness: 7, mobility: 4, crowdControl: 10, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Giáp Năng Lượng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ed59c99ae3668f5ce3bcae58651a49f25e16e24f02aa91.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi cạn máu, Dirak sẽ tiêu hao năng lượng để thay thế cho máu bị mất (1 năng lượng chặn 1 sát thương), giúp ông sống sót ngoạn mục trong gang tấc.',
        comboTip: 'Luôn giữ lượng năng lượng dồi dào để biến cây mana thành thanh máu thứ hai của mình.'
      },
      {
        slot: 'skill1',
        name: 'Kim Quang Ấn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cdac62817c03f0ce68bd3949b50d8a305e16e2c72e5251.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Bắn ra quả cầu năng lượng lăn từ từ về phía trước, liên tục đẩy lùi và gây sát thương phép lên tất cả kẻ địch trúng phải.',
        comboTip: 'Quả cầu lăn liên tục giúp kiểm soát các lối đi hẹp trong rừng cực kỳ hiệu quả.'
      },
      {
        slot: 'skill2',
        name: 'Thiên Hỏa Lôi Trận',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/9f745f903d2cc423d203c560e9dfb9735e16e326c4fd91.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tạo ra vụ nổ thiên thạch làm choáng kẻ địch. Nếu đặt trúng địa hình, thiên thạch sẽ bắn ra các tia lôi cầu làm choáng diện rộng.',
        comboTip: 'Căn góc đặt chiêu 2 dính vào vách tường để kích hoạt hiệu ứng sấm sét nhân ba phạm vi khống chế.'
      },
      {
        slot: 'ultimate',
        name: 'Lô Cốt Năng Lượng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fca1ebc235843a3a92a8fcb89f08c8465e16e37f40d491.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Dựng một tấm khiên năng lượng khổng lồ phía trước chặn đứng TẤT CẢ các đòn đánh xa và kỹ năng dạng đạn của địch. Trong trạng thái này đòn đánh thường hóa thành pháo năng lượng xuyên thấu.',
        comboTip: 'Dựng khiên chặn toàn bộ hỏa lực của xạ thủ và pháp sư địch trong các pha thủ trụ hoặc ép nhà chính.'
      }
    ],
    lore: `Viện Trưởng Học Viện Ma Pháp Carano, người bạn tri kỷ đồng hành cùng D'Arcy và Sephera. Dirak là một pháp sư tài đức vẹn toàn, luôn mang trong mình trách nhiệm bảo vệ sinh viên và nền hòa bình của toàn cõi Athanor. Tấm khiên ma thuật ánh sáng của ông từng đứng vững trước hàng vạn đợt tấn công điên cuồng của quân đoàn bóng tối.`,
    battleTips: [
      'Chiêu cuối của Dirak có thể vô hiệu hóa hoàn toàn chiêu cuối của các xạ thủ như Yorn, Laville, Capheny.',
      'Sử dụng chiêu 2 vào các góc tường trong rừng để làm choáng toàn bộ đội hình đối phương.',
      'Lên Mặt Nạ Berith và Trượng Băng để quả cầu chiêu 1 thiêu đốt và làm chậm đối thủ tới chết.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Băng', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['d_arcy', 'sephera', 'keera', 'annette', 'lorion']
  },

  {
    id: 'sephera',
    name: 'Sephera',
    title: 'Nữ Thần Dòng Nước',
    factionId: 'carano',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/eef053fb25793d536185559e8bf5a82d5c132caaa102e1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/dd1d860625744c7456f2b184666458995c132cd3c0e771.jpg',
    quote: 'Tiếng đàn du dương của dòng nước sẽ gột rửa mọi vết thương và xoa dịu nỗi đau!',
    stats: { damage: 7, toughness: 6, mobility: 7, crowdControl: 8, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Suối Nguồn Sinh Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1edc36db741ef6762422a055a31735205c132d23b02563.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi khi Sephera tung chiêu thức, suối nguồn ma thuật tự động hồi máu cho đồng minh thấp máu nhất lân cận và gây sát thương phép lên kẻ địch xung quanh.',
        comboTip: 'Xả chiêu liên tục để giữ lượng máu của cả đội luôn ở mức an toàn trong các cuộc giao tranh.'
      },
      {
        slot: 'skill1',
        name: 'Thủy Âm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e02eec242f1b880e3213136ea243484e5c132d9c5a9431-1.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Bắn ra 3 luồng sóng âm đuổi theo kẻ địch gây sát thương và làm chậm, đồng thời cường hóa đòn đánh thường kế tiếp tầm xa gây thêm sát thương phép.',
        comboTip: 'Kỹ năng cấu máu từ xa cực kỳ khó chịu; kết hợp đòn đánh tay cường hóa để tối ưu sát thương.'
      },
      {
        slot: 'skill2',
        name: 'Thủy Khí',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/48014064d2379808ae4d2477d70f30045c1361a346e411-1.png',
        cooldown: '12.0s',
        energyCost: '70',
        damageType: 'Phép',
        description: 'Tăng tốc độ chạy và tạo vòng xoáy nước xung quanh. Sau 1.5 giây, kẻ địch đứng trên rìa vòng xoáy sẽ bị làm choáng trong 0.75 giây và nhận sát thương phép.',
        comboTip: 'Căn khoảng cách rìa vòng nước để làm choáng chính xác nhiều tướng địch cùng lúc.'
      },
      {
        slot: 'ultimate',
        name: 'Sóng Ngầm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/023e5341f5aef87afda1047c7ffbaa565c1361d5ef1891-1.png',
        cooldown: '45.0s',
        energyCost: '110',
        damageType: 'Phép',
        description: 'Sephera phi thăng lên không trung không thể bị chọn làm mục tiêu trong 1.7 giây. Khi hạ xuống, tạo làn sóng khổng lồ hồi máu cực lớn cho tất cả đồng minh và gây sát thương phép lên kẻ địch.',
        comboTip: 'Vừa là công cụ outplay né sát thương chí mạng, vừa là kỹ năng hồi máu cứu nguy giao tranh tổng số một.'
      }
    ],
    lore: `Một trong Tam Đại Trưởng Lão của Học Viện Ma Pháp Carano, người nắm giữ cội nguồn ma thuật thủy lưu tinh khiết. Sephera mang vẻ đẹp thanh tao dịu dàng cùng tiếng đàn hạc mê đắm lòng người. Nàng luôn là hậu phương vững chắc cho Dirak và D'Arcy, dùng sự bao dung và phép màu của dòng nước để chở che cho muôn loài.`,
    battleTips: [
      'Sephera có thể đi đường giữa hoặc trợ thủ với khả năng cấu rỉa và hồi phục liên tục.',
      'Giữ vị trí khéo léo để rìa chiêu 2 làm choáng đối phương khi chúng cố gắng tiếp cận.',
      'Chiêu cuối giúp Sephera bất tử trong 1.7s, hãy dùng để né các chiêu dồn sát thương của sát thủ.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Băng', 'Vương Miện Hecate', 'Sách Truy Hồn', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['dirak', 'd_arcy', 'annette', 'ishar', 'keera']
  },

  {
    id: 'keera',
    name: 'Keera',
    title: 'Tiểu Thư Ma Quái',
    factionId: 'carano',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8491520381ab2a66489a6c5e1ec98e785e452a5c9fd3c1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/44334c5ab6109cd916d2cffd37124d525e452c34b621c.jpg',
    quote: 'Bóng tối không hề đáng sợ, nó là người bạn thân thiết nhất của ta!',
    stats: { damage: 10, toughness: 4, mobility: 9, crowdControl: 6, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Ám Ảnh Ma Thuật',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/77c5257df3fded45a3bf7204e4ff68c55fc557628f1281.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Đòn đánh thường của Keera gây hoàn toàn sát thương phép và chia đều sát thương cho tối đa 3 kẻ địch gần kề, đồng thời nhận thêm 20% hút máu phép.',
        comboTip: 'Khả năng hồi phục phép tự nhiên giúp Keera dọn rừng cực nhanh và duy trì lượng máu đầy ắp.'
      },
      {
        slot: 'skill1',
        name: 'Hắc Ma Nhập Hồn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0d266fe2e65e51928dbb8c8d19dee8c35fc55777e9b4b1.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Lướt tới một vị trí gây sát thương phép và đánh dấu mục tiêu. Tái kích hoạt để lướt tới chỗ nạn nhân kéo theo luồng sát thương phép cực lớn.',
        comboTip: 'Lướt lần 1 để áp sát đánh dấu, tung chiêu 2 rồi tái kích hoạt lần 2 để kết liễu mục tiêu.'
      },
      {
        slot: 'skill2',
        name: 'Tam Giác Hắc Ám',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fd3619efaa99e035e1bc7799cbd818045fc5576bdbc291.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Tách ra 2 phân thân và bản thân nhảy lùi lại tạo một kết giới tam giác ma thuật. Trong thời gian này Keera không thể bị chọn làm mục tiêu và đòn đánh thường được cường hóa cực mạnh.',
        comboTip: 'Chiêu 2 né chiêu đối thủ cực kỳ hoàn hảo đồng thời tăng 3 đòn đánh tay sát thương phép khổng lồ.'
      },
      {
        slot: 'ultimate',
        name: 'Thủy Triều Bóng Đêm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/42b366f7da1eeec5655937ade8bba83b5fc55780b51da1.png',
        cooldown: '45.0s',
        energyCost: '100',
        damageType: 'Hỗ trợ',
        description: 'Nhận lượng lớn tốc độ di chuyển và khả năng ĐI XUYÊN QUA MỌI ĐỊA HÌNH VÁCH ĐÁ trong 6 giây. Khi kết thúc, lập tức làm mới thời gian hồi chiêu của chiêu 1 và chiêu 2.',
        comboTip: 'Bật chiêu cuối từ trong rừng, chạy xuyên qua vách đá gank bất ngờ rồi xả chiêu 1 và 2 thoải mái vì sẽ được reset.'
      }
    ],
    lore: `Cô bé mồ côi mang nguồn gốc ma thuật hắc ám bí ẩn, được D'Arcy và Sephera giải cứu và nhận vào Học Viện Ma Pháp Carano. Keera xem D'Arcy như người cha người thầy mẫu mực. Với năng lực điều khiển bóng tối và khả năng di chuyển xuyên qua các bức tường vật lý, Keera là một trong những sát thủ ma pháp đáng sợ nhất rừng rậm Athanor.`,
    battleTips: [
      'Chiêu cuối cho phép đi xuyên địa hình; hãy tận dụng để luồn lách qua các góc khuất bắt lẻ chủ lực đối phương.',
      'Chiêu 2 tạo trạng thái không thể bị chọn làm mục tiêu, hãy dùng để né các chiêu thức khống chế của kẻ địch.',
      'Combo: Chiêu cuối xuyên tường -> Chiêu 1 vồ tới -> Chiêu 2 né chiêu cường hóa chém -> Chiêu 1 kích hoạt lần 2 dứt điểm.'
    ],
    recommendedItems: ['Gươm Loki', 'Giày Kiên Cường', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['d_arcy', 'sephera', 'dirak', 'ishar', 'paine']
  },

  {
    id: 'ishar',
    name: 'Ishar',
    title: 'Tí Nị Năng Động',
    factionId: 'carano',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1009dcdfe78de2f6bc7fbdaea21cabc05df2198341d451.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1009dcdfe78de2f6bc7fbdaea21cabc05df21983343f81.jpg',
    quote: 'Tí Nị ơi, chúng ta cùng nhau cho lũ người xấu một bài học nào!',
    stats: { damage: 8, toughness: 6, mobility: 6, crowdControl: 8, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Tí Nị Trung Thành',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cdf3e02c041839a7e26f3b3db9fa78055df21682c6e401.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Ishar luôn được thú cưng Tí Nị đi cùng hộ tống. Tí Nị kế thừa chỉ số máu, giáp và công phép từ Ishar, tự động tấn công kẻ địch bị Ishar nhắm vào và hy sinh che chắn cho nàng.',
        comboTip: 'Tí Nị có thể dùng để check bụi, đỡ đòn và chặn các chiêu thức dạng đạn từ đối thủ.'
      },
      {
        slot: 'skill1',
        name: 'Đá Ma Thuật',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fbe74078d6ca3865e08700b9d20aea4a5df216904bddf1.png',
        cooldown: '4.0s',
        energyCost: '40',
        damageType: 'Phép',
        description: 'Bắn ra một luồng ma thuật theo đường thẳng gây sát thương phép, đồng thời ra lệnh cho Tí Nị lao tới tấn công mục tiêu đầu tiên trúng đạn.',
        comboTip: 'Dùng để cấu rỉa máu liên tục và chỉ huy Tí Nị rượt đuổi đối thủ.'
      },
      {
        slot: 'skill2',
        name: 'Khiên Bảo Hộ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5463778f68959cf5e596c8d1cf482a7c5df217aa3a0691.png',
        cooldown: '10.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Tí Nị lập tức lao về phía Ishar, tạo một lớp lá chắn lớn cho nàng và hất tung những kẻ địch cản đường, đồng thời tăng mạnh tốc chạy cho cả hai.',
        comboTip: 'Vũ khí tự vệ tuyệt hảo khi bị sát thủ địch áp sát, Tí Nị sẽ bay về hất tung kẻ địch bảo vệ Ishar.'
      },
      {
        slot: 'ultimate',
        name: 'Sa Bàn Ma Thuật',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/234c0c620162c0e98103c774edfdd8b55df217f2bc7051.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Tạo ra một kết giới ma thuật hình chữ nhật nhốt chặt tất cả kẻ địch bên trong trong 2.5 giây. Tí Nị hóa khổng lồ cuồng nộ càn quét bên trong kết giới.',
        comboTip: 'Nhốt các mục tiêu kém cơ động vào sa bàn để Tí Nị và đồng đội thỏa sức dồn hỏa lực.'
      }
    ],
    lore: `Nữ sinh hoạt bát và đáng yêu của Học Viện Ma Pháp Carano, sinh ra trong một gia tộc quý tộc phương bắc. Ishar sở hữu linh thú đồng hành đặc biệt mang tên Tí Nị – một sinh vật ma thuật trung thành tuyệt đối. Nàng dùng tình bạn trong sáng và sức mạnh ma thuật của mình để bảo vệ mọi người xung quanh khỏi hiểm nguy.`,
    battleTips: [
      'Tí Nị có thể chịu đòn từ trụ hoặc ăn các chiêu khống chế thay cho Ishar.',
      'Chiêu cuối Sa Bàn Ma Thuật nhốt kẻ địch không thể bước ra ngoài, rất thích hợp chặn đường rút của đối phương.',
      'Lên Trượng Băng và Mặt Nạ Berith giúp Tí Nị đánh thường làm chậm và thiêu đốt kẻ địch liên tục.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Trượng Bùng Nổ', 'Mặt Nạ Berith', 'Trượng Băng', 'Vương Miện Hecate', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['keera', 'annette', 'ata', 'dirak', 'sephera']
  },

  {
    id: 'annette',
    name: 'Annette',
    title: 'Nàng Gió Tinh Linh',
    factionId: 'carano',
    role: 'Trợ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/17f4f562b9121128b4aff9e7b41644185f041e77964551.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5f93999a6586945b8d85258d67cee9195ef60dbbc355e1.jpg',
    quote: 'Gió nhẹ sẽ nâng đỡ đôi cánh của những người bạn dũng cảm!',
    stats: { damage: 5, toughness: 5, mobility: 7, crowdControl: 9, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Gió Nhẹ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/annette1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi khi di chuyển hoặc tung chiêu, Annette tích lũy điểm gió nhẹ. Khi đầy điểm, nàng tự động hồi máu cho bản thân và đồng minh lân cận có máu thấp nhất.',
        comboTip: 'Di chuyển liên tục trên chiến trường để hồi phục máu cho xạ thủ đi cùng đường.'
      },
      {
        slot: 'skill1',
        name: 'Gió Xoáy',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/annette2.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Tạo một cơn gió xoáy tại điểm chỉ định, gây sát thương phép liên tục và làm chậm kẻ địch bên trong, tâm lốc xoáy gây sát thương lớn hơn.',
        comboTip: 'Đặt chiêu 1 để dọn đợt lính và hạn chế không gian di chuyển của đối phương.'
      },
      {
        slot: 'skill2',
        name: 'Gió Nồm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/annette3.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Bắn ra một quả cầu phong ma thuật. Nếu trúng hai kẻ địch, chúng sẽ bị kéo va vào nhau và bị làm choáng trong 1.25 giây đồng thời tạo lá chắn cho Annette.',
        comboTip: 'Canh góc bắn trúng 2 mục tiêu cạnh nhau để gây choáng diện rộng tuyệt đẹp.'
      },
      {
        slot: 'ultimate',
        name: 'Mắt Bão',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/annette4.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Annette bay lên tạo một rào chắn mắt bão khổng lồ đẩy lùi toàn bộ kẻ địch xung quanh, chặn đứng mọi nỗ lực lao vào của địch và tăng tốc độ đánh, tốc chạy cho đồng minh bên trong.',
        comboTip: 'Bảo kê xạ thủ hoàn hảo trước các sát thủ lao vào bằng cách dựng mắt bão hất văng chúng ra ngoài.'
      }
    ],
    lore: `Nữ phù thủy gió tốt bụng tốt nghiệp loại ưu tại Học Viện Ma Pháp Carano, tình nguyện về phục vụ tại thị trấn ven biển Hải Bình. Annette có tâm hồn trong sáng và luôn tận tụy giúp đỡ người dân nơi đây dự báo bão và chống chọi thiên tai, trước khi tham gia bảo vệ lục địa trước các đợt càn quét của quỷ dữ.`,
    battleTips: [
      'Chiêu cuối của Annette đẩy lùi mọi kẻ địch và chặn đứng các kỹ năng lướt, dùng để bảo vệ chủ lực tuyệt đối.',
      'Sử dụng chiêu 2 bắn vào lính và tướng địch để tạo hiệu ứng kéo va vào nhau gây choáng.',
      'Lên trang bị phụ trợ tăng tốc độ và giảm thời gian hồi chiêu để xả kỹ năng liên tục.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Băng', 'Khiên Huyền Thoại', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['ishar', 'ata', 'sephera', 'dirak', 'keera']
  },

  {
    id: 'ata',
    name: 'Ata',
    title: 'Mèo Đi Phượt',
    factionId: 'carano',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/71f7a36c0dd250ce0affeffcf14360f45e57c0420b4b61.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/206f1bf38f4e3caf5dcf853618e17a1f5e57c0578a9db1.jpg',
    quote: 'Mỏ neo trên vai, biển cả trong tim, sợ gì ba cái thứ quái vật vớ vẩn!',
    stats: { damage: 6, toughness: 10, mobility: 6, crowdControl: 9, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Mèo Biển Cả',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8000cd14d644ae999d3c2d32f294e4525fc55793e295f1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Máu bị mất chuyển hóa thành thanh Máu Ảo (màu xám). Khi Ata gây sát thương lên kẻ địch, một phần thanh máu ảo này sẽ được hồi phục thành máu thật.',
        comboTip: 'Khi thanh máu ảo còn nhiều, hãy liên tục lao vào đánh nhau để hồi lại lượng máu khổng lồ.'
      },
      {
        slot: 'skill1',
        name: 'Đạp Sóng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d36cf53cb28bba9a11b33214c7d39c385fc5579e160131.png',
        cooldown: '7.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Ata nhảy lên không trung 2 lần, cú nhảy thứ hai gây sát thương vật lý và làm choáng kẻ địch trúng phải, trong lúc nhảy được miễn khống.',
        comboTip: 'Dùng cú nhảy thứ 2 để làm choáng và mở giao tranh chớp nhoáng.'
      },
      {
        slot: 'skill2',
        name: 'Bá Vương Trảo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/792bcf4c2650cdaed77bff58f54d1c9c5fc557a8c73721.png',
        cooldown: '10.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Phóng mỏ neo về phía trước kéo kẻ địch lại gần. Nếu mỏ neo chạm vào địa hình vách tường, Ata lướt tới vách tường và húc văng tất cả kẻ địch xung quanh.',
        comboTip: 'Phóng mỏ neo vào tường để lướt tới húc choáng mục tiêu đứng cạnh vách đá.'
      },
      {
        slot: 'ultimate',
        name: 'Thuyền Hải Tặc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/adb8e14105515c873579f40bf98380e55fc557b35bcb01.png',
        cooldown: '40.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Triệu hồi một xác thuyền hải tặc khổng lồ chặn đứng đường đi của kẻ địch trong 4 giây, gây sát thương vật lý và hất tung những kẻ đứng ngay vị trí xuất hiện.',
        comboTip: 'Dựng thuyền chặn kín lối đi hẹp trong rừng hoặc nhốt đối thủ lại để kết hợp combo chiêu 2 kéo vào thuyền.'
      }
    ],
    lore: `Chàng thủy thủ mèo bộc trực và dũng cảm, bạn thân của Annette tại thị trấn Hải Bình thuộc tầm ảnh hưởng của Học Viện Carano. Với chiếc mỏ neo khổng lồ trên vai và tinh thần tự do phiêu lưu của biển cả, Ata không bao giờ chùn bước trước bất kỳ kẻ thù nào, luôn sẵn sàng xả thân che chắn cho bạn bè.`,
    battleTips: [
      'Ata càng đánh càng trâu nhờ nội tại hồi máu ảo, đừng vội bỏ chạy khi thấy máu giảm xuống thấp.',
      'Dựng thuyền chiêu cuối ở các hẻm rừng để bẫy toàn bộ đội hình đối phương.',
      'Lên Phù Hiệu Mộc Giáp và các trang bị tăng lượng máu tối đa để thanh máu ảo dày hơn.'
    ],
    recommendedItems: ['Đại Địa Mở Trói', 'Giày Kiên Cường', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Thất Truyền', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['annette', 'ishar', 'roxie', 'rourke', 'dirak']
  },

  {
    id: 'paine',
    name: 'Paine',
    title: 'Hoà Nhạc Tử Thần',
    factionId: 'carano',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/47861c6d53d72d0dbea2d1dba0b0e0365e8ade6f180931.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ac573ac740f322af334f248108f37fe45e8adea44437b.jpg',
    quote: 'Bản sonata tử thần này sẽ là thanh âm cuối cùng mà ngươi được nghe!',
    stats: { damage: 10, toughness: 4, mobility: 9, crowdControl: 7, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Trảm Hồn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3dc827986c6355d90753e6649e1f2a715e8ae047a91601.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Sau khi dùng chiêu thức, đòn đánh thường kế tiếp lướt ra sau lưng mục tiêu và gây lượng sát thương phép cực kỳ khủng khiếp xuyên qua giáp.',
        comboTip: 'Xen kẽ các đòn đánh thường sau mỗi kỹ năng để dịch chuyển ra sau lưng kẻ địch chém chí mạng phép.'
      },
      {
        slot: 'skill1',
        name: 'Hồn Điệu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e433d4f7599e82bd55a108c35a47d4295e8ae0728c0271.png',
        cooldown: '8.0s',
        energyCost: '40 Nội Năng',
        damageType: 'Phép',
        description: 'Xuất hồn lướt đi với tốc độ cực cao và miễn khống chế, cơ thể đứng yên tại chỗ. Khi hết thời gian hoặc bấm đánh thường, cơ thể lập tức dịch chuyển theo linh hồn gây sát thương phép.',
        comboTip: 'Linh hồn miễn nhiễm mọi khống chế, dùng để lao thẳng vào dàn sau của đối phương an toàn.'
      },
      {
        slot: 'skill2',
        name: 'Vong Ngâm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d6eaacb471e184500b55a6a777638dff5e8ae092591651.png',
        cooldown: '7.0s',
        energyCost: '40 Nội Năng',
        damageType: 'Phép',
        description: 'Vung đao tạo vòng tròn âm hưởng ma quái làm câm lặng tất cả kẻ địch trong vùng 0.75 giây và gây sát thương phép, đồng thời hồi phục nội năng cho Paine.',
        comboTip: 'Hiệu ứng câm lặng khiến pháp sư và xạ thủ địch không kịp bấm chiêu bảo mệnh hay Tốc Biến.'
      },
      {
        slot: 'ultimate',
        name: 'Khúc Vong Hồn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/d5c7ac666880b55ee8cbdc99d61633a55e8ae106d998b1.png',
        cooldown: '40.0s',
        energyCost: '100 Nội Năng',
        damageType: 'Phép',
        description: 'Lùi lại lấy đà rồi phi thân một quãng đường siêu xa lao vút tới khu vực chỉ định, gây sát thương phép diện rộng kinh hoàng lên tất cả kẻ địch trên đường bay và điểm tiếp đất.',
        comboTip: 'Tầm bay nửa bản đồ, dùng để nhập cuộc giao tranh tức thì hoặc ám sát mục tiêu đang tháo chạy.'
      }
    ],
    lore: `Nghệ sĩ vĩ cầm thiên tài nhưng mang số phận bi kịch tại Học Viện Ma Pháp Carano. Paine từng bị thao túng bởi âm nhạc ma quỷ hắc ám, khiến linh hồn anh hòa làm một với những giai điệu chết chóc. Với lưỡi dao tử thần và cây đàn vĩ cầm u uất, Paine săn lùng những kẻ tội đồ trên khắp lục địa.`,
    battleTips: [
      'Paine là ác mộng của các vị tướng thiếu cơ động nhờ khả năng sốc sát thương phép chỉ trong 1 giây.',
      'Sử dụng chiêu 1 xuất hồn để tiếp cận -> Chiêu 2 câm lặng -> Đánh thường -> Chiêu cuối dứt điểm.',
      'Chú ý năng lượng nội năng; hãy đứng trong vòng chiêu 2 khi kết thúc để hồi lại nội năng.'
    ],
    recommendedItems: ['Gươm Loki', 'Giày Kiên Cường', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['keera', 'd_arcy', 'dirak', 'sephera', 'lorion']
  },

  {
    id: 'liliana',
    name: 'Liliana',
    title: 'Cửu Vĩ Linh Hồ',
    factionId: 'carano',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/28b06811cb721a8ecb28d6a1db401e745a9fd3a39ae401.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/4b3a1b156a571f4c9cf270dabeb637c25aa0b6e3393031.jpg',
    quote: 'Tri thức ngàn năm tích tụ chỉ để thấu hiểu bản chất của sự tồn tại!',
    stats: { damage: 10, toughness: 5, mobility: 9, crowdControl: 7, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Yêu Hồ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/bccaeb073d66775a63c7cb059e4942115aa0fe25ece371.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Liliana sở hữu hai hình thái: Dạng Người (tầm đánh xa, cấu rỉa mạnh) và Dạng Cáo (tăng giáp, kháng phép, tốc chạy và sát thương bộc phát cận chiến).',
        comboTip: 'Linh hoạt biến đổi giữa hai dạng để tối ưu khả năng cấu rỉa tầm xa và ám sát cận chiến.'
      },
      {
        slot: 'skill1',
        name: 'Hồ Quang Đạn / Kế Sách Hồ Ly',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b6c53e65f737f8e5e6635180797499485aa0fe7f4364f1.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Dạng Người: Bắn ra đạn ma thuật nổ diện rộng, trúng 2 tướng địch tăng công phép và tầm đánh. Dạng Cáo: Vung móng vuốt cào liên tiếp gây sát thương lớn.',
        comboTip: 'Cấu rỉa máu bằng chiêu 1 dạng người từ ngoài tầm nhìn của kẻ địch.'
      },
      {
        slot: 'skill2',
        name: 'Hồ Quang Lực / Vũ Điệu Hồ Ly',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/49aba30a719fab17c020a0de18435db15aa0ff2ed92bb1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Dạng Người: Bắn đạn ma thuật làm choáng mục tiêu 1 giây. Dạng Cáo: Lướt tới chém kẻ địch, nếu trúng sẽ mở khóa kích hoạt bắn ra Quả Cầu Linh Hồn siêu thanh đuổi theo đối thủ.',
        comboTip: 'Quả cầu linh hồn dạng cáo gây lượng sát thương phép khổng lồ, dùng để dứt điểm mục tiêu yếu máu.'
      },
      {
        slot: 'ultimate',
        name: 'Biến Ảnh Hoán Hình',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/03995e250cf160fa4a152a4413ee93e75aa0ffb9c5b5a1.png',
        cooldown: '6.0s',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Biến đổi giữa Dạng Người và Dạng Cáo. Trong khoảnh khắc biến hình, Liliana lướt đi và hoàn toàn KHÔNG THỂ BỊ CHỌN LÀM MỤC TIÊU, đồng thời cường hóa chỉ số dạng mới.',
        comboTip: 'Sử dụng thời khắc biến hình để né tránh kỹ năng khống chế hoặc sát thương dồn của đối thủ.'
      }
    ],
    lore: `Linh hồ chín đuôi thượng cổ đã sống qua hàng ngàn năm lịch sử của lục địa Athanor. Nàng từng chu du khắp mọi miền đất nước để tìm kiếm tri thức tối thượng về bản chất ma thuật và vũ trụ. Hiện tại nàng dừng chân làm học giả nghiên cứu thỉnh giảng tại Học Viện Carano, mang trí tuệ thâm sâu hỗ trợ phe Ánh Sáng đẩy lùi bóng tối.`,
    battleTips: [
      'Liliana là một trong những pháp sư toàn diện nhất trò chơi: cấu rỉa, làm choáng, cơ động và né chiêu đỉnh cao.',
      'Dùng chiêu cuối biến hình để né các chiêu thức nguy hiểm như chiêu cuối Tulen, Veera.',
      'Combo: Chiêu 2 (choáng) -> Chiêu 1 cấu máu -> Chiêu cuối hóa cáo -> Chiêu 2 lướt trúng -> Bắn cầu linh hồn -> Chiêu 1 cào.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Trượng Bùng Nổ', 'Vương Miện Hecate', 'Trượng Hỗn Mang', 'Quả Cầu Băng Sương', 'Sách Thánh'],
    relatedHeroIds: ['d_arcy', 'dirak', 'sephera', 'tulen', 'krixi']
  },

  {
    id: 'max',
    name: 'Max',
    title: 'Cơ Động Thần Đồng',
    factionId: 'tan_lien_hiep',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/18000_B52-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/18000_B52.jpg',
    quote: 'Bộ đồ cơ khí này do chính tay ta chế tạo đấy, bay lượn ngầu chưa nào!',
    stats: { damage: 7, toughness: 9, mobility: 9, crowdControl: 8, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Điện Tích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/692d921e37648eda16e87791f4eb119b5abdee6eb6fe21.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Chuẩn',
        description: 'Tất cả sát thương của Max đều gắn dòng điện gây sát thương chuẩn liên tục theo thời gian và GIẢM 50% HIỆU QUẢ HỒI MÁU của kẻ địch trong 3 giây.',
        comboTip: 'Khắc tinh số một của các tướng hồi máu mạnh như Taara, Veres, Helen, Kil\'Groth.'
      },
      {
        slot: 'skill1',
        name: 'Tay Phản Lực',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e6d4c4ec181f0f224e6458bb331c41ee5abdef27ed5691-1.png',
        cooldown: '5.0s',
        energyCost: '40',
        damageType: 'Vật lý',
        description: 'Xoay cánh tay cơ khí gây sát thương vật lý lên kẻ địch xung quanh, mỗi tướng địch trúng chiêu giúp Max tăng 10% tốc độ di chuyển.',
        comboTip: 'Xoay chiêu 1 giữa đám đông lính và tướng địch để đạt tốc chạy tối đa rượt đuổi con mồi.'
      },
      {
        slot: 'skill2',
        name: 'Động Cơ Nhảy Vọt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/2f6aca329860e80b70c06c9b2a0f6fda5abdef6c089191.png',
        cooldown: '9.0s (Tích trữ 2 lần)',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Max nhảy qua đầu mục tiêu, làm choáng kẻ địch trong 0.5 giây và tạo lá chắn hấp thụ sát thương cho bản thân.',
        comboTip: 'Có thể kích hoạt 2 lần liên tiếp để nhảy qua đầu đối thủ câu giờ và tạo 2 lớp giáp ảo.'
      },
      {
        slot: 'ultimate',
        name: 'Ra Đa Đạn Đạo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7736387e470db99ef985b7c3a581b6b05abdefc6721d01.png',
        cooldown: '60.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Bật radar soi sáng TOÀN BỘ TƯỚNG ĐỊCH trên toàn bản đồ và ngắt biến về của chúng. Tái kích hoạt để Max phóng người bay thẳng tới mục tiêu chỉ định với tốc độ tên lửa, gây sát thương và đẩy lùi nạn nhân.',
        comboTip: 'Soi tầm nhìn toàn bản đồ khi đối phương đang biến về hoặc bay tới bắt chết xạ thủ địch đang đứng lẻ.'
      }
    ],
    lore: `Thần đồng cơ khí nhí, đệ tử chân truyền của Moren và bạn thân của Wisp. Dù còn nhỏ tuổi, Max đã tự tay thiết kế và chế tạo ra bộ giáp bay phản lực tối tân. Cậu gia nhập phân viện kỹ thuật ma pháp của Carano, sử dụng các phát minh cơ khí hiện đại để tuần tra và bảo vệ an ninh cho toàn cõi đại lục.`,
    battleTips: [
      'Bật chiêu cuối để phát hiện vị trí cả 5 tướng địch, ngăn chặn đối phương ăn trộm Rồng hoặc Tà Thần.',
      'Nội tại giảm 50% hồi máu giúp Max áp đảo hoàn toàn các đấu sĩ có chiêu hồi phục ở đường tà thần.',
      'Khi bay chiêu cuối, có thể chủ động hủy bay để giữ an toàn nếu mục tiêu chạy vào vùng có cả đội địch bảo kê.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Áo Choàng Thần Ra', 'Giáp Gaia', 'Khiên Thất Truyền', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['wisp', 'moren', 'celica', 'capheny', 'arthur']
  },

  {
    id: 'wisp',
    name: 'Wisp',
    title: 'Pháo Thủ Tinh Nghịch',
    factionId: 'tan_lien_hiep',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f3a7fe63c79a26ea789064ea3361781f5aec0b6084aa01.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/71f565c806c353f86bd8f20476f7fdad5aec0b90eba101.jpg',
    quote: 'Cỗ máy pháo này của ta sẽ biến các ngươi thành pháo hoa rực rỡ!',
    stats: { damage: 9, toughness: 4, mobility: 7, crowdControl: 6, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Tự Kích Nổ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cbb62f4492f2e5d9935287f520417bee5aec0c96ef6591.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Khi bị hạ gục, cỗ máy của Wisp thả ra hàng loạt quả bom nổ chậm xung quanh gây sát thương vật lý diện rộng trả thù kẻ địch.',
        comboTip: 'Nếu không may bị hạ gục, hãy cố gắng ngã xuống ngay giữa đội hình địch để bom nổ gây thêm sát thương.'
      },
      {
        slot: 'skill1',
        name: 'Pháo Động Năng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c6af6fc29aaa162a355cd1de05ebdda35aec0d159cd0a1.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Lướt về phía trước, cường hóa đòn đánh thường bắn ra đạn pháo nổ lan gây sát thương vật lý diện rộng và tăng mạnh tốc đánh.',
        comboTip: 'Chiêu lướt vượt địa hình mỏng và chuyển đòn đánh thường thành sát thương lan dọn lính cực nhanh.'
      },
      {
        slot: 'skill2',
        name: 'Pháo Tiêu Hao',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/1819e9b106ac88ff39e0282083f19d645aec0d6b1bf8f1.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Lăn một quả pháo gai về phía trước, gây sát thương vật lý và làm choáng 0.75 giây kẻ địch đầu tiên trúng phải.',
        comboTip: 'Bắn chiêu 2 để làm choáng đối thủ khi chúng có ý định áp sát hoặc truy đuổi bạn.'
      },
      {
        slot: 'ultimate',
        name: 'Pháo Cao Xạ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/0af7b2f2210a9518f2334fcbb325153c5aec0db4506551.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Wisp đứng yên khai hỏa 6 đợt pháo mưa oanh tạc dữ dội vào khu vực chỉ định tầm xa, mỗi đợt gây sát thương vật lý cực mạnh và có thể chí mạng.',
        comboTip: 'Xả chiêu cuối vào các giao tranh tổng ở địa hình hẹp để xé nát đội hình đối phương từ khoảng cách an toàn.'
      }
    ],
    lore: `Em gái nhỏ tinh nghịch của Moren và bạn thân của Max. Wisp tự tay lắp ráp cỗ máy chiến đấu gắn đại pháo nổ chậm từ những phế liệu trong xưởng cơ khí của người anh trai. Với tính cách hồn nhiên, nghịch ngợm và đam mê pháo nổ, Wisp biến mọi chiến trường thành một lễ hội pháo hoa đầy màu sắc.`,
    battleTips: [
      'Wisp có lượng sát thương lan cực lớn từ chiêu 1, rất lợi hại khi bắn vào đám đông lính và tướng gom lại.',
      'Chiêu cuối tầm bắn cực xa, hãy đứng an toàn sau lưng tanker để xả mưa bom đạn.',
      'Lên trang bị chí mạng và tốc đánh như Thánh Kiếm, Song Đao Bão Táp để tối đa hóa sát thương diện rộng.'
    ],
    recommendedItems: ['Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Diệt Thần Cung', 'Cung Tà Ma', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['max', 'moren', 'celica', 'capheny', 'valhein']
  },

  {
    id: 'celica',
    name: 'Celica',
    title: 'Pháo Đạn Hạng Nặng',
    factionId: 'tan_lien_hiep',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/194741793e21d4392965d4d63515e78b5d6fa738d07e61.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5c7448ebdafee8605d0006eb3045c0845d6fa7633f2d91.jpg',
    quote: 'Một khi cỗ pháo này cắm rễ xuống đất, không một pháo đài nào có thể đứng vững!',
    stats: { damage: 10, toughness: 5, mobility: 5, crowdControl: 5, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Bắn Liên Tục',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/09f05c2c3ad8e2f5380d531d0814ed225d6fa7a0535021.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Mỗi đòn đánh thường trúng đích giúp Celica tăng tỉ lệ chí mạng và công vật lý (cộng dồn tối đa 5 lần trong vài giây).',
        comboTip: 'Bắn liên tục vào lính hoặc quái trước giao tranh để tích đủ 5 điểm cộng dồn chí mạng.'
      },
      {
        slot: 'skill1',
        name: 'Tăng Tốc Bắn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/cfb9a50483cbd1ed76709f81b4c2ae9f5d6fa7d61ea011.png',
        cooldown: '7.0s',
        energyCost: '50',
        damageType: 'Hỗ trợ',
        description: 'Tăng 80% tốc chạy giảm dần trong 2 giây. Nếu đang trong trạng thái dựng pháo chiêu cuối, kích hoạt chiêu 1 lập tức thu pháo và tăng tốc tháo chạy.',
        comboTip: 'Dùng để thu pháo khẩn cấp thoát thân khi bị sát thủ đối phương bất ngờ áp sát.'
      },
      {
        slot: 'skill2',
        name: 'Mìn Cảnh Giới',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/65af06dac6ea888cc0326d43b15d88465d6fa81d5d0a11.png',
        cooldown: '8.0s (Tích trữ 2 lần)',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Đặt một quả mìn bẫy tại vị trí chỉ định soi sáng tầm nhìn. Kẻ địch giẫm phải bị trừ 25% giáp, làm chậm 50% và Celica nhận lá chắn bảo hộ.',
        comboTip: 'Đặt mìn trong các bụi cỏ quanh vị trí cắm pháo để chống bị đánh úp từ trong bóng tối.'
      },
      {
        slot: 'ultimate',
        name: 'Pháo Đài Di Động',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/b897a4073f69695d5018c472e5d4c6965d6fa88110b851.png',
        cooldown: '30.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Cố định bản thân thành pháo đài khổng lồ nhận giáp và kháng phép, mở rộng tầm bắn lên mức siêu xa và bắn ra 7 phát đại pháo chí mạng gây nổ lan cực mạnh.',
        comboTip: 'Chọn vị trí dựng pháo sau vách tường hoặc sau lưng đội hình để oanh tạc nát trụ và đội hình địch.'
      }
    ],
    lore: `Nữ chiến binh dũng cảm xuất thân từ lực lượng pháo binh cơ giới thuộc liên minh Carano - Norman. Celica sở hữu khẩu đại pháo công thành hạng nặng uy lực nhất thế giới Athanor. Với bản lĩnh thép và tài thiện xạ cự pháo bậc thầy, nàng là mũi nhọn xuyên phá mọi chiến tuyến kiên cố nhất của Vực Hỗn Mang.`,
    battleTips: [
      'Celica cắm pháo ép trụ hoặc thủ nhà là thế trận bất khả xâm phạm nếu có bảo kê tốt.',
      'Luôn rải mìn chiêu 2 vào các góc bụi tiếp cận để lấy tầm nhìn và nhận lá chắn khi bị áp sát.',
      'Sử dụng chiêu 1 để hủy cắm pháo ngay lập tức nếu thấy sát thủ đối phương lao vào.'
    ],
    recommendedItems: ['Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['capheny', 'wisp', 'moren', 'max', 'elsu']
  },

  {
    id: 'roxie',
    name: 'Roxie',
    title: 'Đốm Lửa Tinh Lịch',
    factionId: 'tan_lien_hiep',
    role: 'Đỡ Đòn',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/51400-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/51400.jpg',
    quote: 'Ngọn lửa nhỏ bé này sẽ thắp sáng cả con đường phiêu lưu phía trước!',
    stats: { damage: 6, toughness: 9, mobility: 7, crowdControl: 8, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Cuốc Lửa Tinh Linh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/198264bbca603677993387df6d66837d5b5eba85b8a121.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Phép',
        description: 'Mỗi 50 điểm máu tối đa của Roxie giúp chuyển hóa thành 1 điểm công phép, đòn đánh thứ 3 hồi máu và năng lượng cho nàng.',
        comboTip: 'Lên càng nhiều trang bị tăng máu tối đa, Roxie càng trở nên trâu bò và gây sát thương phép càng đau.'
      },
      {
        slot: 'skill1',
        name: 'Patin Lửa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3dca3080c6226d80c7d5e5553958ae0f5b5ebb41682fa1.png',
        cooldown: '1.0s (Bật/Tắt)',
        energyCost: 'Tiêu hao năng lượng liên tục',
        damageType: 'Phép',
        description: 'Roxie trượt patin rải một vệt lửa thiêu đốt sau lưng. Kẻ địch bước vào vệt lửa sẽ nhận sát thương phép liên tục và hồi máu cho Roxie.',
        comboTip: 'Bật patin lửa rồi chạy vòng quanh kẻ địch hoặc đợt lính để thiêu đốt và hồi phục liên tục.'
      },
      {
        slot: 'skill2',
        name: 'Balo Cứu Nạn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/e049eca888cabfc47203461432dab4d05b5ebca1987041.png',
        cooldown: '8.0s',
        energyCost: '60',
        damageType: 'Hỗ trợ',
        description: 'Tăng 20% tốc chạy và nhận một lớp lá chắn lớn trong 3 giây. Kẻ địch va vào Roxie bị làm chậm 50% trong 1.5 giây.',
        comboTip: 'Bật chiêu 2 tăng tốc chạy để nhanh chóng áp sát con mồi chuẩn bị kéo bằng chiêu cuối.'
      },
      {
        slot: 'ultimate',
        name: 'Keo Lửa Thần Kỳ',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/10709eb686383432a953a9eb7e851f5e5b5ebddd65b7d1.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Phóng ra một sợi roi lửa trói chặt mục tiêu đầu tiên trúng phải trong 2.5 giây. Trong thời gian này nạn nhân bị cưỡng chế kéo lê theo bước chân của Roxie bất chấp mọi kháng cự.',
        comboTip: 'Trói trúng chủ lực địch rồi bật chiêu 2 kéo thẳng nạn nhân vào sâu trong trụ nhà hoặc giữa vòng vây đồng đội.'
      }
    ],
    lore: `Cô gái thám hiểm mỏ quặng vui vẻ và yêu đời, bạn đồng hành cùng chú tinh linh lửa Agnie. Roxie rời quê nhà tham gia các cuộc hành trình khám phá những bí mật địa chất cổ xưa của lục địa Athanor. Với chiếc cuốc lửa và đôi giày patin rực cháy, nàng biến mọi chuyến phiêu lưu thành cuộc vui bất tận.`,
    battleTips: [
      'Combo kéo bắt người thần thánh: Tốc Biến + Chiêu cuối kéo mục tiêu về trụ đồng minh.',
      'Chiêu cuối không thể bị hóa giải bằng thanh tẩy một khi đã dính sợi keo lửa.',
      'Lên trang bị tăng máu như Rìu Leviathan, Giáp Gaia và Khiên Thất Truyền để tối đa nội tại.'
    ],
    recommendedItems: ['Rìu Leviathan', 'Giày Kiên Cường', 'Áo Choàng Băng Giá', 'Giáp Gaia', 'Mặt Nạ Berith', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['ata', 'annette', 'ishar', 'max', 'wisp']
  },

  {
    id: 'capheny',
    name: 'Capheny',
    title: 'Đại Bác Năng Lượng',
    factionId: 'tan_lien_hiep',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5c3212f3d7a6f95ad04a309d4d1f340a5ca5c222bda911.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f3c1c5a6dfdc7610f57568f84b7075d85ca5c237e25871.jpg',
    quote: 'Vũ khí này là ước mơ của ta, hãy xem sức mạnh công nghệ cơ khí tương lai đây!',
    stats: { damage: 10, toughness: 4, mobility: 8, crowdControl: 4, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Bắn Vừa Di Chuyển',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/aa1eb37c6e9eb4dedf5049e3aa199dd55ca5c27836dab1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Capheny có thể vừa bắn vừa di chuyển liên tục không bị khựng lại, 100% tốc đánh nhận thêm được chuyển hóa thành công vật lý.',
        comboTip: 'Thả diều không góc chết: liên tục giữ cần di chuyển trong lúc đè nút bắn tay.'
      },
      {
        slot: 'skill1',
        name: 'Đại Bác / Súng Sáu Nòng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f6a4f22122f4c272310193afdd298f225ca5c5a3338261.png',
        cooldown: '1.0s',
        energyCost: 'Tiêu hao năng lượng ở dạng đại bác',
        damageType: 'Vật lý',
        description: 'Chuyển đổi giữa 2 dạng vũ khí: Súng Sáu Nòng (xả đạn liên thanh tốc độ cao) và Đại Bác (bắn xuyên thấu tầm xa với sát thương chí mạng cực khủng).',
        comboTip: 'Chuyển sang dạng đại bác để cấu rỉa máu hoặc kết liễu kẻ địch ở khoảng cách xa.'
      },
      {
        slot: 'skill2',
        name: 'Pha Tốc Biến / Nạp Năng Lượng',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/c5bc1f812046f712e7a0a28bf41d66ba5ca5c8606dbb51.png',
        cooldown: '8.0s',
        energyCost: '50',
        damageType: 'Hỗ trợ',
        description: 'Xóa bỏ hiệu ứng làm chậm, tăng mạnh tốc độ di chuyển và tích lũy điểm xuyên giáp vật lý (ở dạng súng liên thanh) hoặc tích lũy tỉ lệ chí mạng (ở dạng đại bác).',
        comboTip: 'Bấm chiêu 2 để giải làm chậm lập tức và gia tăng sát thương xuyên thấu.'
      },
      {
        slot: 'ultimate',
        name: 'Mưa Xối Xả',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5e7274ee9583f2f80e7545611af8fa795ca5c8fe28dec1.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Khai hỏa đại liên bắn ra cơn mưa đạn quét liên tục hình nón về phía trước trong vài giây, vừa bắn vừa có thể di chuyển và trừ giáp kẻ địch liên tục.',
        comboTip: 'Xả chiêu cuối quét vào cả đội hình địch từ khoảng cách an toàn trước khi vào giao tranh cận chiến.'
      }
    ],
    lore: `Nữ sinh viên thiên tài khoa cơ khí ma thuật của Học Viện Carano. Sau khi phát hiện tổ chức hắc ám ngầm lợi dụng các nghiên cứu của gia đình mình vào mục đích quân sự tà ác, Capheny đã đánh cắp nguyên mẫu đại bác hạt năng lượng tối tân và trốn thoát, gia nhập phe chính nghĩa bảo vệ hòa bình.`,
    battleTips: [
      'Capheny có thể vừa di chuyển vừa xả chiêu cuối, hãy điều chỉnh góc bắn theo hướng di chuyển của địch.',
      'Sử dụng dạng Đại Bác (chiêu 1) để bắn tỉa trụ từ ngoài tầm ngắm của trụ.',
      'Lên Cung Tà Ma giúp Capheny vừa bắn vừa hút đầy cây máu trong nháy mắt khi bị áp sát.'
    ],
    recommendedItems: ['Giày Du Mục', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Cung Tà Ma', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['celica', 'wisp', 'max', 'thorne', 'quillen']
  },

  {
    id: 'goverra',
    name: 'Goverra',
    title: 'Tiễn Thần Cơ Giới',
    factionId: 'tan_lien_hiep',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/07/goverra-1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/07/goverra.jpg',
    quote: 'Mỗi mũi tên cơ giới bay ra đều được tính toán với độ chính xác tuyệt đối!',
    stats: { damage: 9, toughness: 4, mobility: 7, crowdControl: 6, difficulty: 6 },
    skills: [
      {
        slot: 'passive',
        name: 'Quang Cơ Xuyên Thấu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/07/SeaTalk_IMG_20250708_112716.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mỗi đòn đánh thứ 3 của Goverra xuyên qua mục tiêu và gây thêm sát thương vật lý lên tất cả kẻ địch trên đường bay thẳng, đồng thời tăng 15% tốc chạy.',
        comboTip: 'Căn thẳng hàng với đợt lính và tướng địch để đòn bắn nội tại xuyên trúng nhiều mục tiêu.'
      },
      {
        slot: 'skill1',
        name: 'Tiễn Trận Liên Hoàn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/07/SeaTalk_IMG_20250708_111713.png',
        cooldown: '5.0s',
        energyCost: '45',
        damageType: 'Vật lý',
        description: 'Bắn ra chùm 3 mũi tên cơ giới phân nhánh hình quạt, gây sát thương vật lý và làm chậm mục tiêu trúng tên 40%.',
        comboTip: 'Dùng để cấu rỉa máu tầm xa và làm chậm đối thủ hỗ trợ cho việc thả diều.'
      },
      {
        slot: 'skill2',
        name: 'Bẫy Lực Từ Trường',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/07/SeaTalk_IMG_20250708_111722.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Đặt bẫy từ trường tại vị trí chỉ định. Kẻ địch bước vào sẽ bị trói chân trong 1.2 giây và bộc lộ tầm nhìn trong 4 giây.',
        comboTip: 'Cài bẫy ở các lối vào bụi rậm ven sông để ngăn chặn các pha phục kích gank từ rừng đối phương.'
      },
      {
        slot: 'ultimate',
        name: 'Tên Thần Hủy Diệt',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2025/07/SeaTalk_IMG_20250708_111726.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Chuẩn',
        description: 'Vận sức phóng ra mũi cự tiễn tích tụ năng lượng cơ giới bay xuyên suốt toàn bộ bản đồ, gây sát thương chuẩn khổng lồ lên tất cả tướng địch trúng đòn.',
        comboTip: 'Bắn tỉa toàn bản đồ tương tự Yorn và Laville để hỗ trợ đồng đội kết liễu mục tiêu ở xa.'
      }
    ],
    lore: `Chuyên gia xạ kích hàng đầu tốt nghiệp phân khoa Khoa Học Cơ Giới Học Viện Carano. Goverra kế thừa tinh hoa chế tạo cơ khí kết hợp cùng thuật tiễn cổ xưa, sáng tạo nên cây đại nỏ đa nòng có khả năng bắn ra những mũi tên năng lượng xuyên thủng mọi lớp giáp kiên cố.`,
    battleTips: [
      'Đặt bẫy chiêu 2 liên tục trong bụi để kiểm soát tầm nhìn và trói chân sát thủ đối phương.',
      'Mũi tên chiêu cuối bay toàn bản đồ gây sát thương chuẩn, hãy căn hướng mục tiêu biến về để bắn tỉa.',
      'Lên trang bị tốc đánh và sát thương chuẩn như Kiếm Fafnir và Diệt Thần Cung.'
    ],
    recommendedItems: ['Giày Du Mục', 'Kiếm Fafnir', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['capheny', 'celica', 'thorne', 'elsu', 'yorn']
  },

  {
    id: 'bonnie',
    name: 'Bonnie',
    title: 'Thiếu Nữ Tia Chớp',
    factionId: 'tan_lien_hiep',
    role: 'Pháp Sư',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a2ed1b1815df9c719e4f9b4be5eb3a74658d4cd7d3ef61.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/Honeyview_840992a8ab634a71a411da6f2e91ddb4658d4eacca321.jpg',
    quote: 'Con mồi nhỏ bé màu vàng này sẽ cho các ngươi giật điện te tua!',
    stats: { damage: 8, toughness: 5, mobility: 6, crowdControl: 10, difficulty: 4 },
    skills: [
      {
        slot: 'passive',
        name: 'Tia Sáng Đáng Yêu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/3f4b3ebf43c198bceb7c15aef2495116658d4dd4255ed1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi kỹ năng của Bonnie đánh trúng tướng địch, cô nàng được nhận một lượng tốc chạy tăng dần trong vài giây giúp giữ vị trí an toàn.',
        comboTip: 'Liên tục dùng chiêu cấu máu để giữ tốc chạy cao tránh bị sát thủ áp sát.'
      },
      {
        slot: 'skill1',
        name: 'Thỏ Vàng Bắn Phá',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ed77ceb6820562769aafc022fada320a658d4e2562d781.png',
        cooldown: '5.0s',
        energyCost: '50',
        damageType: 'Phép',
        description: 'Ném chú thỏ vàng tích điện vào điểm chỉ định, gây sát thương phép và tạo một vùng điện từ trên mặt đất.',
        comboTip: 'Kỹ năng cấu máu chính từ khoảng cách an toàn cực xa.'
      },
      {
        slot: 'skill2',
        name: 'Thỏ Vàng Trói Buộc',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/94a184663f78fcc05bd2d72818157b9e658d4e4a6d0351.png',
        cooldown: '9.0s',
        energyCost: '60',
        damageType: 'Phép',
        description: 'Khóa mục tiêu chỉ định khiến chú thỏ vàng nhảy lên đầu địch làm choáng và trói chân mục tiêu trong 1.5 giây.',
        comboTip: 'Chiêu khống chế chỉ định thẳng vào đầu đối thủ, khắc chế cứng các sát thủ cơ động như Nakroth, Murad, Aoi.'
      },
      {
        slot: 'ultimate',
        name: 'Thỏ Vàng Đại Náo',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/876bb07811f01246993623de236949b2658d4e8093c0b1.png',
        cooldown: '35.0s',
        energyCost: '100',
        damageType: 'Phép',
        description: 'Triệu hồi thỏ vàng khổng lồ tạo lốc xoáy điện từ hút tất cả kẻ địch xung quanh vào tâm liên tục gây sát thương phép và làm choáng diện rộng đợt nổ cuối cùng.',
        comboTip: 'Dùng chiêu 2 trói cứng mục tiêu trước, sau đó quẳng chiêu cuối ngay tâm để hút trọn cả đội địch.'
      }
    ],
    lore: `Cô bé dễ thương nhưng vô cùng nghịch ngợm của Học Viện Carano, người sở hữu thú nhồi bông tích điện thỏ vàng đặc biệt. Bonnie có khả năng tạo ra các trường điện từ kỳ ảo có thể trói chặt và hút phăng bất kỳ kẻ địch xấu số nào dám cả gan chọc giận cô bé.`,
    battleTips: [
      'Chiêu 2 của Bonnie là khống chế chỉ định không thể né, hãy nhắm thẳng vào sát thủ đối phương khi chúng lao vào.',
      'Chiêu cuối hút diện rộng cực mạnh, kết hợp hoàn hảo với các chiêu thức sát thương lớn của đồng đội.',
      'Lên Mặt Nạ Berith và Trượng Băng để tối đa hóa hiệu ứng làm chậm và thiêu đốt diện rộng.'
    ],
    recommendedItems: ['Giày Thuật Sĩ', 'Mặt Nạ Berith', 'Trượng Bùng Nổ', 'Trượng Băng', 'Vương Miện Hecate', 'Quả Cầu Băng Sương'],
    relatedHeroIds: ['ishar', 'annette', 'keera', 'ata', 'dirak']
  },

  {
    id: 'quillen',
    name: 'Quillen',
    title: 'Đao Phủ Bóng Đêm',
    factionId: 'hoi_am_hoang',
    role: 'Sát Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/f6004ed060dcff380fc5b13574986bbc5bf778bc905561.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/8ecc35d079463abfc3fd50d96e0897cd5bf778de39e711.jpg',
    quote: 'Sau lưng ngươi luôn là tử huyệt, và ta luôn hiện diện ở đó!',
    stats: { damage: 10, toughness: 3, mobility: 9, crowdControl: 4, difficulty: 7 },
    skills: [
      {
        slot: 'passive',
        name: 'Đánh Lén',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/70997aa44e79e4fb5a2d7061d9336bdd5bf77954dd33e1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Mọi đòn đánh và kỹ năng trúng SAU LƯNG kẻ địch ĐỀU 100% CHÍ MẠNG. Ngược lại, chém từ trước mặt sẽ KHÔNG THỂ GÂY CHÍ MẠNG.',
        comboTip: 'Luôn luôn luồn ra sau lưng kẻ địch để toàn bộ sát thương đạt 100% chí mạng.'
      },
      {
        slot: 'skill1',
        name: 'Chém Đôi',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ffe34f7a30fd35e90d569deb75c1b15f5bf7798b0833b1.png',
        cooldown: '4.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Vung song đao chém nhanh 2 nhát liên tiếp theo hướng chỉ định, gây sát thương vật lý có thể chí mạng.',
        comboTip: 'Chém sau lưng mục tiêu sẽ gây 2 nhát chém chí mạng bốc hơi cây máu đối thủ.'
      },
      {
        slot: 'skill2',
        name: 'Đoạt Mệnh',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/5ce24d3ca3420137995537d86ae72eb85bf779c984a261.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt xuyên qua kẻ địch gây sát thương và đánh dấu ấn. Đòn đánh lên mục tiêu dính ấn làm chậm và giảm sát thương của nạn nhân lên Quillen.',
        comboTip: 'Dùng để lướt xuyên người đối thủ ra sau lưng chúng rồi lập tức tung chiêu 1.'
      },
      {
        slot: 'ultimate',
        name: 'Ẩn Thân Thuật',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/48d7e4d1147aaa02d92c8207fe6fa40f5bf779fa543871.png',
        cooldown: '20.0s',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Quillen tiến vào trạng thái tàng hình trong 3 giây, tăng tốc chạy và hồi máu. Khi thoát tàng hình tăng mạnh công vật lý. HẠ GỤC HOẶC HỖ TRỢ LẬP TỨC HỒI CHIÊU TẤT CẢ KỸ NĂNG.',
        comboTip: 'Hạ gục một mục tiêu sẽ hồi lại toàn bộ chiêu thức, tiếp tục tàng hình quét sạch đội hình địch.'
      }
    ],
    lore: `Thống lĩnh tối cao và người sáng lập Hội Ám Hoàng (Shadow Hand). Quillen mang tư tưởng cực đoan về sự độc tôn và thuần khiết của loài người, sử dụng thuật ám sát đẫm máu để loại trừ mọi chủng tộc và kẻ chống đối trong bóng tối chính trị Tân Liên Hiệp.`,
    battleTips: [
      'Quillen phải chém sau lưng mới có thể chí mạng, hãy luôn vòng ra sau lưng mục tiêu bằng chiêu 2.',
      'Chiêu cuối hồi lại ngay khi có mạng hạ gục hoặc phụ giúp; hãy nhắm vào mục tiêu máu yếu nhất trước.',
      'Lên trang bị tăng sát thương chí mạng như Thánh Kiếm và Phức Hợp Kiếm.'
    ],
    recommendedItems: ['Kiếm Truy Hồn', 'Giày Kiên Cường', 'Thánh Kiếm', 'Thương Xuyên Phá', 'Phức Hợp Kiếm', 'Nanh Fenrir'],
    relatedHeroIds: ['veres', 'amily', 'thorne', 'sinestrea', 'dextra']
  },

  {
    id: 'thorne',
    name: 'Thorne',
    title: 'Kẻ Phát Minh Ám Ảnh',
    factionId: 'hoi_am_hoang',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/dd8031b80a4fc5978cdd4886a65a6eb35f5070fd5d0221.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/02d261484bcffc9e2df47a9a0e9fa4995fbcbc6f479781.jpg',
    quote: 'Mỗi viên đạn ma thuật đều chứa đựng công thức hủy diệt hoàn hảo!',
    stats: { damage: 10, toughness: 4, mobility: 7, crowdControl: 7, difficulty: 8 },
    skills: [
      {
        slot: 'passive',
        name: 'Điều Tốc Ma Thuật',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/13f4e4231c42f79891f4c55c34d12d9f610006c20421b1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Thorne không bị giới hạn giảm hồi chiêu. Mỗi 1% giảm hồi chiêu vượt mức được chuyển hóa thành công vật lý bổ sung cực lớn.',
        comboTip: 'Lên trang bị tối đa giảm thời gian hồi chiêu để nhận lượng công vật lý khổng lồ miễn phí.'
      },
      {
        slot: 'skill1',
        name: 'Đạn Ma Pháp',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/59e4d767e21346fd1cc27d01a603dba7610007dedf5601.png',
        cooldown: '1.0s',
        energyCost: '0',
        damageType: 'Hỗn hợp',
        description: 'Nạp đạn ma thuật vào băng đạn (tối đa 3 viên): Đạn Tím (sát thương phép theo máu tối đa), Đạn Vàng (làm chậm và choáng), Đạn Xanh (hồi chiêu và năng lượng).',
        comboTip: 'Combo 3 Đạn Tím để sốc sát thương bốc hơi tanker, hoặc 3 Đạn Vàng để khống chế cứng kẻ địch.'
      },
      {
        slot: 'skill2',
        name: 'Cuồng Ma Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a32183ab88f248cad2ff57945abdec8f61000888b9a451.png',
        cooldown: '8.0s',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Lướt về phía trước, cường hóa đòn đánh kế tiếp với tầm bắn siêu xa và kích hoạt toàn bộ hiệu ứng của các viên đạn ma thuật đã nạp trong ổ đạn.',
        comboTip: 'Lướt chiêu 2 để bắn ra phát đạn tầm cực xa mang theo hiệu ứng choáng hoặc sốc sát thương hủy diệt.'
      },
      {
        slot: 'ultimate',
        name: 'Ma Súng Phán Quyết',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/306ffc0357c3704743973c1cb597b070610009c6795b91.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Vận sức tạo một vùng ma trận hình chữ nhật siêu lớn oanh tạc đạn ma thuật, gây sát thương vật lý cực mạnh lên tất cả kẻ địch trong vùng.',
        comboTip: 'Dùng để dọn đợt lính từ xa hoặc khép góc đối phương trong các pha giao tranh tranh chấp hang Rồng/Tà Thần.'
      }
    ],
    lore: `Xạ thủ thiên tài của Hội Ám Hoàng do chính Quillen dìu dắt. Thorne chế tạo cỗ ma súng ổ quay nạp ba loại đạn nguyên tố ma thuật, thực hiện các nhiệm vụ tiêu diệt mục tiêu tầm xa với độ chính xác tuyệt đối không một sai số.`,
    battleTips: [
      'Học thuộc các tổ hợp nạp đạn: 3 tím (sát thương khủng), 2 vàng 1 tím (choáng và dồn dame), 3 vàng (choáng lâu).',
      'Chiêu 2 lướt giúp Thorne có tầm bắn xa hơn trụ, dùng để cấu rỉa trụ cực kỳ nguy hiểm.',
      'Tập trung tích lũy trang bị có giảm hồi chiêu để chuyển hóa thành công vật lý.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thánh Kiếm', 'Song Đao Bão Táp', 'Phức Hợp Kiếm', 'Diệt Thần Cung', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['quillen', 'veres', 'amily', 'sinestrea', 'dextra']
  },

  {
    id: 'amily',
    name: 'Amily',
    title: 'Nữ Quyền Vương',
    factionId: 'hoi_am_hoang',
    role: 'Đấu Sĩ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/65b8d8e674af00ee4ecbb4030e8fac385b88ea13824d31.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/7cf166510b07a9996810020bc87d806a5b88ea310908e1.jpg',
    quote: 'Đôi chân này có thể đá vỡ mọi lớp giáp thép kiên cố nhất!',
    stats: { damage: 9, toughness: 8, mobility: 7, crowdControl: 6, difficulty: 5 },
    skills: [
      {
        slot: 'passive',
        name: 'Đơn Đả Độc Đấu',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ec5c84296c683559bf8e2317afe747fd5b88bb9bcb5491.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Hỗ trợ',
        description: 'Khi đòn đánh thường và chiêu 2 chỉ trúng DUY NHẤT 1 MỤC TIÊU, sát thương gây ra được tăng thêm 50%, biến Amily thành chúa tể solo 1vs1.',
        comboTip: 'Tìm cách bắt lẻ các mục tiêu đi một mình để kích hoạt thêm 50% sát thương từ nội tại.'
      },
      {
        slot: 'skill1',
        name: 'Tàng Đao Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/23ad6fc045854032d8423ffb4ae505655b88bc0f204201.png',
        cooldown: '6.0s',
        energyCost: '50',
        damageType: 'Vật lý',
        description: 'Phóng lưỡi dao bay nảy giữa tối đa 4 kẻ địch gây sát thương và làm chậm. Khi dao quay về, Amily hồi máu và tăng 20% tốc độ di chuyển.',
        comboTip: 'Dùng để cấu máu đối thủ từ xa và hồi phục lượng máu dồi dào khi đi đường.'
      },
      {
        slot: 'skill2',
        name: 'Liên Hoàn Cước',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/820466c2865c374152d409f6c6fef1265b88bd507e60c1.png',
        cooldown: '7.0s',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Tung ra 2 cú đá liên tiếp hất văng mục tiêu, đòn đánh kế tiếp lướt tới chém mạnh gây thêm sát thương và làm chậm kẻ địch.',
        comboTip: 'Áp sát và hất tung mục tiêu đơn lẻ để nhận trọn vẹn 50% sát thương cộng thêm từ nội tại.'
      },
      {
        slot: 'ultimate',
        name: 'Cuồng Bạo Hóa',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/95c375987886101d4dac08d25d0dc72e5b88bdbb4f3dd1.png',
        cooldown: '40.0s',
        energyCost: '100',
        damageType: 'Hỗn hợp',
        description: 'Sau 1 giây vận sức bộc phát sát thương phép diện rộng, Amily hóa thân thành chiến binh cuồng nộ: Tăng công vật lý, miễn thương cố định cực lớn và thiêu đốt kẻ địch xung quanh trong 8 giây.',
        comboTip: 'Bật chiêu cuối trước khi lao vào hỗn chiến để nhận lượng miễn thương khổng lồ chịu đòn cho cả đội.'
      }
    ],
    lore: `Nữ sát thủ từng trốn chạy khỏi tổ chức ngầm Ám Dạ Phái để đi tìm lại đứa em gái thất lạc Sinestrea. Trải qua bao cuộc chiến đẫm máu, Amily trui rèn đôi chân thành thứ vũ khí đoạt mệnh sắc bén. Nàng phiêu bạt qua các vùng lãnh thổ Carano và Norman, sẵn sàng nghiền nát bất cứ ai dám đe dọa sự an nguy của em gái nàng.`,
    battleTips: [
      'Amily cực mạnh trong các tình huống solo 1vs1 nhờ nội tại tăng 50% sát thương khi đánh trúng 1 mục tiêu.',
      'Chiêu cuối giúp Amily chặn đứng một lượng sát thương cố định mỗi đòn đánh, biến nàng thành bức tường thép.',
      'Lên Thương Longinus và Áo Choàng Băng Giá để vừa có độ cứng cáp vừa dính chặt lấy con mồi.'
    ],
    recommendedItems: ['Giày Kiên Cường', 'Thương Longinus', 'Áo Choàng Băng Giá', 'Nanh Fenrir', 'Huân Chương Troy', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['sinestrea', 'dextra', 'quillen', 'veres', 'arthur']
  },

  {
    id: 'elsu',
    name: 'Elsu',
    title: 'Xạ Thủ Tinh Anh',
    factionId: 'carano',
    role: 'Xạ Thủ',
    avatarUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/449789489494c0f108a3db5db3098e585bc98d17e666b1.jpg',
    bannerUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/fec52948b2886e191fa03b45047ae6e45bc98f982cf5d1.jpg',
    quote: 'Mỗi viên đạn bắn ra từ nòng súng ngắm này là một lời thề bảo vệ quê hương!',
    stats: { damage: 10, toughness: 4, mobility: 6, crowdControl: 5, difficulty: 9 },
    skills: [
      {
        slot: 'passive',
        name: 'Bắn Tỉa Tàng Hình',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/ec43db4942e0a3ff0d243b27cc26c6955bc98ff924c2e1.png',
        cooldown: 'Nội tại',
        energyCost: '0',
        damageType: 'Vật lý',
        description: 'Khi đứng gần vách tường hoặc địa hình, Elsu tiến vào trạng thái ngụy trang tàng hình và tăng tốc chạy. Đòn đánh thường không thể chí mạng nhưng nhận thêm lượng lớn công vật lý và xuyên giáp.',
        comboTip: 'Di chuyển men theo vách tường để tàng hình di chuyển an toàn và nhận thêm tốc chạy.'
      },
      {
        slot: 'skill1',
        name: 'Ưng Trạm',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/541779a66c0b049914df652690a22cf05bc98e5808b9c1.png',
        cooldown: '1.0s (Tích trữ 3 lần)',
        energyCost: '30',
        damageType: 'Hỗ trợ',
        description: 'Cắm một thiết bị ưng trạm soi sáng một vùng rộng lớn trên bản đồ và phát hiện kẻ địch tàng hình trong 300 giây.',
        comboTip: 'Cắm ưng trạm ở các ngã ba sông và bụi cỏ then chốt để kiểm soát toàn bộ đường đi của rừng đối phương.'
      },
      {
        slot: 'skill2',
        name: 'Viễn Trình Kích',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/236e8ede3380192a84f4d06e51beb5815bc98e8ebf3361.png',
        cooldown: '1.5s (Tích trữ 3 lần)',
        energyCost: '60',
        damageType: 'Vật lý',
        description: 'Ngắm bắn tỉa tầm siêu xa, xuyên qua tất cả đơn vị trên đường bay và gây lượng sát thương vật lý kinh hoàng kèm phần trăm máu tối đa lên nạn nhân trúng đạn.',
        comboTip: 'Tụ đủ 3 đường ngắm gom lại làm một trước khi thả cò để phát bắn đạt độ chính xác 100%.'
      },
      {
        slot: 'ultimate',
        name: 'Giật Bắn',
        iconUrl: 'https://lienquan.garena.vn/wp-content/uploads/2024/05/a51dfc36484425637ae76ef9a70d9bea5bc98ed0545bb1.png',
        cooldown: '25.0s',
        energyCost: '100',
        damageType: 'Vật lý',
        description: 'Lộn nhào ngược về sau bắn ra phát đạn uy lực gây sát thương vật lý và làm chậm 50% kẻ địch trước mặt, đồng thời tăng tốc chạy cho Elsu.',
        comboTip: 'Kỹ năng tẩu thoát và outplay tuyệt vời khi bị đấu sĩ hoặc sát thủ áp sát bất ngờ.'
      }
    ],
    lore: `Xạ thủ bắn tỉa huyền thoại bảo vệ thị trấn Mildar vùng biên giới Carano. Elsu là một chiến sĩ thầm lặng với khẩu súng ngắm ma pháp tầm bắn xa nhất đại lục Athanor. Anh không thích chiến tranh nhưng sẵn sàng bóp cò tiêu diệt bất kỳ kẻ địch nào dám đe dọa sự bình yên của người dân và đồng đội.`,
    battleTips: [
      'Ưng trạm chiêu 1 là công cụ kiểm soát bản đồ lợi hại bậc nhất, giúp đồng đội hoàn toàn miễn nhiễm bị gank.',
      'Tập luyện kỹ năng ngắm bắn chiêu 2 giấu đường ngắm (vẩy tâm) để đối phương không kịp né tránh.',
      'Sử dụng chiêu cuối để vượt qua các vách tường khi bị truy đuổi.'
    ],
    recommendedItems: ['Giày Du Mục', 'Kiếm Muramasa', 'Thương Xuyên Phá', 'Nanh Fenrir', 'Nham Thuẫn', 'Giáp Hộ Mệnh'],
    relatedHeroIds: ['capheny', 'thorne', 'celica', 'quillen', 'violet']
  }
];
