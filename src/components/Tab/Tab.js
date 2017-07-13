import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Tab.css'

/**
 * Tab element on tabs component
 */
class Tab extends Component {
  render () {
    const { label } = this.props
    return (
      <li className={styles.Tab}>
        <a href='index.html' className={styles.TabLink}>
          <span>{label}</span>
        </a>
      </li>
    )
  }
}

Tab.propTypes = {
  /** Text on tab */
  label: PropTypes.string
}

export default Tab
