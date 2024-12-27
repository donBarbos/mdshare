import styles from './styles.module.css'

import type { GlowButtonProps } from './types'

export const GlowButton = ({
  text,
  type,
  title,
  formMethod,
  disabled,
  className,
}: GlowButtonProps) => {
  return (
    <button
      className={`${styles.glow_button} ${className}`}
      type={type}
      title={title}
      formMethod={formMethod}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
