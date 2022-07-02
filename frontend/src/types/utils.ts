/* eslint-disable functional/prefer-readonly-type -- validating */

export type Mutable<Type> = {
	-readonly [Key in keyof Type]: Type[Key]
}
