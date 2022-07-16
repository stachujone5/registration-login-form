import { useCallback } from 'react'

import { PASSWORD_ICON, USERNAME_ICON } from '../../constants/icons'
import { Button } from '../shared/button/Button'
import { ErrorMessage } from '../shared/error-message/ErrorMessage'
import { Input } from '../shared/input/Input'
import { Label } from '../shared/label/Label'

import classes from './LoginForm.module.scss'
import { useLogin } from './useLogin'

import type { LoginValues } from '../../types/types'

type InputName = keyof LoginValues

export const LoginForm = () => {
  const { isLoginError, handleSubmit, handleBlur } = useLogin()

  const loginInput = useCallback((name: InputName) => ({ name, onBlur: handleBlur, id: name }), [handleBlur])

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='login' text='Username or Email' icon={USERNAME_ICON} />
      <Input type='text' placeholder='Enter username or email' {...loginInput('login')} />
      <Label htmlFor='password' text='Password' icon={PASSWORD_ICON} />
      <Input type='password' placeholder='Enter password' {...loginInput('password')} />
      {isLoginError && <ErrorMessage>Incorrect login credentials.</ErrorMessage>}
      <Button type='submit' className={classes.btn}>
        Sign in
      </Button>
    </form>
  )
}
