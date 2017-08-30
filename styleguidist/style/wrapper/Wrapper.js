import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import styles from '../../../src/components/App/App.css'

const style = {
  position: 'relative',
  width: '100%',
  minHeight: '100px'
}

export default class Wrapper extends Component {
  render() {
    return (
      <div style={style} className={styles}>
        <IntlProvider locale="en">
          {this.props.children}
        </IntlProvider>
      </div>
    )
  }
}
