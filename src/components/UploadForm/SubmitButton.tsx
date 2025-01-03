import { GlowButton } from '@components/GlowButton'

import styles from './styles.module.css'

import type { SubmitButtonProps } from './types'

export const SubmitButton = ({ isActive }: SubmitButtonProps) => {
  return (
    <GlowButton
      text="SHARE"
      type="submit"
      title="Create Shared Page"
      formMethod="post"
      disabled={isActive}
      className={styles.form_button}
    />
  )
}
