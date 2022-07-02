import { IoIosLock, IoMdPerson, IoIosMail } from 'react-icons/io'

import { useRegister } from '../../hooks/useRegister'
import { Button } from '../button/Button'
import { ErrorMessage } from '../error-message/ErrorMessage'
import { Input } from '../input/Input'
import { Label } from '../label/Label'

export const RegisterForm = () => {
	const { errors, handleBlur, isTouched, handleRegister } = useRegister()

	return (
		<form onSubmit={handleRegister}>
			<Label htmlFor='username' text='Username' icon={<IoMdPerson />} />
			<Input type='text' placeholder='Enter username' id='username' name='username' onBlur={handleBlur} />
			{errors.usernameError && isTouched.username && <ErrorMessage>{errors.usernameError}</ErrorMessage>}

			<Label htmlFor='password' text='Password' icon={<IoIosLock />} />
			<Input type='password' placeholder='Enter password' id='password' name='password' onBlur={handleBlur} />
			{errors.passwordError && isTouched.password && <ErrorMessage>{errors.passwordError}</ErrorMessage>}

			<Label htmlFor='passwordRepeat' text='Repeat Password' icon={<IoIosLock />} />
			<Input
				type='password'
				placeholder='Repeat password'
				id='passwordRepeat'
				name='passwordRepeat'
				onBlur={handleBlur}
			/>
			{errors.passwordRepeatError && isTouched.passwordRepeat && (
				<ErrorMessage>{errors.passwordRepeatError}</ErrorMessage>
			)}

			<Label htmlFor='email' text='Email' icon={<IoIosMail />} />
			<Input type='email' placeholder='Enter email' id='email' name='email' onBlur={handleBlur} />
			{errors.emailError && isTouched.email && <ErrorMessage>{errors.emailError}</ErrorMessage>}

			<Button type='submit'>Sign up</Button>
		</form>
	)
}
