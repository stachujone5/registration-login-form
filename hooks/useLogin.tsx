import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { DEFAULT_LOGIN_VALUES } from '../constants/defaults'
import { isInStorage } from '../helpers/handleStorage'

import { useUserContext } from './useUserContext'

import type { LoginValues } from '../types/types'
import type { FormEvent, FocusEvent } from 'react'

export const useLogin = () => {
  const [loginValues, setLoginValues] = useState<LoginValues>(DEFAULT_LOGIN_VALUES)
  const [isLoginError, setIsLoginError] = useState(false)

  const { setIsLoggedIn, setCurrentUser } = useUserContext()

  const router = useRouter()

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setLoginValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = isInStorage({ username: loginValues.username, password: loginValues.password })

    if (user) {
      setIsLoggedIn(true)
      setIsLoginError(false)
      setCurrentUser(user)
      void router.push('/welcome')
      return
    }
    setIsLoginError(true)
  }

  return { handleSubmit, handleBlur, isLoginError }
}
