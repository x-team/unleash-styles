/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MenuItem.css'

const typeStyle = {
  link: styles.MenuItemLink,
  important: styles.MenuItemName,
  email: styles.MenuItemEmail
}

class MenuItem extends Component {
  renderLink (label: string, href: string) {
    return (
      <a href={href} className={styles.MenuItemLink}>{label}</a>
    )
  }

  render () {
    const { label, type, href } = this.props
    return (
      <li className={`${styles.MenuItem} ${typeStyle[type]}`}>
        {href ? this.renderLink(label, href) : label}
      </li>
    )
  }
}

MenuItem.propTypes = {
  /** Href property */
  href: PropTypes.string,
  /** Text on menu item */
  label: PropTypes.string.isRequired,
  /** Type of menu item: link, important, email */
  type: PropTypes.string.isRequired
}

export default MenuItem
