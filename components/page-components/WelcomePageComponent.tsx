import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useUserContext } from '../../contexts/UserContext'
import { UserInfo } from '../user-info/UserInfo'

export const WelcomePageComponent = () => {
  const { currentUser } = useUserContext()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      void router.replace('/login')
    }
  }, [router, currentUser])

  if (!currentUser) return null

  return (
    <>
      <Head>
        <title>Welcome {currentUser.username}</title>
      </Head>
      <UserInfo />
    </>
  )
}
