/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import Timeline from '../Timeline'
import GoalCard from '../../GoalCard/GoalCard'
import GoalCardItem from '../../GoalCard/GoalCardItem'

test('Timeline renders correctly', () => {
  const wrapper = shallow(<Timeline />)
  expect(wrapper).toMatchSnapshot()
})

test('Timeline renders its children correctly', () => {
  const wrapper = shallow(
    <Timeline>
      <GoalCard title='Lorem Ipsum' onClick={() => {}}>
        <GoalCardItem label='test1' isComplete />
        <GoalCardItem label='test2' />
      </GoalCard>
      <GoalCard title='Lorem Ipsum' onClick={() => {}}>
        <GoalCardItem label='test1' isComplete />
        <GoalCardItem label='test2' />
      </GoalCard>
      <GoalCard title='Lorem Ipsum' onClick={() => {}}>
        <GoalCardItem label='test1' isComplete />
        <GoalCardItem label='test2' />
      </GoalCard>
    </Timeline>
  )
  expect(wrapper).toMatchSnapshot()
})
