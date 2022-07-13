import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { DEFAULT_REGISTER_VALUES, DEFAULT_TOUCHED } from '../constants/defaults'
import { getStorage, setStorage } from '../helpers/handleStorage'
import { validate } from '../helpers/validate'

import { useUserContext } from './useUserContext'

import type { Touched, User, Values } from '../types/types'
import type { FormEvent, FocusEvent } from 'react'

export const useRegister = () => {
  const [isTouched, setIsTouched] = useState<Touched>(DEFAULT_TOUCHED)
  const [values, setValues] = useState<Values>(DEFAULT_REGISTER_VALUES)

  const { setIsLoggedIn, setCurrentUser } = useUserContext()

  const router = useRouter()

  const errors = validate(values)

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsTouched(prevIsTouched => ({ ...prevIsTouched, [e.target.name]: true }))

    setValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

    if (errors.emailError || errors.passwordError || errors.passwordRepeatError || errors.usernameError) return

    const newUser: User = { username: values.username, password: values.password, email: values.email }

    const storage = getStorage()

    storage ? setStorage([...storage, newUser]) : setStorage([newUser])

    setCurrentUser(newUser)
    setIsLoggedIn(true)
    void router.push('/welcome')
  }

  return { errors, handleBlur, isTouched, handleSubmit }
}
