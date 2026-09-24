const fs = require('fs');

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
  for (const block of heroBlocks) {
    const id = block.match(/^([^']+)'/)[1];
    const slots = [];
    const slotRegex = /slot:\s*'([^']+)'/g;
    let m;
    while ((m = slotRegex.exec(block)) !== null) {
      slots.push(m[1]);
    }
    if (slots.join(',') !== 'passive,skill1,skill2,ultimate') {
      console.log(`Hero ${id} in ${file} has slots:`, slots);
    }
  }
}
console.log('Slot check complete!');
