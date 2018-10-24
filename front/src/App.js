import React from 'react'
import Router from './Router'
import Header from './modules/Header'


export default function App() {
  return (
    <div
      className="page-container"
    >
      <Header />

      <Router />
    </div>


  )
}

