import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feature  from "../Pages/Features"
const MainRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/features' element={<Feature />} />
   </Routes>
  )
}

export default MainRoutes