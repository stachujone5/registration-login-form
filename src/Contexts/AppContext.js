import { createContext, useState } from 'react'
import { REGISTER_PAGE } from '../Constants/constants'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [page, setPage] = useState(REGISTER_PAGE)
	const [actualUser, setActualUser] = useState({})

	return <AppContext.Provider value={{ page, setPage, setActualUser, actualUser }}>{children}</AppContext.Provider>
}
