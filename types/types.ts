import type { ReactNode } from 'react'

export interface PropsChildren {
  readonly children: ReactNode
}

export interface User {
  readonly username: string
  readonly password: string
  readonly email: string
  readonly createdAt: Date
}

export interface RegisterValues {
  readonly username: string
  readonly password: string
  readonly passwordRepeat: string
  readonly email: string
}

export interface LoginValues {
  readonly login: string
  readonly password: string
}
