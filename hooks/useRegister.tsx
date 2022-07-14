import { useCallback, useState } from 'react'

import { DEFAULT_REGISTER_VALUES, DEFAULT_TOUCHED } from '../constants/defaults'
import { validate } from '../helpers/validate'

import { useUser } from './useUser'

import type { Touched, Values } from '../types/types'
import type { FormEvent, FocusEvent } from 'react'

export const useRegister = () => {
  const [isTouched, setIsTouched] = useState<Touched>(DEFAULT_TOUCHED)
  const [values, setValues] = useState<Values>(DEFAULT_REGISTER_VALUES)

  const { createUser } = useUser()

  const errors = validate(values)

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsTouched(prev => ({ ...prev, [e.target.name]: true }))

    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

    if (errors.emailError || errors.passwordError || errors.passwordRepeatError || errors.usernameError) return

    createUser(values)
  }

  return { errors, handleBlur, isTouched, handleSubmit }
}
