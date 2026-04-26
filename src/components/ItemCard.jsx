import React from 'react'
import { getCategoryColor } from '../data/constants.js'
import styles from './ItemCard.module.css'

const FALLBACK_IMG = 'https://via.placeholder.com/400x200/1f1f1f/444?text=No+Image'

export default function ItemCard({ item, onClick, animationDelay = 0 }) {
  const color = getCategoryColor(item.category)
  const previewProps = item.itemprops.slice(0, 3)
  const extraCount = item.itemprops.length - 3

  return (
    <div
      className={styles.card}
      style={{ '--cat-color': color, animationDelay: `${animationDelay}s` }}
      onClick={() => onClick(item)}
    >
      <div className={styles.imgWrap}>
        <img
          className={styles.img}
          src={item.image}
          alt={item.itemname}
          onError={(e) => { e.target.src = FALLBACK_IMG }}
        />
      </div>
      <div className={styles.body}>
        <span className={styles.categoryTag}>{item.category}</span>
        <div className={styles.title}>{item.itemname}</div>
        <div className={styles.props}>
          {previewProps.map((p) => (
            <span key={p.label} className={styles.pill}>
              {p.label}: {p.value}
            </span>
          ))}
          {extraCount > 0 && (
            <span className={`${styles.pill} ${styles.pillAccent}`}>
              +{extraCount} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
