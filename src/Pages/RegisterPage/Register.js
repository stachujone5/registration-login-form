import Header from '../../Components/Header/Header'
import FormBody from './RegisterBody'
import Footer from '../../Components/Footer/Footer'
import Container from '../../Components/Container/Container'

const Register = () => {
	return (
		<Container>
			<Header>Register</Header>
			<FormBody />
			<Footer infoText='Already have an account?' btnText='Sign in' page='login' />
		</Container>
	)
}

export default Register
