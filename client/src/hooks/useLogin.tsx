import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DEFAULT_LOGIN_VALUES } from '../constants/defaults'

import { useUserContext } from './useUserContext'

import type { LoginValues } from '../types/types'
import type { FormEvent, ChangeEvent } from 'react'

export const useLogin = () => {
  const [loginValues, setLoginValues] = useState<LoginValues>(DEFAULT_LOGIN_VALUES)
  const [isLoginError, setIsLoginError] = useState(false)

  const { setIsLoggedIn } = useUserContext()
  const navigate = useNavigate()

  const handleLoginChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLoginValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }, [])

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(loginValues)

    setIsLoggedIn(true)

    setIsLoginError(false)
    navigate('/welcome', { replace: true })
  }

  return { handleLogin, handleLoginChange, isLoginError }
}
