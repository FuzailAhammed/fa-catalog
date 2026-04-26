import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ showBack, onBack }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>CATALOG</span>
      {showBack && (
        <button className={styles.backBtn} onClick={onBack}>
          ← Back to catalog
        </button>
      )}
    </nav>
  )
}
