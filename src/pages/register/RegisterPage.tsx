import { Header } from '../../Components/header/Header'
import { RegisterBody } from './RegisterBody'
import { Footer } from '../../Components/footer/Footer'
import { Container } from '../../Components/container/Container'

export const RegisterPage = () => {
	return (
		<Container>
			<Header>Register</Header>
			<RegisterBody />
			<Footer infoText='Already have an account?' btnText='Sign in' to='/login' />
		</Container>
	)
}
