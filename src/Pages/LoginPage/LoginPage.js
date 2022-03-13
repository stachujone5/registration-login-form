import { Container } from '../../Components/Container/Container'
import { Header } from '../../Components/Header/Header'
import { LoginBody } from './LoginBody'
import { Footer } from '../../Components/Footer/Footer'
import { REGISTER_PAGE } from '../../Constants/constants'

export const LoginPage = () => {
	return (
		<Container>
			<Header>Login</Header>
			<LoginBody />
			<Footer infoText="Don't have an account?" btnText='Sign up' page={REGISTER_PAGE} />
		</Container>
	)
}
