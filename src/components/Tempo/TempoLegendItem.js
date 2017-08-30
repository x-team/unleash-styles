/** @flow */
import React from 'react'
import styles from './Tempo.css'
import PropTypes from 'prop-types'

/**
 * TempoLegendItems show different data related to Tempo
 */
const TempoLegendItem = (props: Object) => {
  return (
    <li className={styles.Tempo_goal}>
      <span className={styles.Tempo_goal_label}>{props.label}</span>
      <span className={styles.Tempo_goal_amount}>{props.value}</span>
    </li>
  )
}

TempoLegendItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number
}

export default TempoLegendItem
