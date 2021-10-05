import { InputHTMLAttributes } from 'react';

export type TextInputVariant = 'outlined'

export interface TextInputProps extends InputHTMLAttributes<{}> {
  variant?: TextInputVariant
  htmlFor: string
  label?: string
  fullWidth?: boolean
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (value: string) => void
}
