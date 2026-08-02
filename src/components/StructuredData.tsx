import siteData from '@/data/site.json'
import productsData from '@/data/products.json'

export default function StructuredData() {
  const siteUrl = siteData.siteUrl
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.fullName,
    "alternateName": siteData.name,
    "description": siteData.description,
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "foundingDate": "1946",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteData.contact.phone,
      "contactType": "sales"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jamnagar",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      `https://wa.me/${siteData.contact.whatsapp}`
    ]
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": productsData.map((p, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": p.name,
      "description": p.description,
      "category": p.category,
      "image": `${siteUrl}/images/products/${p.image}.webp`,
      "brand": { "@type": "Brand", "name": siteData.fullName },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": siteUrl
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  )
}
