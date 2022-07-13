import { useCallback } from 'react'

import { PASSWORD_ICON, USERNAME_ICON } from '../../constants/icons'
import { useLogin } from '../../hooks/useLogin'
import { Button } from '../button/Button'
import { ErrorMessage } from '../error-message/ErrorMessage'
import { Input } from '../input/Input'
import { Label } from '../label/Label'

import type { LoginValues } from '../../types/types'

type InputName = keyof LoginValues

export const LoginForm = () => {
  const { isLoginError, handleSubmit, handleBlur } = useLogin()

  const loginInput = useCallback((name: InputName) => ({ name, onBlur: handleBlur, id: name }), [handleBlur])

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='username' text='Username' icon={USERNAME_ICON} />
      <Input type='text' placeholder='Enter username' {...loginInput('username')} />
      <Label htmlFor='password' text='Password' icon={PASSWORD_ICON} />
      <Input type='password' placeholder='Enter password' {...loginInput('password')} />
      {isLoginError && <ErrorMessage>Your username or password is incorrect.</ErrorMessage>}
      <Button type='submit'>Sign in</Button>
    </form>
  )
}
