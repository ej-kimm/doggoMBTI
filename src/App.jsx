import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Question from './pages/Question'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/question/:id', element: <Question /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
