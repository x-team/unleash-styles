/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import GoalCard from '../GoalCard'
import GoalCardItem from '../GoalCardItem'

test('GoalCard renders correctly', () => {
  const wrapper = shallow(
    <GoalCard title='Lorem Ipsum' onClick={() => {}}>
      <GoalCardItem label='test1' isComplete />
      <GoalCardItem label='test2' isComplete />
      <GoalCardItem label='test3' />
      <GoalCardItem label='test4' />
    </GoalCard>
  )
  expect(wrapper).toMatchSnapshot()
})
