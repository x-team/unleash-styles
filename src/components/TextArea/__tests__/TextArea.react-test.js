/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import TextArea from '../TextArea'

test('TextArea renders correctly', () => {
  const wrapper = shallow(<TextArea id='foo' label='bar' placeholder='baz' />)
  expect(wrapper).toMatchSnapshot()
})
