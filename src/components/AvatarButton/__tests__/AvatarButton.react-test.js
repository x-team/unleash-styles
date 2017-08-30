/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'

import AvatarButton from '../AvatarButton'

test('AvatarButton renders correctly', () => {
  const wrapper = shallow(<AvatarButton label='test' />)
  expect(wrapper).toMatchSnapshot()
})
