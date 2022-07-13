import type { User, LoginValues } from '../types/types'

export const getStorage = (): readonly User[] | null => {
  const item = localStorage.getItem('users')

  return item ? JSON.parse(item) : null
}

export const setStorage = (value: readonly User[]) => {
  const stringValue = JSON.stringify(value)

  localStorage.setItem('users', stringValue)
}

export const isInStorage = ({ password, username }: LoginValues) => {
  const storage = getStorage()

  return storage?.find(u => u.password === password && u.username === username)
}
