import { useState, useMemo } from 'react'
import catalogData from '../data/data.json'
import { CATEGORY_ORDER } from '../data/constants.js'

export function useCatalog() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase()
    return catalogData.filter((item) => {
      const matchesCategory =
        activeFilter === 'All' || item.category === activeFilter
      const matchesSearch =
        !query ||
        item.itemname.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.itemprops.some(
          (p) =>
            p.label.toLowerCase().includes(query) ||
            p.value.toLowerCase().includes(query)
        )
      return matchesCategory && matchesSearch
    })
  }, [activeFilter, searchQuery])

  const groupedByCategory = useMemo(() => {
    const groups = {}
    filteredData.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    })
    const ordered = {}
    CATEGORY_ORDER.forEach((cat) => {
      if (groups[cat]) ordered[cat] = groups[cat]
    })
    return ordered
  }, [filteredData])

  const categories = useMemo(() => {
    const cats = new Set(catalogData.map((item) => item.category))
    return ['All', ...CATEGORY_ORDER.filter((c) => cats.has(c))]
  }, [])

  return {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    selectedItem,
    setSelectedItem,
    filteredData,
    groupedByCategory,
    categories,
  }
}
