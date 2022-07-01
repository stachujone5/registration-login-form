import { Container } from '../../components/container/Container'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { LoginForm } from '../../components/login-form/LoginForm'

export const LoginPage = () => {
	return (
		<Container>
			<Header>Login</Header>
			<LoginForm />
			<Footer infoText="Don't have an account?" btnText='Sign up' to='/register' />
		</Container>
	)
}
