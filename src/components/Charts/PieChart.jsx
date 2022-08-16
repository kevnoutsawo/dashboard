import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts'

import { Header } from '..'
import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const pieData = [
  { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
  { 'x': 'iPhone', y: 19, text: '19%' },
  { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
  { 'x': 'Android', y: 12, text: '12%' }
]

const PieChart = () => {
  const { currentMode } = useStateContext()

  return (
      <AccumulationChartComponent
        id='pie-chart'
        height='420px'
        chartArea={{ border: {width: 0}}}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieData}
            name='Browser'
            xName='x'
            yName='y'
            explode={true}
            explodeOffset='10%'
            explodeIndex={0}
            dataLabel={{
              visible: true,
              position: 'Inside',
              name: 'text',
              font: {
                fontWeight: '600'
              }
            }}
            radius='70%'
          />)
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
  )
}

export default PieChart