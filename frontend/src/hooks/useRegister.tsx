import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DEFAULT_ERRORS, DEFAULT_REGISTER_VALUES, DEFAULT_TOUCHED } from '../constants/defaults'
import { AppContext } from '../contexts/AppContext'
import { validate } from '../helpers/validate'

import type { Errors, Touched, User, Values } from '../types/types'
import type { FormEvent, ChangeEvent } from 'react'

export const useRegister = () => {
	const [users, setUsers] = useState<readonly User[]>([])
	const [errors, setErrors] = useState<Errors>(DEFAULT_ERRORS)
	const [isTouched, setIsTouched] = useState<Touched>(DEFAULT_TOUCHED)
	const [values, setValues] = useState<Values>(DEFAULT_REGISTER_VALUES)
	const { setIsLoggedIn, setActualUser } = useContext(AppContext)

	const navigate = useNavigate()

	const handleRegister = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		validate(values, setErrors)

		if (!values || !errors) return

		setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

		const newUser: User = { username: values.username, password: values.password, email: values.email }

		setUsers(prevUsers => [...prevUsers, newUser])
		setActualUser(newUser)
		setIsLoggedIn(true)
		navigate('/welcome', { replace: true })
		reset()

		const lsUsers = localStorage.getItem('users')

		if (!lsUsers) {
			localStorage.setItem('users', JSON.stringify(users))
			return
		}

		const newUsers: readonly User[] = JSON.parse(lsUsers)
		setUsers(newUsers)
		localStorage.setItem('users', JSON.stringify(newUsers))
	}

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		setValues(prevValues => {
			return { ...prevValues, [e.target.name]: e.target.value }
		})
		setIsTouched(prevIsTouched => {
			return { ...prevIsTouched, [e.target.name]: true }
		})
	}

	const reset = () => {
		setIsTouched(DEFAULT_TOUCHED)
		setErrors(DEFAULT_ERRORS)
	}

	return { errors, handleBlur, isTouched, handleRegister }
}
