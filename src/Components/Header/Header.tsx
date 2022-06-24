import { ReactNode } from 'react'
import classes from './Header.module.scss'

interface Props {
	children: ReactNode
}

export const Header = ({ children }: Props) => {
	return (
		<div className={classes.header}>
			<h1>{children}</h1>
		</div>
	)
}
