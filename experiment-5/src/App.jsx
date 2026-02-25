import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProductList from './pages/ProductList'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', color: 'white' }}>
        <nav style={{ padding: '20px', borderBottom: '1px solid #333' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>Dashboard</Link>
            <Link to="/products" style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>Products</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App