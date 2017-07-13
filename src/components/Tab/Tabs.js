import React, { Component } from 'react'
import styles from './Tabs.css'

/**
 * Tabs component that hosts tab components
 */
class Tabs extends Component {
  render () {
    return (
      <nav className={styles.Tabs}>
        <ul className={styles.TabsList}>
          {this.props.children}
        </ul>
      </nav>
    )
  }
}

export default Tabs
