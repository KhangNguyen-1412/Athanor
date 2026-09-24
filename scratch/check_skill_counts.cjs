const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_full_data.json', 'utf8'));

const skillCounts = {};
for (const id in data) {
  const count = data[id].skills.length;
  skillCounts[count] = (skillCounts[count] || 0) + 1;
  if (count !== 4) {
    console.log(`Hero ${id} has ${count} skills:`, data[id].skills.map(s => s.title));
  }
}

console.log('Skill counts distribution:', skillCounts);
