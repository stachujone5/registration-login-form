import { createContext, useState } from 'react'

import { getSafeContext } from '../helpers/getSafeContext'

import type { PropsChildren } from '../types/types'
import type { Dispatch, SetStateAction } from 'react'

export interface User {
  readonly username: string
  readonly password: string
  readonly email: string
  readonly createdAt: Date
}

interface UserCtx {
  readonly currentUser: User | null
  readonly setCurrentUser: Dispatch<SetStateAction<UserCtx['currentUser']>>
}

const UserContext = createContext<UserCtx | null>(null)

export const UserProvider = ({ children }: PropsChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  return <UserContext.Provider value={{ setCurrentUser, currentUser }}>{children}</UserContext.Provider>
}

export const useUserContext = getSafeContext(UserContext)
