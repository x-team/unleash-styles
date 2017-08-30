/** @flow */
import React, { Component } from 'react'
import styles from './Timeline.css'

/**
 * Timeline component creates visible timeline for it's children
 */
class Timeline extends Component {
  render () {
    return (
      <section className={styles.Timeline}>

        <header className={styles.Timeline_header}>
          <div className={styles.Timeline_search}>
            <input className={styles.Timeline_search_input} type='search' placeholder='Search' />
          </div>
        </header>

        <div className={styles.Timeline_date_label}>
          Today
        </div>

        <ol className={styles.Timeline_items}>
          {this.props.children}
        </ol>
      </section>
    )
  }
}

export default Timeline
