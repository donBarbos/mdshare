import type { GlowButtonProps } from './types'
import styles from './styles.module.css'

export const GlowButton = ({ text, type, title, formMethod }: GlowButtonProps) => {
  return (
    <button className={styles.glow_button} type={type} title={title} formMethod={formMethod}>
      {text}
    </button>
  )
}
