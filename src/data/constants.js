export const CATEGORY_COLORS = {
  Cars: '#e8c84a',
  Bikes: '#e05c3a',
  Phones: '#5b9cf6',
  Computers: '#6dd8a0',
}

export const CATEGORY_ICONS = {
  Cars: '🚗',
  Bikes: '🏍',
  Phones: '📱',
  Computers: '💻',
}

export const CATEGORY_ORDER = ['Cars', 'Bikes', 'Phones', 'Computers']

export const getCategoryColor = (category) =>
  CATEGORY_COLORS[category] || '#aaaaaa'
