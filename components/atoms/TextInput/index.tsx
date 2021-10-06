import { classNames } from '../../../utils/style';
import { ITextInputProps } from './interfaces';

export default function TextInput({
  id, type, label = '', className = '', fullWidth = false, onChangeText, onChange, ...props
}: ITextInputProps) {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={id}>
        {label}
        <input
          {...props}
          id={id}
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
            fullWidth ? 'w-full flex' : '',
            'block px-4 py-2 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring',
            className,
          )}
        />
      </label>
    </div>
  );
}
