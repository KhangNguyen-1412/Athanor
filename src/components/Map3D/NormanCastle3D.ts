import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface NormanCastleSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Thành Khởi Nguyên / Lâu Đài Khởi Nguyên (Norman Castle):
// Tọa lạc ở khu vực trung tâm phía Nam của Lục địa Athanor, án ngữ ngay trước cửa ngõ dẫn tới Vực Hỗn Mang
export const NORMAN_CASTLE_COORD = { x: 69.5, y: 56.0 };

/**
 * Hệ thống kiến trúc và sinh thái 3D cho THÀNH KHỞI NGUYÊN (NORMAN CASTLE):
 * 1. Địa thế phòng thủ vững chãi: Hệ thống hào sông bao quanh, đê kè lũy thành đá khổng lồ gia cố kiên cố.
 * 2. Kiến trúc vương quyền & cơ giới kết hợp:
 *    - Đại Điện Hoàng Gia với mái nhọn vương quyền Norman (xanh sapphire viền vàng) và các ngọn tháp chọc trời của Vua Thane.
 *    - Tường thành đôi với cổng vòm kiên cố, lỗ châu mai, ụ pháo và các tháp canh phòng thủ Vực Hỗn Mang.
 *    - Khu Vực Lâu Đài Cơ Giới: Tháp bánh răng cơ máy (Clockwork gears) quay đều, ống khói hơi nước (steam vents) của kỹ sư Moren & Rourke.
 *    - Tượng đài Thanh Gươm Anh Dũng & Khiên Thánh của Đức Vua Thane tỏa hào quang hoàng kim.
 * 3. Sinh vật & phương tiện cơ giới nổi tiếng:
 *    - Chiến mã bọc thép hoàng gia: Ngựa chiến to lớn mang giáp sắt nặng không sợ hãi trước tà ma.
 *    - Khí cầu cơ giới tuần tra (Steampunk Royal Zeppelin): Khí cầu cánh quạt bay lượn tuần tra bảo vệ không phận thành phố.
 *    - Gia tốc điểu (Clockwork Mechanical Falcon): Chim cơ máy sải cánh bay lượn truyền tin trên bầu trời.
 */
