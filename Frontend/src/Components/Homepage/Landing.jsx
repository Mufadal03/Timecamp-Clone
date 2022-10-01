import React from 'react'
import {Box, Flex} from "@chakra-ui/react"
const Landing = () => {
  return (
      <Flex bgImage={`url(https://cdn-m.timecamp.com/img/backgroundTop.webp)`} minH="100vh" bgPos={"50%"} bgSize="cover" bgRepeat={"no-repeat"}>
          <Flex w="95%" borderRadius={"md"} m="auto" justifyContent={"space-between"}>
              <Box ml="5rem" border={"3px solid white"} bgColor="hsla(0,0%,100%,.9)" backdropFilter={`blur(4px)`} w="40%" h="700px">
                  
              </Box>
              <Box display={"flex"}  flexDirection="column-reverse"w="45%"> 
                  <Box border={"3px solid white"}  borderRadius={"md"} bgColor="hsla(0,0%,100%,.9)" backdropFilter={`blur(4px)`}  h="400px">
                  
              </Box>
              </Box>
          </Flex>
    </Flex>
  )
}

export default Landing