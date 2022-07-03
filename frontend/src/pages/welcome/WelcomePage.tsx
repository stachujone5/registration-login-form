import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/button/Button'
import { Container } from '../../components/container/Container'
import { useUserContext } from '../../hooks/useUserContext'

import classes from './WelcomePage.module.scss'

export const WelcomePage = () => {
  const { setIsLoggedIn, currentUser, setCurrentUser } = useUserContext()
  const navigate = useNavigate()

  const handleSignOut = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    navigate('/login')
  }

  return (
    <Container>
      <h1 className={classes.welcome}>Welcome</h1>
      {currentUser && <h2 className={classes.username}>{currentUser.username}</h2>}
      <Button onClick={handleSignOut} className={classes.btn}>
        Sign out
      </Button>
    </Container>
  )
}
