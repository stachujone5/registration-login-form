import { IoIosLock, IoMdPerson } from 'react-icons/io'
import { Label } from '../../Components/Label/Label'
import { Input } from '../../Components/Input/Input'
import { ErrorMessage } from '../../Components/ErrorMessage/ErrorMessage'
import { Button } from '../../Components/Button/Button'
import { useForm } from '../../Hooks/useForm'

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
