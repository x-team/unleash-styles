/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Tabs from '../Tabs'
import Tab from '../Tab'

test('Tabs renders correctly', () => {
  const wrapper = shallow(
    <Tabs>
      <Tab label='test' isCurrent />
      <Tab label='test2' />
    </Tabs>
  )
  expect(wrapper).toMatchSnapshot()
})
