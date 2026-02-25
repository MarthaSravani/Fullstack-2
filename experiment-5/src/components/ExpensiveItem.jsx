import React from 'react'

const ExpensiveItem = ({ data, style }) => {
  return (
    <div style={{
      ...style,
      borderBottom: '1px solid #eee',
      padding: '10px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <strong style={{ width: '200px' }}>{data.name}</strong>
      <span style={{ width: '100px' }}>${data.price}</span>
      <span>{data.category}</span>
    </div>
  )
}

export default React.memo(ExpensiveItem)