import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.css'

 /**
  * Link
  */
function Link (props) {
  return (
    <div className={styles.LinkContainer}>
      <a href={props.href} className={styles.Link}>{props.text}</a>
    </div>
  )
}

Link.propTypes = {
  /** href of the link */
  href: PropTypes.string.isRequired,
  /** text of the link */
  text: PropTypes.string.isRequired
}

export default Link
