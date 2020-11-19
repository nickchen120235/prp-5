import React from 'react'

import { VictoryChart, VictoryHistogram, VictoryTheme, VictoryTooltip} from 'victory'

import data from '../utils/data'
import country from '../utils/country'

interface DistributionProps {
  year: number
  series: string
}

const countryKey = Object.keys(country)

const DistributionChart = (props: DistributionProps) => {
  const {year, series} = props

  const renderData = countryKey.map(value => ({x: data[value][series][year-1990]})).filter(entry => !isNaN(entry.x))

  return(
    <VictoryChart theme={VictoryTheme.material} horizontal>
      <VictoryHistogram data={renderData} colorScale='qualitative' style={{data: {opacity:.5}}} labels={({datum}) => (datum.y)} labelComponent={<VictoryTooltip />} />
    </VictoryChart>
  )
}

export default DistributionChart