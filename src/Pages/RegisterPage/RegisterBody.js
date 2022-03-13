import { IoIosLock, IoMdPerson, IoIosMail } from 'react-icons/io'
import { useForm } from '../../Hooks/useForm'
import { Label } from '../../Components/Label/Label'
import { Input } from '../../Components/Input/Input'
import { ErrorMessage } from '../../Components/ErrorMessage/ErrorMessage'
import { Button } from '../../Components/Button/Button'

export const RegisterBody = () => {
	const { errors, handleBlur, isTouched, handleSubmit } = useForm()

	return (
		<form onSubmit={handleSubmit}>
			<Label htmlFor='username' text='Username' icon={<IoMdPerson />} />
			<Input type='text' placeholder='Enter username' id='username' name='username' onBlur={handleBlur} />
			{errors.usernameError && isTouched.username && <ErrorMessage>{errors.usernameError}</ErrorMessage>}
			{errors.usernameIsTaken && isTouched.username && <ErrorMessage>{errors.usernameIsTaken}</ErrorMessage>}
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
			{errors.emailIsTaken && isTouched.email && <ErrorMessage>{errors.emailIsTaken}</ErrorMessage>}
			<Button type='submit'>Sign up</Button>
		</form>
	)
}
