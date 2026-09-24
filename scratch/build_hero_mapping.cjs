const fs = require('fs');

const heroFiles = [
  'src/data/heroes/vedaHeroes.ts',
  'src/data/heroes/lokheimHeroes.ts',
  'src/data/heroes/afataHeroes.ts',
  'src/data/heroes/normanHeroes.ts',
  'src/data/heroes/caranoHeroes.ts',
  'src/data/heroes/easternHeroes.ts'
];

const garenaList = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_heroes_list.json', 'utf8'));

// Helper to normalize strings
function norm(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’&#8217;\s\-_.]/g, '');
}

// Map each local hero
const allLocal = [];
for (const file of heroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Match each hero object block
  const heroBlocks = content.split(/\{\s*id:\s*'/).slice(1);
  for (const block of heroBlocks) {
    const id = block.match(/^([^']+)'/)[1];
    const nameMatch = block.match(/name:\s*(?:'((?:\\'|[^'])+)'|"([^"]+)")/);
    const name = nameMatch ? (nameMatch[1] || nameMatch[2]).replace(/\\'/g, "'") : id;
    allLocal.push({ file, id, name });
  }
}

console.log('Total local heroes found:', allLocal.length);

// Manual or special mapping overrides between local id and Garena slug
const specialMap = {
  'teeri': 'teeri',
  'batman': 'kaine', // Garena reworked Batman into Kaine
  'payna': 'helen', // Garena reworked Payna into Helen
  'stuart': 'stuart', // Garena reworked Joker into Stuart
  'hainuo': 'heino',
  'bill': 'billow',
  'garret': 'bolt-baron',
  'gark': 'flowborn', // or flowborn-2
  'telannas': 'telannas',
  'zill': 'zill',
  'kilgroth': 'kilgroth',
  'ybneth': 'ybneth',
  'darcy': 'darcy',
  'azzenka': 'azzenka',
  'azzen_ka': 'azzenka',
  'trieu_van': 'trieu-van',
  'lu_bo': 'lu-bo',
  'dieu_thuyen': 'dieu-thuyen',
  'ngo_khong': 'ngo-khong',
  'the_flash': 'the-flash',
  'wonder_woman': 'wonder-woman'
};

const mapping = [];
const missing = [];

for (const lh of allLocal) {
  let gMatch = null;
  const targetSlug = specialMap[lh.id];
  if (targetSlug) {
    gMatch = garenaList.find(g => g.detailUrl.includes(`/d/${targetSlug}/`));
  }
  
  if (!gMatch) {
    // Try matching normalized name
    const lNorm = norm(lh.name);
    gMatch = garenaList.find(g => norm(g.name) === lNorm);
  }

  if (!gMatch) {
    // Try matching by id in slug
    gMatch = garenaList.find(g => g.detailUrl.includes(`/d/${lh.id}/`));
  }

  if (gMatch) {
    mapping.push({
      localId: lh.id,
      localName: lh.name,
      file: lh.file,
      garenaName: gMatch.name,
      garenaAvatar: gMatch.avatarUrl,
      garenaUrl: gMatch.detailUrl
    });
  } else {
    missing.push(lh);
  }
}

console.log(`Mapped: ${mapping.length}/${allLocal.length}`);
if (missing.length > 0) {
  console.log('Missing mapping for:', missing);
}
fs.writeFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/heroes_mapping.json', JSON.stringify(mapping, null, 2));
