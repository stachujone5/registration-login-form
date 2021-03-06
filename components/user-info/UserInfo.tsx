import { formatDistance } from 'date-fns'

import { useUserContext } from '../../contexts/UserContext'
import { useUser } from '../../hooks/useUser'
import { Button } from '../shared/button/Button'

import classes from './UserInfo.module.scss'

export const UserInfo = () => {
  const { currentUser } = useUserContext()
  const { deleteUser, handleLogout } = useUser()

  if (!currentUser) {
    return null
  }

  const creationDate = formatDistance(new Date(currentUser.createdAt), new Date())

  return (
    <div>
      <h1 className={classes.welcome}>Welcome</h1>
      <h2 className={classes.username}>{currentUser.username}</h2>
      <p className={classes.center}>Account created {creationDate} ago.</p>
      <Button onClick={deleteUser} className={classes.btn}>
        Delete account
      </Button>
      <Button onClick={handleLogout} className={classes.btn}>
        Sign out
      </Button>
    </div>
  )
}
