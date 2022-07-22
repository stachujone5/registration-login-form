import Head from 'next/head'

import { Footer } from '../shared/footer/Footer'
import { Header } from '../shared/header/Header'

export const NotFoundPageComponent = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <Header>404 error</Header>
      <Footer infoText="Looks like you've found a dead end" btnText='Go back to home page' href='/login' />
    </>
  )
}
