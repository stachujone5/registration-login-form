import classes from './Header.module.scss'

const Header = ({ children }) => {
	return (
		<div className={classes.header}>
			<h1>{children}</h1>
		</div>
	)
}

export default Header
