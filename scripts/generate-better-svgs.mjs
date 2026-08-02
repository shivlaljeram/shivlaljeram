import { writeFileSync } from 'fs'
import { join } from 'path'

const products = [
  { name: 'jamnagari-mukhwas', color: '#D97706', label: 'Jamnagari\nMukhwas' },
  { name: 'mitha-pan-mukhwas', color: '#059669', label: 'Mitha Pan\nMukhwas' },
  { name: 'kalakatti-pan-mukhwas', color: '#B45309', label: 'Kalakatti Pan\nMukhwas' },
  { name: '7-seeds-mukhwas', color: '#65A30D', label: '7 Seeds\nMukhwas' },
  { name: 'til-gotli-mukhwas', color: '#92400E', label: 'Til Gotli\nMukhwas' },
  { name: 'roasted-mukhwas', color: '#78716C', label: 'Roasted\nMukhwas' },
  { name: 'gotli-mukhwas', color: '#A16207', label: 'Gotli\nMukhwas' },
  { name: 'chokidhani-mukhwas', color: '#7C3AED', label: 'Chokidhani\nMukhwas' },
  { name: 'ice-cream-mukhwas', color: '#F59E0B', label: 'Ice Cream\nMukhwas' },
  { name: 'sweet-mukhwas', color: '#DC2626', label: 'Sweet\nMukhwas' },
  { name: 'masala-ginger-vati', color: '#D97706', label: 'Masala Ginger\nVati' },
  { name: 'roasted-kaju', color: '#B45309', label: 'Roasted\nKaju' },
  { name: 'masala-kaju', color: '#92400E', label: 'Masala\nKaju' },
  { name: 'pudina-mint-vati', color: '#16A34A', label: 'Pudina Mint\nVati' },
  { name: 'hing-dana', color: '#A16207', label: 'Hing Dana' },
  { name: 'jeera-goli-vati', color: '#4D7C0F', label: 'Jeera Goli\nVati' },
  { name: 'hing-vati', color: '#78350F', label: 'Hing\nVati' },
  { name: 'pipal-sev-vati', color: '#3F3F46', label: 'Pipal Sev\nVati' },
]

const dir = join(import.meta.dirname, '..', 'public', 'images', 'products')

function generateSVG(c, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c}15"/>
      <stop offset="100%" stop-color="${c}08"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${c}25"/>
      <stop offset="100%" stop-color="${c}05"/>
    </radialGradient>
    <linearGradient id="bowl" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1C1E26"/>
      <stop offset="100%" stop-color="#111318"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <circle cx="200" cy="180" r="140" fill="url(#glow)"/>
  <!-- Bowl -->
  <ellipse cx="200" cy="220" rx="90" ry="28" fill="url(#bowl)" opacity="0.5"/>
  <ellipse cx="200" cy="210" rx="85" ry="22" fill="#0A0B0E" opacity="0.4"/>
  <!-- Seeds scatter -->
  ${generateSeeds(c)}
  <!-- Decorative rings -->
  <circle cx="200" cy="180" r="120" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.12"/>
  <circle cx="200" cy="180" r="110" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.08"/>
  <!-- Bottom label bar -->
  <rect x="100" y="340" width="200" height="3" rx="1.5" fill="${c}" opacity="0.3"/>
  <rect x="120" y="348" width="160" height="1.5" rx="1" fill="${c}" opacity="0.15"/>
</svg>`
}

function generateSeeds(c) {
  const seeds = []
  const positions = [
    [170, 200], [185, 190], [210, 195], [195, 210], [220, 205],
    [180, 185], [205, 180], [160, 205], [230, 190], [175, 215],
    [215, 215], [190, 170], [240, 200], [155, 195], [225, 180],
    [165, 190], [200, 200], [235, 210], [145, 200], [185, 175],
    [210, 170], [170, 180], [220, 195], [190, 205], [155, 210],
  ]
  for (const [x, y] of positions) {
    const r = (Math.random() * 3 + 3).toFixed(1)
    const o = (Math.random() * 0.4 + 0.4).toFixed(2)
    seeds.push(`  <circle cx="${x}" cy="${y}" r="${r}" fill="${c}" opacity="${o}"/>`)
  }
  return seeds.join('\n')
}

for (const p of products) {
  const svg = generateSVG(p.color, p.label)
  writeFileSync(join(dir, `${p.name}.svg`), svg)
  console.log(`✅ ${p.name}.svg`)
}

console.log('\n🎉 All 18 product SVGs generated with better design!')
