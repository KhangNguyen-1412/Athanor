const fs = require('fs');
const path = require('path');

function extractHeroes(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /id:\s*'((?:\\'|[^'])+)',\s*\r?\n\s*name:\s*'((?:\\'|[^'])+)'/g;
  let match;
  const list = [];
  while ((match = regex.exec(content)) !== null) {
    list.push({
      id: match[1].replace(/\\'/g, "'"),
      name: match[2].replace(/\\'/g, "'")
    });
  }
  return list;
}

const dir = path.join(__dirname, '../src/data/heroes');
const files = ['vedaHeroes.ts', 'lokheimHeroes.ts', 'afataHeroes.ts', 'normanHeroes.ts', 'caranoHeroes.ts', 'easternHeroes.ts'];
let total = [];
files.forEach(f => {
  const heroes = extractHeroes(path.join(dir, f));
  console.log(`${f}: ${heroes.length}`);
  total = total.concat(heroes);
});

console.log(`Total: ${total.length}`);
fs.writeFileSync('scratch/heroes_list.json', JSON.stringify(total, null, 2), 'utf8');
console.log('Saved to scratch/heroes_list.json');
