/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './GoalCard.css'

/**
 * GoalCardItem
 */
class GoalCardItem extends Component {
  state: {
    isComplete: boolean
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      isComplete: props.isComplete
    }
  }

  handleCheckboxChange () {
    const { onClick } = this.props

    this.setState({
      isComplete: !this.state.isComplete
    })
    if (onClick) {
      onClick(!this.state.isComplete)
    }
  }

  render () {
    const { label } = this.props

    return (
      <li className={styles.GoalCardItemCheckbox}>
        <input onChange={() => this.handleCheckboxChange()} className={styles.GoalCardItemInput} type='checkbox' id={label} checked={this.state.isComplete} />
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
  /** wether the item is completed */
  isComplete: PropTypes.bool,
  /** Function to be triggered when toggling an item */
  onClick: PropTypes.func
}

export default GoalCardItem
