import React, { useState, useEffect } from 'react'
import { Box, Checkbox, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

import series from '../utils/series'
import useStyles from '../utils/styles'
import country from '../utils/country'

const countryList = country // Rename

const seriesCode = Object.keys(series)

interface MultiSeriesProps {
  setTitle: (title: string) => void
}

const MultiSeries = (props: MultiSeriesProps) => {
  const { setTitle } = props

  useEffect(() => setTitle('Multiple Series'), [])

  const style = useStyles()

  /** states */
  const [selected, setSelected] = useState<string[]>([seriesCode[0]])
  const [country, setCountry] = useState<string>('VCT')

  /** handlers */
  const handleToggle = (value: string) => () => {
    const currentIndex = selected.indexOf(value)
    const newSelected = [...selected]

    if (currentIndex === -1) {
      newSelected.push(value)
    }
    else {
      newSelected.splice(currentIndex, 1)
    }

    setSelected(newSelected)
  }

  return (
    <div className={style.basediv}>
      <Box style={{ maxHeight: '100%', overflow: 'auto', width: '35%' }}>
        <List className={style.countryList} disablePadding>
          <ListItem button>
            <ListItemText className={style.listTitle} primary={`Select Country: ${countryList[country]}`} secondary='select series below' />
          </ListItem>
          <Divider />
          {seriesCode.map(code =>
            <ListItem key={code}>
              <ListItemIcon><Checkbox onChange={handleToggle(code)} checked={selected.indexOf(code) !== -1} /></ListItemIcon>
              <ListItemText primary={series[code]} secondary={code} />
            </ListItem>
          )}
        </List>
      </Box>
      <Divider orientation='vertical' flexItem />
      {selected.map(value => <p key={value}>{value}</p>)}
    </div>
  )
}

export default MultiSeries