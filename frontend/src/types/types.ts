import type { ReactNode } from 'react'

export interface PropsChildren {
	readonly children: ReactNode
}

export interface User {
	readonly username: string
	readonly password: string
	readonly email: string
}
