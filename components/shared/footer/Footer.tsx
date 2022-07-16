import Link from 'next/link'

import classes from './Footer.module.scss'

interface Props {
  readonly infoText: string
  readonly btnText: string
  readonly href: string
}

export const Footer = ({ infoText, btnText, href }: Props) => {
  return (
    <>
      <p className={classes.info}>{infoText}</p>
      <Link href={href}>
        <a className={classes.signin}>{btnText} </a>
      </Link>
    </>
  )
}
