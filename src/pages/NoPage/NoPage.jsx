import React from 'react'
import './NoPage.css'

const NoPage = () => {
  return (
    <div className="no-page">
      <div className="no-page-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Page Not Found</p>
        <a href="/" className="home-link">Go to Home</a>
      </div>
    </div>
  )
}

export default NoPage