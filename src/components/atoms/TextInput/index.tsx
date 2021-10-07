import { forwardRef } from 'react'
import { classNames } from '../../../lib/utils/style'
import { IRefTextInput, ITextInputProps } from './interfaces'

const TextInput = forwardRef<IRefTextInput, ITextInputProps>(({
  id,
  type,
  label = '',
  className = '',
  containerProps: {
    className: containerClassName = '',
    ...containerProps
  } = {
    className: ''
  },
  fullWidth = false,
  error = false,
  errorMessage = '',
  onChangeText,
  onChange,
  ...props
}: ITextInputProps, ref) => (
    <div className={classNames("w-full", containerClassName)} {...containerProps}>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={id}>
        {label}
        <input
          {...props}
          id={id}
          ref={ref}
          type={type}
          onChange={(e) => {
            if (typeof onChange === 'function') {
              onChange(e)
            }

            if (typeof onChangeText === 'function') {
              onChangeText(e.target.value)
            }
          }}
          className={classNames(
            fullWidth ? 'w-full' : '',
            'block h-10 px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600  focus:outline-none focus:ring-2',
            error ? 'focus:border-error-500 focus:ring-red-500 dark:focus:border-error-500 dark:focus:ring-red-500' : 'focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500',
            className,
          )}
        />
        {error && <span className="text-xs text-error-500 dark:text-error-400">{errorMessage}</span>}
      </label>
    </div>
  ))

export default TextInput