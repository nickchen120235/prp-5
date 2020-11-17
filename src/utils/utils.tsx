export const findKey = (value: string, object: Record<string, unknown>) => {
  let key = Object.keys(object).find(key => object[key] === value)
  if (key === undefined) key = ''
  return key
}