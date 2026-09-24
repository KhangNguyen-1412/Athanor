import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface AfataForestSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ trung tâm địa lý của Rừng Nguyên Sinh (Afata) trên bản đồ Athanor:
export const AFATA_CENTER_COORD = { x: 14.5, y: 49.0 };

/**
 * Hệ thống mô phỏng 3D chuyên sâu cho RỪNG NGUYÊN SINH (AFATA — LỤC ĐỊA ELBORN)
 * Tái hiện chân thực 5 khu vực theo concept art chính thức:
 * 1. Rừng Verno (Verno Forest): Đại cổ thụ bọc giáp kim loại, rễ ngọc bích phát sáng, Thông thương lộ, Vòng tròn cự thạch.
 * 2. Sơn cốc Verno (Verno Valley): Thung lũng lòng chảo xanh tươi, dòng suối uốn lượn, nhà trên cây / tổ thụ gỗ, tinh thể lam ngọc.
 * 3. Sông Elda (Elda River): Dòng sông ranh giới phân định 2 thái cực (bờ Tây elven rễ cây đan vs bờ Đông dung nham Lokheim).
 * 4. Vách núi Elborn (Elborn Cliffs): Trụ đá karst cao vút quấn rễ thần thụ, hang động cổ ngữ, vỉa thạch anh xanh và thác nước.
 * 5. Sơn mạch Verno (Verno Mountain Range): Dãy núi răng cưa hùng vĩ chắn giữ phía bắc, rừng già bạt ngàn ôm sườn núi.
 */
