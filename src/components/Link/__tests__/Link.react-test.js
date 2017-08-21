/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import Link from '../Link'

test('Link renders correctly', () => {
  const wrapper = shallow(<Link href='http://google.com' text='Google' />)
  expect(wrapper).toMatchSnapshot()
})
