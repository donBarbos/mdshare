import Image from 'next/image'
import Link from 'next/link'

import profilePic from '@public/avatar.jpg'
import cuteCat from '@public/cat.jpg'
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
            src={cuteCat}
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
            placeholder="blur"
          />
          &ensp;my cat &ndash; mastermind
        </h2>
        <h2 className={styles.person}>
          <Image
            src={profilePic}
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
            placeholder="blur"
          />
          &ensp;donBaros &ndash; creator
        </h2>
        <ul className={styles.list}>
          <li>
            email: <Link href="mailto:donbarbos@proton.me">donbarbos@proton.me</Link>
          </li>
          <li>
            site: <Link href="https://donbarbos.me">donbarbos.me</Link>
          </li>
          <li>
            github: <Link href="https://github.com/donBarbos">@donbarbos</Link>
          </li>
          <li>
            telegram: <Link href="https://t.me/donbarbos">@donbarbos</Link>
          </li>
        </ul>
        <p>
          source code is available at{' '}
          <Link href="https://github.com/donBarbos/mdshare">this link</Link>
        </p>
      </Layout>
    </>
  )
}

export default Contact
