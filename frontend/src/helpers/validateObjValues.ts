export const validateObjValues = (obj: { readonly [key: string]: any }) => Object.values(obj).includes(undefined)
