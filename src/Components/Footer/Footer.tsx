import classes from './Footer.module.scss'
import { Link } from 'react-router-dom'

export const Footer = ({ infoText, btnText, to }) => {
	return (
		<>
			<p className={classes.info}>{infoText}</p>
			<Link to={to} className={classes.signin}>
				{btnText}
			</Link>
		</>
	)
}
