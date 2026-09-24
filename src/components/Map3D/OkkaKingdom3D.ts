import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface OkkaKingdomSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Vương Quốc Okka (Okka Kingdom):
// Tọa lạc tại phía Bắc của Lục địa Athanor, ngay ranh giới chuyển tiếp giữa Đồng bằng Ánh Trăng (Moonlit Plains) và Rừng Nguyên Sinh Elborne
export const OKKA_KINGDOM_COORD = { x: 44.5, y: 56.5 };

/**
 * Hệ thống kiến trúc và sinh thái 3D cho VƯƠNG QUỐC OKKA (OKKA KINGDOM):
 * 1. Pháo đài & Lâu đài đá thô cổ kính:
 *    - Vương quốc phong kiến lập quốc đầu tiên và lâu đời nhất của loài người.
 *    - Lâu đài trung tâm của Vua Arthur bằng khối đá thô (Rough stone keep) với tháp canh vuông, lỗ châu mai và cổng vòm sắt nâng hạ.
 *    - Cờ hiệu Hiệp sĩ Hoàng gia Okka (Sư tử vàng trên nền đỏ son) phấp phới trong gió.
 * 2. Thánh Kiếm Công Lý Của Vua Arthur:
 *    - Tượng đài Thánh Kiếm cắm trên tảng đá cổ tại quảng trường danh dự, phát hào quang vàng thánh khiết.
 * 3. Địa hình đan xen phòng thủ tự nhiên:
 *    - Đồi đá thô, đồng cỏ cao lộng gió của Đồng bằng Ánh Trăng và rặng thông cổ thụ của Rừng Elborne.
 * 4. Hệ sinh thái sinh vật nổi tiếng:
 *    - Chiến mã huyền thoại Okka: Ngựa chiến bọc giáp nặng dũng mãnh của kỵ binh hoàng gia.
 *    - Hươu Ánh Sáng (Luminous Astral Stag): Sinh vật thần thoại dịu thuần từ rừng Elborne với cặp gạc phát quang thanh khiết.
 *    - Ngọn đuốc thám hiểm của Roxie & Hoa hồng hiệp sĩ Florentino.
 */
