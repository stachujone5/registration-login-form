import { useCallback, useState } from 'react'

import { DEFAULT_LOGIN_VALUES } from '../constants/defaults'

import { useUser } from './useUser'

import type { LoginValues } from '../types/types'
import type { FormEvent, FocusEvent } from 'react'

export const useLogin = () => {
  const [loginValues, setLoginValues] = useState<LoginValues>(DEFAULT_LOGIN_VALUES)
  const [isLoginError, setIsLoginError] = useState(false)

  const { handleLogin } = useUser()

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setLoginValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const loggedUser = handleLogin(loginValues)

      if (!loggedUser) {
        setIsLoginError(true)
      }
    },
    [handleLogin, loginValues]
  )

  return { handleSubmit, handleBlur, isLoginError }
}
