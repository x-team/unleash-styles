import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FloatingButton.css'

/**
 * Floating Button
 */
class FloatingButton extends Component {
  render () {
		const { icon, onClick } = this.props
		return (
      <div>
        <button className={styles.FloatingButton} onClick={onClick}>{icon}</button>
      </div>
		)
  }
}

FloatingButton.propTypes = {
  /** text/icon on menu item */
  icon: PropTypes.string.isRequired,
  /** function to be triggered */
  onClick: PropTypes.func.isRequired
}

export default FloatingButton
