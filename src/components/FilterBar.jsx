import React from 'react'
import { getCategoryColor, CATEGORY_ICONS } from '../data/constants.js'
import styles from './FilterBar.module.css'

export default function FilterBar({ categories, activeFilter, onFilterChange }) {
  return (
    <div className={styles.filterBar}>
      {categories.map((cat) => {
        const color = cat === 'All' ? '#aaa' : getCategoryColor(cat)
        const isActive = activeFilter === cat
        return (
          <button
            key={cat}
            className={`${styles.filterBtn} ${isActive ? styles.active : ''}`}
            style={{ '--cat-color': color }}
            onClick={() => onFilterChange(cat)}
          >
            {cat === 'All' ? 'All items' : `${CATEGORY_ICONS[cat] || ''} ${cat}`}
          </button>
        )
      })}
    </div>
  )
}
