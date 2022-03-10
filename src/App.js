import './index.scss'
import Register from './Components/RegisterPage/Register'
import Welcome from './Components/WelcomePage/Welcome'
import Login from './Components/LoginPage/Login'
import { AppContext } from './Helpers/AppContext'
import { useContext } from 'react'

const App = () => {
	const { isLoggedIn, page } = useContext(AppContext)

	if (isLoggedIn) {
		return <Welcome></Welcome>
	}

	if (page === 'login') {
		return <Login></Login>
	}

	return <Register></Register>
}

export default App
