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
  /** text or textarea type of input if needed */
  type: PropTypes.string.isRequired
}

export default Input
