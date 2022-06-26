import { Container } from '../../Components/container/Container'
import { Header } from '../../Components/header/Header'
import { LoginBody } from './LoginBody'
import { Footer } from '../../Components/footer/Footer'

export const LoginPage = () => {
	return (
		<Container>
			<Header>Login</Header>
			<LoginBody />
			<Footer infoText="Don't have an account?" btnText='Sign up' to='/register' />
		</Container>
	)
}
