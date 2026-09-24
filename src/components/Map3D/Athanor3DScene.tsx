import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { ATHANOR_LANDMARKS, MAJOR_FACTIONS_MACRO } from '../../data/landmarksData';
import type { Landmark, MajorFactionMacro } from '../../data/landmarksData';
import { generateAthanorHeightmap } from './AthanorHeightmap';
import { createVedaTemples3D, type VedaTemplesSystem } from './VedaTemples3D';
import { createMistIsland3D, type MistIslandSystem } from './MistIsland3D';
import { createSeaBreezeTown3D, type SeaBreezeTownSystem } from './SeaBreezeTown3D';
import { createCaranoAcademy3D, type CaranoAcademySystem } from './CaranoAcademy3D';
import { createOkkaKingdom3D, type OkkaKingdomSystem } from './OkkaKingdom3D';
import { createNormanCastle3D, type NormanCastleSystem } from './NormanCastle3D';
import { createLokheimAbyss3D, type LokheimAbyssSystem } from './LokheimAbyss3D';
import { createSpringOfLight3D, type SpringOfLightSystem } from './SpringOfLight3D';
import { createFreeFederation3D, type FreeFederationSystem } from './FreeFederation3D';
import { createDragonKingdom3D, type DragonKingdomSystem } from './DragonKingdom3D';
import { createAfataForest3D, type AfataForestSystem } from './AfataForest3D';
import type { MapFocusTarget } from './AthanorCanvas';
import type { FactionId } from '../../types/athanor';

export type PanDirection = 'left' | 'right' | 'up' | 'down' | 'reset';

export interface PanTrigger {
  dir: PanDirection;
  count: number;
}

export interface ZoomTrigger {
  type: 'in' | 'out';
  count: number;
}

interface Athanor3DSceneProps {
  zoomMode: 'macro' | 'micro';
  setZoomMode: (mode: 'macro' | 'micro') => void;
  selectedFactionId?: FactionId | null;
  focusTarget?: MapFocusTarget | null;
  onSelectLandmark: (landmark: Landmark) => void;
  onSelectFactionMacro: (macro: MajorFactionMacro) => void;
  isCinematicTilt: boolean;
  interactionMode?: 'pan' | 'orbit';
  panTrigger?: PanTrigger | null;
  zoomTrigger?: ZoomTrigger | null;
  showLabels?: boolean;
}

// Chuyển đổi tọa độ phần trăm (0..100) của bản đồ 2D sang không gian 3D World (World: -300..300, -168.75..168.75)
const MAP_WIDTH_3D = 600;
const MAP_HEIGHT_3D = 337.5; // Tỷ lệ chuẩn 16:9

export function mapPercentTo3D(pctX: number, pctY: number, heightOffset: number = 0): THREE.Vector3 {
  const x = (pctX / 100 - 0.5) * MAP_WIDTH_3D;
  const z = (pctY / 100 - 0.5) * MAP_HEIGHT_3D;
  return new THREE.Vector3(x, heightOffset, z);
}

