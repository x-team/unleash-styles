import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './GoalCard.css'

/**
 * GoalCard
 */
class GoalCard extends Component {
  render () {
    const { title, onClick } = this.props
    const goalItemsCount = this.props.children.length
    const goalItemsCompletedCount = this.props.children.filter((item) => (item.props.isComplete)).length

    return (
      <li className={styles.GoalCard}>
        <div className={styles.GoalCardIntro}>
          <h3 className={styles.GoalCardTitle}>{title}</h3>
          <p className={styles.GoalCardDescription} />
          <div className={styles.GoalCardProgress}>
            <div className={styles.GoalCardSteps}>
              <span className={styles.GoalCardStepsLabel}>Steps:</span>
              <span>{goalItemsCompletedCount}</span>
              <span className={styles.GoalCardStepsBar}>/</span>
              <span>{goalItemsCount}</span>
            </div>
            <progress className={styles.GoalCardProgressBar} max={goalItemsCount} value={goalItemsCompletedCount} />
            <button className={styles.GoalCardSwitchView} />
          </div>
        </div>
        <div className={styles.GoalCardInfo}>
          <ul className={styles.GoalCardChecklist}>
            {this.props.children}
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
