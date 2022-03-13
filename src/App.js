import './index.scss'
import { useContext } from 'react'
import { AppContext } from './Contexts/AppContext'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/RegisterPage/RegisterPage'
import { WelcomePage } from './Pages/WelcomePage/WelcomePage'
import { REGISTER_PAGE } from './Constants/constants'
import { WELCOME_PAGE } from './Constants/constants'

export const App = () => {
	const { page } = useContext(AppContext)

	if (page === REGISTER_PAGE) {
		return <RegisterPage />
	}

	if (page === WELCOME_PAGE) {
		return <WelcomePage />
	}

	return <LoginPage />
}
