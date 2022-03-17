import { useState, useEffect, useContext } from 'react'
import { validate } from '../Helpers/validate'
import { AppContext } from '../Contexts/AppContext'
import { useNavigate } from 'react-router-dom'

const users = []
const DEFAULT_VALUES = { username: '', password: '', passwordRepeat: '', email: '' }

export const useForm = () => {
	const { setIsLoggedIn, setActualUser } = useContext(AppContext)
	const [errors, setErrors] = useState({})
	const [isTouched, setIsTouched] = useState({})
	const [values, setValues] = useState(DEFAULT_VALUES)
	const [loginValues, setLoginValues] = useState({})
	const [isLoginError, setIsLoginError] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		setErrors(prevErros => ({ ...prevErros, ...validate(values) }))
	}, [values])

	const handleRegister = e => {
		e.preventDefault()
		setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

		if (
			errors.usernameError ||
			errors.passwordError ||
			errors.passwordRepeatError ||
			errors.emailError ||
			errors.usernameIsTaken ||
			errors.emailIsTaken
		) {
			return
		}

		const newUser = { username: values.username, password: values.password, email: values.email }
		users.push(newUser)
		setActualUser(newUser)
		setIsLoggedIn(true)
		navigate('/welcome', { replace: true })
		reset()

		if (localStorage.getItem('users')) {
			const newUsers = JSON.parse(localStorage.getItem('users'))
			newUsers.push(newUser)
			localStorage.setItem('users', JSON.stringify(newUsers))
			return
		}

		localStorage.setItem('users', JSON.stringify(users))
	}

	const handleBlur = e => {
		setValues(prevValues => {
			return { ...prevValues, [e.target.name]: e.target.value }
		})
		setIsTouched(prevIsTouched => {
			return { ...prevIsTouched, [e.target.name]: true }
		})
	}

	const reset = () => {
		setIsTouched({})
		setErrors({})
	}

	const handleLoginChange = e => {
		setLoginValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const handleLogin = e => {
		e.preventDefault()
		if (!localStorage.getItem('users')) {
			setIsLoginError(true)
			return
		}

		const users = JSON.parse(localStorage.getItem('users'))
		const actualUser = users.find(
			user => user.username === loginValues.username && user.password === loginValues.password
		)

		if (actualUser) {
			setActualUser(actualUser)
			setIsLoggedIn(true)
			setIsLoginError(false)
			navigate('/welcome', { replace: true })
			return
		}

		setIsLoginError(true)
	}

	return { errors, handleBlur, isTouched, handleRegister, handleLogin, handleLoginChange, isLoginError }
}
