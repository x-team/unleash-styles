/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import FloatingButton from '../FloatingButton'

test('FloatingButton renders correctly', () => {
  const wrapper = shallow(<FloatingButton label='+' onClick={() => {}} isFloating />)
  expect(wrapper).toMatchSnapshot()
})
