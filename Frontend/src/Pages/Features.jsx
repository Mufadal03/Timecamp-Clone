import React from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Input,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

const Features = () => {
  return (
    <>
      <Box w="100%" pt="2rem" pb="4rem">
        <Box w="70%" m="auto">
          <Box>
            <SimpleGrid minChildWidth="300px" spacing="4rem">
              <Box>
                <Heading fontFamily="lato,sans-serif" fontSize="2rem">
                  <b>Time tracker your team will actually use</b>
                </Heading>
                <br />
                <Text>
                  Track time against your projects and create reports and
                  timesheets in seconds.
                </Text>
                <Box pt="1.3rem" >
                  <Flex boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"} justifyContent="space-between"
                  borderRadius="1.4rem">
                    <Input
                      p="0.3rem"
                      pl="0.5rem"
                      type="text"
                      placeholder="Add your email"
                      outline ="2px solid white"
                      style={{border: 'none'}}
                      
                    />
                    <Button
                      bg="#25cf60"
                      color="white"
                      borderRadius="1.3rem"
                      _hover={{ backgroundColor: "#25cf60" }}
                      p="0rem 2rem 0rem 2rem"
                      w="-webkit-fit-content"
                    >
                      {" "}
                      Start tracking time
                    </Button>
                  </Flex>
                  <Flex justifyContent="space-between" pt="1.7rem">
                    <Box>
                      <Flex>
                        <Text fontFamily="lato,sans-serif" pt="0.5rem">
                          Or sign up with{" "}
                        </Text>

                        <Image
                          className=""
                          src="https://cdn-m.timecamp.com/img/logos/google.svg"
                          w={["1rem", "2rem", "3rem"]}
                          pb="2rem"
                        />
                      </Flex>
                    </Box>
                    <Box textAlign="center" pr="1.5rem">
                      <Text fontFamily="lato,sans-serif">
                        {" "}
                        By signing up you agree to our{" "}
                        <Text color="#25cf60" fontFamily="lato,sans-serif">
                          Terms and Conditions
                        </Text>{" "}
                        and
                        <Text color="#25cf60" fontFamily="lato,sans-serif">
                          {" "}
                          Privacy Policy.
                        </Text>
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box>
                <Image
                  src="https://cdn-m.timecamp.com/img/greenbranding/features/features-time-tracking.svg"
                  alt="comming"
                />
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box w="100%" bg="#25cf60" pt="2rem">
        <Box textAlign="center" color="white">
          <Text>
            {" "}
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
        </Box>
        <SimpleGrid
          minChildWidth="120px"
          spacing="40px"
          pt="2rem"
          pb="2rem"
          w="70%"
          m="auto"
        >
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
            alt="a"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
            alt="a"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
            alt="a"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
            alt="a"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
            alt="a"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
            alt="a"
          />
        </SimpleGrid>
      </Box>
      <Box w="100%">
        <Box w="70%" m="auto">
          <br />
          <br />
          <Box p="1rem" bg="#F3F3F3" borderRadius="1rem">
            <SimpleGrid minChildWidth="170px" spacing="40px">
              <Box pl="1.5rem">
                <h2>
                  {" "}
                  <b>Schedule a demo and learn more about TimeCamp </b>
                </h2>
                <Text>
                  Hop on a call with TimeCamp's top minds to get the best
                  possible introduction to our product.
                </Text>
              </Box>
              <Box pl="6rem">
                <Button
                  bg="#f7b801"
                  color="white"
                  p="1rem 3rem"
                  borderRadius="2rem"
                >
                  Book a demo
                </Button>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
        <Heading
          as="h2"
          size="lg"
          fontSize="3rem"
          textAlign="center"
          pt="4rem"
          pb="4rem"
        >
          <b>One app. A multitude of benefits</b>
        </Heading>

        <Box w="70%" m="auto" pb="8rem">
          <SimpleGrid minChildWidth="250px" spacing="4rem">
            <Box>
              <Box pb="2rem">
                <Heading as="h2" fontSize="1.5rem">
                  <b>Track a team's performance</b>
                </Heading>
                <p>
                  See at a glance how your team is performing and how much time
                  they spend on a given project or task.
                </p>
              </Box>
              <Box pb="2rem">
                <Heading as="h2" fontSize="1.5rem">
                  <b>Track project profitability</b>
                </Heading>
                <p>
                  Is your project still within its budget? What is the profit
                  margin across different projects? With TimeCamp, budgeting and
                  billing will become easy as pie.
                </p>
              </Box>
              <Box pb="1rem">
                <Heading as="h2" fontSize="1.5rem">
                  <b>Track your productivity</b>
                </Heading>
                <p>
                  Get your team’s proof of work. Measure their productivity and
                  the time spent on different apps and websites.
                </p>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/features/performance.jpg"
                alt="performance"
              />
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="70%" m="auto" pb="7rem">
          <SimpleGrid minChildWidth="250px" spacing="4rem">
            <Box>
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/features/automatic-time-tracking-header.svg"
                alt="adsf"
              />
            </Box>
            <Box>
              <p style={{ color: "blue" }} pb="0.5rem">
                Automatic time tracking app
              </p>
              <Heading as="h2" fontSize="1.5rem" pb="1rem">
                <b>More focus thanks to automatic time tracking</b>
              </Heading>
              <p>
                TimeCamp automatically scans the domain names of your apps and
                groups them to pre-defined categories. Thanks to this, you can
                focus on your work.
              </p>
              <Box pt="2rem" pl="1rem">
                <Button bg="#F3F3F3" p="1rem" borderRadius="1rem">
                  More about automatic time tracking
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="70%" m="auto" pb="7rem">
          <SimpleGrid minChildWidth="250px" spacing="4rem">
            <Box>
              <p style={{ color: "blue" }} pb="0.5rem">
                Productivity tracking
              </p>
              <Heading as="h2" fontSize="1.5rem" pb="1rem">
                <b>
                  <h2>More insights with productivity tracking</h2>
                </b>
              </Heading>
              <p>
                If you're in need to track the usage of certain apps by your
                team, try this! Stay on the same page with your team without any
                micromanagement.
              </p>
              <Box pt="2rem" pl="1rem">
                <Button bg="#F3F3F3" p="1rem" borderRadius="1rem">
                  Read more about productivity tracking
                </Button>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/features/insightful-reports-header.svg"
                alt="adsf"
              />
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="70%" m="auto" pb="7rem">
          <SimpleGrid minChildWidth="250px" spacing="4rem">
            <Box>
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/features/versatile-billing-header.svg"
                alt="adsf"
              />
            </Box>
            <Box>
              <p style={{ color: "blue" }} pb="0.5rem">
                Custom billing rates
              </p>
              <Heading as="h2" fontSize="1.5rem" pb="1rem">
                <b>Keeping track of your billables</b>
              </Heading>
              <p>
                TimeCamp's billing feature allows you to mark your tracked time
                as either billable or non-billable which significantly speeds up
                your invoicing as well as resource management
              </p>
              <Box pt="2rem" pl="1rem">
                <Button bg="#F3F3F3" p="1rem" borderRadius="1rem">
                  Learn more about biling rates in TimeCamp
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="70%" m="auto" pb="7rem">
          <SimpleGrid minChildWidth="250px" spacing="4rem">
            <Box>
              <p style={{ color: "blue" }} pb="0.5rem">
                Timesheet approvals
              </p>
              <Heading as="h2" fontSize="1.5rem" pb="1rem">
                <b>One-click approvals</b>
              </Heading>
              <p>
                {" "}
                Tired of manually going through your team's timesheets at the
                end of the month? This is what you need to work smarter, not
                harder.
              </p>
              <Box pt="2rem" pl="1rem">
                <Button bg="#F3F3F3" p="1rem" borderRadius="1rem">
                  Get more about timesheets approvals
                </Button>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/features/smart-timesheets-header.svg"
                alt="adsf"
              />
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="70%" m="auto" pb="7rem">
          <SimpleGrid minChildWidth="250px" spacing="4rem">
            <Box>
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/features/attendance-tracking-header.svg"
                alt="adsf"
              />
            </Box>
            <Box>
              <p style={{ color: "blue" }} pb="0.5rem">
                Attendance tracking
              </p>
              <Heading as="h2" fontSize="1.5rem" pb="1rem">
                <b>No more punch in/out cards</b>
              </Heading>
              <p>
                TimeCamp also works for attendance reporting. You can finally
                scrap the dreaded punch in and out cards and use a simple tool.
              </p>
              <Box pt="2rem" pl="1rem">
                <Button bg="#F3F3F3" p="1rem" borderRadius="1rem">
                  Read about easy attendance tracking
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        <Box w="70%" m="auto" pb="7rem">
          <SimpleGrid minChildWidth="250px" spacing="4rem">
            <Box>
              <p style={{ color: "blue" }} pb="0.5rem">
                Easy invoicing
              </p>
              <Heading as="h2" fontSize="1.5rem" pb="1rem">
                <b>Effortless invoicing</b>
              </Heading>
              <p>
                Turn precise data into precise invoices for your clients. No
                more disputes over amounts. TimeCamp provides the proof of work.
              </p>
              <Box pt="2rem" pl="1rem">
                <Button bg="#F3F3F3" p="1rem" borderRadius="1rem">
                  Find more about effortless invoicing
                </Button>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/features/smart-invoicing-header.svg"
                alt="adsf"
              />
            </Box>
          </SimpleGrid>
        </Box>

        <Heading
          as="h2"
          size="lg"
          fontSize="2rem"
          textAlign="center"
          pt="4rem"
          pb="4rem"
        >
          <b>Customer story</b>
        </Heading>

        <Box
          w="70%"
          m="auto"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <SimpleGrid minChildWidth="250px" spacing="0rem">
            <Box h="auto" w="18rem" pb="1rem">
              <img
                src="https://cdn-m.timecamp.com/img/customer-stories/saatchi/saatchi.jpg"
                alt="abc"
              />
            </Box>
            <Box pl="1rem">
              <Text  p="3rem 4rem 3rem 0rem">
                It’s very simple to use, especially fueling it with Trello, it’s
                key here, we wanted to maintain our workflow and not jump over
                to other pieces of software to capture the time data.
              </Text>
              <Text>Mike Spencer, M&C Saatchi</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Text textAlign="center" fontSize="0.8rem" pt="3rem" pb="2rem">
          Distribute the work on projects and tasks and track the progress
          performed by your team. Bill your time on any particular tasks and
          make sure you will never exceed your budget.
        </Text>
      </Box>

      <Box w="100%" bg="#f3f3f3">
        <Box w="70%" m="auto" pt="4rem">
          <SimpleGrid minChildWidth="350px" spacing="0rem">
            <Box pr="2rem">
              <p style={{ color: "green" }}>Time tracking integrations</p>
              <Heading
                as="h2"
                size="lg"
                fontSize="2rem"
                pt="1rem"
                pb="2rem"
              >
                <b>
                  Easy and quick integration with more than 100 apps and work
                  tools
                </b>
              </Heading>
              <p>
                TimeCamp works great alongside with all of the most popular work
                management tools.
              </p>
              <br />
              <p>
                Now, you can also track time directly from your go-to apps such
                as Trello or Asana thanks to our Chrome extension.
              </p>
              <br />
              <p>
                Maintain your current workflow and connect TimeCamp, the best
                time tracking software, with your currently used apps.
              </p>
              <br /> <br />
              <Text color="green">Check integrations - </Text>
            </Box>
            <Box pt="1rem">
              <Box>
                <Flex justifyContent="space-between" pb="2rem">
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png"
                      alt="sa"
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png"
                      alt=""
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png"
                      alt=""
                    />
                  </Box>
                </Flex>
                <Flex justifyContent="space-between" pb="2rem">
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png"
                      alt="sa"
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png"
                      alt=""
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png"
                      alt=""
                    />
                  </Box>
                </Flex>

                <Flex justifyContent="space-between" pb="2rem">
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png"
                      alt="sa"
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png"
                      alt=""
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png"
                      alt=""
                    />
                  </Box>
                </Flex>

                <Flex justifyContent="space-between" pb="2rem">
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png"
                      alt="sa"
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png"
                      alt=""
                    />
                  </Box>
                  <Box
                    w="5rem"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                    p="1rem"
                    borderRadius="1rem"
                  >
                    <img
                      src="https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png"
                      alt=""
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Features;
