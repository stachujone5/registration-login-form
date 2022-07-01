import type { ReactNode } from 'react'

export interface PropsChildren {
	readonly children: ReactNode
}

export interface User {
	readonly username: string
	readonly password: string
	readonly email: string
}

export interface Values {
	readonly username: string
	readonly password: string
	readonly passwordRepeat: string
	readonly email: string
}

export interface Errors {
	readonly usernameError: string
	readonly passwordError: string
	readonly passwordRepeatError: string
	readonly emailError: string
	readonly usernameIsTaken: string
	readonly emailIsTaken: string
}

export interface Touched {
	readonly username: boolean
	readonly password: boolean
	readonly passwordRepeat: boolean
	readonly email: boolean
}

export interface LoginValues {
	readonly username: string
	readonly password: string
}
