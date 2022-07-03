import { Link } from 'react-router-dom'

import classes from './Footer.module.scss'

interface Props {
  readonly infoText: string
  readonly btnText: string
  readonly to: string
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
