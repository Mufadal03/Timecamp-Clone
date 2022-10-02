import React from 'react'
import Footer from '../Integration/Footer'
import WithSubnavigation from '../Mainnav'

const Layout = ({children}) => {
  return (
      <>
          <WithSubnavigation />
            {children}
         <Footer />
      </>
  )
}

export default Layout