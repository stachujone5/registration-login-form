import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { PropsChildren } from '../types/types'

interface User {
	username: string
	password: string
	email: string
}

interface AppContextInterface {
	isLoggedIn: boolean
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>
	actualUser: User | null
	setActualUser: Dispatch<SetStateAction<User | null>>
}

export const AppContext = createContext<AppContextInterface>({
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
