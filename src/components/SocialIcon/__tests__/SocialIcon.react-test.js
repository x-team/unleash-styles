/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import SocialIcons from '../SocialIcons'
import SocialIcon from '../SocialIcon'

test('SocialIcons renders correctly', () => {
  const wrapper = shallow(
    <SocialIcons>
      <SocialIcon type='facebook' href='http://google.com' />
      <SocialIcon type='instagram' href='http://google.com' />
      <SocialIcon type='linkedin' href='http://google.com' />
      <SocialIcon type='pinterest' href='http://google.com' />
      <SocialIcon type='twitter' href='http://google.com' />
    </SocialIcons>
  )
  expect(wrapper).toMatchSnapshot()
})
