export const getStorage = <T>(key: string): T | null | undefined => {
  if (typeof window === 'undefined') return

  const item = localStorage.getItem(key)

  return item ? JSON.parse(item) : null
}

export const setStorage = <T>(value: T) => {
  if (typeof window === 'undefined') return

  localStorage.setItem('users', JSON.stringify(value))
}
