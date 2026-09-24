const fs = require('fs');

const mapping = JSON.parse(fs.readFileSync('C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/heroes_mapping.json', 'utf8'));
const OUT_PATH = 'C:/Users/nhpk1/.gemini/antigravity-ide/brain/2e4801d4-7208-48bd-9072-3e33ca8860d9/scratch/garena_full_data.json';

// Check if partial data already exists to support resuming
let results = {};
if (fs.existsSync(OUT_PATH)) {
  try {
    results = JSON.parse(fs.readFileSync(OUT_PATH, 'utf8'));
  } catch (e) {}
}

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (res.ok) {
        return await res.text();
      }
    } catch (e) {
      if (i === retries - 1) throw e;
    }
    await new Promise(r => setTimeout(r, 500));
  }
  return null;
}

function parseHeroHtml(html) {
  // 1. Banner / Splash Art
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

  return { bannerUrl, skills };
}

async function run() {
  console.log(`Starting crawl for ${mapping.length} heroes...`);
  
  // Deduplicate URLs to crawl efficiently
  const urlToHeroes = new Map();
  for (const item of mapping) {
    if (!urlToHeroes.has(item.garenaUrl)) {
      urlToHeroes.set(item.garenaUrl, []);
    }
    urlToHeroes.get(item.garenaUrl).push(item);
  }

  console.log(`Unique URLs to fetch: ${urlToHeroes.size}`);

  const entries = Array.from(urlToHeroes.entries());
  const BATCH_SIZE = 6;

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async ([url, heroes]) => {
      // Check if already fetched and has skills
      const sampleLocalId = heroes[0].localId;
      if (results[sampleLocalId] && results[sampleLocalId].skills?.length > 0) {
        // Already cached, propagate to any duplicates
        for (const h of heroes) {
          results[h.localId] = {
            ...results[sampleLocalId],
            localId: h.localId,
            localName: h.localName,
            garenaAvatar: h.garenaAvatar
          };
        }
        return;
      }

      try {
        const html = await fetchWithRetry(url);
        if (html) {
          const parsed = parseHeroHtml(html);
          for (const h of heroes) {
            results[h.localId] = {
              localId: h.localId,
              localName: h.localName,
              file: h.file,
              garenaName: h.garenaName,
              garenaAvatar: h.garenaAvatar,
              garenaUrl: h.garenaUrl,
              bannerUrl: parsed.bannerUrl,
              skills: parsed.skills
            };
          }
          console.log(`[OK] Fetched ${heroes.map(h => h.localName).join(', ')} (Banner: ${!!parsed.bannerUrl}, Skills: ${parsed.skills.length})`);
        } else {
          console.warn(`[WARN] Empty HTML for ${url}`);
        }
      } catch (err) {
        console.error(`[FAIL] ${url}: ${err.message}`);
      }
    }));

    // Periodic save
    fs.writeFileSync(OUT_PATH, JSON.stringify(results, null, 2));
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\nCrawl complete! Total heroes in results: ${Object.keys(results).length}`);
}

run();
