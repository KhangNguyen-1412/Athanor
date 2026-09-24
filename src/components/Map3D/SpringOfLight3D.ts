import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface SpringOfLightSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Suối Nguồn Ánh Sáng (Spring of Light):
// Nằm sâu trong vùng trung tâm lõi của Khu Rừng Chạng Vạng (Rừng Nguyên Sinh Elborn), phía Tây của Lục địa Athanor
export const SPRING_OF_LIGHT_COORD = { x: 18.0, y: 52.5 };

/**
 * Hệ thống thiên nhiên, suối nguồn ma thuật & sinh thái 3D cho SUỐI NGUỒN ÁNH SÁNG (SPRING OF LIGHT):
 * 1. Thung lũng nước thiêng lọt thỏm giữa rễ cây cổ thụ của Thần thụ Y'bneth:
 *    - Hồ nước thiêng trong vắt phản chiếu ma thuật, bao quanh bởi các vách đá thạch anh phát quang.
 *    - Thác nước ánh sáng tuôn chảy tuần hoàn tạo bọt sóng lân tinh và các vòng sóng nước lan tỏa.
 * 2. Màn sương ánh sáng lấp lánh (Shimmering Light Mist):
 *    - Khí lưu thuần khiết đậm đặc tạo thành những làn sương ánh sáng ma thuật bồng bềnh trên mặt hồ.
 * 3. Hệ sinh thái sinh mệnh Afata:
 *    - Tinh linh bướm tiên dạ quang (Fairy Butterflies - giống Krixi): Vỗ cánh chao liệng quanh hoa mật ma thuật.
 *    - Thần hộ mệnh bán nhân thú (Payna & Helen): Chú nai thần thánh với cặp sừng hoa nở và hào quang chữa lành xanh ngọc lục bảo.
 *    - Đóa hoa linh thảo dược khổng lồ nở rộ tỏa bụi sáng mật hoa.
 */
