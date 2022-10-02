import React from 'react'
import { Avatar, Box, Button, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react"
import {AiOutlineCheck} from "react-icons/ai"
const Landing = () => {
  return (
      <Flex bgImage={`url(https://cdn-m.timecamp.com/img/backgroundTop.webp)`} minH="100vh" bgPos={"50%"} bgSize="cover" bgRepeat={"no-repeat"}>
          <Flex w="95%" borderRadius={"md"} m="auto" justifyContent={"space-between"}>
              <Box ml="5rem" p="3rem" border={"3px solid white"} bgColor="hsla(0,0%,100%,.9)" backdropFilter={`blur(4px)`} w="40%" borderRadius={"lg"}>
                  <Flex direction={"column"} textAlign="left" gap="2rem">
                    <Text fontWeight={"semibold"}>Free time tracking software</Text>
            <Heading fontSize={"5xl"} fontWeight="semibold">Happy to see you again!<br />Book TimeCamp <br />set-up call</Heading>
            <Flex direction={"column"} gap="0.5rem">
              <Text display={"flex"} alignItems="center" fontWeight={"md"} gap="0.2rem" color="gray" ><Icon h={4} w={4} as={AiOutlineCheck } />Showing how TimeCamp works in 15 minutes</Text>
              <Text display={"flex"} alignItems="center" fontWeight={"md"}gap="0.2rem" color="gray" ><Icon h={4} w={4} as={AiOutlineCheck } />Best practices from 5000+ implementations</Text>
              <Text display={"flex"} alignItems="center" fontWeight={"md"}gap="0.2rem" color="gray" ><Icon h={4} w={4} as={AiOutlineCheck } />Help with dedicated setup</Text>
              
            </Flex>
            <Flex  mt='1rem' alignItems="center" justifyContent={"space-around"}>
              <Button size={"lg"} px="3rem" w="-webkit-fit-content" borderRadius={"full"} bgColor="#25cf60" _hover={{ bgColor: "#25cf60" }} _focus={{ bgColor: "#25cf60" }} color="white" fontSize={"md"}>Book Demo</Button>
              <Text as={"span"}>Or</Text>
              <Button size={"lg"} px="3rem" w="-webkit-fit-content" borderRadius={"full"} bgColor="#25cf60" _hover={{ bgColor: "#25cf60" }} _focus={{ bgColor: "#25cf60" }} color="white" fontSize={"md"}>Go to app</Button>
            </Flex>
          </Flex>
              </Box>
              <Box display={"flex"} gap="2rem" flexDirection="column-reverse"w="45%"> 
                  <Box p="2rem" pos={"relative"} borderRadius={"md"} bgColor="hsla(0,0%,100%,.9)" backdropFilter={`blur(4px)`}>
                <Flex direction={"column"} alignItems="center" gap="2rem">
                  <Avatar size={"lg"} pos="absolute" top="-30px" src="https://cdn-m.timecamp.com/img/person.jpg" />
              <Text fontWeight={"semibold"} mt="1rem">Adam Wagner, Co-owner and Chief Strategy Officer</Text>
              <Text textAlign={"center"} w="85%" fontWeight={"semibold"}  >"TimeCamp proved to be an essential management tool that gives us clear insight into a project’s efficiency and helps to avoid an overblown workload for our team."</Text>
              <Image w='108px' mt='3rem' src="https://cdn-m.timecamp.com/img/raindrop_logo.svg" />
                </Flex>
              </Box>
              </Box>
          </Flex>
    </Flex>
  )
}

export default Landing