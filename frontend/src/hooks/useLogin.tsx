import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DEFAULT_LOGIN_VALUES } from '../constants/defaults'
import { AppContext } from '../contexts/AppContext'

import type { LoginValues } from '../types/types'
import type { FormEvent, ChangeEvent } from 'react'

export const useLogin = () => {
	const [loginValues, setLoginValues] = useState<LoginValues>(DEFAULT_LOGIN_VALUES)
	const [isLoginError, setIsLoginError] = useState(false)
	const { setIsLoggedIn } = useContext(AppContext)
	const navigate = useNavigate()

	const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(loginValues)
		setIsLoggedIn(true)
		setIsLoginError(false)
		navigate('/welcome', { replace: true })
	}

	return { handleLogin, handleLoginChange, isLoginError }
}