export function createOkkaKingdom3D(): OkkaKingdomSystem {
  const rootGroup = new THREE.Group();
  // Đặt trên sống đồi cao nguyên Okka
  const basePos = mapPercentTo3D(OKKA_KINGDOM_COORD.x, OKKA_KINGDOM_COORD.y, 12.0);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // BẢNG VẬT LIỆU CAO CẤP (MEDIEVAL CHIVALRIC PALETTE)
  // =========================================================================
  // Đá thô lâu đài trung cổ
  const roughStoneMat = new THREE.MeshStandardMaterial({
    color: '#475569',
    roughness: 0.9,
    metalness: 0.15,
  });

  const darkStoneMat = new THREE.MeshStandardMaterial({
    color: '#1e293b',
    roughness: 0.85,
    metalness: 0.2,
  });

  const stoneTrimMat = new THREE.MeshStandardMaterial({
    color: '#94a3b8',
    roughness: 0.65,
    metalness: 0.2,
  });

  // Mái ngói đá phiến trung cổ
  const slateRoofMat = new THREE.MeshStandardMaterial({
    color: '#0f172a',
    roughness: 0.55,
    metalness: 0.3,
  });

  // Vàng hoàng gia của Vua Arthur
  const royalGoldMat = new THREE.MeshStandardMaterial({
    color: '#facc15',
    emissive: '#b45309',
    emissiveIntensity: 0.45,
    roughness: 0.25,
    metalness: 0.85,
  });

  // Cờ hiệu đỏ son vương quyền Okka
  const knightBannerMat = new THREE.MeshStandardMaterial({
    color: '#b91c1c',
    roughness: 0.75,
    side: THREE.DoubleSide,
  });

  // Giáp sắt kỵ binh Okka
  const knightArmorMat = new THREE.MeshStandardMaterial({
    color: '#cbd5e1',
    roughness: 0.3,
    metalness: 0.9,
  });

  // Da ngựa chiến nâu hạt dẻ
  const warhorseCoatMat = new THREE.MeshStandardMaterial({
    color: '#78350f',
    roughness: 0.75,
    metalness: 0.05,
  });

  // Hươu Ánh Sáng phát quang lân tinh
  const astralDeerMat = new THREE.MeshStandardMaterial({
    color: '#fef08a',
    emissive: '#ca8a04',
    emissiveIntensity: 0.75,
    roughness: 0.3,
    transparent: true,
    opacity: 0.92,
  });

  const antlersGlowMat = new THREE.MeshBasicMaterial({
    color: '#67e8f9',
    transparent: true,
    opacity: 0.85,
  });

  // Cỏ cao đồng bằng & rặng thông
  const grassHillMat = new THREE.MeshStandardMaterial({
    color: '#4d7c0f',
    roughness: 0.95,
  });

  const pineCanopyMat = new THREE.MeshStandardMaterial({
    color: '#14532d',
    roughness: 0.8,
  });

  // =========================================================================
  // 1. ĐỊA HÌNH ĐỒI ĐÁ THÔ & TƯỜNG THÀNH PHÒNG THỦ
  // =========================================================================
  const terrainGroup = new THREE.Group();

  // Đồi đất đá phòng thủ tự nhiên (Choke-point Hill Base)
  const hillGeo = new THREE.CylinderGeometry(20, 24, 4.5, 12);
  const hillMesh = new THREE.Mesh(hillGeo, grassHillMat);
  hillMesh.position.y = 2.0;
  terrainGroup.add(hillMesh);

  // Thềm đá thô xây thành trì (Stone Foundation)
  const castleBaseGeo = new THREE.BoxGeometry(26, 3.0, 24);
  const castleBase = new THREE.Mesh(castleBaseGeo, roughStoneMat);
  castleBase.position.y = 4.8;
  terrainGroup.add(castleBase);

  // Tường thành đá bao quanh với lỗ châu mai (Curtain Walls & Battlements)
  const wallSegments = [
    { x: 0, z: 11, w: 24, d: 2 }, // Tường trước
    { x: 0, z: -11, w: 24, d: 2 }, // Tường sau
    { x: -12, z: 0, w: 2, d: 20 }, // Tường tây
    { x: 12, z: 0, w: 2, d: 20 }, // Tường đông
  ];

  for (const seg of wallSegments) {
    const wallGeo = new THREE.BoxGeometry(seg.w, 4.5, seg.d);
    const wallMesh = new THREE.Mesh(wallGeo, roughStoneMat);
    wallMesh.position.set(seg.x, 7.8, seg.z);
    terrainGroup.add(wallMesh);

    // Lỗ châu mai (Crenellations) trên đỉnh tường
    const count = Math.floor(Math.max(seg.w, seg.d) / 2.2);
    for (let i = 0; i < count; i++) {
      if (i % 2 === 0) {
        const crenelGeo = new THREE.BoxGeometry(
          seg.w > seg.d ? 1.2 : seg.w,
          1.0,
          seg.d > seg.w ? 1.2 : seg.d
        );
        const crenel = new THREE.Mesh(crenelGeo, stoneTrimMat);
        const offset = (i - count / 2) * 2.2;
        crenel.position.set(
          seg.w > seg.d ? seg.x + offset : seg.x,
          10.5,
          seg.d > seg.w ? seg.z + offset : seg.z
        );
        terrainGroup.add(crenel);
      }
    }
  }

  // 4 Tháp canh góc vuông kiên cố (Corner Watchtowers)
  const cornerCoords = [
    { x: -12, z: -11 },
    { x: 12, z: -11 },
    { x: -12, z: 11 },
    { x: 12, z: 11 },
  ];

  for (const c of cornerCoords) {
    const towerGeo = new THREE.CylinderGeometry(2.4, 2.8, 9, 8);
    const tower = new THREE.Mesh(towerGeo, darkStoneMat);
    tower.position.set(c.x, 9.5, c.z);

    const roofGeo = new THREE.ConeGeometry(3.0, 4.0, 8);
    const roof = new THREE.Mesh(roofGeo, slateRoofMat);
    roof.position.set(c.x, 15.5, c.z);

    terrainGroup.add(tower, roof);
  }

  // Cổng vòm nâng hạ (Fortified Gatehouse)
  const gateL = new THREE.Mesh(new THREE.BoxGeometry(2.2, 7, 3), darkStoneMat);
  gateL.position.set(-3.2, 8.5, 11);
  const gateR = new THREE.Mesh(new THREE.BoxGeometry(2.2, 7, 3), darkStoneMat);
  gateR.position.set(3.2, 8.5, 11);
  const gateArch = new THREE.Mesh(new THREE.BoxGeometry(8.6, 2, 3), stoneTrimMat);
  gateArch.position.set(0, 12.5, 11);
  terrainGroup.add(gateL, gateR, gateArch);

  rootGroup.add(terrainGroup);

  // =========================================================================
  // 2. LÂU ĐÀI TRUNG TÂM CỦA VUA ARTHUR (ARTHUR'S ROYAL KEEP)
  // =========================================================================
  const castleGroup = new THREE.Group();

  // Thân lâu đài đá thô nhiều tầng (Central Keep)
  const keepGeo = new THREE.BoxGeometry(13, 10, 11);
  const keepMesh = new THREE.Mesh(keepGeo, roughStoneMat);
  keepMesh.position.set(0, 11.2, -1);
  castleGroup.add(keepMesh);

  // Mái lâu đài chính với viền đá xám
  const keepRoofGeo = new THREE.ConeGeometry(8.5, 5.5, 4);
  keepRoofGeo.rotateY(Math.PI / 4);
  const keepRoof = new THREE.Mesh(keepRoofGeo, slateRoofMat);
  keepRoof.position.set(0, 18.5, -1);
  castleGroup.add(keepRoof);

  // Đại tháp canh chọc trời (The King's High Spire)
  const highTowerGeo = new THREE.CylinderGeometry(2.0, 2.4, 16, 8);
  const highTower = new THREE.Mesh(highTowerGeo, darkStoneMat);
  highTower.position.set(0, 17, -1);

  const highSpireRoofGeo = new THREE.ConeGeometry(2.6, 6, 8);
  const highSpireRoof = new THREE.Mesh(highSpireRoofGeo, slateRoofMat);
  highSpireRoof.position.set(0, 27.5, -1);
  castleGroup.add(highTower, highSpireRoof);

  // Vương miện vàng Okka trên đỉnh tháp cao nhất
  const crownGeo = new THREE.TorusGeometry(1.2, 0.25, 8, 16);
  crownGeo.rotateX(Math.PI / 2);
  const crownMesh = new THREE.Mesh(crownGeo, royalGoldMat);
  crownMesh.position.set(0, 30.5, -1);
  castleGroup.add(crownMesh);

  // CỜ HIỆU VƯƠNG QUYỀN OKKA (KNIGHT BANNERS)
  const banners: THREE.Mesh[] = [];
  const bannerPositions = [
    { x: -3.5, y: 13.5, z: 12.6 },
    { x: 3.5, y: 13.5, z: 12.6 },
    { x: 0, y: 30.5, z: 0.5 }, // Trên đỉnh tháp chính
  ];

  for (const bPos of bannerPositions) {
    // Cột cờ
    const poleGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 6);
    const pole = new THREE.Mesh(poleGeo, royalGoldMat);
    pole.position.set(bPos.x, bPos.y, bPos.z);
    castleGroup.add(pole);

    // Lá cờ đỏ son dài phấp phới
    const bannerGeo = new THREE.PlaneGeometry(1.4, 2.2);
    const bannerMesh = new THREE.Mesh(bannerGeo, knightBannerMat);
    bannerMesh.position.set(bPos.x + 0.7, bPos.y - 0.3, bPos.z);
    castleGroup.add(bannerMesh);
    banners.push(bannerMesh);
  }

  // TƯỢNG ĐÀI THÁNH KIẾM CỦA VUA ARTHUR (ARTHUR'S EXCALIBUR MONUMENT)
  const excaliburGroup = new THREE.Group();
  excaliburGroup.position.set(0, 6.5, 4.5); // Tại sân trong trước lâu đài

  // Tảng đá phong ấn Thánh Kiếm
  const stoneAltarGeo = new THREE.DodecahedronGeometry(1.4);
  const stoneAltar = new THREE.Mesh(stoneAltarGeo, darkStoneMat);
  excaliburGroup.add(stoneAltar);

  // Thanh Thánh Kiếm cắm thẳng đứng
  const bladeGeo = new THREE.BoxGeometry(0.22, 3.6, 0.06);
  const blade = new THREE.Mesh(bladeGeo, knightArmorMat);
  blade.position.y = 2.0;

  const crossguardGeo = new THREE.BoxGeometry(1.2, 0.2, 0.2);
  const crossguard = new THREE.Mesh(crossguardGeo, royalGoldMat);
  crossguard.position.y = 3.6;

  const hiltGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.9, 8);
  const hilt = new THREE.Mesh(hiltGeo, knightArmorMat);
  hilt.position.y = 4.1;

  const pommelGeo = new THREE.SphereGeometry(0.18, 8, 8);
  const pommel = new THREE.Mesh(pommelGeo, royalGoldMat);
  pommel.position.y = 4.6;

  // Hào quang vàng thánh khiết tỏa ra từ Thánh Kiếm
  const holyAuraGeo = new THREE.SphereGeometry(2.4, 12, 12);
  const holyAuraMat = new THREE.MeshBasicMaterial({
    color: '#fbbf24',
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  });
  const holyAura = new THREE.Mesh(holyAuraGeo, holyAuraMat);
  holyAura.position.y = 2.5;

  excaliburGroup.add(blade, crossguard, hilt, pommel, holyAura);
  castleGroup.add(excaliburGroup);

  rootGroup.add(castleGroup);

  // =========================================================================
  // 3. CHIẾN MÃ HUYỀN THOẠI CỦA OKKA (LEGENDARY ARMORED WARHORSE)
  // =========================================================================
  // Chú ngựa chiến dũng mãnh của kỵ binh hoàng gia tại sân duyệt binh
  const horseGroup = new THREE.Group();
  horseGroup.position.set(-5.5, 6.3, 5.0);

  // Thân ngựa vạm vỡ
  const horseBodyGeo = new THREE.BoxGeometry(1.4, 1.3, 2.6);
  const horseBody = new THREE.Mesh(horseBodyGeo, warhorseCoatMat);
  horseBody.position.y = 1.8;
  horseGroup.add(horseBody);

  // Giáp ức kỵ binh mạ bạc
  const breastplateGeo = new THREE.BoxGeometry(1.5, 1.1, 1.0);
  const breastplate = new THREE.Mesh(breastplateGeo, knightArmorMat);
  breastplate.position.set(0, 1.8, 0.9);
  horseGroup.add(breastplate);

  // Cổ ngựa vươn cao
  const neckGeo = new THREE.BoxGeometry(0.7, 1.5, 0.9);
  const neck = new THREE.Mesh(neckGeo, warhorseCoatMat);
  neck.position.set(0, 2.8, 1.1);
  neck.rotateX(-Math.PI / 6);
  horseGroup.add(neck);

  // Đầu ngựa bọc giáp chiến (Champron)
  const horseHeadGroup = new THREE.Group();
  horseHeadGroup.position.set(0, 3.6, 1.5);

  const headGeo = new THREE.BoxGeometry(0.65, 0.75, 1.3);
  const headMesh = new THREE.Mesh(headGeo, warhorseCoatMat);
  headMesh.position.set(0, 0, 0.3);
  horseHeadGroup.add(headMesh);

  const champronGeo = new THREE.BoxGeometry(0.72, 0.5, 1.1);
  const champron = new THREE.Mesh(champronGeo, knightArmorMat);
  champron.position.set(0, 0.2, 0.3);
  horseHeadGroup.add(champron);

  // 2 Tai ngựa nhọn
  const earL = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.4, 4), warhorseCoatMat);
  earL.position.set(-0.25, 0.5, -0.1);
  const earR = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.4, 4), warhorseCoatMat);
  earR.position.set(0.25, 0.5, -0.1);
  horseHeadGroup.add(earL, earR);

  horseGroup.add(horseHeadGroup);

  // 4 Chân ngựa chiến cơ bắp
  const legGeo = new THREE.BoxGeometry(0.35, 1.5, 0.35);
  const legFL = new THREE.Mesh(legGeo, warhorseCoatMat);
  legFL.position.set(-0.5, 0.8, 0.9);
  const legFR = new THREE.Mesh(legGeo, warhorseCoatMat);
  legFR.position.set(0.5, 0.8, 0.9);
  const legBL = new THREE.Mesh(legGeo, warhorseCoatMat);
  legBL.position.set(-0.5, 0.8, -0.9);
  const legBR = new THREE.Mesh(legGeo, warhorseCoatMat);
  legBR.position.set(0.5, 0.8, -0.9);
  horseGroup.add(legFL, legFR, legBL, legBR);

  // Đuôi ngựa dài
  const tailGeo = new THREE.CylinderGeometry(0.1, 0.25, 1.4, 6);
  const tail = new THREE.Mesh(tailGeo, slateRoofMat);
  tail.position.set(0, 1.5, -1.5);
  tail.rotateX(Math.PI / 7);
  horseGroup.add(tail);

  rootGroup.add(horseGroup);

  // =========================================================================
  // 4. HƯƠU ÁNH SÁNG (LUMINOUS ASTRAL STAG TỪ RỪNG ELBORNE)
  // =========================================================================
  // Chú hươu thần thoại thanh nhã dạo chơi bên sườn đồi hướng về Rừng Elborne
  const deerGroup = new THREE.Group();
  deerGroup.position.set(5.8, 6.3, 5.0);

  // Thân hươu thon thả phát quang
  const deerBodyGeo = new THREE.BoxGeometry(0.9, 1.0, 1.8);
  const deerBody = new THREE.Mesh(deerBodyGeo, astralDeerMat);
  deerBody.position.y = 1.7;
  deerGroup.add(deerBody);

  // Cổ hươu dài kiêu hãnh
  const deerNeck = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 1.4, 0.55),
    astralDeerMat
  );
  deerNeck.position.set(0, 2.7, 0.7);
  deerNeck.rotateX(-Math.PI / 8);
  deerGroup.add(deerNeck);

  // Đầu hươu
  const deerHeadGroup = new THREE.Group();
  deerHeadGroup.position.set(0, 3.4, 1.0);

  const deerHead = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.5, 0.8),
    astralDeerMat
  );
  deerHead.position.set(0, 0, 0.2);
  deerHeadGroup.add(deerHead);

  // CẶP GẠC PHÁT SÁNG LÂN TINH NHIỀU NHÁNH (LUMINOUS ANTLERS)
  for (let side = -1; side <= 1; side += 2) {
    const mainAntler = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.08, 1.6, 6),
      antlersGlowMat
    );
    mainAntler.position.set(side * 0.35, 0.8, -0.1);
    mainAntler.rotation.z = side * (Math.PI / 5);
    mainAntler.rotation.x = -Math.PI / 8;

    // Nhánh gạc phụ
    const subAntler = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.05, 0.8, 6),
      antlersGlowMat
    );
    subAntler.position.set(side * 0.45, 1.1, 0.1);
    subAntler.rotation.z = side * (Math.PI / 3);

    deerHeadGroup.add(mainAntler, subAntler);
  }

  deerGroup.add(deerHeadGroup);

  // 4 Chân hươu thon thả
  const deerLegGeo = new THREE.CylinderGeometry(0.1, 0.08, 1.7, 6);
  for (let dx = -0.3; dx <= 0.3; dx += 0.6) {
    for (let dz = -0.6; dz <= 0.6; dz += 1.2) {
      const dLeg = new THREE.Mesh(deerLegGeo, astralDeerMat);
      dLeg.position.set(dx, 0.85, dz);
      deerGroup.add(dLeg);
    }
  }

  // Các đốm tinh tú lân tinh bay lượn quanh Hươu Ánh Sáng
  const deerWisps: THREE.Mesh[] = [];
  for (let w = 0; w < 4; w++) {
    const wGeo = new THREE.SphereGeometry(0.18, 6, 6);
    const wMat = new THREE.MeshBasicMaterial({
      color: '#67e8f9',
      blending: THREE.AdditiveBlending,
    });
    const wMesh = new THREE.Mesh(wGeo, wMat);
    deerGroup.add(wMesh);
    deerWisps.push(wMesh);
  }

  rootGroup.add(deerGroup);

  // =========================================================================
  // 5. RẶNG RỪNG ELBORNE & ĐỒNG CỎ ÁNH TRĂNG
  // =========================================================================
  // Cây thông cổ thụ rìa rừng Elborne phía Tây thành Okka
  const forestGroup = new THREE.Group();
  const treePositions = [
    { x: -16, z: -8, h: 8 },
    { x: -18, z: 2, h: 10 },
    { x: -17, z: 12, h: 7 },
    { x: -19, z: -15, h: 9 },
    { x: 17, z: -14, h: 7 },
  ];

  for (const tp of treePositions) {
    const tree = new THREE.Group();
    tree.position.set(tp.x, 3.5, tp.z);

    // Thân thông đá
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.7, tp.h * 0.4, 6),
      darkStoneMat
    );
    trunk.position.y = (tp.h * 0.4) / 2;
    tree.add(trunk);

    // Tầng tán lá thông tam giác đặc trưng Elborne
    for (let l = 0; l < 3; l++) {
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(2.4 - l * 0.6, 3.2, 6),
        pineCanopyMat
      );
      cone.position.y = tp.h * 0.35 + l * 1.8;
      tree.add(cone);
    }

    forestGroup.add(tree);
  }
  rootGroup.add(forestGroup);

  // =========================================================================
  // ANIMATION UPDATE LOOP (60 FPS)
  // =========================================================================
  return {
    group: rootGroup,
    update: (_delta: number, elapsed: number) => {
      // 1. Cờ hiệu kỵ sĩ phấp phới trong gió Đồng bằng Ánh Trăng
      banners.forEach((b, idx) => {
        b.rotation.y = Math.sin(elapsed * 3.2 + idx * 1.5) * 0.25;
        b.rotation.z = Math.cos(elapsed * 2.8 + idx) * 0.1;
      });

      // 2. Hào quang Thánh Kiếm Vua Arthur phát xung linh thiêng
      const holyPulse = 1.0 + Math.sin(elapsed * 2.2) * 0.18;
      holyAura.scale.set(holyPulse, holyPulse, holyPulse);

      // 3. Chiến mã huyền thoại dậm chân và lắc đầu oai vệ
      horseHeadGroup.rotation.x = Math.sin(elapsed * 1.8) * 0.12;
      horseHeadGroup.rotation.y = Math.cos(elapsed * 1.4) * 0.08;
      tail.rotation.z = Math.sin(elapsed * 2.4) * 0.15;

      // 4. Hươu Ánh Sáng gật đầu thanh thoát & đốm tinh tú bay quanh
      deerHeadGroup.rotation.x = Math.sin(elapsed * 1.2) * 0.1;
      deerGroup.position.y = 6.3 + Math.sin(elapsed * 1.5) * 0.08;

      deerWisps.forEach((dw, idx) => {
        const wAngle = elapsed * 1.8 + (idx * Math.PI) / 2;
        const wRadius = 1.4 + Math.sin(elapsed * 2 + idx) * 0.4;
        dw.position.set(
          Math.cos(wAngle) * wRadius,
          2.5 + Math.sin(elapsed * 2.5 + idx) * 0.8,
          Math.sin(wAngle) * wRadius
        );
      });
    },
  };
}
