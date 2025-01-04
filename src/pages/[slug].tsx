import { Source_Code_Pro } from 'next/font/google'
import { useTheme } from 'next-themes'
import Giscus from '@giscus/react'

import { ScrollProgressBar } from '@components/ScrollProgressBar'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { convertPageToHTML } from '@utils/convertPage'
import styles from '@styles/markdown.module.css'

import type { GetServerSideProps } from 'next'
import type { IErrorResponse, IGetPageResponse, IHTMLPage } from '@interfaces'

const sourceCodePro = Source_Code_Pro({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-code',
})

const APP_URL = process.env.APP_URL
const GISCUS_USER = process.env.GISCUS_USER
const GISCUS_REPO = process.env.GISCUS_REPO
const GISCUS_REPO_ID = process.env.GISCUS_REPO_ID
const GISCUS_CATEGORY_ID = process.env.GISCUS_CATEGORY_ID

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

  const page = convertPageToHTML(pageData.page)

  return {
    props: {
      page,
    } as PostPageProps,
  }
}

export default function PostPage({ page }: PostPageProps) {
  const { html, title, isCommentable } = page
  const { theme } = useTheme()

  return (
    <>
      <SEO title={title} />
      <Layout>
        <ScrollProgressBar />
        <section
          className={`${styles.body} ${sourceCodePro.variable}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {isCommentable ? (
          <Giscus
            id="comments"
            repo={`${GISCUS_USER}/${GISCUS_REPO}`}
            repoId={GISCUS_REPO_ID as string}
            category="Announcements"
            categoryId={GISCUS_CATEGORY_ID as string}
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={theme}
            lang="en"
            loading="lazy"
          />
        ) : (
          <></>
        )}
      </Layout>
    </>
  )
}
