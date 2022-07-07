import { createContext, useState } from 'react'

import type { PropsChildren, User } from '../types/types'
import type { Dispatch, SetStateAction } from 'react'

interface UserCtx {
  readonly isLoggedIn: boolean
  readonly setIsLoggedIn: Dispatch<SetStateAction<boolean>>
  readonly currentUser: User | null
  readonly setCurrentUser: Dispatch<SetStateAction<UserCtx['currentUser']>>
}

export const UserContext = createContext<UserCtx | null>(null)

export const UserProvider = ({ children }: PropsChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, setCurrentUser, currentUser }}>
      {children}
    </UserContext.Provider>
  )
}
