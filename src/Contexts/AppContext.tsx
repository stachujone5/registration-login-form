import { createContext, useState } from 'react'

import type { PropsChildren, User } from '../types/types'
import type { Dispatch, SetStateAction } from 'react'

interface Context {
	readonly isLoggedIn: boolean
	readonly setIsLoggedIn: Dispatch<SetStateAction<boolean>>
	readonly actualUser: User | null
	readonly setActualUser: Dispatch<SetStateAction<User | null>>
}

export const AppContext = createContext<Context>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	actualUser: null,
	setActualUser: () => {},
})

export const AppProvider = ({ children }: PropsChildren) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [actualUser, setActualUser] = useState<User | null>(null)

	return (
		<AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, setActualUser, actualUser }}>
			{children}
		</AppContext.Provider>
	)
}
