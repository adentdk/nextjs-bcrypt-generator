import { LegacyRef , forwardRef } from 'react';
import { classNames } from '../../../lib/utils/style';
import { IRefTextInput, ITextInputProps } from './interfaces';

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
  onChangeText,
  onChange,
  ...props
}: ITextInputProps, ref) =>{
  const inputRef = ref as LegacyRef<HTMLInputElement>
  return (
    <div className={classNames("w-full", containerClassName)} {...containerProps}>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={id}>
        {label}
        <input
          {...props}
          id={id}
          ref={inputRef}
          type={type}
          onChange={(e) => {
            if (typeof onChange === 'function') {
              onChange(e);
            }

            if (typeof onChangeText === 'function') {
              onChangeText(e.target.value);
            }
          }}
          className={classNames(
            fullWidth ? 'w-full' : '',
            'block h-10 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring',
            className,
          )}
        />
      </label>
    </div>
  )})

export default TextInput