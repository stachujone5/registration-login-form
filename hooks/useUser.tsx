import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { getStorage, setStorage } from '../helpers/handleStorage'

import { useUserContext } from './useUserContext'

import type { LoginValues, User, Values } from '../types/types'

export const useUser = () => {
  const { setIsLoggedIn, setCurrentUser, currentUser } = useUserContext()

  const router = useRouter()

  const handleLogin = useCallback(
    (values: LoginValues) => {
      const user = getStorage()?.find(u => u.password === values.password && u.username === values.username)

      if (user) {
        setIsLoggedIn(true)
        setCurrentUser(user)
        void router.push('/welcome')
        return user
      }
    },
    [router, setCurrentUser, setIsLoggedIn]
  )

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    void router.push('/login')
  }, [router, setCurrentUser, setIsLoggedIn])

  const createUser = useCallback(
    (values: Values) => {
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
    },
    [router, setCurrentUser, setIsLoggedIn]
  )

  const deleteUser = useCallback(() => {
    if (!currentUser) return

    const newUsers = getStorage()?.filter(
      u => u.username !== currentUser.username && u.password !== currentUser.password
    )

    if (newUsers) {
      setStorage(newUsers)
      handleLogout()
    }
  }, [currentUser, handleLogout])

  return { deleteUser, handleLogout, createUser, handleLogin }
}
