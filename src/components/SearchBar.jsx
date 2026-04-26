import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchWrap}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search items, categories, specs…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
