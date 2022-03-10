const validate = data => {
	let errors = { usernameError: '', passwordError: '', passwordRepeatError: '', emailError: '' }
	const regex = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	)

	if (data.username.trim().length < 5) {
		errors.usernameError = 'Username is too short, min. 5 characters'
	}

	if (data.password.trim().length < 8) {
		errors.passwordError = 'Password is too short, min. 8 characters'
	}

	if (!data.password.length && !data.passwordRepeat.length) {
		errors.passwordRepeatError = "Passwords don't match"
	}
	if (data.password !== data.passwordRepeat) {
		errors.passwordRepeatError = "Passwords don't match"
	}

	if (!regex.test(data.email)) {
		errors.emailError = 'Email is invalid'
	}

	return errors
}

export default validate
