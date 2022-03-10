import { useContext } from 'react'
import { AppContext } from '../Helpers/AppContext'
import classes from './Footer.module.scss'

const Footer = ({ infoText, btnText, page }) => {
	const { setPage } = useContext(AppContext)

	return (
		<>
			<p className={classes.info}>{infoText}</p>
			<button onClick={() => setPage(page)} className={classes.signin}>
				{btnText}
			</button>
		</>
	)
}

export default Footer
