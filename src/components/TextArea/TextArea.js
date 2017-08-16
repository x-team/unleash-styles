import React from 'react'
import styles from './TextArea.css'

/**
 * TextArea
 */
function TextArea (props) {
  return <textarea className={styles.TextArea} {...props} />
}

export default TextArea
