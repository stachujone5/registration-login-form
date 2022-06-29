import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppContext } from '../contexts/AppContext'
import { validate } from '../helpers/validate'

import type { User } from '../types/types'
import type { FormEvent, ChangeEvent } from 'react'

interface Values {
	readonly username?: string
	readonly password?: string
	readonly passwordRepeat?: string
	readonly email?: string
}

interface Errors {
	readonly usernameError: string
	readonly passwordError: string
	readonly passwordRepeatError: string
	readonly emailError: string
	readonly usernameIsTaken: string
	readonly emailIsTaken: string
}

interface Touched {
	readonly username?: boolean
	readonly password?: boolean
	readonly passwordRepeat?: boolean
	readonly email?: boolean
}

export const useRegister = () => {
	const [users, setUsers] = useState<readonly User[] | null>(null)
	const [errors, setErrors] = useState<Errors | null>(null)
	const [isTouched, setIsTouched] = useState<Touched | null>(null)
	const [values, setValues] = useState<Values | null>(null)
	const { setIsLoggedIn, setActualUser } = useContext(AppContext)

	const navigate = useNavigate()

	useEffect(() => {
		setErrors(prevErros => ({ ...prevErros, ...validate(values) }))
	}, [values])

	const handleRegister = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

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
		setIsTouched(null)
		setErrors(null)
	}

	return { errors, handleBlur, isTouched, handleRegister }
}
