import * as THREE from 'three';
import { mapPercentTo3D } from './Athanor3DScene';

export interface DragonKingdomSystem {
  group: THREE.Group;
  update: (delta: number, elapsed: number) => void;
}

// Tọa độ địa lý chuẩn của Vương Quốc Rồng (Long Chi Quốc / Dragon Kingdom):
// Nằm ở khu vực phía Đông Lục địa Athanor, kề sát Sa Mạc Helios, biệt lập xa Tháp Quang Minh (Veda)
export const DRAGON_KINGDOM_COORD = { x: 72.5, y: 21.5 };

/**
 * Hệ sinh thái, kiến trúc hoàng cung & thần thoại 3D cho VƯƠNG QUỐC RỒNG (DRAGON KINGDOM / LONG CHI QUỐC):
 * 1. Địa hình non nước tiên cảnh (Celestial Mountains & Peach Blossom Valley):
 *    - Thung lũng hoa đào hồng phấn rực rỡ nép mình bên dãy núi đá karst hiểm trở.
 *    - Hồ sen ngọc bích & dòng suối thủy mặc cùng cầu vòm bạch ngọc bắc qua.
 * 2. Kiến trúc hoàng cung cổ kính phương Đông (Oriental Imperial Palace & Pavilions):
 *    - Hoàng Thành Trung Tâm: Đại điện nhiều tầng mái ngói lưu ly cong vút, cột sơn then đỏ, bệ đá bạch ngọc và đèn lồng đỏ cung đình.
 *    - Võ Quán Sùng Minh (Qi): Sân lôi đài bát giác rèn luyện quyền phong, cọc gỗ mộc nhân và ấn chú khí kình hổ quyền uy lực.
 *    - Họa Phái Mộng Sơn (Yan): Thủy đình tao nhã, Thần Bút Ma Thuật khổng lồ lơ lửng vẽ dải mực ma pháp, cuộn tranh Sơn Hà Đồ bay bổng.
 * 3. Sinh vật & Linh thú huyền thoại (Mythical Dragons & Origami Creatures):
 *    - Song Long Hộ Quốc: Thần Long Mưa Thuần (Rain Dragon - lam ngọc mang mưa xuân phước lành) và Thần Long Mây Mù (Mist Dragon - bạch ngân tạo kết giới vô hình).
 *    - Hạc Giấy Ma Thuật (Origami Paper Cranes): 4 chú hạc giấy gấp đa diện tinh xảo đập cánh chao lượn quanh non nước.
 *    - Ngọc Phiến Ma Pháp của Thập Công Chúa Yue: Quạt ngọc phỉ thúy xoay tròn phóng phiến đao gió hộ quốc.
 * 4. Hiện tượng mưa xuân phùn & sương mù vĩnh cửu (Spring Rain & Perpetual Mist).
 */
