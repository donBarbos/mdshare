import Link from 'next/link'

import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      {new Date().getFullYear()}&nbsp;|&nbsp;
      <Link href="https://donbarbos.me">donBarbos</Link>
    </footer>
  )
}
