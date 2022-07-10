import { useRouter } from 'next/router'

import { Button } from '../../components/button/Button'
import { Container } from '../../components/container/Container'
import { useUserContext } from '../../hooks/useUserContext'

import classes from './WelcomePage.module.scss'

const WelcomePage = () => {
  const { setIsLoggedIn, currentUser, setCurrentUser } = useUserContext()

  const router = useRouter()

  const handleSignOut = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    void router.push('/login')
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

export default WelcomePage
