'use client'

import { useState, useMemo } from 'react'
import productsData from '@/data/products.json'
import ProductCard from './ProductCard'

export default function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const categories = useMemo(() => {
    const cats = [...new Set(productsData.map(p => p.category))]
    return ['all', ...cats]
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return productsData.filter(p =>
      (category === 'all' || p.category === category) &&
      (!q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q))
    )
  }, [search, category])

  return (
    <section id="products" className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-bg-secondary border-t border-border scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/20 bg-accent-subtle px-3 py-1 mb-2">
              <span className="text-[10px] font-semibold text-accent-light uppercase tracking-wider">Our Range</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-white font-serif">Premium Products</h2>
            <p className="mt-1 text-sm text-text-muted">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</p>
          </div>
          <div className="relative w-full sm:w-72">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-bg-primary/60 backdrop-blur-sm pl-9 pr-3 py-2.5 text-sm text-text-white placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent/40 transition-all"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bg-card border border-border flex items-center justify-center">
              <svg className="h-6 w-6 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <p className="text-text-muted text-sm">No products match your search.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all duration-200 border ${
                    category === cat
                      ? 'bg-accent text-white border-accent shadow-md shadow-accent/20'
                      : 'bg-bg-card/50 text-text-muted border-border hover:border-accent/40 hover:text-text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
