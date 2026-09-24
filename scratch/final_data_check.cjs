const fs = require('fs');

const heroFiles = [
  'src/data/heroes/vedaHeroes.ts',
  'src/data/heroes/lokheimHeroes.ts',
  'src/data/heroes/afataHeroes.ts',
  'src/data/heroes/normanHeroes.ts',
  'src/data/heroes/caranoHeroes.ts',
  'src/data/heroes/easternHeroes.ts'
];

let totalHeroes = 0;
let validAvatars = 0;
let validBanners = 0;
let totalSkills = 0;
let validSkillIcons = 0;

for (const file of heroFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const heroBlocks = content.split(/\{\s*id:\s*'/).slice(1);
  for (const block of heroBlocks) {
    totalHeroes++;
    const id = block.match(/^([^']+)'/)[1];

    const avMatch = block.match(/avatarUrl:\s*'([^']+)'/);
    if (avMatch && avMatch[1].startsWith('https://')) validAvatars++;
    else console.warn(`Invalid avatar for ${id}`);

    const bnMatch = block.match(/bannerUrl:\s*'([^']+)'/);
    if (bnMatch && bnMatch[1].startsWith('https://')) validBanners++;
    else console.warn(`Invalid banner for ${id}`);

    const iconMatches = [...block.matchAll(/iconUrl:\s*'([^']+)'/g)];
    totalSkills += 4;
    validSkillIcons += iconMatches.length;
    if (iconMatches.length !== 4) {
      console.warn(`Hero ${id} has ${iconMatches.length} skill icons instead of 4`);
    }
  }
}

console.log('Final Validation Report:');
console.log(`Total Heroes: ${totalHeroes}`);
console.log(`Valid Avatars: ${validAvatars}/${totalHeroes}`);
console.log(`Valid Banners: ${validBanners}/${totalHeroes}`);
console.log(`Valid Skill Icons: ${validSkillIcons}/${totalSkills} (4 per hero)`);

if (validAvatars === totalHeroes && validBanners === totalHeroes && validSkillIcons === totalSkills) {
  console.log('PERFECT 100% COMPLETION SUCCESS!');
} else {
  console.error('Validation discrepancies found!');
  process.exit(1);
}
