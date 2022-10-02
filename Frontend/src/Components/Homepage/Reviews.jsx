import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { reviews } from '../../utils/reviews'
const company = [
    {
        URL:"https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png"
    },
    {
        URL:"https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png"
    },
    {
        URL:"https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png"
    },
    {
        URL:"https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png"
    }
]
const Reviews = () => {
  return (
      <Box mt="5rem">
          <Text fontWeight={"semibold"} mt="2rem" color="#25cf60">REVIEWS</Text>
          <Heading my="1rem" fontSize={"4xl"} fontWeight="semibold">Time tracking software for businesses <br /> across all industries and sizes</Heading>
          <Box my="3rem">
              <Flex w="70%" m="auto"justifyContent="space-between">
                  <Text fontWeight={"semibold"} borderBottom="2px solid #25cf60" pb="0.2rem">Marketing agencies</Text>
                  <Text>IT & Software houses</Text>
                  <Text>Designers</Text>
                  <Text>Accounting</Text>

              </Flex>
              <Flex h="80%" mt="2rem">
                  <Grid gridTemplateColumns={"repeat(4,1fr)"} gap="2rem">
                      {
                          reviews.map((item) => (
                              <GridItem h="300px" border="1px solid rgba(0,0,0,0.5)" borderRadius={"lg"}>
                                  <Flex direction="column" h="100%" alignItems={"center"} justifyContent="center" p="1rem" >
                                      <Text wordBreak={true} textAlign="center">{item.Comment}</Text>
                                      <Text textAlign={"left"} mt="1rem" fontWeight="semibold">{item.by }</Text>
                                  </Flex>
                              </GridItem>
                          ))
                      }
                  </Grid>
              </Flex>
          </Box>
          <Grid w="80%" m="2rem auto" gridTemplateColumns={"repeat(4,1fr)"} gap="3rem">
              {company.map((item) => (
                  <GridItem >
                      <Center>
                          <Image h="75px" src={item.URL} />
                        </Center>
                  </GridItem>
              ))}
          </Grid>

   </Box>
  )
}

export default Reviews