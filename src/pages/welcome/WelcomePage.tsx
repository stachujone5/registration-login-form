import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/button/Button'
import { Container } from '../../components/container/Container'
import { AppContext } from '../../contexts/AppContext'

import classes from './WelcomePage.module.scss'

export const WelcomePage = () => {
	const { setIsLoggedIn, actualUser, setActualUser } = useContext(AppContext)
	const navigate = useNavigate()

	const handleSignOut = () => {
		setIsLoggedIn(false)
		setActualUser(null)
		navigate('/login')
	}

	return (
		<Container>
			<h1 className={classes.welcome}>Welcome</h1>
			{actualUser && <h2 className={classes.username}>{actualUser.username}</h2>}
			<Button onClick={handleSignOut} className={classes.btn}>
				Sign out
			</Button>
		</Container>
	)
}
