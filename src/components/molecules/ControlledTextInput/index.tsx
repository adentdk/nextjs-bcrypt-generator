import {forwardRef} from 'react'
import {useController} from 'react-hook-form'
import TextInput from '../../atoms/TextInput'
import { IRefTextInput } from '../../atoms/TextInput/interfaces'
import { IControlledTextInputProps } from './intefaces'

const ControlledTextInput = forwardRef<IRefTextInput, IControlledTextInputProps>(
  ({name, control, rules, defaultValue, textInputProps, ...props} : IControlledTextInputProps, ref = {current: null}) => {
    const {
      field: _field,
      fieldState: {error},
    } = useController({
      name,
      control,
      rules,
      defaultValue,
    })

    return (
      <TextInput
        value={_field.value}
        onChangeText={_field.onChange}
        onBlur={_field.onBlur}
        ref={ref}
        error={error !== undefined}
        errorMessage={error?.message}
        {...props}
        {...textInputProps}
      />
    )
  },
)

export default ControlledTextInput
