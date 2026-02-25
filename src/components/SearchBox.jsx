import React, { useState, useEffect } from 'react'

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 500)

    return () => clearTimeout(timer)
  }, [query, onSearch])

  return (
    <div style={{ padding: '10px', marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', width: '300px', fontSize: '16px' }}
      />
      <p style={{ fontSize: '12px', color: 'gray' }}>
        (Search is debounced by 500ms)
      </p>
    </div>
  )
}

export default SearchBox