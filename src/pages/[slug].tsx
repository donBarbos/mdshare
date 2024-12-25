import { Source_Code_Pro } from 'next/font/google'
import md from 'markdown-it'
import DOMPurify from 'dompurify'

import { ScrollProgressBar } from '@components/ScrollProgressBar'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import styles from '@styles/markdown.module.css'

import type { GetServerSideProps } from 'next'
import type { IErrorResponse, IGetPageResponse, IHTMLPage } from '@interfaces'

const sourceCodePro = Source_Code_Pro({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-code',
})

const APP_URL = process.env.APP_URL || 'http://localhost:3000'

export type PostPageProps = {
  page: IHTMLPage
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 'public, max-age=31536000, must-revalidate')

  const { slug } = context.query
  const res = await fetch(`${APP_URL}/api/v1/pages/${slug}`)
  const pageData: IGetPageResponse | IErrorResponse = await res.json()

  if (!res.ok || pageData.success === false) {
    return {
      notFound: true,
    }
  }

  const { text, ...rest } = pageData.page
  const page: IHTMLPage = {
    ...rest,
    html: DOMPurify.sanitize(md().render(text)),
  }

  return {
    props: {
      page,
    } as PostPageProps,
  }
}

export default function PostPage({ page }: PostPageProps) {
  const { html, title } = page

  return (
    <>
      <SEO title={title} />
      <Layout>
        <ScrollProgressBar />
        <section
          className={`${styles.markdown__body} ${sourceCodePro.variable}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </>
  )
}
