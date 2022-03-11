import classes from './Header.module.scss'

export const Header = ({ children }) => {
	return (
		<div className={classes.header}>
			<h1>{children}</h1>
		</div>
	)
}
