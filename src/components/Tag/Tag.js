import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tag.css'

/**
 * Tag element on tags component
 */
function Tag (props) {
  return (
    <li className={styles.Tag}>
      <a href={props.href} className={styles.TagLink}>{props.text}</a>
    </li>
  )
}

Tag.propTypes = {
  /** link of the tag */
  href: PropTypes.string.isRequired,
  /** text of the tag */
  text: PropTypes.string.isRequired
}

export default Tag
