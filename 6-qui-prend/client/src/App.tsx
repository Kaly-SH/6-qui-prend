import React from 'react'
import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
