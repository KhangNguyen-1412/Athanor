const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_full_data.json', 'utf8'));

function updateHeroBlock(block, heroData) {
  let updated = block;

  // 1. Update avatarUrl
  if (heroData.garenaAvatar) {
    updated = updated.replace(/avatarUrl:\s*['"][^'"]+['"],/, `avatarUrl: '${heroData.garenaAvatar}',`);
  }

  // 2. Update bannerUrl
  if (heroData.bannerUrl) {
    updated = updated.replace(/bannerUrl:\s*['"][^'"]+['"],/, `bannerUrl: '${heroData.bannerUrl}',`);
  }

  // 3. Update skills
  if (heroData.skills && heroData.skills.length === 4) {
    const slots = ['passive', 'skill1', 'skill2', 'ultimate'];
    for (let i = 0; i < 4; i++) {
      const slot = slots[i];
      const gSkill = heroData.skills[i];
      if (!gSkill) continue;

      // Match skill object for this slot
      // Regex finds slot: 'passive' and its name: '...'
      const slotRegex = new RegExp(`(slot:\\s*'${slot}',\\s*\\n\\s*name:\\s*)(['"][^'"]+['"])(,)`);
      
      const cleanTitle = gSkill.title.replace(/'/g, "\\'").trim();
      const iconLine = `\n        iconUrl: '${gSkill.iconUrl}',`;

      // Check if iconUrl already exists
      const existingIconRegex = new RegExp(`(slot:\\s*'${slot}'[\\s\\S]*?)(iconUrl:\\s*['"][^'"]*['"],?\\n?)`);
      if (existingIconRegex.test(updated)) {
        updated = updated.replace(existingIconRegex, (m, p1) => {
          return `${p1}iconUrl: '${gSkill.iconUrl}',\n`;
        });
      } else {
        // Insert iconUrl right after name
        updated = updated.replace(slotRegex, `$1'${cleanTitle}'$3${iconLine}`);
      }
    }
  }

  return updated;
}

// Test on one file in memory
const vedaContent = fs.readFileSync('src/data/heroes/vedaHeroes.ts', 'utf8');
const chunks = vedaContent.split(/(\{\s*id:\s*'[^']+',)/);

let result = chunks[0];
let updatedCount = 0;
for (let i = 1; i < chunks.length; i += 2) {
  const header = chunks[i];
  const body = chunks[i + 1] || '';
  const idMatch = header.match(/id:\s*'([^']+)'/);
  const id = idMatch ? idMatch[1] : null;

  if (id && data[id]) {
    const combined = header + body;
    const updatedCombined = updateHeroBlock(combined, data[id]);
    result += updatedCombined;
    updatedCount++;
  } else {
    result += header + body;
  }
}

console.log(`Test transformed ${updatedCount} heroes in vedaHeroes.ts`);
fs.writeFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/test_veda_transformed.ts', result);
console.log('Sample Ilumia in transformed file:');
const ilumiaSection = result.slice(result.indexOf("id: 'ilumia'"), result.indexOf("id: 'lauriel'"));
console.log(ilumiaSection);
