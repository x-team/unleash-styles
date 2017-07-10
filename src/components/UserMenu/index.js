import React from 'react'
import styles from './UserMenu.css'

/**
 * Unleash User Menu component
 */
 var UserMenu = React.createClass({
    getInitialState: function() {
        return { isChecked: false };
    },

    handleCheckboxChange: function(event) {
        console.log("checkbox changed!", event);
        this.setState({isChecked: event.target.checked});
    },

    toggleIsChecked: function() {
        console.log("toggling isChecked value!");
        this.setState({isChecked: !this.state.isChecked});
    },

    handleButtonClick: function(event) {
        console.log("button was pressed!", event);
        this.toggleIsChecked();
    },

    render: function() {
      return (
        <div>
					<nav className={styles.UserMenu}>
						<input type="checkbox" className={styles.UserMenuBtn} onChange={this.handleCheckboxChange} checked={this.state.isChecked} id="UserMenuBtn"></input>
						<label className={styles.UserMenuLabel} onClick={this.handleButtonClick} for="UserMenuBtn">NO</label>
						<ul className={styles.UserMenuList}>
							<li className={styles.UserMenuItem, styles.UserMenuItemName}>Nikita</li>
							<li className={styles.UserMenuItem, styles.UserMenuItemEmail}>nikita.ormonov@eleken.co</li>
							<li className={styles.UserMenuItem, styles.UserMenuItemEdit}><a href={'#'} className={styles.UserMenuItemLink}>Edit Profile</a></li>
							<li className={styles.UserMenuItem, styles.UserMenuItemSignOut}><a href={'#'} className={styles.UserMenuItemLink}>Sign Out</a></li>
						</ul>
					</nav>
			  </div>
      );
    }
});

module.exports = UserMenu;
