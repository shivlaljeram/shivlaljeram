import sharp from 'sharp'
import { readFileSync, readdirSync, existsSync, mkdirSync } from 'fs'
import { join, parse } from 'path'

const srcDir = join(import.meta.dirname, '..', 'public', 'images', 'products')
const outDir = join(import.meta.dirname, '..', 'public', 'images', 'products')

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const files = readdirSync(srcDir).filter(f => f.endsWith('.svg'))

for (const file of files) {
  const inputPath = join(srcDir, file)
  const name = parse(file).name
  const outputPath = join(outDir, `${name}.webp`)

  const svg = readFileSync(inputPath)

  await sharp(svg)
    .resize(800, 800, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(outputPath)

  console.log(`✅ ${file} → ${name}.webp (800×800)`)
}

console.log('\n🎉 All images converted to WebP!')
