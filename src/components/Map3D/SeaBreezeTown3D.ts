import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface SeaBreezeTownSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Hải Linh Trấn (Sea Breeze Town):
// Nằm ở phía Đông Nam của Lục địa Athanor, dọc theo đường bờ biển thuộc lãnh thổ Vương quốc Norman
export const SEA_BREEZE_TOWN_COORD = { x: 77.5, y: 65.5 };

/**
 * Hệ thống kiến trúc và sinh thái 3D cho HẢI LINH TRẤN (SEA BREEZE TOWN):
 * 1. Cảng biển duyên hải ôn hòa lộng gió: Dải bờ cát vàng, đê đá chắn sóng, hệ thống cầu cảng gỗ, bến thuyền.
 * 2. Ngọn Hải Đăng Lớn: Tháp hải đăng sọc đỏ trắng với chùm đèn pha quét xoay 360 độ trên vịnh biển.
 * 3. Thị trấn dân sinh & Xưởng đóng thuyền: Nhà ngói đỏ duyên hải, xưởng đóng tàu, cối xay gió quay trong gió biển.
 * 4. Phong Thuật Annette: Vòng xoáy ma pháp hệ Phong điều hòa luồng gió bão, dẫn lối cho đoàn thuyền.
 * 5. Đàn chim hải âu ánh sáng: Đàn hải âu bay lượn vỗ cánh quanh ngọn hải đăng.
 * 6. Sinh vật phù du phát quang: Nước ven vịnh biển lung linh sắc xanh lam lân tinh huyền ảo vào ban đêm.
 */
