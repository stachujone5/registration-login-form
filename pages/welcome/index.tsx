import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Container } from '../../components/shared/container/Container'
import { UserInfo } from '../../components/user-info/UserInfo'
import { useUserContext } from '../../contexts/UserContext'

const WelcomePage = () => {
  const { currentUser } = useUserContext()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      void router.replace('/login')
    }
  }, [router, currentUser])

  if (!currentUser) return null

  return (
    <Container>
      <Head>
        <title>Welcome {currentUser.username}</title>
      </Head>
      <UserInfo />
    </Container>
  )
}

export default WelcomePage
