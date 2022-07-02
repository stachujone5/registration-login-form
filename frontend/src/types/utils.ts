/* eslint-disable functional/prefer-readonly-type -- util used for validation */

export type Mutable<Type> = {
	-readonly [Key in keyof Type]: Type[Key]
}
