/** @flow */
import React, { Component } from 'react'
import { LineChart, Line } from 'recharts'
import PropTypes from 'prop-types'

class Graph extends Component {
  render () {
    return (
      <LineChart width={180} height={80} data={this.props.data}>
        <defs>
          <linearGradient id='gradient' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='0%' stopColor='#43a047' />
            <stop offset='100%' stopColor='#fff59d' />
          </linearGradient>
        </defs>
        <Line finalll='none' stroke='url(#gradient)' type='monotone' dot={false} dataKey='tempo' strokeWidth={3} />
      </LineChart>
    )
  }
}

Graph.propTypes = {
  /** array of data points: Example [{tempo: 1}, {tempo: 2}] */
  data: PropTypes.array.isRequired
}

export default Graph
