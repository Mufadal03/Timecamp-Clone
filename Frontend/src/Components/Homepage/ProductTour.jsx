import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductTour = () => {
  return (
    <Flex p="2rem" bgColor={"#000"} direction={"row-reverse"} mt="4rem">
          <Flex w="85%">
              <Flex w="50%" direction="column" justifyContent={"center"} color="white" textAlign={"left"} gap="2rem">
                  <Heading fontSize={"5xl"} fontWeight="semibold">Want a product tour?<br /> Here you can book a <br />call demo with our<br /> expert.</Heading>
                  <Flex direction={"column"} gap="2rem">
                      <Text fontSize={"xl"} >Learn all of the time tracking basics of TimeCamp and track<br /> time like a true pro.</Text>
                      <Button size={"lg"}w="200px" borderRadius={"full"} bgColor="#f7b801" _hover={{bgColor:"#f7b801"}} _focus={{bgColor:"#f7b801"}} color="white" fontSize={"md"}>Book a Demo</Button>
                  </Flex>
              </Flex>
              <Flex justifyContent="flex-end" alignItems={"flex-end"} w="50%">
                   <Image  mb="-3rem" h="400px" src="https://cdn-m.timecamp.com/img/greenbranding/features/black_cta_img-platform.png" />
             </Flex>
          </Flex>
    </Flex>
  )
}

export default ProductTour