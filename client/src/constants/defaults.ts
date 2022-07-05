import type { Values, Errors, Touched, LoginValues } from '../types/types'

export const DEFAULT_REGISTER_VALUES: Values = {
  username: '',
  password: '',
  passwordRepeat: '',
  email: '',
}

export const DEFAULT_ERRORS: Errors = {
  usernameError: '',
  passwordError: '',
  passwordRepeatError: '',
  emailError: '',
}

export const DEFAULT_TOUCHED: Touched = {
  username: false,
  password: false,
  passwordRepeat: false,
  email: false,
}

export const DEFAULT_LOGIN_VALUES: LoginValues = {
  username: '',
  password: '',
}
