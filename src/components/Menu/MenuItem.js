import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MenuItem.css'

const TYPE_LINK = 'link'

const typeStyle = {
  link: styles.MenuItemLink,
  important: styles.MenuItemName,
  email: styles.MenuItemEmail
}

class MenuItem extends Component {
  renderLink (label: string) {
    return (
      <a href='#' className={styles.MenuItemLink}>{label}</a>
    )
  }

  render () {
    const { label, type } = this.props
    return (
      <li className={`${styles.MenuItem} ${typeStyle[type]}`}>
        {type === TYPE_LINK ? this.renderLink(label) : label}
      </li>
    )
  }
}

MenuItem.propTypes = {
  /** Text on menu item */
  label: PropTypes.string.isRequired,
  /** Type of menu item: link, important, email */
  type: PropTypes.string.isRequired
}

export default MenuItem
