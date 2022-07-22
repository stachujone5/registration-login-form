import { Container } from '../components/shared/container/Container'
import { UserProvider } from '../contexts/UserContext'

import type { AppProps } from 'next/app'

import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </UserProvider>
  )
}

export default MyApp
