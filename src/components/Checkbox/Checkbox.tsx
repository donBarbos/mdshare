import styles from './styles.module.css'

import type { CheckboxProps } from './types'

export const Checkbox = ({ id, name, value, onChange, label, className }: CheckboxProps) => {
  return (
    <div className={`${styles.checkbox__wrapper} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.checkbox__label}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={styles.checkbox}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
  )
}
