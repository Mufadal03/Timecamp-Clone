import { Box } from '@chakra-ui/react'
import React from 'react'
import GetDemo from '../../Components/Homepage/GetDemo'
import Info from '../../Components/Homepage/Info'
import Integration from '../../Components/Homepage/Integration'
import Landing from '../../Components/Homepage/Landing'
import LandingFooter from '../../Components/Homepage/LandingFooter'
import Pricing from '../../Components/Homepage/Pricing'
import ProductTour from '../../Components/Homepage/ProductTour'
import Reviews from '../../Components/Homepage/Reviews'
import TempNav from '../temp/TempNav'


const Homepage = () => {
  return (
    <Box h="1000vh">
      {/* <TempNav /> */}
      <Landing />
      <LandingFooter />
      <GetDemo />
      <Info />
      <ProductTour />
      <Reviews />
      <Integration />
      <Pricing />
    </Box>
  )
}

export default Homepage