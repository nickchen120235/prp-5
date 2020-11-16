import React from 'react'

export const createMenuHandler = (value: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>>, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  return(
    () => {
      setCurrentPage(value)
      setMenuOpen(false)
    }
  )
}