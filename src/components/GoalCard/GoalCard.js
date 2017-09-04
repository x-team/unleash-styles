/** @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './GoalCard.css'
import GoalCardItem from './GoalCardItem'

/**
 * GoalCard
 */
class GoalCard extends Component {
  handleGoalCardItemToggleClick: Function

  state: {
    isOpen: boolean,
    goalItemsCount: number,
    goalItemsCompletedCount: number
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      isOpen: false,
      goalItemsCount: props.children.length,
      goalItemsCompletedCount: props.children.filter((item) => (item.props.isComplete)).length
    }
    this.handleGoalCardItemToggleClick = this.handleGoalCardItemToggleClick.bind(this)
  }

  handleGoalCardItemToggleClick (completed: boolean) {
    const countDiff = completed ? 1 : -1
    this.setState({
      goalItemsCompletedCount: this.state.goalItemsCompletedCount + countDiff
    })
  }

  handleSwitchViewClick () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    const { title, onClick } = this.props
    const switchViewClasses = classNames(
      styles.GoalCardSwitchView,
      this.state.isOpen && styles.GoalCardSwitchViewIsOpen
    )
    const goalCardClasses = classNames(
      styles.GoalCard,
      this.state.isOpen && styles.GoalCardIsOpen
    )

    return (
      <li className={goalCardClasses}>
        <div className={styles.GoalCardIntro}>
          <h3 className={styles.GoalCardTitle}>{title}</h3>
          <p className={styles.GoalCardDescription} />
          <div className={styles.GoalCardProgress}>
            <div className={styles.GoalCardSteps}>
              <span className={styles.GoalCardStepsLabel}>Steps:</span>
              <span>{this.state.goalItemsCompletedCount}</span>
              <span className={styles.GoalCardStepsBar}>/</span>
              <span>{this.state.goalItemsCount}</span>
            </div>
            <progress className={styles.GoalCardProgressBar} max={this.state.goalItemsCount} value={this.state.goalItemsCompletedCount} />
            <button onClick={() => this.handleSwitchViewClick()} className={switchViewClasses} />
          </div>
        </div>
        <div className={styles.GoalCardInfo}>
          <ul className={styles.GoalCardChecklist}>
            {this.props.children.map((goalCard, index) => (
              <GoalCardItem key={index} onClick={this.handleGoalCardItemToggleClick} {...goalCard.props} />
            ))}
            <li className={styles.GoalCardAddNew}>
              <button className={styles.GoalCardAddNewButton} onClick={onClick}>
                <span className={styles.GoalCardAddNewButtonIcon}>+</span> add a new step
              </button>
            </li>
          </ul>
        </div>
      </li>
    )
  }
}

GoalCard.propTypes = {
  /** Title of the GoalCard */
  title: PropTypes.string.isRequired,
  /** Function to be triggered when adding a new item */
  onClick: PropTypes.func.isRequired
}

export default GoalCard
