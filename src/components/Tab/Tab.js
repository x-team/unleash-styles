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
  handleClick: Function

  constructor (props: Object) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e: Object, onClick: Function) {
    e.preventDefault()
    onClick()
  }

  render () {
    const { label, isCurrent, isShowing, onClick } = this.props
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
        <a href={'#'} onClick={(e) => this.handleClick(e, onClick)} className={tabLinkClasses}>
          <span className={tabLinkLabelClasses}>{label}</span>
        </a>
      </li>
    )
  }
}

Tab.defaultProps = {
  label: 'Label',
  isCurrent: false,
  isShowing: false,
  onClick: val => val
}

Tab.propTypes = {
  /** Text on tab */
  label: PropTypes.string,
  /** I currently activated */
  isCurrent: PropTypes.bool,
  /** Show when hidden */
  isShowing: PropTypes.bool,
  /** onClick handler */
  onCLick: PropTypes.func
}

export default Tab
