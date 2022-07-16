import Head from 'next/head'

import { RegisterForm } from '../../components/register-form/RegisterForm'
import { Container } from '../../components/shared/container/Container'
import { Footer } from '../../components/shared/footer/Footer'
import { Header } from '../../components/shared/header/Header'

const RegisterPage = () => {
  return (
      <Container>
        <Head>
          <title>Register</title>
        </Head>
        <Header>Register</Header>
        <RegisterForm />
        <Footer infoText='Already have an account?' btnText='Sign in' href='/login' />
      </Container>
  )
}

export default RegisterPage
