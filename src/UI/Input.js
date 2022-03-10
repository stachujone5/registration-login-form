import classes from './Input.module.scss'

const Input = ({ type, placeholder, id, name, onBlur, onChange }) => {
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

export default Input
