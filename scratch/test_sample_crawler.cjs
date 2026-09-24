const fs = require('fs');

const mapping = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/heroes_mapping.json', 'utf8'));

async function fetchHeroDetail(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) {
      console.warn(`Failed ${url}: ${res.status}`);
      return null;
    }
    const html = await res.text();

    // 1. Banner / Splash Art (Default Skin)
    // Priority: active skin -> heroSkin-1 -> first hero__skins--detail
    let bannerUrl = null;
    const activeSkinMatch = html.match(/class="hero__skins--detail\s+active"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i);
    const skin1Match = html.match(/id="heroSkin-1"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i);
    const anySkinMatch = html.match(/class="hero__skins--detail"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i);

    if (activeSkinMatch) bannerUrl = activeSkinMatch[1];
    else if (skin1Match) bannerUrl = skin1Match[1];
    else if (anySkinMatch) bannerUrl = anySkinMatch[1];

    // 2. Skills
    const skills = [];
    const skillsSectionMatch = html.match(/<section\s+class="hero__skills">([\s\S]*?)<\/section>/i);
    if (skillsSectionMatch) {
      const sectionHtml = skillsSectionMatch[1];
      const listMatch = sectionHtml.match(/<ul\s+class="hero__skills--list">([\s\S]*?)<\/ul>/i);
      if (listMatch) {
        const itemRegex = /<li[^>]*>[\s\S]*?<a\s+href="#(heroSkill-\d+)"[^>]*title="([^"]*)"[^>]*>[\s\S]*?<img\s+src="([^"]+)"/gi;
        let m;
        while ((m = itemRegex.exec(listMatch[1])) !== null) {
          const skillId = m[1];
          const skillTitle = m[2].trim();
          const iconUrl = m[3].trim();

          // Also get description from detail div if available
          const detailDivRegex = new RegExp(`<div\\s+class="hero__skills--detail[^"]*"\\s+id="${skillId}"[^>]*>[\\s\\S]*?<article>([\\s\\S]*?)<\\/article>`, 'i');
          const detailMatch = sectionHtml.match(detailDivRegex);
          let description = '';
          if (detailMatch) {
            description = detailMatch[1]
              .replace(/<br\s*\/?>/gi, '\n')
              .replace(/<[^>]+>/g, '')
              .trim();
          }

          skills.push({
            skillId,
            title: skillTitle,
            iconUrl,
            description
          });
        }
      }
    }

    return {
      bannerUrl,
      skills
    };
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
}

async function testSample() {
  const sample = mapping.slice(0, 5);
  for (const item of sample) {
    console.log(`Testing ${item.localName} (${item.localId}) -> ${item.garenaUrl}`);
    const data = await fetchHeroDetail(item.garenaUrl);
    console.log('Result:', {
      bannerUrl: data?.bannerUrl,
      skillsCount: data?.skills?.length,
      skills: data?.skills?.map(s => ({ title: s.title, icon: s.iconUrl }))
    });
  }
}

testSample();
