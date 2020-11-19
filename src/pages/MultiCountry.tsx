import React, { useState, useEffect } from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, Dialog, DialogTitle, FormControl, FormGroup, FormControlLabel, Checkbox, Divider, Button, DialogActions, Radio } from '@material-ui/core'

import MultiCountryChart from '../components/MultiCountryChart'

import country from '../utils/country'
import series from '../utils/series'
import useStyles from '../utils/styles'
import { findKey } from '../utils/utils'

interface MultiCountryProps {
  setTitle: (title: string) => void
}

const name = Object.values(country).sort()
const seriesKey = Object.keys(series)

const MultiCountry = (props: MultiCountryProps) => {
  const { setTitle } = props

  useEffect(() => setTitle('Multiple Countries'), [])

  const style = useStyles()

  /** states */
  const [selected, setSelected] = useState<string[]>(['CHN'])
  const [open, setOpen] = useState(false)
  const [selectedSeries, setSelectedSeries] = useState('NY_GDP_MKTP_CD')

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
  const handleRadioSelect = (key: string) => () => {
    setSelectedSeries(key)
  }

  return (
    <div className={style.basediv}>
      <Box style={{ maxHeight: '100%', overflow: 'auto', width: 350 }}>
        <List className={style.countryList} disablePadding>
          <ListItem button onClick={() => setOpen(true)}>
            <ListItemText className={style.listTitle} primary='Select Country' />
          </ListItem>
          <Divider />
          {selected.map(code => country[code]).sort().map(name =>
            <ListItem key={name} button onClick={handleDelete(findKey(name, country))}>
              <ListItemText primary={`${name} (${findKey(name, country)})`} />
            </ListItem>
          )}
        </List>
      </Box>
      <Divider orientation='vertical' flexItem />
      <Box style={{ maxHeight: '100%', overflow: 'auto', width: 400 }}>
        <List className={style.countryList} disablePadding>
          <ListItem>
            <ListItemText className={style.listTitle} primary='Choose One Series' />
          </ListItem>
          <Divider />
          {seriesKey.map(code =>
            <ListItem key={code}>
              <ListItemIcon><Radio onChange={handleRadioSelect(code)} checked={selectedSeries === code} /></ListItemIcon>
              <ListItemText primary={(code === 'SP_RUR_TOTL' || code === 'SL_TLF_TOTL_IN') ? series[code].concat(' (% of total)') : series[code]} />
            </ListItem>
          )}
        </List>
      </Box>
      <Divider orientation='vertical' flexItem />
      <MultiCountryChart country={selected} series={selectedSeries} />
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
    </div>
  )
}

export default MultiCountry