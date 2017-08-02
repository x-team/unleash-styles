/** @flow */
import React from 'react'
import styles from './Logo.css'

const logoImg = require('../../assets/logo.png')

/**
 * Unleash logo component
 */
const Logo = () => (
  <div>
    <a href={'#'} className={styles.Logo}>
      <img src={logoImg} alt={'Unleash'} className={styles.LogoImg} />
      <span className={styles.LogoText}>Unleash</span>
    </a>
  </div>
)

export default Logo
