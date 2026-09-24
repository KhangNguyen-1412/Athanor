import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface CaranoAcademySystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Học Viện Ma Pháp Carano (Carano Magic Academy):
// Nằm ở phía Đông Nam của Lục địa Athanor, khu vực biên giới phía Bắc của Vương quốc Norman, biệt lập giữa dòng sông Losarth
export const CARANO_ACADEMY_COORD = { x: 58.0, y: 47.5 };

/**
 * Hệ thống kiến trúc và sinh thái 3D cho HỌC VIỆN MA PHÁP CARANO (CARANO MAGIC ACADEMY):
 * 1. Pháo đài ma thuật biệt lập giữa sông: Đảo đá cẩm thạch kiên cố bao bọc bởi dòng sông Losarth, có cầu vòm ma thuật bắc qua.
 * 2. Tam Đại Tháp Ma Pháp chọc trời:
 *    - Tháp Nguyên Lực Dirak: Tháp trung tâm cao nhất với Quả cầu Nguyên Lực Ánh Sáng Vàng Kim và vành đai ma thuật xoay quanh.
 *    - Tháp Thứ Nguyên D'Arcy: Tháp thạch anh tím với Khối đa diện không gian lơ lửng xoay đa chiều.
 *    - Tháp Thủy Nguyên Sephera: Tháp ngọc lam với Quả cầu Nước tinh khiết và đài sen luân chuyển dòng chảy.
 * 3. Quảng trường Tinh Tú, Giảng đường cổ kính & Rừng Ma Thuật phát quang.
 * 4. Các Phòng Thí Nghiệm Nguyên Tố Lơ Lửng (Floating Magic Laboratories) bồng bềnh trên không với dây xích ma năng.
 * 5. Hệ sinh thái sinh vật độc nhất vô nhị:
 *    - Tí Nị (Furry / Thần thú của Ishar): Bé gấu bông ma thuật tròn trịa, nhún nhảy đáng yêu tại sân trường.
 *    - Tinh linh nguyên tố (Elemental Wisps): Tinh linh ánh sáng, nước, hư không bay lượn lung linh quanh các tháp.
 *    - Người đá / Khổng lồ bảo vệ (Arcane Stone Golem): Vệ binh hộ pháp khổng lồ của Thầy Hiệu trưởng Dirak canh gác bờ sông Losarth.
 *    - Gia tộc Tiên cá (Mermaids of Losarth): Nàng tiên cá đuôi ngọc bích bơi lội và quẫy sóng dưới làn nước sông Losarth.
 */
