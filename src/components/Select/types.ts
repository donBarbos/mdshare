type valueType = any

export type SelectOption = {
  label: string
  value: valueType
}

export type SelectProps = {
  id: string
  name: string
  options: SelectOption[]
  onChange: (value: string) => void
  value?: string
  defaultValue?: valueType
  label?: string
  className?: string
}
