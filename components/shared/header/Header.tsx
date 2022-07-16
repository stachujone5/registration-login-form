import classes from './Header.module.scss'

import type { PropsChildren } from '../../../types/types'

export const Header = ({ children }: PropsChildren) => {
  return (
    <div className={classes.header}>
      <h1>{children}</h1>
    </div>
  )
}
