/** @flow */
import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './Tabs.css'
import tabStyles from './Tab.css'

/**
 * Tabs component that hosts tab components
 */
class Tabs extends Component {
  handleClick: Function

  state: {
    isShowing: boolean
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      isShowing: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  renderTabs () {
    const tabs = this.props.children.map((child, index) => {
      return React.cloneElement(child, {
        isShowing: this.state.isShowing,
        key: index
      })
    })

    return tabs
  }

  handleClick (e: Object) {
    e.preventDefault()
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  renderNavButton () {
    const currentTab = this.props.children.find((tab) => {
      return tab.props.isCurrent
    })
    const classes = classNames(
      tabStyles.TabLinkNavButton,
      tabStyles.TabLinkNavButton_current
    )
    return (
      <li className={tabStyles.TabNavButton}>
        <a href='#' className={classes} onClick={this.handleClick}>
          <span className={tabStyles.TabLinkLabelNavButton_currentw}>{currentTab.props.label}</span>
        </a>
      </li>
    )
  }

  render () {
    return (
      <div>
        <nav className={styles.Tabs}>
          {this.renderNavButton()}
          <ul className={styles.TabsList}>
            {this.renderTabs()}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Tabs
