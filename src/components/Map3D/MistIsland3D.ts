import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface MistIslandSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Đảo Sương Mù:
// Phía nam Biển Ánh Sáng (Sea of Holy Light), ngay phía bắc ngọn núi thánh Mount Orphean (Tháp Quang Minh)
export const MIST_ISLAND_COORD = { x: 46.5, y: 18.5 };

/**
 * Hệ thống kiến trúc và sinh thái 3D cho ĐẢO SƯƠNG MÙ (MIST ISLAND):
 * 1. Địa hình biển đảo cô lập hiểm trở: Vách đá dựng đứng, rạn san hô, bãi đá ngầm lởm chởm.
 * 2. Kiến trúc Nhẫn Giả phương Đông: Thiên Long Các 3 tầng mái cong, Cổng Torii thần đạo, chòi canh tuần tra.
 * 3. Màn sương mù bao phủ vĩnh cửu: Vòng xoáy sương mù 3D cuộn tròn và Lớp khiên ngụy trang ma mị.
 * 4. Thái Cổ Long (Ancient Dragon): Di cốt Thần Long cổ đại và Long Hồn tinh thể bay lượn che chở đảo.
 * 5. Quái vật biển cổ đại (Sea Leviathans): Xúc tu khổng lồ và vây gai rình rập ngoài khơi sâu.
 */
