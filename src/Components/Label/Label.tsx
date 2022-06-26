import classes from './Label.module.scss'
import type { ReactNode } from 'react'

interface Props {
	htmlFor?: string
	text?: string
	icon?: ReactNode
}

export const Label = ({ htmlFor, text, icon }: Props) => {
	return (
		<label htmlFor={htmlFor} className={classes.label}>
			{icon}
			{text}
		</label>
	)
}
