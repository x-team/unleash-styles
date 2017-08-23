import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './FloatingButton.css'

/**
 * Floating Button Component
 */
class FloatingButton extends Component {
  render () {
    const { label, onClick, isFloating } = this.props
    const buttonClasses = classNames(
      styles.RoundRedButton,
      (isFloating) && styles.FloatingButton
    )

    return (
      <button className={buttonClasses} onClick={onClick}>{label}</button>
    )
  }
}

FloatingButton.propTypes = {
  /** Label for button */
  label: PropTypes.string.isRequired,
  /** Function to be triggered after clicked */
  onClick: PropTypes.func.isRequired,
  /** Location of button */
  isFloating: PropTypes.bool.isRequired
}

export default FloatingButton
