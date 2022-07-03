import { useCallback } from 'react'
import { IoIosLock, IoMdPerson, IoIosMail } from 'react-icons/io'

import { useRegister } from '../../hooks/useRegister'
import { Button } from '../button/Button'
import { ErrorMessage } from '../error-message/ErrorMessage'
import { Input } from '../input/Input'
import { Label } from '../label/Label'

import type { Values } from '../../types/types'

type InputName = keyof Values

export const RegisterForm = () => {
  const {
    errors: { usernameError, emailError, passwordError, passwordRepeatError },
    handleBlur,
    isTouched: { email, password, passwordRepeat, username },
    handleRegister,
  } = useRegister()

  const registerInput = useCallback((name: InputName) => ({ name, onBlur: handleBlur, id: name }), [])

  return (
    <form onSubmit={handleRegister}>
      <Label htmlFor="username" text="Username" icon={<IoMdPerson />} />
      <Input type="text" placeholder="Enter username" {...registerInput('username')} />
      {usernameError && username && <ErrorMessage>{usernameError}</ErrorMessage>}

      <Label htmlFor="password" text="Password" icon={<IoIosLock />} />
      <Input type="password" placeholder="Enter password" {...registerInput('password')} />
      {passwordError && password && <ErrorMessage>{passwordError}</ErrorMessage>}

      <Label htmlFor="passwordRepeat" text="Repeat Password" icon={<IoIosLock />} />
      <Input type="password" placeholder="Repeat password" {...registerInput('passwordRepeat')} />
      {passwordRepeatError && passwordRepeat && <ErrorMessage>{passwordRepeatError}</ErrorMessage>}

      <Label htmlFor="email" text="Email" icon={<IoIosMail />} />
      <Input type="email" placeholder="Enter email" {...registerInput('email')} />
      {emailError && email && <ErrorMessage>{emailError}</ErrorMessage>}

      <Button type="submit">Sign up</Button>
    </form>
  )
}
