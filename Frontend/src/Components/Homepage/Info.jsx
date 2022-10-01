import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ForCard from './ForCard'
import {HomeForCardsData} from "../../utils/HomeForCardsData"
const Info = () => {
  return (
      <Box>
          <Box m="2rem auto" w="40%" >
              <Heading fontSize={"4xl"} fontWeight="600">Time tracking for everyone in your organization</Heading>
          </Box>
          {
              HomeForCardsData.map((item) => (
                  <ForCard leftImg={item.leftImg} tag={item.tag} heading={item.heading} desc={item.desc} subHeading={item.subHeading} subDesc={item.subDesc} opt1={item.opt1} opt2={item.opt2} buttonText={item.buttonText} imgURL={ item.img} />
              ))
          }
    </Box>
  )
}

export default Info