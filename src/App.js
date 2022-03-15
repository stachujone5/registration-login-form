import './index.scss'
import { useContext } from 'react'
import { AppContext } from './Contexts/AppContext'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/RegisterPage/RegisterPage'
import { WelcomePage } from './Pages/WelcomePage/WelcomePage'
import { NotFound } from './Pages/NotFoundPage/NotFound'
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
