import { useState } from 'react'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

import {
  HomeTemplate,
} from '@components'

import { fetcher, resolveErrorMessage } from '@lib'
import HashForm from '../src/page-components/Index/HashForm'
import CompareForm from '../src/page-components/Index/CompareForm'

interface GeneralResponse {
  data: string
}

const Index: NextPage = () => {
  const [_hashedText, _setHashedText] = useState<string>('')
  const [_hashLoading, _setHashLoading] = useState<boolean>(false)
  const [_hashError, _setHashError] = useState<string | null>(null)

  const [_compareLoading, _setCompareLoading] = useState<boolean>(false)
  const [_compareError, _setCompareError] = useState<string | null>(null)
  const [_compareSuccess, _setCompareSuccess] = useState<boolean>(false)

  const { control: hashControl, handleSubmit: hashHandleSubmit } = useForm<{
    data: string
    saltRound: string
  }>()

  const { control: compareControl, handleSubmit: compareHandleSubmit } = useForm<{
    data: string
    hash: string
  }>()

  const postHashData = async (bodyData: any) => {
    _setHashLoading(true)
    _setHashedText('')
    try {
      const response = await fetcher<GeneralResponse>('/api/bcrypt-hash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
      })
      if (response?.data) {
        _setHashedText(response.data)
        _setHashError(null)
      }
    } catch (error) {
      _setHashError(resolveErrorMessage(error))
    } finally {
      _setHashLoading(false)
    }
  }

  const onHashSubmit = hashHandleSubmit((data) => {
    postHashData(data)
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

        <h2 className='text-lg font-semibold capitalize'>hash</h2>

        <HashForm
          loading={_hashLoading}
          error={_hashError}
          control={hashControl}
          hashTextValue={_hashedText}
          onSubmit={onHashSubmit}
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
