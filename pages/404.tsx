import Head from 'next/head'

import { Container } from '../components/shared/container/Container'
import { Footer } from '../components/shared/footer/Footer'
import { Header } from '../components/shared/header/Header'

const NotFound = () => {
  return (
    <Container>
      <Head>
        <title>Not found</title>
      </Head>
      <Header>404 error</Header>
      <Footer infoText="Looks like you've found a dead end" btnText='Go back to home page' href='/login' />
    </Container>
  )
}

export default NotFound
