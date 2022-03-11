import { useContext } from 'react'
import { AppContext, REGISTER_PAGE } from '../../Contexts/AppContext'
import { Login } from '../../Pages/LoginPage/Login'
import { Register } from '../../Pages/RegisterPage/Register'

export const Page = () => {
	const { page } = useContext(AppContext)

	if (page === REGISTER_PAGE) {
		return <Register />
	}

	return <Login />
}
