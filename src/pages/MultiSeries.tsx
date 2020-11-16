import React, { useState, useEffect } from 'react'
import { Container, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'

import series from '../utils/series'
import useStyles from '../utils/styles'

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
  const [country, setCountry] = useState<string>('CHN')

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
    <>
      <Container className={style.selector} maxWidth={false}>
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Series</FormLabel>
          <FormGroup>
            {seriesCode.map(value => <FormControlLabel key={value} control={<Checkbox checked={selected.indexOf(value) !== -1} onChange={handleToggle(value)} name={value} />} label={series[value]} />)}
          </FormGroup>
        </FormControl>
      </Container>
      <Container className={style.graph} maxWidth={false}>
        {selected.map(value => <p key={value}>{value}</p>)}
      </Container>
    </>
  )
}

export default MultiSeries