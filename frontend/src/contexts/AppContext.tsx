import { createContext, useState } from 'react'

import type { PropsChildren, User } from '../types/types'
import type { Dispatch, SetStateAction } from 'react'

interface Context {
	readonly isLoggedIn: boolean
	readonly setIsLoggedIn: Dispatch<SetStateAction<boolean>>
	readonly currentUser: User | null
	readonly setCurrentUser: Dispatch<SetStateAction<User | null>>
}

export const AppContext = createContext<Context>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	currentUser: null,
	setCurrentUser: () => {},
})

export const AppProvider = ({ children }: PropsChildren) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [currentUser, setCurrentUser] = useState<User | null>(null)

	return (
		<AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, setCurrentUser, currentUser }}>
			{children}
		</AppContext.Provider>
	)
}
