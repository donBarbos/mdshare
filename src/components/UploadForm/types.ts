import type { IErrorResponse, IPostPageResponse } from '@interfaces'

export type ResultModalProps = {
  isActive: boolean
  setActive: (active: boolean) => void
  result: IPostPageResponse | IErrorResponse | null
}

export type SubmitButtonProps = {
  isActive: boolean
}
