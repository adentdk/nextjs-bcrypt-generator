import { InputHTMLAttributes } from 'react';

export type TextInputVariant = 'outlined'

export interface ITextInputProps extends InputHTMLAttributes<{}> {
  id: string
  variant?: TextInputVariant
  htmlFor: string
  label?: string
  fullWidth?: boolean
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (value: string) => void
}
