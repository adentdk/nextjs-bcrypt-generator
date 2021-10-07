import { IButtonProps, ButtonVariant, ButtonColor } from './intefaces'
import classes from './Button.module.css'
import { classNames } from '../../../lib/utils/style'

const mappedColor = ['primary', 'error', 'secondary', 'success', 'warning', 'info']

const getVariantClass = (variant: ButtonVariant) => classes[`button-${variant}`]

const getColorClass = (color: ButtonColor, variant: ButtonVariant) => {
  if (mappedColor.includes(color)) {
    return classes[`button-${variant}-${color}`]
  }
  return ''
}

export default function Button({
  type = 'button', disabled, color = 'primary', title, className = '', fullWidth = false, variant = 'contained', ...props
}: IButtonProps) {
  const buttonVariantClass = getVariantClass(variant)
  const buttonColorClass = getColorClass(color, variant)
  return (
    <button
      {...props}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={classNames(
        classes.button,
        fullWidth ? classes['button-fullwidth'] : '',
        buttonVariantClass,
        disabled ? classes[`button-${variant}-disabled`] : buttonColorClass,
        className,
      )}
    >
      {title || props.children}
    </button>
  )
}