export function createCaranoAcademy3D(): CaranoAcademySystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(CARANO_ACADEMY_COORD.x, CARANO_ACADEMY_COORD.y, 4.5);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // BẢNG VẬT LIỆU CAO CẤP (CARANO ARCANE PALETTE)
  // =========================================================================
  const marbleWhiteMat = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.35,
    metalness: 0.15,
  });

  const marbleDarkMat = new THREE.MeshStandardMaterial({
    color: '#1e293b',
    roughness: 0.6,
    metalness: 0.25,
  });

  const goldTrimMat = new THREE.MeshStandardMaterial({
    color: '#facc15',
    emissive: '#ca8a04',
    emissiveIntensity: 0.4,
    roughness: 0.25,
    metalness: 0.85,
  });

  // Nước sông Losarth phản quang
  const losarthRiverMat = new THREE.MeshStandardMaterial({
    color: '#0284c7',
    roughness: 0.12,
    metalness: 0.6,
    transparent: true,
    opacity: 0.85,
  });

  // Dirak: Nguyên Lực Vàng Kim
  const dirakGoldCoreMat = new THREE.MeshStandardMaterial({
    color: '#fde047',
    emissive: '#eab308',
    emissiveIntensity: 1.2,
    roughness: 0.1,
  });

  const arcaneRingsMat = new THREE.MeshBasicMaterial({
    color: '#fef08a',
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide,
  });

  // D'Arcy: Thứ Nguyên Tím Lam
  const darcyVoidTowerMat = new THREE.MeshStandardMaterial({
    color: '#4c1d95',
    roughness: 0.4,
    metalness: 0.35,
  });

  const darcyPolyMat = new THREE.MeshStandardMaterial({
    color: '#c084fc',
    emissive: '#a855f7',
    emissiveIntensity: 1.1,
    roughness: 0.15,
    metalness: 0.4,
    wireframe: false,
  });

  // Sephera: Thủy Nguyên Lam Ngọc
  const sepheraWaterMat = new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#0284c7',
    emissiveIntensity: 0.95,
    roughness: 0.1,
    metalness: 0.5,
    transparent: true,
    opacity: 0.88,
  });

  // Mái vòm học viện xanh sapphire
  const sapphireRoofMat = new THREE.MeshStandardMaterial({
    color: '#1d4ed8',
    roughness: 0.3,
    metalness: 0.4,
  });

  // Đá đảo lơ lửng & xích ma năng
  const floatingRockMat = new THREE.MeshStandardMaterial({
    color: '#334155',
    roughness: 0.85,
    metalness: 0.15,
  });

  const manaChainMat = new THREE.MeshBasicMaterial({
    color: '#67e8f9',
    transparent: true,
    opacity: 0.6,
  });

  // Tí Nị: Lông hồng phấn ngọc trai đáng yêu
  const tiniFurMat = new THREE.MeshStandardMaterial({
    color: '#f472b6',
    roughness: 0.85,
    metalness: 0.05,
  });

  const tiniBellyMat = new THREE.MeshStandardMaterial({
    color: '#fef08a',
    roughness: 0.7,
    metalness: 0.05,
  });

  const tiniEyeMat = new THREE.MeshBasicMaterial({
    color: '#0f172a',
  });

  const tiniAuraMat = new THREE.MeshBasicMaterial({
    color: '#f472b6',
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  });

  // Người đá Golem của Dirak
  const golemStoneMat = new THREE.MeshStandardMaterial({
    color: '#475569',
    roughness: 0.9,
    metalness: 0.1,
  });

  const golemCoreMat = new THREE.MeshBasicMaterial({
    color: '#fde047',
  });

  // Nàng tiên cá
  const mermaidSkinMat = new THREE.MeshStandardMaterial({
    color: '#fecdd3',
    roughness: 0.5,
  });

  const mermaidTailMat = new THREE.MeshStandardMaterial({
    color: '#2dd4bf',
    emissive: '#0f766e',
    emissiveIntensity: 0.6,
    roughness: 0.25,
    metalness: 0.45,
  });

  // =========================================================================
  // 1. PHÁO ĐÀI ĐƯỜNG THỦY & DÒNG SÔNG LOSARTH BAO BỌC
  // =========================================================================
  const islandGroup = new THREE.Group();

  // Vành đai mặt nước sông Losarth (Moat)
  const riverMoatGeo = new THREE.RingGeometry(18, 30, 48);
  riverMoatGeo.rotateX(-Math.PI / 2);
  const riverMoat = new THREE.Mesh(riverMoatGeo, losarthRiverMat);
  riverMoat.position.y = 0.6;
  islandGroup.add(riverMoat);

  // Đảo đá cẩm thạch kiên cố (Citadel Island Base)
  const islandBaseGeo = new THREE.CylinderGeometry(18, 20, 5, 32);
  const islandBase = new THREE.Mesh(islandBaseGeo, marbleDarkMat);
  islandBase.position.y = 2.5;
  islandGroup.add(islandBase);

  // Thềm đá cẩm thạch trắng bên trên (Upper Terrace)
  const upperTerraceGeo = new THREE.CylinderGeometry(16.5, 17.5, 1.2, 32);
  const upperTerrace = new THREE.Mesh(upperTerraceGeo, marbleWhiteMat);
  upperTerrace.position.y = 5.2;
  islandGroup.add(upperTerrace);

  // Đê kè thành lũy bao quanh đảo (Citadel Ramparts)
  const rampartGeo = new THREE.TorusGeometry(17, 0.4, 8, 32);
  rampartGeo.rotateX(Math.PI / 2);
  const rampart = new THREE.Mesh(rampartGeo, goldTrimMat);
  rampart.position.y = 5.8;
  islandGroup.add(rampart);

  // Cầu vòm ma thuật cổ kính nối bờ nam qua sông Losarth (Arcane Arch Bridge)
  const bridgeGroup = new THREE.Group();
  bridgeGroup.position.set(0, 3, 22);

  const bridgeDeckGeo = new THREE.BoxGeometry(4.2, 0.8, 14);
  const bridgeDeck = new THREE.Mesh(bridgeDeckGeo, marbleWhiteMat);
  bridgeDeck.position.y = 1.8;
  bridgeGroup.add(bridgeDeck);

  // Lan can mạ vàng
  const railGeo = new THREE.BoxGeometry(0.3, 0.7, 14);
  const leftRail = new THREE.Mesh(railGeo, goldTrimMat);
  leftRail.position.set(-2, 2.4, 0);
  const rightRail = new THREE.Mesh(railGeo, goldTrimMat);
  rightRail.position.set(2, 2.4, 0);
  bridgeGroup.add(leftRail, rightRail);

  // Trụ vòm cầu cắm dưới đáy sông
  for (let bz = -4; bz <= 4; bz += 4) {
    const archPillarGeo = new THREE.CylinderGeometry(0.8, 1.1, 4.5, 12);
    const archPillar = new THREE.Mesh(archPillarGeo, marbleDarkMat);
    archPillar.position.set(0, -0.4, bz);
    bridgeGroup.add(archPillar);
  }

  // Cổng vòm ma thuật uy nghiêm (Grand Gateway Arch) tại đầu cầu
  const gateArchLeftGeo = new THREE.CylinderGeometry(0.6, 0.8, 6.5, 12);
  const gateLeft = new THREE.Mesh(gateArchLeftGeo, marbleWhiteMat);
  gateLeft.position.set(-2.5, 6, 15.5);
  const gateRight = gateLeft.clone();
  gateRight.position.set(2.5, 6, 15.5);

  const gateBeamGeo = new THREE.BoxGeometry(6.2, 1.0, 1.2);
  const gateBeam = new THREE.Mesh(gateBeamGeo, goldTrimMat);
  gateBeam.position.set(0, 9.4, 15.5);

  // Phù hiệu Carano phát sáng trên cổng
  const gateInsigniaGeo = new THREE.OctahedronGeometry(0.8);
  const gateInsignia = new THREE.Mesh(gateInsigniaGeo, dirakGoldCoreMat);
  gateInsignia.position.set(0, 10.4, 15.5);

  islandGroup.add(bridgeGroup, gateLeft, gateRight, gateBeam, gateInsignia);
  rootGroup.add(islandGroup);

  // =========================================================================
  // 2. TAM ĐẠI THÁP MA PHÁP CHỌC TRỜI (THREE HIGH ARCANE TOWERS)
  // =========================================================================
  const towersGroup = new THREE.Group();

  // -------------------------------------------------------------------------
  // 2.1 THÁP NGUYÊN LỰC DIRAK (TRUNG TÂM & CAO NHẤT)
  // -------------------------------------------------------------------------
  const dirakTower = new THREE.Group();
  dirakTower.position.set(0, 5.5, -1);

  // Chân tháp bát giác vững chãi
  const dirakBaseGeo = new THREE.CylinderGeometry(4.2, 5.4, 6, 8);
  const dirakBaseMesh = new THREE.Mesh(dirakBaseGeo, marbleWhiteMat);
  dirakBaseMesh.position.y = 3;
  dirakTower.add(dirakBaseMesh);

  // Thân tháp chọc trời cao vút
  const dirakSpireGeo = new THREE.CylinderGeometry(2.4, 3.8, 19, 8);
  const dirakSpireMesh = new THREE.Mesh(dirakSpireGeo, marbleWhiteMat);
  dirakSpireMesh.position.y = 15;
  dirakTower.add(dirakSpireMesh);

  // Các gờ mạ vàng hoàng gia
  for (let y = 6; y <= 24; y += 4.5) {
    const ringTrimGeo = new THREE.CylinderGeometry(2.6, 2.6, 0.4, 8);
    const ringTrim = new THREE.Mesh(ringTrimGeo, goldTrimMat);
    ringTrim.position.y = y;
    dirakTower.add(ringTrim);
  }

  // Mái đỉnh đón nguyên lực
  const dirakRoofGeo = new THREE.ConeGeometry(3.2, 5, 8);
  const dirakRoof = new THREE.Mesh(dirakRoofGeo, sapphireRoofMat);
  dirakRoof.position.y = 26.5;
  dirakTower.add(dirakRoof);

  // QUẢ CẦU NGUYÊN LỰC VÀNG KIM (DIRAK'S GOLDEN ARCANE CORE ORB)
  const dirakCoreGeo = new THREE.SphereGeometry(2.0, 24, 24);
  const dirakCoreMesh = new THREE.Mesh(dirakCoreGeo, dirakGoldCoreMat);
  dirakCoreMesh.position.y = 31.5;
  dirakTower.add(dirakCoreMesh);

  // Vành đai ma thuật nguyên lực xoay quanh quả cầu
  const ring1Geo = new THREE.RingGeometry(2.8, 3.4, 32);
  const dirakRing1 = new THREE.Mesh(ring1Geo, arcaneRingsMat);
  dirakRing1.position.y = 31.5;
  dirakTower.add(dirakRing1);

  const ring2Geo = new THREE.RingGeometry(3.6, 4.1, 32);
  const dirakRing2 = new THREE.Mesh(ring2Geo, arcaneRingsMat);
  dirakRing2.position.y = 31.5;
  dirakTower.add(dirakRing2);

  towersGroup.add(dirakTower);

  // -------------------------------------------------------------------------
  // 2.2 THÁP THỨ NGUYÊN D'ARCY (PHÍA TÂY - KHỐI ĐA DIỆN TÍM LAM)
  // -------------------------------------------------------------------------
  const darcyTower = new THREE.Group();
  darcyTower.position.set(-8.5, 5.5, -4);

  const darcyBaseGeo = new THREE.CylinderGeometry(2.6, 3.6, 5, 6);
  const darcyBase = new THREE.Mesh(darcyBaseGeo, marbleDarkMat);
  darcyBase.position.y = 2.5;
  darcyTower.add(darcyBase);

  const darcyBodyGeo = new THREE.CylinderGeometry(1.6, 2.4, 15, 6);
  const darcyBody = new THREE.Mesh(darcyBodyGeo, darcyVoidTowerMat);
  darcyBody.position.y = 12;
  darcyTower.add(darcyBody);

  const darcyCrownGeo = new THREE.ConeGeometry(2.2, 4, 6);
  const darcyCrown = new THREE.Mesh(darcyCrownGeo, marbleDarkMat);
  darcyCrown.position.y = 21.5;
  darcyTower.add(darcyCrown);

  // KHỐI ĐA DIỆN THỨ NGUYÊN LƠ LỬNG (D'ARCY'S FLOATING VOID POLYHEDRON)
  const voidPolyGeo = new THREE.OctahedronGeometry(1.8, 0);
  const voidPolyMesh = new THREE.Mesh(voidPolyGeo, darcyPolyMat);
  voidPolyMesh.position.y = 25.5;
  darcyTower.add(voidPolyMesh);

  // Vòng quỹ đạo thứ nguyên
  const voidOrbitGeo = new THREE.TorusGeometry(2.4, 0.08, 8, 32);
  const voidOrbitMesh = new THREE.Mesh(
    voidOrbitGeo,
    new THREE.MeshBasicMaterial({ color: '#c084fc', wireframe: true })
  );
  voidOrbitMesh.position.y = 25.5;
  voidOrbitMesh.rotateX(Math.PI / 3);
  darcyTower.add(voidOrbitMesh);

  towersGroup.add(darcyTower);

  // -------------------------------------------------------------------------
  // 2.3 THÁP THỦY NGUYÊN SEPHERA (PHÍA ĐÔNG - QUẢ CẦU NƯỚC LAM NGỌC)
  // -------------------------------------------------------------------------
  const sepheraTower = new THREE.Group();
  sepheraTower.position.set(8.5, 5.5, -4);

  const sepheraBaseGeo = new THREE.CylinderGeometry(2.6, 3.6, 5, 6);
  const sepheraBase = new THREE.Mesh(sepheraBaseGeo, marbleWhiteMat);
  sepheraBase.position.y = 2.5;
  sepheraTower.add(sepheraBase);

  const sepheraBodyGeo = new THREE.CylinderGeometry(1.6, 2.4, 14, 6);
  const sepheraBody = new THREE.Mesh(sepheraBodyGeo, marbleWhiteMat);
  sepheraBody.position.y = 11.5;
  sepheraTower.add(sepheraBody);

  // Đài sen nước ma thuật
  const lotusFontGeo = new THREE.CylinderGeometry(2.8, 1.4, 2, 8);
  const lotusFont = new THREE.Mesh(lotusFontGeo, goldTrimMat);
  lotusFont.position.y = 19.5;
  sepheraTower.add(lotusFont);

  // QUẢ CẦU NƯỚC THỦY MA PHÁP (SEPHERA'S PRIMAL WATER ORB)
  const waterOrbGeo = new THREE.SphereGeometry(1.6, 16, 16);
  const waterOrbMesh = new THREE.Mesh(waterOrbGeo, sepheraWaterMat);
  waterOrbMesh.position.y = 22.8;
  sepheraTower.add(waterOrbMesh);

  // Vòng xoáy nước luân chuyển
  const waterSwirlGeo = new THREE.TorusGeometry(2.2, 0.15, 8, 24);
  const waterSwirlMesh = new THREE.Mesh(waterSwirlGeo, sepheraWaterMat);
  waterSwirlMesh.position.y = 22.8;
  waterSwirlMesh.rotateX(Math.PI / 4);
  sepheraTower.add(waterSwirlMesh);

  towersGroup.add(sepheraTower);
  rootGroup.add(towersGroup);

  // =========================================================================
  // 3. GIẢNG ĐƯỜNG CỔ KÍNH, QUẢNG TRƯỜNG TINH TÚ & RỪNG MA THUẬT
  // =========================================================================
  const academyHallGroup = new THREE.Group();

  // Khu Giảng đường trung tâm (Main Lecture Hall)
  const hallGeo = new THREE.BoxGeometry(10, 4.5, 7);
  const hallMesh = new THREE.Mesh(hallGeo, marbleWhiteMat);
  hallMesh.position.set(0, 7.8, 6);
  academyHallGroup.add(hallMesh);

  // Mái vòm sapphire cổ kính
  const domeGeo = new THREE.SphereGeometry(3.8, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const domeMesh = new THREE.Mesh(domeGeo, sapphireRoofMat);
  domeMesh.position.set(0, 10.0, 6);
  academyHallGroup.add(domeMesh);

  // Hàng cột đá bao quanh mặt tiền giảng đường
  for (let cx = -4; cx <= 4; cx += 2) {
    const colGeo = new THREE.CylinderGeometry(0.3, 0.35, 4.5, 8);
    const colMesh = new THREE.Mesh(colGeo, marbleWhiteMat);
    colMesh.position.set(cx, 7.8, 9.8);
    academyHallGroup.add(colMesh);
  }

  // Quảng trường Tinh Tú (Astral Rune Plaza) trước giảng đường
  const plazaRuneGeo = new THREE.RingGeometry(1.5, 4.8, 32);
  plazaRuneGeo.rotateX(-Math.PI / 2);
  const plazaRuneMat = new THREE.MeshBasicMaterial({
    color: '#38bdf8',
    transparent: true,
    opacity: 0.65,
    side: THREE.DoubleSide,
  });
  const plazaRuneMesh = new THREE.Mesh(plazaRuneGeo, plazaRuneMat);
  plazaRuneMesh.position.set(0, 5.85, 12.5);
  academyHallGroup.add(plazaRuneMesh);

  // Rừng ma thuật phát quang quanh khuôn viên (Luminescent Magic Forest)
  const magicTreeCoords = [
    { x: -9, z: 4, color: '#c084fc', height: 4.8 },
    { x: -11, z: 9, color: '#67e8f9', height: 3.8 },
    { x: -7, z: 12, color: '#f472b6', height: 4.2 },
    { x: 9, z: 4, color: '#38bdf8', height: 4.6 },
    { x: 11, z: 9, color: '#c084fc', height: 3.9 },
    { x: 7, z: 12, color: '#34d399', height: 4.4 },
  ];

  for (const tc of magicTreeCoords) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(tc.x, 5.8, tc.z);

    // Thân cây xoắn pha lê
    const trunkGeo = new THREE.CylinderGeometry(0.25, 0.45, tc.height, 6);
    const trunkMesh = new THREE.Mesh(trunkGeo, marbleDarkMat);
    trunkMesh.position.y = tc.height / 2;
    treeGroup.add(trunkMesh);

    // Tán cây ma thuật phát quang
    const canopyGeo = new THREE.OctahedronGeometry(1.6, 1);
    const canopyMat = new THREE.MeshStandardMaterial({
      color: tc.color,
      emissive: tc.color,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.85,
      roughness: 0.2,
    });
    const canopyMesh = new THREE.Mesh(canopyGeo, canopyMat);
    canopyMesh.position.y = tc.height + 0.8;
    treeGroup.add(canopyMesh);

    academyHallGroup.add(treeGroup);
  }

  rootGroup.add(academyHallGroup);

  // =========================================================================
  // 4. CÁC PHÒNG THÍ NGHIỆM NGUYÊN TỐ LƠ LỬNG (FLOATING MAGIC LABS)
  // =========================================================================
  interface FloatingLab {
    group: THREE.Group;
    baseY: number;
    speed: number;
    phase: number;
  }
  const floatingLabs: FloatingLab[] = [];

  const labConfigs = [
    { x: -16, z: -10, y: 17, color: '#facc15', size: 3.2, speed: 1.2, phase: 0 },
    { x: 16, z: -10, y: 19, color: '#38bdf8', size: 3.5, speed: 0.9, phase: 2 },
    { x: 0, z: -18, y: 22, color: '#c084fc', size: 4.0, speed: 1.1, phase: 4 },
  ];

  for (const cfg of labConfigs) {
    const labGroup = new THREE.Group();
    labGroup.position.set(cfg.x, cfg.y, cfg.z);

    // Đảo đá tinh thể lơ lửng (Floating Rock Island)
    const rockGeo = new THREE.ConeGeometry(cfg.size, cfg.size * 1.4, 6);
    rockGeo.rotateX(Math.PI); // Chóp nhọn cắm xuống dưới
    const rockMesh = new THREE.Mesh(rockGeo, floatingRockMat);
    labGroup.add(rockMesh);

    // Tháp thí nghiệm nhỏ trên đảo lơ lửng
    const miniTowerGeo = new THREE.CylinderGeometry(0.8, 1.2, 3.5, 6);
    const miniTower = new THREE.Mesh(miniTowerGeo, marbleWhiteMat);
    miniTower.position.y = 1.8;
    labGroup.add(miniTower);

    // Tinh thể nguyên tố phát sáng trên đỉnh phòng thí nghiệm
    const crystalGeo = new THREE.OctahedronGeometry(1.0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: cfg.color,
      emissive: cfg.color,
      emissiveIntensity: 0.9,
      roughness: 0.1,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    crystalMesh.position.y = 4.2;
    labGroup.add(crystalMesh);

    // Dây xích ma năng liên kết đảo lơ lửng với đảo mẹ
    const chainGeo = new THREE.CylinderGeometry(0.06, 0.06, cfg.y - 5.5, 4);
    const chainMesh = new THREE.Mesh(chainGeo, manaChainMat);
    chainMesh.position.set(0, -(cfg.y - 5.5) / 2, 0);
    labGroup.add(chainMesh);

    rootGroup.add(labGroup);
    floatingLabs.push({
      group: labGroup,
      baseY: cfg.y,
      speed: cfg.speed,
      phase: cfg.phase,
    });
  }

  // =========================================================================
  // 5. HỆ SINH THÁI: TÍ NỊ (THẦN THÚ CỦA ISHAR) TẠI QUẢNG TRƯỜNG
  // =========================================================================
  // Tí Nị: Bé gấu bông ma thuật tròn xù, đáng yêu, có thể biến to hộ vệ
  const tiniGroup = new THREE.Group();
  tiniGroup.position.set(2.8, 5.8, 12.5); // Đứng ở quảng trường

  // Thân hình tròn múp míp
  const tiniBodyGeo = new THREE.SphereGeometry(0.9, 16, 16);
  const tiniBody = new THREE.Mesh(tiniBodyGeo, tiniFurMat);
  tiniBody.position.y = 0.9;
  tiniGroup.add(tiniBody);

  // Bụng tròn màu kem
  const tiniBellyGeo = new THREE.SphereGeometry(0.65, 12, 12);
  const tiniBelly = new THREE.Mesh(tiniBellyGeo, tiniBellyMat);
  tiniBelly.position.set(0, 0.85, 0.45);
  tiniGroup.add(tiniBelly);

  // Đầu gấu tròn xù lông
  const tiniHeadGeo = new THREE.SphereGeometry(0.75, 16, 16);
  const tiniHead = new THREE.Mesh(tiniHeadGeo, tiniFurMat);
  tiniHead.position.y = 2.0;
  tiniGroup.add(tiniHead);

  // 2 Tai gấu nhỏ xinh
  const earGeo = new THREE.SphereGeometry(0.32, 12, 12);
  const leftEar = new THREE.Mesh(earGeo, tiniFurMat);
  leftEar.position.set(-0.55, 2.65, 0);
  const rightEar = new THREE.Mesh(earGeo, tiniFurMat);
  rightEar.position.set(0.55, 2.65, 0);
  tiniGroup.add(leftEar, rightEar);

  // Đôi mắt to tròn long lanh
  const eyeGeo = new THREE.SphereGeometry(0.12, 8, 8);
  const leftEye = new THREE.Mesh(eyeGeo, tiniEyeMat);
  leftEye.position.set(-0.25, 2.1, 0.68);
  const rightEye = new THREE.Mesh(eyeGeo, tiniEyeMat);
  rightEye.position.set(0.25, 2.1, 0.68);
  tiniGroup.add(leftEye, rightEye);

  // Mũi nhỏ xinh xắn
  const noseGeo = new THREE.SphereGeometry(0.08, 6, 6);
  const nose = new THREE.Mesh(noseGeo, tiniEyeMat);
  nose.position.set(0, 1.95, 0.74);
  tiniGroup.add(nose);

  // Vòng hào quang bảo vệ của Tí Nị (Aura Shield)
  const auraGeo = new THREE.SphereGeometry(1.6, 16, 12);
  const tiniAura = new THREE.Mesh(auraGeo, tiniAuraMat);
  tiniAura.position.y = 1.4;
  tiniGroup.add(tiniAura);

  rootGroup.add(tiniGroup);

  // =========================================================================
  // 6. NGƯỜI ĐÁ / KHỔNG LỒ BẢO VỆ (ARCANE STONE GOLEM CỦA DIRAK)
  // =========================================================================
  // Vệ binh hộ pháp khổng lồ tuần tra canh gác đầu cầu bắc qua sông Losarth
  const golemGroup = new THREE.Group();
  golemGroup.position.set(-4.5, 3.8, 17.5);

  // Thân đá tảng vạm vỡ
  const golemTorsoGeo = new THREE.BoxGeometry(2.4, 2.8, 1.8);
  const golemTorso = new THREE.Mesh(golemTorsoGeo, golemStoneMat);
  golemTorso.position.y = 3.6;
  golemGroup.add(golemTorso);

  // Lõi ngực nguyên lực phát sáng rực rỡ (Arcane Chest Core)
  const golemCoreGeo = new THREE.SphereGeometry(0.5, 12, 12);
  const golemCore = new THREE.Mesh(golemCoreGeo, golemCoreMat);
  golemCore.position.set(0, 3.8, 0.95);
  golemGroup.add(golemCore);

  // Đầu đá uy nghiêm
  const golemHeadGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
  const golemHead = new THREE.Mesh(golemHeadGeo, golemStoneMat);
  golemHead.position.set(0, 5.6, 0);
  golemGroup.add(golemHead);

  // Đôi mắt phát quang vàng nguyên lực
  const golemEyeGeo = new THREE.BoxGeometry(0.2, 0.12, 0.2);
  const golemEyeL = new THREE.Mesh(golemEyeGeo, golemCoreMat);
  golemEyeL.position.set(-0.3, 5.7, 0.62);
  const golemEyeR = new THREE.Mesh(golemEyeGeo, golemCoreMat);
  golemEyeR.position.set(0.3, 5.7, 0.62);
  golemGroup.add(golemEyeL, golemEyeR);

  // Hai bắp tay đá khổng lồ
  const armGeo = new THREE.BoxGeometry(0.9, 3.2, 1.0);
  const golemArmL = new THREE.Mesh(armGeo, golemStoneMat);
  golemArmL.position.set(-1.8, 3.2, 0);
  const golemArmR = new THREE.Mesh(armGeo, golemStoneMat);
  golemArmR.position.set(1.8, 3.2, 0);
  golemGroup.add(golemArmL, golemArmR);

  // Hai chân đá trụ vững
  const legGeo = new THREE.BoxGeometry(1.0, 2.2, 1.1);
  const golemLegL = new THREE.Mesh(legGeo, golemStoneMat);
  golemLegL.position.set(-0.7, 1.1, 0);
  const golemLegR = new THREE.Mesh(legGeo, golemStoneMat);
  golemLegR.position.set(0.7, 1.1, 0);
  golemGroup.add(golemLegL, golemLegR);

  rootGroup.add(golemGroup);

  // =========================================================================
  // 7. TINH LINH NGUYÊN TỐ (ELEMENTAL SPIRITS / WISPS)
  // =========================================================================
  interface ElementalWisp {
    mesh: THREE.Mesh;
    baseRadius: number;
    orbitSpeed: number;
    verticalSpeed: number;
    yOffset: number;
    phase: number;
  }
  const wisps: ElementalWisp[] = [];

  const wispColors = ['#fde047', '#38bdf8', '#c084fc', '#34d399', '#f472b6', '#38bdf8'];
  for (let i = 0; i < 6; i++) {
    const wispGeo = new THREE.SphereGeometry(0.45, 12, 12);
    const wispMat = new THREE.MeshBasicMaterial({
      color: wispColors[i % wispColors.length],
      blending: THREE.AdditiveBlending,
    });
    const wispMesh = new THREE.Mesh(wispGeo, wispMat);

    // Hào quang lân tinh quanh tinh linh
    const wispGlowGeo = new THREE.SphereGeometry(0.85, 8, 8);
    const wispGlowMat = new THREE.MeshBasicMaterial({
      color: wispColors[i % wispColors.length],
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const wispGlow = new THREE.Mesh(wispGlowGeo, wispGlowMat);
    wispMesh.add(wispGlow);

    rootGroup.add(wispMesh);
    wisps.push({
      mesh: wispMesh,
      baseRadius: 7 + (i % 3) * 4,
      orbitSpeed: 0.6 + (i % 2) * 0.4,
      verticalSpeed: 1.2 + (i % 3) * 0.5,
      yOffset: 12 + (i % 4) * 4,
      phase: (i * Math.PI) / 3,
    });
  }

  // =========================================================================
  // 8. GIA TỘC TIÊN CÁ SÔNG LOSARTH (MERMAIDS OF LOSARTH)
  // =========================================================================
  interface MermaidEntity {
    group: THREE.Group;
    tailMesh: THREE.Mesh;
    baseX: number;
    baseZ: number;
    swimPhase: number;
  }
  const mermaids: MermaidEntity[] = [];

  const mermaidLocs = [
    { x: -14, z: 18, phase: 0 },
    { x: 14, z: 18, phase: Math.PI },
  ];

  for (const mLoc of mermaidLocs) {
    const mGroup = new THREE.Group();
    mGroup.position.set(mLoc.x, 0.8, mLoc.z);

    // Thân trên thiếu nữ thanh thoát
    const torsoGeo = new THREE.CylinderGeometry(0.3, 0.25, 1.4, 8);
    const torso = new THREE.Mesh(torsoGeo, mermaidSkinMat);
    torso.position.y = 1.1;
    mGroup.add(torso);

    // Đầu và mái tóc dài
    const headGeo = new THREE.SphereGeometry(0.32, 12, 12);
    const head = new THREE.Mesh(headGeo, mermaidSkinMat);
    head.position.y = 2.0;
    mGroup.add(head);

    const hairGeo = new THREE.CylinderGeometry(0.38, 0.42, 1.1, 8);
    const hair = new THREE.Mesh(
      hairGeo,
      new THREE.MeshStandardMaterial({ color: '#1e3a8a', roughness: 0.5 })
    );
    hair.position.set(0, 1.7, -0.15);
    mGroup.add(hair);

    // Chiếc đuôi cá ngọc bích phát quang dưới nước
    const tailGeo = new THREE.ConeGeometry(0.4, 1.8, 8);
    const tailMesh = new THREE.Mesh(tailGeo, mermaidTailMat);
    tailMesh.position.set(0, 0.2, 0.5);
    tailMesh.rotateX(Math.PI / 3);
    mGroup.add(tailMesh);

    // Vây đuôi cá lấp lánh
    const finGeo = new THREE.PlaneGeometry(0.9, 0.6);
    const fin = new THREE.Mesh(finGeo, mermaidTailMat);
    fin.position.set(0, -0.6, 1.0);
    fin.rotateX(-Math.PI / 6);
    tailMesh.add(fin);

    // Vòng sóng nước phát quang (Ripples) quanh tiên cá
    const rippleGeo = new THREE.RingGeometry(0.8, 1.4, 24);
    rippleGeo.rotateX(-Math.PI / 2);
    const rippleMat = new THREE.MeshBasicMaterial({
      color: '#38bdf8',
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const ripple = new THREE.Mesh(rippleGeo, rippleMat);
    ripple.position.y = 0.05;
    mGroup.add(ripple);

    rootGroup.add(mGroup);
    mermaids.push({
      group: mGroup,
      tailMesh,
      baseX: mLoc.x,
      baseZ: mLoc.z,
      swimPhase: mLoc.phase,
    });
  }

  // =========================================================================
  // ANIMATION UPDATE LOOP (60 FPS)
  // =========================================================================
  return {
    group: rootGroup,
    update: (delta: number, elapsed: number) => {
      // 1. Quả cầu và Vành đai Nguyên Lực Dirak
      dirakRing1.rotation.z += delta * 0.9;
      dirakRing1.rotation.x += delta * 0.6;
      dirakRing2.rotation.z -= delta * 0.7;
      dirakRing2.rotation.y += delta * 0.8;

      const pulseScale = 1.0 + Math.sin(elapsed * 2.5) * 0.06;
      dirakCoreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // 2. Khối Đa Diện Thứ Nguyên D'Arcy xoay đa trục không gian
      voidPolyMesh.rotation.x += delta * 0.8;
      voidPolyMesh.rotation.y += delta * 1.2;
      voidPolyMesh.rotation.z += delta * 0.5;
      voidOrbitMesh.rotation.z += delta * 0.4;

      // 3. Quả Cầu Thủy Nguyên Sephera xoay và nhấp nhô dòng chảy
      waterSwirlMesh.rotation.z += delta * 1.1;
      waterOrbMesh.position.y = 22.8 + Math.sin(elapsed * 1.8) * 0.25;

      // 4. Các Phòng Thí Nghiệm Nguyên Tố Lơ Lửng bồng bềnh
      for (const lab of floatingLabs) {
        lab.group.position.y =
          lab.baseY + Math.sin(elapsed * lab.speed + lab.phase) * 0.75;
        lab.group.rotation.y += delta * 0.15;
      }

      // 5. Tí Nị của Ishar nhún nhảy dễ thương (hop & squish)
      const hopCycle = Math.sin(elapsed * 3.5);
      tiniGroup.position.y = 5.8 + Math.max(0, hopCycle * 0.45);
      const squishY = 1.0 + (hopCycle < 0 ? hopCycle * 0.08 : -hopCycle * 0.05);
      const squishXZ = 1.0 / Math.sqrt(squishY);
      tiniGroup.scale.set(squishXZ, squishY, squishXZ);
      tiniAura.scale.setScalar(1.0 + Math.sin(elapsed * 4.0) * 0.12);

      // 6. Người đá Golem của Dirak: Nhịp thở nguyên lực ở lõi ngực và mắt
      const golemBreath = 0.85 + Math.sin(elapsed * 1.6) * 0.25;
      golemCore.scale.setScalar(golemBreath);

      // 7. Tinh linh nguyên tố bay lượn ziczac quanh các tháp
      for (const w of wisps) {
        const angle = elapsed * w.orbitSpeed + w.phase;
        const radius = w.baseRadius + Math.sin(elapsed * 1.5 + w.phase) * 1.8;
        const wx = Math.cos(angle) * radius;
        const wz = Math.sin(angle) * radius;
        const wy = w.yOffset + Math.sin(elapsed * w.verticalSpeed + w.phase) * 2.2;
        w.mesh.position.set(wx, wy, wz);
      }

      // 8. Gia tộc Tiên cá bơi lội và quẫy đuôi nhịp nhàng
      for (const m of mermaids) {
        m.tailMesh.rotation.z = Math.sin(elapsed * 2.8 + m.swimPhase) * 0.35;
        m.group.position.y = 0.8 + Math.sin(elapsed * 1.4 + m.swimPhase) * 0.15;
      }
    },
  };
}
