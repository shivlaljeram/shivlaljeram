'use client'

import { useEffect, useRef } from 'react'
import siteData from '@/data/site.json'

const stars = (n: number) => Array.from({ length: 5 }, (_, i) => (
  <svg key={i} className={`h-3.5 w-3.5 ${i < n ? 'text-gold' : 'text-text-dim'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
))

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { testimonials } = siteData

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

  if (!testimonials || testimonials.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/20 bg-accent-subtle px-3 py-1 mb-3">
            <span className="text-[10px] font-semibold text-accent-light uppercase tracking-wider">Testimonials</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-white font-serif">What Our Customers Say</h2>
          <p className="mt-1.5 text-sm text-text-muted">Real feedback from real people who love Shivlal Jeram Dhanawala</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="animate-on-scroll rounded-xl border border-border bg-bg-card backdrop-blur-sm p-5 hover:border-accent/20 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex gap-0.5 mb-3">
                {stars(t.rating)}
              </div>
              <p className="text-xs sm:text-sm text-text-light leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 pt-3 border-t border-border/50">
                <p className="text-sm font-semibold text-text-white">{t.name}</p>
                <p className="text-[10px] text-text-muted">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
