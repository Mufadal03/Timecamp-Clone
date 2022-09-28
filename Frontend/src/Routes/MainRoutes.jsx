import React from 'react'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<h1>Home</h1>} />
   </Routes>
  )
}

export default MainRoutes