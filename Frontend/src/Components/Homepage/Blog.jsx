import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Blogs } from '../../utils/Blogs'

const Blog = () => {
  return (
      <Box p='2rem' my='4rem' bgColor={"#F3F3F3"}>
          <Box w='80%' m="auto" textAlign={"start"}>
              <Text fontWeight={"semibold"} color="#25cf60">BLOG</Text>
              <Flex  justifyContent="space-between" alignItems={"center"}>
                  <Heading>Check the latest blog updates</Heading>
                  <Button  size={"lg"} w="-webkit-fit-content" borderRadius={"full"} bgColor="#25cf60" _hover={{ bgColor: "#25cf60" }} _focus={{ bgColor: "#25cf60" }} color="white" fontSize={"md"}>Check all articles</Button>
              </Flex>
              <Grid gridTemplateColumns={"repeat(3,1fr)"} gap="3rem" mt="1rem"> 
                  {
                      Blogs.map((item) => (
                          <GridItem>
                              <Image h="200px" src={item.img} />
                              <Heading my='0.5rem' fontSize={"24px"}>{item.title}</Heading>
                              <Link href={item.link} isExternal><Text fontWeight={"semibold"} color="#25cf60">Read more</Text></Link>
                          </GridItem>
                      ))
                  }
              </Grid>
          </Box>
   </Box>
  )
}

export default Blog