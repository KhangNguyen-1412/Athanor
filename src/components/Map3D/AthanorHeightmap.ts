/**
 * Athanor 3D Terrain Heightmap Generator
 * Combines pixel luminance from the official terrain artwork with mathematical
 * geographical displacement profiles for major landforms:
 * - Mount Orsen (Tháp Quang Minh): Soaring icy peak with snowy slopes
 * - Afata Caldera Basin (Rừng Nguyên Sinh): Ringed crater ridge with sunken valley floor
 * - Okka Plateau & Canyons: Rugged terracotta highlands
 * - Norman Plains: Gentle rolling green hills and river valleys
 * - Lokheim Abyss: Jagged volcanic crags and deep dark fissures
 */

export interface TerrainElevationData {
  width: number;
  height: number;
  elevations: Float32Array; // Array of height values normalized or scaled
  maxElevation: number;
}

// Hàm làm mịn (smoothstep)
function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

// Khoảng cách Euclidean 2D
function dist(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Thuật toán tính toán độ cao địa lý quy chuẩn theo tọa độ chuẩn hóa (u: 0..1, v: 0..1)
 */
export function getGeographicalElevation(u: number, v: number): number {
  let elevation = 0;

  // 1. ĐỈNH ORSEN (THÁP QUANG MINH) — Tâm (0.445, 0.355)
  // Ngọn núi cao nhất Athanor vươn lên mây tuyết
  const dOrsen = dist(u, v, 0.445, 0.355);
  if (dOrsen < 0.12) {
    const peak = Math.pow(1 - dOrsen / 0.12, 1.8) * 65;
    // Răng cưa địa hình đỉnh núi
    const ridgeNoise = Math.sin(u * 80) * Math.cos(v * 80) * 4.5;
    elevation = Math.max(elevation, peak + ridgeNoise);
  }

  // 2. MIỆNG NÚI LỬA AFATA (RỪNG NGUYÊN SINH) — Tâm (0.135, 0.52)
  // Vành núi bao quanh hình vòng cung, bên trong là lòng chảo trũng Cây Thế Giới
  const dAfata = dist(u, v, 0.135, 0.52);
  if (dAfata < 0.16) {
    // Vành núi vành khuyên ở bán kính khoảng 0.09 - 0.13
    const rimDistance = Math.abs(dAfata - 0.10);
    const rimElevation = Math.max(0, 1 - rimDistance / 0.05) * 32;
    // Lòng chảo trũng bên trong (thung lũng)
    const basin = dAfata < 0.08 ? (1 - dAfata / 0.08) * 12 : 0;
    elevation = Math.max(elevation, rimElevation + basin);
  }

  // 3. CAO NGUYÊN OKKA & DÃY NÚI TRUNG TÂM
  const dCentralMt = dist(u, v, 0.48, 0.63);
  if (dCentralMt < 0.16) {
    const mountain = Math.pow(1 - dCentralMt / 0.16, 1.4) * 32;
    const canyonCuts = Math.cos(u * 55 + v * 35) * 4;
    elevation = Math.max(elevation, mountain + canyonCuts);
  }

  // VƯƠNG QUỐC OKKA — (0.445, 0.565) Vùng đồi thấp phòng thủ tự nhiên, giáp ranh Đồng bằng Ánh Trăng & Rừng Elborne
  const dOkka = dist(u, v, 0.445, 0.565);
  if (dOkka < 0.08) {
    const okkaHills = Math.pow(1 - dOkka / 0.08, 1.5) * 13;
    elevation = Math.max(elevation, okkaHills);
  }

  // 4. BÌNH NGUYÊN NORMAN & VÙNG CARANO — (0.68, 0.58)
  const dNorman = dist(u, v, 0.68, 0.58);
  if (dNorman < 0.22) {
    const hills = Math.pow(1 - dNorman / 0.22, 1.2) * 22;
    const rollingGround = Math.sin(u * 40) * Math.cos(v * 40) * 3.5;
    elevation = Math.max(elevation, hills + rollingGround);
  }

  // 5. SA MẠC HELIOS & LONG TRÌ QUỐC PHƯƠNG BẮC — (0.60, 0.22)
  const dNorth = dist(u, v, 0.60, 0.22);
  if (dNorth < 0.20) {
    const dunes = Math.pow(1 - dNorth / 0.20, 1.3) * 28;
    const duneWaves = Math.sin(u * 60 - v * 20) * 4;
    elevation = Math.max(elevation, dunes + duneWaves);
  }

  // 6. VỰC HỖN MANG LOKHEIM — (0.91, 0.70)
  // Các vách đá nham thạch lởm chởm và khe nứt âm u
  const dLokheim = dist(u, v, 0.91, 0.70);
  if (dLokheim < 0.18) {
    const crags = Math.pow(1 - dLokheim / 0.18, 1.3) * 26;
    const abyssFracture = Math.sin(u * 70 + v * 70) * 6;
    elevation = Math.max(elevation, Math.max(0, crags + abyssFracture));
  }

  // 7. ĐẢO SƯƠNG MÙ (MIST ISLAND) — (0.465, 0.185) ở phía Nam Biển Ánh Sáng, ngay phía Bắc ngọn núi thánh Mount Orphean
  const dMistIsland = dist(u, v, 0.465, 0.185);
  if (dMistIsland < 0.05) {
    const islandCrags = Math.pow(1 - dMistIsland / 0.05, 1.4) * 16;
    const crags = Math.sin(u * 140 + v * 140) * 2.5;
    elevation = Math.max(elevation, Math.max(0, islandCrags + crags));
  }

  // 8. HẢI LINH TRẤN (SEA BREEZE TOWN) — (0.775, 0.655) Duyên hải phía Đông Nam Vương quốc Norman
  const dHaiLinh = dist(u, v, 0.775, 0.655);
  if (dHaiLinh < 0.075) {
    const gentleCoast = Math.pow(1 - dHaiLinh / 0.075, 1.6) * 12;
    elevation = Math.max(elevation, gentleCoast);
  }

  // 9. HỌC VIỆN MA PHÁP CARANO (CARANO MAGIC ACADEMY) — (0.580, 0.475) Pháo đài đảo giữa dòng sông Losarth
  const dCarano = dist(u, v, 0.580, 0.475);
  if (dCarano < 0.045) {
    const citadelElevation = Math.pow(1 - dCarano / 0.045, 1.5) * 8.5;
    elevation = Math.max(elevation, 4.0 + citadelElevation);
  }

  // 10. THÀNH KHỞI NGUYÊN (NORMAN CASTLE) — (0.695, 0.560) Bình nguyên kiên cố án ngữ cửa ngõ Vực Hỗn Mang
  const dNormanCastle = dist(u, v, 0.695, 0.560);
  if (dNormanCastle < 0.065) {
    const castleCitadel = Math.pow(1 - dNormanCastle / 0.065, 1.4) * 8.0;
    elevation = Math.max(elevation, 14.5 + castleCitadel);
  }

  // 11. TÂN LIÊN HIỆP (FREE FEDERATION / STEEL CITY) — (0.620, 0.780) Cao nguyên công nghiệp sắt thép & mỏ quặng
  const dFederation = dist(u, v, 0.620, 0.780);
  if (dFederation < 0.065) {
    const industrialPlateau = Math.pow(1 - dFederation / 0.065, 1.4) * 8.5;
    elevation = Math.max(elevation, 5.0 + industrialPlateau);
  }

  // 12. VƯƠNG QUỐC RỒNG (DRAGON KINGDOM / LONG CHI QUỐC) — (0.725, 0.215)
  // Non nước hữu tình tiên cảnh, thung lũng hoa đào được bao bọc bởi các rặng núi cao hiểm trở & sương mây
  const dDragonKingdom = dist(u, v, 0.725, 0.215);
  if (dDragonKingdom < 0.085) {
    const valleyBasin = Math.pow(1 - dDragonKingdom / 0.085, 1.4) * 15.0;
    const karstRidges = Math.sin(u * 90 + v * 80) * 3.6;
    elevation = Math.max(elevation, 12.0 + valleyBasin + karstRidges);
  }

  // Hạ dần về 0 ở các mép bờ biển để tiếp giáp mặt nước phẳng lặng
  return Math.max(0, elevation);
}

/**
 * Mặt nạ lục địa (Landmask): Xác định các vùng đất thực thụ của Athanor
 * Mọi điểm nằm ngoài (chân trời phía bắc, góc biển, mây bay) đều có độ cao = 0.
 */
export function getAthanorLandmask(u: number, v: number): number {
  // 0. Đảo Sương Mù nhô lên độc lập giữa Biển Ánh Sáng (Sea of Holy Light)
  const dMistIsland = dist(u, v, 0.465, 0.185);
  if (dMistIsland < 0.045) {
    return smoothstep(0.045, 0.015, dMistIsland);
  }

  // 1. Toàn bộ đường chân trời và bầu trời phía Bắc (v < 0.19) là biển và mây trời -> phẳng tuyệt đối
  if (v < 0.19) return 0;

  // 2. Góc trên bên trái (u < 0.26, v < 0.32) là biển mở và mây trắng trôi -> phẳng
  if (u < 0.26 && v < 0.32) return 0;

  // 3. Góc trên bên phải (u > 0.77, v < 0.28) là biển và mây -> phẳng
  if (u > 0.77 && v < 0.28) return 0;

  // 4. Đám mây góc dưới bên trái (u < 0.15, v > 0.80) -> phẳng
  if (u < 0.15 && v > 0.80) return 0;

  // 5. Kiểm tra khoảng cách tới các lục địa thực sự
  let mask = 0;

  // Đỉnh Orsen (Veda)
  const dOrsen = dist(u, v, 0.445, 0.355);
  if (dOrsen < 0.12) {
    mask = Math.max(mask, smoothstep(0.12, 0.07, dOrsen));
  }

  // Miệng núi lửa & Rừng Afata
  const dAfata = dist(u, v, 0.135, 0.52);
  if (dAfata < 0.18) {
    mask = Math.max(mask, smoothstep(0.18, 0.11, dAfata));
  }

  // Dãy núi trung tâm & Vương quốc Okka
  if (u >= 0.26 && u <= 0.62 && v >= 0.33 && v <= 0.82) {
    mask = Math.max(mask, 1.0);
  }

  // Bình nguyên Norman & Học Viện Carano
  if (u >= 0.56 && u <= 0.88 && v >= 0.37 && v <= 0.86) {
    mask = Math.max(mask, 1.0);
  }

  // Vùng phía bắc & Đông Bắc (Helios & Vương Quốc Rồng / Long Chi Quốc)
  if (u >= 0.46 && u <= 0.80 && v >= 0.14 && v <= 0.36) {
    mask = Math.max(mask, 1.0);
  }

  // Vực Hỗn Mang (Lokheim)
  if (u >= 0.80 && u <= 0.98 && v >= 0.48 && v <= 0.92) {
    mask = Math.max(mask, 1.0);
  }

  // Hải Linh Trấn
  const dHaiLinh = dist(u, v, 0.87, 0.38);
  if (dHaiLinh < 0.08) {
    mask = Math.max(mask, smoothstep(0.08, 0.03, dHaiLinh));
  }

  return mask;
}

/**
 * Tải và phân tích ảnh địa hình thực tế để trích xuất độ cao chi tiết từ sắc độ (Luminance)
 * Tự động loại bỏ mây trời (Clouds) để không bị nhô lên thành núi giả
 */
export async function generateAthanorHeightmap(
  imageUrl: string,
  gridWidth: number = 256,
  gridHeight: number = 256,
  maxElevation: number = 42
): Promise<TerrainElevationData> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = gridWidth;
      canvas.height = gridHeight;
      const ctx = canvas.getContext('2d');

      const elevations = new Float32Array(gridWidth * gridHeight);

      if (!ctx) {
        // Fallback: tính toán thuần túy bằng công thức địa lý
        for (let y = 0; y < gridHeight; y++) {
          for (let x = 0; x < gridWidth; x++) {
            const u = x / (gridWidth - 1);
            const v = y / (gridHeight - 1);
            const landFactor = getAthanorLandmask(u, v);
            elevations[y * gridWidth + x] = getGeographicalElevation(u, v) * landFactor;
          }
        }
        resolve({ width: gridWidth, height: gridHeight, elevations, maxElevation });
        return;
      }

      ctx.drawImage(img, 0, 0, gridWidth, gridHeight);
      const imgData = ctx.getImageData(0, 0, gridWidth, gridHeight);
      const data = imgData.data;

      for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          const u = x / (gridWidth - 1);
          const v = y / (gridHeight - 1);

          // 1. KIỂM TRA MẶT NẠ LỤC ĐỊA:
          // Nếu nằm ngoài lục địa -> Đây là đại dương hoặc mây trời -> Độ cao = 0!
          const landFactor = getAthanorLandmask(u, v);
          if (landFactor <= 0.02) {
            elevations[y * gridWidth + x] = 0;
            continue;
          }

          const idx = (y * gridWidth + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // Độ sáng nhận thức
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          // Nhận diện vùng biển
          const isDeepWater = (r < 55 && g < 75 && b < 110) || lum < 0.18;
          if (isDeepWater) {
            elevations[y * gridWidth + x] = 0;
            continue;
          }

          // 2. PHÂN BIỆT TUYẾT NÚI THỰC SỰ VS MÂY BAY NGANG NÚI:
          // Tuyết vĩnh cửu chỉ tập trung quanh đỉnh Orsen (Veda)
          const dOrsen = dist(u, v, 0.445, 0.355);
          const isNearOrsenPeak = dOrsen < 0.07;

          // Nếu là mây trắng xóa che phủ (r, g, b đều rất cao và gần bằng nhau) nhưng ở ngoài đỉnh Orsen
          const isPuffyCloud = lum > 0.82 && Math.abs(r - g) < 18 && Math.abs(g - b) < 18 && !isNearOrsenPeak;
          const effectiveLum = isPuffyCloud ? 0.38 : lum;

          const waterFactor = smoothstep(0.18, 0.32, effectiveLum);

          // Kết hợp độ cao ảnh với địa lý
          const geoHeight = getGeographicalElevation(u, v);
          const imgHeight = Math.pow(effectiveLum, 1.3) * maxElevation * waterFactor;

          // Tổng hợp độ cao
          const totalHeight = (imgHeight * 0.65 + geoHeight * 0.35) * landFactor;

          elevations[y * gridWidth + x] = Math.max(0, totalHeight);
        }
      }

      resolve({ width: gridWidth, height: gridHeight, elevations, maxElevation });
    };

    img.onerror = () => {
      const elevations = new Float32Array(gridWidth * gridHeight);
      for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          const u = x / (gridWidth - 1);
          const v = y / (gridHeight - 1);
          elevations[y * gridWidth + x] = getGeographicalElevation(u, v) * getAthanorLandmask(u, v);
        }
      }
      resolve({ width: gridWidth, height: gridHeight, elevations, maxElevation });
    };
  });
}
