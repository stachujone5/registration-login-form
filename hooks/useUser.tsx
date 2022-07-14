import { useRouter } from 'next/router'

import { getStorage, isInStorage, setStorage } from '../helpers/handleStorage'

import { useUserContext } from './useUserContext'

import type { LoginValues, User, Values } from '../types/types'

export const useUser = () => {
  const { setIsLoggedIn, setCurrentUser, currentUser } = useUserContext()

  const router = useRouter()

  const deleteUser = () => {
    if (!currentUser) return

    const newUsers = getStorage()?.filter(
      u => u.username !== currentUser.username && u.password !== currentUser.password
    )

    if (newUsers) {
      setStorage(newUsers)
      handleSignOut()
    }
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    void router.push('/login')
  }

  const createUser = (values: Values) => {
    const newUser: User = {
      username: values.username,
      password: values.password,
      email: values.email,
      createdAt: new Date()
    }

    const storage = getStorage()

    storage ? setStorage([...storage, newUser]) : setStorage([newUser])

    setCurrentUser(newUser)
    setIsLoggedIn(true)
    void router.push('/welcome')
  }

  const handleLogin = (values: LoginValues) => {
    const user = isInStorage({ username: values.username, password: values.password })

    if (user) {
      setIsLoggedIn(true)
      setCurrentUser(user)
      void router.push('/welcome')
      return user
    }
  }

  return { deleteUser, handleSignOut, createUser, handleLogin }
}
