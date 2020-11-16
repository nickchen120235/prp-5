import React from 'react'

export const createMenuHandler = (value: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>>, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (
    () => {
      setCurrentPage(value)
      setMenuOpen(false)
    }
  )
}
export const findKey = (value: string, object: Record<string, unknown>) => {
  let key = Object.keys(object).find(key => object[key] === value)
  if (key === undefined) key = ''
  return key
}