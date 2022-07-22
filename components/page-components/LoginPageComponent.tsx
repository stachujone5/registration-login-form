import Head from 'next/head'

import { LoginForm } from '../login-form/LoginForm'
import { Footer } from '../shared/footer/Footer'
import { Header } from '../shared/header/Header'

export const LoginPageComponent = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header>Login</Header>
      <LoginForm />
      <Footer infoText="Don't have an account?" btnText='Sign up' href='/register' />
    </>
  )
}
