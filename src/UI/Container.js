import classes from './Container.module.scss'

const Container = ({ children }) => {
	return <main className={classes.container}>{children}</main>
}

export default Container
