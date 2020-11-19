import React from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryZoomContainer } from 'victory'

import data from '../utils/data'
import { colorArray } from '../utils/utils'

interface MultiCountryChartProps {
  series: string
  country: string[]
}

const MultiCountryChart = (props: MultiCountryChartProps) => {
  const { series, country } = props

  const renderData = country.map(countryKey => (
    data[countryKey][series].map((value, index) => ({
      x: index + 1990,
      y: (series === 'SP_RUR_TOTL' || series === 'SL_TLF_TOTL_IN') ? value / data[countryKey]['SP_POP_TOTL'][index] * 100 : value
    })).filter(entry => !isNaN(entry.y))
  )).filter(entry => entry.length !== 0)

  return (
    <VictoryChart theme={VictoryTheme.material} containerComponent={<VictoryZoomContainer zoomDimension='y' />}>
      {renderData.map((data, index) => <VictoryScatter style={{ data: { fill: colorArray[index % 12] } }} key={data[0].x} data={data} />)}
    </VictoryChart>
  )
}

export default MultiCountryChart