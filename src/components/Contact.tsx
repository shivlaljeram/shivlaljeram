'use client'

import siteData from '@/data/site.json'
import { useState } from 'react'

export default function Contact() {
  const { contact, fullName } = siteData
  const [name, setName] = useState('')

  const directUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
  const quickUrl = name
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`${contact.whatsappMessage}\n\n*Name:* ${name}`)}`
    : directUrl

  return (
    <section id="contact" className="py-12 sm:py-16 bg-bg-secondary border-t border-border scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/20 bg-accent-subtle px-3 py-1 mb-3">
              <span className="text-[10px] font-semibold text-accent-light uppercase tracking-wider">Connect</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-white font-serif">Get in Touch</h2>
            <p className="mt-1.5 text-sm text-text-muted">We&apos;d love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <a href={directUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center rounded-xl border border-border bg-bg-card backdrop-blur-sm p-5 transition-all duration-200 hover:border-whatsapp/30 hover:bg-whatsapp/5 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp mb-2.5">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="text-sm font-semibold text-text-white">WhatsApp</h3>
              <span className="mt-1 text-xs text-whatsapp">Send Message</span>
            </a>

            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex flex-col items-center rounded-xl border border-border bg-bg-card backdrop-blur-sm p-5 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-subtle text-accent-light mb-2.5">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
              </div>
              <h3 className="text-sm font-semibold text-text-white">Call</h3>
              <span className="mt-1 text-xs text-text-muted">{contact.phone}</span>
            </a>
          </div>

          <div className="rounded-xl border border-border bg-bg-card backdrop-blur-sm p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-text-white mb-2.5">Quick Inquiry</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-bg-primary/60 px-3 py-2.5 text-sm text-text-white placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent/40 transition-all"
              />
              <a href={quickUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-whatsapp/90 active:scale-[0.97]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Send
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-text-dim">
            <span>{fullName} — Since 1946</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>{contact.phone}</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>{contact.hours}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
