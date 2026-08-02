'use client'

import { useEffect, useRef } from 'react'
import siteData from '@/data/site.json'

const icons = [
  <svg key="0" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>,
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.589-1.202L18.75 4.971zm-2.625 10.727L16.5 18.75m-1.5-6.614l-1.5 6.614m1.5-6.614a48.288 48.288 0 00-3.75-.25c-1.25 0-2.492.085-3.711.25m-1.5 6.614l.75-3.75m-1.5 0l.75 3.75m0 0l.75-3.75m-1.125 5.192l-1.5-5.192m2.625 5.192l1.5-5.192"/></svg>,
  <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>,
]

export default function Trust() {
  const { features } = siteData.about
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = el.querySelectorAll('.animate-on-scroll')
    cards.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-12 sm:py-16 bg-bg-primary border-t border-border scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-gold/20 bg-gold-subtle px-3 py-1 mb-3">
            <svg className="h-3 w-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span className="text-[10px] font-semibold text-gold-light uppercase tracking-wider">Why Shivlal Jeram</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-white font-serif">Trusted for Generations</h2>
          <p className="mt-1.5 text-sm text-text-muted">Over 80 years of excellence in crafting premium mukhwas</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((f, i) => (
            <div key={i} className={`animate-on-scroll rounded-xl border p-4 sm:p-5 text-center ${i === 0 ? 'border-gold/20 bg-gradient-to-br from-gold-subtle to-transparent' : 'border-border bg-bg-card backdrop-blur-sm hover:border-accent/20'} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`flex items-center justify-center h-12 w-12 rounded-xl mx-auto mb-2.5 ${i === 0 ? 'bg-gold/10 text-gold-light' : 'bg-accent-subtle text-accent-light'}`}>
                {icons[i]}
              </div>
              <h3 className="text-sm font-semibold text-text-white">{f.title}</h3>
              <p className="mt-1 text-xs text-text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
