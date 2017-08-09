/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Input from '../Input'

test('Input renders correctly', () => {
  const wrapper = shallow(<Input type="text" id="foo" label="bar" placeholder="baz" />)
  expect(wrapper).toMatchSnapshot()
})
