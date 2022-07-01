import { Container } from '../../components/container/Container'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { RegisterForm } from '../../components/register-form/RegisterForm'

export const RegisterPage = () => {
	return (
		<Container>
			<Header>Register</Header>
			<RegisterForm />
			<Footer infoText='Already have an account?' btnText='Sign in' to='/login' />
		</Container>
	)
}
