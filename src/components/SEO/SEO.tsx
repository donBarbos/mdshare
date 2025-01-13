import Head from 'next/head'
import { useRouter } from 'next/router'

import type { SEOProps } from './types'

const SITE_NAME = 'md share'
const SITE_URL = process.env.APP_URL

export const SEO = ({
  title = '',
  author = 'donBarbos',
  description = 'Best way to share your markdown files.',
  image = '/og.png',
  lang = 'en',
}: SEOProps) => {
  const location: string = useRouter().pathname.toString()

  const seo = {
    title: `${title ? title + ' | ' : ''}${SITE_NAME}`,
    author: author,
    description: description,
    image: image,
    imageUrl: `${SITE_URL}${image}`,
    lang: lang,
    url: `${SITE_URL}${location}`,
  }

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content="markdown, share, mdshare, md, md share, markdown share" />
      <link rel="canonical" href={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={seo.lang} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:image" content={seo.imageUrl} />
    </Head>
  )
}
