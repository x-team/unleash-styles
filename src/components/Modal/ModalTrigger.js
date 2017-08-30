/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Trigger opening modal component ( for styleguide only )
 */
class ModalTrigger extends Component {
  state: {
    isShowing: boolean
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      isShowing: false
    }
  }

  renderModal () {
    return React.cloneElement(this.props.children, {
      isOpen: true
    })
  }

  handleClick () {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render () {
    return (
      <div>
        <span onClick={() => this.handleClick()}>{this.props.label}</span>
        {(this.state.isShowing) && this.renderModal()}
      </div>
    )
  }
}

ModalTrigger.propTypes = {
  /** Label on trigger */
  label: PropTypes.string.isRequired,
  /** Modal */
  children: PropTypes.node.isRequired
}

export default ModalTrigger
