import classes from './Input.module.scss'
import type { ChangeEventHandler, FocusEventHandler } from 'react'

interface Props {
	type?: string
	placeholder?: string
	id?: string
	name?: string
	onBlur?: FocusEventHandler<HTMLInputElement>
	onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ type, placeholder, id, name, onBlur, onChange }: Props) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			id={id}
			className={classes.input}
			name={name}
			onBlur={onBlur}
			onChange={onChange}
		/>
	)
}
