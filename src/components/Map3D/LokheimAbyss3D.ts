import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface LokheimAbyssSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Vực Hỗn Mang (The Abyss / Lokheim):
// Tọa lạc tại phía Đông / Đông Nam (vùng ranh giới phía sau Màn Phép Thuật Carano), kéo dài tiếp giáp biên giới Norman
export const LOKHEIM_ABYSS_COORD = { x: 92.5, y: 69.5 };

/**
 * Hệ thống kiến trúc, khe nứt nham thạch & sinh thái 3D cho VỰC HỖN MANG (THE ABYSS / LOKHEIM):
 * 1. Địa thế lòng đất đen tối & Khe nứt nham thạch nóng chảy:
 *    - Các vách đá hắc diện thạch đen xì lởm chởm, rạn nứt sâu hoắm.
 *    - Dòng sông nham thạch nóng chảy đỏ cam rực lửa cuộn trào dưới khe nứt.
 *    - Vũng đầm lầy độc tố và hơi thở lưu huỳnh xanh tím u ám.
 * 2. Ngai Vàng Hắc Ám Của Chúa Tể Volkath:
 *    - Ngai vàng khổng lồ bằng xương quỷ và đá hắc diện thạch với đôi sừng ác quỷ vươn cao.
 *    - Lõi Hắc Ám Vĩnh Cửu (Eternal Dark Core) phát xung năng lượng đỏ thẫm rực lửa.
 * 3. Pháo đài quỷ dữ & Tháp gai ma quái của Ma Vương Maloch:
 *    - Các cột tháp gai nhọn (Demon Spires) và Lưỡi Kiếm Quỷ Lửa khổng lồ.
 * 4. Hệ sinh thái sinh vật tà ác nổi tiếng:
 *    - Trùng Quỷ Khổng Lồ (Insects of the Abyss - Dòng tộc Kriknak): Bọ sừng bọc giáp thép độc tố.
 *    - Chiến Mã Ma Quỷ Dạ Yểm Của Volkath: Ngựa ác mộng với bờm đuôi rực lửa dung nham.
 *    - Vòng xoáy Linh Hồn Oán Hận (Vengeful Wraiths): Các linh hồn sa đọa bay lượn rên xiết.
 *    - Miệng Vực Quỷ Đói (Grakk's Abyssal Maw): Hố xoáy hư không nuốt chửng linh hồn.
 */
