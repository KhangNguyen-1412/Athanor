const fs = require('fs');

const garenaList = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_heroes_list.json', 'utf8'));

console.log('Total in Garena:', garenaList.length);
garenaList.forEach((g, i) => {
  const slug = g.detailUrl.replace('https://lienquan.garena.vn/hoc-vien/tuong-skin/d/', '').replace('/', '');
  console.log(`${i+1}. [${slug}] ${g.name}`);
});
