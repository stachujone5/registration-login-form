import { EMAIL_REGEX } from '../constants/constants'
import { DEFAULT_ERRORS } from '../constants/defaults'

import { getStorage } from './handleStorage'

import type { Values, Errors } from '../types/types'
import type { Mutable } from '../types/utils'

export const validate = (values: Values) => {
  const errors: Mutable<Errors> = { ...DEFAULT_ERRORS }

  const storage = getStorage()

  if (values.username.trim().length < 5) {
    errors.usernameError = 'Username is too short, min. 5 characters'
  }

  if (!values.password?.trim().length) {
    errors.passwordError = 'Password is required'
  }

  if (values.password.trim().length > 0 && values.password.trim().length < 8) {
    errors.passwordError = 'Password is too short, min. 8 characters'
  }

  if (!values.password?.length && !values.passwordRepeat?.length) {
    errors.passwordRepeatError = "Passwords don't match"
  }

  if (values.password !== values.passwordRepeat) {
    errors.passwordRepeatError = "Passwords don't match"
  }

  if (!EMAIL_REGEX.test(values.email)) {
    errors.emailError = 'Email is invalid'
  }

  if (storage) {
    if (storage.find(u => u.email === values.email)) {
      errors.emailError = 'Email is already taken'
    }

    if (storage.find(u => u.username === values.username)) {
      errors.usernameError = 'Username is already taken'
    }
  }
  return errors
}
