import React from 'react'
import styles from './SocialIcons.css'

/**
 * SocialIcons
 */
function SocialIcons (props) {
  return (
    <ul className={styles.SocialIcons}>
      {props.children}
    </ul>
  )
}

export default SocialIcons
