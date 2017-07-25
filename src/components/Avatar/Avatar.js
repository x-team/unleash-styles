/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.css'

/**
 * Avatar component which can be used in relation to user profile
 */
class Avatar extends Component {
  static defaultProps: Object

  handleClick () {
    const { onClick } = this.props
    onClick()
  }

  render () {
    const { label } = this.props
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
          for='avatar_button'>{label}
        </label>
      </div>
    )
  }
}

Avatar.defaultProps = {
  label: '',
  onClick: val => val
}

Avatar.propTypes = {
  /** Label will be used for displaying text on avatar */
  label: PropTypes.string,
  /** Function to be called after clicking avatar */
  onClick: PropTypes.func
}

export default Avatar
