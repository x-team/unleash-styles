/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.css'

/**
 * Avatar component which can be used in relation to user profile
 */
class Avatar extends Component {
  render () {
    return (
      <div className={styles.Avatar}>
        <img src={this.props.imgSrc} alt='' className={styles.Avatar_img} />
      </div>
    )
  }
}

Avatar.propTypes = {
  /** Image source path for Avatar */
  imgSrc: PropTypes.string.isRequired
}

export default Avatar
