import { useState } from 'react'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

import {
  HomeTemplate,
} from '@components'

import { fetcher, resolveErrorMessage } from '@lib'
import EncryptForm from 'src/page-components/Index/EncryptForm'
import CompareForm from 'src/page-components/Index/CompareForm'

interface GeneralResponse {
  data: string
}

const Index: NextPage = () => {
  const [_encryptedText, _setEncryptedText] = useState<string>('')
  const [_encryptLoading, _setEncryptLoading] = useState<boolean>(false)
  const [_encryptError, _setEncryptError] = useState<string | null>(null)

  const [_compareLoading, _setCompareLoading] = useState<boolean>(false)
  const [_compareError, _setCompareError] = useState<string | null>(null)
  const [_compareSuccess, _setCompareSuccess] = useState<boolean>(false)

  const { control: encryptControl, handleSubmit: encryptHandleSubmit } = useForm<{
    data: string
    saltRound: string
  }>()

  const { control: compareControl, handleSubmit: compareHandleSubmit } = useForm<{
    data: string
    hash: string
  }>()

  const postEncryptData = async (bodyData: any) => {
    _setEncryptLoading(true)
    _setEncryptedText('')
    try {
      const response = await fetcher<GeneralResponse>('/api/bcrypt-encrypt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
      })
      if (response?.data) {
        _setEncryptedText(response.data)
        _setEncryptError(null)
      }
    } catch (error) {
      _setEncryptError(resolveErrorMessage(error))
    } finally {
      _setEncryptLoading(false)
    }
  }

  const onEncryptSubmit = encryptHandleSubmit((data) => {
    postEncryptData(data)
  })

  const postCompareData = async (bodyData: any) => {
    _setCompareLoading(true)
    if (_compareSuccess) {
      _setCompareSuccess(false)
    }

    if (_setCompareError !== null) {
      _setCompareError(null)
    }
    try {
      const response = await fetcher<GeneralResponse>('/api/bcrypt-compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
      })
      if (response?.data) {
        _setCompareSuccess(true)
        _setCompareError(null)
      }
    } catch (error) {
      _setCompareError('Not Valid')
    } finally {
      _setCompareLoading(false)
    }
  }

  const onCompareSubmit = compareHandleSubmit((data) => {
    postCompareData(data)
  })

  return (
    <HomeTemplate>
      <section className='max-w-xl mx-auto p-6 rounded-md shadow-md my-4'>

        <h2 className='text-lg font-semibold capitalize'>encrypt</h2>

        <EncryptForm
          loading={_encryptLoading}
          error={_encryptError}
          control={encryptControl}
          encryptedTextValue={_encryptedText}
          onSubmit={onEncryptSubmit}
        />
      </section>
      
      <section className='max-w-xl mx-auto p-6 rounded-md shadow-md my-4'>

        <h2 className='text-lg font-semibold capitalize'>compare</h2>
        <CompareForm
          loading={_compareLoading}
          error={_compareError}
          control={compareControl}
          onSubmit={onCompareSubmit}
          success={_compareSuccess}
        />
      </section>
    </HomeTemplate>
  )
}

export default Index
