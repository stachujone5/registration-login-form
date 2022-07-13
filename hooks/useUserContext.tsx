import { UserContext } from '../contexts/UserContext'
import { getSafeContext } from '../helpers/getSafeContext'

export const useUserContext = getSafeContext(UserContext)
