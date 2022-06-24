import classes from './Footer.module.scss'
import { Link } from 'react-router-dom'

interface Props {
	infoText: string
	btnText: string
	to: string
}

export const Footer = ({ infoText, btnText, to }: Props) => {
	return (
		<>
			<p className={classes.info}>{infoText}</p>
			<Link to={to} className={classes.signin}>
				{btnText}
			</Link>
		</>
	)
}
