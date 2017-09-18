import React from 'react'
import PropTypes from 'prop-types'
import styles from './SocialIcon.css'

/**
 * SocialIcon
 */
function SocialIcon (props) {
  switch (props.type) {
    case 'facebook':
      return (
        <li className={styles.Icon}>
          <a href={props.href} className={styles.IconLink}>
            <svg xmlns='http://www.w3.org/2000/svg' width='9' height='18' viewBox='0 0 9 18'>
              <path className={styles.IconLinkPath} id='facebook' d='M698,174h-3v-9h-3.009L692,162h3v-2c0-2.535.769-4.015,3.618-4.015h2.37L701,159h-2c-1.109,0-1,.19-1,1v2h3l-0.307,3H698v9Z' transform='translate(-692 -156)' />
            </svg>
          </a>
        </li>
      )
    case 'instagram':
      return (
        <li className={styles.Icon}>
          <a href={props.href} className={styles.IconLink}>
            <svg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21'>
              <path className={styles.IconLinkPath} id='instagram' d='M766,154h9a6,6,0,0,1,6,6v9a6,6,0,0,1-6,6h-9a6,6,0,0,1-6-6v-9A6,6,0,0,1,766,154Zm0,2h9a4,4,0,0,1,4,4v9a4,4,0,0,1-4,4h-9a4,4,0,0,1-4-4v-9A4,4,0,0,1,766,156Zm4.5,3a5.5,5.5,0,1,1-5.5,5.5A5.7,5.7,0,0,1,770.5,159Zm0.081,2A3.423,3.423,0,0,1,774,164.419a3.67,3.67,0,0,1-3.566,3.566,3.422,3.422,0,0,1-3.421-3.423A3.67,3.67,0,0,1,770.581,161ZM776,158a1,1,0,1,1-1,1A1,1,0,0,1,776,158Z' transform='translate(-760 -154)' />
            </svg>
          </a>
        </li>
      )
    case 'linkedin':
      return (
        <li className={styles.Icon}>
          <a href={props.href} className={styles.IconLink}>
            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15'>
              <path className={styles.IconLinkPath} id='linkedin' d='M844.4,172.012V161.889h-3.213v10.123H844.4Zm-1.606-11.5a1.787,1.787,0,1,0-.024,0H842.8Zm3.387,11.5H849.4v-5.653a2.37,2.37,0,0,1,.106-0.82,1.768,1.768,0,0,1,1.649-1.232c1.164,0,1.631.928,1.631,2.289v5.416H856v-5.8c0-3.11-1.587-4.556-3.7-4.556a3.187,3.187,0,0,0-2.921,1.7H849.4v-1.467h-3.217c0.043,0.95,0,10.123,0,10.123h0Z' transform='translate(-841 -157)' />
            </svg>
          </a>
        </li>
      )
    case 'pinterest':
      return (
        <li className={styles.Icon}>
          <a href={props.href} className={styles.IconLink}>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
              <path className={styles.IconLinkPath} id='pinterest' d='M811,155a10,10,0,0,0-4.012,19.158,8.886,8.886,0,0,1,.173-2.3c0.2-.811,1.286-5.448,1.286-5.448a3.849,3.849,0,0,1-.319-1.582c0-1.483.859-2.589,1.927-2.589a1.339,1.339,0,0,1,1.349,1.5,21.426,21.426,0,0,1-.883,3.548,1.548,1.548,0,0,0,1.578,1.926c1.894,0,3.17-2.434,3.17-5.316,0-2.191-1.476-3.832-4.159-3.832a4.734,4.734,0,0,0-4.921,4.789,2.889,2.889,0,0,0,.659,1.961,0.484,0.484,0,0,1,.144.557c-0.048.184-.159,0.627-0.2,0.8a0.344,0.344,0,0,1-.5.251c-1.4-.57-2.047-2.1-2.047-3.82,0-2.841,2.395-6.246,7.142-6.246,3.817,0,6.329,2.761,6.329,5.727,0,3.923-2.181,6.853-5.394,6.853a2.867,2.867,0,0,1-2.441-1.246s-0.581,2.3-.7,2.748a8.394,8.394,0,0,1-1,2.143A10,10,0,1,0,811,155Z' transform='translate(-801 -155)' />
            </svg>
          </a>
        </li>
      )
    case 'twitter':
      return (
        <li className={styles.Icon}>
          <a href={props.href} className={styles.IconLink}>
            <svg xmlns='http://www.w3.org/2000/svg' width='19' height='16' viewBox='0 0 19 16'>
              <path className={styles.IconLinkPath} id='twitter' d='M740.013,158.893a7.583,7.583,0,0,1-2.24.637,4.034,4.034,0,0,0,1.715-2.236,7.644,7.644,0,0,1-2.477.981A3.836,3.836,0,0,0,734.163,157a3.973,3.973,0,0,0-3.9,4.04,4.233,4.233,0,0,0,.1.921,10.963,10.963,0,0,1-8.042-4.221,4.134,4.134,0,0,0-.526,2.031,4.077,4.077,0,0,0,1.734,3.362,3.775,3.775,0,0,1-1.766-.506v0.052a4.009,4.009,0,0,0,3.129,3.961,3.8,3.8,0,0,1-1.028.142,3.681,3.681,0,0,1-.733-0.074,3.921,3.921,0,0,0,3.644,2.806,7.66,7.66,0,0,1-4.846,1.729,7.516,7.516,0,0,1-.93-0.056A10.765,10.765,0,0,0,726.979,173c7.174,0,11.1-6.155,11.1-11.494q0-.263-0.012-0.522A8.057,8.057,0,0,0,740.013,158.893Z' transform='translate(-721 -157)' />
            </svg>
          </a>
        </li>
      )
  }
}

SocialIcon.propTypes = {
  /** link to facebook profile */
  href: PropTypes.string.isRequired,
  /** facebook|instagram|linkedin|pinterest|twitter */
  type: PropTypes.string.isRequired
}

export default SocialIcon
