/** @flow */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.css'

/**
 * Header
 */
function Header (props: Object) {
  return <h2 className={styles.Header}>{props.text}</h2>
}

Header.propTypes = {
  /** text to display */
  text: PropTypes.string.isRequired
}

export default Header