export function createLokheimAbyss3D(): LokheimAbyssSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(LOKHEIM_ABYSS_COORD.x, LOKHEIM_ABYSS_COORD.y, 16.0);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // BẢNG VẬT LIỆU CAO CẤP (LOKHEIM DARK & MOLTEN PALETTE)
  // =========================================================================
  // Đá hắc diện thạch đen tuyền
  const obsidianMat = new THREE.MeshStandardMaterial({
    color: '#09090b',
    roughness: 0.9,
    metalness: 0.35,
  });

  const darkCragMat = new THREE.MeshStandardMaterial({
    color: '#18181b',
    roughness: 0.95,
    metalness: 0.15,
  });

  // Nham thạch nóng chảy rực lửa (Molten Lava)
  const moltenLavaMat = new THREE.MeshStandardMaterial({
    color: '#f97316',
    emissive: '#ef4444',
    emissiveIntensity: 1.8,
    roughness: 0.2,
  });

  const lavaGlowMat = new THREE.MeshBasicMaterial({
    color: '#dc2626',
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
  });

  // Đầm lầy độc tố xanh tím (Toxic Slime)
  const toxicSlimeMat = new THREE.MeshStandardMaterial({
    color: '#22c55e',
    emissive: '#15803d',
    emissiveIntensity: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.85,
  });

  // Lõi Hắc Ám Volkath
  const volkathCoreMat = new THREE.MeshStandardMaterial({
    color: '#dc2626',
    emissive: '#7f1d1d',
    emissiveIntensity: 2.2,
    roughness: 0.15,
  });

  // Giáp gai quỷ dữ đỏ đen
  const demonHornMat = new THREE.MeshStandardMaterial({
    color: '#450a0a',
    roughness: 0.4,
    metalness: 0.6,
  });

  // Trùng quỷ Kriknak
  const kriknakChitinMat = new THREE.MeshStandardMaterial({
    color: '#3b0764',
    roughness: 0.3,
    metalness: 0.7,
  });

  const kriknakGlowMat = new THREE.MeshBasicMaterial({
    color: '#4ade80',
  });

  // Chiến mã lửa Volkath
  const nightmareBodyMat = new THREE.MeshStandardMaterial({
    color: '#1c1917',
    roughness: 0.75,
    metalness: 0.3,
  });

  const fireManeMat = new THREE.MeshStandardMaterial({
    color: '#f97316',
    emissive: '#ef4444',
    emissiveIntensity: 1.6,
    roughness: 0.2,
  });

  // =========================================================================
  // 1. KHE NỨT ĐỊA CHẤT & DÒNG NHAM THẠCH NÓNG CHẢY (MOLTEN CRACKS)
  // =========================================================================
  const chasmGroup = new THREE.Group();

  // Nền đá hắc diện thạch nứt nẻ
  const groundBaseGeo = new THREE.CylinderGeometry(24, 26, 4, 16);
  const groundBase = new THREE.Mesh(groundBaseGeo, darkCragMat);
  groundBase.position.y = 1.8;
  chasmGroup.add(groundBase);

  // Vũng dung nham trung tâm rực lửa
  const lavaPoolGeo = new THREE.CylinderGeometry(14, 15, 1.2, 24);
  const lavaPool = new THREE.Mesh(lavaPoolGeo, moltenLavaMat);
  lavaPool.position.y = 3.6;
  chasmGroup.add(lavaPool);

  // Ánh sáng phát quang rực đỏ của dung nham
  const lavaAuraGeo = new THREE.RingGeometry(11, 16, 24);
  lavaAuraGeo.rotateX(-Math.PI / 2);
  const lavaAura = new THREE.Mesh(lavaAuraGeo, lavaGlowMat);
  lavaAura.position.y = 4.3;
  chasmGroup.add(lavaAura);

  // Các vệt khe nứt nham thạch hình nhánh cây (Lava Fractures)
  const crackAngles = [0, (Math.PI * 2) / 5, (Math.PI * 4) / 5, (Math.PI * 6) / 5, (Math.PI * 8) / 5];
  for (const cAngle of crackAngles) {
    const crackGeo = new THREE.BoxGeometry(1.2, 0.4, 16);
    const crack = new THREE.Mesh(crackGeo, moltenLavaMat);
    crack.position.set(Math.cos(cAngle) * 12, 3.8, Math.sin(cAngle) * 12);
    crack.rotation.y = -cAngle + Math.PI / 2;
    chasmGroup.add(crack);
  }

  // Các khối đá gai nhọn mọc lởm chởm quanh vực (Obsidian Spikes)
  const spikeCoords = [
    { x: -16, z: -8, h: 14, r: 2.2 },
    { x: -18, z: 8, h: 18, r: 2.5 },
    { x: 16, z: -10, h: 16, r: 2.4 },
    { x: 18, z: 7, h: 13, r: 2.0 },
    { x: -7, z: -18, h: 15, r: 2.2 },
    { x: 8, z: -17, h: 17, r: 2.6 },
  ];

  for (const sc of spikeCoords) {
    const spikeGeo = new THREE.ConeGeometry(sc.r, sc.h, 6);
    const spike = new THREE.Mesh(spikeGeo, obsidianMat);
    spike.position.set(sc.x, sc.h / 2 + 2, sc.z);
    chasmGroup.add(spike);

    // Mạch nham thạch đỏ rực chạy dọc thân đá gai
    const veinGeo = new THREE.BoxGeometry(0.35, sc.h * 0.75, 0.35);
    const vein = new THREE.Mesh(veinGeo, moltenLavaMat);
    vein.position.set(sc.x, sc.h / 2 + 2, sc.z + sc.r * 0.7);
    chasmGroup.add(vein);
  }

  // Đầm lầy độc tố màu xanh lục ở góc Nam
  const toxicPuddleGeo = new THREE.CylinderGeometry(5.5, 6.0, 0.8, 16);
  const toxicPuddle = new THREE.Mesh(toxicPuddleGeo, toxicSlimeMat);
  toxicPuddle.position.set(-9, 3.7, 12);
  chasmGroup.add(toxicPuddle);

  rootGroup.add(chasmGroup);

  // =========================================================================
  // 2. NGAI VÀNG HẮC ÁM CỦA CHÚA TỂ VOLKATH (THE DARK THRONE)
  // =========================================================================
  const throneGroup = new THREE.Group();
  throneGroup.position.set(0, 4.0, -6);

  // Bệ ngai vàng nhiều tầng bằng đá đen
  const podiumGeo = new THREE.BoxGeometry(10, 4.0, 8);
  const podium = new THREE.Mesh(podiumGeo, obsidianMat);
  podium.position.y = 2.0;
  throneGroup.add(podium);

  // Lưng ngai vàng vươn cao
  const throneBackGeo = new THREE.BoxGeometry(6.5, 9.0, 2.2);
  const throneBack = new THREE.Mesh(throneBackGeo, darkCragMat);
  throneBack.position.set(0, 8.5, -2.5);
  throneGroup.add(throneBack);

  // ĐÔI SỪNG ÁC QUỶ KHỔNG LỒ CỦA VOLKATH VƯƠN VÚT LÊN TRỜI
  for (let side = -1; side <= 1; side += 2) {
    const hornBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 1.2, 7, 8),
      demonHornMat
    );
    hornBase.position.set(side * 3.8, 13, -2.5);
    hornBase.rotation.z = side * (Math.PI / 6);
    hornBase.rotation.x = -Math.PI / 10;

    const hornTip = new THREE.Mesh(
      new THREE.ConeGeometry(0.6, 6, 8),
      demonHornMat
    );
    hornTip.position.set(side * 5.8, 18, -3.2);
    hornTip.rotation.z = side * (Math.PI / 4);

    throneGroup.add(hornBase, hornTip);
  }

  // LÕI HẮC ÁM VĨNH CỬU CỦA VOLKATH (ETERNAL DARK CORE)
  const volkathCoreGeo = new THREE.SphereGeometry(2.2, 24, 24);
  const volkathCore = new THREE.Mesh(volkathCoreGeo, volkathCoreMat);
  volkathCore.position.set(0, 11, -0.8);
  throneGroup.add(volkathCore);

  // Vành đai ma năng hắc ám xoay quanh quả cầu
  const shadowRingGeo = new THREE.TorusGeometry(3.5, 0.2, 8, 32);
  const shadowRing = new THREE.Mesh(shadowRingGeo, moltenLavaMat);
  shadowRing.position.set(0, 11, -0.8);
  throneGroup.add(shadowRing);

  rootGroup.add(throneGroup);

  // =========================================================================
  // 3. KIẾM QUỶ LỬA CỦA MA VƯƠNG MALOCH (MALOCH'S HELLSWORD)
  // =========================================================================
  const malochGroup = new THREE.Group();
  malochGroup.position.set(6.5, 4.0, 4.5);

  // Tảng đá nham thạch cắm kiếm
  const swordAltarGeo = new THREE.DodecahedronGeometry(1.6);
  const swordAltar = new THREE.Mesh(swordAltarGeo, darkCragMat);
  swordAltar.position.y = 1.0;
  malochGroup.add(swordAltar);

  // Thanh đại kiếm quỷ lửa khổng lồ
  const hellBladeGeo = new THREE.BoxGeometry(0.6, 6.5, 0.15);
  const hellBlade = new THREE.Mesh(hellBladeGeo, moltenLavaMat);
  hellBlade.position.y = 4.2;

  const hellCrossguardGeo = new THREE.BoxGeometry(2.6, 0.4, 0.4);
  const hellCrossguard = new THREE.Mesh(hellCrossguardGeo, demonHornMat);
  hellCrossguard.position.y = 7.0;

  const hellHiltGeo = new THREE.CylinderGeometry(0.18, 0.18, 1.8, 8);
  const hellHilt = new THREE.Mesh(hellHiltGeo, obsidianMat);
  hellHilt.position.y = 8.0;

  malochGroup.add(hellBlade, hellCrossguard, hellHilt);
  rootGroup.add(malochGroup);

  // =========================================================================
  // 4. TRÙNG QUỶ KHỔNG LỒ (INSECT OF THE ABYSS - DÒNG TỘC KRIKNAK)
  // =========================================================================
  // Bọ cánh cứng khổng lồ mang lớp giáp sừng cứng như thép và nọc độc chết người
  const beetleGroup = new THREE.Group();
  beetleGroup.position.set(-8.5, 4.2, 5.0);

  // Thân bọ tròn dẹt bọc giáp thép tím đen
  const beetleBodyGeo = new THREE.SphereGeometry(1.6, 16, 12);
  beetleBodyGeo.scale(1.2, 0.65, 1.5);
  const beetleBody = new THREE.Mesh(beetleBodyGeo, kriknakChitinMat);
  beetleBody.position.y = 1.0;
  beetleGroup.add(beetleBody);

  // Cặp sừng kẹp độc nhọn hoắt phía trước
  const hornL = new THREE.Mesh(new THREE.ConeGeometry(0.2, 2.2, 6), demonHornMat);
  hornL.position.set(-0.6, 1.0, 2.2);
  hornL.rotateX(Math.PI / 2.2);
  hornL.rotateZ(-Math.PI / 8);

  const hornR = new THREE.Mesh(new THREE.ConeGeometry(0.2, 2.2, 6), demonHornMat);
  hornR.position.set(0.6, 1.0, 2.2);
  hornR.rotateX(Math.PI / 2.2);
  hornR.rotateZ(Math.PI / 8);
  beetleGroup.add(hornL, hornR);

  // Đôi mắt độc tố phát quang xanh lục
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), kriknakGlowMat);
  eyeL.position.set(-0.45, 1.3, 1.6);
  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), kriknakGlowMat);
  eyeR.position.set(0.45, 1.3, 1.6);
  beetleGroup.add(eyeL, eyeR);

  // 6 Chân gai bọ cắm xuống đất
  for (let s = -1; s <= 1; s += 2) {
    for (let bz = -0.8; bz <= 0.8; bz += 0.8) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.12, 1.8, 6),
        obsidianMat
      );
      leg.position.set(s * 1.8, 0.6, bz);
      leg.rotation.z = s * (Math.PI / 3);
      beetleGroup.add(leg);
    }
  }

  // Cánh bọ cứng khẽ rung
  const beetleWingGeo = new THREE.PlaneGeometry(1.6, 2.6);
  const leftWing = new THREE.Mesh(beetleWingGeo, kriknakChitinMat);
  leftWing.position.set(-0.8, 1.4, -0.2);
  leftWing.rotateX(Math.PI / 2);

  const rightWing = new THREE.Mesh(beetleWingGeo, kriknakChitinMat);
  rightWing.position.set(0.8, 1.4, -0.2);
  rightWing.rotateX(Math.PI / 2);
  beetleGroup.add(leftWing, rightWing);

  rootGroup.add(beetleGroup);

  // =========================================================================
  // 5. CHIẾN MÃ MA QUỶ DẠ YỂM CỦA VOLKATH (NIGHTMARE FLAME STEED)
  // =========================================================================
  // Con tuấn mã ác mộng của Volkath đứng canh bên ngai vàng
  const steedGroup = new THREE.Group();
  steedGroup.position.set(-4.8, 4.0, -3.5);

  // Thân ngựa bóng tối
  const steedBodyGeo = new THREE.BoxGeometry(1.4, 1.3, 2.8);
  const steedBody = new THREE.Mesh(steedBodyGeo, nightmareBodyMat);
  steedBody.position.y = 1.9;
  steedGroup.add(steedBody);

  // Bờm lửa rực cháy đỏ cam
  const maneGeo = new THREE.BoxGeometry(0.3, 1.8, 1.2);
  const mane = new THREE.Mesh(maneGeo, fireManeMat);
  mane.position.set(0, 3.2, 0.6);
  mane.rotateX(-Math.PI / 6);
  steedGroup.add(mane);

  // Cổ ngựa
  const steedNeck = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 1.6, 0.9),
    nightmareBodyMat
  );
  steedNeck.position.set(0, 2.9, 1.0);
  steedNeck.rotateX(-Math.PI / 6);
  steedGroup.add(steedNeck);

  // Đầu ngựa bóng tối với đôi mắt rực lửa
  const steedHeadGroup = new THREE.Group();
  steedHeadGroup.position.set(0, 3.8, 1.5);

  const sHead = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.75, 1.3),
    nightmareBodyMat
  );
  sHead.position.set(0, 0, 0.3);
  steedHeadGroup.add(sHead);

  // 2 Đốm mắt rực lửa
  const sEyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), fireManeMat);
  sEyeL.position.set(-0.36, 0.15, 0.5);
  const sEyeR = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), fireManeMat);
  sEyeR.position.set(0.36, 0.15, 0.5);
  steedHeadGroup.add(sEyeL, sEyeR);

  steedGroup.add(steedHeadGroup);

  // 4 Chân ngựa với móng rực lửa
  for (let sx = -0.5; sx <= 0.5; sx += 1.0) {
    for (let sz = -0.9; sz <= 0.9; sz += 1.8) {
      const sLeg = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 1.6, 0.35),
        nightmareBodyMat
      );
      sLeg.position.set(sx, 0.8, sz);

      const hoof = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.3, 0.38),
        fireManeMat
      );
      hoof.position.set(sx, 0.15, sz);

      steedGroup.add(sLeg, hoof);
    }
  }

  // Đuôi lửa bập bùng
  const steedTail = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.3, 1.6, 6),
    fireManeMat
  );
  steedTail.position.set(0, 1.8, -1.6);
  steedTail.rotateX(Math.PI / 5);
  steedGroup.add(steedTail);

  rootGroup.add(steedGroup);

  // =========================================================================
  // 6. VÒNG XOÁY LINH HỒN OÁN HẬN & MIỆNG VỰC QUỶ ĐÓI (GRAKK'S ABYSSAL MAW)
  // =========================================================================
  // Miệng vực xoáy hút linh hồn ở trung tâm (Grakk's Soul Maw)
  const mawGeo = new THREE.RingGeometry(1.2, 5.0, 32);
  mawGeo.rotateX(-Math.PI / 2);
  const mawMat = new THREE.MeshBasicMaterial({
    color: '#7e22ce',
    transparent: true,
    opacity: 0.75,
    side: THREE.DoubleSide,
  });
  const soulMaw = new THREE.Mesh(mawGeo, mawMat);
  soulMaw.position.set(0, 3.85, 3.5);
  rootGroup.add(soulMaw);

  // Các linh hồn oán hận bán trong suốt lượn vòng
  interface Wraith {
    mesh: THREE.Mesh;
    baseRadius: number;
    orbitSpeed: number;
    yBase: number;
    phase: number;
  }
  const wraiths: Wraith[] = [];

  for (let w = 0; w < 7; w++) {
    const wraithGeo = new THREE.SphereGeometry(0.45, 8, 8);
    wraithGeo.scale(0.8, 1.6, 0.8);
    const wraithMat = new THREE.MeshBasicMaterial({
      color: w % 2 === 0 ? '#c084fc' : '#dc2626',
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const wraithMesh = new THREE.Mesh(wraithGeo, wraithMat);
    rootGroup.add(wraithMesh);

    wraiths.push({
      mesh: wraithMesh,
      baseRadius: 6.5 + (w % 3) * 3,
      orbitSpeed: 0.8 + (w % 2) * 0.4,
      yBase: 7 + (w % 4) * 2.5,
      phase: (w * Math.PI * 2) / 7,
    });
  }

  // =========================================================================
  // ANIMATION UPDATE LOOP (60 FPS)
  // =========================================================================
  return {
    group: rootGroup,
    update: (_delta: number, elapsed: number) => {
      // 1. Quả cầu Hắc Ám Volkath phát xung năng lượng & Vành đai xoay
      const corePulse = 1.0 + Math.sin(elapsed * 2.5) * 0.12;
      volkathCore.scale.set(corePulse, corePulse, corePulse);
      shadowRing.rotation.z += 0.02;
      shadowRing.rotation.x += 0.015;

      // 2. Miệng vực Grakk xoay hút linh hồn
      soulMaw.rotation.z += 0.018;

      // 3. Linh hồn oán hận xoay quanh vực thẳm
      for (const wr of wraiths) {
        const wAngle = elapsed * wr.orbitSpeed + wr.phase;
        const wRadius = wr.baseRadius + Math.sin(elapsed * 2.0 + wr.phase) * 1.5;
        wr.mesh.position.set(
          Math.cos(wAngle) * wRadius,
          wr.yBase + Math.sin(elapsed * 3.0 + wr.phase) * 1.2,
          Math.sin(wAngle) * wRadius + 1.0
        );
      }

      // 4. Trùng quỷ Kriknak rung cánh và nhấp nhô
      beetleGroup.position.y = 4.2 + Math.sin(elapsed * 2.2) * 0.15;
      const wingRumble = Math.sin(elapsed * 12.0) * 0.18;
      leftWing.rotation.z = wingRumble;
      rightWing.rotation.z = -wingRumble;

      // 5. Chiến mã lửa Volkath vung đầu và đuôi lửa bập bùng
      steedHeadGroup.rotation.x = Math.sin(elapsed * 1.8) * 0.12;
      steedTail.rotation.z = Math.sin(elapsed * 3.5) * 0.18;

      // 6. Sóng nhiệt nham thạch nhấp nháy phát quang
      lavaAura.scale.setScalar(1.0 + Math.sin(elapsed * 2.0) * 0.08);
    },
  };
}
