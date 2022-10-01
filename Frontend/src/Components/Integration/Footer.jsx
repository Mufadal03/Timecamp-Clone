import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,

  useColorModeValue,
  Heading,
} from "@chakra-ui/react";


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#ffffff")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={8}>
          <Stack  textAlign={"start"} align={"flex-start"}>
            <Heading size="md">Product</Heading>
            <Link href={"#"}>Features</Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Integrations</Link>
            </Stack>
            <Link href={"#"}>Applications</Link>
            <Link href={"#"}>Product updates</Link>
            <Link href={"#"}>Customer Stories</Link>
            <Link href={"#"}>Self-hosting</Link>
          </Stack>
          
          <Stack  textAlign={"start"} align={"flex-start"}>
            <Heading size="md">Support</Heading>
            <Link href={"#"}>Support</Link>
            <Link href={"#"}>Knowledge base</Link>
            <Link href={"#"}>Developers API</Link>
            <Link href={"#"}>Server Status</Link>
          </Stack>
          <Stack  textAlign={"start"} align={"flex-start"}>
            <Heading size="md">Integrations</Heading>
            <Link href={"#"}>Trello</Link>
            <Link href={"#"}>Monday.com</Link>
            <Link href={"#"}>Google Calendar</Link>
            <Link href={"#"}>Asana</Link>
            <Link href={"#"}>Jira</Link>
            <Link href={"#"}>All integrations</Link>
          </Stack>
          <Stack  textAlign={"start"} align={"flex-start"}>
            <Heading size="md">Resources</Heading>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>HeySpace</Link>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Become a Partner</Link>
          </Stack>
          <Stack textAlign={"start"} align={"flex-start"}>
            <Heading size="md">Calculators</Heading>
            <Link href={"#"}>Profit Margin Calculator</Link>
            <Link href={"#"}>Online Timer</Link>
            <Link href={"#"}>Overtime Calculator</Link>
            <Link href={"#"}>ROI Calculator</Link>
            <Link href={"#"}>Time Card Calculator</Link>
          </Stack>
          <Stack  textAlign={"start"} align={"flex-start"}>
            <Heading size="md">Legal</Heading>
            <Link href={"#"}>Terms</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Security</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        ></Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Copyright © 2022 TimeCamp. Inc.
        </Text>
      </Box>
    </Box>
  );
}
