import { InputHTMLAttributes } from 'react';

export type TextInputVariant = 'outlined'

export interface IContainerTextInputProps {
  className?: string
}

export interface ITextInputProps extends InputHTMLAttributes<{}> {
  id: string
  variant?: TextInputVariant
  label?: string
  fullWidth?: boolean
  containerProps?: IContainerTextInputProps
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (value: string) => void
}

export interface IRefTextInput {
  current: HTMLInputElement | null
}