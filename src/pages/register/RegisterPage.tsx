import { Container } from '../../components/container/Container'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

import { RegisterBody } from './RegisterBody'

export const RegisterPage = () => {
	return (
		<Container>
			<Header>Register</Header>
			<RegisterBody />
			<Footer infoText='Already have an account?' btnText='Sign in' to='/login' />
		</Container>
	)
}
