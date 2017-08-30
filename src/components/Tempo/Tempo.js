/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Tempo.css'

/**
 * Tempo component to host Unleash Tempo graph
 */
class Tempo extends Component {
  static defaultProps: Object

  render () {
    const {title, children} = this.props
    return (
      <div className={styles.Tempo}>

        <h4 className={styles.Tempo_title}>{title}</h4>
        {children}
      </div>
    )
  }
}

Tempo.defaultProps = {
  paths: 0,
  stepsOpened: 0,
  stepsClosed: 0
}

Tempo.propTypes = {
  /** Component title */
  title: PropTypes.string.isRequired
}

export default Tempo