export function createSpringOfLight3D(): SpringOfLightSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(SPRING_OF_LIGHT_COORD.x, SPRING_OF_LIGHT_COORD.y, 11.5);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // BẢNG VẬT LIỆU THẦN TIÊN AFATA (AFATA FAIRY & LUMINESCENT PALETTE)
  // =========================================================================
  // Nước suối nguồn tinh khiết trong vắt
  const sacredWaterMat = new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#0284c7',
    emissiveIntensity: 0.6,
    roughness: 0.08,
    metalness: 0.6,
    transparent: true,
    opacity: 0.88,
  });

  // Vách đá thạch anh phát quang (Luminescent Quartz)
  const quartzCrystalMat = new THREE.MeshStandardMaterial({
    color: '#e0e7ff',
    emissive: '#67e8f9',
    emissiveIntensity: 0.75,
    roughness: 0.25,
    metalness: 0.35,
    transparent: true,
    opacity: 0.92,
  });

  // Rễ cây cổ thụ Y'bneth
  const ancientWoodMat = new THREE.MeshStandardMaterial({
    color: '#1c1917',
    roughness: 0.9,
    metalness: 0.05,
  });

  const mossyRootMat = new THREE.MeshStandardMaterial({
    color: '#15803d',
    roughness: 0.8,
  });

  // Màn sương ánh sáng
  const mistAuraMat = new THREE.MeshBasicMaterial({
    color: '#67e8f9',
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  // Bướm tiên Krixi
  const fairyWingMat = new THREE.MeshStandardMaterial({
    color: '#f472b6',
    emissive: '#ec4899',
    emissiveIntensity: 0.8,
    roughness: 0.2,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
  });

  // Thần hộ mệnh Payna / Helen
  const guardianPeltMat = new THREE.MeshStandardMaterial({
    color: '#fef08a',
    emissive: '#eab308',
    emissiveIntensity: 0.5,
    roughness: 0.4,
  });

  const healingAuraMat = new THREE.MeshBasicMaterial({
    color: '#34d399',
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  // =========================================================================
  // 1. THUNG LŨNG NƯỚC THIÊNG & VÁCH ĐÁ THẠCH ANH PHÁT QUANG
  // =========================================================================
  const valleyGroup = new THREE.Group();

  // Đáy thung lũng đá rêu phong
  const valleyBaseGeo = new THREE.CylinderGeometry(18, 20, 3.5, 24);
  const valleyBase = new THREE.Mesh(valleyBaseGeo, mossyRootMat);
  valleyBase.position.y = 1.5;
  valleyGroup.add(valleyBase);

  // Hồ Nước Thiêng Trong Vắt (Sacred Pool)
  const poolGeo = new THREE.CylinderGeometry(12, 13, 1.2, 32);
  const poolMesh = new THREE.Mesh(poolGeo, sacredWaterMat);
  poolMesh.position.y = 3.0;
  valleyGroup.add(poolMesh);

  // Các vách đá thạch anh phát quang bao quanh thung lũng
  const quartzCoords = [
    { x: -11, z: -6, h: 9, r: 2.2 },
    { x: -13, z: 4, h: 7, r: 1.8 },
    { x: 10, z: -8, h: 10, r: 2.4 },
    { x: 12, z: 5, h: 8, r: 2.0 },
    { x: 0, z: -12, h: 11, r: 2.6 }, // Vách đá thượng nguồn thác nước
    { x: -4, z: 12, h: 6, r: 1.6 },
    { x: 5, z: 12, h: 6.5, r: 1.7 },
  ];

  for (const qc of quartzCoords) {
    const qGeo = new THREE.ConeGeometry(qc.r, qc.h, 6);
    const qMesh = new THREE.Mesh(qGeo, quartzCrystalMat);
    qMesh.position.set(qc.x, qc.h / 2 + 2, qc.z);
    valleyGroup.add(qMesh);
  }

  // Thác nước ánh sáng thượng nguồn đổ xuống hồ
  const waterfallGeo = new THREE.PlaneGeometry(3.5, 8.5);
  const waterfallMat = new THREE.MeshStandardMaterial({
    color: '#67e8f9',
    emissive: '#38bdf8',
    emissiveIntensity: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide,
  });
  const waterfall = new THREE.Mesh(waterfallGeo, waterfallMat);
  waterfall.position.set(0, 6.5, -9.5);
  waterfall.rotateX(Math.PI / 12);
  valleyGroup.add(waterfall);

  // Vòng sóng nước phát quang lan tỏa (Expanding Ripples)
  const rippleGeo = new THREE.RingGeometry(2.0, 3.4, 32);
  rippleGeo.rotateX(-Math.PI / 2);
  const rippleMesh = new THREE.Mesh(rippleGeo, healingAuraMat);
  rippleMesh.position.set(0, 3.65, -6.5);
  valleyGroup.add(rippleMesh);

  rootGroup.add(valleyGroup);

  // =========================================================================
  // 2. RỄ CÂY CỔ THỤ KHỔNG LỒ CỦA THẦN THỤ Y'BNETH & HOA LINH KHỔNG LỒ
  // =========================================================================
  const rootsGroup = new THREE.Group();

  // 4 Đại rễ cây uốn lượn ôm trọn lấy hồ nước
  const rootAngles = [Math.PI / 4, (Math.PI * 3) / 4, (Math.PI * 5) / 4, (Math.PI * 7) / 4];
  for (const rAngle of rootAngles) {
    const rootGeo = new THREE.TorusGeometry(11, 1.2, 8, 24, Math.PI / 2);
    rootGeo.rotateX(Math.PI / 2.5);
    const rootMesh = new THREE.Mesh(rootGeo, ancientWoodMat);
    rootMesh.position.set(Math.cos(rAngle) * 6, 2.5, Math.sin(rAngle) * 6);
    rootMesh.rotation.y = rAngle;
    rootsGroup.add(rootMesh);
  }

  // Đóa hoa rừng linh thảo khổng lồ nở rộ trên bờ suối (Giant Spirit Blossom)
  const flowerGroup = new THREE.Group();
  flowerGroup.position.set(7.5, 3.5, -3.5);

  const flowerCoreGeo = new THREE.SphereGeometry(0.8, 12, 12);
  const flowerCore = new THREE.Mesh(
    flowerCoreGeo,
    new THREE.MeshStandardMaterial({
      color: '#fde047',
      emissive: '#eab308',
      emissiveIntensity: 0.9,
    })
  );
  flowerCore.position.y = 1.0;
  flowerGroup.add(flowerCore);

  // 6 Cánh hoa ngọc bích xòe rộng
  for (let p = 0; p < 6; p++) {
    const petalAngle = (p / 6) * Math.PI * 2;
    const petalGeo = new THREE.ConeGeometry(0.7, 2.2, 4);
    const petal = new THREE.Mesh(petalGeo, fairyWingMat);
    petal.position.set(
      Math.cos(petalAngle) * 1.4,
      0.9,
      Math.sin(petalAngle) * 1.4
    );
    petal.rotation.z = Math.cos(petalAngle) * (Math.PI / 3.5);
    petal.rotation.x = Math.sin(petalAngle) * (Math.PI / 3.5);
    flowerGroup.add(petal);
  }
  rootsGroup.add(flowerGroup);

  rootGroup.add(rootsGroup);

  // =========================================================================
  // 3. MÀN SƯƠNG ÁNH SÁNG LẤP LÁNH (SHIMMERING LIGHT MIST)
  // =========================================================================
  const mistDiscs: THREE.Mesh[] = [];
  for (let m = 0; m < 3; m++) {
    const mistGeo = new THREE.RingGeometry(3 + m * 2.5, 7 + m * 2.5, 32);
    mistGeo.rotateX(-Math.PI / 2);
    const mistMesh = new THREE.Mesh(mistGeo, mistAuraMat);
    mistMesh.position.set(0, 4.0 + m * 0.4, 0);
    rootGroup.add(mistMesh);
    mistDiscs.push(mistMesh);
  }

  // =========================================================================
  // 4. THẦN HỘ MỆNH BÁN NHÂN THÚ (PAYNA & HELEN'S GUARDIAN CERVID)
  // =========================================================================
  // Chú nai thần thánh hộ mệnh đứng bên bờ suối chữa lành muông thú
  const guardianGroup = new THREE.Group();
  guardianGroup.position.set(-5.5, 3.2, 4.5);

  // Thân nai thần thánh
  const cervidBodyGeo = new THREE.BoxGeometry(1.1, 1.2, 2.2);
  const cervidBody = new THREE.Mesh(cervidBodyGeo, guardianPeltMat);
  cervidBody.position.y = 1.6;
  guardianGroup.add(cervidBody);

  // Cổ nai thanh thoát
  const cervidNeck = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1.5, 0.6),
    guardianPeltMat
  );
  cervidNeck.position.set(0, 2.6, 0.8);
  cervidNeck.rotateX(-Math.PI / 8);
  guardianGroup.add(cervidNeck);

  // Đầu nai
  const cervidHeadGroup = new THREE.Group();
  cervidHeadGroup.position.set(0, 3.4, 1.2);

  const cHead = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.55, 0.9),
    guardianPeltMat
  );
  cHead.position.set(0, 0, 0.2);
  cervidHeadGroup.add(cHead);

  // Cặp sừng hoa nở thần thánh (Blooming Antlers of Payna)
  for (let s = -1; s <= 1; s += 2) {
    const antlerBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.1, 1.8, 6),
      quartzCrystalMat
    );
    antlerBase.position.set(s * 0.4, 0.9, -0.1);
    antlerBase.rotation.z = s * (Math.PI / 4);
    antlerBase.rotation.x = -Math.PI / 8;

    const antlerBranch = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.06, 1.0, 6),
      quartzCrystalMat
    );
    antlerBranch.position.set(s * 0.6, 1.3, 0.1);
    antlerBranch.rotation.z = s * (Math.PI / 2.5);

    cervidHeadGroup.add(antlerBase, antlerBranch);
  }
  guardianGroup.add(cervidHeadGroup);

  // 4 Chân nai
  for (let gx = -0.35; gx <= 0.35; gx += 0.7) {
    for (let gz = -0.7; gz <= 0.7; gz += 1.4) {
      const gLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.08, 1.6, 6),
        guardianPeltMat
      );
      gLeg.position.set(gx, 0.8, gz);
      guardianGroup.add(gLeg);
    }
  }

  // Vòng hào quang chữa lành sinh mệnh (Healing Aura Wave)
  const healWaveGeo = new THREE.RingGeometry(1.5, 3.2, 24);
  healWaveGeo.rotateX(-Math.PI / 2);
  const healWave = new THREE.Mesh(healWaveGeo, healingAuraMat);
  healWave.position.y = 0.1;
  guardianGroup.add(healWave);

  rootGroup.add(guardianGroup);

  // =========================================================================
  // 5. TINH LINH BƯỚM TIÊN DẠ QUANG (FAIRY BUTTERFLIES - GIỐNG KRIXI)
  // =========================================================================
  interface FairyButterfly {
    group: THREE.Group;
    wingL: THREE.Mesh;
    wingR: THREE.Mesh;
    baseRadius: number;
    orbitSpeed: number;
    heightOffset: number;
    phase: number;
  }
  const butterflies: FairyButterfly[] = [];

  const butterflyWings = ['#f472b6', '#38bdf8', '#34d399', '#fef08a'];

  for (let b = 0; b < 4; b++) {
    const bGroup = new THREE.Group();

    // Thân bướm nhỏ xinh
    const bBodyGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.6, 6);
    const bBody = new THREE.Mesh(
      bBodyGeo,
      new THREE.MeshBasicMaterial({ color: '#ffffff' })
    );
    bBody.rotateX(Math.PI / 2);
    bGroup.add(bBody);

    // Đôi cánh bướm tiên dạ quang
    const bWingMat = new THREE.MeshStandardMaterial({
      color: butterflyWings[b % butterflyWings.length],
      emissive: butterflyWings[b % butterflyWings.length],
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });

    const bWingGeo = new THREE.PlaneGeometry(0.7, 0.45);
    const wingL = new THREE.Mesh(bWingGeo, bWingMat);
    wingL.position.set(-0.35, 0, 0);
    wingL.rotateX(Math.PI / 2);

    const wingR = new THREE.Mesh(bWingGeo, bWingMat);
    wingR.position.set(0.35, 0, 0);
    wingR.rotateX(Math.PI / 2);

    bGroup.add(wingL, wingR);
    rootGroup.add(bGroup);

    butterflies.push({
      group: bGroup,
      wingL,
      wingR,
      baseRadius: 4.5 + b * 1.8,
      orbitSpeed: 0.9 + b * 0.3,
      heightOffset: 4.5 + b * 0.8,
      phase: (b * Math.PI) / 2,
    });
  }

  // =========================================================================
  // 6. BỤI SÁNG MẬT HOA MA THUẬT LƠ LỬNG (POLLEN SPARKLES)
  // =========================================================================
  const sparkles: THREE.Mesh[] = [];
  for (let sp = 0; sp < 8; sp++) {
    const spGeo = new THREE.SphereGeometry(0.16, 6, 6);
    const spMat = new THREE.MeshBasicMaterial({
      color: sp % 2 === 0 ? '#67e8f9' : '#fef08a',
      blending: THREE.AdditiveBlending,
    });
    const spMesh = new THREE.Mesh(spGeo, spMat);
    rootGroup.add(spMesh);
    sparkles.push(spMesh);
  }

  // =========================================================================
  // ANIMATION UPDATE LOOP (60 FPS)
  // =========================================================================
  return {
    group: rootGroup,
    update: (_delta: number, elapsed: number) => {
      // 1. Màn sương ánh sáng lấp lánh xoay nhẹ và bồng bềnh
      mistDiscs.forEach((md, idx) => {
        md.rotation.z += 0.004 * (idx % 2 === 0 ? 1 : -1);
        md.position.y = 4.0 + idx * 0.4 + Math.sin(elapsed * 1.5 + idx) * 0.15;
      });

      // 2. Vòng sóng nước phát quang mở rộng
      const ripT = (elapsed * 1.2) % 1;
      rippleMesh.scale.setScalar(1.0 + ripT * 2.2);
      (rippleMesh.material as THREE.MeshBasicMaterial).opacity = 0.5 * (1 - ripT);

      // 3. Hào quang chữa lành của thần hộ mệnh phát xung
      const healPulse = 1.0 + Math.sin(elapsed * 2.2) * 0.2;
      healWave.scale.setScalar(healPulse);

      // Thần hộ mệnh gật gù
      cervidHeadGroup.rotation.x = Math.sin(elapsed * 1.4) * 0.08;

      // 4. Bướm tiên Krixi vỗ cánh và bay lượn
      for (const b of butterflies) {
        const bAngle = elapsed * b.orbitSpeed + b.phase;
        b.group.position.set(
          Math.cos(bAngle) * b.baseRadius,
          b.heightOffset + Math.sin(elapsed * 2.5 + b.phase) * 0.8,
          Math.sin(bAngle) * b.baseRadius
        );
        b.group.rotation.y = -bAngle + Math.PI / 2;

        const flap = Math.sin(elapsed * 14.0 + b.phase) * 0.6;
        b.wingL.rotation.y = flap;
        b.wingR.rotation.y = -flap;
      }

      // 5. Bụi sáng mật hoa lơ lửng bồng bềnh
      sparkles.forEach((sp, idx) => {
        const sAngle = elapsed * 0.5 + idx;
        const sRad = 3.5 + Math.sin(elapsed * 1.2 + idx) * 2.5;
        sp.position.set(
          Math.cos(sAngle) * sRad,
          4.0 + Math.sin(elapsed * 1.8 + idx * 1.5) * 1.8,
          Math.sin(sAngle) * sRad
        );
      });
    },
  };
}
