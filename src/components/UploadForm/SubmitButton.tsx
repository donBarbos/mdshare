import { GlowButton } from '@components/GlowButton'

import styles from './styles.module.css'

import type { SubmitButtonProps } from './types'

export const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <GlowButton
      text="SHARE"
      type="submit"
      title="Share selected file"
      formMethod="post"
      disabled={isLoading}
      className={styles.form_button}
    />
  )
}
