import classes from './ErrorMessage.module.scss'

const ErrorMessage = ({ children }) => {
	return <p className={classes.error}>{children}</p>
}

export default ErrorMessage
