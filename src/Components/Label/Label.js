import classes from './Label.module.scss'

const Label = ({ htmlFor, text, icon }) => {
	return (
		<label htmlFor={htmlFor} className={classes.label}>
			{icon}
			{text}
		</label>
	)
}

export default Label
