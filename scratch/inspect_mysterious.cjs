async function inspectFlowborn() {
  for (const url of [
    'https://lienquan.garena.vn/hoc-vien/tuong-skin/d/flowborn/',
    'https://lienquan.garena.vn/hoc-vien/tuong-skin/d/flowborn-2/',
    'https://lienquan.garena.vn/hoc-vien/tuong-skin/d/bolt-baron/',
    'https://lienquan.garena.vn/hoc-vien/tuong-skin/d/billow/'
  ]) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      const titleMatch = html.match(/<li class="active"><a>([^<]+)<\/a><\/li>/);
      const skinMatch = html.match(/class="hero__skins--detail\s+active"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i)
        || html.match(/class="hero__skins--detail"[^>]*>[\s\S]*?<picture><img\s+src="([^"]+)"/i);
      const skinTitle = html.match(/<div class="hero__skins--detail active"[^>]*>\s*<h3>\s*([^<]+)/);
      const skills = [];
      const skillRegex = /<li[^>]*>[\s\S]*?<a\s+href="([^"]+)"[^>]*title="([^"]*)"[^>]*>[\s\S]*?<img\s+src="([^"]+)"/gi;
      let s;
      while ((s = skillRegex.exec(html)) !== null) {
        skills.push({ title: s[2], icon: s[3] });
      }
      console.log('--- URL:', url);
      console.log('Title breadcrumb:', titleMatch ? titleMatch[1] : 'none');
      console.log('Skin title:', skinTitle ? skinTitle[1].trim() : 'none');
      console.log('Banner:', skinMatch ? skinMatch[1] : 'none');
      console.log('Skills:', skills);
    } catch (e) {
      console.error(e);
    }
  }
}

inspectFlowborn();
