import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Link, TagRightIcon, Text } from '@chakra-ui/react'
import React from 'react'
import { platform } from '../../utils/integration'
import {ArrowForwardIcon} from "@chakra-ui/icons"
const Integration = () => {
  return (
      <Box p="6rem" bgColor={"#F3F3F3"} >
          <Flex  w="90%" m={"auto"}>
              <Box w="50%">
                  <Flex direction={"column"} w="90%" textAlign="left" gap="2rem" >
                      <Text fontWeight={"semibold"} color="#25cf60">TIME TRACKING INTEGRATIONS</Text>
                      <Heading fontWeight={"semibold"} letterSpacing={"tight"}>Easy and quick integration<br /> with more than 100 apps<br /> and work tools
                      </Heading>
                      <Text fontSize={"lg"}><Text as={"span"} fontWeight="semibold">TimeCamp works great</Text> alongside with all of the most popular work management tools.</Text>
                      <Text fontSize={"lg"}>Now, you can also <Text as="span" fontWeight="semibold">track time </Text>directly from your go-to apps such as Trello or Asana thanks to our Chrome extension.</Text>
                      <Button mt="2rem" h="70px" p="1rem" w="-webkit-fit-content" borderRadius={"full"} bgColor="#25cf60" _hover={{ bgColor: "#25cf60" }} _focus={{ bgColor: "#25cf60" }} color="white" fontSize={"15px"}><Image mr="1rem" h="40px" src="https://cdn-m.timecamp.com/img/greenbranding/features/chrome-white.png" />Track time in Chrome</Button>
                      <Text fontSize={"lg"}>Maintain your current workflow and <Text as="span" fontWeight={"semibold"}>connect <br />TimeCamp</Text>, the best time tracking software, with your <br />currently used apps.</Text>
                      <Link to="#"><Text fontWeight={"semibold"} color={"#25cf60"}>Check integrations <ArrowForwardIcon /></Text></Link>
                  </Flex>
              </Box>
              <Grid w="50%" gridTemplateColumns={"repeat(3,1fr)"} gap="0.5rem"gridTemplateRows={"auto"} >
                  {platform.map((item) => (
                      <GridItem>
                          <Flex justifyContent={"center"} borderRadius="3xl" bgColor={"white"} w="60%" m="auto" h="80%" boxShadow={'lg'} alignItems="center"> 
                              <Image h="50px" src={item.URL} />
                              </Flex>
                      </GridItem>
                  ))}
              </Grid>
          </Flex>
    </Box>
  )
}

export default Integration