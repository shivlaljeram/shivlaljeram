import siteData from '@/data/site.json'

export default function StructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.fullName,
    "alternateName": siteData.name,
    "description": siteData.description,
    "url": "https://jsdmukhwas.com",
    "logo": "https://jsdmukhwas.com/images/logo.svg",
    "foundingDate": "1946",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteData.contact.phone,
      "contactType": "sales",
      "email": siteData.contact.email
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
    "itemListElement": [
      {
        "@type": "Product",
        "name": "Jamnagari Mukhwas",
        "description": "Traditional Jamnagari-style mukhwas with authentic spices.",
        "category": "Mukhwas",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": "https://jsdmukhwas.com"
        }
      }
    ]
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
