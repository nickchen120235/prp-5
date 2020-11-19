export const findKey = (value: string, object: Record<string, unknown>) => {
  let key = Object.keys(object).find(key => object[key] === value)
  if (key === undefined) key = ''
  return key
}

export const colorArray = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928']