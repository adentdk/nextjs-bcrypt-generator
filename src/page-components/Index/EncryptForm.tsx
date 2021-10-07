import { Alert, Button, TextInput, TextInputWithButton } from "@components";
import { IRefTextInput, ITextInputProps } from "src/components/atoms/TextInput/interfaces";
import withControlledTextInput from "src/Hocs/withFormController";
import copy from 'copy-to-clipboard'
import { useState, useEffect } from "react";

interface IEncryptFormProps {
  onSubmit: () => void
  control: any
  encryptedTextValue: string
  loading: boolean
  error: string | null
}

const ControlledTextInput = withControlledTextInput<ITextInputProps, IRefTextInput>(TextInput);

const getChildrenButton = (loading: boolean, copied: boolean) => {
  if (loading) {
    return (
      <svg className='animate-spin h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
      </svg>
    )
  }
  if (copied) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>

    )
  }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3' />
    </svg>
  )
}

export default function EncryptForm({ onSubmit, error, control, encryptedTextValue, loading }: IEncryptFormProps) {
  const [_copied, _setCopied] = useState<boolean>(false)
  const [_showError, _setShowError] = useState<boolean>(error !== null);

  const childrenButton = getChildrenButton(loading, _copied)

  const buttonCopyDisabled = loading || encryptedTextValue === ''

  const hideErrorHandler = () => _setShowError(false)

  const buttonCopyHandler = () => {
    _setCopied(true)
    copy(encryptedTextValue)
  }

  useEffect(() => {
    if (_copied) {
      setTimeout(() => {
        _setCopied(false)
      }, 2000)
    }
  }, [_copied])

  useEffect(() => {
    _setShowError(error !== null)
  }, [error])
  return (
    <form onSubmit={onSubmit}>
      <div className='grid gap-3 grid-cols-1 sm:grid-cols-3 my-4'>
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
              className: 'sm:col-span-2'
            },
            label: 'Plain Text to encrypt',
            placeholder: 'Plain Text to encrypt',
            id: 'plain-text-to-encrypt',
            type: 'text',
            fullWidth: true,
            autoComplete: 'off',
            autoCapitalize: 'off'
          }}
        />
        <ControlledTextInput
          name='saltRound'
          control={control}
          defaultValue="10"
          textInputProps={{
            placeholder: 'Salt Round',
            id: 'salt-round',
            type: 'number',
            label: 'Salt round',
            fullWidth: true,
            min: 0
          }}
        />
      </div>

      <Alert show={_showError} message={error as string} variant="error" onRequestClose={hideErrorHandler} />

      <Button
        className='mb-4'
        fullWidth
        type='submit'
        variant='outlined'
        color='primary'>
        Submit
      </Button>

      <TextInputWithButton
        disabled
        id='encrypted-text'
        value={encryptedTextValue}
        placeholder='Encrypted Text'
        type='text'
        label="Encrypted"
        fullWidth
        buttonProps={{
          color: 'success',
          variant: 'outlined',
          children: childrenButton,
          onClick: buttonCopyHandler,
          disabled: buttonCopyDisabled
        }}
      />
    </form>
  )
}