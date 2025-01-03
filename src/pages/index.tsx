import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'
import { UploadForm } from '@components/UploadForm'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <h1 style={{ fontSize: '26px', marginTop: '0.5rem' }}>Upload Markdown File</h1>
        <UploadForm />
      </Layout>
    </>
  )
}

export default Home
