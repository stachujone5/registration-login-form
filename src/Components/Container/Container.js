import classes from './Container.module.scss'

export const Container = ({ children }) => {
	return <main className={classes.container}>{children}</main>
}
