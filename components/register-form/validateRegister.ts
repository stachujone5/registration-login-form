import { getStorage } from '../../helpers/handleStorage'

import type { User } from '../../contexts/UserContext'
import type { RegisterValues } from './useRegister'

const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

export const validateRegister = (values: RegisterValues) => {
  const errors = {
    usernameError: '',
    passwordError: '',
    passwordRepeatError: '',
    emailError: ''
  }

  const storage = getStorage<readonly User[]>('users')

  if (values.username.trim().length < 5) {
    errors.usernameError = 'Username is too short, min. 5 characters'
  }

  if (!values.password.trim().length) {
    errors.passwordError = 'Password is required'
  }

  if (values.password.trim().length > 0 && values.password.trim().length < 8) {
    errors.passwordError = 'Password is too short, min. 8 characters'
  }

  if (!values.password.length && !values.passwordRepeat.length) {
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
