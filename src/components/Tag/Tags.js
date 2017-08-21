import React from 'react'
import styles from './Tags.css'

/**
 * Tags
 */
function Tags (props) {
  return (
    <ul className={styles.Tags}>
      {props.children}
    </ul>
  )
}

export default Tags
