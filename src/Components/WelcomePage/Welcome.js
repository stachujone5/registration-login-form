import { useContext } from 'react'
import { AppContext } from '../../Helpers/AppContext'
import Container from '../../UI/Container'
import Button from '../../UI/Button'
import classes from './Welcome.module.scss'

const Welcome = () => {
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

export default Welcome
