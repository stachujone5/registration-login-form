import classes from './Input.module.scss'

import type { ChangeEventHandler, FocusEventHandler } from 'react'

interface Props {
  readonly type?: string
  readonly placeholder?: string
  readonly id?: string
  readonly name?: string
  readonly onBlur?: FocusEventHandler<HTMLInputElement>
  readonly onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ type, placeholder, id, name, onBlur, onChange }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className={classes.input}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
}
