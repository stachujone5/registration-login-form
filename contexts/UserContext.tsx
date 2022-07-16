import { createContext, useState } from 'react'

import type { PropsChildren, User } from '../types/types'
import type { Dispatch, SetStateAction } from 'react'

interface UserCtx {
  readonly currentUser: User | null
  readonly setCurrentUser: Dispatch<SetStateAction<UserCtx['currentUser']>>
}

export const UserContext = createContext<UserCtx | null>(null)

export const UserProvider = ({ children }: PropsChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{setCurrentUser, currentUser }}>
      {children}
    </UserContext.Provider>
  )
}