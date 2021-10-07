import { Alert, Button, TextInput } from "@components";
import { useState, useEffect } from "react";
import { IRefTextInput, ITextInputProps } from "../../components/atoms/TextInput/interfaces";
import withControlledTextInput from "../../Hocs/withFormController";

interface ICompareFormProps {
  onSubmit: () => void
  control: any
  loading: boolean
  error: string | null
  success: boolean
}

const ControlledTextInput = withControlledTextInput<ITextInputProps, IRefTextInput>(TextInput);

export default function CompareForm({ onSubmit, error, control, loading, success }: ICompareFormProps) {

  const [_showError, _setShowError] = useState<boolean>(error !== null);
  const [_showSucces, _setShowSucces] = useState<boolean>(success);

  const closeErrorAlerthandler = () => _setShowError(false)
  const closeSuccessAlerthandler = () => _setShowSucces(false)

  useEffect(() => {
    _setShowError(error !== null)
  }, [error])

  useEffect(() => {
    _setShowSucces(success)
  }, [success])

  return (
    <form onSubmit={onSubmit}>
      <div className='my-4'>
        <ControlledTextInput
          name='hash'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'required'
            }
          }}
          textInputProps={{
            containerProps: {
              className: 'mb-2'
            },
            label: 'Hash to compare',
            placeholder: 'Hash to compare',
            id: 'hash-to-compare',
            type: 'text',
            fullWidth: true,
            autoComplete: 'off',
            autoCapitalize: 'off'
          }}
        />
        <ControlledTextInput
          name='data'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'required'
            }
          }}
          textInputProps={{
            containerProps: {
              className: 'mb-2'
            },
            label: 'Plain Text to compare',
            placeholder: 'Plain Text to compare',
            id: 'plain-text-to-compare',
            type: 'text',
            fullWidth: true,
            autoComplete: 'off',
            autoCapitalize: 'off'
          }}
        />
      </div>

      <Alert show={_showError} message={error !== null ? error : ''} variant="error" onRequestClose={closeErrorAlerthandler} />

      <Alert show={_showSucces} message="Valid" variant="success" onRequestClose={closeSuccessAlerthandler} />

      <Button
        className='mb-4'
        fullWidth
        type='submit'
        variant='outlined'
        disabled={loading}
        color='primary'>
        Submit
      </Button>
    </form>
  )
}