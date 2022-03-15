import { useContext, useState } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import { IoIosLock, IoMdPerson } from 'react-icons/io'
import { Label } from '../../Components/Label/Label'
import { Input } from '../../Components/Input/Input'
import { ErrorMessage } from '../../Components/ErrorMessage/ErrorMessage'
import { Button } from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'

export const LoginBody = () => {
	const { setIsLoggedIn, setActualUser } = useContext(AppContext)
	const [loginState, setLoginState] = useState({})
	const [isError, setIsError] = useState(false)
	const navigate = useNavigate()

	const handleChange = e => {
		setLoginState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!localStorage.getItem('users')) {
			setIsError(true)
			return
		}

		const users = JSON.parse(localStorage.getItem('users'))
		const actualUser = users.find(
			user => user.username === loginState.username && user.password === loginState.password
		)

		if (actualUser) {
			setActualUser(actualUser)
			setIsLoggedIn(true)
			setIsError(false)
			navigate('/welcome', { replace: true })
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
