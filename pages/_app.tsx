import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './../components/layout/Header'
import Main from './../components/layout/Main'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}