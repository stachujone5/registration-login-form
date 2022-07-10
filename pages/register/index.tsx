import { Container } from '../../components/container/Container'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { RegisterForm } from '../../components/register-form/RegisterForm'

const RegisterPage = () => {
  return (
    <Container>
      <Header>Register</Header>
      <RegisterForm />
      <Footer infoText='Already have an account?' btnText='Sign in' href='/login' />
    </Container>
  )
}

export default RegisterPage
