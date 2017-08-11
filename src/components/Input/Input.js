import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.css'

/**
 * Input
 */
function Input (props) {
  return <input className={styles.Input} {...props} />
}

Input.propTypes = {
  /** type of the input */
  type: PropTypes.string.isRequired
}

export default Input
