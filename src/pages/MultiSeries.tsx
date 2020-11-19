import React, { useState, useEffect } from 'react'
import { Box, Checkbox, List, ListItem, ListItemIcon, ListItemText, Divider, Grid, Paper } from '@material-ui/core'

import CountryDialog from '../components/CountryDialog'
import MultiSeriesChart from '../components/MultiSeriesChart'

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
  const [selected, setSelected] = useState<string[]>([seriesCode[0], seriesCode[1]])
  const [country, setCountry] = useState<string>('VCT')
  const [open, setOpen] = useState(false)

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

    if (newSelected.length > 6) return

    newSelected.sort()

    setSelected(newSelected)
  }
  const handleCountryClose = (value: string) => {
    setOpen(false)
    setCountry(value)
  }

  const TitleRow = (value: string[]) => (
    <>
      {value.map(series =>
        <Grid key={series} item xs>
          <Paper className={style.listTitle}>{series}</Paper>
        </Grid>
      )}
    </>
  )

  const ChartRow = (x: string[], y: string, country: string) => (
    <>
      {x.map(xAxis =>
        <Grid key={xAxis} item xs>
          <Paper>
            <MultiSeriesChart x={xAxis} y={y} country={country} />
          </Paper>
        </Grid>
      )}
    </>
  )

  return (
    <div className={style.basediv}>
      <Box style={{ maxHeight: '100%', overflow: 'auto', width: '30%' }}>
        <List className={style.countryList} disablePadding>
          <ListItem button onClick={() => setOpen(true)}>
            <ListItemText className={style.listTitle} primary={`Select Country: ${countryList[country]}`} secondary='select up to 6 series below' />
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
      <Box style={{ maxHeight: '100%', overflow: 'auto', width: '70%', padding: 10 }}>
        <Grid container spacing={1}>
          <Grid container item xs='auto' spacing={1}>
            {TitleRow(selected)}
          </Grid><br />
          {selected.map(value =>
            <Grid container item xs='auto' spacing={1} key={value}>
              {ChartRow(selected, value, country)}
            </Grid>
          )}
        </Grid>
      </Box>
      <CountryDialog open={open} selected={country} onClose={handleCountryClose} />
    </div>

  )
}

export default MultiSeries