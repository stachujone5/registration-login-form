import { ReactNode } from 'react'
import classes from './Container.module.scss'

interface Props {
	children: ReactNode
}

export const Container = ({ children }: Props) => {
	return <main className={classes.container}>{children}</main>
}
