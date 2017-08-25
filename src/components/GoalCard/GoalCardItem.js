/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './GoalCard.css'

/**
 * GoalCardItem
 */
class GoalCardItem extends Component {
  render () {
    const { label, isComplete } = this.props

    return (
      <li className={styles.GoalCardItemCheckbox}>
        <input className={styles.GoalCardItemInput} type='checkbox' id={label} checked={isComplete} />
        <label className={styles.GoalCardItemLabel} for={label}>
          {label}
        </label>
      </li>
    )
  }
}

GoalCardItem.propTypes = {
  /** label of the GoalCardItem */
  label: PropTypes.string.isRequired,
  /** wether the item is completed */
  isComplete: PropTypes.bool
}

export default GoalCardItem
