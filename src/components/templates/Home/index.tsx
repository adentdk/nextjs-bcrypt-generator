import Head from 'next/head'
import { classNames } from '../../../lib/utils/style'
import Navbar from '../../organisms/Navbar'
import { IHomeProps } from './interfaces'

export default function HomeTemplate({ title = 'NextJS Bcrypt Generator', description = 'Simple NextJS Bcrypt Generator', children, className = '' }: IHomeProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header>
        <Navbar />
      </header>
      <main className={classNames("block", className)}>
        {children}
      </main>
    </>
  )
}
