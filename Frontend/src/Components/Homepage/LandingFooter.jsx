import { Box, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
const imgURL = [
    {
        url:"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
    },
    {
        url:"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
    },
    {
        url:"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
    },
    {
        url:"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
    },
    {
        url:"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
    },
    {
        url:"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
    }
]
const LandingFooter = () => {
  return (
      <Box bgColor={"#25cf60"} color="white">
          <Flex direction={"column"} w="80%" m="auto"py="2rem">
              <Heading fontSize={"xl"} fontWeight="600">Trusted by 18,000 teams from all over the world (and still growing!)</Heading>
              <Grid gridTemplateColumns={"repeat(6,1fr)"} mt="2rem" >
                  {
                      imgURL.map((item) => (
                          <GridItem>
                              <Image src={item.url} />
                          </GridItem>
                      ))
                  }
              </Grid>
          </Flex>
   </Box>
  )
}

export default LandingFooter