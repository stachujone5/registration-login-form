import classes from './Button.module.scss'
import clsx from 'clsx'
import type { MouseEventHandler, ReactNode } from 'react'

interface Props {
	children: ReactNode
	type?: 'button' | 'submit' | 'reset'
	className?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, type = 'button', onClick, className = '' }: Props) => {
	const btnClasses = clsx(className, classes.btn)

	return (
		<button type={type} className={btnClasses} onClick={onClick}>
			{children}
		</button>
	)
}
