import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/Details'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/product/:id',
      element: <Details />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