export function createNormanCastle3D(): NormanCastleSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(NORMAN_CASTLE_COORD.x, NORMAN_CASTLE_COORD.y, 16.5);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // BẢNG VẬT LIỆU CAO CẤP (NORMAN ROYAL & STEAMPUNK PALETTE)
  // =========================================================================
  // Đá hoa cương trắng xám hoàng gia
  const normanStoneMat = new THREE.MeshStandardMaterial({
    color: '#e2e8f0',
    roughness: 0.55,
    metalness: 0.15,
  });

  const darkGraniteMat = new THREE.MeshStandardMaterial({
    color: '#334155',
    roughness: 0.8,
    metalness: 0.25,
  });

  // Mái ngói nhọn vương quyền xanh Sapphire Norman
  const royalSapphireRoofMat = new THREE.MeshStandardMaterial({
    color: '#1e3a8a',
    roughness: 0.35,
    metalness: 0.45,
  });

  // Vàng hoàng gia của Đức Vua Thane
  const thaneGoldMat = new THREE.MeshStandardMaterial({
    color: '#facc15',
    emissive: '#ca8a04',
    emissiveIntensity: 0.5,
    roughness: 0.2,
    metalness: 0.9,
  });

  // Đồng thau cơ giới (Steampunk Brass & Bronze)
  const steampunkBrassMat = new THREE.MeshStandardMaterial({
    color: '#d97706',
    roughness: 0.3,
    metalness: 0.85,
  });

  const ironGearMat = new THREE.MeshStandardMaterial({
    color: '#64748b',
    roughness: 0.4,
    metalness: 0.8,
  });

  // Hào nước phòng thủ
  const moatWaterMat = new THREE.MeshStandardMaterial({
    color: '#0284c7',
    roughness: 0.15,
    metalness: 0.65,
    transparent: true,
    opacity: 0.85,
  });

  // Cờ hiệu Norman (Xanh lam hoàng gia)
  const normanBannerMat = new THREE.MeshStandardMaterial({
    color: '#2563eb',
    roughness: 0.7,
    side: THREE.DoubleSide,
  });

  // Giáp sắt kỵ sĩ & chiến mã
  const heavySteelArmorMat = new THREE.MeshStandardMaterial({
    color: '#f1f5f9',
    roughness: 0.25,
    metalness: 0.95,
  });

  const warhorseCoatMat = new THREE.MeshStandardMaterial({
    color: '#1e293b',
    roughness: 0.8,
    metalness: 0.1,
  });

  // Khí cầu cơ giới vải bạt & đồng
  const zeppelinHullMat = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.5,
    metalness: 0.2,
  });

  // Chim cơ máy (Gia tốc điểu)
  const falconBrassMat = new THREE.MeshStandardMaterial({
    color: '#fbbf24',
    emissive: '#d97706',
    emissiveIntensity: 0.4,
    roughness: 0.25,
    metalness: 0.9,
  });

  // =========================================================================
  // 1. HỆ THỐNG HÀO NƯỚC SÂU TỰ NHIÊN & TƯỜNG THÀNH ĐÁ KHỔNG LỒ
  // =========================================================================
  const defenseGroup = new THREE.Group();

  // Hào nước sâu bao quanh thành (Moat Water Ring)
  const moatGeo = new THREE.RingGeometry(22, 32, 48);
  moatGeo.rotateX(-Math.PI / 2);
  const moatMesh = new THREE.Mesh(moatGeo, moatWaterMat);
  moatMesh.position.y = 0.5;
  defenseGroup.add(moatMesh);

  // Thềm đá pháo đài đa giác kiên cố (Citadel Stone Bastion)
  const bastionGeo = new THREE.CylinderGeometry(21.5, 23.5, 5, 24);
  const bastionMesh = new THREE.Mesh(bastionGeo, darkGraniteMat);
  bastionMesh.position.y = 2.5;
  defenseGroup.add(bastionMesh);

  // Thềm đá hoa cương trung tâm bên trên (Upper Courtyard)
  const upperPlazaGeo = new THREE.CylinderGeometry(19.5, 20.5, 1.5, 24);
  const upperPlaza = new THREE.Mesh(upperPlazaGeo, normanStoneMat);
  upperPlaza.position.y = 5.6;
  defenseGroup.add(upperPlaza);

  // Tường thành đôi khổng lồ với lỗ châu mai (Concentric Curtain Walls)
  const wallRingGeo = new THREE.TorusGeometry(19.5, 0.7, 8, 36);
  wallRingGeo.rotateX(Math.PI / 2);
  const wallRing = new THREE.Mesh(wallRingGeo, darkGraniteMat);
  wallRing.position.y = 6.8;
  defenseGroup.add(wallRing);

  // 6 Tháp canh hình trụ vững chãi bảo vệ biên ải
  for (let t = 0; t < 6; t++) {
    const angle = (t / 6) * Math.PI * 2;
    const tx = Math.cos(angle) * 19.5;
    const tz = Math.sin(angle) * 19.5;

    const bastTowerGeo = new THREE.CylinderGeometry(2.2, 2.6, 10, 12);
    const bastTower = new THREE.Mesh(bastTowerGeo, darkGraniteMat);
    bastTower.position.set(tx, 9, tz);

    const roofGeo = new THREE.ConeGeometry(2.8, 5, 12);
    const roof = new THREE.Mesh(roofGeo, royalSapphireRoofMat);
    roof.position.set(tx, 16.5, tz);

    defenseGroup.add(bastTower, roof);
  }

  // Cầu đá lớn nối qua hào nước dẫn vào cổng thành (Grand Moat Bridge)
  const bridgeDeckGeo = new THREE.BoxGeometry(5.5, 1.2, 14);
  const bridgeDeck = new THREE.Mesh(bridgeDeckGeo, normanStoneMat);
  bridgeDeck.position.set(0, 3.2, 25);

  const bridgeGatehouseGeo = new THREE.BoxGeometry(9, 8, 3.5);
  const bridgeGatehouse = new THREE.Mesh(bridgeGatehouseGeo, darkGraniteMat);
  bridgeGatehouse.position.set(0, 8.5, 19.5);

  // Cổng vòm sắt nâng hạ (Portcullis Gate)
  const gateArchGeo = new THREE.TorusGeometry(2.2, 0.4, 8, 16, Math.PI);
  const gateArch = new THREE.Mesh(gateArchGeo, thaneGoldMat);
  gateArch.position.set(0, 8.5, 21.3);

  defenseGroup.add(bridgeDeck, bridgeGatehouse, gateArch);
  rootGroup.add(defenseGroup);

  // =========================================================================
  // 2. ĐẠI ĐIỆN HOÀNG GIA CỦA VUA THANE & QUẢNG TRƯỜNG KHỞI NGUYÊN
  // =========================================================================
  const palaceGroup = new THREE.Group();

  // Khối Đại Điện Trung Tâm (Central Royal Palace)
  const palaceBodyGeo = new THREE.BoxGeometry(16, 12, 14);
  const palaceBody = new THREE.Mesh(palaceBodyGeo, normanStoneMat);
  palaceBody.position.set(0, 12, -2);
  palaceGroup.add(palaceBody);

  // Mái vòm Gothic nhọn màu xanh Sapphire viền vàng
  const mainRoofGeo = new THREE.ConeGeometry(11, 7, 4);
  mainRoofGeo.rotateY(Math.PI / 4);
  const mainRoof = new THREE.Mesh(mainRoofGeo, royalSapphireRoofMat);
  mainRoof.position.set(0, 21.5, -2);
  palaceGroup.add(mainRoof);

  // Đại Tháp Vương Quyền cao vút chọc trời (The King's High Spires)
  const kingSpireGeo = new THREE.CylinderGeometry(2.2, 3.0, 18, 12);
  const kingSpire = new THREE.Mesh(kingSpireGeo, normanStoneMat);
  kingSpire.position.set(0, 21, -2);

  const kingSpireRoofGeo = new THREE.ConeGeometry(2.6, 9, 12);
  const kingSpireRoof = new THREE.Mesh(kingSpireRoofGeo, royalSapphireRoofMat);
  kingSpireRoof.position.set(0, 34.5, -2);

  // Tượng Chim Ưng Hoàng Gia Vàng Kim trên đỉnh tháp
  const eagleMonumentGeo = new THREE.OctahedronGeometry(1.4);
  const eagleMonument = new THREE.Mesh(eagleMonumentGeo, thaneGoldMat);
  eagleMonument.position.set(0, 39.5, -2);

  palaceGroup.add(kingSpire, kingSpireRoof, eagleMonument);

  // CỜ HIỆU VƯƠNG QUYỀN NORMAN (ROYAL NORMAN BANNERS)
  const banners: THREE.Mesh[] = [];
  const bannerCoords = [
    { x: -7, y: 19, z: 5.5 },
    { x: 7, y: 19, z: 5.5 },
    { x: 0, y: 39, z: -0.5 },
  ];

  for (const bc of bannerCoords) {
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 4, 8),
      thaneGoldMat
    );
    pole.position.set(bc.x, bc.y, bc.z);
    palaceGroup.add(pole);

    const bannerGeo = new THREE.PlaneGeometry(1.8, 3.0);
    const banner = new THREE.Mesh(bannerGeo, normanBannerMat);
    banner.position.set(bc.x + 0.9, bc.y - 0.5, bc.z);
    palaceGroup.add(banner);
    banners.push(banner);
  }

  // TƯỢNG ĐÀI THANH GƯƠM ANH DŨNG CỦA VUA THANE (THANE'S VALIANT GREATSWORD & SHIELD)
  const thaneMonumentGroup = new THREE.Group();
  thaneMonumentGroup.position.set(0, 6.5, 7.5); // Tại quảng trường trung tâm

  // Khiên Thánh khổng lồ
  const shieldGeo = new THREE.CylinderGeometry(1.8, 1.4, 0.4, 6);
  shieldGeo.rotateX(Math.PI / 2);
  const shield = new THREE.Mesh(shieldGeo, thaneGoldMat);
  shield.position.set(0, 2.8, -0.6);

  // Thanh Gươm Anh Dũng cắm thẳng đứng
  const swordBladeGeo = new THREE.BoxGeometry(0.35, 5.0, 0.08);
  const swordBlade = new THREE.Mesh(swordBladeGeo, heavySteelArmorMat);
  swordBlade.position.y = 3.2;

  const crossguardGeo = new THREE.BoxGeometry(1.8, 0.28, 0.28);
  const crossguard = new THREE.Mesh(crossguardGeo, thaneGoldMat);
  crossguard.position.y = 5.2;

  const swordHiltGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8);
  const swordHilt = new THREE.Mesh(swordHiltGeo, darkGraniteMat);
  swordHilt.position.y = 6.0;

  const pommelGeo = new THREE.SphereGeometry(0.28, 8, 8);
  const pommel = new THREE.Mesh(pommelGeo, thaneGoldMat);
  pommel.position.y = 6.8;

  // Hào quang vàng hoàng gia tỏa sáng từ Thánh Kiếm
  const thaneAuraGeo = new THREE.SphereGeometry(3.5, 16, 12);
  const thaneAuraMat = new THREE.MeshBasicMaterial({
    color: '#facc15',
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  });
  const thaneAura = new THREE.Mesh(thaneAuraGeo, thaneAuraMat);
  thaneAura.position.y = 4.2;

  thaneMonumentGroup.add(shield, swordBlade, crossguard, swordHilt, pommel, thaneAura);
  palaceGroup.add(thaneMonumentGroup);

  rootGroup.add(palaceGroup);

  // =========================================================================
  // 3. KHU VỰC LÂU ĐÀI CƠ GIỚI (STEAMPUNK GEARS & CLOCKWORK TOWER)
  // =========================================================================
  const clockworkGroup = new THREE.Group();
  clockworkGroup.position.set(10.5, 6.5, -4.5); // Cánh đông thành phố

  // Tháp Cơ Giới Bằng Thép & Đồng Thau
  const mechTowerGeo = new THREE.CylinderGeometry(2.8, 3.4, 12, 8);
  const mechTower = new THREE.Mesh(mechTowerGeo, darkGraniteMat);
  mechTower.position.y = 6;
  clockworkGroup.add(mechTower);

  // Mái tháp cơ giới bằng đồng vòm nửa
  const mechDomeGeo = new THREE.SphereGeometry(3.0, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const mechDome = new THREE.Mesh(mechDomeGeo, steampunkBrassMat);
  mechDome.position.y = 12;
  clockworkGroup.add(mechDome);

  // BÁNH RĂNG CƠ MÁY KHỔNG LỒ (GIANT CLOCKWORK GEARS)
  const gear1Geo = new THREE.CylinderGeometry(2.4, 2.4, 0.4, 16);
  const gear1 = new THREE.Mesh(gear1Geo, steampunkBrassMat);
  gear1.position.set(0, 7.5, 3.0);
  gear1.rotateX(Math.PI / 2);

  const gear2Geo = new THREE.CylinderGeometry(1.6, 1.6, 0.35, 12);
  const gear2 = new THREE.Mesh(gear2Geo, ironGearMat);
  gear2.position.set(-2.6, 9.8, 3.0);
  gear2.rotateX(Math.PI / 2);

  clockworkGroup.add(gear1, gear2);

  // Ống khói hơi nước (Steam Chimneys)
  const chimneyGeo = new THREE.CylinderGeometry(0.35, 0.45, 4.5, 8);
  const chimney = new THREE.Mesh(chimneyGeo, steampunkBrassMat);
  chimney.position.set(1.5, 14, 0);
  clockworkGroup.add(chimney);

  rootGroup.add(clockworkGroup);

  // =========================================================================
  // 4. CHIẾN MÃ BỌC THÉP HOÀNG GIA (HEAVY ARMORED WARHORSE)
  // =========================================================================
  // Ngựa chiến kỵ sĩ Norman dũng mãnh tại sân duyệt binh
  const horseGroup = new THREE.Group();
  horseGroup.position.set(-6.5, 6.4, 7.5);

  // Thân ngựa to lớn
  const horseBodyGeo = new THREE.BoxGeometry(1.6, 1.4, 3.0);
  const horseBody = new THREE.Mesh(horseBodyGeo, warhorseCoatMat);
  horseBody.position.y = 2.0;
  horseGroup.add(horseBody);

  // Giáp sắt nặng phủ thân ngựa (Caparison & Barding)
  const bardingGeo = new THREE.BoxGeometry(1.7, 1.1, 2.2);
  const barding = new THREE.Mesh(bardingGeo, heavySteelArmorMat);
  barding.position.set(0, 1.9, 0.2);
  horseGroup.add(barding);

  // Cổ ngựa vươn cao
  const horseNeck = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 1.8, 1.0),
    warhorseCoatMat
  );
  horseNeck.position.set(0, 3.2, 1.3);
  horseNeck.rotateX(-Math.PI / 6);
  horseGroup.add(horseNeck);

  // Đầu ngựa bọc giáp sắt nặng kiên cố (Full Steel Champron)
  const horseHeadGroup = new THREE.Group();
  horseHeadGroup.position.set(0, 4.2, 1.8);

  const headMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.85, 1.5),
    warhorseCoatMat
  );
  headMesh.position.set(0, 0, 0.4);
  horseHeadGroup.add(headMesh);

  const champron = new THREE.Mesh(
    new THREE.BoxGeometry(0.85, 0.65, 1.3),
    heavySteelArmorMat
  );
  champron.position.set(0, 0.25, 0.4);
  horseHeadGroup.add(champron);

  horseGroup.add(horseHeadGroup);

  // 4 Chân bọc giáp
  const legGeo = new THREE.BoxGeometry(0.4, 1.8, 0.4);
  for (let lx = -0.55; lx <= 0.55; lx += 1.1) {
    for (let lz = -1.0; lz <= 1.0; lz += 2.0) {
      const leg = new THREE.Mesh(legGeo, heavySteelArmorMat);
      leg.position.set(lx, 0.9, lz);
      horseGroup.add(leg);
    }
  }

  // Đuôi ngựa đen tuyền
  const horseTail = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.28, 1.6, 6),
    darkGraniteMat
  );
  horseTail.position.set(0, 1.8, -1.7);
  horseTail.rotateX(Math.PI / 6);
  horseGroup.add(horseTail);

  rootGroup.add(horseGroup);

  // =========================================================================
  // 5. KHÍ CẦU CƠ GIỚI TUẦN TRA (STEAMPUNK ROYAL AIRSHIP)
  // =========================================================================
  // Khí cầu cơ giới tuần tra không phận thủ đô
  const airshipGroup = new THREE.Group();
  airshipGroup.position.set(0, 32, 0);

  // Thân khí cầu elip bọc đồng thau & bạt trắng
  const envelopeGeo = new THREE.SphereGeometry(3.5, 24, 16);
  envelopeGeo.scale(1.0, 0.85, 2.4);
  const envelope = new THREE.Mesh(envelopeGeo, zeppelinHullMat);
  airshipGroup.add(envelope);

  // Khung giáp mạ vàng & đồng thau bao bọc khí cầu
  const keelRingGeo = new THREE.TorusGeometry(3.6, 0.15, 8, 32);
  const keelRing = new THREE.Mesh(keelRingGeo, steampunkBrassMat);
  keelRing.rotateX(Math.PI / 2);
  airshipGroup.add(keelRing);

  // Cabin hành khách & buồng lái treo bên dưới (Gondola)
  const gondolaGeo = new THREE.BoxGeometry(1.6, 1.2, 3.8);
  const gondola = new THREE.Mesh(gondolaGeo, steampunkBrassMat);
  gondola.position.set(0, -3.2, 0);
  airshipGroup.add(gondola);

  // Cánh quạt chân vịt cơ giới phía sau
  const propellerGroup = new THREE.Group();
  propellerGroup.position.set(0, -3.2, -2.2);

  const blade1 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.25, 0.05), ironGearMat);
  const blade2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.8, 0.05), ironGearMat);
  propellerGroup.add(blade1, blade2);
  airshipGroup.add(propellerGroup);

  // Đèn pha trinh sát tuần tra quét xuống mặt đất (Searchlight Beam)
  const searchlightGeo = new THREE.ConeGeometry(3.5, 14, 16, 1, true);
  searchlightGeo.rotateX(Math.PI);
  const searchlightMat = new THREE.MeshBasicMaterial({
    color: '#fef08a',
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const searchlight = new THREE.Mesh(searchlightGeo, searchlightMat);
  searchlight.position.set(0, -9.5, 0);
  airshipGroup.add(searchlight);

  rootGroup.add(airshipGroup);

  // =========================================================================
  // 6. GIA TỐC ĐIỂU / CHIM CƠ MÁY (CLOCKWORK MECHANICAL FALCON)
  // =========================================================================
  // Chim cơ máy trinh sát và truyền tin của các kỹ sư
  const falconGroup = new THREE.Group();
  falconGroup.position.set(0, 26, 8);

  const falconBodyGeo = new THREE.ConeGeometry(0.35, 1.4, 6);
  falconBodyGeo.rotateX(-Math.PI / 2);
  const falconBody = new THREE.Mesh(falconBodyGeo, falconBrassMat);
  falconGroup.add(falconBody);

  // Đôi cánh cơ máy sải rộng
  const wingGeo = new THREE.PlaneGeometry(1.6, 0.6);
  const leftWing = new THREE.Mesh(wingGeo, falconBrassMat);
  leftWing.position.set(-0.9, 0, 0);
  leftWing.rotateX(Math.PI / 2);

  const rightWing = new THREE.Mesh(wingGeo, falconBrassMat);
  rightWing.position.set(0.9, 0, 0);
  rightWing.rotateX(Math.PI / 2);

  falconGroup.add(leftWing, rightWing);
  rootGroup.add(falconGroup);

  // =========================================================================
  // ANIMATION UPDATE LOOP (60 FPS)
  // =========================================================================
  return {
    group: rootGroup,
    update: (_delta: number, elapsed: number) => {
      // 1. Cờ hiệu hoàng gia phấp phới trong gió
      banners.forEach((b, idx) => {
        b.rotation.y = Math.sin(elapsed * 3.5 + idx * 1.2) * 0.22;
        b.rotation.z = Math.cos(elapsed * 2.8 + idx) * 0.08;
      });

      // 2. Hào quang Thánh Kiếm Vua Thane phát xung uy nghiêm
      const thanePulse = 1.0 + Math.sin(elapsed * 2.4) * 0.15;
      thaneAura.scale.set(thanePulse, thanePulse, thanePulse);

      // 3. Bánh răng cơ máy Lâu Đài Cơ Giới quay liên tục
      gear1.rotation.z += 0.015;
      gear2.rotation.z -= 0.022;

      // 4. Ngựa chiến bọc thép dậm chân lắc đầu
      horseHeadGroup.rotation.x = Math.sin(elapsed * 1.6) * 0.1;
      horseTail.rotation.z = Math.sin(elapsed * 2.2) * 0.12;

      // 5. Khí cầu cơ giới bay lượn tuần tra theo quỹ đạo elip
      const airshipAngle = elapsed * 0.25;
      const airshipRadius = 15;
      airshipGroup.position.x = Math.cos(airshipAngle) * airshipRadius;
      airshipGroup.position.z = Math.sin(airshipAngle) * (airshipRadius * 0.8);
      airshipGroup.position.y = 33 + Math.sin(elapsed * 0.8) * 1.2;
      airshipGroup.rotation.y = -airshipAngle + Math.PI / 2;

      // Cánh quạt khí cầu quay tít
      propellerGroup.rotation.z += 0.35;

      // 6. Chim cơ máy (Gia tốc điểu) sải cánh bay lượn
      const falconAngle = elapsed * 1.2;
      falconGroup.position.x = Math.cos(falconAngle) * 9;
      falconGroup.position.z = Math.sin(falconAngle) * 9;
      falconGroup.position.y = 26 + Math.sin(elapsed * 2.5) * 1.5;
      falconGroup.rotation.y = -falconAngle + Math.PI / 2;

      // Cánh chim cơ máy vỗ nhịp nhàng
      const wingFlap = Math.sin(elapsed * 9.0) * 0.45;
      leftWing.rotation.y = wingFlap;
      rightWing.rotation.y = -wingFlap;
    },
  };
}
