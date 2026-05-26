import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://venturisholdings.com'

export default function SEO({ title, description, path, keywords }) {
  const fullTitle = title ? `${title} | Venturis Holdings LLC` : 'Venturis Holdings LLC | UAE-Based Diversified Holding Company'
  const url = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
