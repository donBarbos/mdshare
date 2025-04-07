import Link from 'next/link'

import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'

import styles from './about.module.css'

import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <SEO title="about" />
      <Layout>
        <h1>About this site</h1>
        <h2 className={styles.title}>
          📄 Share and Collaborate Effortlessly with <b>.mdShare</b>
        </h2>
        <p className={styles.description}>
          &#8195;Tired of struggling to share and collaborate on Markdown files? Look no further!
          Introducing <b>.mdShare</b>, the ultimate self-hosted solution for hassle-free Markdown
          file sharing.
        </p>
        <h2 className={styles.title}>💡 The Challenge: Sharing Markdown Files Made Difficult</h2>
        <p className={styles.description}>
          &#8195;Many of us work with Markdown files daily, be it for writing documentation,
          technical notes, or simply sharing formatted text. However, traditional file-sharing
          methods often fall short when it comes to Markdown. Converting Markdown files to other
          formats like PDF or Word can lead to formatting issues.
        </p>
        <h2 className={styles.title}>
          🌟 The <b>.mdShare</b> Solution: Simplify Markdown File Sharing
        </h2>
        <p className={styles.description}>
          &#8195;Effortless Sharing: Upload your Markdown files with a few clicks, preserving all
          the formatting, making it convenient for you.
        </p>
        <p className={styles.description}>
          &#8195;Don&rsquo;t let the complexities of sharing on Markdown files hold you back.
          Embrace <b>.mdShare</b>, your all-in-one solution for easy, and efficient Markdown file
          management. Experience the joy of seamless collaboration today! 🎉 💻
        </p>
        <h2 className={styles.title}>📝 How to use? Short instruction:</h2>
        <ol className={styles.list}>
          <li>
            Open <Link href="./">Mainpage</Link>
          </li>
          <li>
            Upload your <code className={styles.highlight}>File.md</code>
          </li>
          <li>Congratulations! You got link</li>
        </ol>
      </Layout>
    </>
  )
}

export default About
