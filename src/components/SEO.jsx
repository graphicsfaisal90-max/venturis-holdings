import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://venturisholdings.com'

export default function SEO({ title, description, path, keywords }) {
  const fullTitle = title ? `${title} | Venturis Holdings LLC` : 'Venturis Holdings LLC | UAE-Based Diversified Holding Company'
  const url = `${BASE_URL}${path}`
  const image = `${BASE_URL}/logo.png`

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Venturis Holdings LLC',
    url: BASE_URL,
    logo: image,
    description: 'Venturis Holdings LLC is a UAE-based diversified holding company delivering excellence across transport, logistics, interiors, facilities management, real estate, automotive, and tourism.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5th Floor, Al Saqr Tower, Sheikh Zayed Road',
      addressLocality: 'Dubai',
      addressCountry: 'UAE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-58-531-8860',
      contactType: 'customer service',
    },
    sameAs: [
      'https://venturisholdings.com',
    ],
    knowsAbout: [
      'Transport Services UAE',
      'Logistics Solutions Dubai',
      'Interior Design Dubai',
      'Facilities Management UAE',
      'Real Estate Dubai',
      'Automotive Solutions UAE',
      'Tourism Services UAE',
    ],
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:site_name" content="Venturis Holdings LLC" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  )
}
