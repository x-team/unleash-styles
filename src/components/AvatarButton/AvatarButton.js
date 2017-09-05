/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './AvatarButton.css'

/**
 * Avatar component which can be used in relation to user profile
 */
class AvatarButton extends Component {
  render () {
    const { onClick } = this.props
    const input = <input type='checkbox' className={styles.AvatarButton} id='avatar_button' />
    const label = (
      <label className={styles.AvatarButtonLabel} htmlFor='avatar_button'>
        {this.props.label}
      </label>
    )

    return onClick
      ? (<a onClick={onClick}>{input}{label}</a>)
      : (<div>{input}{label}</div>)
  }
}

AvatarButton.propTypes = {
  /** Label will be used for displaying text on avatar */
  label: PropTypes.string,
  /** Function to be called after clicking avatar */
  onClick: PropTypes.func
}

export default AvatarButton
