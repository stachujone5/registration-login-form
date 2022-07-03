import { Routes, Route, Navigate } from 'react-router-dom'

import { useUserContext } from './hooks/useUserContext'
import { NotFound } from './pages/404/NotFound'
import { LoginPage } from './pages/login/LoginPage'
import { RegisterPage } from './pages/register/RegisterPage'
import { WelcomePage } from './pages/welcome/WelcomePage'

import './index.scss'

export const App = () => {
  const { isLoggedIn } = useUserContext()

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      {isLoggedIn && <Route path="/welcome" element={<WelcomePage />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
