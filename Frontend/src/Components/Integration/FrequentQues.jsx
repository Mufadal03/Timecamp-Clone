import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";


const FrequentQues = () => {
  return (
    <Accordion defaultIndex={[0]} allowToggle>
      <AccordionItem p={5}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={18} fontWeight={600}>
                    Time tracking in just one app
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                {" "}
                With this free extension, you can start tracking time to all
                your Trello activities without having to waste time switching
                between apps. Stay focused on your project and maintain your
                current workflow by using TimeCamp's time tracking feature
                inside of Trello. This makes TimeCamp one of the most useful
                apps for Trello to take your projects to the next level!
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem p={5}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={18} fontWeight={600}>
                    Seamless integration
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                You don't have to be a senior software engineer to set up this
                extension. All you need to do is follow our 3-step guide and
                you're good to go! Get ready, because your next project will be
                your best so far. What's more, the Trello TimeCamp integration
                is now available as an official Trello Power-Up!
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem p={5}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={18} fontWeight={600}>
                    Customizable data
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                If you're working on multiple Trello boards across different
                projects and you only have certain tasks or boards that you'd
                like to track time to, this Trello time tracking integration is
                a must-have for you. By connecting Trello with TimeCamp, you can
                also define which boards, projects, or tasks will be available
                to track time.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem p={5}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={18} fontWeight={600}>
                    Track your time and fill out timesheets
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                TimeCamp is a lot more than a simple Trello time tracking
                integration. Besides timer for Trello boards, we offer
                feature-rich software that can track billable and non-billable
                hours, calculate unproductive time, and manage employee payroll
                based on timesheets. at{" "}
                <a href="mailto:help@timecamp.com">help@timecamp.com</a> with a
                copy of your 501(c)(3) paperwork.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem p={5}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
                <Box ml={5} flex="1" textAlign="left">
                  <Text fontSize={18} fontWeight={600}>
                    Do you offer an on-premise verion of TimeCamp?
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={14} letterSpacing={0.5}>
                Yes, for bigger organizations with more than 100 employees. For
                more information please contact us at
                <a href="mailto:sales@timecamp.com">sales@timecamp.com</a>.
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default FrequentQues;
