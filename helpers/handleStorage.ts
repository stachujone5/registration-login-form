import type { User } from '../types/types'

export const getStorage = (): readonly User[] | undefined | null => {
  if (typeof window === 'undefined') return

  const item = localStorage.getItem('users')

  return item ? JSON.parse(item) : null
}

export const setStorage = (value: readonly User[]) => {
  if (typeof window === 'undefined') return

  localStorage.setItem('users', JSON.stringify(value))
}
