import { UserContext } from '../contexts/UserContext'
import { getUseSafeContext } from '../helpers/getUseSafeContext'

export const useUserContext = getUseSafeContext(UserContext)
