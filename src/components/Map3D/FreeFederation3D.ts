import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface FreeFederationSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Tân Liên Hiệp (The Free Federation / Steel City):
// Tọa lạc ở phía Đông Nam Lục địa Athanor, vùng thung lũng mỏ quặng và thành phố công nghiệp cơ giới hóa
export const FREE_FEDERATION_COORD = { x: 62.0, y: 78.0 };

/**
 * Hệ thống kiến trúc, thành phố công nghiệp & cơ giới 3D cho TÂN LIÊN HIỆP (FREE FEDERATION):
 * 1. Thành phố Cơ Giới (Steel City) & Xưởng Đúc Khổng Lồ của Đại Sư Moren:
 *    - Lò cao luyện kim khổng lồ rực lửa dung nham vàng cam.
 *    - 3 Ống khói công nghiệp cao vút tỏa khói hơi nước áp suất cao.
 *    - Mạng lưới đường ống dẫn năng lượng ma thạch đan xen phát quang xanh cyan.
 * 2. Đường ray xe lửa cơ giới trên cao (Elevated Monorail) & Toa tàu chở hàng Maglev:
 *    - Tuyến đường ray kim loại uốn cong với toa tàu cơ giới di chuyển tuần hoàn.
 * 3. Tháp khai mỏ & giàn khoan công nghiệp (Mining Rig Derrick).
 * 4. Hệ sinh thái sinh vật nhân tạo & vũ khí cơ giới:
 *    - Người máy cơ giới bảo an (Mech Walker Golem): Cỗ máy chiến đấu 2 chân của Moren & Wisp.
 *    - Chim cơ máy trinh sát (Clockwork Falcons): Sải cánh bay lượn truyền tin trên không phận.
 *    - Cỗ máy pháo binh tự hành hạng nặng (Heavy Artillery Cannon).
 */
