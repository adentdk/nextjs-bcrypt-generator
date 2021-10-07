import { useState, useRef } from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

import {
  Button,
  ControlledTextInput,
  HomeTemplate,
  TextInputWithButton,
} from '@components';

import { fetcher, classNames, resolveErrorMessage } from '@lib'
import { IRefTextInput } from 'src/components/atoms/TextInput/interfaces';

interface EncryptResponse {
  data: string
}

const Index: NextPage = () => {
  const [_encrypted, _setEncrypted] = useState<string>('');
  const [_loading, _setLoading] = useState<boolean>(false)
  const [_error, _setError] = useState<string | null>(null)

  const encryptedRef = useRef<IRefTextInput>(null)

  const { control, handleSubmit } = useForm<{
    data: string
    saltRound: string
  }>()

  const postEncryptData = async (bodyData: any) => {
    _setLoading(true)
    try {
      const response = await fetcher<EncryptResponse>('/api/bcrypt-encrypt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },      
        body: JSON.stringify(bodyData)
      });
      if (response?.data) {
        _setEncrypted(response.data)
        _setError(null)
      }
    } catch (error) {
      console.log('index', error)
      _setError(resolveErrorMessage(error))
    } finally {
      _setLoading(false)
    }
  }

  const onEncryptSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    postEncryptData(data)
  })

  const childrenButton = _loading ? (
    <svg className='animate-spin h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3' />
    </svg>
  )

  return (
    <HomeTemplate>
      <div className='container'>
        <section className='max-w-2xl p-6 mx-auto rounded-md shadow-md mt-4'>

          <h2 className='text-lg font-semibold capitalize'>Encrypt</h2>

          <form onSubmit={onEncryptSubmit}>
            <div className='grid gap-3 grid-cols-3 my-4'>
              <ControlledTextInput
                name='data'
                control={control}
                textInputProps={{
                  containerProps: {
                    className: 'col-span-2'
                  },
                  label: 'Text to encrypt',
                  placeholder: 'Text to encrypt',
                  id: 'text-to-encrypt',
                  type: 'text',
                  fullWidth: true
                }}
              />
              <ControlledTextInput
                name='saltRound'
                control={control}
                textInputProps={{
                  placeholder: 'Salt Round',
                  id: 'salt-round',
                  type: 'number',
                  label: 'Salt round',
                  fullWidth: true
                }}
              />
            </div>

            <div className={classNames("bg-error-100 border border-error-400 text-error-700 px-4 py-3 rounded relative mb-4", _error !== null ? 'block' : 'hidden')} role="alert">
              <span className="block sm:inline">{_error}</span>
              <button type="button" onClick={() => _setError(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-error-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </button>
            </div>
            
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
              value={_encrypted}
              placeholder='Encrypted Text'
              type='text'
              label="Encrypted"
              ref={encryptedRef}
              fullWidth
              buttonProps={{
                color: 'success',
                variant: 'outlined',
                children: childrenButton
              }}
            />
          </form>
        </section>
      </div>
    </HomeTemplate>
  )
};

export default Index;
