import {
  Box,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  Flex,
  Container,
  Button,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Highlight,
  Show,
  Hide,
} from "@chakra-ui/react";
import React from "react";
import styles from "./allintegration.module.css";
import FrequentQues from "./FrequentQues";
import Footer from "./Footer";
import EasySteps from "./EasySteps";

const Integration = () => {
  return (
    <Flex direction={"column"} mt="10em" w="100%">
      {/* Image */}
      <Flex
        justifyContent={"center"}
        direction={["column", "column", "row", "row"]}
        w="50%"
        m="auto"
      >
        <Flex>
          <Image
            display={"flex"}
            m="auto"
            src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png"
            w="10em"
          />
        </Flex>
        <Flex direction={"column"} ml="10">
          <Text
            mb={"5px"}
            textAlign={["center", "center", "start", "start"]}
            fontWeight="700"
            fontSize={"2xl"}
            fontFamily="sans-serif"
          >
            Trello time tracking
          </Text>
          <Text
            mb={"5px"}
            textAlign={["center", "center", "start", "start"]}
            fontWeight="500"
            fontSize={"xl"}
          >
            Tracking time on all of your chosen Trello cards and boards without
            switching apps? Yes!
          </Text>
          <InputGroup size="sm" mt="10">
            <Input
              placeholder="Add your email"
              focusBorderColor="undefined"
              borderRightRadius={"none"}
              boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
              borderRadius={"3xl"}
              p="5"
              borderRight={"0px solid white"}
            />
            <Hide below="600px">
              <InputRightAddon
                ml="-1em"
                borderRadius={"3em"}
                p="5"
                borderLeftRadius="3em"
                children="Start tracking time"
                color="white"
                fontWeight={"500"}
                bgColor={"#25CF60"}
                fontSize="md"
              />
            </Hide>
          </InputGroup>
          <Flex mt="10" direction={["column", "column", "row", "row"]}>
            <Show breakpoint="(max-width: 600px)">
              <Button
                borderRadius={"3em"}
                p="5"
                borderLeftRadius="3em"
                children="Start tracking time"
                color="white"
                fontWeight={"500"}
                bgColor={"#25CF60"}
                fontSize="md"
              >
                Start tracking time
              </Button>
            </Show>

            <Text mt="3" fontSize="sm" fontFamily="sans-serif" color={"gray"}>
              Or sign up with:
            </Text>
            <Image
              display={"flex"}
              m="auto"
              src="https://cdn-m.timecamp.com/img/logos/google.svg"
              w="12"
              mr={["undefined", "undefined", "3", "3"]}
            />
            <Text mt="3" fontSize="sm" fontFamily="sans-serif" color={"gray"}>
              By signing up you agree to our{" "}
              <Highlight
                query="Terms and Conditions"
                styles={{ py: "1", fontWeight: "normal", color: "#25CF60" }}
              >
                Terms and Conditions
              </Highlight>{" "}
              and{" "}
              <Highlight
                query="Privacy Policy."
                styles={{ py: "1", fontWeight: "normal", color: "#25CF60" }}
              >
                Privacy Policy.
              </Highlight>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box margin={"auto"} marginTop={"150px"}>
        <Box margin={"auto"}>
          <Text>
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
        </Box>
        <Flex
          m={"auto"}
          direction={["column", "column", "row", "row"]}
          // direction={"column"}
          width={"100%"}
          marginBottom={"40px"}
          marginTop={"30px"}
        >
          <Flex
            m={"auto"}
            mr={"10px"}
            ml={"10px"}
            justifyContent={"space-between"}
        
            direction={["column", "row", "row", "row"]}
          >
            <Image
              w={["30%", "auto", , "auto", , "auto"]}
              mr={"10px"}
              ml={"10px"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg"
            />
            <Image
              w={["25%", "auto", , "auto", , "auto"]}
              mr={"10px"}
              ml={"10px"}
              src="https://cdn-m.timecamp.com/img/logos/dsv.png"
            />
            <Image
              w={["25%", "auto", , "auto", , "auto"]}
              mr={"10px"}
              ml={"10px"}
              src="https://cdn-m.timecamp.com/img/logos/usp.png"
            />
          </Flex>
          <Flex
            justifyContent={"space-between"}
            marginLeft={"10px"}
            direction={["column", "row", "row", "row"]}
          >
            <Image
              w={["30%", "auto", , "auto", , "auto"]}
              mr={"10px"}
              ml={"10px"}
              src="https://cdn-m.timecamp.com/img/logos/saatchi.png"
            />
            <Image
              w={["30%", "auto", , "auto", , "auto"]}
              mr={"10px"}
              ml={"10px"}
              src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png"
            />
            <Image
              w={["30%", "auto", , "auto", , "auto"]}
              mr={"10px"}
              ml={"10px"}
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg"
            />
          </Flex>
        </Flex>
        <Box width={"50%"} margin={"auto"}>
          <hr />
        </Box>
        <Box margin={"auto"} width={"50%"}>
          <Text>
            Want to track time in your team ?{" "}
            <span style={{ color: "green" }}>Book a Demo</span>
          </Text>
        </Box>
      </Box>
      <Box marginTop={"70px"} height={"auto"} backgroundColor={"rgb(243,243,243)"}>
        <Box width={"50%"} margin={"auto"} marginTop={"60px"}>
          <Box width={"30%"} margin={"auto"}>
            <Text fontWeight={"bold"} fontSize={"30px"}>
              How it works
            </Text>
          </Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "25px" }}
            fontWeight={"500"}
            margin={"auto"}
            width={"80%"}
          >
            The TimeCamp Trello Power-Up allows you to track time without the
            need to leave Trello. Plan, work and track time in just one app.
            Ideal for Trello users.
          </Text>
        </Box>
        <Flex
          gap={"10"}
          m={"auto"}
          width={"50%"}
          direction={["column", "column", "row", "row"]}
        >
          <Flex
            mt={"20px"}
            mb={"20px"}
            w={["100%", "100%", "50%", "50%"]}
            direction={"column"}
          >
            <Text
              fontWeight={"600"}
              mt={"20px"}
              mb={"20px"}
              textAlign={"start"}
            >
              Plan, work and track in one app
            </Text>
            <Text fontWeight={"500"} textAlign={"justify"}>
              No need to switch between two or more apps. Now, with our TimeCamp
              Trello Power-Up you're able to take your Trello experience to the
              next level. Add a time tracking button to your Trello cards and
              analyze time reports for every task. If you forget to start the
              timer, don't worry. Just add time manually or edit time reports.
            </Text>
          </Flex>
          <Flex
            mt={"20px"}
            mb={"20px"}
            w={["100%", "100%", "50%", "50%"]}
            direction={"column"}
          >
            <Text fontWeight={"600"} mt={"20px"} mb={"20px"}>
              Measure time spent on your chosen Trello boards
            </Text>
            <Text fontWeight={"500"} textAlign={"justify"}>
              Discover how the Trello extension will take your task management
              experience to the next level. A time tracking integration that
              takes minimum time to set up in Trello. See for yourself!
            </Text>
          </Flex>
        </Flex>

        <Flex
          gap={"10"}
          m={"auto"}
          width={"50%"}
          direction={["column", "column", "row", "row"]}
        >
          <Flex
            mt={"20px"}
            mb={"20px"}
            w={["100%", "100%", "50%", "50%"]}
            direction={"column"}
          >
            <Text fontWeight={"600"} mt={"20px"} mb={"20px"}>
              Automatic time tracking
            </Text>
            <Text fontWeight={"500"} textAlign={"justify"}>
              Whatever you're working on in Trello, TimeCamp will automatically
              assign the right projects, categories and track time to them.
              TimeCamp integrates with Trello seamlessly, so you can focus on
              your work.
            </Text>
          </Flex>
          <Flex
            mt={"20px"}
            mb={"20px"}
            w={["100%", "100%", "50%", "50%"]}
            direction={"column"}
          >
            <Text fontWeight={"600"} mt={"20px"} mb={"20px"}>
              Easy and fast
            </Text>
            <Text fontWeight={"500"} textAlign={"justify"}>
              Select the boards that you want to integrate with TimeCamp. You're
              in charge! Your project management and productivity will improve
              with the time tracker that helps identify bottlenecks and
              redundant activities.
            </Text>
          </Flex>
        </Flex>
        <Flex m={"auto"} w={["30%", "30%", "35%", "40%"]}>
          <div class={styles.zoom}>
          <img  src="https://cdn-m.timecamp.com/img/landing-page/ppc_integrations/trello.png" />

          </div>
        </Flex>
      </Box>
      {/* <FooterFaq/> */}
      <EasySteps />
      <Container maxW={"50%"} mb={"2  0px"}>
        <Box justifyContent={"center"} margin={"auto"}>
          <Text
            fontSize="30px"
            textAlign={"center"}
            fontWeight={"700"}
            mt={"200px"}
            mb={"80px"}
          >
            Benefits include
          </Text>
        </Box>
        <FrequentQues />
      </Container>
      
      <Flex margin={"auto"}  w={["30%","40%","50%","60%"]}>
   <div style={{backgroundColor:"rgb(243,243,243)"}} className={styles.bottom}>
    <h1>One simple tool to measure everything your business needs.</h1>
    <p>Remember, you can't improve something if you're not measuring it! If you're tired of the constant guessing, give TimeCamp a go!</p>
   <button className={styles.btn2} style={{backgroundColor:'rgb(247,184,1)',}}>Try TimeCmp for free </button>
   <button className={styles.btn3} style={{marginLeft:"30px"}}>Contact Sale</button>
   </div>
   </Flex>
      {/* <Footer /> */}
    </Flex>
  );
};

export default Integration;
