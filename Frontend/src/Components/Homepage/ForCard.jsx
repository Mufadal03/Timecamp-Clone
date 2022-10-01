import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ForCard = ({ leftImg, tag, heading, desc, subHeading, subDesc, opt1, opt2, buttonText, imgURL }) => {
    const [direction, setDirection] = useState("row")
    useEffect(() => {
        if (leftImg) {
            setDirection("row-reverse")
        }
    },[leftImg])
  return (
      <Box h="auto" mt="2rem">
          <Flex w="72%" m="auto"  >
              {leftImg && <Flex w="50%" alignItems={"center"} >
                  <Image src={imgURL} />
              </Flex>}
              <Flex direction={direction} w="50%" textAlign={"left"}>
                   <Flex  w="85%" direction={"column"} textAlign="left" h="auto" gap="1rem">
                     <Text fontWeight={"semibold"} color="#25cf60">{tag}</Text>
                      <Heading fontWeight={"550"} w="90%" lineHeight="50px" fontSize={"5xl"}>{heading}</Heading>
                      <Text my="1rem">{desc }</Text>
                      <Text as={"span"} fontSize={"lg"} w="-webkit-fit-content" pb="3px" borderBottom="2px solid #25cf60" fontWeight={"semibold"}>{subHeading }</Text>
                      <Text>{subDesc }</Text>
                      <Text fontSize={"lg"} color="ghost">{opt1 }</Text>
                      <Text fontSize={"lg"} color="ghost">{opt2}</Text>
                      <Button mt="2rem" size={"lg"} w="-webkit-fit-content" borderRadius={"full"} bgColor="#25cf60" _hover={{ bgColor: "#25cf60" }} _focus={{ bgColor: "#25cf60" }} color="white" fontSize={"md"}>{ buttonText}</Button>
                  </Flex>
                  
             </Flex>
             {!leftImg && <Flex w="50%" alignItems={"center"} >
                  <Image src={imgURL} />
              </Flex>}
          </Flex>
    </Box>
  )
}

export default ForCard