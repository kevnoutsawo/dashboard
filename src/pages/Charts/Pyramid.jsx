import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PyramidSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel, AccumulationSelection } from '@syncfusion/ej2-react-charts'

import { PyramidData } from '../../data/dummy'

import { Header } from '../../components'

import { useStateContext } from '../../contexts/ContextProvider'

const Pyramid = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Food Comparison Chart" />
      <AccumulationChartComponent
        id='pyramid-chart'
        height='420px'
        chartArea={{ border: {width: 0}}}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[PyramidSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, AccumulationSelection]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            name='Food'
            xName='x'
            yName='y'
            type='Pyramid'
            width='45%'
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
    </div>
  )
}

export default Pyramid