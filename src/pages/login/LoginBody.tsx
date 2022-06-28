import { IoIosLock, IoMdPerson } from 'react-icons/io'

import { Button } from '../../components/button/Button'
import { ErrorMessage } from '../../components/error-message/ErrorMessage'
import { Input } from '../../components/input/Input'
import { Label } from '../../components/label/Label'
import { useForm } from '../../hooks/useForm'

export const LoginBody = () => {
	const { isLoginError, handleLoginChange, handleLogin } = useForm()

	return (
		<form onSubmit={handleLogin}>
			<Label htmlFor='username' text='Username' icon={<IoMdPerson />} />
			<Input type='text' placeholder='Enter username' id='username' name='username' onChange={handleLoginChange} />
			<Label htmlFor='password' text='Password' icon={<IoIosLock />} />
			<Input type='password' placeholder='Enter password' id='password' name='password' onChange={handleLoginChange} />
			{isLoginError && <ErrorMessage>Your username or password is incorrect.</ErrorMessage>}
			<Button type='submit'>Sign in</Button>
		</form>
	)
}
