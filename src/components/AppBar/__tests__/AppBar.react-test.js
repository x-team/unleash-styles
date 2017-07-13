/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import AppBar from '../AppBar'

test('AppBar renders correctly', () => {
  const wrapper = shallow(<AppBar />)
  expect(wrapper).toMatchSnapshot()
})