export const Athanor3DScene: React.FC<Athanor3DSceneProps> = ({
  zoomMode,
  setZoomMode,
  selectedFactionId,
  focusTarget,
  onSelectLandmark,
  onSelectFactionMacro,
  isCinematicTilt,
  interactionMode = 'pan',
  panTrigger = null,
  zoomTrigger = null,
  showLabels = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const showLabelsRef = useRef(showLabels);
  showLabelsRef.current = showLabels;
  const [hoveredLandmark, setHoveredLandmark] = useState<Landmark | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Tọa độ màn hình của các pin địa danh & đại thế lực (cập nhật mỗi frame)
  const [projectedPins, setProjectedPins] = useState<
    Array<{
      landmark: Landmark;
      screenX: number;
      screenY: number;
      visible: boolean;
    }>
  >([]);

  const [projectedMacroPins, setProjectedMacroPins] = useState<
    Array<{
      macro: MajorFactionMacro;
      screenX: number;
      screenY: number;
      visible: boolean;
    }>
  >([]);

  // Three.js instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const terrainMeshRef = useRef<THREE.Mesh | null>(null);
  const oceanMeshRef = useRef<THREE.Mesh | null>(null);

  // Tham chiếu các vật thể hoạt họa
  const vedaTemplesRef = useRef<VedaTemplesSystem | null>(null);
  const mistIslandRef = useRef<MistIslandSystem | null>(null);
  const seaBreezeTownRef = useRef<SeaBreezeTownSystem | null>(null);
  const caranoAcademyRef = useRef<CaranoAcademySystem | null>(null);
  const okkaKingdomRef = useRef<OkkaKingdomSystem | null>(null);
  const normanCastleRef = useRef<NormanCastleSystem | null>(null);
  const lokheimAbyssRef = useRef<LokheimAbyssSystem | null>(null);
  const springOfLightRef = useRef<SpringOfLightSystem | null>(null);
  const freeFederationRef = useRef<FreeFederationSystem | null>(null);
  const dragonKingdomRef = useRef<DragonKingdomSystem | null>(null);
  const afataForestRef = useRef<AfataForestSystem | null>(null);
  const worldTreeRef = useRef<THREE.Group | null>(null);
  const barrierGroupRef = useRef<THREE.Group | null>(null);
  const beaconMeshRef = useRef<THREE.Group | null>(null);

  // Camera animation target (dùng cho lerp tweening mượt mà)
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 360, 240));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  const spherical = useRef({ radius: 420, theta: 0, phi: Math.PI / 4.2 }); // Góc tọa độ cầu

  // Khởi tạo Three.js WebGL Scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. SCENE VỚI SƯƠNG MÙ KHÍ QUYỂN BAN NGÀY (DAYLIGHT ATMOSPHERE)
    const scene = new THREE.Scene();
    const daySkyColor = new THREE.Color('#9dd2f6'); // Xanh da trời quang đãng ban ngày
    scene.background = daySkyColor;
    scene.fog = new THREE.FogExp2('#bce0fc', 0.00062); // Sương mù viễn cảnh ban ngày nhẹ nhàng
    sceneRef.current = scene;

    // 2. CAMERA QUAN SÁT
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 4500);
    camera.position.set(0, 360, 240);
    cameraRef.current = camera;

    // 3. WEBGL RENDERER HIỆU NĂNG CAO
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. HỆ THỐNG ÁNH SÁNG MÔ PHỎNG MẶT TRỜI BAN NGÀY ATHANOR
    // Ánh sáng môi trường quang đãng chan hòa
    const ambientLight = new THREE.AmbientLight('#e0f2fe', 1.15);
    scene.add(ambientLight);

    // Ánh nắng mặt trời buổi sáng / trưa rực rỡ, ấm áp
    const sunLight = new THREE.DirectionalLight('#fff9e6', 2.35);
    sunLight.position.set(260, 480, 220);
    scene.add(sunLight);

    // Nguồn sáng phụ hắt nhẹ từ góc đối diện (fill light) để các thung lũng & sườn núi rõ ràng
    const sunFillLight = new THREE.DirectionalLight('#bae6fd', 0.7);
    sunFillLight.position.set(-220, 320, -180);
    scene.add(sunFillLight);

    // Ánh sáng vòm trời (vòm trời trắng xanh, mặt đất phản chiếu xanh biếc)
    const hemiLight = new THREE.HemisphereLight('#ffffff', '#7dd3fc', 0.85);
    scene.add(hemiLight);

    // 5. ĐẠI DƯƠNG VÔ CỰC BAN NGÀY (INFINITE AZURE DAYLIGHT OCEAN)
    const oceanGeo = new THREE.PlaneGeometry(3600, 3600, 64, 64);
    oceanGeo.rotateX(-Math.PI / 2);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1b72a6'), // Biển xanh lam ngọc lấp lánh ban ngày
      roughness: 0.16,
      metalness: 0.22,
      transparent: true,
      opacity: 0.92,
    });
    const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    oceanMesh.position.y = 0.2; // Ngay dưới mặt đất bờ biển
    scene.add(oceanMesh);
    oceanMeshRef.current = oceanMesh;

    // 6. DỰNG LƯỚI ĐỊA HÌNH 3D (HEIGHTMAP TERRAIN MESH)
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/athanor_terrain.jpg', (diffuseTexture) => {
      diffuseTexture.colorSpace = THREE.SRGBColorSpace;

      const segments = 256;
      const terrainGeo = new THREE.PlaneGeometry(
        MAP_WIDTH_3D,
        MAP_HEIGHT_3D,
        segments,
        segments
      );
      terrainGeo.rotateX(-Math.PI / 2);

      // Tải và áp dụng bản đồ độ cao
      generateAthanorHeightmap('/athanor_terrain.jpg', segments + 1, segments + 1, 38).then(
        (heightmap) => {
          const pos = terrainGeo.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            // Tọa độ chuẩn hóa u, v (0..1)
            const x = pos.getX(i);
            const z = pos.getZ(i);
            const u = Math.min(1, Math.max(0, x / MAP_WIDTH_3D + 0.5));
            const v = Math.min(1, Math.max(0, z / MAP_HEIGHT_3D + 0.5));

            const gridX = Math.floor(u * segments);
            const gridY = Math.floor(v * segments);
            const elevIdx = gridY * (segments + 1) + gridX;
            const elevation = heightmap.elevations[elevIdx] || 0;

            pos.setY(i, elevation);
          }
          terrainGeo.computeVertexNormals();

          const terrainMat = new THREE.MeshStandardMaterial({
            map: diffuseTexture,
            roughness: 0.68,
            metalness: 0.04,
            flatShading: false,
          });

          const terrain = new THREE.Mesh(terrainGeo, terrainMat);
          terrain.position.y = 0;
          scene.add(terrain);
          terrainMeshRef.current = terrain;
        }
      );
    });

    // 7. CỤM KIẾN TRÚC 3D: TOÀN BỘ 6 ĐIỆN THỜ THÁP QUANG MINH (VEDA SANCTUARIES)
    const vedaTemples = createVedaTemples3D();
    scene.add(vedaTemples.group);
    vedaTemplesRef.current = vedaTemples;
    const vedaPos = mapPercentTo3D(44.5, 31.8, 35); // Đỉnh Orsen Giáo Đình Trung Ương

    // 7.1 CỤM KIẾN TRÚC & SINH THÁI 3D: ĐẢO SƯƠNG MÙ (MIST ISLAND) — PHÍA NAM BIỂN ÁNH SÁNG
    const mistIsland = createMistIsland3D();
    scene.add(mistIsland.group);
    mistIslandRef.current = mistIsland;

    // 7.2 CỤM KIẾN TRÚC & CẢNG BIỂN 3D: HẢI LINH TRẤN (SEA BREEZE TOWN) — DUYÊN HẢI ĐÔNG NAM NORMAN
    const seaBreezeTown = createSeaBreezeTown3D();
    scene.add(seaBreezeTown.group);
    seaBreezeTownRef.current = seaBreezeTown;

    // 7.3 CỤM KIẾN TRÚC & PHÁO ĐÀI MA THUẬT 3D: HỌC VIỆN CARANO (CARANO MAGIC ACADEMY) — SÔNG LOSARTH
    const caranoAcademy = createCaranoAcademy3D();
    scene.add(caranoAcademy.group);
    caranoAcademyRef.current = caranoAcademy;

    // 7.4 CỤM KIẾN TRÚC & THÀNH TRÌ 3D: VƯƠNG QUỐC OKKA (OKKA KINGDOM) — ĐỒNG BẰNG ÁNH TRĂNG & RỪNG ELBORNE
    const okkaKingdom = createOkkaKingdom3D();
    scene.add(okkaKingdom.group);
    okkaKingdomRef.current = okkaKingdom;

    // 7.5 CỤM KIẾN TRÚC & ĐẠI ĐIỆN 3D: THÀNH KHỞI NGUYÊN (NORMAN CASTLE) — THỦ ĐÔ VƯƠNG QUỐC NORMAN
    const normanCastle = createNormanCastle3D();
    scene.add(normanCastle.group);
    normanCastleRef.current = normanCastle;

    // 7.6 CỤM KIẾN TRÚC & NHAM THẠCH 3D: VỰC HỖN MANG (THE ABYSS / LOKHEIM) — NGAI VÀNG VOLKATH
    const lokheimAbyss = createLokheimAbyss3D();
    scene.add(lokheimAbyss.group);
    lokheimAbyssRef.current = lokheimAbyss;

    // 7.7 CỤM THIÊN NHIÊN & NƯỚC THIÊNG 3D: SUỐI NGUỒN ÁNH SÁNG (SPRING OF LIGHT) — RỪNG AFATA
    const springOfLight = createSpringOfLight3D();
    scene.add(springOfLight.group);
    springOfLightRef.current = springOfLight;

    // 7.8 CỤM KIẾN TRÚC & CÔNG NGHIỆP 3D: TÂN LIÊN HIỆP (FREE FEDERATION / STEEL CITY) — ĐÔNG NAM ATHANOR
    const freeFederation = createFreeFederation3D();
    scene.add(freeFederation.group);
    freeFederationRef.current = freeFederation;

    // 7.9 CỤM KIẾN TRÚC HOÀNG CUNG & THẦN LONG 3D: VƯƠNG QUỐC RỒNG (DRAGON KINGDOM / LONG CHI QUỐC) — ĐÔNG ATHANOR
    const dragonKingdom = createDragonKingdom3D();
    scene.add(dragonKingdom.group);
    dragonKingdomRef.current = dragonKingdom;

    // 7.10 HỆ SINH THÁI 3D RỪNG NGUYÊN SINH (AFATA — LỤC ĐỊA ELBORN)
    // Tái hiện 5 đại địa danh: Rừng Verno, Sơn cốc Verno, Sông Elda, Vách núi Elborn, Sơn mạch Verno
    const afataForest = createAfataForest3D();
    scene.add(afataForest.group);
    afataForestRef.current = afataForest;

    // 8. CÔNG TRÌNH 3D: CÂY THẾ GIỚI PHÁT SÁNG (AFATA — RỪNG NGUYÊN SINH)
    const treeGroup = new THREE.Group();
    const treePos = mapPercentTo3D(13.3, 50.2, 12);
    treeGroup.position.copy(treePos);

    // Thân cây xoắn tinh thể
    const trunkGeo = new THREE.CylinderGeometry(1.6, 3.2, 18, 12);
    const trunkMat = new THREE.MeshStandardMaterial({
      color: '#064e3b',
      emissive: '#10b981',
      emissiveIntensity: 0.35,
    });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 9;
    treeGroup.add(trunk);

    // Tán lá cánh hồ điệp ngọc bích phát sáng
    const canopyGeo = new THREE.SphereGeometry(8.5, 16, 12);
    canopyGeo.scale(1.8, 0.65, 1.4);
    const canopyMat = new THREE.MeshStandardMaterial({
      color: '#67e8f9',
      emissive: '#06b6d4',
      emissiveIntensity: 0.85,
      transparent: true,
      opacity: 0.82,
    });
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.y = 17;
    treeGroup.add(canopy);

    // Các đốm linh hồn phát sáng bay quanh cây
    const spiritGeo = new THREE.SphereGeometry(0.8, 8, 8);
    const spiritMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < 6; i++) {
      const sp = new THREE.Mesh(spiritGeo, spiritMat);
      const angle = (i / 6) * Math.PI * 2;
      sp.position.set(Math.cos(angle) * 12, 12 + (i % 3) * 4, Math.sin(angle) * 12);
      treeGroup.add(sp);
    }
    scene.add(treeGroup);
    worldTreeRef.current = treeGroup;

    // 9. MÀN PHÉP THUẬT TRẤN GIỮ 3D (CARANO ARCANE BARRIER)
    const barrierGroup = new THREE.Group();
    // Tạo đường cong vòm kết giới dọc ranh giới Norman và Lokheim
    const curvePoints = [
      mapPercentTo3D(89.0, 48.0, 5),
      mapPercentTo3D(87.5, 60.0, 8),
      mapPercentTo3D(86.5, 75.0, 10),
      mapPercentTo3D(84.0, 92.0, 6),
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const wallGeo = new THREE.TubeGeometry(curve, 32, 2.5, 8, false);
    const wallMat = new THREE.MeshStandardMaterial({
      color: '#38bdf8',
      emissive: '#0284c7',
      emissiveIntensity: 0.75,
      transparent: true,
      opacity: 0.75,
      wireframe: true,
    });
    const barrierWall = new THREE.Mesh(wallGeo, wallMat);
    barrierGroup.add(barrierWall);

    // Vòm hào quang che chắn phía trên Vực Hỗn Mang
    const domeGeo = new THREE.SphereGeometry(45, 24, 16, 0, Math.PI);
    domeGeo.rotateZ(Math.PI / 2);
    domeGeo.scale(1.2, 0.45, 1.8);
    const domeMat = new THREE.MeshBasicMaterial({
      color: '#38bdf8',
      transparent: true,
      opacity: 0.18,
      wireframe: true,
      blending: THREE.AdditiveBlending,
    });
    const dome = new THREE.Mesh(domeGeo, domeMat);
    dome.position.copy(mapPercentTo3D(93.0, 70.0, 4));
    barrierGroup.add(dome);

    scene.add(barrierGroup);
    barrierGroupRef.current = barrierGroup;

    // 10. RADAR BEACON CHIẾN TRƯỜNG 3D
    const beaconGroup = new THREE.Group();
    const ringBeaconGeo = new THREE.RingGeometry(3, 3.8, 32);
    ringBeaconGeo.rotateX(-Math.PI / 2);
    const ringBeaconMat = new THREE.MeshBasicMaterial({
      color: '#fef08a',
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const beaconRing1 = new THREE.Mesh(ringBeaconGeo, ringBeaconMat);
    const beaconRing2 = new THREE.Mesh(ringBeaconGeo, ringBeaconMat.clone());
    beaconGroup.add(beaconRing1);
    beaconGroup.add(beaconRing2);
    beaconGroup.visible = false;
    scene.add(beaconGroup);
    beaconMeshRef.current = beaconGroup;

    // 11. HỆ THỐNG MÂY 3D BAY LƠ LỬNG TRÊN BẦU TRỜI (3D PROCEDURAL FLOATING CLOUDS)
    const cloudsGroup = new THREE.Group();

    // Vật liệu mây xốp bán trong suốt phản chiếu ánh sáng mặt trời ban ngày
    const cloudMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.72,
      metalness: 0.02,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
    });

    const puffGeo = new THREE.SphereGeometry(12, 10, 8);

    const createCloudCluster = (scaleX = 1, scaleZ = 1) => {
      const cluster = new THREE.Group();
      const puffCount = 5 + Math.floor(Math.random() * 4);
      for (let p = 0; p < puffCount; p++) {
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        const px = (Math.random() - 0.5) * 28 * scaleX;
        const py = (Math.random() - 0.4) * 6;
        const pz = (Math.random() - 0.5) * 20 * scaleZ;
        const ps = 0.7 + Math.random() * 0.8;
        puff.position.set(px, py, pz);
        puff.scale.set(ps * 1.4, ps * 0.45, ps * 1.1);
        cluster.add(puff);
      }
      return cluster;
    };

    const cloudPuffs: THREE.Group[] = [];

    // Dải mây bồng bềnh chân trời phía Bắc (vùng trời trước đây bị nhầm thành vách núi)
    for (let i = 0; i < 16; i++) {
      const cloud = createCloudCluster(1.9, 1.3);
      const x = -300 + i * 42 + (Math.random() - 0.5) * 20;
      const z = -145 + (Math.random() - 0.5) * 35;
      const y = 48 + Math.random() * 12;
      cloud.position.set(x, y, z);
      cloudsGroup.add(cloud);
      cloudPuffs.push(cloud);
    }

    // Các cụm mây rải rác trên bầu trời lục địa (Afata, Norman, Okka)
    for (let i = 0; i < 10; i++) {
      const cloud = createCloudCluster(1.5, 1.2);
      const x = -220 + Math.random() * 440;
      const z = -50 + Math.random() * 180;
      const y = 52 + Math.random() * 16;
      cloud.position.set(x, y, z);
      cloudsGroup.add(cloud);
      cloudPuffs.push(cloud);
    }

    // Vầng sương mây thiên giới quanh Tháp Quang Minh (Orsen Halo Cloud)
    const orsenHaloCloud = createCloudCluster(1.6, 1.6);
    orsenHaloCloud.position.set(vedaPos.x, 48, vedaPos.z);
    cloudsGroup.add(orsenHaloCloud);

    scene.add(cloudsGroup);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ANIMATION RENDER LOOP (60 FPS)
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // 1. Chuyển động 6 Điện Thờ Veda, Cột Sáng & Lõi Thiên Cầu
      if (vedaTemplesRef.current) {
        vedaTemplesRef.current.update(delta, elapsed);
      }

      // 1.1 Chuyển động Đảo Sương Mù: Sương mù vĩnh cửu, Long Hồn Thái Cổ Long & Quái vật biển sâu
      if (mistIslandRef.current) {
        mistIslandRef.current.update(delta, elapsed);
      }

      // 1.2 Chuyển động Hải Linh Trấn: Đèn hải đăng 360°, đàn chim hải âu vỗ cánh, thuyền Ata & Phong Thuật Annette
      if (seaBreezeTownRef.current) {
        seaBreezeTownRef.current.update(delta, elapsed);
      }

      // 1.3 Chuyển động Học Viện Carano: Tam Đại Tháp, Tí Nị nhún nhảy, Đảo lơ lửng, Người Đá & Tiên Cá
      if (caranoAcademyRef.current) {
        caranoAcademyRef.current.update(delta, elapsed);
      }

      // 1.4 Chuyển động Vương Quốc Okka: Cờ hiệu phấp phới, Hào quang Thánh Kiếm Arthur, Chiến mã & Hươu Ánh Sáng
      if (okkaKingdomRef.current) {
        okkaKingdomRef.current.update(delta, elapsed);
      }

      // 1.5 Chuyển động Thành Khởi Nguyên: Khí cầu tuần tra, Chim cơ máy vỗ cánh, Bánh răng cơ máy, Ngựa chiến & Thánh Kiếm Thane
      if (normanCastleRef.current) {
        normanCastleRef.current.update(delta, elapsed);
      }

      // 1.6 Chuyển động Vực Hỗn Mang: Lõi Hắc Ám Volkath, Miệng vực Grakk, Trùng quỷ Kriknak, Ngựa lửa & Linh hồn oán hận
      if (lokheimAbyssRef.current) {
        lokheimAbyssRef.current.update(delta, elapsed);
      }

      // 1.7 Chuyển động Suối Nguồn Ánh Sáng: Màn sương ánh sáng, Bướm tiên Krixi, Hào quang Payna/Helen & Bụi sáng mật hoa
      if (springOfLightRef.current) {
        springOfLightRef.current.update(delta, elapsed);
      }

      // 1.8 Chuyển động Tân Liên Hiệp: Toa tàu Monorail, Bánh răng xưởng đúc, Robot Mech Walker & Chim cơ máy
      if (freeFederationRef.current) {
        freeFederationRef.current.update(delta, elapsed);
      }

      // 1.9 Chuyển động Vương Quốc Rồng: Hoàng cung & Long Châu, Song Long Thần Thoại, Hạc giấy, Thần bút Yan & Ngọc phiến Yue
      if (dragonKingdomRef.current) {
        dragonKingdomRef.current.update(delta, elapsed);
      }

      // 1.10 Chuyển động Rừng Nguyên Sinh Afata: Mạch rễ ngọc bích, suối tinh thể, thác nước Elborn & đối lập sông Elda
      if (afataForestRef.current) {
        afataForestRef.current.update(delta, elapsed);
      }

      // 2. Nhấp nhô sóng biển vô cực
      if (oceanMeshRef.current) {
        oceanMeshRef.current.position.y = 1.0 + Math.sin(elapsed * 1.5) * 0.35;
      }

      // 3. Xung nhịp Màn Phép Thuật
      if (barrierGroupRef.current) {
        wallMat.opacity = 0.65 + Math.sin(elapsed * 2.2) * 0.2;
      }

      // 4. Sóng xung kích Radar Beacon (nếu có focus)
      if (beaconMeshRef.current && beaconMeshRef.current.visible) {
        const t1 = (elapsed * 1.2) % 1;
        const t2 = (elapsed * 1.2 + 0.5) % 1;
        beaconRing1.scale.setScalar(1 + t1 * 4.5);
        (beaconRing1.material as THREE.MeshBasicMaterial).opacity = 1 - t1;
        beaconRing2.scale.setScalar(1 + t2 * 4.5);
        (beaconRing2.material as THREE.MeshBasicMaterial).opacity = 1 - t2;
      }

      // 5. Mây 3D trôi nhẹ theo hướng gió
      cloudPuffs.forEach((cloud, idx) => {
        cloud.position.x += delta * (1.5 + (idx % 3) * 0.5);
        if (cloud.position.x > 340) {
          cloud.position.x = -340;
        }
      });
      if (orsenHaloCloud) {
        orsenHaloCloud.rotation.y += delta * 0.2;
      }

      // 6. CAMERA INTERPOLATION (Lerp tới mục tiêu mượt mà)
      if (cameraRef.current) {
        cameraRef.current.position.lerp(targetCamPos.current, 0.08);
        currentLookAt.current.lerp(targetLookAt.current, 0.08);
        cameraRef.current.lookAt(currentLookAt.current);

        // 6. CHIẾU TỌA ĐỘ 3D LÊN MÀN HÌNH (PROJECT 3D LABELS)
        if (showLabelsRef.current) {
          const containerW = containerRef.current?.clientWidth || window.innerWidth;
          const containerH = containerRef.current?.clientHeight || window.innerHeight;

          // Cập nhật vị trí các mốc địa danh
          const newLandmarkPins = ATHANOR_LANDMARKS.map((lm) => {
            const worldPos = mapPercentTo3D(lm.position.x, lm.position.y, 8);
            const proj = worldPos.clone().project(cameraRef.current!);
            const visible = proj.z < 1 && proj.x >= -1.1 && proj.x <= 1.1 && proj.y >= -1.1 && proj.y <= 1.1;
            return {
              landmark: lm,
              screenX: (proj.x * 0.5 + 0.5) * containerW,
              screenY: (-proj.y * 0.5 + 0.5) * containerH,
              visible,
            };
          });
          setProjectedPins(newLandmarkPins);

          // Cập nhật vị trí huy hiệu 4 Đại Thế Lực
          const newMacroPins = MAJOR_FACTIONS_MACRO.map((macro) => {
            const worldPos = mapPercentTo3D(macro.position.x, macro.position.y, 16);
            const proj = worldPos.clone().project(cameraRef.current!);
            const visible = proj.z < 1 && proj.x >= -1.1 && proj.x <= 1.1 && proj.y >= -1.1 && proj.y <= 1.1;
            return {
              macro,
              screenX: (proj.x * 0.5 + 0.5) * containerW,
              screenY: (-proj.y * 0.5 + 0.5) * containerH,
              visible,
            };
          });
          setProjectedMacroPins(newMacroPins);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Xử lý khi có focusTarget từ Biên Niên Sử (bay tới chiến trường)
  useEffect(() => {
    if (!focusTarget) {
      if (beaconMeshRef.current) beaconMeshRef.current.visible = false;
      return;
    }

    const worldPos = mapPercentTo3D(focusTarget.x, focusTarget.y, 8);

    // Kích hoạt Radar Beacon tại vị trí 3D
    if (beaconMeshRef.current) {
      beaconMeshRef.current.position.copy(worldPos);
      beaconMeshRef.current.position.y += 2;
      beaconMeshRef.current.visible = true;
    }

    // Camera lướt tới điểm tập trung với góc nhìn cận cảnh
    targetLookAt.current.copy(worldPos);
    targetCamPos.current.set(worldPos.x, worldPos.y + 110, worldPos.z + 130);
    setZoomMode('micro');
  }, [focusTarget, setZoomMode]);

  // Đồng bộ spherical coordinates từ khoảng cách và góc hiện tại của camera tới targetLookAt
  const syncSpherical = useCallback(() => {
    const diff = targetCamPos.current.clone().sub(targetLookAt.current);
    const r = Math.max(50, diff.length());
    spherical.current.radius = r;
    spherical.current.phi = Math.acos(Math.max(-0.999, Math.min(0.999, diff.y / r)));
    spherical.current.theta = Math.atan2(diff.x, diff.z);
  }, []);

  // Xử lý góc nghiêng điện ảnh 3D (Cinematic Tilt) mượt mà giữ nguyên tọa độ đang quan sát
  const prevCinematic = useRef(isCinematicTilt);
  useEffect(() => {
    if (prevCinematic.current !== isCinematicTilt) {
      prevCinematic.current = isCinematicTilt;
      if (isCinematicTilt) {
        // Góc nghiêng thấp hùng vĩ
        targetCamPos.current.set(targetLookAt.current.x, 150, targetLookAt.current.z + 300);
      } else {
        // Góc nhìn cao bao quát
        targetCamPos.current.set(targetLookAt.current.x, 360, targetLookAt.current.z + 240);
      }
      syncSpherical();
    }
  }, [isCinematicTilt, syncSpherical]);

  // Khi chọn phe phái từ thanh bar
  useEffect(() => {
    if (!selectedFactionId) return;
    const macro = MAJOR_FACTIONS_MACRO.find((m) => m.id === selectedFactionId);
    if (macro) {
      const pos = mapPercentTo3D(macro.focusTarget.x, macro.focusTarget.y, 10);
      targetLookAt.current.copy(pos);
      targetCamPos.current.set(pos.x, pos.y + 120, pos.z + 140);
      syncSpherical();
      setZoomMode('micro');
    }
  }, [selectedFactionId, setZoomMode, syncSpherical]);

  // TƯƠNG TÁC POINTER (CHUỘT & CẢM ỨNG ĐA ĐIỂM)
  const isPointerDown = useRef(false);
  const isOrbitAction = useRef(false);
  const lastPointerPos = useRef({ x: 0, y: 0 });
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const prevPinchDist = useRef<number | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('.interactive-clickable')) return;

    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.current.size === 1) {
      isPointerDown.current = true;
      lastPointerPos.current = { x: e.clientX, y: e.clientY };
      syncSpherical();

      // Quyết định Orbit (Xoay 360°) hay Pan (Di chuyển bản đồ)
      if (e.button === 2 || e.shiftKey || interactionMode === 'orbit') {
        isOrbitAction.current = true;
      } else {
        isOrbitAction.current = false;
      }

      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
    } else if (activePointers.current.size === 2) {
      // Bắt đầu pinch zoom 2 ngón
      const pts = Array.from(activePointers.current.values());
      prevPinchDist.current = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  }, [interactionMode, syncSpherical]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!activePointers.current.has(e.pointerId)) return;
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    const camera = cameraRef.current;
    if (!camera) return;

    // Xử lý pinch zoom 2 ngón
    if (activePointers.current.size === 2 && prevPinchDist.current !== null) {
      const pts = Array.from(activePointers.current.values());
      const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (currentDist > 10 && prevPinchDist.current > 10) {
        const factor = prevPinchDist.current / currentDist;
        const offset = targetCamPos.current.clone().sub(targetLookAt.current);
        const newDist = Math.max(65, Math.min(560, offset.length() * factor));
        offset.setLength(newDist);
        targetCamPos.current.copy(targetLookAt.current).add(offset);
        spherical.current.radius = newDist;
        prevPinchDist.current = currentDist;
      }
      return;
    }

    if (!isPointerDown.current) return;
    const dx = e.clientX - lastPointerPos.current.x;
    const dy = e.clientY - lastPointerPos.current.y;
    lastPointerPos.current = { x: e.clientX, y: e.clientY };

    if (dx === 0 && dy === 0) return;

    if (isOrbitAction.current) {
      // 1. XOAY QUANH TÂM (Orbit Rotate & Tilt)
      spherical.current.theta -= dx * 0.005;
      spherical.current.phi = Math.max(
        0.18,
        Math.min(Math.PI / 2.15, spherical.current.phi - dy * 0.005)
      );

      const r = spherical.current.radius;
      const sinPhi = Math.sin(spherical.current.phi);
      const cosPhi = Math.cos(spherical.current.phi);
      const sinTheta = Math.sin(spherical.current.theta);
      const cosTheta = Math.cos(spherical.current.theta);

      targetCamPos.current.set(
        targetLookAt.current.x + r * sinPhi * sinTheta,
        targetLookAt.current.y + r * cosPhi,
        targetLookAt.current.z + r * sinPhi * cosTheta
      );
    } else {
      // 2. DI CHUYỂN BẢN ĐỒ QUA TRÁI / PHẢI / TRÊN / DƯỚI (Screen-Aligned Pan)
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
      right.y = 0;
      if (right.lengthSq() > 0.001) right.normalize();
      else right.set(1, 0, 0);

      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      forward.y = 0;
      if (forward.lengthSq() > 0.001) forward.normalize();
      else forward.set(0, 0, -1);

      // Tỷ lệ di chuyển nhạy bén, tự động thích ứng với khoảng cách camera tới mặt đất
      const dist = camera.position.distanceTo(targetLookAt.current);
      const panFactor = Math.max(0.25, (dist / 400) * 0.7);

      const moveX = right.clone().multiplyScalar(-dx * panFactor);
      const moveZ = forward.clone().multiplyScalar(dy * panFactor);

      const deltaX = moveX.x + moveZ.x;
      const deltaZ = moveX.z + moveZ.z;

      const newLookAtX = Math.max(-360, Math.min(360, targetLookAt.current.x + deltaX));
      const newLookAtZ = Math.max(-260, Math.min(260, targetLookAt.current.z + deltaZ));

      const actualDeltaX = newLookAtX - targetLookAt.current.x;
      const actualDeltaZ = newLookAtZ - targetLookAt.current.z;

      targetLookAt.current.x = newLookAtX;
      targetLookAt.current.z = newLookAtZ;

      targetCamPos.current.x += actualDeltaX;
      targetCamPos.current.z += actualDeltaZ;
    }
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    activePointers.current.delete(e.pointerId);
    if (activePointers.current.size === 0) {
      isPointerDown.current = false;
      prevPinchDist.current = null;
    }
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  }, []);

  // ĐIỀU HƯỚNG BẰNG PHÍM BẤM BÀN PHÍM (WASD, MŨI TÊN & HOME)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') return;
      const camera = cameraRef.current;
      if (!camera) return;

      if (e.key === 'Home') {
        targetLookAt.current.set(0, 0, 0);
        targetCamPos.current.set(0, 360, 240);
        syncSpherical();
        return;
      }

      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
      right.y = 0;
      if (right.lengthSq() > 0.001) right.normalize();
      else right.set(1, 0, 0);

      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      forward.y = 0;
      if (forward.lengthSq() > 0.001) forward.normalize();
      else forward.set(0, 0, -1);

      const dist = camera.position.distanceTo(targetLookAt.current);
      const step = Math.max(22, (dist / 400) * 42);
      let deltaX = 0;
      let deltaZ = 0;

      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        const move = right.clone().multiplyScalar(-step);
        deltaX += move.x;
        deltaZ += move.z;
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        const move = right.clone().multiplyScalar(step);
        deltaX += move.x;
        deltaZ += move.z;
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        const move = forward.clone().multiplyScalar(step);
        deltaX += move.x;
        deltaZ += move.z;
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        const move = forward.clone().multiplyScalar(-step);
        deltaX += move.x;
        deltaZ += move.z;
      }

      if (deltaX !== 0 || deltaZ !== 0) {
        const newLookAtX = Math.max(-360, Math.min(360, targetLookAt.current.x + deltaX));
        const newLookAtZ = Math.max(-260, Math.min(260, targetLookAt.current.z + deltaZ));

        const actualDeltaX = newLookAtX - targetLookAt.current.x;
        const actualDeltaZ = newLookAtZ - targetLookAt.current.z;

        targetLookAt.current.x = newLookAtX;
        targetLookAt.current.z = newLookAtZ;

        targetCamPos.current.x += actualDeltaX;
        targetCamPos.current.z += actualDeltaZ;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [syncSpherical]);

  // XỬ LÝ KHI BẤM NÚT ĐIỀU HƯỚNG TRÊN GIAO DIỆN (panTrigger)
  useEffect(() => {
    if (!panTrigger || !cameraRef.current) return;
    if (panTrigger.dir === 'reset') {
      targetLookAt.current.set(0, 0, 0);
      targetCamPos.current.set(0, 360, 240);
      syncSpherical();
      setZoomMode('macro');
      return;
    }

    const camera = cameraRef.current;
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
    right.y = 0;
    if (right.lengthSq() > 0.001) right.normalize();
    else right.set(1, 0, 0);

    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    forward.y = 0;
    if (forward.lengthSq() > 0.001) forward.normalize();
    else forward.set(0, 0, -1);

    const dist = camera.position.distanceTo(targetLookAt.current);
    const step = Math.max(30, (dist / 400) * 58);
    let deltaX = 0;
    let deltaZ = 0;

    if (panTrigger.dir === 'left') {
      const move = right.clone().multiplyScalar(-step);
      deltaX += move.x;
      deltaZ += move.z;
    } else if (panTrigger.dir === 'right') {
      const move = right.clone().multiplyScalar(step);
      deltaX += move.x;
      deltaZ += move.z;
    } else if (panTrigger.dir === 'up') {
      const move = forward.clone().multiplyScalar(step);
      deltaX += move.x;
      deltaZ += move.z;
    } else if (panTrigger.dir === 'down') {
      const move = forward.clone().multiplyScalar(-step);
      deltaX += move.x;
      deltaZ += move.z;
    }

    if (deltaX !== 0 || deltaZ !== 0) {
      const newLookAtX = Math.max(-360, Math.min(360, targetLookAt.current.x + deltaX));
      const newLookAtZ = Math.max(-260, Math.min(260, targetLookAt.current.z + deltaZ));

      const actualDeltaX = newLookAtX - targetLookAt.current.x;
      const actualDeltaZ = newLookAtZ - targetLookAt.current.z;

      targetLookAt.current.x = newLookAtX;
      targetLookAt.current.z = newLookAtZ;

      targetCamPos.current.x += actualDeltaX;
      targetCamPos.current.z += actualDeltaZ;
    }
  }, [panTrigger, syncSpherical, setZoomMode]);

  // XỬ LÝ KHI BẤM NÚT PHÓNG TO / THU NHỎ TRÊN GIAO DIỆN (zoomTrigger)
  useEffect(() => {
    if (!zoomTrigger || !cameraRef.current) return;
    const factor = zoomTrigger.type === 'in' ? 0.8 : 1.25;

    const offset = targetCamPos.current.clone().sub(targetLookAt.current);
    const currentDist = offset.length();
    const newDist = Math.max(65, Math.min(560, currentDist * factor));

    offset.setLength(newDist);
    targetCamPos.current.copy(targetLookAt.current).add(offset);
    spherical.current.radius = newDist;

    if (newDist < 260) {
      setZoomMode('micro');
    } else {
      setZoomMode('macro');
    }
  }, [zoomTrigger, setZoomMode]);

  // CUỘN CHUỘT PHÓNG TO / THU NHỎ
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 1.12 : 0.89;

    const offset = targetCamPos.current.clone().sub(targetLookAt.current);
    const currentDist = offset.length();
    const newDist = Math.max(65, Math.min(560, currentDist * zoomFactor));

    offset.setLength(newDist);
    targetCamPos.current.copy(targetLookAt.current).add(offset);
    spherical.current.radius = newDist;

    if (newDist < 260 && zoomMode !== 'micro') {
      setZoomMode('micro');
    } else if (newDist >= 260 && zoomMode !== 'macro') {
      setZoomMode('macro');
    }
  }, [zoomMode, setZoomMode]);

  return (
    <div
      ref={containerRef}
      className={`athanor-3d-viewport mode-${interactionMode}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* LỚP HUY HIỆU TỨ ĐẠI THẾ LỰC NỔI 3D (CHẾ ĐỘ TOÀN CẢNH) */}
      {showLabels &&
        zoomMode === 'macro' &&
        projectedMacroPins.map(({ macro, screenX, screenY, visible }) => {
          if (!visible) return null;
          return (
            <div
              key={macro.id}
              className="macro-3d-shield-pin interactive-clickable"
              style={{
                left: `${screenX}px`,
                top: `${screenY}px`,
                transform: 'translate(-50%, -50%)',
                borderColor: macro.color,
              }}
              onClick={() => onSelectFactionMacro(macro)}
              role="button"
              tabIndex={0}
            >
              <div
                className="macro-3d-pulse-glow"
                style={{ backgroundColor: macro.color }}
              />
              <span className="macro-3d-title" style={{ color: macro.accentColor }}>
                {macro.name}
              </span>
              <span className="macro-3d-sub">{macro.vietnameseTitle}</span>
            </div>
          );
        })}

      {/* LỚP ĐỊA DANH CHI TIẾT NỔI 3D (CHẾ ĐỘ CẬN CẢNH HOẶC KHI PHÓNG TO) */}
      {showLabels &&
        zoomMode === 'micro' &&
        projectedPins.map(({ landmark, screenX, screenY, visible }) => {
          if (!visible) return null;
          return (
            <div
              key={landmark.id}
              className={`landmark-3d-pin category-${landmark.category} interactive-clickable`}
              style={{
                left: `${screenX}px`,
                top: `${screenY}px`,
                transform: 'translate(-50%, -100%)',
              }}
              onClick={() => onSelectLandmark(landmark)}
              onMouseEnter={(e) => {
                setHoveredLandmark(landmark);
                setTooltipPos({ x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => setHoveredLandmark(null)}
              role="button"
              tabIndex={0}
            >
              <div className="pin-3d-head">
                <span className="pin-3d-dot" />
                <span className="pin-3d-label">{landmark.name}</span>
              </div>
              <div className="pin-3d-stem" />
            </div>
          );
        })}

      {/* TOOLTIP HOVER ĐỊA DANH */}
      {showLabels && hoveredLandmark && (
        <div
          className="athanor-landmark-tooltip"
          style={{
            left: `${tooltipPos.x + 14}px`,
            top: `${tooltipPos.y - 12}px`,
            pointerEvents: 'none',
          }}
        >
          <div className="tooltip-title">{hoveredLandmark.name}</div>
          <div className="tooltip-vietnamese">{hoveredLandmark.vietnameseTitle}</div>
          <div className="tooltip-desc">{hoveredLandmark.shortDesc}</div>
          <div className="tooltip-cta">Nhấn để xem chi tiết lịch sử</div>
        </div>
      )}
    </div>
  );
};
