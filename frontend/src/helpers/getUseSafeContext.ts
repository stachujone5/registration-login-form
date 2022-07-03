import { useContext } from 'react'

import type { Context } from 'react'

export const getUseSafeContext = <T>(context: Context<T>) => {
  return () => {
    const ctx = useContext(context)

    if (!ctx) {
      throw new Error('Missing data!')
    }

    return ctx
  }
}
