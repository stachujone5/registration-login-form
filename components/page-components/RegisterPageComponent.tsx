import Head from 'next/head'

import { RegisterForm } from '../register-form/RegisterForm'
import { Footer } from '../shared/footer/Footer'
import { Header } from '../shared/header/Header'

export const RegisterPageComponent = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Header>Register</Header>
      <RegisterForm />
      <Footer infoText='Already have an account?' btnText='Sign in' href='/login' />
    </>
  )
}
