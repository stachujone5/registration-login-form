import { useCallback, useState } from 'react'

import { DEFAULT_REGISTER_VALUES, DEFAULT_TOUCHED } from '../constants/defaults'
import { validate } from '../helpers/validate'

import { useUser } from './useUser'

import type { FormEvent, FocusEvent } from 'react'

export const useRegister = () => {
  const [isTouched, setIsTouched] = useState(DEFAULT_TOUCHED)
  const [values, setValues] = useState(DEFAULT_REGISTER_VALUES)
  const errors = validate(values)

  const { createUser } = useUser()

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsTouched(prev => ({ ...prev, [e.target.name]: true }))

    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

      if (!errors.emailError && !errors.passwordError && !errors.passwordRepeatError && !errors.usernameError) {
        setIsTouched(DEFAULT_TOUCHED)
        createUser(values)
      }
    },
    [errors, values, createUser]
  )

  return { errors, handleBlur, isTouched, handleSubmit }
}
