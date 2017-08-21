/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import Paragraph from '../Paragraph'

test('Paragraph renders correctly', () => {
  const wrapper = shallow(<Paragraph text='Lorem Ipsum' />)
  expect(wrapper).toMatchSnapshot()
})
