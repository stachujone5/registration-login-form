import { Header } from '../../Components/Header/Header'
import { RegisterBody } from './RegisterBody'
import { Footer } from '../../Components/Footer/Footer'
import { Container } from '../../Components/Container/Container'
import { LOGIN_PAGE } from '../../Constants/constants'

export const RegisterPage = () => {
	return (
		<Container>
			<Header>Register</Header>
			<RegisterBody />
			<Footer infoText='Already have an account?' btnText='Sign in' page={LOGIN_PAGE} />
		</Container>
	)
}
