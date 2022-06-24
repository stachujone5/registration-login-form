import { Container } from '../../Components/Container/Container'
import { Header } from '../../Components/Header/Header'
import { LoginBody } from './LoginBody'
import { Footer } from '../../Components/Footer/Footer'

export const LoginPage = () => {
	return (
		<Container>
			<Header>Login</Header>
			<LoginBody />
			<Footer infoText="Don't have an account?" btnText='Sign up' to='/register' />
		</Container>
	)
}
