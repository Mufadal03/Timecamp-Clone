import React from 'react'
import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react"
const Pricing = () => {
  return (
    <Box mt="4rem" border="2px solid red"  alignItems={"center"}>
      <Flex direction={"column"} gap="1rem">
        <Text fontWeight={"semibold"} color="#25cf60">PRICING</Text>
      <Heading fontWeight={"semibold"}>Your time costs more</Heading>
        <Text fontSize={"lg"}>Use free forever plan or subscribe to a paid plan to get more features!</Text>
        <Flex justifyContent={"center"}>
          <Button size={"lg"} zIndex="1" w="-webkit-fit-content" borderRadius={"full"} bgColor="#25cf60" _hover={{ bgColor: "#25cf60" }} _focus={{ bgColor: "#25cf60" }} color="white" fontSize={"md"}>Anually 10% discount</Button>
          <Button  ml="-1rem" size={"lg"} w="-webkit-fit-content" borderRadius={"full"} bgColor="#F8F8F8"  _hover={{ bgColor: "#F8F8F8" }} color="ghost" fontSize={"md"}>Monthly</Button>
        </Flex>
      </Flex>
      <Box w='80%' m="auto" border={"2px solid blue"} h="80vh">
      </Box>
    </Box>
  )
}

export default Pricing