import { Box, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
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
          <Box border="2px solid green" h="500px"></Box>
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