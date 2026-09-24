const fs = require('fs');

// Read Garena champions
const garenaList = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_heroes_list.json', 'utf8'));

// Read our heroes data by inspecting the hero files
const heroFiles = [
  'src/data/heroes/vedaHeroes.ts',
  'src/data/heroes/lokheimHeroes.ts',
  'src/data/heroes/afataHeroes.ts',
  'src/data/heroes/normanHeroes.ts',
  'src/data/heroes/caranoHeroes.ts',
  'src/data/heroes/easternHeroes.ts'
];

function normalizeName(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’\s\-_.]/g, '');
}

const localHeroes = [];
for (const file of heroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const heroRegex = /id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
  let match;
  while ((match = heroRegex.exec(content)) !== null) {
    localHeroes.push({
      file,
      id: match[1],
      name: match[2],
      norm: normalizeName(match[2])
    });
  }
}

console.log('Local heroes count:', localHeroes.length);
console.log('Garena heroes count:', garenaList.length);

const matched = [];
const unmatchedLocal = [];
const unmatchedGarena = [...garenaList];

for (const lh of localHeroes) {
  // Try exact match or normalized match
  let gMatchIndex = unmatchedGarena.findIndex(gh => gh.name.toLowerCase() === lh.name.toLowerCase());
  if (gMatchIndex === -1) {
    gMatchIndex = unmatchedGarena.findIndex(gh => normalizeName(gh.name) === lh.norm);
  }
  
  if (gMatchIndex !== -1) {
    const gh = unmatchedGarena[gMatchIndex];
    matched.push({ local: lh, garena: gh });
    unmatchedGarena.splice(gMatchIndex, 1);
  } else {
    unmatchedLocal.push(lh);
  }
}

console.log(`Matched: ${matched.length}/${localHeroes.length}`);
console.log('Unmatched Local:', unmatchedLocal);
console.log('Unmatched Garena:', unmatchedGarena.map(g => ({ name: g.name, url: g.detailUrl })));
