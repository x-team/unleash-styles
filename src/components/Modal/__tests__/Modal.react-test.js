/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Modal from '../Modal'

test('Modal renders correctly', () => {
  const wrapper = shallow(<Modal isOpen header={'Header'}>
    <div>
      <p>This is just for testing purposes...</p>
    </div>
  </Modal>)
  expect(wrapper).toMatchSnapshot()
})