export function createFreeFederation3D(): FreeFederationSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(FREE_FEDERATION_COORD.x, FREE_FEDERATION_COORD.y, 8.5);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // BẢNG VẬT LIỆU CÔNG NGHIỆP CƠ GIỚI (STEEL & INDUSTRIAL PALETTE)
  // =========================================================================
  // Sắt thép công nghiệp & tấm kim loại
  const industrialSteelMat = new THREE.MeshStandardMaterial({
    color: '#475569',
    roughness: 0.4,
    metalness: 0.85,
  });

  const darkIronMat = new THREE.MeshStandardMaterial({
    color: '#1e293b',
    roughness: 0.6,
    metalness: 0.9,
  });

  // Đồng thau cơ giới (Brass / Bronze)
  const federationBrassMat = new THREE.MeshStandardMaterial({
    color: '#d97706',
    roughness: 0.3,
    metalness: 0.8,
  });

  // Lửa lò cao luyện kim (Blast Furnace Core)
  const furnaceLavaMat = new THREE.MeshStandardMaterial({
    color: '#f97316',
    emissive: '#ef4444',
    emissiveIntensity: 2.0,
    roughness: 0.2,
  });

  // Đường ống năng lượng ma thạch (Cyan Mana Conduit)
  const manaPipeMat = new THREE.MeshStandardMaterial({
    color: '#06b6d4',
    emissive: '#0891b2',
    emissiveIntensity: 1.2,
    roughness: 0.15,
    metalness: 0.5,
  });

  // Vạch cảnh báo an toàn công nghiệp vàng đen
  const cautionStripMat = new THREE.MeshStandardMaterial({
    color: '#eab308',
    roughness: 0.5,
    metalness: 0.3,
  });

  // =========================================================================
  // 1. THỀM MÓNG BẰNG PHẲNG CẢI TẠO BẰNG SẮT THÉP (STEEL FOUNDRY PLATFORM)
  // =========================================================================
  const platformGroup = new THREE.Group();

  // Nền móng kim loại lục giác
  const basePlatGeo = new THREE.CylinderGeometry(20, 22, 3.5, 6);
  const basePlat = new THREE.Mesh(basePlatGeo, darkIronMat);
  basePlat.position.y = 1.7;
  platformGroup.add(basePlat);

  // Thềm thép trên cùng với các đường viền đồng thau
  const upperPlatGeo = new THREE.CylinderGeometry(18.5, 19.5, 1.0, 6);
  const upperPlat = new THREE.Mesh(upperPlatGeo, industrialSteelMat);
  upperPlat.position.y = 3.8;
  platformGroup.add(upperPlat);

  // Vòng viền cảnh báo công nghiệp
  const cautionRingGeo = new THREE.RingGeometry(17.5, 18.2, 24);
  cautionRingGeo.rotateX(-Math.PI / 2);
  const cautionRing = new THREE.Mesh(cautionRingGeo, cautionStripMat);
  cautionRing.position.y = 4.35;
  platformGroup.add(cautionRing);

  rootGroup.add(platformGroup);

  // =========================================================================
  // 2. XƯỞNG ĐÚC KHỔNG LỒ & LÒ CAO LUYỆN KIM CỦA MOREN (GREAT BLAST FURNACE)
  // =========================================================================
  const furnaceGroup = new THREE.Group();
  furnaceGroup.position.set(-3, 4.3, -3);

  // Lò cao hình trụ khổng lồ bằng thép bọc đai đồng
  const furnaceGeo = new THREE.CylinderGeometry(4.5, 5.5, 10, 16);
  const furnaceMesh = new THREE.Mesh(furnaceGeo, darkIronMat);
  furnaceMesh.position.y = 5;
  furnaceGroup.add(furnaceMesh);

  // Đai gia cố bằng đồng thau quanh lò
  for (let dy = 2.5; dy <= 8.5; dy += 3) {
    const bandGeo = new THREE.TorusGeometry(5.1 - (dy - 2.5) * 0.1, 0.25, 8, 24);
    bandGeo.rotateX(Math.PI / 2);
    const band = new THREE.Mesh(bandGeo, federationBrassMat);
    band.position.y = dy;
    furnaceGroup.add(band);
  }

  // Cửa lò luyện kim rực lửa dung nham vàng cam
  const hearthGeo = new THREE.BoxGeometry(2.4, 2.8, 1.2);
  const hearth = new THREE.Mesh(hearthGeo, furnaceLavaMat);
  hearth.position.set(0, 3.2, 4.8);
  furnaceGroup.add(hearth);

  // 3 Ống khói công nghiệp cao vút (Smokestacks)
  const stackCoords = [
    { x: -1.8, z: -1.8, h: 18 },
    { x: 1.8, z: -1.8, h: 22 },
    { x: 0, z: 2.0, h: 16 },
  ];

  for (const sc of stackCoords) {
    const stackGeo = new THREE.CylinderGeometry(0.7, 0.9, sc.h, 12);
    const stack = new THREE.Mesh(stackGeo, industrialSteelMat);
    stack.position.set(sc.x, sc.h / 2 + 5, sc.z);

    // Miệng ống khói viền đồng
    const rimGeo = new THREE.TorusGeometry(0.8, 0.15, 8, 16);
    rimGeo.rotateX(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, federationBrassMat);
    rim.position.set(sc.x, sc.h + 5, sc.z);

    furnaceGroup.add(stack, rim);
  }

  // BÁNH RĂNG CÔNG NGHIỆP KHỔNG LỒ QUAY LIÊN TỤC
  const giantGearGeo = new THREE.CylinderGeometry(2.8, 2.8, 0.5, 16);
  const giantGear = new THREE.Mesh(giantGearGeo, federationBrassMat);
  giantGear.position.set(-6, 7.5, 2);
  giantGear.rotateX(Math.PI / 2);
  furnaceGroup.add(giantGear);

  const sideGearGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.4, 12);
  const sideGear = new THREE.Mesh(sideGearGeo, darkIronMat);
  sideGear.position.set(-8.8, 10, 2);
  sideGear.rotateX(Math.PI / 2);
  furnaceGroup.add(sideGear);

  rootGroup.add(furnaceGroup);

  // =========================================================================
  // 3. MẠNG LƯỚI ĐƯỜNG ỐNG DẪN NĂNG LƯỢNG MA THẠCH (ENERGY PIPELINES)
  // =========================================================================
  const pipeGroup = new THREE.Group();

  const pipePoints1 = [
    new THREE.Vector3(-3, 8, 2),
    new THREE.Vector3(-3, 11, 6),
    new THREE.Vector3(5, 9, 8),
    new THREE.Vector3(9, 6, 4),
  ];
  const pipeCurve1 = new THREE.CatmullRomCurve3(pipePoints1);
  const pipeGeo1 = new THREE.TubeGeometry(pipeCurve1, 24, 0.35, 8, false);
  const pipe1 = new THREE.Mesh(pipeGeo1, manaPipeMat);
  pipeGroup.add(pipe1);

  const pipePoints2 = [
    new THREE.Vector3(2, 6, -3),
    new THREE.Vector3(8, 7, -5),
    new THREE.Vector3(12, 5, -2),
  ];
  const pipeCurve2 = new THREE.CatmullRomCurve3(pipePoints2);
  const pipeGeo2 = new THREE.TubeGeometry(pipeCurve2, 16, 0.28, 8, false);
  const pipe2 = new THREE.Mesh(pipeGeo2, manaPipeMat);
  pipeGroup.add(pipe2);

  rootGroup.add(pipeGroup);

  // =========================================================================
  // 4. ĐƯỜNG RAY XE LỬA TRÊN CAO (MONORAIL) & TOA TÀU MAGLEV CHỞ HÀNG
  // =========================================================================
  const monorailGroup = new THREE.Group();

  // Tuyến đường ray kim loại uốn cong
  const trackGeo = new THREE.TorusGeometry(13.5, 0.22, 8, 36, Math.PI * 1.3);
  trackGeo.rotateX(Math.PI / 2);
  const track = new THREE.Mesh(trackGeo, industrialSteelMat);
  track.position.set(0, 8.5, 0);
  monorailGroup.add(track);

  // Các cột trụ chống đỡ đường ray
  for (let r = 0; r < 5; r++) {
    const angle = (r / 4) * Math.PI * 1.2;
    const px = Math.cos(angle) * 13.5;
    const pz = Math.sin(angle) * 13.5;

    const pPillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.35, 4.5, 6),
      darkIronMat
    );
    pPillar.position.set(px, 6.2, pz);
    monorailGroup.add(pPillar);
  }

  // Toa tàu chở hàng cơ giới Maglev chạy trên đường ray
  const trainCarGroup = new THREE.Group();
  const trainBodyGeo = new THREE.BoxGeometry(1.4, 0.9, 3.2);
  const trainBody = new THREE.Mesh(trainBodyGeo, federationBrassMat);
  trainBody.position.y = 0.5;

  // Đầu đèn pha toa tàu
  const trainLight = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 8, 8),
    new THREE.MeshBasicMaterial({ color: '#fef08a' })
  );
  trainLight.position.set(0, 0.5, 1.7);
  trainCarGroup.add(trainBody, trainLight);

  monorailGroup.add(trainCarGroup);
  rootGroup.add(monorailGroup);

  // =========================================================================
  // 5. NGƯỜI MÁY CƠ GIỚI BẢO AN (STEAM MECH WALKER CỦA MOREN & WISP)
  // =========================================================================
  // Robot cơ giới 2 chân bảo vệ xưởng đúc và hầm mỏ
  const mechGroup = new THREE.Group();
  mechGroup.position.set(6.5, 4.3, 7.5);

  // Buồng lái hình cầu bọc thép tròn
  const cockpitGeo = new THREE.SphereGeometry(1.4, 16, 12);
  const cockpit = new THREE.Mesh(cockpitGeo, darkIronMat);
  cockpit.position.y = 3.0;
  mechGroup.add(cockpit);

  // Kính buồng lái phát quang xanh cyan (Mana Core Eye)
  const visorGeo = new THREE.BoxGeometry(1.2, 0.45, 0.6);
  const visor = new THREE.Mesh(visorGeo, manaPipeMat);
  visor.position.set(0, 3.2, 1.2);
  mechGroup.add(visor);

  // 2 Cánh tay cơ giới trang bị súng pháo
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, 0.5), industrialSteelMat);
  armL.position.set(-1.8, 3.0, 0.4);
  const cannonL = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.25, 2.2, 8),
    darkIronMat
  );
  cannonL.position.set(-1.8, 2.4, 1.2);
  cannonL.rotateX(Math.PI / 2);

  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, 0.5), industrialSteelMat);
  armR.position.set(1.8, 3.0, 0.4);
  const cannonR = cannonL.clone();
  cannonR.position.set(1.8, 2.4, 1.2);

  mechGroup.add(armL, cannonL, armR, cannonR);

  // 2 Chân cơ học vững chãi (Mech Legs)
  for (let side = -1; side <= 1; side += 2) {
    const thigh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.25, 1.5, 6),
      industrialSteelMat
    );
    thigh.position.set(side * 1.0, 2.0, 0);
    thigh.rotation.z = side * 0.15;

    const foot = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.4, 1.4),
      darkIronMat
    );
    foot.position.set(side * 1.1, 0.5, 0.2);

    mechGroup.add(thigh, foot);
  }

  rootGroup.add(mechGroup);

  // =========================================================================
  // 6. GIA TỐC ĐIỂU / CHIM CƠ MÁY TRINH SÁT (CLOCKWORK MECHANICAL FALCONS)
  // =========================================================================
  interface ClockworkFalcon {
    group: THREE.Group;
    wingL: THREE.Mesh;
    wingR: THREE.Mesh;
    baseRadius: number;
    orbitSpeed: number;
    height: number;
    phase: number;
  }
  const falcons: ClockworkFalcon[] = [];

  for (let f = 0; f < 2; f++) {
    const fGroup = new THREE.Group();

    const fBodyGeo = new THREE.ConeGeometry(0.3, 1.2, 6);
    fBodyGeo.rotateX(-Math.PI / 2);
    const fBody = new THREE.Mesh(fBodyGeo, federationBrassMat);
    fGroup.add(fBody);

    const fWingGeo = new THREE.PlaneGeometry(1.4, 0.5);
    const wL = new THREE.Mesh(fWingGeo, industrialSteelMat);
    wL.position.set(-0.8, 0, 0);
    wL.rotateX(Math.PI / 2);

    const wR = new THREE.Mesh(fWingGeo, industrialSteelMat);
    wR.position.set(0.8, 0, 0);
    wR.rotateX(Math.PI / 2);

    fGroup.add(wL, wR);
    rootGroup.add(fGroup);

    falcons.push({
      group: fGroup,
      wingL: wL,
      wingR: wR,
      baseRadius: 9 + f * 4,
      orbitSpeed: 0.9 + f * 0.3,
      height: 20 + f * 3,
      phase: f * Math.PI,
    });
  }

  // =========================================================================
  // ANIMATION UPDATE LOOP (60 FPS)
  // =========================================================================
  return {
    group: rootGroup,
    update: (_delta: number, elapsed: number) => {
      // 1. Bánh răng công nghiệp quay liên tục
      giantGear.rotation.z += 0.018;
      sideGear.rotation.z -= 0.028;

      // 2. Toa tàu Maglev di chuyển tuần hoàn dọc đường ray
      const trainAngle = (elapsed * 0.35) % (Math.PI * 1.2);
      trainCarGroup.position.x = Math.cos(trainAngle) * 13.5;
      trainCarGroup.position.z = Math.sin(trainAngle) * 13.5;
      trainCarGroup.position.y = 8.5;
      trainCarGroup.rotation.y = -trainAngle + Math.PI / 2;

      // 3. Robot Mech Walker: Quay thân súng và nhịp thở năng lượng
      cockpit.rotation.y = Math.sin(elapsed * 1.2) * 0.35;
      armL.rotation.x = Math.sin(elapsed * 1.2) * 0.2;
      armR.rotation.x = -Math.sin(elapsed * 1.2) * 0.2;

      // 4. Chim cơ máy (Gia tốc điểu) sải cánh bay lượn
      for (const f of falcons) {
        const fAngle = elapsed * f.orbitSpeed + f.phase;
        f.group.position.set(
          Math.cos(fAngle) * f.baseRadius,
          f.height + Math.sin(elapsed * 2.0 + f.phase) * 1.2,
          Math.sin(fAngle) * f.baseRadius
        );
        f.group.rotation.y = -fAngle + Math.PI / 2;

        const flap = Math.sin(elapsed * 12.0 + f.phase) * 0.45;
        f.wingL.rotation.y = flap;
        f.wingR.rotation.y = -flap;
      }
    },
  };
}
