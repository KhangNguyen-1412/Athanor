const fs = require('fs');

const content = fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/.system_generated/steps/1556/content.md', 'utf8');

const regex = /<a\s+href="([^"]+)"\s+class="st-heroes__item"([^>]*)>([\s\S]*?)<\/a>/g;

let match;
const heroes = [];
while ((match = regex.exec(content)) !== null) {
  const detailUrl = match[1];
  const itemContent = match[3];

  const imgMatch = itemContent.match(/<img\s+src="([^"]+)"(?:\s+alt="([^"]*)")?/);
  const nameMatch = itemContent.match(/<h2 class="st-heroes__item--name">\s*([\s\S]*?)\s*<\/h2>/);

  if (nameMatch) {
    heroes.push({
      name: nameMatch[1].trim(),
      avatarUrl: imgMatch ? imgMatch[1] : null,
      detailUrl: detailUrl
    });
  }
}

console.log('Total champions parsed:', heroes.length);
console.log('First 5:', JSON.stringify(heroes.slice(0, 5), null, 2));
console.log('Last 5:', JSON.stringify(heroes.slice(-5), null, 2));

// Save list to JSON
fs.writeFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_heroes_list.json', JSON.stringify(heroes, null, 2));
