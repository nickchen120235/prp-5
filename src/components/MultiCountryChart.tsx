import React from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryZoomContainer, VictoryTooltip, VictoryLegend, VictoryLine } from 'victory'

import data from '../utils/data'
import { colorArray } from '../utils/utils'
import country from '../utils/country'

const countryList = country // Rename

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
      <VictoryLegend x={300} y={0} orientation='vertical' data={country.map((value, index) => ({ name: value, symbol: { fill: colorArray[index % 12] } }))} />
      {renderData.map((data, index) => <VictoryLine style={{data: {stroke: colorArray[index%12]}}} key={data[0].x} data={data} />)}
      {renderData.map((data, index) => <VictoryScatter style={{ data: { fill: colorArray[index % 12] } }} key={data[0].x} data={data} labels={({ datum }) => `Country: ${countryList[country[index]]}\nYear: ${datum.x}\nValue: ${datum.y}`} labelComponent={<VictoryTooltip dy={0} />} />)}
    </VictoryChart>
  )
}

export default MultiCountryChart