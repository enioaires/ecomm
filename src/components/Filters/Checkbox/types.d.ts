import { ReactNode } from 'react'

export interface ICheckbox {
  handleChange: (e: boolean, id: string) => void
  label: ReactNode
  id: string
}
