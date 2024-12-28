import { Navbar } from '@components/Navbar'

import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  )
}
