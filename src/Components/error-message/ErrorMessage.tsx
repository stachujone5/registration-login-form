import classes from './ErrorMessage.module.scss'

import type { PropsChildren } from '../../types/types'

export const ErrorMessage = ({ children }: PropsChildren) => {
	return <p className={classes.error}>{children}</p>
}
