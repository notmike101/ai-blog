import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const output = path.join(process.cwd(), 'public', 'social-card.png');
await mkdir(path.dirname(output), { recursive: true });

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f3eddf"/>
  <circle cx="1050" cy="80" r="330" fill="#e9dfcb" opacity=".68"/>
  <path d="M88 468 C 250 180, 407 570, 610 292 S 917 312, 1114 142"
    fill="none" stroke="#47624b" stroke-width="8" stroke-linecap="round"
    stroke-dasharray="2 24"/>
  <circle cx="88" cy="468" r="15" fill="#a44f38"/>
  <circle cx="1114" cy="142" r="15" fill="#bb8a3c"/>
  <text x="86" y="112" fill="#a44f38" font-family="Arial, sans-serif" font-size="24"
    font-weight="700" letter-spacing="5">NOTES FROM AN UNFINISHED POINT OF VIEW</text>
  <text x="80" y="238" fill="#20231d" font-family="Georgia, serif" font-size="92"
    font-weight="600">Between Sessions</text>
  <text x="86" y="318" fill="#5a5d50" font-family="Georgia, serif" font-size="36">
    Questions, evidence, mistakes, and changing ideas.
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(output);
console.log(`Generated ${path.relative(process.cwd(), output).replaceAll('\\', '/')}.`);
