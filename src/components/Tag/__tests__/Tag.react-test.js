/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Tags from '../Tags'
import Tag from '../Tag'

test('Tags renders correctly', () => {
  const wrapper = shallow(
    <Tags>
      <Tag href='http://google.com' text='one' />
      <Tag href='http://google.com' text='two' />
      <Tag href='http://google.com' text='three' />
    </Tags>
  )
  expect(wrapper).toMatchSnapshot()
})
