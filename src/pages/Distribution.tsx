import React, { useState, useEffect } from 'react'
import { Box, Radio, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

import DistributionChart from '../components/DistributionChart'

import series from '../utils/series'
import useStyles from '../utils/styles'

interface DistributionProps {
  setTitle: (title: string) => void
}

const seriesKey = Object.keys(series)

const Distribution = (props: DistributionProps) => {
  const { setTitle } = props

  useEffect(() => setTitle('Data Distribution'), [])

  const style = useStyles()

  /** states */
  const [year, setYear] = useState(2010)
  const [selected, setSelected] = useState('NY_GDP_MKTP_CD')

  /** handlers */
  const handleYearChange = (year: number) => () => setYear(year)
  const handleSeriesChange = (series: string) => () => setSelected(series)

  return (
    <div className={style.basediv}>
      <Box style={{ maxHeight: '100%', overflow: 'auto', width: 350 }}>
        <List className={style.countryList} disablePadding>
          <ListItem>
            <ListItemText className={style.listTitle} primary={`Select a year : ${year}`} />
          </ListItem>
          <Divider />
          {Array.from({ length: 26 }, (v, k) => k + 1990).map(value =>
            <ListItem key={value}>
              <ListItemIcon><Radio onChange={handleYearChange(value)} checked={value === year} /></ListItemIcon>
              <ListItemText primary={value} />
            </ListItem>
          )}
        </List>
      </Box>
      <Box style={{ maxHeight: '100%', overflow: 'auto', width: 550 }}>
        <List className={style.countryList} disablePadding>
          <ListItem>
            <ListItemText className={style.listTitle} primary={`Select a series: ${selected}`} />
          </ListItem>
          <Divider />
          {seriesKey.map(value =>
            <ListItem key={value}>
              <ListItemIcon><Radio onChange={handleSeriesChange(value)} checked={value === selected} /></ListItemIcon>
              <ListItemText primary={series[value]} secondary={value} />
            </ListItem>
          )}
        </List>
      </Box>
      <DistributionChart year={year} series={selected} />
    </div>
  )
}

export default Distribution