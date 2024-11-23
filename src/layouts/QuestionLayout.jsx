import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function QuestionLayout() {
  return (
    <div className="layout-container">
      <header className="navbar-container">
        <Navbar />
      </header>
      <main className="outlet-container">
        <Outlet />
      </main>
    </div>
  )
}
