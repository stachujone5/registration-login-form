import { useCallback } from 'react'

import { EMAIL_ICON, PASSWORD_ICON, USERNAME_ICON } from '../../constants/icons'
import { useRegister } from '../../hooks/useRegister'
import { Button } from '../button/Button'
import { ErrorMessage } from '../error-message/ErrorMessage'
import { Input } from '../input/Input'
import { Label } from '../label/Label'

import classes from './RegisterForm.module.scss'

import type { Values } from '../../types/types'

type InputName = keyof Values

export const RegisterForm = () => {
  const {
    errors: { usernameError, emailError, passwordError, passwordRepeatError },
    handleBlur,
    isTouched,
    handleSubmit
  } = useRegister()

  const registerInput = useCallback((name: InputName) => ({ name, onBlur: handleBlur, id: name }), [handleBlur])

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='username' text='Username' icon={USERNAME_ICON} />
      <Input type='text' placeholder='Enter username' {...registerInput('username')} />
      {usernameError && isTouched.username && <ErrorMessage>{usernameError}</ErrorMessage>}

      <Label htmlFor='password' text='Password' icon={PASSWORD_ICON} />
      <Input type='password' placeholder='Enter password' {...registerInput('password')} />
      {passwordError && isTouched.password && <ErrorMessage>{passwordError}</ErrorMessage>}

      <Label htmlFor='passwordRepeat' text='Repeat Password' icon={PASSWORD_ICON} />
      <Input type='password' placeholder='Repeat password' {...registerInput('passwordRepeat')} />
      {passwordRepeatError && isTouched.passwordRepeat && <ErrorMessage>{passwordRepeatError}</ErrorMessage>}

      <Label htmlFor='email' text='Email' icon={EMAIL_ICON} />
      <Input type='email' placeholder='Enter email' {...registerInput('email')} />
      {emailError && isTouched.email && <ErrorMessage>{emailError}</ErrorMessage>}

      <Button type='submit' className={classes.btn}>
        Sign up
      </Button>
    </form>
  )
}
