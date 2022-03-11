import { IoIosLock, IoMdPerson } from 'react-icons/io'
import Container from '../../Components/Container/Container'
import Header from '../../Components/Header/Header'
import Label from '../../Components/Label/Label'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import Footer from '../../Components/Footer/Footer'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import { useContext, useState } from 'react'
import { AppContext, REGISTER_PAGE } from '../../Contexts/AppContext'

const Login = () => {
	const { setIsLoggedIn } = useContext(AppContext)
	const [loginState, setLoginState] = useState({})
	const [isError, setIsError] = useState(false)

	const handleChange = e => {
		setLoginState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		const username = JSON.parse(localStorage.getItem('user')).username
		const password = JSON.parse(localStorage.getItem('user')).password

		if (username === loginState.username && password === loginState.password) {
			setIsLoggedIn(true)
			setIsError(false)
			return
		}
		setIsError(true)
	}

	return (
		<Container>
			<Header>Login</Header>
			<form onSubmit={handleSubmit}>
				<Label htmlFor='username' text='Username' icon={<IoMdPerson />} />
				<Input type='text' placeholder='Enter username' id='username' name='username' onChange={handleChange} />
				<Label htmlFor='password' text='Password' icon={<IoIosLock />} />
				<Input type='password' placeholder='Enter password' id='password' name='password' onChange={handleChange} />
				{isError && <ErrorMessage>Your username or password is incorrect.</ErrorMessage>}
				<Button type='submit'>Sign in</Button>
			</form>
			<Footer infoText="Don't have an account?" btnText='Sign up' page={REGISTER_PAGE} />
		</Container>
	)
}

export default Login
