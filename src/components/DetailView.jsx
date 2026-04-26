import React from 'react'
import { getCategoryColor, CATEGORY_ICONS } from '../data/constants.js'
import styles from './DetailView.module.css'

const FALLBACK_IMG = 'https://via.placeholder.com/900x420/1f1f1f/444?text=No+Image'

export default function DetailView({ item, onBack }) {
  const color = getCategoryColor(item.category)
  const icon = CATEGORY_ICONS[item.category] || ''

  return (
    <div className={styles.detailView} style={{ '--cat-color': color }}>
      <div className={styles.hero}>
        <img
          className={styles.heroImg}
          src={item.image}
          alt={item.itemname}
          onError={(e) => { e.target.src = FALLBACK_IMG }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroLabel}>
          <div className={styles.catTag}>{icon} {item.category}</div>
          <h1 className={styles.itemTitle}>{item.itemname}</h1>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.specsHeading}>Specifications</p>
        <div className={styles.propsGrid}>
          {item.itemprops.map((prop) => (
            <div key={prop.label} className={styles.propCard}>
              <div className={styles.propLabel}>{prop.label}</div>
              <div className={styles.propValue}>{prop.value}</div>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} style={{ background: color }}>
            Enquire Now
          </button>
          <button className={styles.btnOutline} onClick={onBack}>
            Back to Catalog
          </button>
        </div>
      </div>
    </div>
  )
}
