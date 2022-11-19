import type { BurgerMenuProps } from './types'
import styles from './styles.module.css'

const BurgerMenu = ({ isActive, setActive }: BurgerMenuProps) => {
  return (
    <div className={isActive ? styles.hamburger_active : styles.hamburger} onClick={setActive}>
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </div>
  )
}

export default BurgerMenu
