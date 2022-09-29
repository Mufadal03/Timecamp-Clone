import { Box, Grid, GridItem, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import FooterFaq from './footer';

const Integration = () => {
  return (
    <Box>
      <Box width={'40%'} margin={'auto'} mar>
        <Box display={'flex'}>
          <Box>
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png" />
          </Box>
          <Box margin={'20px 0 0 20px'}>
            <Text>Trello time tracking</Text>
            <Text>
              Tracking time on all of your chosen Trello cards and boards
              without switching apps? Yes!
            </Text>
          </Box>
        </Box>
        <Box display={'flex'}>
          <Box width={'130px'}></Box>
          <Input marginLeft={'20px'} placeholder="Enter email" />
        </Box>
        <Box display={'flex'}>
          <Box width={'130px'}></Box>
          <Box display={'flex'}>
            <Text marginTop={'10px'} marginLeft={'20px'}>
              Or sign up with:
            </Text>
            <Image
              margin={'0'}
              src="https://cdn-m.timecamp.com/img/logos/google.svg"
            />
            <Text fontSize={'15px'} marginTop={'10px'}>
              By signing up you agree to our{' '}
              <span style={{ color: 'green' }}> Terms and Conditions </span>and
              <span style={{ color: 'green' }}> Privacy Policy. </span>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box margin={'auto'} marginTop={'50px'}>
        <Box margin={'auto'} width={'30%'}>
          <Text>
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
        </Box>
        <Box
          width={'50%'}
          margin={'auto'}
          marginBottom={'40px'}
          marginTop={'30px'}
        >
          <Grid templateColumns="repeat(6, 1fr)">
            <GridItem>
              <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg" />

              <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg" />
            </GridItem>
            <GridItem>
              <Image src="https://cdn-m.timecamp.com/img/logos/dsv.png" />
            </GridItem>{' '}
            <GridItem>
              <Image src="https://cdn-m.timecamp.com/img/logos/usp.png" />
            </GridItem>{' '}
            <GridItem>
              <Image src="https://cdn-m.timecamp.com/img/logos/saatchi.png" />
            </GridItem>{' '}
            <GridItem>
              <Image src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png" />
            </GridItem>{' '}
            <GridItem>
              <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg" />

              <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg" />
            </GridItem>
          </Grid>
        </Box>
        <Box width={'50%'} margin={'auto'}>
          <hr />
        </Box>
        <Box margin={'auto'} width={'25%'}>
          <Text>
            Want to track time in your team ?{' '}
            <span style={{ color: 'green' }}>Book a Demo</span>
          </Text>
        </Box>
      </Box>
      <Box height={'800px'} backgroundColor={'rgb(243,243,243)'}>
        <Box width={'50%'} margin={'auto'} marginTop={'60px'}>
          <Box width={'30%'} margin={'auto'}>
            <Text fontWeight={'bold'} fontSize={'30px'}>
              How it works
            </Text>
          </Box>
          <Text fontWeight={'500'} margin={'auto'} width={'80%'}>
            The TimeCamp Trello Power-Up allows you to track time without the
            need to leave Trello. Plan, work and track time in just one app.
            Ideal for Trello users.
          </Text>
        </Box>
        <Box
          margin={'auto'}
          width={'50%'}
          display={'flex'}
          gap={'10'}
          textAlign={'justify'}
          fontWeight={'500'}
        >
          <Box width={"50%"}>
            <Text margin={'20px 0 20px 0'}>
              Plan, work and track in one app
            </Text>
            <Text>
              No need to switch between two or more apps. Now, with our TimeCamp
              Trello Power-Up you're able to take your Trello experience to the
              next level. Add a time tracking button to your Trello cards and
              analyze time reports for every task. If you forget to start the
              timer, don't worry. Just add time manually or edit time reports.
            </Text>
          </Box>
          <Box width={"50%"}>
            <Text margin={'20px 0 20px 0'}>
              Measure time spent on your chosen Trello boards
            </Text>
            <Text>
              Select the boards that you want to integrate with TimeCamp. You're
              in charge! Your project management and productivity will improve
              with the time tracker that helps identify bottlenecks and
              redundant activities.
            </Text>
          </Box>
        </Box>
        <Box
          margin={'auto'}
          width={'50%'}
          display={'flex'}
          gap={'10'}
          textAlign={'justify'}
          fontWeight={'500'}
        >
          <Box>
            <Text margin={'20px 0 20px 0'}>Automatic time tracking </Text>
            <Text>
              Whatever you're working on in Trello, TimeCamp will automatically
              assign the right projects, categories and track time to them.
              TimeCamp integrates with Trello seamlessly, so you can focus on
              your work.
            </Text>
          </Box>
          <Box>
            <Text margin={'20px 0 20px 0'}>Easy and fast</Text>
            <Text>
              Discover how the Trello extension will take your task management
              experience to the next level. A time tracking integration that
              takes minimum time to set up in Trello. See for yourself!
            </Text>
          </Box>
        </Box>
      </Box>
 {/* <FooterFaq/> */}
    </Box>
  );
};

export default Integration;
