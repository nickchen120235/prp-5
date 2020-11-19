export const findKey = (value: string, object: Record<string, unknown>) => {
  let key = Object.keys(object).find(key => object[key] === value)
  if (key === undefined) key = ''
  return key
}

export const colorArray = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928']

const average = (arr: number[]) => {
  let sum = 0
  for (const i of arr) {
    sum += i
  }
  return sum/arr.length
}

export const correlation = (arr1: number[], arr2: number[]) => {
  const arr = arr1.map((value, index) => ({x: value, y: arr2[index]})).filter(entry => !isNaN(entry.x) && !isNaN(entry.y))
  if (arr.length === 0) return 0
  const x = arr.map(value => value.x)
  const y = arr.map(value => value.y)
  const up = x.map((value, index) => ((value-average(x))*(y[index]-average(y)))).reduce((acc, cur) => acc+cur)
  const down1 = Math.sqrt(x.map(value => ((value-average(x))*(value-average(x)))).reduce((acc, cur) => acc+cur))
  const down2 = Math.sqrt(y.map(value => ((value-average(y))*(value-average(y)))).reduce((acc, cur) => acc+cur))
  return up === 0? 0: up/(down1*down2)
}