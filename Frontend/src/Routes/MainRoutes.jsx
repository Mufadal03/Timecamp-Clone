import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Home/Homepage';
import Feature  from "../Pages/Features";
import Integration from "../Pages/integration";
import { Price } from '../Pages/Pricing/Price';

const MainRoutes = () => {
  return (
      <Routes>
         <Route path='/' element={<Homepage />} /> 
          <Route path='/features' element={<Feature />} />
           <Route path='/integration' element={<Integration />} />
           <Route path='/price' element={<Price/>} />
          
      </Routes>
)}
export default MainRoutes
