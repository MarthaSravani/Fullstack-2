import React, { Suspense } from 'react'
import HeavyChart from '../components/HeavyChart'

const Dashboard = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#eef2f7'
    }}>
      <div style={{
        width: '80%',
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ marginBottom: '20px' }}>
          Performance Dashboard
        </h1>

        <Suspense fallback={<div>Loading Chart...</div>}>
          <HeavyChart />
        </Suspense>
      </div>
    </div>
  )
}

export default Dashboard