export function createAfataForest3D(): AfataForestSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(AFATA_CENTER_COORD.x, AFATA_CENTER_COORD.y, 0);
  rootGroup.position.copy(basePos);

  // Mảng lưu trữ các vật liệu cần update hoạt họa ánh sáng / dòng chảy
  const animatedEmissiveMaterials: { mat: THREE.MeshStandardMaterial; baseIntensity: number; speed: number; phase: number }[] = [];
  const waterfallMeshes: THREE.Mesh[] = [];
  const riverMeshes: THREE.Mesh[] = [];

  // =========================================================================
  // 1. BẢNG VẬT LIỆU CHUẨN THIÊN NHIÊN AFATA & ĐỐI LẬP LOKHEIM
  // =========================================================================
  
  // Vỏ cây cổ thụ rêu phong
  const ancientBarkMat = new THREE.MeshStandardMaterial({
    color: '#1f2e22',
    roughness: 0.88,
    metalness: 0.12,
  });

  // Đai giáp kim loại elven bảo vệ thân cây
  const elvenArmorMat = new THREE.MeshStandardMaterial({
    color: '#94a3b8',
    emissive: '#334155',
    emissiveIntensity: 0.25,
    metalness: 0.78,
    roughness: 0.32,
  });

  // Mạch rễ ngọc bích phát sáng (Emerald Luminescent Veins)
  const emeraldVeinMat = new THREE.MeshStandardMaterial({
    color: '#10b981',
    emissive: '#059669',
    emissiveIntensity: 0.85,
    roughness: 0.25,
    metalness: 0.2,
  });
  animatedEmissiveMaterials.push({ mat: emeraldVeinMat, baseIntensity: 0.85, speed: 2.2, phase: 0 });

  // Tinh thể ma thuật lam ngọc (Cyan Arcane Crystals)
  const cyanCrystalMat = new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#0284c7',
    emissiveIntensity: 0.95,
    roughness: 0.15,
    metalness: 0.1,
  });
  animatedEmissiveMaterials.push({ mat: cyanCrystalMat, baseIntensity: 0.95, speed: 2.8, phase: 1.2 });

  // Tán lá rừng xanh mướt mát
  const lushCanopyMat = new THREE.MeshStandardMaterial({
    color: '#166534',
    emissive: '#14532d',
    emissiveIntensity: 0.2,
    roughness: 0.75,
    metalness: 0.05,
  });

  // Tán lá vàng ươm nắng
  const sunlitCanopyMat = new THREE.MeshStandardMaterial({
    color: '#ca8a04',
    emissive: '#713f12',
    emissiveIntensity: 0.25,
    roughness: 0.75,
    metalness: 0.05,
  });

  // Đá lát thông thương lộ & cự thạch Druid
  const ancientStoneMat = new THREE.MeshStandardMaterial({
    color: '#64748b',
    roughness: 0.9,
    metalness: 0.08,
  });

  // Gỗ mộc & mái tranh nhà trên cây
  const timberHutMat = new THREE.MeshStandardMaterial({
    color: '#78350f',
    roughness: 0.82,
    metalness: 0.1,
  });

  const thatchRoofMat = new THREE.MeshStandardMaterial({
    color: '#a16207',
    roughness: 0.95,
    metalness: 0.05,
  });

  // Nước suối & sông Elda trong lành
  const freshwaterMat = new THREE.MeshStandardMaterial({
    color: '#0284c7',
    emissive: '#0369a1',
    emissiveIntensity: 0.2,
    roughness: 0.12,
    metalness: 0.35,
    transparent: true,
    opacity: 0.85,
  });

  // Bọt nước thác ghềnh
  const riverFoamMat = new THREE.MeshBasicMaterial({
    color: '#e0f2fe',
    transparent: true,
    opacity: 0.65,
  });

  // Vách đá núi lửa bờ Đông sông Elda (Lokheim)
  const volcanicBasaltMat = new THREE.MeshStandardMaterial({
    color: '#18181b',
    roughness: 0.95,
    metalness: 0.15,
  });

  // Dung nham nứt nẻ đỏ rực (Molten Magma)
  const magmaGlowMat = new THREE.MeshStandardMaterial({
    color: '#ef4444',
    emissive: '#dc2626',
    emissiveIntensity: 1.1,
    roughness: 0.3,
    metalness: 0.1,
  });
  animatedEmissiveMaterials.push({ mat: magmaGlowMat, baseIntensity: 1.1, speed: 3.5, phase: 2.5 });

  // Phế tích đá elven cổ đại
  const elvenRuinsMat = new THREE.MeshStandardMaterial({
    color: '#cbd5e1',
    roughness: 0.6,
    metalness: 0.15,
  });

  // Khối vách đá karst cao vút
  const karstRockMat = new THREE.MeshStandardMaterial({
    color: '#334155',
    roughness: 0.86,
    metalness: 0.1,
  });

  // Đỉnh núi phủ tuyết trắng
  const snowPeakMat = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.35,
    metalness: 0.05,
  });

  // =========================================================================
  // 2. KHU VỰC 1: RỪNG VERNO (VERNO FOREST)
  // Vị trí cục bộ: {-3.0, 0, -2.5}
  // =========================================================================
  const vernoForestGroup = new THREE.Group();
  vernoForestGroup.position.set(-2.5, 0, -2.0);

  // Helper tạo Đại Cổ Thụ bọc giáp với rễ phát sáng
  const createArmoredGuardianTree = (x: number, z: number, scale: number) => {
    const tree = new THREE.Group();
    tree.position.set(x, 0, z);
    tree.scale.set(scale, scale, scale);

    // Thân cây cổ thụ uốn lượn
    const trunkGeo = new THREE.CylinderGeometry(1.2, 2.2, 14, 10);
    const trunk = new THREE.Mesh(trunkGeo, ancientBarkMat);
    trunk.position.y = 7;
    trunk.castShadow = true;
    tree.add(trunk);

    // Vòng giáp kim loại ôm quanh thân cây (Elven Armor Cuff)
    const cuffGeo = new THREE.CylinderGeometry(1.45, 1.6, 2.5, 12, 1, true);
    const cuff = new THREE.Mesh(cuffGeo, elvenArmorMat);
    cuff.position.y = 6.5;
    tree.add(cuff);

    // Hoa văn chạm khắc biểu tượng bảo hộ trên giáp
    const emblemGeo = new THREE.RingGeometry(0.3, 0.6, 8);
    const emblem = new THREE.Mesh(emblemGeo, emeraldVeinMat);
    emblem.position.set(0, 6.5, 1.55);
    tree.add(emblem);

    // Mạch rễ khổng lồ bò ngoằn ngoèo trên mặt đất (Luminescent Roots)
    for (let r = 0; r < 5; r++) {
      const angle = (r / 5) * Math.PI * 2 + Math.PI / 10;
      const rootLen = 4.5 + (r % 2) * 1.5;
      const rootCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(Math.cos(angle) * 1.2, 1.5, Math.sin(angle) * 1.2),
        new THREE.Vector3(Math.cos(angle) * 2.5, 0.4, Math.sin(angle) * 2.5),
        new THREE.Vector3(Math.cos(angle + 0.3) * rootLen, 0.1, Math.sin(angle + 0.3) * rootLen),
      ]);
      const rootGeo = new THREE.TubeGeometry(rootCurve, 10, 0.45, 7, false);
      const rootMesh = new THREE.Mesh(rootGeo, ancientBarkMat);
      tree.add(rootMesh);

      // Dải nhựa cây phát quang xanh ngọc lồng bên trên rễ
      const veinGeo = new THREE.TubeGeometry(rootCurve, 10, 0.18, 5, false);
      const veinMesh = new THREE.Mesh(veinGeo, emeraldVeinMat);
      veinMesh.position.y += 0.12;
      tree.add(veinMesh);
    }

    // Tán lá rậm rạp nhiều tầng
    const canopy1 = new THREE.Mesh(new THREE.DodecahedronGeometry(4.8, 1), lushCanopyMat);
    canopy1.position.y = 15;
    canopy1.scale.set(1.4, 0.75, 1.3);
    tree.add(canopy1);

    const canopy2 = new THREE.Mesh(new THREE.DodecahedronGeometry(3.6, 1), sunlitCanopyMat);
    canopy2.position.set(0.8, 18, -0.6);
    canopy2.scale.set(1.2, 0.7, 1.1);
    tree.add(canopy2);

    return tree;
  };

  // Đặt 3 Đại Cổ Thụ bọc giáp tại Rừng Verno
  vernoForestGroup.add(createArmoredGuardianTree(-6, -4, 1.05));
  vernoForestGroup.add(createArmoredGuardianTree(5, -2, 0.95));
  vernoForestGroup.add(createArmoredGuardianTree(-1, -8, 0.85));

  // Con đường lát đá "Thông Thương Lộ" (Ancient Trade Highway)
  const pathPoints = [
    new THREE.Vector3(-10, 0.1, 4),
    new THREE.Vector3(-5, 0.15, 1),
    new THREE.Vector3(0, 0.2, -2),
    new THREE.Vector3(6, 0.15, -4),
    new THREE.Vector3(12, 0.1, -5),
  ];
  const roadCurve = new THREE.CatmullRomCurve3(pathPoints);
  const roadGeo = new THREE.TubeGeometry(roadCurve, 24, 1.1, 4, false);
  roadGeo.scale(1, 0.15, 1);
  const roadMesh = new THREE.Mesh(roadGeo, ancientStoneMat);
  vernoForestGroup.add(roadMesh);

  // Các lán trại gỗ, mái che thương nhân ven đường
  for (let s = 0; s < 3; s++) {
    const stall = new THREE.Group();
    const posOnRoad = roadCurve.getPoint(0.25 + s * 0.3);
    stall.position.set(posOnRoad.x + 1.8, 0.2, posOnRoad.z + 1.2);

    // Cọc gỗ
    for (let c = 0; c < 4; c++) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 5), timberHutMat);
      post.position.set((c % 2) * 1.2 - 0.6, 0.8, Math.floor(c / 2) * 1.0 - 0.5);
      stall.add(post);
    }
    // Mái che rơm / vải bạt
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.2, 0.8, 4), thatchRoofMat);
    roof.position.y = 1.8;
    roof.rotation.y = Math.PI / 4;
    stall.add(roof);

    vernoForestGroup.add(stall);
  }

  // Vòng Tròn Cự Thạch Druid (Megalithic Stone Circle)
  const stoneRingGroup = new THREE.Group();
  stoneRingGroup.position.set(8, 0.6, 3);
  // Gò đất tròn nâng cao
  const hillGeo = new THREE.CylinderGeometry(4.2, 5.0, 1.2, 16);
  const hillMesh = new THREE.Mesh(hillGeo, ancientBarkMat);
  hillMesh.position.y = 0.6;
  stoneRingGroup.add(hillMesh);

  // 7 Cột đá cự thạch xếp thành vòng tròn
  for (let m = 0; m < 7; m++) {
    const angle = (m / 7) * Math.PI * 2;
    const stoneGeo = new THREE.BoxGeometry(0.8, 2.6 + (m % 3) * 0.5, 0.6);
    const stone = new THREE.Mesh(stoneGeo, ancientStoneMat);
    stone.position.set(Math.cos(angle) * 3.0, 1.8, Math.sin(angle) * 3.0);
    stone.rotation.y = angle + 0.2;
    stoneRingGroup.add(stone);
  }
  // Bàn đá cúng tế trung tâm tỏa ánh sáng
  const altarGeo = new THREE.CylinderGeometry(1.0, 1.2, 0.8, 8);
  const altar = new THREE.Mesh(altarGeo, elvenRuinsMat);
  altar.position.y = 1.4;
  stoneRingGroup.add(altar);

  const altarGemGeo = new THREE.OctahedronGeometry(0.45, 0);
  const altarGem = new THREE.Mesh(altarGemGeo, emeraldVeinMat);
  altarGem.position.y = 2.2;
  stoneRingGroup.add(altarGem);

  vernoForestGroup.add(stoneRingGroup);
  rootGroup.add(vernoForestGroup);

  // =========================================================================
  // 3. KHU VỰC 2: SƠN CỐC VERNO (VERNO VALLEY)
  // Vị trí cục bộ: {-4.0, 0, 8.0}
  // =========================================================================
  const vernoValleyGroup = new THREE.Group();
  vernoValleyGroup.position.set(-3.5, 0, 8.5);

  // Lòng chảo thung lũng xanh trũng xuống
  const basinGeo = new THREE.CylinderGeometry(14, 16, 1.8, 24);
  const basin = new THREE.Mesh(basinGeo, lushCanopyMat);
  basin.position.y = -0.5;
  basin.scale.set(1.3, 1, 0.9);
  vernoValleyGroup.add(basin);

  // Dòng suối nhỏ uốn khúc chảy dọc thung lũng
  const streamPoints = [
    new THREE.Vector3(-12, 0.45, -5),
    new THREE.Vector3(-6, 0.45, -1),
    new THREE.Vector3(0, 0.45, 0),
    new THREE.Vector3(7, 0.45, 3),
    new THREE.Vector3(13, 0.45, 5),
  ];
  const streamCurve = new THREE.CatmullRomCurve3(streamPoints);
  const streamGeo = new THREE.TubeGeometry(streamCurve, 30, 0.9, 4, false);
  streamGeo.scale(1, 0.1, 1);
  const streamMesh = new THREE.Mesh(streamGeo, freshwaterMat);
  riverMeshes.push(streamMesh);
  vernoValleyGroup.add(streamMesh);

  // Đại Thần Thụ mang Nhà Trên Cây (Arboreal Treehouses & Root Huts)
  const createTreehouseTree = (x: number, z: number, scale: number) => {
    const tree = new THREE.Group();
    tree.position.set(x, 0.4, z);
    tree.scale.set(scale, scale, scale);

    // Thân cây xòe rộng dạng tổ chim
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 3.8, 12, 10), ancientBarkMat);
    trunk.position.y = 6;
    tree.add(trunk);

    // Nhà gỗ trên thân cây (Treehouse 1)
    const hut1 = new THREE.Group();
    hut1.position.set(1.5, 7.5, 0.8);
    const hutBody1 = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.5, 2.0, 7), timberHutMat);
    hut1.add(hutBody1);
    const hutRoof1 = new THREE.Mesh(new THREE.ConeGeometry(2.1, 1.6, 7), thatchRoofMat);
    hutRoof1.position.y = 1.7;
    hut1.add(hutRoof1);
    tree.add(hut1);

    // Nhà gỗ trên thân cây (Treehouse 2 cao hơn)
    const hut2 = new THREE.Group();
    hut2.position.set(-1.4, 10.2, -0.6);
    hut2.scale.set(0.85, 0.85, 0.85);
    const hutBody2 = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 1.8, 6), timberHutMat);
    hut2.add(hutBody2);
    const hutRoof2 = new THREE.Mesh(new THREE.ConeGeometry(1.8, 1.4, 6), thatchRoofMat);
    hutRoof2.position.y = 1.5;
    hut2.add(hutRoof2);
    tree.add(hut2);

    // Cầu thang gỗ & sàn gỗ nối
    const bridgeGeo = new THREE.BoxGeometry(3.2, 0.15, 0.8);
    const bridge = new THREE.Mesh(bridgeGeo, timberHutMat);
    bridge.position.set(0, 8.8, 0.2);
    bridge.rotation.z = 0.35;
    tree.add(bridge);

    // Thang dây leo xuống mặt đất
    const ladderGeo = new THREE.BoxGeometry(0.3, 6.0, 0.05);
    const ladder = new THREE.Mesh(ladderGeo, timberHutMat);
    ladder.position.set(2.2, 3.5, 1.2);
    ladder.rotation.z = -0.15;
    tree.add(ladder);

    // Tán lá rộng lớn bao trùm
    const canopy = new THREE.Mesh(new THREE.SphereGeometry(6.5, 12, 8), lushCanopyMat);
    canopy.position.y = 15;
    canopy.scale.set(1.5, 0.6, 1.3);
    tree.add(canopy);

    return tree;
  };

  vernoValleyGroup.add(createTreehouseTree(-6, -2, 1.0));
  vernoValleyGroup.add(createTreehouseTree(4, 2, 0.9));

  // Cụm Tinh Thể Dạ Quang Lam Ngọc (Bioluminescent Crystals) rải rác bờ suối
  const crystalPositions = [
    { x: -3, z: -1 }, { x: 2, z: 0 }, { x: 7, z: 2 },
    { x: -8, z: -4 }, { x: 9, z: 5 }, { x: -1, z: 2 },
  ];
  crystalPositions.forEach(({ x, z }, i) => {
    const cluster = new THREE.Group();
    cluster.position.set(x, 0.5, z);
    for (let c = 0; c < 4; c++) {
      const h = 0.8 + (c % 3) * 0.4;
      const crystalGeo = new THREE.ConeGeometry(0.25, h, 5);
      const crystal = new THREE.Mesh(crystalGeo, cyanCrystalMat);
      crystal.position.set((c % 2) * 0.4 - 0.2, h / 2, Math.floor(c / 2) * 0.4 - 0.2);
      crystal.rotation.set((c - 1.5) * 0.2, i * 0.5, (c - 1) * 0.2);
      cluster.add(crystal);
    }
    vernoValleyGroup.add(cluster);
  });

  // Hang đá tự nhiên bên hông vách thung lũng (Cave Dwelling)
  const caveGroup = new THREE.Group();
  caveGroup.position.set(-11, 1.5, 3);
  const caveRock = new THREE.Mesh(new THREE.DodecahedronGeometry(3.5, 1), karstRockMat);
  caveRock.scale.set(1.2, 1.5, 0.8);
  caveGroup.add(caveRock);
  // Cửa hang tối rỗng
  const caveMouth = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 2.0, 8), volcanicBasaltMat);
  caveMouth.rotation.x = Math.PI / 2;
  caveMouth.position.set(0.5, 0, 0.8);
  caveGroup.add(caveMouth);
  vernoValleyGroup.add(caveGroup);

  rootGroup.add(vernoValleyGroup);

  // =========================================================================
  // 4. KHU VỰC 3: SÔNG ELDA (ELDA RIVER — ĐỐI LẬP AFATA & LOKHEIM)
  // Vị trí cục bộ: {13.0, 0, 7.0} (Phía Đông Nam giáp Vực Hỗn Mang)
  // =========================================================================
  const eldaRiverGroup = new THREE.Group();
  eldaRiverGroup.position.set(12.5, 0, 6.5);

  // Dòng sông lớn chia đôi lãnh thổ
  const eldaRiverPoints = [
    new THREE.Vector3(-4, 0.2, -14),
    new THREE.Vector3(-1, 0.2, -7),
    new THREE.Vector3(0, 0.2, 0),
    new THREE.Vector3(2, 0.2, 8),
    new THREE.Vector3(5, 0.2, 15),
  ];
  const eldaCurve = new THREE.CatmullRomCurve3(eldaRiverPoints);
  const eldaGeo = new THREE.TubeGeometry(eldaCurve, 32, 2.2, 6, false);
  eldaGeo.scale(1, 0.08, 1);
  const eldaMesh = new THREE.Mesh(eldaGeo, freshwaterMat);
  riverMeshes.push(eldaMesh);
  eldaRiverGroup.add(eldaMesh);

  // Đá ngầm giữa dòng sông và bọt nước
  for (let rk = 0; rk < 5; rk++) {
    const pt = eldaCurve.getPoint(0.18 + rk * 0.17);
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7 + (rk % 2) * 0.3, 0), ancientStoneMat);
    rock.position.set(pt.x + ((rk % 2) - 0.5) * 0.8, 0.4, pt.z);
    eldaRiverGroup.add(rock);

    const foam = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.4, 8), riverFoamMat);
    foam.position.set(rock.position.x, 0.25, rock.position.z);
    foam.rotation.x = -Math.PI / 2;
    eldaRiverGroup.add(foam);
  }

  // --- BỜ TÂY (BÊN TRÁI): THÁNH ĐỊA AFATA THANH BÌNH ---
  const westBankGroup = new THREE.Group();
  westBankGroup.position.set(-6, 0, 0);

  // Hàng rào rễ cây đan kết tự nhiên chắn sóng
  for (let w = 0; w < 6; w++) {
    const rootWall = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.55, 3.5, 6), ancientBarkMat);
    rootWall.position.set(0.8 + Math.sin(w) * 0.8, 1.2, (w - 2.5) * 4.2);
    rootWall.rotation.z = -0.3;
    rootWall.rotation.y = (w % 2) * 0.4;
    westBankGroup.add(rootWall);
  }

  // Cổng vòm Elven cổ đổ nát rêu phong (Ancient Elven Arch Ruins)
  const elvenArch = new THREE.Group();
  elvenArch.position.set(-2, 0.4, -2);
  const pillar1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.5, 0.8), elvenRuinsMat);
  pillar1.position.set(-1.8, 2.25, 0);
  elvenArch.add(pillar1);
  const pillar2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.5, 0.8), elvenRuinsMat);
  pillar2.position.set(1.8, 2.25, 0);
  elvenArch.add(pillar2);
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.7, 0.9), elvenRuinsMat);
  lintel.position.set(0, 4.7, 0);
  elvenArch.add(lintel);
  westBankGroup.add(elvenArch);

  // Cổ thụ canh giữ bờ sông
  westBankGroup.add(createArmoredGuardianTree(-4, 3, 0.85));
  eldaRiverGroup.add(westBankGroup);

  // --- BỜ ĐÔNG (BÊN PHẢI): VỰC HỖN MANG LOKHEIM RỰC LỬA ---
  const eastBankGroup = new THREE.Group();
  eastBankGroup.position.set(6, 0, 0);

  // Vách đá núi lửa đen ngòm nứt nẻ
  for (let b = 0; b < 5; b++) {
    const basaltCrag = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.5 + (b % 3) * 1.0, 4.0), volcanicBasaltMat);
    basaltCrag.position.set(1.5, 1.2, (b - 2) * 4.5);
    basaltCrag.rotation.y = b * 0.4;
    basaltCrag.rotation.z = 0.15;
    eastBankGroup.add(basaltCrag);
  }

  // Khe nứt dung nham nung đỏ (Molten Magma Fissures)
  const magmaFissure = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 18), magmaGlowMat);
  magmaFissure.position.set(1.8, 0.35, 0);
  magmaFissure.rotation.y = 0.15;
  eastBankGroup.add(magmaFissure);

  // Tàn tích chiến trường: Vũ khí gươm giáo cắm xiên trên đá
  for (let sw = 0; sw < 6; sw++) {
    const sword = new THREE.Group();
    sword.position.set(1.2 + (sw % 3) * 0.8, 1.8, (sw - 2.5) * 3.5);
    // Lưỡi kiếm
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.6, 0.04), elvenArmorMat);
    sword.add(blade);
    // Chuôi kiếm
    const hilt = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.06, 0.08), elvenArmorMat);
    hilt.position.y = 0.85;
    sword.add(hilt);
    sword.rotation.set((sw % 2 ? 0.35 : -0.35), 0, (sw % 2 ? -0.4 : 0.4));
    eastBankGroup.add(sword);
  }

  eldaRiverGroup.add(eastBankGroup);
  rootGroup.add(eldaRiverGroup);

  // =========================================================================
  // 5. KHU VỰC 4: VÁCH NÚI ELBORN (ELBORN CLIFFS)
  // Vị trí cục bộ: {-12.0, 0, -4.5} (Tây / Tây Bắc hiểm trở)
  // =========================================================================
  const elbornCliffsGroup = new THREE.Group();
  elbornCliffsGroup.position.set(-11.5, 0, -4.5);

  // 3 Trụ vách đá karst cao vút sừng sững
  const createCliffSpire = (x: number, z: number, height: number, radius: number) => {
    const spire = new THREE.Group();
    spire.position.set(x, 0, z);

    // Trụ đá karst nhiều tầng bậc
    const rockGeo = new THREE.CylinderGeometry(radius * 0.7, radius * 1.3, height, 8);
    const rock = new THREE.Mesh(rockGeo, karstRockMat);
    rock.position.y = height / 2;
    spire.add(rock);

    // Rễ thần thụ khổng lồ quấn quanh vách đá như mãng xà
    const rootCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(radius * 0.9, 0, 0),
      new THREE.Vector3(0, height * 0.3, radius * 0.85),
      new THREE.Vector3(-radius * 0.8, height * 0.6, 0),
      new THREE.Vector3(0, height * 0.85, -radius * 0.75),
      new THREE.Vector3(radius * 0.6, height, 0),
    ]);
    const rootMesh = new THREE.Mesh(new THREE.TubeGeometry(rootCurve, 20, 0.4, 6, false), ancientBarkMat);
    spire.add(rootMesh);

    // Tinh thể lam ngọc phát sáng gắn trên vách đá
    for (let cry = 0; cry < 3; cry++) {
      const crystal = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.2, 5), cyanCrystalMat);
      const frac = 0.35 + cry * 0.25;
      const pt = rootCurve.getPoint(frac);
      crystal.position.set(pt.x * 1.1, pt.y, pt.z * 1.1);
      crystal.rotation.set(0.5, cry * 1.2, -0.4);
      spire.add(crystal);
    }

    // Động đá cổ ngữ trên vách núi
    const caveEntrance = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.0, 1.2), volcanicBasaltMat);
    caveEntrance.position.set(0, height * 0.45, radius * 0.75);
    spire.add(caveEntrance);

    return spire;
  };

  elbornCliffsGroup.add(createCliffSpire(-3, -2, 18, 2.8));
  elbornCliffsGroup.add(createCliffSpire(3, 1, 15, 2.4));
  elbornCliffsGroup.add(createCliffSpire(-1, 5, 13, 2.1));

  // Thác Nước Vách Núi (Elborn Waterfall)
  const waterfallGroup = new THREE.Group();
  waterfallGroup.position.set(-0.5, 0, 1.2);
  const fallGeo = new THREE.PlaneGeometry(1.6, 12, 1, 8);
  fallGeo.rotateY(Math.PI / 4);
  const waterfall = new THREE.Mesh(fallGeo, freshwaterMat);
  waterfall.position.y = 8;
  waterfallMeshes.push(waterfall);
  waterfallGroup.add(waterfall);

  // Hồ bọt nước dưới chân thác
  const poolGeo = new THREE.CircleGeometry(2.5, 12);
  poolGeo.rotateX(-Math.PI / 2);
  const pool = new THREE.Mesh(poolGeo, riverFoamMat);
  pool.position.y = 0.3;
  waterfallGroup.add(pool);

  elbornCliffsGroup.add(waterfallGroup);
  rootGroup.add(elbornCliffsGroup);

  // =========================================================================
  // 6. KHU VỰC 5: SƠN MẠCH VERNO (VERNO MOUNTAIN RANGE)
  // Vị trí cục bộ: {2.0, 0, -11.0} (Phía Bắc bảo vệ Afata)
  // =========================================================================
  const vernoMountainsGroup = new THREE.Group();
  vernoMountainsGroup.position.set(2.0, 0, -10.5);

  // Dãy 5 đỉnh núi răng cưa cao chọc trời
  const mountainConfigs = [
    { x: -9, z: -1, h: 22, r: 6.5, snow: true },
    { x: -4, z: -3, h: 26, r: 7.2, snow: true },
    { x: 2, z: -2, h: 28, r: 7.8, snow: true },
    { x: 8, z: -4, h: 24, r: 6.8, snow: true },
    { x: 13, z: -1, h: 19, r: 5.8, snow: false },
  ];

  mountainConfigs.forEach(({ x, z, h, r, snow }) => {
    const mountain = new THREE.Group();
    mountain.position.set(x, 0, z);

    // Chóp núi hình nón răng cưa đa diện
    const peakGeo = new THREE.ConeGeometry(r, h, 7);
    const peak = new THREE.Mesh(peakGeo, karstRockMat);
    peak.position.y = h / 2;
    mountain.add(peak);

    // Đỉnh chóp phủ tuyết trắng
    if (snow) {
      const snowCapGeo = new THREE.ConeGeometry(r * 0.45, h * 0.35, 7);
      const snowCap = new THREE.Mesh(snowCapGeo, snowPeakMat);
      snowCap.position.y = h - (h * 0.35) / 2;
      mountain.add(snowCap);
    }

    // Các tầng rừng thông phủ sườn chân núi
    for (let c = 0; c < 4; c++) {
      const angle = (c / 4) * Math.PI * 2;
      const forestClump = new THREE.Mesh(new THREE.DodecahedronGeometry(2.2, 0), lushCanopyMat);
      forestClump.position.set(Math.cos(angle) * (r * 0.7), h * 0.25, Math.sin(angle) * (r * 0.7));
      mountain.add(forestClump);
    }

    vernoMountainsGroup.add(mountain);
  });

  rootGroup.add(vernoMountainsGroup);

  // =========================================================================
  // 7. CÁC HẠT TINH ANH LINH THẢO (FOREST SPIRIT PARTICLES) BAY LƠ LỬNG
  // =========================================================================
  const spiritCount = 20;
  const spiritGeo = new THREE.SphereGeometry(0.18, 6, 6);
  const spiritMat = new THREE.MeshBasicMaterial({
    color: '#6ee7b7',
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.85,
  });

  const spirits: { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number; radius: number; phase: number }[] = [];
  for (let s = 0; s < spiritCount; s++) {
    const spMesh = new THREE.Mesh(spiritGeo, spiritMat);
    const px = (Math.random() - 0.5) * 26;
    const pz = (Math.random() - 0.5) * 24;
    const py = 3 + Math.random() * 8;
    spMesh.position.set(px, py, pz);
    rootGroup.add(spMesh);
    spirits.push({
      mesh: spMesh,
      basePos: new THREE.Vector3(px, py, pz),
      speed: 0.8 + Math.random() * 0.8,
      radius: 0.8 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
    });
  }

  // =========================================================================
  // 8. VÒNG LẶP UPDATE (ANIMATION LOOP)
  // =========================================================================
  return {
    group: rootGroup,
    update: (_delta: number, elapsed: number) => {
      // 1. Nhịp thở ánh sáng vật liệu phát quang (rễ ngọc bích, tinh thể lam ngọc, dung nham)
      animatedEmissiveMaterials.forEach(({ mat, baseIntensity, speed, phase }) => {
        mat.emissiveIntensity = baseIntensity + Math.sin(elapsed * speed + phase) * 0.35;
      });

      // 2. Chuyển động của các hạt linh thảo bay lượn trong rừng
      spirits.forEach(({ mesh, basePos, speed, radius, phase }) => {
        const t = elapsed * speed + phase;
        mesh.position.x = basePos.x + Math.sin(t) * radius;
        mesh.position.z = basePos.z + Math.cos(t * 0.7) * radius;
        mesh.position.y = basePos.y + Math.sin(t * 1.4) * 0.8;
      });

      // 3. Hiệu ứng dòng nước chảy và thác nước
      waterfallMeshes.forEach((w) => {
        w.position.y = 8 + Math.sin(elapsed * 4.0) * 0.08;
      });
      riverMeshes.forEach((r, idx) => {
        r.position.y = 0.2 + Math.sin(elapsed * 2.5 + idx) * 0.04;
      });
    },
  };
}
