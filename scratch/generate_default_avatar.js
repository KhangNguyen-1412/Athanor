import fs from 'fs';
import path from 'path';

const championsDir = path.resolve('public/champions');
if (!fs.existsSync(championsDir)) {
  fs.mkdirSync(championsDir, { recursive: true });
}

// 1x1 transparent PNG in base64
const base64Png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const pngBuffer = Buffer.from(base64Png, 'base64');
fs.writeFileSync(path.join(championsDir, 'default.png'), pngBuffer);

// Also provide a nice SVG version
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" fill="#140d33"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#f0a828" stroke-width="2" stroke-dasharray="4 2"/>
  <circle cx="50" cy="42" r="20" fill="#2a1f4e" stroke="#d4af37" stroke-width="1.5"/>
  <path d="M25 84 C25 66 75 66 75 84 Z" fill="#2a1f4e" stroke="#d4af37" stroke-width="1.5"/>
  <polygon points="50,26 53,37 64,40 54,44 50,54 46,44 36,40 47,37" fill="#ffcf56"/>
</svg>`;
fs.writeFileSync(path.join(championsDir, 'default.svg'), svgContent);

console.log('Created default.png and default.svg successfully in public/champions/');
