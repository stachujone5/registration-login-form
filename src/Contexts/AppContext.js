import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [actualUser, setActualUser] = useState({})

	return (
		<AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, setActualUser, actualUser }}>
			{children}
		</AppContext.Provider>
	)
}
