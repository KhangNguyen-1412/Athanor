const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_full_data.json', 'utf8'));

const heroFiles = [
  'src/data/heroes/vedaHeroes.ts',
  'src/data/heroes/lokheimHeroes.ts',
  'src/data/heroes/afataHeroes.ts',
  'src/data/heroes/normanHeroes.ts',
  'src/data/heroes/caranoHeroes.ts',
  'src/data/heroes/easternHeroes.ts'
];

for (const file of heroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const heroBlocks = content.split(/\{\s*id:\s*'/).slice(1);
  for (const block of heroBlocks.slice(0, 2)) {
    const id = block.match(/^([^']+)'/)[1];
    const gData = data[id];
    if (!gData) continue;
    console.log(`\n=== Hero: ${id} ===`);
    const skillNames = [];
    const nameRegex = /slot:\s*'([^']+)',\s*name:\s*['"]([^'"]+)['"]/g;
    let m;
    while ((m = nameRegex.exec(block)) !== null) {
      skillNames.push({ slot: m[1], name: m[2] });
    }
    skillNames.forEach((s, idx) => {
      console.log(`  Local [${s.slot}]: ${s.name}  <===>  Garena: ${gData.skills[idx]?.title}`);
    });
  }
}
