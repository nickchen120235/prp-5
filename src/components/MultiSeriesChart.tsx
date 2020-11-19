import React from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis } from 'victory'

import data from '../utils/data'

interface MultiSeriesChartProps {
  country: string
  x: string
  y: string
}

const MultiSeriesChart = (props: MultiSeriesChartProps) => {
  const {country, x, y} = props

  const renderData = data[country][x].map((value, index) => ({
    x: value,
    y: data[country][y][index]
  })).filter(entry => !isNaN(entry.x) && !isNaN(entry.y))

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryScatter colorScale='qualitative' data={renderData} />
      <VictoryAxis label={x} tickFormat={() => ''} /> 
      <VictoryAxis label={y} tickFormat={() => ''} orientation='left' /> 
    </VictoryChart>
  )
}

export default MultiSeriesChart