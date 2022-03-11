import classes from './Button.module.scss'

export const Button = ({ children, type, onClick, className }) => {
	return (
		<button type={type} className={`${classes.btn} ${className ? className : ''}`} onClick={onClick}>
			{children}
		</button>
	)
}
