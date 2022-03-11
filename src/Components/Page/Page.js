import { useContext } from 'react'
import { AppContext, REGISTER_PAGE } from '../../Contexts/AppContext'
import { LoginPage } from '../../Pages/LoginPage/LoginPage'
import { RegisterPage } from '../../Pages/RegisterPage/RegisterPage'

export const Page = () => {
	const { page } = useContext(AppContext)

	if (page === REGISTER_PAGE) {
		return <RegisterPage />
	}

	return <LoginPage />
}
