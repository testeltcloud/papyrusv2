/*
  Generates lightweight SVG placeholders into /public/images so the layout
  renders before the real assets exist. Re-run with `node scripts/gen-placeholders.mjs`.
  Safe to delete this script (and the generated .svg files) once real images
  are in place.
*/
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
mkdirSync(outDir, { recursive: true });

// name, width, height (mirrors lib/images.ts)
const assets = [
  ["hero-app", 600, 640],
  ["feature-connection", 360, 200],
  ["feature-dashboard", 520, 320],
  ["feature-indicators", 380, 320],
  ["feature-glossary", 400, 340],
  ["feature-gift", 300, 260],
  ["diff-transparency", 420, 300],
  ["diff-clarity", 420, 300],
  ["diff-security", 420, 300],
  ["specialist-phones", 520, 460],
  ["cta-phone", 280, 320],
];

const box = (w, h, label) => {
  const cx = w / 2;
  const cy = h / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label} placeholder">
  <rect width="${w}" height="${h}" rx="16" fill="#E9EEF0"/>
  <rect x="1.5" y="1.5" width="${w - 3}" height="${h - 3}" rx="14" fill="none" stroke="#CBD6DC" stroke-dasharray="7 7"/>
  <g transform="translate(${cx - 23}, ${cy - 34})" stroke="#9BAAB4" stroke-width="2" fill="none">
    <rect x="0" y="0" width="46" height="36" rx="6"/>
    <circle cx="13" cy="12" r="4.5"/>
    <path d="M3 31 17 18l8 7 10-10 8 9v7H3z" fill="#9BAAB4" stroke="none" opacity="0.65"/>
  </g>
  <text x="${cx}" y="${cy + 22}" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#5B6470">${label}</text>
  <text x="${cx}" y="${cy + 41}" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="11" fill="#94A2AD">${w} × ${h}</text>
</svg>`;
};

for (const [name, w, h] of assets) {
  writeFileSync(join(outDir, `${name}.svg`), box(w, h, name));
}

// Brand logo placeholder (hexagon mark + wordmark).
const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="36" viewBox="0 0 150 36" role="img" aria-label="Papyrus Ads">
  <g transform="translate(2,4)">
    <path d="M14 0 27 7.4v14.8L14 29.6 1 22.2V7.4z" fill="none" stroke="#17A47C" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M14 7 20.5 10.7v7.4L14 21.8 7.5 18.1v-7.4z" fill="#5FC4A3"/>
  </g>
  <text x="37" y="24" font-family="system-ui,-apple-system,sans-serif" font-size="17" font-weight="800" fill="#0C2C4A" letter-spacing="-0.3">Papyrus</text>
  <text x="113" y="24" font-family="system-ui,-apple-system,sans-serif" font-size="17" font-weight="800" fill="#17A47C" letter-spacing="0.4">ADS</text>
</svg>`;
writeFileSync(join(outDir, "logo.png"), logo);

console.log(`Generated ${assets.length + 1} placeholder images in public/images/`);
