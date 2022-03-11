import { useState, useEffect, useContext } from 'react'
import validate from '../Helpers/validate'
import { AppContext } from '../Contexts/AppContext'

const useForm = () => {
	const { setIsLoggedIn, values, setValues } = useContext(AppContext)
	const [errors, setErrors] = useState({})
	const [isTouched, setIsTouched] = useState({})

	useEffect(() => {
		setErrors(validate(values))
	}, [values])

	const handleSubmit = e => {
		e.preventDefault()

		setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

		if (errors.usernameError || errors.passwordError || errors.passwordRepeatError || errors.emailError) {
			setIsLoggedIn(false)
			return
		}
		setIsLoggedIn(true)
		localStorage.setItem('user', JSON.stringify(values))
		reset()
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

	return { errors, handleBlur, isTouched, handleSubmit }
}

export default useForm
