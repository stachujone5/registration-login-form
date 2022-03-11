import './index.scss'
import Register from './Pages/RegisterPage/Register'
import Welcome from './Pages/WelcomePage/Welcome'
import Login from './Pages/LoginPage/Login'
import { AppContext, LOGIN_PAGE } from './Contexts/AppContext'
import { useContext } from 'react'

const App = () => {
	const { isLoggedIn, page } = useContext(AppContext)

	if (isLoggedIn) {
		return <Welcome />
	}

	if (page === LOGIN_PAGE) {
		return <Login />
	}

	return <Register />
}

export default App
