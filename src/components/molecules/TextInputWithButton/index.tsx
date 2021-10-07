import { forwardRef } from 'react'
import { classNames } from '../../../lib/utils/style'
import Button from '../../atoms/Button'
import TextInput from '../../atoms/TextInput'
import { IRefTextInput } from '../../atoms/TextInput/interfaces'
import { ITextInputWithButtonProps } from './interfaces'

const TextInputWithButton = forwardRef<IRefTextInput, ITextInputWithButtonProps>(({
  buttonProps: {className: buttonClassName = '', ...buttonProps}, className = '', label, ...props
}: ITextInputWithButtonProps, ref) => (
    <div className="flex items-center">
      <TextInput label={label} ref={ref} className={classNames('rounded-r-none flex-1', className)} {...props} />
      <Button className={classNames("rounded-l-none", label ? 'mt-7' : '', buttonClassName)} {...buttonProps} />
    </div>
  ))

export default TextInputWithButton