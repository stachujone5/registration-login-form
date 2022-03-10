import { IoIosLock, IoMdPerson } from 'react-icons/io'
import Container from '../../UI/Container'
import Header from '../../UI/Header'
import Label from '../../UI/Label'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import Footer from '../../UI/Footer'
import { useContext, useState } from 'react'
import { AppContext } from '../../Helpers/AppContext'
import ErrorMessage from '../../UI/ErrorMessage'

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
				<Label htmlFor='username' text='Username' icon={<IoMdPerson></IoMdPerson>}></Label>
				<Input type='text' placeholder='Enter username' id='username' name='username' onChange={handleChange} />

				<Label htmlFor='password' text='Password' icon={<IoIosLock></IoIosLock>}></Label>
				<Input type='password' placeholder='Enter password' id='password' name='password' onChange={handleChange} />

				{isError && <ErrorMessage>Your username or password is incorrect.</ErrorMessage>}

				<Button type='submit'>Sign in</Button>
			</form>
			<Footer infoText="Don't have an account?" btnText='Sign up' page='register'></Footer>
		</Container>
	)
}

export default Login
