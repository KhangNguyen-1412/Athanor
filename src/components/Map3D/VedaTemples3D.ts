import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface VedaTemplesSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

/**
 * Xây dựng cụm kiến trúc 3D tráng lệ cho 6 Điện Thờ của Tháp Quang Minh (Veda) trên đỉnh Orsen:
 * 1. Giáo Đình Trung Ương (Central See — Ilumia)
 * 2. Điện Công Lý (Justice Temple — Tulen)
 * 3. Điện Phúc Âm (Gospel Temple — Lauriel & Bright)
 * 4. Điện Trí Tuệ (Wisdom Temple — Ignis)
 * 5. Điện Tài Phá (Wealth Temple — Gildur)
 * 6. Điện Mây Phủ (Cloud Temple — Jinna, Yorn, Xeniel)
 * 7. Hệ thống Cầu Thánh Hoàng Kim nối liền các điện
 */
export function createVedaTemples3D(): VedaTemplesSystem {
  const rootGroup = new THREE.Group();

  // Vật liệu dùng chung
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: '#facc15',
    emissive: '#ca8a04',
    emissiveIntensity: 0.35,
    metalness: 0.88,
    roughness: 0.2,
  });

  const whiteMarbleMaterial = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.35,
    metalness: 0.1,
  });

  const cyanEnergyMaterial = new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#0284c7',
    emissiveIntensity: 0.9,
    metalness: 0.2,
    roughness: 0.15,
  });

  const flameMaterial = new THREE.MeshStandardMaterial({
    color: '#fb923c',
    emissive: '#ea580c',
    emissiveIntensity: 0.95,
    metalness: 0.1,
    roughness: 0.2,
  });

  // Mảng các vật thể hoạt họa
  const rotators: Array<{ mesh: THREE.Object3D; speedX?: number; speedY?: number; speedZ?: number }> = [];
  const bobbers: Array<{ mesh: THREE.Object3D; baseHeight: number; speed: number; amplitude: number }> = [];

  // =========================================================================
  // 1. GIÁO ĐÌNH TRUNG ƯƠNG (VEDA CENTRAL SEE) — TỌA ĐỘ (44.5, 31.8, elev: 35)
  // Đại thánh đường nguy nga tối cao của Nữ Thần Ánh Sáng Ilumia
  // =========================================================================
  const centralSeeGroup = new THREE.Group();
  const centralPos = mapPercentTo3D(44.5, 31.8, 35);
  centralSeeGroup.position.copy(centralPos);

  // Đế thánh đường đa giác phân tầng
  const centralBase = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 10.5, 3.5, 8), whiteMarbleMaterial);
  centralBase.position.y = 1.75;
  centralSeeGroup.add(centralBase);

  // Tháp chính Basilica
  const centralTower = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 5.2, 18, 8), whiteMarbleMaterial);
  centralTower.position.y = 12.5;
  centralSeeGroup.add(centralTower);

  // Đỉnh tháp chóp kim cương mạ vàng rực rỡ
  const centralSpire = new THREE.Mesh(new THREE.ConeGeometry(3.8, 11, 8), goldMaterial);
  centralSpire.position.y = 27;
  centralSeeGroup.add(centralSpire);

  // 4 Tháp chuông phụ ở 4 góc
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const subTower = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.6, 12, 6), whiteMarbleMaterial);
    subTower.position.set(Math.cos(angle) * 6.5, 7.5, Math.sin(angle) * 6.5);
    const subSpire = new THREE.Mesh(new THREE.ConeGeometry(1.4, 5, 6), goldMaterial);
    subSpire.position.set(Math.cos(angle) * 6.5, 16, Math.sin(angle) * 6.5);
    centralSeeGroup.add(subTower);
    centralSeeGroup.add(subSpire);
  }

  // Khối chóp tam giác lật ngược xoay 3D (Lõi Thiên Cầu) & 3 Vòng Tròn
  const pyrGeo = new THREE.ConeGeometry(4.2, 8.5, 3);
  pyrGeo.rotateX(Math.PI);
  const pyramidMesh = new THREE.Mesh(pyrGeo, goldMaterial);
  pyramidMesh.position.y = 36;
  centralSeeGroup.add(pyramidMesh);
  rotators.push({ mesh: pyramidMesh, speedY: 0.75, speedX: 0.15 });

  const ringMat = new THREE.MeshBasicMaterial({
    color: '#fef08a',
    transparent: true,
    opacity: 0.85,
    wireframe: true,
  });
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(6.5, 0.22, 8, 36), ringMat);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(8.5, 0.22, 8, 36), ringMat);
  const ring3 = new THREE.Mesh(new THREE.TorusGeometry(10.5, 0.22, 8, 36), ringMat);
  ring1.position.y = 36;
  ring2.position.y = 36;
  ring3.position.y = 36;
  ring1.rotation.x = Math.PI / 3;
  ring2.rotation.y = Math.PI / 4;
  ring3.rotation.z = Math.PI / 6;
  centralSeeGroup.add(ring1);
  centralSeeGroup.add(ring2);
  centralSeeGroup.add(ring3);
  rotators.push({ mesh: ring1, speedZ: 0.6 });
  rotators.push({ mesh: ring2, speedX: 0.5 });
  rotators.push({ mesh: ring3, speedY: 0.7 });

  rootGroup.add(centralSeeGroup);

  // =========================================================================
  // 2. ĐIỆN CÔNG LÝ (VEDA JUSTICE TEMPLE) — TỌA ĐỘ (40.8, 34.2, elev: 28)
  // Pháo đài sấm sét của Tulen & Đội Đặc Nhiệm Ánh Sáng
  // =========================================================================
  const justiceGroup = new THREE.Group();
  const justicePos = mapPercentTo3D(40.8, 34.2, 28);
  justiceGroup.position.copy(justicePos);

  // Đế pháo đài bát giác bằng đá bazan trắng viền vàng
  const justiceBase = new THREE.Mesh(new THREE.CylinderGeometry(5.8, 7.2, 3, 8), whiteMarbleMaterial);
  justiceBase.position.y = 1.5;
  justiceGroup.add(justiceBase);

  // Tháp phán quyết bát giác
  const justiceTower = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4.5, 11, 8), whiteMarbleMaterial);
  justiceTower.position.y = 8.5;
  justiceGroup.add(justiceTower);

  // 4 Cột thu lôi ma pháp vươn cao
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 6, 6), goldMaterial);
    rod.position.set(Math.cos(angle) * 3.8, 14, Math.sin(angle) * 3.8);
    justiceGroup.add(rod);
  }

  // Khối cầu Lôi Quang Tulen lơ lửng phát điện
  const thunderOrb = new THREE.Mesh(new THREE.SphereGeometry(1.6, 16, 16), cyanEnergyMaterial);
  thunderOrb.position.y = 15;
  justiceGroup.add(thunderOrb);
  bobbers.push({ mesh: thunderOrb, baseHeight: 15, speed: 3.2, amplitude: 0.8 });

  // Vòng năng lượng sấm sét xoay quanh khối cầu
  const thunderRing = new THREE.Mesh(
    new THREE.TorusGeometry(2.8, 0.16, 8, 24),
    new THREE.MeshBasicMaterial({ color: '#7dd3fc', wireframe: true })
  );
  thunderRing.position.y = 15;
  thunderRing.rotation.x = Math.PI / 2.5;
  justiceGroup.add(thunderRing);
  rotators.push({ mesh: thunderRing, speedZ: 2.2, speedY: 1.4 });

  rootGroup.add(justiceGroup);

  // =========================================================================
  // 3. ĐIỆN PHÚC ÂM (VEDA GOSPEL TEMPLE) — TỌA ĐỘ (48.2, 34.2, elev: 28)
  // Thánh địa cứu chuộc của Đại Thiên Sứ Lauriel & Bright
  // =========================================================================
  const gospelGroup = new THREE.Group();
  const gospelPos = mapPercentTo3D(48.2, 34.2, 28);
  gospelGroup.position.copy(gospelPos);

  // Đế tròn thanh thoát
  const gospelBase = new THREE.Mesh(new THREE.CylinderGeometry(6.2, 7.5, 2.5, 16), whiteMarbleMaterial);
  gospelBase.position.y = 1.25;
  gospelGroup.add(gospelBase);

  // Vòm mái tròn thánh thiện (Dome)
  const gospelDome = new THREE.Mesh(
    new THREE.SphereGeometry(4.2, 18, 14, 0, Math.PI * 2, 0, Math.PI / 2),
    whiteMarbleMaterial
  );
  gospelDome.position.y = 5.5;
  gospelGroup.add(gospelDome);

  // Cột tròn bao quanh vòm mái
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 4.5, 8), whiteMarbleMaterial);
    col.position.set(Math.cos(angle) * 4.8, 3.5, Math.sin(angle) * 4.8);
    gospelGroup.add(col);
  }

  // Đôi cánh Thiên Thần (Archangel Wings) uốn cong vươn lên
  const wingGeo = new THREE.TorusGeometry(5.2, 0.38, 8, 24, Math.PI * 0.7);
  const leftWing = new THREE.Mesh(wingGeo, goldMaterial);
  leftWing.position.set(-2.8, 8, 0);
  leftWing.rotation.z = Math.PI / 3.8;
  gospelGroup.add(leftWing);

  const rightWing = new THREE.Mesh(wingGeo, goldMaterial);
  rightWing.position.set(2.8, 8, 0);
  rightWing.rotation.z = Math.PI - Math.PI / 3.8;
  rightWing.rotation.y = Math.PI;
  gospelGroup.add(rightWing);

  // Vòng hào quang Seraphic Halo lơ lửng
  const haloRing = new THREE.Mesh(
    new THREE.TorusGeometry(3.2, 0.18, 8, 32),
    new THREE.MeshBasicMaterial({ color: '#fef08a' })
  );
  haloRing.position.y = 13.5;
  haloRing.rotation.x = Math.PI / 2;
  gospelGroup.add(haloRing);
  bobbers.push({ mesh: haloRing, baseHeight: 13.5, speed: 2.0, amplitude: 0.6 });
  rotators.push({ mesh: haloRing, speedZ: 0.5 });

  // Tinh cầu Ánh Sáng Bất Tử Bright ở tâm điện
  const holyOrb = new THREE.Mesh(
    new THREE.OctahedronGeometry(1.2, 1),
    new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#fef08a', emissiveIntensity: 0.85 })
  );
  holyOrb.position.y = 13.5;
  gospelGroup.add(holyOrb);
  rotators.push({ mesh: holyOrb, speedY: 1.2, speedX: 0.8 });

  rootGroup.add(gospelGroup);

  // =========================================================================
  // 4. ĐIỆN TRÍ TUỆ (VEDA WISDOM TEMPLE) — TỌA ĐỘ (42.0, 37.8, elev: 22)
  // Thư viện Cổ điển & Ngọn Lửa Thiêng của Đại Hiền Triết Ignis
  // =========================================================================
  const wisdomGroup = new THREE.Group();
  const wisdomPos = mapPercentTo3D(42.0, 37.8, 22);
  wisdomGroup.position.copy(wisdomPos);

  // Đế thư viện bậc tam cấp tròn
  const wisdomBase = new THREE.Mesh(new THREE.CylinderGeometry(5.8, 7.0, 2.2, 16), whiteMarbleMaterial);
  wisdomBase.position.y = 1.1;
  wisdomGroup.add(wisdomBase);

  // Vòng 10 Tháp cột Tri Thức
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 5.5, 8), whiteMarbleMaterial);
    col.position.set(Math.cos(angle) * 4.6, 4.5, Math.sin(angle) * 4.6);
    wisdomGroup.add(col);
  }

  // Mái vòm Pantheon bằng đồng viền vàng
  const wisdomDome = new THREE.Mesh(
    new THREE.SphereGeometry(4.0, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    goldMaterial
  );
  wisdomDome.position.y = 7.2;
  wisdomGroup.add(wisdomDome);

  // Đỉnh vòm: Lò Bát Quái chứa Ngọn Lửa Thiêng Ignis
  const brazier = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.0, 1.4, 8), goldMaterial);
  brazier.position.y = 11.5;
  wisdomGroup.add(brazier);

  const flameMesh = new THREE.Mesh(new THREE.ConeGeometry(1.2, 3.4, 6), flameMaterial);
  flameMesh.position.y = 13.5;
  wisdomGroup.add(flameMesh);
  rotators.push({ mesh: flameMesh, speedY: 2.5 });
  bobbers.push({ mesh: flameMesh, baseHeight: 13.5, speed: 4.5, amplitude: 0.4 });

  rootGroup.add(wisdomGroup);

  // =========================================================================
  // 5. ĐIỆN TÀI PHÁ (VEDA WEALTH TEMPLE) — TỌA ĐỘ (47.0, 37.8, elev: 22)
  // Ngân khố Hoàng Kim đồ sộ của Đại Gia Gildur
  // =========================================================================
  const wealthGroup = new THREE.Group();
  const wealthPos = mapPercentTo3D(47.0, 37.8, 22);
  wealthGroup.position.copy(wealthPos);

  // 3 Tầng Ziggurat bậc thang bằng vàng ròng
  const tier1 = new THREE.Mesh(new THREE.BoxGeometry(11, 1.4, 11), goldMaterial);
  tier1.position.y = 0.7;
  wealthGroup.add(tier1);

  const tier2 = new THREE.Mesh(new THREE.BoxGeometry(8.5, 1.4, 8.5), goldMaterial);
  tier2.position.y = 2.1;
  wealthGroup.add(tier2);

  const tier3 = new THREE.Mesh(new THREE.BoxGeometry(6.2, 1.4, 6.2), goldMaterial);
  tier3.position.y = 3.5;
  wealthGroup.add(tier3);

  // Đình Các Hoàng Kim (Pavilion)
  const pavilionRoof = new THREE.Mesh(new THREE.ConeGeometry(4.2, 3.2, 4), goldMaterial);
  pavilionRoof.position.y = 8.5;
  pavilionRoof.rotation.y = Math.PI / 4;
  wealthGroup.add(pavilionRoof);

  // Biểu tượng Đồng Tiền Mặt Trời Gildur xoay lơ lửng trên nóc điện
  const coinEmblem = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.4, 16), goldMaterial);
  coinEmblem.position.y = 12.5;
  coinEmblem.rotation.x = Math.PI / 2;
  wealthGroup.add(coinEmblem);
  rotators.push({ mesh: coinEmblem, speedZ: 1.2 });
  bobbers.push({ mesh: coinEmblem, baseHeight: 12.5, speed: 2.2, amplitude: 0.5 });

  rootGroup.add(wealthGroup);

  // =========================================================================
  // 6. ĐIỆN MÂY PHỦ (VEDA CLOUD TEMPLE) — TỌA ĐỘ (44.5, 39.8, elev: 17)
  // Vọng Thiên Môn & Tầng tu luyện thanh tịnh của Jinna, Yorn, Xeniel
  // =========================================================================
  const cloudTempleGroup = new THREE.Group();
  const cloudPos = mapPercentTo3D(44.5, 39.8, 17);
  cloudTempleGroup.position.copy(cloudPos);

  // Nền đài ngự trên mây trắng
  const cloudBase = new THREE.Mesh(new THREE.CylinderGeometry(7.0, 8.5, 2.0, 16), whiteMarbleMaterial);
  cloudBase.position.y = 1.0;
  cloudTempleGroup.add(cloudBase);

  // Các đám mây sương bồng bềnh đỡ chân điện
  const mistMat = new THREE.MeshStandardMaterial({
    color: '#f1f5f9',
    transparent: true,
    opacity: 0.75,
    roughness: 0.9,
  });
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const puff = new THREE.Mesh(new THREE.SphereGeometry(2.2, 8, 6), mistMat);
    puff.position.set(Math.cos(angle) * 5.2, 0.8, Math.sin(angle) * 5.2);
    puff.scale.set(1.4, 0.5, 1.2);
    cloudTempleGroup.add(puff);
  }

  // Cổng Trời Vọng Thiên Môn (Monumental Celestial Archway)
  const leftPillar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8.5, 1.2), whiteMarbleMaterial);
  leftPillar.position.set(-3.2, 5.2, 0);
  cloudTempleGroup.add(leftPillar);

  const rightPillar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8.5, 1.2), whiteMarbleMaterial);
  rightPillar.position.set(3.2, 5.2, 0);
  cloudTempleGroup.add(rightPillar);

  const archLintel = new THREE.Mesh(new THREE.BoxGeometry(9.0, 1.4, 1.8), goldMaterial);
  archLintel.position.set(0, 9.6, 0);
  cloudTempleGroup.add(archLintel);

  const archTop = new THREE.Mesh(new THREE.BoxGeometry(7.0, 1.0, 1.4), goldMaterial);
  archTop.position.set(0, 10.8, 0);
  cloudTempleGroup.add(archTop);

  // Chuông pháp khí luân hồi Jinna treo ở giữa cổng
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1.1, 1.6, 8), goldMaterial);
  bell.position.set(0, 8.2, 0);
  cloudTempleGroup.add(bell);
  rotators.push({ mesh: bell, speedY: 1.0 });

  rootGroup.add(cloudTempleGroup);

  // =========================================================================
  // 7. CẦU THÁNH HOÀNG KIM NỐI LIỀN CÁC ĐIỆN VỀ GIÁO ĐÌNH TRUNG ƯƠNG
  // =========================================================================
  const outerPositions = [justicePos, gospelPos, wisdomPos, wealthPos, cloudPos];
  const bridgeMaterial = new THREE.MeshBasicMaterial({
    color: '#fef08a',
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
  });

  outerPositions.forEach((pos) => {
    // Tạo đường cong vòm cung kết nối từ điện phụ lên Giáo Đình Trung Ương
    const midPoint = new THREE.Vector3()
      .addVectors(pos, centralPos)
      .multiplyScalar(0.5);
    midPoint.y += 6; // Vòm cung nhô cao trên không

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(pos.x, pos.y + 4, pos.z),
      midPoint,
      new THREE.Vector3(centralPos.x, centralPos.y + 4, centralPos.z),
    ]);

    const bridgeGeo = new THREE.TubeGeometry(curve, 18, 0.45, 6, false);
    const bridge = new THREE.Mesh(bridgeGeo, bridgeMaterial);
    rootGroup.add(bridge);
  });

  // HÀM UPDATE TRONG VÒNG LẶP RENDER
  const update = (delta: number, elapsed: number) => {
    // Xoay các vật thể
    rotators.forEach((r) => {
      if (r.speedX) r.mesh.rotation.x += r.speedX * delta;
      if (r.speedY) r.mesh.rotation.y += r.speedY * delta;
      if (r.speedZ) r.mesh.rotation.z += r.speedZ * delta;
    });

    // Nhấp nhô bồng bềnh
    bobbers.forEach((b) => {
      b.mesh.position.y = b.baseHeight + Math.sin(elapsed * b.speed) * b.amplitude;
    });
  };

  return {
    group: rootGroup,
    update,
  };
}
