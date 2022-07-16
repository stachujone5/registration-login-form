import Head from 'next/head'

import { LoginForm } from '../../components/login-form/LoginForm'
import { Container } from '../../components/shared/container/Container'
import { Footer } from '../../components/shared/footer/Footer'
import { Header } from '../../components/shared/header/Header'

const LoginPage = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <Header>Login</Header>
      <LoginForm />
      <Footer infoText="Don't have an account?" btnText='Sign up' href='/register' />
    </Container>
  )
}

export default LoginPage
