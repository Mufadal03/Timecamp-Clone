import { Box } from '@chakra-ui/react'
import React from 'react'
import FAQ from '../../Components/Homepage/FAQ'
import GetDemo from '../../Components/Homepage/GetDemo'
import Info from '../../Components/Homepage/Info'
import Integration from '../../Components/Homepage/Integration'
import Landing from '../../Components/Homepage/Landing'
import LandingFooter from '../../Components/Homepage/LandingFooter'
import Pricing from '../../Components/Homepage/Pricing'
import ProductTour from '../../Components/Homepage/ProductTour'
import Reviews from '../../Components/Homepage/Reviews'
import WithSubnavigation from '../../Components/Mainnav'
import TempNav from '../temp/TempNav'


const Homepage = () => {
  return (
    <Box h="1400vh">
      {/* <TempNav /> */}
      <WithSubnavigation />
      <Landing />
      <LandingFooter />
      <GetDemo />
      <Info />
      <ProductTour />
      <Reviews />
      <Integration />
      <Pricing />
      <FAQ/>
    </Box>
  )
}

export default Homepage