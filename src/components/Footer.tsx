import Image from 'next/image'
import siteData from '@/data/site.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/images/logo.svg"
                alt="JSD Mukhwas"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-base font-bold text-text-white" style={{ fontFamily: 'var(--font-serif)' }}>{siteData.fullName}</span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-gold-light/50">Since 1946</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-text-muted">
            {siteData.footer.quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">{l.label}</a>
            ))}
          </div>

          <p className="text-xs text-text-dim">&copy; {year} {siteData.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
