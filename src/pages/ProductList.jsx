import React, { useState, useMemo, useCallback } from 'react'
import { Virtuoso } from 'react-virtuoso'
import SearchBox from '../components/SearchBox'
import ExpensiveItem from '../components/ExpensiveItem'
import { generateProducts } from '../utils'

const allProducts = generateProducts(2000)

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = useCallback((query) => {
    setSearchTerm(query)
  }, [])

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Virtualized Product List ({filteredProducts.length} items)</h2>
      <SearchBox onSearch={handleSearch} />

      <div style={{ height: '600px', border: '1px solid #ccc' }}>
        <Virtuoso
          style={{ height: '100%' }}
          totalCount={filteredProducts.length}
          itemContent={(index) => (
            <ExpensiveItem
              data={filteredProducts[index]}
              style={{ height: '50px' }}
            />
          )}
        />
      </div>
    </div>
  )
}

export default ProductList