import { UseControllerProps, useController } from "react-hook-form"
import { forwardRef } from 'react'

interface IControlledTextInputProps<P> extends UseControllerProps {
  control: any
  textInputProps: Omit<P, 'value'|'onChangeText'|'error'|'ref'|'errorMessage'>
}

function withControlledTextInput<P, R>(Component: any) {
  return forwardRef<R, IControlledTextInputProps<P>>(
    ({ name, control, rules, defaultValue, textInputProps}: IControlledTextInputProps<P>, ref = { current: null }) => {
      const {
        field: _field,
        fieldState: { error },
      } = useController({
        name,
        control,
        rules,
        defaultValue,
      })

      return (
        <Component
          value={_field.value}
          onChangeText={_field.onChange}
          onBlur={_field.onBlur}
          ref={ref}
          error={error !== undefined}
          errorMessage={error?.message}
          {...textInputProps}
        />
      )
    }
  )
}
export default withControlledTextInput
