import {Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Demo from "../../utils/images/Demo.png"
const GetDemo = () => {
  return (
      <Flex justifyContent={"center"} alignItems="center" h="87vh" bgColor={"#fff"}>
          <Flex  h="450px" w="75%" >
              <Flex w="50%"borderTopLeftRadius={"lg"} borderBottomLeftRadius={"lg"} p="2rem" bgColor={"#1B1B20"} textAlign="left" direction={"column"} justifyContent="center" gap="4rem">
                  <Heading fontSize={"5xl"} fontWeight="600" color={"white"} >Stay on top of your teams’ productivity and profitability!</Heading>
                  <Button size={"lg"}w="200px" borderRadius={"full"} bgColor="#f7b801" _hover={{bgColor:"#f7b801"}} _focus={{bgColor:"#f7b801"}} color="white" fontSize={"md"}>Book a Demo</Button>
              </Flex>
              <Image src={Demo} w="50%" borderTopRightRadius={"lg"} borderBottomRightRadius={"lg"}/>
          </Flex>
    </Flex>
  )
}

export default GetDemo