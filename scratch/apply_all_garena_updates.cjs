const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_full_data.json', 'utf8'));

const files = [
  'src/data/heroes/vedaHeroes.ts',
  'src/data/heroes/lokheimHeroes.ts',
  'src/data/heroes/afataHeroes.ts',
  'src/data/heroes/normanHeroes.ts',
  'src/data/heroes/caranoHeroes.ts',
  'src/data/heroes/easternHeroes.ts'
];

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

      const cleanTitle = gSkill.title.replace(/'/g, "\\'").trim();
      const iconUrl = gSkill.iconUrl.trim();

      // Check if iconUrl already exists in this skill block
      // Find range of this skill
      const slotIndex = updated.indexOf(`slot: '${slot}'`);
      if (slotIndex === -1) continue;

      // Find closing brace of this skill
      const nextSlotIndex = i < 3 ? updated.indexOf(`slot: '${slots[i+1]}'`, slotIndex) : updated.indexOf(`battleTips:`, slotIndex);
      const skillEnd = nextSlotIndex !== -1 ? nextSlotIndex : slotIndex + 800;

      const skillSubstr = updated.substring(slotIndex, skillEnd);

      if (/iconUrl:\s*['"][^'"]*['"],?/.test(skillSubstr)) {
        const updatedSkillSubstr = skillSubstr.replace(/iconUrl:\s*['"][^'"]*['"],?/, `iconUrl: '${iconUrl}',`);
        updated = updated.substring(0, slotIndex) + updatedSkillSubstr + updated.substring(skillEnd);
      } else {
        // Insert iconUrl after name
        const nameRegex = /(name:\s*['"][^'"]+['"],)/;
        const updatedSkillSubstr = skillSubstr.replace(nameRegex, `$1\n        iconUrl: '${iconUrl}',`);
        updated = updated.substring(0, slotIndex) + updatedSkillSubstr + updated.substring(skillEnd);
      }
    }
  }

  return updated;
}

let totalUpdatedHeroes = 0;

for (const file of files) {
  console.log(`\nProcessing file: ${file}`);
  const content = fs.readFileSync(file, 'utf8');

  // Split into chunks by hero boundary
  const chunks = content.split(/(\{\s*id:\s*'[^']+',)/);

  let newContent = chunks[0];
  let fileUpdatedCount = 0;

  for (let i = 1; i < chunks.length; i += 2) {
    const header = chunks[i];
    const body = chunks[i + 1] || '';
    const idMatch = header.match(/id:\s*'([^']+)'/);
    const id = idMatch ? idMatch[1] : null;

    if (id && data[id]) {
      const combined = header + body;
      const updatedCombined = updateHeroBlock(combined, data[id]);
      newContent += updatedCombined;
      fileUpdatedCount++;
      totalUpdatedHeroes++;
    } else {
      newContent += header + body;
      if (id) {
        console.warn(`[SKIP] No data found for hero id: ${id}`);
      }
    }
  }

  fs.writeFileSync(file, newContent, 'utf8');
  console.log(`Updated ${fileUpdatedCount} heroes in ${file}`);
}

console.log(`\n========================================`);
console.log(`COMPLETED! Total updated heroes: ${totalUpdatedHeroes}`);
console.log(`========================================`);
