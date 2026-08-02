import siteData from '@/data/site.json'

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(siteData.contact.whatsappMessage)}`

  return (
    <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-10 bg-bg-primary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gold/20 bg-gold-subtle px-3 py-1">
              <svg className="h-3 w-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span className="text-[10px] font-semibold text-gold-light uppercase tracking-wider">Since 1946</span>
            </span>
            <span className="text-[10px] font-medium text-text-dim">80 Years of Legacy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-white leading-[1.1] font-serif animate-fade-up">
            {siteData.fullName}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {siteData.tagline} — Premium mouth fresheners crafted with generations-old recipes and the finest natural ingredients.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl bg-whatsapp px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-whatsapp/90 hover:shadow-lg hover:shadow-whatsapp/25 active:scale-[0.97] shadow-lg shadow-whatsapp/10">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c 0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </a>
            <a href="#products" className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-secondary/50 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-text-light transition-all duration-200 hover:border-accent/40 hover:text-accent-light hover:bg-accent/5 active:scale-[0.97]">
              Browse Products
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 sm:gap-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent-light font-serif">150+</div>
              <div className="text-xs text-text-dim mt-1">Premium Varieties</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent-light font-serif">100%</div>
              <div className="text-xs text-text-dim mt-1">Natural</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent-light font-serif">80+</div>
              <div className="text-xs text-text-dim mt-1">Years Legacy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
