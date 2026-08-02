import sharp from 'sharp'

const W = 1200
const H = 630

const bg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow1" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#F97316" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#0A0B0E" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="85%" cy="85%" r="50%">
      <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#0A0B0E" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0A0B0E"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
</svg>
`)

const cardW = 400
const cardH = 300
const card = Buffer.from(`
<svg width="${cardW}" height="${cardH}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${cardW}" height="${cardH}" rx="28" fill="#FFFFFF"/>
</svg>
`)

const logo = await sharp('public/images/logo.png')
  .resize({ width: 320, height: 240, fit: 'contain' })
  .toBuffer()

const cardLeft = Math.round((W - cardW) / 2)
const cardTop = Math.round((H - cardH) / 2)

const logoMeta = await sharp(logo).metadata()
const logoLeft = Math.round(cardLeft + (cardW - logoMeta.width) / 2)
const logoTop = Math.round(cardTop + (cardH - logoMeta.height) / 2)

await sharp(bg)
  .composite([
    { input: card, left: cardLeft, top: cardTop },
    { input: logo, left: logoLeft, top: logoTop },
  ])
  .png({ compressionLevel: 9 })
  .toFile('public/images/og-image.png')

console.log('og-image.png generated')
