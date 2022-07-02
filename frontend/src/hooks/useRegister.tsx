import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DEFAULT_ERRORS, DEFAULT_REGISTER_VALUES, DEFAULT_TOUCHED } from '../constants/defaults'
import { AppContext } from '../contexts/AppContext'
import { validate } from '../helpers/validate'

import type { Errors, Touched, User, Values } from '../types/types'
import type { FormEvent, ChangeEvent } from 'react'

export const useRegister = () => {
	const [errors, setErrors] = useState<Errors>(DEFAULT_ERRORS)
	const [isTouched, setIsTouched] = useState<Touched>(DEFAULT_TOUCHED)
	const [values, setValues] = useState<Values>(DEFAULT_REGISTER_VALUES)

	useEffect(() => {
		setErrors(prevErrors => ({ ...prevErrors, ...validate(values) }))
	}, [values])

	const { setIsLoggedIn, setCurrentUser } = useContext(AppContext)

	const navigate = useNavigate()

	const handleRegister = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

		if (errors.emailError || errors.passwordError || errors.passwordRepeatError || errors.usernameError) return

		const newUser: User = { username: values.username, password: values.password, email: values.email }

		setCurrentUser(newUser)
		setIsLoggedIn(true)
		navigate('/welcome', { replace: true })
		setIsTouched(DEFAULT_TOUCHED)
		setErrors(DEFAULT_ERRORS)
	}

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		setIsTouched(prevIsTouched => ({ ...prevIsTouched, [e.target.name]: true }))
		setValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
	}

	return { errors, handleBlur, isTouched, handleRegister }
}
