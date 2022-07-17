import { useCallback, useState } from 'react'

import { useUser } from '../../hooks/useUser'

import { validateRegister } from './validateRegister'

import type { RegisterValues } from '../../types/types'
import type { FormEvent, FocusEvent } from 'react'

export const useRegister = () => {
  const [isTouched, setIsTouched] = useState({
    username: false,
    password: false,
    passwordRepeat: false,
    email: false
  })
  const [registerValues, setRegisterValues] = useState<RegisterValues>({
    username: '',
    password: '',
    passwordRepeat: '',
    email: ''
  })
  const { createUser } = useUser()

  const errors = validateRegister(registerValues)

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsTouched(prev => ({ ...prev, [e.target.name]: true }))

    setRegisterValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsTouched({ username: true, password: true, passwordRepeat: true, email: true })

      if (!errors.emailError && !errors.passwordError && !errors.passwordRepeatError && !errors.usernameError) {
        setIsTouched({
          username: false,
          password: false,
          passwordRepeat: false,
          email: false
        })
        createUser(registerValues)
      }
    },
    [errors, registerValues, createUser]
  )

  return { errors, handleBlur, isTouched, handleSubmit }
}
