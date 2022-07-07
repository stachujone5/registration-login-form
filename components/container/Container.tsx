import classes from './Container.module.scss'

import type { PropsChildren } from '../../types/types'

export const Container = ({ children }: PropsChildren) => {
	return <main className={classes.container}>{children}</main>
}
