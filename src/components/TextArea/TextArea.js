import React, { Component } from 'react'
import styles from './TextArea.css'

/**
 * TextArea
 */
class TextArea extends Component {
  render () {
    return (
      <textarea className={styles.TextArea} {...this.props} />
    )
  }
}

export default TextArea
