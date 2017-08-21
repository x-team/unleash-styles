/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

test('Header renders correctly', () => {
  const wrapper = shallow(<Header text='Lorem Ipsum' />)
  expect(wrapper).toMatchSnapshot()
})
