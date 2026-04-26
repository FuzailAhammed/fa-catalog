import React from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './components/HomePage.jsx'
import DetailView from './components/DetailView.jsx'
import { useCatalog } from './hooks/useCatalog.js'

export default function App() {
  const {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    selectedItem,
    setSelectedItem,
    groupedByCategory,
    categories,
  } = useCatalog()

  const handleItemClick = (item) => {
    setSelectedItem(item)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setSelectedItem(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar showBack={!!selectedItem} onBack={handleBack} />

      {selectedItem ? (
        <DetailView item={selectedItem} onBack={handleBack} />
      ) : (
        <HomePage
          categories={categories}
          activeFilter={activeFilter}
          searchQuery={searchQuery}
          groupedByCategory={groupedByCategory}
          onFilterChange={setActiveFilter}
          onSearchChange={setSearchQuery}
          onItemClick={handleItemClick}
        />
      )}
    </div>
  )
}
