import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import { Container } from '../../Components/Container/Container'
import { Button } from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'
import classes from './WelcomePage.module.scss'

export const WelcomePage = () => {
	const { setIsLoggedIn, actualUser, setActualUser } = useContext(AppContext)
	const navigate = useNavigate()

	const handleSignOut = () => {
		setIsLoggedIn(false)
		setActualUser({})
		navigate('/login')
	}

	return (
		<Container>
			<h1 className={classes.welcome}>Welcome</h1>
			<h2 className={classes.username}>{actualUser.username}</h2>
			<Button onClick={handleSignOut} className={classes.btn}>
				Sign out
			</Button>
		</Container>
	)
}