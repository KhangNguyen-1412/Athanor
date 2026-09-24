async function testFetch() {
  const url = 'https://lienquan.garena.vn/hoc-vien/tuong-skin/d/valhein/';
  console.log('Fetching:', url);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    console.log('Status:', res.status);
    const html = await res.text();
    console.log('HTML length:', html.length);
    
    // Check skins (bannerUrl)
    // <div class="hero__skins--detail active" id="heroSkin-1"> ... <picture><img src="..."
    const skinMatch = html.match(/class="hero__skins--detail\s+active"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i) 
      || html.match(/id="heroSkin-1"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i)
      || html.match(/class="hero__skins--detail"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i);
    
    console.log('Banner / Skin match:', skinMatch ? skinMatch[1] : 'NOT FOUND');

    // Check skills
    // <ul class="hero__skills--list"> ... <li><a href="#heroSkill-1" ... title="..."><img src="..."
    const skillListMatch = html.match(/<ul\s+class="hero__skills--list">([\s\S]*?)<\/ul>/i);
    if (skillListMatch) {
      const skillRegex = /<li[^>]*>[\s\S]*?<a\s+href="([^"]+)"[^>]*title="([^"]*)"[^>]*>[\s\S]*?<img\s+src="([^"]+)"/gi;
      let sMatch;
      const skills = [];
      while ((sMatch = skillRegex.exec(skillListMatch[1])) !== null) {
        skills.push({
          id: sMatch[1],
          title: sMatch[2],
          iconUrl: sMatch[3]
        });
      }
      console.log('Found skills:', skills);
    } else {
      console.log('Skill list not found');
    }

  } catch (err) {
    console.error('Fetch error:', err);
  }
}

testFetch();
