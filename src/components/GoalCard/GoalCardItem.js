/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './GoalCard.css'

/**
 * GoalCardItem
 */
class GoalCardItem extends Component {
  render () {
    const { label, isComplete, onClick } = this.props

    return (
      <li className={styles.GoalCardItemCheckbox}>
        <input onChange={onClick} className={styles.GoalCardItemInput} type='checkbox' id={label} checked={isComplete} />
        <label className={styles.GoalCardItemLabel} htmlFor={label}>
          {label}
        </label>
      </li>
    )
  }
}

GoalCardItem.propTypes = {
  /** label of the GoalCardItem */
  label: PropTypes.string.isRequired,
  /** whether the item is completed */
  isComplete: PropTypes.bool,
  /** Function to be triggered when toggling an item */
  onClick: PropTypes.func
}

export default GoalCardItem
