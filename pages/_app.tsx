import { UserProvider } from '../contexts/UserContext'

import type { AppProps } from 'next/app'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp