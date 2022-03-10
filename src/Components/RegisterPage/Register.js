import Header from '../../UI/Header.js'
import FormBody from './RegisterBody'
import Footer from '../../UI/Footer'
import Container from '../../UI/Container.js'

const Register = () => {
	return (
		<Container>
			<Header>Register</Header>
			<FormBody></FormBody>
			<Footer infoText='Already have an account?' btnText='Sign in' page='login'></Footer>
		</Container>
	)
}

export default Register