export function createMistIsland3D(): MistIslandSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(MIST_ISLAND_COORD.x, MIST_ISLAND_COORD.y, 0);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // VẬT LIỆU CAO CẤP DÙNG CHO ĐẢO SƯƠNG MÙ
  // =========================================================================
  const darkBasaltMat = new THREE.MeshStandardMaterial({
    color: '#0f172a',
    roughness: 0.85,
    metalness: 0.15,
  });

  const mossRockMat = new THREE.MeshStandardMaterial({
    color: '#14532d',
    roughness: 0.9,
    metalness: 0.05,
  });

  const lacqueredCrimsonMat = new THREE.MeshStandardMaterial({
    color: '#991b1b',
    roughness: 0.35,
    metalness: 0.25,
  });

  const toriiRedMat = new THREE.MeshStandardMaterial({
    color: '#dc2626',
    roughness: 0.4,
    metalness: 0.2,
  });

  const jadeRoofMat = new THREE.MeshStandardMaterial({
    color: '#0f766e',
    roughness: 0.3,
    metalness: 0.3,
  });

  const antiqueGoldMat = new THREE.MeshStandardMaterial({
    color: '#facc15',
    metalness: 0.85,
    roughness: 0.2,
    emissive: '#ca8a04',
    emissiveIntensity: 0.25,
  });

  const dragonSpiritMat = new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#06b6d4',
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.85,
    roughness: 0.1,
    metalness: 0.2,
  });

  const dragonBoneMat = new THREE.MeshStandardMaterial({
    color: '#e2e8f0',
    roughness: 0.65,
    metalness: 0.1,
  });

  const mistMat = new THREE.MeshBasicMaterial({
    color: '#cbd5e1',
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  const barrierMat = new THREE.MeshStandardMaterial({
    color: '#2dd4bf',
    emissive: '#0d9488',
    emissiveIntensity: 0.4,
    transparent: true,
    opacity: 0.16,
    roughness: 0.1,
    metalness: 0.8,
    wireframe: false,
  });

  const leviathanMat = new THREE.MeshStandardMaterial({
    color: '#1e1b4b',
    roughness: 0.45,
    metalness: 0.3,
  });

  const leviathanGlowMat = new THREE.MeshStandardMaterial({
    color: '#a855f7',
    emissive: '#7c3aed',
    emissiveIntensity: 0.95,
  });

  // Mảng quản lý hoạt họa
  const rotators: Array<{ obj: THREE.Object3D; speedY: number }> = [];
  const leviathanParts: Array<{ obj: THREE.Object3D; baseRotationZ: number; phase: number }> = [];
  const dragonSegments: THREE.Object3D[] = [];

  // =========================================================================
  // 1. ĐỊA HÌNH VÁCH ĐÁ BIỂN & CÁC MỎM ĐÁ HIỂM TRỞ (SEA CLIFFS & SEA STACKS)
  // =========================================================================
  const terrainGroup = new THREE.Group();

  // Khối đảo chính nhiều tầng vách đá bazan gồ ghề
  const islandTier1 = new THREE.Mesh(new THREE.CylinderGeometry(14, 18, 5, 9), darkBasaltMat);
  islandTier1.position.y = 2.5;
  terrainGroup.add(islandTier1);

  const islandTier2 = new THREE.Mesh(new THREE.CylinderGeometry(10, 14, 6, 8), mossRockMat);
  islandTier2.position.set(0.5, 7.5, -0.5);
  terrainGroup.add(islandTier2);

  const islandPeak = new THREE.Mesh(new THREE.CylinderGeometry(6, 10, 5, 7), darkBasaltMat);
  islandPeak.position.set(1.0, 12.5, -1.0);
  terrainGroup.add(islandPeak);

  // Mỏm đá ngọn hải đăng/vọng cảnh nhô ra phía nam (Cliffs of Tachi)
  const southCliff = new THREE.Mesh(new THREE.ConeGeometry(4.5, 9, 6), darkBasaltMat);
  southCliff.position.set(0, 4.5, 12);
  southCliff.rotation.x = 0.12;
  terrainGroup.add(southCliff);

  // Các mỏm đá nhọn hoắt ngoài khơi (Sea Stacks) tạo hải trình hiểm nguy
  const seaStackCoords = [
    { x: -16, z: 8, h: 8, r: 2.2 },
    { x: -19, z: -7, h: 9, r: 2.5 },
    { x: 15, z: 12, h: 7.5, r: 2.0 },
    { x: 18, z: -9, h: 10, r: 2.8 },
    { x: -5, z: -18, h: 8.5, r: 2.3 },
    { x: 9, z: -17, h: 9.5, r: 2.6 },
  ];

  seaStackCoords.forEach((stack) => {
    const rock = new THREE.Mesh(new THREE.ConeGeometry(stack.r, stack.h, 5), darkBasaltMat);
    rock.position.set(stack.x, stack.h * 0.45, stack.z);
    rock.rotation.y = Math.random() * Math.PI;
    rock.rotation.z = (Math.random() - 0.5) * 0.15;
    terrainGroup.add(rock);
  });

  // Rạn san hô phát quang dưới mặt nước bao quanh đảo
  const reefGeo = new THREE.RingGeometry(16, 23, 24);
  reefGeo.rotateX(-Math.PI / 2);
  const reefMesh = new THREE.Mesh(
    reefGeo,
    new THREE.MeshBasicMaterial({
      color: '#0d9488',
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    })
  );
  reefMesh.position.y = 0.3;
  terrainGroup.add(reefMesh);

  rootGroup.add(terrainGroup);

  // =========================================================================
  // 2. THIÊN LONG CÁC (CELESTIAL DRAGON PAGODA) & CỔNG TORII
  // =========================================================================
  const architectureGroup = new THREE.Group();
  architectureGroup.position.set(1.0, 15.0, -1.0); // Ngự trên đỉnh vách đá cao nhất

  // A. Tầng 1 Pagoda
  const pagBase = new THREE.Mesh(new THREE.BoxGeometry(7, 2.5, 7), darkBasaltMat);
  architectureGroup.add(pagBase);

  const pagWalls1 = new THREE.Mesh(new THREE.BoxGeometry(5.2, 3.2, 5.2), lacqueredCrimsonMat);
  pagWalls1.position.y = 2.6;
  architectureGroup.add(pagWalls1);

  // Mái ngói cong tầng 1
  const roof1 = new THREE.Mesh(new THREE.ConeGeometry(5.2, 1.8, 4), jadeRoofMat);
  roof1.position.y = 4.8;
  roof1.rotation.y = Math.PI / 4;
  architectureGroup.add(roof1);

  // B. Tầng 2 Pagoda
  const pagWalls2 = new THREE.Mesh(new THREE.BoxGeometry(3.8, 2.8, 3.8), lacqueredCrimsonMat);
  pagWalls2.position.y = 6.8;
  architectureGroup.add(pagWalls2);

  const roof2 = new THREE.Mesh(new THREE.ConeGeometry(4.2, 1.6, 4), jadeRoofMat);
  roof2.position.y = 8.8;
  roof2.rotation.y = Math.PI / 4;
  architectureGroup.add(roof2);

  // C. Tầng 3 Pagoda (Thánh Điện Long Thần)
  const pagWalls3 = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.4, 2.6), lacqueredCrimsonMat);
  pagWalls3.position.y = 10.6;
  architectureGroup.add(pagWalls3);

  const roof3 = new THREE.Mesh(new THREE.ConeGeometry(3.2, 1.8, 4), jadeRoofMat);
  roof3.position.y = 12.2;
  roof3.rotation.y = Math.PI / 4;
  architectureGroup.add(roof3);

  // Đỉnh bảo tháp ngọc rồng & Long Châu phát sáng
  const spirePillar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.4, 3, 6), antiqueGoldMat);
  spirePillar.position.y = 14.2;
  architectureGroup.add(spirePillar);

  const dragonPearl = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 12, 12),
    new THREE.MeshStandardMaterial({
      color: '#38bdf8',
      emissive: '#0284c7',
      emissiveIntensity: 1.0,
      roughness: 0.1,
    })
  );
  dragonPearl.position.y = 15.6;
  architectureGroup.add(dragonPearl);

  rootGroup.add(architectureGroup);

  // D. Cổng Torii Thần Đạo (Sacred Torii Gate) ngự trên mỏm đá bờ biển phía nam
  const toriiGroup = new THREE.Group();
  toriiGroup.position.set(0, 9.0, 11.5);
  toriiGroup.rotation.y = -0.15;

  // 2 Cột chính
  const toriiColLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 4.5, 8), toriiRedMat);
  toriiColLeft.position.x = -1.8;
  const toriiColRight = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 4.5, 8), toriiRedMat);
  toriiColRight.position.x = 1.8;
  toriiGroup.add(toriiColLeft);
  toriiGroup.add(toriiColRight);

  // Xà ngang Kasagi (mái uốn cong)
  const toriiTopBar = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.4, 0.45), darkBasaltMat);
  toriiTopBar.position.y = 2.3;
  toriiGroup.add(toriiTopBar);

  const toriiMidBar = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.3, 0.35), toriiRedMat);
  toriiMidBar.position.y = 1.6;
  toriiGroup.add(toriiMidBar);

  // Bảng thần phù vàng giữa cổng
  const tablet = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.2), antiqueGoldMat);
  tablet.position.y = 1.95;
  toriiGroup.add(tablet);

  rootGroup.add(toriiGroup);

  // E. Chòi Canh Tuần Tra (Ninja Watchtower) phía Đông
  const watchtowerGroup = new THREE.Group();
  watchtowerGroup.position.set(12, 6.0, 4);

  const wtLegs = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.2, 5, 4), darkBasaltMat);
  wtLegs.position.y = 2.5;
  watchtowerGroup.add(wtLegs);

  const wtPlatform = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.4, 3.5), lacqueredCrimsonMat);
  wtPlatform.position.y = 5.2;
  watchtowerGroup.add(wtPlatform);

  const wtRoof = new THREE.Mesh(new THREE.ConeGeometry(2.6, 1.4, 4), jadeRoofMat);
  wtRoof.position.y = 7.0;
  wtRoof.rotation.y = Math.PI / 4;
  watchtowerGroup.add(wtRoof);

  // Đèn lồng nhẫn thuật phát quang xanh ngọc
  const lantern = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 8, 8),
    new THREE.MeshStandardMaterial({
      color: '#34d399',
      emissive: '#10b981',
      emissiveIntensity: 1.0,
    })
  );
  lantern.position.y = 5.8;
  watchtowerGroup.add(lantern);

  rootGroup.add(watchtowerGroup);

  // =========================================================================
  // 3. THÁI CỔ LONG (ANCIENT DRAGON) — DI CỐT & LONG HỒN THẦN THOẠI
  // =========================================================================
  const dragonGroup = new THREE.Group();

  // A. Di cốt Thần Long hóa đá trên vách đá Tây Bắc
  const boneCrest = new THREE.Group();
  boneCrest.position.set(-6.5, 12.0, -5.5);

  // Đầu lâu rồng
  const skullMesh = new THREE.Mesh(new THREE.ConeGeometry(1.8, 4.5, 5), dragonBoneMat);
  skullMesh.rotation.x = Math.PI / 2 + 0.2;
  skullMesh.rotation.z = -0.5;
  boneCrest.add(skullMesh);

  // Cặp sừng rồng vĩ đại
  const hornLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.45, 4.2, 6), antiqueGoldMat);
  hornLeft.position.set(-0.8, 1.8, -1.2);
  hornLeft.rotation.set(0.4, -0.2, -0.6);
  boneCrest.add(hornLeft);

  const hornRight = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.45, 4.2, 6), antiqueGoldMat);
  hornRight.position.set(0.8, 1.8, -1.2);
  hornRight.rotation.set(0.4, 0.2, 0.6);
  boneCrest.add(hornRight);

  // Mắt rồng phát sáng tinh thể tâm linh
  const dragonEye = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 8, 8),
    new THREE.MeshBasicMaterial({ color: '#22d3ee' })
  );
  dragonEye.position.set(0.5, 0.4, 1.2);
  boneCrest.add(dragonEye);

  dragonGroup.add(boneCrest);

  // B. Long Hồn Thần Thoại (Ethereal Dragon Spirit) bay lượn uốn lượn quanh chùa
  const spiritRoot = new THREE.Group();
  spiritRoot.position.set(1.0, 28.0, -1.0);

  // Tạo 10 đốt thân rồng bay theo chuỗi
  const numSegments = 10;
  for (let i = 0; i < numSegments; i++) {
    const size = i === 0 ? 1.4 : 1.2 - i * 0.08;
    const segGeo = new THREE.SphereGeometry(size, 8, 8);
    const segMesh = new THREE.Mesh(segGeo, dragonSpiritMat);
    segMesh.position.set(-i * 1.8, 0, 0);
    spiritRoot.add(segMesh);
    dragonSegments.push(segMesh);
  }

  // Đầu Rồng Thần
  const dHead = new THREE.Mesh(new THREE.ConeGeometry(1.6, 3.2, 6), dragonSpiritMat);
  dHead.rotation.z = -Math.PI / 2;
  dHead.position.set(1.4, 0, 0);
  spiritRoot.add(dHead);
  dragonSegments.unshift(dHead);

  dragonGroup.add(spiritRoot);
  rootGroup.add(dragonGroup);

  // =========================================================================
  // 4. MÀN SƯƠNG MÙ VĨNH CỬU (ETERNAL MIST VEIL) & KHIÊN NGỤY TRANG
  // =========================================================================
  const mistGroup = new THREE.Group();

  // Các đĩa sương mù xoay tròn nhiều tầng
  const mistDisc1 = new THREE.Mesh(new THREE.RingGeometry(5, 26, 28), mistMat);
  mistDisc1.rotation.x = -Math.PI / 2;
  mistDisc1.position.y = 5.5;
  mistGroup.add(mistDisc1);
  rotators.push({ obj: mistDisc1, speedY: 0.12 });

  const mistDisc2 = new THREE.Mesh(new THREE.RingGeometry(8, 32, 28), mistMat);
  mistDisc2.rotation.x = -Math.PI / 2;
  mistDisc2.position.y = 11.5;
  mistGroup.add(mistDisc2);
  rotators.push({ obj: mistDisc2, speedY: -0.09 });

  const mistDisc3 = new THREE.Mesh(new THREE.RingGeometry(3, 20, 24), mistMat);
  mistDisc3.rotation.x = -Math.PI / 2;
  mistDisc3.position.y = 18.0;
  mistGroup.add(mistDisc3);
  rotators.push({ obj: mistDisc3, speedY: 0.16 });

  // Bán cầu khiên ngụy trang ma mị (Camouflage Mirage Barrier)
  const barrierGeo = new THREE.SphereGeometry(25, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
  const barrierMesh = new THREE.Mesh(barrierGeo, barrierMat);
  barrierMesh.position.y = 0;
  mistGroup.add(barrierMesh);

  // Các cụm mây sương hình cầu dẹt lơ lửng xung quanh đảo
  const cloudPuffs: THREE.Mesh[] = [];
  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2;
    const r = 14 + Math.sin(i * 3) * 6;
    const puff = new THREE.Mesh(new THREE.SphereGeometry(4.5 + (i % 3), 8, 8), mistMat);
    puff.scale.set(1.4, 0.45, 1.2);
    puff.position.set(Math.cos(angle) * r, 6 + (i % 4) * 3, Math.sin(angle) * r);
    mistGroup.add(puff);
    cloudPuffs.push(puff);
  }

  rootGroup.add(mistGroup);

  // =========================================================================
  // 5. QUÁI VẬT BIỂN CỔ ĐẠI (ANCIENT SEA LEVIATHAN)
  // =========================================================================
  const leviathanGroup = new THREE.Group();

  // 3 Xúc tu khổng lồ nhô lên từ biển sâu ngoài khơi
  const tentacleConfigs = [
    { x: -24, z: -14, rotY: 0.8, scale: 1.2 },
    { x: 25, z: 10, rotY: -1.2, scale: 1.0 },
    { x: -10, z: 24, rotY: 2.3, scale: 1.1 },
  ];

  tentacleConfigs.forEach((cfg, idx) => {
    const tGroup = new THREE.Group();
    tGroup.position.set(cfg.x, 0, cfg.z);
    tGroup.rotation.y = cfg.rotY;

    // Đoạn thân cong ngoi lên khỏi nước
    const curveGeo = new THREE.CylinderGeometry(0.8, 1.8, 9, 8);
    const curveMesh = new THREE.Mesh(curveGeo, leviathanMat);
    curveMesh.position.y = 4.2;
    curveMesh.rotation.z = 0.35;
    tGroup.add(curveMesh);

    // Mút nhọn uốn cong
    const tipGeo = new THREE.ConeGeometry(0.8, 5, 7);
    const tipMesh = new THREE.Mesh(tipGeo, leviathanMat);
    tipMesh.position.set(1.6, 9.5, 0);
    tipMesh.rotation.z = -0.55;
    tGroup.add(tipMesh);

    // Giác hút phát quang màu tím thần bí
    for (let s = 1; s <= 4; s++) {
      const sucker = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 6), leviathanGlowMat);
      sucker.position.set(-0.6, s * 2.2, 0.3);
      tGroup.add(sucker);
    }

    tGroup.scale.setScalar(cfg.scale);
    leviathanGroup.add(tGroup);
    leviathanParts.push({ obj: tGroup, baseRotationZ: 0, phase: idx * 2.0 });
  });

  // Vây gai lưng quái thú biển nhấp nhô rình rập ở rãnh biển phía Đông Bắc
  const spineGroup = new THREE.Group();
  spineGroup.position.set(22, 0, -18);
  for (let sp = 0; sp < 4; sp++) {
    const spine = new THREE.Mesh(new THREE.ConeGeometry(0.9 - sp * 0.15, 4.5 - sp * 0.6, 4), leviathanMat);
    spine.position.set(-sp * 2.2, 1.8 - sp * 0.3, 0);
    spine.rotation.z = 0.25;
    spineGroup.add(spine);
  }
  leviathanGroup.add(spineGroup);
  leviathanParts.push({ obj: spineGroup, baseRotationZ: 0, phase: 4.5 });

  rootGroup.add(leviathanGroup);

  // =========================================================================
  // HÀM HOẠT HỌA THEO THỜI GIAN THỰC (UPDATE ANIMATION LOOP)
  // =========================================================================
  return {
    group: rootGroup,
    update: (delta: number, elapsed: number) => {
      // 1. Sương mù vĩnh cửu xoay chậm đa chiều
      rotators.forEach((r) => {
        r.obj.rotation.z += delta * r.speedY;
      });

      // Mây sương bồng bềnh nhấp nhô
      cloudPuffs.forEach((puff, idx) => {
        puff.position.y += Math.sin(elapsed * 1.5 + idx) * 0.015;
      });

      // 2. Nhịp thở của Màn Khiên Ngụy Trang (Camouflage Veil Pulse)
      barrierMat.opacity = 0.14 + Math.sin(elapsed * 1.8) * 0.08;

      // 3. Thái Cổ Long (Long Hồn Thần Thoại) bay lượn uốn lượn hình sin
      const orbitAngle = elapsed * 0.45;
      const orbitR = 12 + Math.sin(elapsed * 0.8) * 2;
      spiritRoot.position.x = 1.0 + Math.cos(orbitAngle) * orbitR;
      spiritRoot.position.z = -1.0 + Math.sin(orbitAngle) * orbitR;
      spiritRoot.position.y = 26.0 + Math.sin(elapsed * 1.2) * 2.5;
      spiritRoot.rotation.y = -orbitAngle - Math.PI / 2;

      // Hiệu ứng uốn lượn từng đốt thân rồng (Dragon undulation wave)
      for (let i = 1; i < dragonSegments.length; i++) {
        const wave = Math.sin(elapsed * 3.5 - i * 0.55) * 0.7;
        dragonSegments[i].position.z = wave;
        dragonSegments[i].position.y = Math.cos(elapsed * 3.0 - i * 0.45) * 0.35;
      }

      // 4. Quái vật biển cổ đại (Leviathan) trồi sụt, uốn lượn theo sóng ngầm
      leviathanParts.forEach((part) => {
        part.obj.position.y = Math.sin(elapsed * 1.4 + part.phase) * 0.7;
        part.obj.rotation.z = Math.sin(elapsed * 1.2 + part.phase) * 0.12;
      });
    },
  };
}
