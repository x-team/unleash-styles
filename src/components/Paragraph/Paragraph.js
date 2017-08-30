import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paragraph.css'

/**
 * Paragraph
 */
function Paragraph (props) {
  return <p className={styles.Paragraph}>{props.text}</p>
}

Paragraph.propTypes = {
  /** text to display */
  text: PropTypes.string.isRequired
}

export default Paragraph
