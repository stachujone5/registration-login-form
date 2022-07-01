import { EMAIL_REGEX } from '../constants/constants'

import type { User } from '../types/types'
import type { Values } from './../hooks/useRegister'

export const validate = (data: Values) => {
	const lsUsers = localStorage.getItem('users')
	const errors = {
		usernameError: '',
		passwordError: '',
		passwordRepeatError: '',
		emailError: '',
		usernameIsTaken: '',
		emailIsTaken: '',
	}

	const storedUsers: readonly User[] = (lsUsers && JSON.parse(lsUsers)) || []
	const matchingUsername = storedUsers.find(user => user.username === data.username)
	const matchingEmail = storedUsers.find(user => user.email === data.email)

	if (data.username.trim().length < 5) {
		errors.usernameError = 'Username is too short, min. 5 characters'
	}

	if (!data.password?.trim().length) {
		errors.passwordError = 'Password is required'
	}

	if (data.password.trim().length > 0 && data.password.trim().length < 8) {
		errors.passwordError = 'Password is too short, min. 8 characters'
	}

	if (!data.password?.length && !data.passwordRepeat?.length) {
		errors.passwordRepeatError = "Passwords don't match"
	}

	if (data.password !== data.passwordRepeat) {
		errors.passwordRepeatError = "Passwords don't match"
	}

	if (!EMAIL_REGEX.test(data.email)) {
		errors.emailError = 'Email is invalid'
	}

	if (matchingUsername) {
		errors.usernameIsTaken = 'This username is already in use'
	}
	if (matchingEmail) {
		errors.emailIsTaken = 'This email is already in use'
	}

	return errors
}
