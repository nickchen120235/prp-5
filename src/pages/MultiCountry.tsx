import React, { useState, useEffect } from 'react'
import { Container, List, ListItem, ListItemText, Dialog, DialogTitle, FormControl, FormGroup, FormControlLabel, Checkbox, Divider, Button, DialogActions } from '@material-ui/core'

import country from '../utils/country'
import useStyles from '../utils/styles'
import { findKey } from '../utils/utils'

interface MultiCountryProps {
  setTitle: (title: string) => void
}

const name = Object.values(country).sort()

const MultiCountry = (props: MultiCountryProps) => {
  const { setTitle } = props

  useEffect(() => setTitle('Multiple Countries'), [])

  const style = useStyles()
  
  /** states */
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  /** handler */
  const handleToggle = (value: string) => () => {
    const key = findKey(value, country)
    const currentIndex = selected.indexOf(key)
    const newSelected = [...selected]

    if (currentIndex === -1) {
      newSelected.push(key)
    }
    else {
      newSelected.splice(currentIndex, 1)
    }

    setSelected(newSelected)
  }
  const handleDelete = (key: string) => () => {
    const currentIndex = selected.indexOf(key)
    const newSelected = [...selected]

    if (currentIndex === -1) {
      newSelected.push(key)
    }
    else {
      newSelected.splice(currentIndex, 1)
    }

    setSelected(newSelected)
  }

  return (
    <>
      <List className={style.countryList} disablePadding>
        <ListItem button onClick={() => setOpen(true)}>
          <ListItemText primary='Select Country/Region' />
        </ListItem>
        <Divider />
        {selected.map(code => country[code]).sort().map(name => <ListItem key={name} button onClick={handleDelete(findKey(name, country))}><ListItemText primary={name} /></ListItem>)}
      </List>
      <Dialog open={open} fullWidth maxWidth={false} onClose={() => setOpen(false)}>
        <DialogTitle className={style.title}>Select Country/Region</DialogTitle>
        <FormControl component='fieldset'>
          <FormGroup className={style.countryDialog}>
            {name.map(name => <FormControlLabel key={name} control={<Checkbox checked={selected.indexOf(findKey(name, country)) !== -1} onChange={handleToggle(name)} name={name} disableRipple />} label={name} />)}
          </FormGroup>
        </FormControl>
        <DialogActions>
          <Button variant='text' onClick={() => setOpen(false)} color='primary'>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MultiCountry