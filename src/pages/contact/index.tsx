import Image from 'next/image'
import Link from 'next/link'

import profilePic from '@public/images/avatar.jpg'
import { SEO } from '@components/SEO'
import { Layout } from '@components/Layout'

import styles from './contact.module.css'

import type { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <>
      <SEO title="contact" />
      <Layout>
        <h1>Contact</h1>
        <h2 className={styles.person}>
          <Image
            src={profilePic}
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
            placeholder="blur"
          />
          &ensp;donBaros &ndash; author
        </h2>
        <ul className={styles.list}>
          <li>
            Email: <Link href="mailto:donbarbos@proton.me">donbarbos@proton.me</Link>
          </li>
          <li>
            Website: <Link href="https://donbarbos.me">donbarbos.me</Link>
          </li>
          <li>
            Github: <Link href="https://github.com/donBarbos">@donbarbos</Link>
          </li>
        </ul>
        <p className={styles.note}>
          &#8195;P.S. This website was made as my small pet project with{' '}
          <Link href="https://github.com/donBarbos/mdshare">open source</Link>, so you can use it to
          store your knowledge base. And if you have some idea for improvement or you found a bug
          you can write about it{' '}
          <Link href="https://github.com/donBarbos/mdshare/issues/new">here</Link>.
        </p>
      </Layout>
    </>
  )
}

export default Contact
