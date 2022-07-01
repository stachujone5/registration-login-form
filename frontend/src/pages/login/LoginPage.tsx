import { Container } from '../../components/container/Container'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

import { LoginBody } from './LoginBody'

export const LoginPage = () => {
	return (
		<Container>
			<Header>Login</Header>
			<LoginBody />
			<Footer infoText="Don't have an account?" btnText='Sign up' to='/register' />
		</Container>
	)
}
