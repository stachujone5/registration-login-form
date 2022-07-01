import { EMAIL_REGEX } from '../constants/constants'

import type { User, Values, Errors } from '../types/types'
import type { Dispatch, SetStateAction } from 'react'

export const validate = (data: Values, setErrors: Dispatch<SetStateAction<Errors>>) => {
	const lsUsers = localStorage.getItem('users')

	const storedUsers: readonly User[] = (lsUsers && JSON.parse(lsUsers)) || []
	const matchingUsername = storedUsers.find(user => user.username === data.username)
	const matchingEmail = storedUsers.find(user => user.email === data.email)

	if (data.username.trim().length < 5) {
		setErrors(prevErrors => ({ ...prevErrors, usernameError: 'Username is too short, min. 5 characters' }))
	}

	if (!data.password.trim().length) {
		setErrors(prevErrors => ({ ...prevErrors, passwordError: 'Password is required' }))
	}

	if (data.password.trim().length > 0 && data.password.trim().length < 8) {
		setErrors(prevErrors => ({ ...prevErrors, passwordError: 'Password is too short, min. 8 characters' }))
	}

	if (!data.password.length && !data.passwordRepeat.length) {
		setErrors(prevErrors => ({ ...prevErrors, passwordRepeatError: "Passwords don't match" }))
	}

	if (data.password !== data.passwordRepeat) {
		setErrors(prevErrors => ({ ...prevErrors, passwordRepeatError: "Passwords don't match" }))
	}

	if (!EMAIL_REGEX.test(data.email)) {
		setErrors(prevErrors => ({ ...prevErrors, emailError: 'Email is invalid' }))
	}

	if (matchingUsername) {
		setErrors(prevErrors => ({ ...prevErrors, usernameIsTaken: 'This username is already in use' }))
	}
	if (matchingEmail) {
		setErrors(prevErrors => ({ ...prevErrors, emailIsTaken: 'This email is already in use' }))
	}
}
