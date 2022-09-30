import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Home/Homepage'
import Feature  from "../Pages/Features"
const MainRoutes = () => {
  return (
      <Routes>
         <Route path='/' element={<Homepage />} /> 
          <Route path='/features' element={<Feature />} />

      <Routes>
)}
export default MainRoutes
