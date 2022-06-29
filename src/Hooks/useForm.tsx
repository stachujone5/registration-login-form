import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppContext } from '../contexts/AppContext'
import { validate } from '../helpers/validate'

import type { User } from '../types/types'

const DEFAULT_VALUES = { username: '', password: '', passwordRepeat: '', email: '' }

export const useForm = () => {
	const [users, setUsers] = useState<readonly User[]>([])
	const [errors, setErrors] = useState({})
	const [isTouched, setIsTouched] = useState({})
	const [values, setValues] = useState(DEFAULT_VALUES)

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

		const newUser: User = { username: values.username, password: values.password, email: values.email }
		setUsers(prevUsers => [...prevUsers, newUser])
		setActualUser(newUser)
		setIsLoggedIn(true)
		navigate('/welcome', { replace: true })
		reset()

		const lsUsers = localStorage.getItem('users')

		if (lsUsers) {
			const newUsers: readonly User[] = JSON.parse(lsUsers)
			setUsers(newUsers)
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


	return { errors, handleBlur, isTouched, handleRegister }
}
