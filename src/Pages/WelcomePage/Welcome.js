import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import { Container } from '../../Components/Container/Container'
import { Button } from '../../Components/Button/Button'
import classes from './Welcome.module.scss'

export const Welcome = () => {
	const { defaultValues, setValues, setIsLoggedIn } = useContext(AppContext)

	const handleSignOut = () => {
		setIsLoggedIn(false)
		setValues(defaultValues)
	}

	const username = JSON.parse(localStorage.getItem('user')).username

	return (
		<Container>
			<h1 className={classes.welcome}>Welcome</h1>
			<h2 className={classes.username}>{username}</h2>
			<Button onClick={handleSignOut} className={classes.btn}>
				Sign out
			</Button>
		</Container>
	)
}
