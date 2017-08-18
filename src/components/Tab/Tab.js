/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Tab.css'

/**
 * Tab element on tabs component
 */
class Tab extends Component {
  static defaultProps: Object

  render () {
    const { label, isCurrent, href, isShowing } = this.props
    const tabClasses = classNames(
      styles.Tab,
      (isShowing) && styles.is_showing
    )
    const tabLinkClasses = classNames(
      styles.TabLink,
      (isCurrent) && styles.TabLink_current
    )
    const tabLinkLabelClasses = classNames(
      (isCurrent) && styles.TabLinkLabel_current
    )
    return (
      <li className={tabClasses}>
        <a href={href} className={tabLinkClasses}>
          <span className={tabLinkLabelClasses}>{label}</span>
        </a>
      </li>
    )
  }
}

Tab.defaultProps = {
  label: 'Label',
  isCurrent: false,
  href: '#',
  isShowing: false
}

Tab.propTypes = {
  /** Text on tab */
  label: PropTypes.string,
  /** I currently activated */
  isCurrent: PropTypes.bool,
  /** href property */
  href: PropTypes.string,
  /** Show when hidden */
  isShowing: PropTypes.bool
}

export default Tab
