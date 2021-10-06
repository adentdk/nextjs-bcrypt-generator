import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'contained' | 'outlined' | 'text'
export type ButtonColor = 'primary' | 'error' | 'secondary' | 'success' | 'warning' | 'info'

export interface IButtonProps extends ButtonHTMLAttributes<{}> {
    fullWidth?: Boolean
    variant?: ButtonVariant
    color?: ButtonColor
}
