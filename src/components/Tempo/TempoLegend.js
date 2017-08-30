/** @flow */
import React from 'react'
import styles from './Tempo.css'

/**
 * TempoLegend component hosts TempoLegendItems
 */
const TempoLegend = (props: Object) => {
  return (
    <ul className={styles.Tempo_goals}>
      {props.children}
    </ul>
  )
}

export default TempoLegend
