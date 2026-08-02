import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync, statSync } from 'fs'
import { join, parse, extname } from 'path'

const rootDir = join(import.meta.dirname, '..')
const srcDir = join(rootDir, 'raw-photos')
const outDir = join(rootDir, 'public', 'images', 'products')

if (!existsSync(srcDir)) {
  mkdirSync(srcDir, { recursive: true })
  console.log('📂 Folder banaya: raw-photos/ — ab isme apni saari JPG/PNG photos daal do, phir dobara script chalao.')
  process.exit(0)
}

const SUPPORTED = ['.jpg', '.jpeg', '.png']
const files = readdirSync(srcDir).filter(f => SUPPORTED.includes(extname(f).toLowerCase()))

if (files.length === 0) {
  console.log('❌ raw-photos/ folder me koi JPG/PNG nahi mili.')
  process.exit(1)
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

let converted = 0
let totalSaved = 0

for (const file of files) {
  const inputPath = join(srcDir, file)
  const cleaned = parse(file).name.toLowerCase().replace(/[^a-z0-9-\u0900-\u097F]+/g, '-').replace(/^-+|-+$/g, '')
  const name = (cleaned || parse(file).name.toLowerCase().replace(/\s+/g, '-')).replace(/-(jpg|jpeg|png)$/, '')
  const outputPath = join(outDir, `${name}.webp`)

  if (!name) continue

  const inputSize = statSync(inputPath).size

  await sharp(inputPath)
    .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
    .normalize()
    .modulate({ brightness: 1.06, saturation: 1.22, hue: 0 })
    .sharpen({ sigma: 1.1, flat: 1.5, jagged: 1.5 })
    .webp({ quality: 84 })
    .toFile(outputPath)

  const outputSize = statSync(outputPath).size
  const saved = inputSize - outputSize
  totalSaved += saved
  converted++

  console.log(`✅ ${file} → ${name}.webp  (${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB)`)
}

console.log(`\n🎉 ${converted} images convert ho gayi → public/images/products/`)
console.log(`💾 Total save: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`)
console.log(`\nAb in filenames ko products.json me daalna hai — bata do, main kar dunga.`)
