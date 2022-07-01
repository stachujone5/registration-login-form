import { IoIosLock, IoMdPerson } from 'react-icons/io'

import { useLogin } from '../../hooks/useLogin'
import { Button } from '../button/Button'
import { ErrorMessage } from '../error-message/ErrorMessage'
import { Input } from '../input/Input'
import { Label } from '../label/Label'

export const LoginForm = () => {
	const { isLoginError, handleLoginChange, handleLogin } = useLogin()

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
