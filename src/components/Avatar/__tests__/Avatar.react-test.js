/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Avatar from '../Avatar'

test('Avatar renders correctly', () => {
  const wrapper = shallow(<Avatar imgSrc='http://imagesrc.com/img.jpg' />)
  expect(wrapper).toMatchSnapshot()
})
