import React from 'react'
import SearchBar from './SearchBar.jsx'
import FilterBar from './FilterBar.jsx'
import CategorySection from './CategorySection.jsx'
import styles from './HomePage.module.css'

export default function HomePage({
  categories,
  activeFilter,
  searchQuery,
  groupedByCategory,
  onFilterChange,
  onSearchChange,
  onItemClick,
}) {
  const hasResults = Object.keys(groupedByCategory).length > 0

  return (
    <div className={styles.homePage}>
      <SearchBar value={searchQuery} onChange={onSearchChange} />
      <FilterBar
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
      />
      {hasResults ? (
        Object.entries(groupedByCategory).map(([category, items]) => (
          <CategorySection
            key={category}
            category={category}
            items={items}
            onItemClick={onItemClick}
          />
        ))
      ) : (
        <p className={styles.emptyState}>No items match your search.</p>
      )}
    </div>
  )
}
