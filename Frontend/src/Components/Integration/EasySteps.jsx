import React from "react";
import { Flex, Container, Box, Text,Highlight,Image, Show } from "@chakra-ui/react";
const EasySteps = () => {
  return (
    <Container maxW={"50%"} mb={"2  00px"}>
      <Box justifyContent={"center"} margin={"auto"}>
        <Text
          fontSize="30px"
          textAlign={"center"}
          fontWeight={"700"}
          mt={"200px"}
          mb={"80px"}
        >
          Easy setup
        </Text>
      </Box>
      <Flex direction={"column"}>
        <Text fontWeight={"600"}>
          Note: If you don't have a TimeCamp account, click <Highlight
                query="here"
                styles={{ py: "1", fontWeight: "normal", color: "#25CF60" }}
              >
                here  to register for a 
              </Highlight>{" "} <Highlight
                query="free 14-day trial."
                styles={{ py: "1", fontWeight: "600",  }}
              >
               free 14-day trial.
              </Highlight>{" "}
        </Text>
        <Text>Below you can find how to enable the integration:</Text>
      </Flex>
      <Flex>
        <Show breakpoint="(min-width: 1000px)">
        <Flex>
          <Image  src="https://cdn-m.timecamp.com/img/greenbranding/automaticMode.png"/>
        </Flex>
        </Show>
        <Flex gap={"50"} mt={"100px"} direction={"column"}>
          <Flex gap={"4"}>
          <Box bgColor={"rgb(243,243,243)"} boxSize={"-webkit-max-content"} borderRadius={"50%"}  >
            <Text fontSize={"18"} fontWeight={"900"} padding={"3"} color={"#25CF60"}>1</Text>
          </Box>
          <Text textAlign={"start"}>Go to the Integrations section in TimeCamp and enable the Trello integrations.</Text>
          </Flex>
          <Flex gap={"4"}>
          <Box bgColor={"rgb(243,243,243)"} boxSize={"-webkit-max-content"} borderRadius={"50%"}  >
            <Text fontSize={"18"} fontWeight={"900"} padding={"3"} color={"#25CF60"}>2</Text>
          </Box>
          <Text textAlign={"start"}mt={"10px"}>Authorize the integration via Trello.</Text>
          </Flex>
          <Flex gap={"4"}>
          <Box bgColor={"rgb(243,243,243)"} boxSize={"-webkit-max-content"} borderRadius={"50%"}  >
            <Text fontSize={"18"} fontWeight={"900"} padding={"3"} color={"#25CF60"}>3</Text>
          </Box>
          <Text textAlign={"start"}mt={"10px"}>Select the boards you'd like to allow for Tracking.</Text>
          </Flex>
          
        </Flex>
      </Flex>
    </Container>
  );
};

export default EasySteps;
