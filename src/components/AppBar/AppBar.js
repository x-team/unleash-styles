import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './AppBar.css'

/**
 * Universal bar that can be used as main header
 */
class AppBar extends Component {
  render () {
    const { appBarLogo, children } = this.props
    return (
      <header className={styles.AppBar}>
        {appBarLogo}
        {children}
      </header>
    )
  }
}

AppBar.propTypes = {
  /** Component can be passed as logo element */
  appBarLogo: PropTypes.object
}

export default AppBar
