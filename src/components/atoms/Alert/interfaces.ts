
export type AlertVariant = 'error' | 'success'

export interface IAlertProps {
  variant?: AlertVariant
  show?: boolean
  message: string
  onRequestClose: () => void
}