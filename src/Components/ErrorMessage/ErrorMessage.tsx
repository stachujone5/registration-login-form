import classes from './ErrorMessage.module.scss'

export const ErrorMessage = ({ children }) => {
	return <p className={classes.error}>{children}</p>
}
