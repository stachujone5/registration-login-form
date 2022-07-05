import { EMAIL_REGEX } from '../constants/constants'
import { DEFAULT_ERRORS } from '../constants/defaults'

import type { Values, Errors } from '../types/types'
import type { Mutable } from '../types/utils'

export const validate = (data: Values) => {
  const errors: Mutable<Errors> = { ...DEFAULT_ERRORS }

  if (data.username.trim().length < 5) {
    errors.usernameError = 'Username is too short, min. 5 characters'
  }

  if (!data.password?.trim().length) {
    errors.passwordError = 'Password is required'
  }

  if (data.password.trim().length > 0 && data.password.trim().length < 8) {
    errors.passwordError = 'Password is too short, min. 8 characters'
  }

  if (!data.password?.length && !data.passwordRepeat?.length) {
    errors.passwordRepeatError = "Passwords don't match"
  }

  if (data.password !== data.passwordRepeat) {
    errors.passwordRepeatError = "Passwords don't match"
  }

  if (!EMAIL_REGEX.test(data.email)) {
    errors.emailError = 'Email is invalid'
  }

  return errors
}
