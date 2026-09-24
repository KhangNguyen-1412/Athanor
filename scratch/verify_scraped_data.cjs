const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_full_data.json', 'utf8'));

const heroIds = Object.keys(data);
console.log('Total heroes crawled:', heroIds.length);

let missingBanner = 0;
let missingAvatar = 0;
let missingSkills = 0;

for (const id of heroIds) {
  const h = data[id];
  if (!h.bannerUrl) {
    missingBanner++;
    console.warn(`Missing banner: ${id} (${h.localName})`);
  }
  if (!h.garenaAvatar) {
    missingAvatar++;
    console.warn(`Missing avatar: ${id} (${h.localName})`);
  }
  if (!h.skills || h.skills.length === 0) {
    missingSkills++;
    console.warn(`Missing skills: ${id} (${h.localName})`);
  }
}

console.log('Summary:');
console.log('Missing Banners:', missingBanner);
console.log('Missing Avatars:', missingAvatar);
console.log('Missing Skills:', missingSkills);
console.log('\nSample Valhein:', JSON.stringify(data['valhein'], null, 2));
console.log('\nSample Stuart:', JSON.stringify(data['stuart'], null, 2));
console.log('\nSample Edras:', JSON.stringify(data['edras'], null, 2));
