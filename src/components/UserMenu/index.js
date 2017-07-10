import React from 'react'
import styles from './UserMenu.css'

/**
 * Unleash User Menu component
 */
const UserMenu = () => (
  <div>
		<nav className={styles.UserMenu}>
			<input type="checkbox" className={styles.UserMenuBtn} id="UserMenuBtn"></input>
			<label className={styles.UserMenuLabel} for="UserMenuBtn">NO</label>
			<ul className={styles.UserMenuList}>
				<li className={styles.UserMenuItem, styles.UserMenuItemName}>Nikita</li>
				<li className={styles.UserMenuItem, styles.UserMenuItemEmail}>nikita.ormonov@eleken.co</li>
				<li className={styles.UserMenuItem, styles.UserMenuItemEdit}><a href={'#'} className={styles.UserMenuItemLink}>Edit Profile</a></li>
				<li className={styles.UserMenuItem, styles.UserMenuItemSignOut}><a href={'#'} className={styles.UserMenuItemLink}>Sign Out</a></li>
			</ul>
		</nav>
  </div>
)

export default UserMenu
