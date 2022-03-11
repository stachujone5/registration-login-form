import './index.scss'
import { Welcome } from './Pages/WelcomePage/Welcome'
import { AppContext } from './Contexts/AppContext'
import { useContext } from 'react'
import { Page } from './Components/Page/Page'

export const App = () => {
	const { isLoggedIn } = useContext(AppContext)

	if (isLoggedIn) {
		return <Welcome />
	}

	return <Page />
}
