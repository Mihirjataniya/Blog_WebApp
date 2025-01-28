import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { AppRoutes } from './utils/routes'

function App() {
  

  return (
      <div className='min-h-screen max-w-[1680px] mx-auto bg '>
        <RouterProvider router={AppRoutes} />
      </div>
  )
}

export default App
