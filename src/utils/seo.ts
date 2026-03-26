interface SeoProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function generateSeo({
  title = 'Volt Share',
  description = 'Start simple, ship quickly.',
  image = '/logo512.png',
  url = 'https://volt-share.vercel.app',
}: SeoProps = {}) {
  const finalTitle = title === 'Volt Share' ? title : `${title} | Volt Share`

  return [
    { title: finalTitle },
    { name: 'description', content: description },
    { property: 'og:title', content: finalTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: finalTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]
}