export function createSeaBreezeTown3D(): SeaBreezeTownSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(SEA_BREEZE_TOWN_COORD.x, SEA_BREEZE_TOWN_COORD.y, 0);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // VẬT LIỆU CAO CẤP DÙNG CHO HẢI LINH TRẤN
  // =========================================================================
  const sandMat = new THREE.MeshStandardMaterial({
    color: '#eab308',
    roughness: 0.9,
    metalness: 0.05,
  });

  const pierWoodMat = new THREE.MeshStandardMaterial({
    color: '#78350f',
    roughness: 0.75,
    metalness: 0.1,
  });

  const darkRockMat = new THREE.MeshStandardMaterial({
    color: '#334155',
    roughness: 0.85,
    metalness: 0.1,
  });

  const lighthouseWhiteMat = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.4,
    metalness: 0.1,
  });

  const lighthouseRedMat = new THREE.MeshStandardMaterial({
    color: '#dc2626',
    roughness: 0.4,
    metalness: 0.1,
  });

  const lanternGlassMat = new THREE.MeshStandardMaterial({
    color: '#fef08a',
    emissive: '#eab308',
    emissiveIntensity: 0.95,
    roughness: 0.1,
  });

  const beamMat = new THREE.MeshBasicMaterial({
    color: '#fef08a',
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  const townRoofMat = new THREE.MeshStandardMaterial({
    color: '#b91c1c',
    roughness: 0.5,
    metalness: 0.15,
  });

  const townWallMat = new THREE.MeshStandardMaterial({
    color: '#f1f5f9',
    roughness: 0.6,
  });

  const sailClothMat = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.8,
    side: THREE.DoubleSide,
  });

  const ataGoldAnchorMat = new THREE.MeshStandardMaterial({
    color: '#facc15',
    emissive: '#ca8a04',
    emissiveIntensity: 0.3,
    metalness: 0.85,
    roughness: 0.2,
  });

  const windMagicMat = new THREE.MeshStandardMaterial({
    color: '#67e8f9',
    emissive: '#06b6d4',
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.65,
    roughness: 0.1,
    metalness: 0.2,
  });

  const planktonGlowMat = new THREE.MeshBasicMaterial({
    color: '#22d3ee',
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });

  const seagullMat = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.4,
  });

  // Mảng quản lý hoạt họa
  let lighthouseBeamGroup: THREE.Group;
  let windmillBlades: THREE.Group;
  let windVortexGroup: THREE.Group;
  const boats: Array<{ mesh: THREE.Object3D; baseRotationZ: number; phase: number }> = [];
  const seagulls: Array<{
    group: THREE.Group;
    wingLeft: THREE.Object3D;
    wingRight: THREE.Object3D;
    radius: number;
    speed: number;
    height: number;
    phase: number;
  }> = [];
  const planktonMotes: THREE.Mesh[] = [];

  // =========================================================================
  // 1. ĐỊA HÌNH BỜ BIỂN DUYÊN HẢI & ĐÊ ĐÁ CHẮN SÓNG (BEACH & BREAKWATER)
  // =========================================================================
  const coastalTerrainGroup = new THREE.Group();

  // Bãi cát duyên hải thoai thoải hình vòng cung ôm lấy vịnh
  const beachBase = new THREE.Mesh(new THREE.CylinderGeometry(15, 18, 2.5, 16), sandMat);
  beachBase.position.set(-1.5, 1.25, -2);
  coastalTerrainGroup.add(beachBase);

  // Đồi thấp thoai thoải đón gió biển phía sau thị trấn
  const townHill = new THREE.Mesh(new THREE.CylinderGeometry(8, 11, 4.5, 12), sandMat);
  townHill.position.set(-4.5, 3.5, -5.5);
  coastalTerrainGroup.add(townHill);

  // Đê đá thấp chắn sóng (Low Breakwater Rocks) che chắn cho vịnh cảng
  const breakwaterCoords = [
    { x: 8, z: 2, r: 2.2, h: 2.8 },
    { x: 10, z: 5, r: 2.5, h: 3.2 },
    { x: 11.5, z: 8.5, r: 2.0, h: 2.6 },
    { x: 12, z: 12, r: 1.8, h: 2.4 },
    { x: -9, z: 7, r: 2.3, h: 2.7 },
  ];

  breakwaterCoords.forEach((bw) => {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(bw.r, 0), darkRockMat);
    rock.position.set(bw.x, bw.h * 0.5, bw.z);
    rock.scale.set(1.2, 0.75, 1.1);
    coastalTerrainGroup.add(rock);
  });

  rootGroup.add(coastalTerrainGroup);

  // =========================================================================
  // 2. HỆ THỐNG CẦU CẢNG GỖ & XƯỞNG TÀU (WOODEN PIERS & HARBOR DOCKS)
  // =========================================================================
  const harborGroup = new THREE.Group();

  // Cầu cảng chính vươn dài ra vịnh (Main Wooden Boardwalk Pier)
  const mainPierDeck = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.4, 18), pierWoodMat);
  mainPierDeck.position.set(2.5, 1.8, 5.5);
  harborGroup.add(mainPierDeck);

  // Cầu tàu phụ chữ L rẽ sang phía Đông
  const subPierDeck = new THREE.Mesh(new THREE.BoxGeometry(10, 0.4, 3.0), pierWoodMat);
  subPierDeck.position.set(7.5, 1.8, 12.5);
  harborGroup.add(subPierDeck);

  // Các cọc gỗ cắm sâu xuống nước biển
  for (let z = -2; z <= 13; z += 3) {
    const pileL = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 3.5, 6), pierWoodMat);
    pileL.position.set(1.0, 0.8, z);
    const pileR = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 3.5, 6), pierWoodMat);
    pileR.position.set(4.0, 0.8, z);
    harborGroup.add(pileL);
    harborGroup.add(pileR);
  }

  // Thùng hàng gỗ và thùng rượu hải cảng
  const crateGeo = new THREE.BoxGeometry(1.0, 1.0, 1.0);
  const crateMat = new THREE.MeshStandardMaterial({ color: '#a16207', roughness: 0.8 });
  const crate1 = new THREE.Mesh(crateGeo, crateMat);
  crate1.position.set(3.2, 2.5, 4.5);
  const crate2 = new THREE.Mesh(crateGeo, crateMat);
  crate2.position.set(3.2, 2.5, 6.0);
  harborGroup.add(crate1);
  harborGroup.add(crate2);

  // Xưởng đóng thuyền (Shipyard dry dock) với khung sườn thuyền đang thi công
  const shipyardShed = new THREE.Group();
  shipyardShed.position.set(-6, 2.0, 3.5);
  const shedRoof = new THREE.Mesh(new THREE.ConeGeometry(3.8, 1.8, 4), townRoofMat);
  shedRoof.position.y = 3.5;
  shedRoof.scale.set(1.4, 1.0, 2.0);
  shipyardShed.add(shedRoof);
  for (let s = 0; s < 4; s++) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 3, 6), pierWoodMat);
    post.position.set(s % 2 === 0 ? -1.8 : 1.8, 1.5, s < 2 ? -2.5 : 2.5);
    shipyardShed.add(post);
  }
  harborGroup.add(shipyardShed);

  rootGroup.add(harborGroup);

  // =========================================================================
  // 3. THUYỀN BUỒM NGƯ DÂN & CON THUYỀN CỦA ATA (ATA'S SHIP)
  // =========================================================================
  const fleetGroup = new THREE.Group();

  // A. Thuyền Lướt Sóng Của Chàng Thủy Thủ Ata
  const ataBoat = new THREE.Group();
  ataBoat.position.set(5.5, 0.8, 8.5);

  // Thân thuyền gỗ
  const hullGeo = new THREE.ConeGeometry(1.6, 6.5, 6);
  hullGeo.rotateX(Math.PI / 2);
  hullGeo.scale(1.2, 0.7, 1.0);
  const ataHull = new THREE.Mesh(hullGeo, pierWoodMat);
  ataBoat.add(ataHull);

  // Cột buồm & Cánh buồm trắng sọc xanh dương
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 6.0, 6), pierWoodMat);
  mast.position.set(0, 3.0, 0);
  ataBoat.add(mast);

  const mainSail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4.2, 3.2), sailClothMat);
  mainSail.position.set(0, 3.2, 0.8);
  ataBoat.add(mainSail);

  // Mỏ neo vàng huyền thoại của Ata (Golden Anchor)
  const anchorMesh = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.16, 6, 12, Math.PI), ataGoldAnchorMat);
  anchorMesh.position.set(1.4, 0.6, -1.8);
  anchorMesh.rotation.z = Math.PI;
  ataBoat.add(anchorMesh);

  fleetGroup.add(ataBoat);
  boats.push({ mesh: ataBoat, baseRotationZ: 0, phase: 0.5 });

  // B. Thuyền Đánh Cá Của Ngư Dân Cập Bến Chữ L
  const fisherBoat = new THREE.Group();
  fisherBoat.position.set(10.5, 0.8, 14.5);
  fisherBoat.rotation.y = Math.PI / 3;

  const fHull = new THREE.Mesh(hullGeo, pierWoodMat);
  fHull.scale.set(0.9, 0.6, 0.8);
  fisherBoat.add(fHull);

  const fMast = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 4.5, 6), pierWoodMat);
  fMast.position.set(0, 2.2, 0);
  fisherBoat.add(fMast);

  const fSail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.0, 2.2), sailClothMat);
  fSail.position.set(0, 2.4, 0.5);
  fisherBoat.add(fSail);

  fleetGroup.add(fisherBoat);
  boats.push({ mesh: fisherBoat, baseRotationZ: 0, phase: 2.2 });

  rootGroup.add(fleetGroup);

  // =========================================================================
  // 4. NGỌN HẢI ĐĂNG LỚN (GRAND LIGHTHOUSE & 360° ROTATING SPOTLIGHT)
  // =========================================================================
  const lighthouseGroup = new THREE.Group();
  lighthouseGroup.position.set(9.5, 2.2, 3.5); // Ngự trên mỏm đá nhô ra biển đón gió

  // Đế đá kiên cố
  const lhBase = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4.2, 2.0, 10), darkRockMat);
  lhBase.position.y = 1.0;
  lighthouseGroup.add(lhBase);

  // Thân tháp sọc trắng - đỏ nổi bật
  const lhTower1 = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.8, 4.5, 12), lighthouseWhiteMat);
  lhTower1.position.y = 4.25;
  lighthouseGroup.add(lhTower1);

  const lhTower2 = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.2, 4.5, 12), lighthouseRedMat);
  lhTower2.position.y = 8.75;
  lighthouseGroup.add(lhTower2);

  const lhTower3 = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.8, 4.5, 12), lighthouseWhiteMat);
  lhTower3.position.y = 13.25;
  lighthouseGroup.add(lhTower3);

  // Lan can vọng gác & Buồng đèn biển bằng kính phát sáng
  const lhGallery = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 1.5, 0.5, 12), darkRockMat);
  lhGallery.position.y = 15.75;
  lighthouseGroup.add(lhGallery);

  const lhLantern = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.2, 10), lanternGlassMat);
  lhLantern.position.y = 17.1;
  lighthouseGroup.add(lhLantern);

  // Mái chóp vòm nhọn hải đăng
  const lhDome = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.2, 10), lighthouseRedMat);
  lhDome.position.y = 19.3;
  lighthouseGroup.add(lhDome);

  // Luồng sáng quét xoay 360 độ (Volumetric Sweeping Spotlight Beam)
  lighthouseBeamGroup = new THREE.Group();
  lighthouseBeamGroup.position.y = 17.1;

  const beamGeo = new THREE.ConeGeometry(6.5, 36, 16, 1, true);
  beamGeo.rotateX(Math.PI / 2);
  beamGeo.translate(0, 0, 18);
  const beamMesh = new THREE.Mesh(beamGeo, beamMat);
  lighthouseBeamGroup.add(beamMesh);

  // Tia sáng phụ đối xứng phía sau
  const backBeamGeo = new THREE.ConeGeometry(3.5, 18, 12, 1, true);
  backBeamGeo.rotateX(-Math.PI / 2);
  backBeamGeo.translate(0, 0, -9);
  const backBeamMesh = new THREE.Mesh(backBeamGeo, beamMat);
  lighthouseBeamGroup.add(backBeamMesh);

  lighthouseGroup.add(lighthouseBeamGroup);
  rootGroup.add(lighthouseGroup);

  // =========================================================================
  // 5. KHU DÂN SINH THỊ TRẤN & CỐI XAY GIÓ (TOWN HOUSES & WINDMILL)
  // =========================================================================
  const townGroup = new THREE.Group();
  townGroup.position.set(-5, 4.0, -4);

  // Dãy nhà mái ngói đỏ Norman
  const houseConfigs = [
    { x: -2.5, z: 0, w: 3.8, d: 2.8, h: 2.8 },
    { x: 2.5, z: -1.5, w: 4.2, d: 3.2, h: 3.2 },
    { x: 0.5, z: 3.5, w: 3.4, d: 2.6, h: 2.6 },
  ];

  houseConfigs.forEach((cfg) => {
    const house = new THREE.Group();
    house.position.set(cfg.x, 0, cfg.z);

    const walls = new THREE.Mesh(new THREE.BoxGeometry(cfg.w, cfg.h, cfg.d), townWallMat);
    walls.position.y = cfg.h * 0.5;
    house.add(walls);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(cfg.w * 0.75, 1.8, 4), townRoofMat);
    roof.position.y = cfg.h + 0.9;
    roof.rotation.y = Math.PI / 4;
    roof.scale.set(1.0, 1.0, cfg.d / cfg.w);
    house.add(roof);

    townGroup.add(house);
  });

  // Cối xay gió phong thủy (Coastal Windmill) đón các luồng khí lưu
  const windmillGroup = new THREE.Group();
  windmillGroup.position.set(-6.5, 2.0, -4.5);

  const wmTower = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.4, 7.5, 8), townWallMat);
  wmTower.position.y = 3.75;
  windmillGroup.add(wmTower);

  const wmCap = new THREE.Mesh(new THREE.ConeGeometry(1.8, 2.0, 8), townRoofMat);
  wmCap.position.y = 8.5;
  windmillGroup.add(wmCap);

  // Cụm 4 cánh quạt cối xay gió
  windmillBlades = new THREE.Group();
  windmillBlades.position.set(0, 7.5, 1.6);

  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.4, 8), pierWoodMat);
  hub.rotation.x = Math.PI / 2;
  windmillBlades.add(hub);

  for (let b = 0; b < 4; b++) {
    const angle = (b * Math.PI) / 2;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.2, 0.08), sailClothMat);
    blade.position.set(Math.cos(angle) * 2.1, Math.sin(angle) * 2.1, 0);
    blade.rotation.z = angle;
    windmillBlades.add(blade);
  }
  windmillGroup.add(windmillBlades);
  townGroup.add(windmillGroup);

  rootGroup.add(townGroup);

  // =========================================================================
  // 6. PHONG THUẬT ANNETTE — CƠN LỐC MA PHÁP HỆ PHONG (ANNETTE'S GALE MAGIC)
  // =========================================================================
  windVortexGroup = new THREE.Group();
  windVortexGroup.position.set(-3.5, 12.0, -2.5); // Lơ lửng trên không trung thị trấn

  // Vòng xoáy khí lưu ma thuật uốn lượn (Tornado Wind Spiral)
  for (let r = 0; r < 4; r++) {
    const ringRadius = 2.0 + r * 1.5;
    const ringGeo = new THREE.TorusGeometry(ringRadius, 0.18, 8, 24);
    const ringMesh = new THREE.Mesh(ringGeo, windMagicMat);
    ringMesh.position.y = r * 1.6;
    ringMesh.rotation.x = Math.PI / 2 + (r % 2 === 0 ? 0.15 : -0.15);
    windVortexGroup.add(ringMesh);
  }

  // Lõi cầu năng lượng Phong Thuật phát quang
  const galeOrb = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 12, 12),
    new THREE.MeshStandardMaterial({
      color: '#a7f3d0',
      emissive: '#34d399',
      emissiveIntensity: 1.0,
      roughness: 0.1,
    })
  );
  galeOrb.position.y = 2.8;
  windVortexGroup.add(galeOrb);

  // Phù hiệu ma pháp gió (Bụi sao gió uốn lượn)
  const magicRings = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const dustMote = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 6), windMagicMat);
    const ang = (i / 6) * Math.PI * 2;
    dustMote.position.set(Math.cos(ang) * 4.5, 2.5 + Math.sin(ang * 2) * 1.2, Math.sin(ang) * 4.5);
    magicRings.add(dustMote);
  }
  windVortexGroup.add(magicRings);

  rootGroup.add(windVortexGroup);

  // =========================================================================
  // 7. ĐÀN CHIM HẢI ÂU ÁNH SÁNG BAY LƯỢN (LUMINOUS SEAGULLS)
  // =========================================================================
  const seagullsGroup = new THREE.Group();

  for (let g = 0; g < 6; g++) {
    const gull = new THREE.Group();

    // Thân chim
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.2, 5), seagullMat);
    body.rotation.x = Math.PI / 2;
    gull.add(body);

    // Cánh trái
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.04, 0.4), seagullMat);
    wingL.position.set(-0.75, 0.1, 0);
    gull.add(wingL);

    // Cánh phải
    const wingR = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.04, 0.4), seagullMat);
    wingR.position.set(0.75, 0.1, 0);
    gull.add(wingR);

    seagullsGroup.add(gull);

    seagulls.push({
      group: gull,
      wingLeft: wingL,
      wingRight: wingR,
      radius: 12 + (g % 3) * 5,
      speed: 0.6 + (g % 4) * 0.15,
      height: 16 + (g % 3) * 3,
      phase: (g / 6) * Math.PI * 2,
    });
  }

  rootGroup.add(seagullsGroup);

  // =========================================================================
  // 8. SINH VẬT PHÙ DU PHÁT QUANG VEN VỊNH (BIOLUMINESCENT PLANKTON)
  // =========================================================================
  const planktonGroup = new THREE.Group();

  for (let p = 0; p < 14; p++) {
    const mote = new THREE.Mesh(new THREE.SphereGeometry(0.35 + (p % 3) * 0.15, 6, 6), planktonGlowMat);
    const px = 2 + (Math.random() - 0.5) * 16;
    const pz = 6 + Math.random() * 12;
    mote.position.set(px, 0.4, pz);
    planktonGroup.add(mote);
    planktonMotes.push(mote);
  }

  rootGroup.add(planktonGroup);

  // =========================================================================
  // HÀM HOẠT HỌA THEO THỜI GIAN THỰC (ANIMATION RENDER LOOP)
  // =========================================================================
  return {
    group: rootGroup,
    update: (delta: number, elapsed: number) => {
      // 1. Ngọn hải đăng quét đèn xoay 360 độ trên mặt biển
      if (lighthouseBeamGroup) {
        lighthouseBeamGroup.rotation.y += delta * 0.85;
      }

      // 2. Cánh quạt cối xay gió quay tít trong gió biển
      if (windmillBlades) {
        windmillBlades.rotation.z += delta * 1.5;
      }

      // 3. Vòng xoáy Phong Thuật của Annette xoay tròn và nhấp nhô
      if (windVortexGroup) {
        windVortexGroup.rotation.y -= delta * 1.2;
        windVortexGroup.position.y = 12.0 + Math.sin(elapsed * 2.0) * 0.8;
      }

      // 4. Thuyền của Ata và thuyền ngư dân dập dềnh theo sóng vịnh
      boats.forEach((boat) => {
        boat.mesh.position.y = 0.8 + Math.sin(elapsed * 1.6 + boat.phase) * 0.18;
        boat.mesh.rotation.z = Math.sin(elapsed * 1.4 + boat.phase) * 0.06;
        boat.mesh.rotation.x = Math.cos(elapsed * 1.2 + boat.phase) * 0.04;
      });

      // 5. Đàn chim hải âu bay lượn hình tròn và vỗ cánh
      seagulls.forEach((gull) => {
        const angle = elapsed * gull.speed + gull.phase;
        gull.group.position.x = 8 + Math.cos(angle) * gull.radius;
        gull.group.position.z = 6 + Math.sin(angle) * gull.radius;
        gull.group.position.y = gull.height + Math.sin(elapsed * 2.5 + gull.phase) * 1.2;
        gull.group.rotation.y = -angle - Math.PI / 2;

        // Vỗ cánh mềm mại
        const flap = Math.sin(elapsed * 9.0 + gull.phase) * 0.45;
        gull.wingLeft.rotation.z = flap;
        gull.wingRight.rotation.z = -flap;
      });

      // 6. Sinh vật phù du phát quang nhấp nhô và chớp tắt dịu dàng
      planktonMotes.forEach((mote, idx) => {
        mote.position.y = 0.4 + Math.sin(elapsed * 1.8 + idx) * 0.15;
        (mote.material as THREE.MeshBasicMaterial).opacity = 0.4 + Math.sin(elapsed * 2.2 + idx) * 0.35;
      });
    },
  };
}
