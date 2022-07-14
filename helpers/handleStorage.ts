import type { User, LoginValues } from '../types/types'

export const getStorage = (): readonly User[] | null => {
  const item = localStorage.getItem('users')

  return item ? JSON.parse(item) : null
}

export const setStorage = (value: readonly User[]) => {
  localStorage.setItem('users', JSON.stringify(value))
}

export const isInStorage = ({ password, username }: LoginValues) => {
  return getStorage()?.find(u => u.password === password && u.username === username)
}
