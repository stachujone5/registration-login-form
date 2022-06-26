import './index.scss'
import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import { LoginPage } from './pages/login/LoginPage'
import { RegisterPage } from './pages/register/RegisterPage'
import { WelcomePage } from './pages/welcome/WelcomePage'
import { NotFound } from './pages/404/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom'

export const App = () => {
	const { isLoggedIn } = useContext(AppContext)

	return (
		<Routes basename={process.env.PUBLIC_URL}>
			<Route path='/' element={<Navigate to='/register' />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/login' element={<LoginPage />} />
			{isLoggedIn && <Route path='/welcome' element={<WelcomePage />} />}
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
