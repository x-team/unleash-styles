/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Tempo from '../Tempo'
import TempoLegend from '../TempoLegend'
import TempoLegendItem from '../TempoLegendItem'

test('Tempo renders correctly', () => {
  const wrapper = shallow(<Tempo title='Title' />)
  expect(wrapper).toMatchSnapshot()
})

test('Tempo renders correctly with children', () => {
  const wrapper = shallow(
    <Tempo title='Title'>
      <div>Hello</div>
      <TempoLegend>
        <TempoLegendItem label='Test' value={3} />
      </TempoLegend>
    </Tempo>
  )
  expect(wrapper).toMatchSnapshot()
})
