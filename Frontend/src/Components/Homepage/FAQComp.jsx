import React from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, Text } from '@chakra-ui/react'
const FAQComp = ({title,desc}) => {
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
                  <Text fontSize={20} fontWeight={600}>
                    {title}
                  </Text>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text align={"start"} fontSize={15} letterSpacing={0.5}>
                {" "}
               {desc}
              </Text>
            </AccordionPanel>
          </>
        )}
        </AccordionItem>
        </Accordion>
  )
}

export default FAQComp