const fs = require('fs');
const path = require('path');

// Extract all 129 heroes with detailed fields
function extractHeroes(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match heroes block with escaped quotes allowed
  const heroRegex = /{\s*id:\s*'((?:\\'|[^'])+)',\s*\r?\n\s*name:\s*'((?:\\'|[^'])+)',\s*\r?\n\s*title:\s*'((?:\\'|[^'])+)',\s*\r?\n\s*factionId:\s*'((?:\\'|[^'])+)',\s*\r?\n\s*role:\s*'((?:\\'|[^'])+)'/g;
  let m;
  const list = [];
  while ((m = heroRegex.exec(content)) !== null) {
    list.push({
      id: m[1].replace(/\\'/g, "'"),
      name: m[2].replace(/\\'/g, "'"),
      title: m[3].replace(/\\'/g, "'"),
      factionId: m[4],
      role: m[5]
    });
  }
  return list;
}

const dir = path.join(__dirname, '../src/data/heroes');
const files = [
  { file: 'vedaHeroes.ts', faction: 'Tháp Quang Minh (Veda)' },
  { file: 'lokheimHeroes.ts', faction: 'Vực Hỗn Mang (Lokheim)' },
  { file: 'afataHeroes.ts', faction: 'Khu Rừng Nguyên Sinh (Afata)' },
  { file: 'normanHeroes.ts', faction: 'Lâu Đài Khởi Nguyên (Norman)' },
  { file: 'caranoHeroes.ts', faction: 'Học Viện Phép Thuật (Carano)' },
  { file: 'easternHeroes.ts', faction: 'Phương Đông & Ngoại Vực' }
];

let catalog = [];
files.forEach(f => {
  const list = extractHeroes(path.join(dir, f.file));
  catalog.push({
    category: f.faction,
    count: list.length,
    heroes: list.map(h => ({
      ...h,
      spotlightQuery: `Tâm Điểm Tướng ${h.name} Liên Quân Mobile`,
      youtubeSearchUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(`Tâm Điểm Tướng ${h.name} Liên Quân Mobile`)}`
    }))
  });
});

console.log('Total categorized factions:', catalog.length);
let totalCount = catalog.reduce((sum, c) => sum + c.count, 0);
console.log('Total heroes:', totalCount);

fs.writeFileSync(path.join(__dirname, 'spotlight_catalog.json'), JSON.stringify(catalog, null, 2), 'utf8');
console.log('Saved spotlight_catalog.json');
