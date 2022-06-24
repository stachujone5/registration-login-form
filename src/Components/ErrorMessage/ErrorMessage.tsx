import { ReactNode } from 'react'
import classes from './ErrorMessage.module.scss'

interface Props {
	children: ReactNode
}

export const ErrorMessage = ({ children }: Props) => {
	return <p className={classes.error}>{children}</p>
}
