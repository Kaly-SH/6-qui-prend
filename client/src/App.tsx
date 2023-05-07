import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'
import UserProvider from './contexts/User/UserProviders'


function App() {
  
  return (
    <div className="App">
      <UserProvider>
          <RouterProvider router={router} />
      </UserProvider>
    </div>
  )
}

export default App
