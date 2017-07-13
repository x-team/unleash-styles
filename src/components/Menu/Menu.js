import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Menu.css'
import MenuButton from './MenuButton'

/**
 * Menu component can be used to build list menus. They are hidden by defaul
 * but with menu button click they show up
 */
class Menu extends Component {
  static defaultProps: Object

  state: {
    isShowing: boolean
  }

  constructor (props: Object) {
    super(props)

    this.state = {
      isShowing: false
    }
  }

  handleClick () {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render () {
    const { menuButton, isAlwaysOpened } = this.props
    const listClasses = classNames(
      styles.MenuList,
      (this.state.isShowing || isAlwaysOpened) && styles.MenuList_active
    )

    return (
      <nav className={styles.Menu}>
        <div onClick={() => this.handleClick()}>{menuButton}</div>
        <ul className={listClasses}>
          {this.props.children}
        </ul>
      </nav>
    )
  }
}

Menu.defaultProps = {
  menuButton: (<MenuButton />),
  isAlwaysOpened: false
}

Menu.propTypes = {
  /** Component that triggers opening and closing menu */
  menuButton: PropTypes.node,
  /** Set true if you would like menu to be opened always */
  isAlwaysOpened: PropTypes.bool
}

export default Menu
