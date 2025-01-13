import { ChangeEvent } from 'react'

import styles from './styles.module.css'

import type { SelectProps } from './types'

export const Select = ({
  id,
  name,
  options,
  value,
  defaultValue,
  onChange,
  label,
  className,
}: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={`${styles.select__wrapper} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.select__label}>
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e)}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value ?? undefined}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
