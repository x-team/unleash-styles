import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './TextArea.css'

/**
 * TextArea
 */
class TextArea extends Component {
  render () {
		return (
			<textarea className={styles.TextArea} {...this.props} />
		)
  }
}

TextArea.propTypes = {
}

export default TextArea
