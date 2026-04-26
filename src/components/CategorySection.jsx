import React from 'react'
import { getCategoryColor } from '../data/constants.js'
import ItemCard from './ItemCard.jsx'
import styles from './CategorySection.module.css'

export default function CategorySection({ category, items, onItemClick }) {
  const color = getCategoryColor(category)

  return (
    <section className={styles.section}>
      <div className={styles.sectionHead} style={{ '--cat-color': color }}>
        <h2 className={styles.sectionTitle}>{category}</h2>
        <span className={styles.sectionCount}>
          {items.length} item{items.length !== 1 ? 's' : ''}
        </span>
      </div>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <ItemCard
            key={item.itemname}
            item={item}
            onClick={onItemClick}
            animationDelay={index * 0.04}
          />
        ))}
      </div>
    </section>
  )
}
