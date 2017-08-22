/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Modal.css'

/**
 * Modal component
 */
class Modal extends Component {
  state: {
    isShowing: boolean
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      isShowing: props.isOpen
    }
  }

  hideModal () {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render () {
    const modalClasses = classNames(
      styles.Modal,
      (!this.state.isShowing) && styles.isHidden
    )
    const overlayClasses = classNames(
      styles.Modal_overlay,
      (!this.state.isShowing) && styles.isHidden
    )

    return (
      <div>
        <div className={overlayClasses} onClick={() => this.hideModal()} />
        <div className={modalClasses}>
          <div className={styles.Modal_content}>
            <p className={styles.Modal_title}>{this.props.header}</p>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  /** Title of modal */
  header: PropTypes.string,
  /** Set true to show modal */
  isOpen: PropTypes.bool,
  /** Components showing in modal */
  children: PropTypes.node.isRequired
}

export default Modal