export function createDragonKingdom3D(): DragonKingdomSystem {
  const rootGroup = new THREE.Group();
  const basePos = mapPercentTo3D(DRAGON_KINGDOM_COORD.x, DRAGON_KINGDOM_COORD.y, 14.5);
  rootGroup.position.copy(basePos);

  // =========================================================================
  // 1. BẢNG VẬT LIỆU HOÀNG GIA PHƯƠNG ĐÔNG & SƠN THỦY HỮU TÌNH
  // =========================================================================
  // Mái ngói lưu ly ngọc bích hoàng cung (Imperial Jade Tiles)
  const jadeRoofMat = new THREE.MeshStandardMaterial({
    color: '#065f46',
    emissive: '#047857',
    emissiveIntensity: 0.45,
    roughness: 0.32,
    metalness: 0.25,
  });

  // Mái ngói hoàng kim dát vàng (Gilded Roof Trim)
  const imperialGoldMat = new THREE.MeshStandardMaterial({
    color: '#f59e0b',
    emissive: '#b45309',
    emissiveIntensity: 0.5,
    roughness: 0.2,
    metalness: 0.85,
  });

  // Cột gỗ sơn then đỏ chu sa (Vermilion Palace Pillars)
  const vermilionWoodMat = new THREE.MeshStandardMaterial({
    color: '#991b1b',
    emissive: '#7f1d1d',
    emissiveIntensity: 0.25,
    roughness: 0.55,
    metalness: 0.1,
  });

  // Bệ đá bạch ngọc & thềm rồng (White Jade Terraces & Balustrades)
  const whiteJadeMat = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    emissive: '#e2e8f0',
    emissiveIntensity: 0.35,
    roughness: 0.28,
    metalness: 0.15,
  });

  // Nước hồ sen ngọc bích (Emerald Water)
  const emeraldWaterMat = new THREE.MeshStandardMaterial({
    color: '#0d9488',
    emissive: '#0f766e',
    emissiveIntensity: 0.55,
    roughness: 0.08,
    metalness: 0.7,
    transparent: true,
    opacity: 0.88,
  });

  // Hoa sen hồng (Pink Lotus)
  const lotusPinkMat = new THREE.MeshStandardMaterial({
    color: '#f472b6',
    emissive: '#ec4899',
    emissiveIntensity: 0.7,
    roughness: 0.4,
  });

  // Hoa đào hồng phấn (Peach Blossom Foliage)
  const peachBlossomMat = new THREE.MeshStandardMaterial({
    color: '#f472b6',
    emissive: '#db2777',
    emissiveIntensity: 0.4,
    roughness: 0.65,
  });

  // Thân cây đào nâu cổ thụ (Ancient Tree Bark)
  const peachWoodMat = new THREE.MeshStandardMaterial({
    color: '#451a03',
    roughness: 0.85,
  });

  // Thần Long Mưa Thuần (Rain Dragon - Cyan/Aquamarine Luminous)
  const rainDragonMat = new THREE.MeshStandardMaterial({
    color: '#38bdf8',
    emissive: '#0284c7',
    emissiveIntensity: 0.9,
    roughness: 0.2,
    metalness: 0.5,
    transparent: true,
    opacity: 0.85,
  });

  // Thần Long Mây Mù (Mist Dragon - Ethereal Silver/White Luminous)
  const mistDragonMat = new THREE.MeshStandardMaterial({
    color: '#f1f5f9',
    emissive: '#94a3b8',
    emissiveIntensity: 0.8,
    roughness: 0.25,
    metalness: 0.4,
    transparent: true,
    opacity: 0.8,
  });

  // Hạc Giấy Ma Thuật (Origami Paper Crane)
  const origamiPaperMat = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    emissive: '#c084fc',
    emissiveIntensity: 0.35,
    roughness: 0.4,
    metalness: 0.1,
    side: THREE.DoubleSide,
  });

  // Thần Bút Ma Thuật & Mực Lam (Yan's Enchanted Ink)
  const arcaneInkMat = new THREE.MeshBasicMaterial({
    color: '#06b6d4',
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
  });

  // Ngọc Phiến Ma Pháp của Công Chúa Yue (Princess Yue's Jade Fan)
  const yueFanMat = new THREE.MeshStandardMaterial({
    color: '#34d399',
    emissive: '#10b981',
    emissiveIntensity: 0.85,
    roughness: 0.2,
    metalness: 0.4,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide,
  });

  // Đèn lồng đỏ cung đình (Red Lanterns)
  const redLanternMat = new THREE.MeshStandardMaterial({
    color: '#ef4444',
    emissive: '#dc2626',
    emissiveIntensity: 0.85,
    roughness: 0.35,
  });

  // =========================================================================
  // 2. HOÀNG THÀNH TRUNG TÂM & ĐẠI ĐIỆN HOÀNG GIA (FORBIDDEN IMPERIAL PALACE)
  // =========================================================================
  const palaceGroup = new THREE.Group();

  // Bệ ngọc bạch ngọc 3 tầng (Three-tiered White Jade Terrace)
  const terrace1Geo = new THREE.BoxGeometry(32, 2.5, 26);
  const terrace1 = new THREE.Mesh(terrace1Geo, whiteJadeMat);
  terrace1.position.y = 1.25;
  palaceGroup.add(terrace1);

  const terrace2Geo = new THREE.BoxGeometry(26, 2.2, 20);
  const terrace2 = new THREE.Mesh(terrace2Geo, whiteJadeMat);
  terrace2.position.y = 3.6;
  palaceGroup.add(terrace2);

  const terrace3Geo = new THREE.BoxGeometry(20, 1.8, 16);
  const terrace3 = new THREE.Mesh(terrace3Geo, whiteJadeMat);
  terrace3.position.y = 5.6;
  palaceGroup.add(terrace3);

  // Thềm rồng chầu chính giữa (Imperial Dragon Carved Ramp)
  const rampGeo = new THREE.BoxGeometry(4.5, 5.5, 12);
  rampGeo.rotateX(-Math.PI / 6);
  const rampMesh = new THREE.Mesh(rampGeo, imperialGoldMat);
  rampMesh.position.set(0, 1.5, 13);
  palaceGroup.add(rampMesh);

  // Cột trụ sơn then đỏ tầng 1 (Tier 1 Vermilion Pillars)
  const columnGeo = new THREE.CylinderGeometry(0.55, 0.55, 7.5, 10);
  const colCoords = [
    [-8, 6], [-8, -6], [8, 6], [8, -6],
    [-4, 6], [-4, -6], [4, 6], [4, -6],
    [-8, 0], [8, 0],
  ];
  colCoords.forEach(([cx, cz]) => {
    const col = new THREE.Mesh(columnGeo, vermilionWoodMat);
    col.position.set(cx, 10.2, cz);
    palaceGroup.add(col);
  });

  // Tầng 1: Mái ngói lưu ly cong vút rộng lớn (Tier 1 Curved Jade Eaves)
  const roofTier1Geo = new THREE.ConeGeometry(17, 3.8, 4);
  roofTier1Geo.rotateY(Math.PI / 4);
  const roofTier1 = new THREE.Mesh(roofTier1Geo, jadeRoofMat);
  roofTier1.position.y = 15.5;
  roofTier1.scale.set(1.25, 0.65, 0.95);
  palaceGroup.add(roofTier1);

  // Viền mái hoàng kim tầng 1
  const rimTier1Geo = new THREE.BoxGeometry(21, 0.45, 17);
  const rimTier1 = new THREE.Mesh(rimTier1Geo, imperialGoldMat);
  rimTier1.position.y = 14.1;
  palaceGroup.add(rimTier1);

  // Tầng 2: Cổ lầu & Mái trung tâm
  const colTier2Geo = new THREE.CylinderGeometry(0.45, 0.45, 5, 8);
  const col2Coords = [[-4, 3], [-4, -3], [4, 3], [4, -3]];
  col2Coords.forEach(([cx, cz]) => {
    const col = new THREE.Mesh(colTier2Geo, vermilionWoodMat);
    col.position.set(cx, 17.5, cz);
    palaceGroup.add(col);
  });

  // Mái ngói tầng 2
  const roofTier2Geo = new THREE.ConeGeometry(12, 3.2, 4);
  roofTier2Geo.rotateY(Math.PI / 4);
  const roofTier2 = new THREE.Mesh(roofTier2Geo, jadeRoofMat);
  roofTier2.position.y = 21.0;
  roofTier2.scale.set(1.15, 0.7, 0.9);
  palaceGroup.add(roofTier2);

  // Đỉnh bảo tháp ngọc & Hạt ngọc Thần Long (Dragon Pearl Finial)
  const finialGeo = new THREE.CylinderGeometry(0.2, 0.8, 4, 8);
  const finial = new THREE.Mesh(finialGeo, imperialGoldMat);
  finial.position.y = 24.2;
  palaceGroup.add(finial);

  const dragonPearlGeo = new THREE.SphereGeometry(1.2, 16, 16);
  const pearlMat = new THREE.MeshStandardMaterial({
    color: '#fef08a',
    emissive: '#f59e0b',
    emissiveIntensity: 1.0,
    roughness: 0.1,
  });
  const dragonPearl = new THREE.Mesh(dragonPearlGeo, pearlMat);
  dragonPearl.position.y = 26.5;
  palaceGroup.add(dragonPearl);

  // Vòng hào quang ngọc rồng tỏa sáng
  const pearlHaloGeo = new THREE.RingGeometry(1.5, 2.2, 24);
  pearlHaloGeo.rotateX(Math.PI / 2);
  const pearlHaloMat = new THREE.MeshBasicMaterial({
    color: '#facc15',
    transparent: true,
    opacity: 0.75,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const pearlHalo = new THREE.Mesh(pearlHaloGeo, pearlHaloMat);
  pearlHalo.position.y = 26.5;
  palaceGroup.add(pearlHalo);

  // Đèn lồng đỏ cung đình treo quanh mái hiên (8 Hanging Lanterns)
  const lanterns: THREE.Group[] = [];
  const lanternGeo = new THREE.SphereGeometry(0.75, 8, 8);
  lanternGeo.scale(1, 1.3, 1);
  const tasselGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 6);

  const lanternCoords = [
    [-10, 13.8, 8], [-10, 13.8, -8], [10, 13.8, 8], [10, 13.8, -8],
    [0, 13.8, 8.5], [0, 13.8, -8.5], [-10, 13.8, 0], [10, 13.8, 0]
  ];

  lanternCoords.forEach(([lx, ly, lz], idx) => {
    const lGroup = new THREE.Group();
    lGroup.position.set(lx, ly, lz);
    const lMesh = new THREE.Mesh(lanternGeo, redLanternMat);
    lGroup.add(lMesh);
    const tassel = new THREE.Mesh(tasselGeo, imperialGoldMat);
    tassel.position.y = -1.2;
    lGroup.add(tassel);
    palaceGroup.add(lGroup);
    lanterns.push(lGroup);
    lGroup.userData = { offset: idx * 0.8 };
  });

  rootGroup.add(palaceGroup);

  // =========================================================================
  // 3. VÕ QUÁN SÙNG MINH & ĐÀI KHÍ KÌNH (SÙNG MINH MARTIAL DOJO - QI)
  // =========================================================================
  const dojoGroup = new THREE.Group();
  dojoGroup.position.set(-26, 0, 14);

  // Sân đấu lôi đài bát giác lát đá phiến
  const ringGeo = new THREE.CylinderGeometry(8.5, 9.2, 1.6, 8);
  const ringMat = new THREE.MeshStandardMaterial({
    color: '#475569',
    roughness: 0.8,
    metalness: 0.2,
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.position.y = 0.8;
  dojoGroup.add(ringMesh);

  // Vành đai hoa văn bát quái/quyền pháp hoàng kim
  const ringBorderGeo = new THREE.TorusGeometry(8.8, 0.28, 6, 8);
  ringBorderGeo.rotateX(Math.PI / 2);
  const ringBorder = new THREE.Mesh(ringBorderGeo, imperialGoldMat);
  ringBorder.position.y = 1.65;
  dojoGroup.add(ringBorder);

  // 4 cột đá luyện công & cờ phướn Sùng Minh
  const bannerMat = new THREE.MeshStandardMaterial({
    color: '#dc2626',
    emissive: '#991b1b',
    emissiveIntensity: 0.5,
    side: THREE.DoubleSide,
  });
  const pillarGeo = new THREE.CylinderGeometry(0.4, 0.45, 6.5, 8);
  const bannerGeo = new THREE.PlaneGeometry(1.4, 3.2);

  const pillarAngles = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4];
  pillarAngles.forEach((ang) => {
    const px = Math.cos(ang) * 7.5;
    const pz = Math.sin(ang) * 7.5;
    const pil = new THREE.Mesh(pillarGeo, vermilionWoodMat);
    pil.position.set(px, 4.0, pz);
    dojoGroup.add(pil);

    const banner = new THREE.Mesh(bannerGeo, bannerMat);
    banner.position.set(px, 5.2, pz + 0.5);
    banner.rotation.y = ang;
    dojoGroup.add(banner);
  });

  // Biểu tượng khí kình quyền pháp vàng rực của Qi (Golden Chi Fist & Energy Seal)
  const chiVortexGroup = new THREE.Group();
  chiVortexGroup.position.set(0, 4.5, 0);

  const chiRing1Geo = new THREE.TorusGeometry(3.2, 0.32, 8, 24);
  const chiRingMat = new THREE.MeshStandardMaterial({
    color: '#facc15',
    emissive: '#eab308',
    emissiveIntensity: 0.9,
    roughness: 0.2,
  });
  const chiRing1 = new THREE.Mesh(chiRing1Geo, chiRingMat);
  chiVortexGroup.add(chiRing1);

  const chiRing2 = new THREE.Mesh(chiRing1Geo, chiRingMat);
  chiRing2.rotation.x = Math.PI / 2;
  chiVortexGroup.add(chiRing2);

  const chiCoreGeo = new THREE.OctahedronGeometry(1.6, 1);
  const chiCore = new THREE.Mesh(chiCoreGeo, chiRingMat);
  chiVortexGroup.add(chiCore);

  dojoGroup.add(chiVortexGroup);

  // 3 Cọc gỗ mộc nhân (wooden training dummies)
  const dummyCoords = [[-3, 0, 2], [3, 0, -2], [0, 0, -3.5]];
  const dummyPostGeo = new THREE.CylinderGeometry(0.25, 0.25, 3.2, 8);
  const dummyArmGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.6, 6);
  dummyArmGeo.rotateZ(Math.PI / 2);

  dummyCoords.forEach(([dx, , dz]) => {
    const dMesh = new THREE.Mesh(dummyPostGeo, peachWoodMat);
    dMesh.position.set(dx, 2.8, dz);
    const arm = new THREE.Mesh(dummyArmGeo, peachWoodMat);
    arm.position.y = 0.5;
    dMesh.add(arm);
    dojoGroup.add(dMesh);
  });

  rootGroup.add(dojoGroup);

  // =========================================================================
  // 4. HỌA PHÁI MỘNG SƠN & THẦN BÚT MA THUẬT (MỘNG SƠN ART PAVILION - YAN)
  // =========================================================================
  const artGroup = new THREE.Group();
  artGroup.position.set(25, 0, 12);

  // Thủy đình Mộng Sơn bên hồ (Hexagonal Lakeside Pavilion)
  const pavilionBaseGeo = new THREE.CylinderGeometry(6, 6.5, 1.2, 6);
  const pavilionBase = new THREE.Mesh(pavilionBaseGeo, whiteJadeMat);
  pavilionBase.position.y = 0.6;
  artGroup.add(pavilionBase);

  // 6 cột sơn đỏ
  const pavColGeo = new THREE.CylinderGeometry(0.3, 0.3, 5, 8);
  for (let i = 0; i < 6; i++) {
    const ang = (i / 6) * Math.PI * 2;
    const col = new THREE.Mesh(pavColGeo, vermilionWoodMat);
    col.position.set(Math.cos(ang) * 4.8, 3.5, Math.sin(ang) * 4.8);
    artGroup.add(col);
  }

  // Mái ngọc bích lục giác
  const pavRoofGeo = new THREE.ConeGeometry(7.2, 3.0, 6);
  const pavRoof = new THREE.Mesh(pavRoofGeo, jadeRoofMat);
  pavRoof.position.y = 7.5;
  artGroup.add(pavRoof);

  // Thần Bút Ma Thuật khổng lồ của Yan lơ lửng trên không (Yan's Giant Calligraphy Brush)
  const brushGroup = new THREE.Group();
  brushGroup.position.set(0, 11.5, 0);
  brushGroup.rotation.z = Math.PI / 4.2;

  // Cán bút bằng trúc ngọc phỉ thúy
  const brushHandleGeo = new THREE.CylinderGeometry(0.42, 0.55, 9.5, 12);
  const brushHandle = new THREE.Mesh(brushHandleGeo, jadeRoofMat);
  brushGroup.add(brushHandle);

  // Khâu bọc vàng
  const ferruleGeo = new THREE.CylinderGeometry(0.58, 0.58, 1.2, 12);
  const ferrule = new THREE.Mesh(ferruleGeo, imperialGoldMat);
  ferrule.position.y = -4.8;
  brushGroup.add(ferrule);

  // Đầu ngòi bút lông ngậm mực ma thuật lam ngọc (Cyan Enchanted Brush Tip)
  const bristleGeo = new THREE.ConeGeometry(0.85, 3.8, 12);
  bristleGeo.rotateX(Math.PI);
  const bristleMat = new THREE.MeshStandardMaterial({
    color: '#e0f2fe',
    emissive: '#06b6d4',
    emissiveIntensity: 0.9,
    roughness: 0.4,
  });
  const bristle = new THREE.Mesh(bristleGeo, bristleMat);
  bristle.position.y = -6.8;
  brushGroup.add(bristle);

  artGroup.add(brushGroup);

  // Dải mực ma thuật Sơn Hà Đồ uốn lượn (Flowing Calligraphy Ink Ribbon)
  const inkCurvePoints = [
    new THREE.Vector3(0, 5, 0),
    new THREE.Vector3(3.5, 7.5, 2.5),
    new THREE.Vector3(2.0, 10.5, -3.0),
    new THREE.Vector3(-3.2, 9.2, -2.5),
    new THREE.Vector3(-2.5, 6.0, 3.2),
  ];
  const inkCurve = new THREE.CatmullRomCurve3(inkCurvePoints, true);
  const inkTubeGeo = new THREE.TubeGeometry(inkCurve, 36, 0.35, 8, true);
  const inkRibbon = new THREE.Mesh(inkTubeGeo, arcaneInkMat);
  artGroup.add(inkRibbon);

  // Cuộn tranh Sơn Hà Đồ (Floating Landscape Scroll)
  const scrollGroup = new THREE.Group();
  scrollGroup.position.set(-6, 7.5, -4);
  scrollGroup.rotation.y = Math.PI / 6;

  const scrollPaperGeo = new THREE.PlaneGeometry(6.5, 3.8);
  const scrollPaperMat = new THREE.MeshStandardMaterial({
    color: '#fef3c7',
    roughness: 0.7,
    side: THREE.DoubleSide,
  });
  const scrollPaper = new THREE.Mesh(scrollPaperGeo, scrollPaperMat);
  scrollGroup.add(scrollPaper);

  const scrollRollerGeo = new THREE.CylinderGeometry(0.2, 0.2, 4.4, 8);
  const roller1 = new THREE.Mesh(scrollRollerGeo, imperialGoldMat);
  roller1.position.x = -3.3;
  scrollGroup.add(roller1);
  const roller2 = new THREE.Mesh(scrollRollerGeo, imperialGoldMat);
  roller2.position.x = 3.3;
  scrollGroup.add(roller2);

  artGroup.add(scrollGroup);

  rootGroup.add(artGroup);

  // =========================================================================
  // 5. NGỌC PHIẾN MA PHÁP CỦA THẬP CÔNG CHÚA YUE (PRINCESS YUE'S JADE FAN)
  // =========================================================================
  const yueFanSystem = new THREE.Group();
  yueFanSystem.position.set(0, 18.5, 14);

  // Nan quạt phỉ thúy xòe rộng (Jade Fan Ribs)
  const fanGroup = new THREE.Group();
  const ribCount = 9;
  const ribGeo = new THREE.BoxGeometry(0.4, 5.5, 0.12);

  for (let i = 0; i < ribCount; i++) {
    const rot = -Math.PI / 3 + (i / (ribCount - 1)) * ((2 * Math.PI) / 3);
    const rib = new THREE.Mesh(ribGeo, yueFanMat);
    rib.position.set(Math.sin(rot) * 2.5, Math.cos(rot) * 2.5, 0);
    rib.rotation.z = -rot;
    fanGroup.add(rib);
  }

  // Khớp quạt bằng vàng
  const fanPivotGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.4, 12);
  fanPivotGeo.rotateX(Math.PI / 2);
  const fanPivot = new THREE.Mesh(fanPivotGeo, imperialGoldMat);
  fanGroup.add(fanPivot);

  // 4 Phiến đao khí ngọc bích xoay vần hộ vệ (Orbiting Jade Wind Blades)
  const bladeCount = 4;
  const blades: THREE.Mesh[] = [];
  const bladeGeo = new THREE.ConeGeometry(0.65, 3.2, 4);
  bladeGeo.rotateZ(Math.PI / 2);

  for (let i = 0; i < bladeCount; i++) {
    const blade = new THREE.Mesh(bladeGeo, yueFanMat);
    fanGroup.add(blade);
    blades.push(blade);
  }

  yueFanSystem.add(fanGroup);
  rootGroup.add(yueFanSystem);

  // =========================================================================
  // 6. SONG LONG THẦN THOẠI HỘ QUỐC (MIST DRAGON & RAIN DRAGON SPIRITS)
  // =========================================================================
  // Hàm tạo rồng phương Đông uốn lượn (Eastern Serpentine Dragon)
  function createEasternDragon(material: THREE.Material) {
    const dragonGroup = new THREE.Group();
    const segmentCount = 14;
    const segments: THREE.Mesh[] = [];

    const segGeo = new THREE.SphereGeometry(1.1, 10, 8);
    segGeo.scale(1.2, 0.9, 0.9);

    for (let i = 0; i < segmentCount; i++) {
      const taper = 1.0 - (i / segmentCount) * 0.55;
      const seg = new THREE.Mesh(segGeo, material);
      seg.scale.setScalar(taper);
      dragonGroup.add(seg);
      segments.push(seg);
    }

    // Đầu rồng phương Đông (Dragon Head)
    const headGroup = new THREE.Group();
    const snoutGeo = new THREE.BoxGeometry(1.6, 1.2, 2.4);
    const snout = new THREE.Mesh(snoutGeo, material);
    headGroup.add(snout);

    // Cặp sừng rồng (Dragon Horns)
    const hornGeo = new THREE.ConeGeometry(0.3, 2.2, 6);
    hornGeo.rotateX(-Math.PI / 3);
    const hornL = new THREE.Mesh(hornGeo, imperialGoldMat);
    hornL.position.set(-0.6, 0.8, -0.6);
    headGroup.add(hornL);

    const hornR = new THREE.Mesh(hornGeo, imperialGoldMat);
    hornR.position.set(0.6, 0.8, -0.6);
    headGroup.add(hornR);

    // Cặp râu rồng dài (Whiskers)
    const whiskerGeo = new THREE.CylinderGeometry(0.06, 0.02, 3.2, 4);
    whiskerGeo.rotateZ(Math.PI / 3);
    const wL = new THREE.Mesh(whiskerGeo, imperialGoldMat);
    wL.position.set(-1.2, -0.2, 0.8);
    headGroup.add(wL);

    const wR = new THREE.Mesh(whiskerGeo, imperialGoldMat);
    wR.rotation.z = -Math.PI / 3;
    wR.position.set(1.2, -0.2, 0.8);
    headGroup.add(wR);

    dragonGroup.add(headGroup);

    return { dragonGroup, segments, headGroup };
  }

  // 1. Thần Long Mưa Thuần (Rain Dragon - Lam Ngọc, bay lượn ban mưa xuân)
  const rainDragon = createEasternDragon(rainDragonMat);
  rootGroup.add(rainDragon.dragonGroup);

  // 2. Thần Long Mây Mù (Mist Dragon - Bạch Ngân, uốn lượn tạo kết giới sương mù)
  const mistDragon = createEasternDragon(mistDragonMat);
  rootGroup.add(mistDragon.dragonGroup);

  // Kết Giới Thần Long Vô Hình (Invisible Celestial Barrier Ring)
  const barrierRingGeo = new THREE.TorusGeometry(36, 0.75, 8, 48);
  barrierRingGeo.rotateX(Math.PI / 2);
  const barrierRingMat = new THREE.MeshBasicMaterial({
    color: '#38bdf8',
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  });
  const barrierRing = new THREE.Mesh(barrierRingGeo, barrierRingMat);
  barrierRing.position.y = 8;
  rootGroup.add(barrierRing);

  // =========================================================================
  // 7. HẠC GIẤY MA THUẬT CỦA HỌA PHÁI MỘNG SƠN (ORIGAMI PAPER CRANES)
  // =========================================================================
  const cranes: Array<{
    group: THREE.Group;
    wingL: THREE.Mesh;
    wingR: THREE.Mesh;
    radius: number;
    speed: number;
    height: number;
    phase: number;
  }> = [];

  function createOrigamiCrane() {
    const cGroup = new THREE.Group();

    // Thân hạc giấy đa giác góc cạnh
    const bodyGeo = new THREE.ConeGeometry(0.45, 1.6, 4);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, origamiPaperMat);
    cGroup.add(body);

    // Cổ & Đầu hạc vươn dài
    const neckGeo = new THREE.ConeGeometry(0.18, 1.4, 4);
    neckGeo.rotateX(-Math.PI / 3);
    const neck = new THREE.Mesh(neckGeo, origamiPaperMat);
    neck.position.set(0, 0.6, 0.7);
    cGroup.add(neck);

    // Đuôi hạc giấy nhọn
    const tailGeo = new THREE.ConeGeometry(0.25, 1.2, 4);
    tailGeo.rotateX(Math.PI / 3);
    const tail = new THREE.Mesh(tailGeo, origamiPaperMat);
    tail.position.set(0, 0.4, -0.8);
    cGroup.add(tail);

    // Cánh trái (Left Wing)
    const wingGeo = new THREE.BufferGeometry();
    const wingVertices = new Float32Array([
      0, 0, 0.4,
      -1.8, 0, 0,
      0, 0, -0.6,
    ]);
    wingGeo.setAttribute('position', new THREE.BufferAttribute(wingVertices, 3));
    wingGeo.computeVertexNormals();

    const wingL = new THREE.Mesh(wingGeo, origamiPaperMat);
    wingL.position.set(-0.2, 0.2, 0);
    cGroup.add(wingL);

    // Cánh phải (Right Wing)
    const wingRGeo = new THREE.BufferGeometry();
    const wingRVertices = new Float32Array([
      0, 0, 0.4,
      1.8, 0, 0,
      0, 0, -0.6,
    ]);
    wingRGeo.setAttribute('position', new THREE.BufferAttribute(wingRVertices, 3));
    wingRGeo.computeVertexNormals();

    const wingR = new THREE.Mesh(wingRGeo, origamiPaperMat);
    wingR.position.set(0.2, 0.2, 0);
    cGroup.add(wingR);

    return { cGroup, wingL, wingR };
  }

  // Khởi tạo 4 chú hạc giấy ma pháp bay tuần tra
  const craneConfigs = [
    { radius: 18, speed: 0.8, height: 16, phase: 0 },
    { radius: 24, speed: 0.65, height: 22, phase: Math.PI / 2 },
    { radius: 14, speed: 1.0, height: 14, phase: Math.PI },
    { radius: 28, speed: 0.55, height: 26, phase: (3 * Math.PI) / 2 },
  ];

  craneConfigs.forEach((cfg) => {
    const { cGroup, wingL, wingR } = createOrigamiCrane();
    rootGroup.add(cGroup);
    cranes.push({
      group: cGroup,
      wingL,
      wingR,
      radius: cfg.radius,
      speed: cfg.speed,
      height: cfg.height,
      phase: cfg.phase,
    });
  });

  // =========================================================================
  // 8. SƠN THỦY HỮU TÌNH: HỒ SEN, CẦU BẠCH NGỌC & RỪNG ĐÀO (PEACH BLOSSOMS)
  // =========================================================================
  // Mặt hồ sen ngọc bích uốn lượn trước cung đình
  const lakeGeo = new THREE.CylinderGeometry(14, 15, 0.6, 16);
  const lake = new THREE.Mesh(lakeGeo, emeraldWaterMat);
  lake.position.set(0, 0.3, 24);
  lake.scale.set(1.6, 1, 0.85);
  rootGroup.add(lake);

  // Cầu vòm bạch ngọc bắc qua hồ (White Jade Moon Bridge)
  const bridgeGeo = new THREE.TorusGeometry(5.5, 0.85, 8, 16, Math.PI);
  bridgeGeo.rotateX(Math.PI / 2);
  const bridge = new THREE.Mesh(bridgeGeo, whiteJadeMat);
  bridge.position.set(0, 1.2, 19);
  bridge.scale.set(0.8, 1.4, 0.9);
  rootGroup.add(bridge);

  // Lá sen & Hoa sen hồng trên mặt hồ
  const lotusPadGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.06, 8);
  const padMat = new THREE.MeshStandardMaterial({ color: '#10b981', roughness: 0.8 });
  const flowerGeo = new THREE.ConeGeometry(0.35, 0.5, 6);

  const lotusPositions = [
    [-6, 0.45, 23], [7, 0.45, 25], [-4, 0.45, 27],
    [5, 0.45, 21], [0, 0.45, 28], [-8, 0.45, 25]
  ];

  lotusPositions.forEach(([lx, ly, lz]) => {
    const pad = new THREE.Mesh(lotusPadGeo, padMat);
    pad.position.set(lx, ly, lz);
    const flw = new THREE.Mesh(flowerGeo, lotusPinkMat);
    flw.position.y = 0.25;
    pad.add(flw);
    rootGroup.add(pad);
  });

  // 12 Cây hoa đào cổ thụ hồng thắm (Peach Blossom Trees)
  const treeCoords = [
    [-18, 0, 8], [-22, 0, 2], [-28, 0, -8],
    [18, 0, 6], [22, 0, 0], [26, 0, -6],
    [-14, 0, 28], [14, 0, 27], [-8, 0, 32], [8, 0, 31],
    [-2, 0, -16], [4, 0, -18]
  ];

  const trunkGeo = new THREE.CylinderGeometry(0.35, 0.65, 4.5, 8);
  const canopyGeo = new THREE.SphereGeometry(2.4, 8, 8);
  canopyGeo.scale(1.3, 0.85, 1.2);

  treeCoords.forEach(([tx, ty, tz], idx) => {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(tx, ty, tz);

    const trunk = new THREE.Mesh(trunkGeo, peachWoodMat);
    trunk.position.y = 2.25;
    trunk.rotation.z = (Math.sin(idx) * 0.18);
    treeGroup.add(trunk);

    const canopy = new THREE.Mesh(canopyGeo, peachBlossomMat);
    canopy.position.set(0, 4.2, 0);
    treeGroup.add(canopy);

    rootGroup.add(treeGroup);
  });

  // =========================================================================
  // 9. HIỆN TƯỢNG MƯA XUÂN PHÙN & SƯƠNG KHÓI VĨNH CỬU (SPRING RAIN & MIST)
  // =========================================================================
  // Hệ thống hạt mưa xuân nhẹ rơi theo đường xiên (Spring Rain Drizzle)
  const rainCount = 130;
  const rainGeo = new THREE.BufferGeometry();
  const rainPositions = new Float32Array(rainCount * 3);
  const rainVelocities = new Float32Array(rainCount);

  for (let i = 0; i < rainCount; i++) {
    rainPositions[i * 3 + 0] = (Math.random() - 0.5) * 70;
    rainPositions[i * 3 + 1] = 5 + Math.random() * 35;
    rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    rainVelocities[i] = 12 + Math.random() * 10;
  }

  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
  const rainMat = new THREE.PointsMaterial({
    color: '#93c5fd',
    size: 0.45,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
  });
  const rainPoints = new THREE.Points(rainGeo, rainMat);
  rootGroup.add(rainPoints);

  // 3 Lớp mây sương mờ ảo trôi bồng bềnh ven sườn núi (Mountain Mist Layers)
  const mistPlanes: THREE.Mesh[] = [];
  const mistGeo = new THREE.PlaneGeometry(38, 12);
  mistGeo.rotateX(-Math.PI / 2);
  const mistMat = new THREE.MeshBasicMaterial({
    color: '#f1f5f9',
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });

  for (let i = 0; i < 3; i++) {
    const mist = new THREE.Mesh(mistGeo, mistMat);
    mist.position.set((i - 1) * 14, 6 + i * 4, -8 + i * 10);
    rootGroup.add(mist);
    mistPlanes.push(mist);
  }

  // =========================================================================
  // 10. ANIMATION UPDATE LOOP (60 FPS)
  // =========================================================================
  return {
    group: rootGroup,
    update: (delta: number, elapsed: number) => {
      // 1. Nhịp đung đưa của đèn lồng đỏ hoàng cung
      lanterns.forEach((l) => {
        const off = l.userData.offset || 0;
        l.rotation.z = Math.sin(elapsed * 2.2 + off) * 0.14;
        l.rotation.x = Math.cos(elapsed * 1.8 + off) * 0.08;
      });

      // 2. Hào quang Long Châu trên đỉnh đại điện nhấp nhô
      pearlHalo.rotation.z += delta * 0.8;
      const pearlPulse = 0.8 + Math.sin(elapsed * 3.0) * 0.2;
      pearlMat.emissiveIntensity = pearlPulse;

      // 3. Võ quán Sùng Minh: Ấn chú khí kình của Qi xoay tròn & co giãn
      chiRing1.rotation.z += delta * 1.6;
      chiRing2.rotation.y += delta * 1.2;
      chiCore.rotation.x += delta * 2.0;
      const chiScale = 1.0 + Math.sin(elapsed * 3.2) * 0.16;
      chiVortexGroup.scale.setScalar(chiScale);

      // 4. Họa phái Mộng Sơn: Thần Bút Ma Thuật uốn lượn thư pháp & dải mực phát sáng
      brushGroup.position.y = 11.5 + Math.sin(elapsed * 1.6) * 0.8;
      brushGroup.rotation.x = Math.sin(elapsed * 1.4) * 0.2;
      brushGroup.rotation.y = Math.cos(elapsed * 1.8) * 0.35;
      inkRibbon.rotation.y += delta * 0.6;
      scrollGroup.position.y = 7.5 + Math.sin(elapsed * 1.2 + 1) * 0.4;

      // 5. Thập Công Chúa Yue: Ngọc Phiến xoay tròn & phiến đao khí lướt gió
      fanGroup.rotation.y += delta * 1.1;
      fanGroup.position.y = Math.sin(elapsed * 2.0) * 0.5;
      for (let i = 0; i < bladeCount; i++) {
        const angle = (i / bladeCount) * Math.PI * 2 + elapsed * 2.5;
        const rad = 4.2;
        blades[i].position.set(Math.cos(angle) * rad, Math.sin(angle * 2) * 0.6, Math.sin(angle) * rad);
        blades[i].rotation.y = -angle;
      }

      // 6. Thần Long Mưa Thuần (Rain Dragon) uốn lượn trên cao
      const rainAngle = elapsed * 0.45;
      const rainRadius = 26;
      const rHeadX = Math.cos(rainAngle) * rainRadius;
      const rHeadZ = Math.sin(rainAngle) * (rainRadius * 0.85);
      const rHeadY = 24 + Math.sin(elapsed * 1.2) * 4;
      rainDragon.headGroup.position.set(rHeadX, rHeadY, rHeadZ);
      rainDragon.headGroup.rotation.y = -rainAngle - Math.PI / 2;

      for (let i = 0; i < rainDragon.segments.length; i++) {
        const segDelay = (i + 1) * 0.16;
        const sAngle = rainAngle - segDelay;
        const sX = Math.cos(sAngle) * (rainRadius - i * 0.3);
        const sZ = Math.sin(sAngle) * (rainRadius * 0.85 - i * 0.2);
        const sY = 24 + Math.sin((elapsed - segDelay) * 1.2 + i * 0.4) * 4;
        rainDragon.segments[i].position.set(sX, sY, sZ);
      }

      // 7. Thần Long Mây Mù (Mist Dragon) uốn lượn ngược hướng qua rặng núi
      const mistAngle = -elapsed * 0.38 + Math.PI;
      const mistRadius = 22;
      const mHeadX = Math.cos(mistAngle) * mistRadius;
      const mHeadZ = Math.sin(mistAngle) * (mistRadius * 0.9);
      const mHeadY = 16 + Math.cos(elapsed * 1.1) * 3;
      mistDragon.headGroup.position.set(mHeadX, mHeadY, mHeadZ);
      mistDragon.headGroup.rotation.y = -mistAngle - Math.PI / 2;

      for (let i = 0; i < mistDragon.segments.length; i++) {
        const segDelay = (i + 1) * 0.16;
        const sAngle = mistAngle + segDelay;
        const sX = Math.cos(sAngle) * (mistRadius - i * 0.2);
        const sZ = Math.sin(sAngle) * (mistRadius * 0.9 - i * 0.15);
        const sY = 16 + Math.cos((elapsed - segDelay) * 1.1 + i * 0.4) * 3;
        mistDragon.segments[i].position.set(sX, sY, sZ);
      }

      // 8. Kết giới vô hình Thần Long nhấp nhô
      barrierRing.scale.setScalar(1 + Math.sin(elapsed * 1.5) * 0.05);
      barrierRingMat.opacity = 0.25 + Math.sin(elapsed * 2.0) * 0.15;

      // 9. Hạc Giấy Ma Thuật đập cánh & bay lượn
      cranes.forEach((crane) => {
        const cAng = elapsed * crane.speed + crane.phase;
        const cx = Math.cos(cAng) * crane.radius;
        const cz = Math.sin(cAng) * (crane.radius * 0.75);
        const cy = crane.height + Math.sin(elapsed * 2.5 + crane.phase) * 2.2;
        crane.group.position.set(cx, cy, cz);
        crane.group.rotation.y = -cAng - Math.PI / 2;

        // Vỗ cánh hạc giấy góc cạnh
        const flap = Math.sin(elapsed * 5.5 + crane.phase) * 0.55;
        crane.wingL.rotation.z = flap;
        crane.wingR.rotation.z = -flap;
      });

      // 10. Mưa xuân phùn rơi theo đường xiên gió
      const rainPos = rainGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < rainCount; i++) {
        rainPos[i * 3 + 1] -= rainVelocities[i] * delta;
        rainPos[i * 3 + 0] += delta * 1.5; // gió thổi nhẹ
        if (rainPos[i * 3 + 1] < 0.5) {
          rainPos[i * 3 + 1] = 36;
          rainPos[i * 3 + 0] = (Math.random() - 0.5) * 70;
        }
      }
      rainGeo.attributes.position.needsUpdate = true;

      // 11. Các tầng mây sương trôi nhẹ nhàng
      mistPlanes.forEach((mist, idx) => {
        mist.position.x += delta * (0.8 + idx * 0.4);
        if (mist.position.x > 32) mist.position.x = -32;
      });
    },
  };
}
