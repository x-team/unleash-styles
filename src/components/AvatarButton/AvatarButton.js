/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './AvatarButton.css'

/**
 * Avatar component which can be used in relation to user profile
 */
class AvatarButton extends Component {
  static defaultProps: Object

  handleClick () {
    const { onClick } = this.props
    onClick()
  }

  render () {
    return (
      <div>
        <input
          type='checkbox'
          onClick={this.handleClick}
          className={styles.AvatarButton}
          id='avatar_button'
        />
        <label
          className={styles.AvatarButtonLabel}
          htmlFor='avatar_button'>{this.props.label}
        </label>
      </div>
    )
  }
}

AvatarButton.defaultProps = {
  label: null,
  onClick: val => val
}

AvatarButton.propTypes = {
  /** Label will be used for displaying text on avatar */
  label: PropTypes.string,
  /** Function to be called after clicking avatar */
  onClick: PropTypes.func
}

export default AvatarButton
