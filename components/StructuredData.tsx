import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Spexop",
    "description": "Smart, scalable software development company specializing in web apps, mobile apps, and backend systems.",
    "url": "https://spexop.com",
    "logo": "https://spexop.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://spexop.com#contact"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Estonia"
    },
    "sameAs": [
      // Add your social media profiles here
      // "https://linkedin.com/company/spexop",
      // "https://github.com/spexop"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://spexop.com",
    "name": "Spexop",
    "description": "Professional software development services including web applications, mobile apps, and backend systems.",
    "url": "https://spexop.com",
    "telephone": "+372-xxx-xxxx", // Add your actual phone number
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Estonia",
      "addressLocality": "Tallinn" // Update with your actual city
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "59.4370", // Tallinn coordinates - update if different
      "longitude": "24.7536"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "59.4370",
        "longitude": "24.7536"
      },
      "geoRadius": "100000" // 100km radius
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": "Spexop"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Estonia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "Custom web applications using React, Next.js, and modern frameworks"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android mobile applications using Flutter and native technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Backend Development",
            "description": "Scalable backend systems, APIs, and database solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development", 
            "description": "Rapid prototype development for startup validation"
          }
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}