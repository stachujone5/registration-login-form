import { useContext, useState } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import { IoIosLock, IoMdPerson } from 'react-icons/io'
import { Label } from '../../Components/Label/Label'
import { Input } from '../../Components/Input/Input'
import { ErrorMessage } from '../../Components/ErrorMessage/ErrorMessage'
import { Button } from '../../Components/Button/Button'

export const LoginBody = () => {
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
		<form onSubmit={handleSubmit}>
			<Label htmlFor='username' text='Username' icon={<IoMdPerson />} />
			<Input type='text' placeholder='Enter username' id='username' name='username' onChange={handleChange} />
			<Label htmlFor='password' text='Password' icon={<IoIosLock />} />
			<Input type='password' placeholder='Enter password' id='password' name='password' onChange={handleChange} />
			{isError && <ErrorMessage>Your username or password is incorrect.</ErrorMessage>}
			<Button type='submit'>Sign in</Button>
		</form>
	)
}
