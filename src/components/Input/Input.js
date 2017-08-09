import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Input.css'

/**
 * Input
 */
class Input extends Component {
  render () {
    const { type } = this.props
    return (
      <input className={styles.Input} type={type} {...this.props} />
    )
  }
}

Input.propTypes = {
  /** type of the input */
  type: PropTypes.string.isRequired
}

export default Input
