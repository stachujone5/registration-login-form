import { createContext, useState } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
	const defaultValues = { username: '', password: '', passwordRepeat: '', email: '' }
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [values, setValues] = useState(defaultValues)
	const [page, setPage] = useState('register')

	return (
		<AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, values, setValues, page, setPage, defaultValues }}>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider
