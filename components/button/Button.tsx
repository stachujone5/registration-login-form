import clsx from 'clsx'

import classes from './Button.module.scss'

import type { PropsChildren } from '../../types/types'
import type { MouseEventHandler } from 'react'

interface Props extends PropsChildren {
  readonly type?: 'button' | 'submit' | 'reset'
  readonly className?: string
  readonly onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, type = 'button', onClick, className = '' }: Props) => {
  const btnClasses = clsx(className, classes.btn)

  return (
    <button type={type} className={btnClasses} onClick={onClick}>
      {children}
    </button>
  )
}
