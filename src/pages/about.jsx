import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>Furniture Design/about</title>
      </Head>
      <Main />
    </>
  )
}
