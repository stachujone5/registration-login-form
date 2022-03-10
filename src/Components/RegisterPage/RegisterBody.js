import { IoIosLock, IoMdPerson, IoIosMail } from 'react-icons/io'
import useForm from '../../Helpers/useForm'
import Label from '../../UI/Label'
import Input from '../../UI/Input'
import ErrorMessage from '../../UI/ErrorMessage'
import Button from '../../UI/Button'

const FormBody = () => {
	const { errors, handleBlur, isTouched, handleSubmit } = useForm()

	return (
		<form onSubmit={handleSubmit}>
			<Label htmlFor='username' text='Username' icon={<IoMdPerson></IoMdPerson>}></Label>
			<Input type='text' placeholder='Enter username' id='username' name='username' onBlur={handleBlur} />

			{errors.usernameError && isTouched.username && <ErrorMessage>{errors.usernameError}</ErrorMessage>}

			<Label htmlFor='password' text='Password' icon={<IoIosLock></IoIosLock>}></Label>
			<Input type='password' placeholder='Enter password' id='password' name='password' onBlur={handleBlur} />

			{errors.passwordError && isTouched.password && <ErrorMessage>{errors.passwordError}</ErrorMessage>}

			<Label htmlFor='passwordRepeat' text='Repeat Password' icon={<IoIosLock></IoIosLock>}></Label>
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

			<Label htmlFor='email' text='Email' icon={<IoIosMail></IoIosMail>}></Label>
			<Input type='email' placeholder='Enter email' id='email' name='email' onBlur={handleBlur} />

			{errors.emailError && isTouched.email && <ErrorMessage>{errors.emailError}</ErrorMessage>}

			<Button type='submit'>Sign up</Button>
		</form>
	)
}

export default FormBody
