import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppContext } from '../contexts/AppContext'

import type { User } from '../types/types'
import type { FormEvent, ChangeEvent } from 'react'

interface LoginValues {
	readonly username?: string
	readonly password?: string
}

export const useLogin = () => {
	const [loginValues, setLoginValues] = useState<LoginValues | null>(null)
	const [isLoginError, setIsLoginError] = useState(false)
	const { setIsLoggedIn, setActualUser } = useContext(AppContext)
	const navigate = useNavigate()

	const lsUsers = localStorage.getItem('users')

	const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!lsUsers || !loginValues) {
			setIsLoginError(true)
			return
		}

		const users: readonly User[] = JSON.parse(lsUsers)
		const currentUser = users.find(
			user => user.username === loginValues.username && user.password === loginValues.password
		)

		if (!currentUser) {
			setIsLoginError(true)
			return
		}

		setActualUser(currentUser)
		setIsLoggedIn(true)
		setIsLoginError(false)
		navigate('/welcome', { replace: true })
	}

	return { handleLogin, handleLoginChange, isLoginError }
}
