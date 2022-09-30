import { Box, Grid, GridItem, Image, Input, Text,Flex,Container} from '@chakra-ui/react';
import React from 'react';
import Footer from '../Components/Footer';
import FrequentQues from '../Components/FrequentQues';
import styles from"./allintegration.module.css"

// import FooterFaq from './footer';
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const Integration = () => {
 
  return (
    <Flex direction={"column"} >
      <Box  width={'40%'} margin={'auto'} mar>
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
      <Box margin={'auto'} marginTop={'150px'}>
        <Box margin={'auto'} width={'50%'}>
          <Text>
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
        </Box>
        <Box
          width={'80%'}
          margin={'auto'}
          marginBottom={'40px'}
          marginTop={'30px'}
        >
          <Grid templateColumns="repeat(6, 1fr)" gap={"10"}>
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
        <Box margin={'auto'} width={'50%'}>
          <Text>
            Want to track time in your team ?{' '}
            <span style={{ color: 'green' }}>Book a Demo</span>
          </Text>
        </Box>
      </Box>
      <Box height={'auto'} backgroundColor={'rgb(243,243,243)'}>
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
 <Container maxW={"50%"} mb={"2  00px"}>
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
 {/* <Box margin={"auto"}  w={[500,900,1500]}>
   <div className={styles.bottom}>
    <h1>One simple tool to measure everything your business needs.</h1>
    <p>Remember, you can't improve something if you're not measuring it! If you're tired of the constant guessing, give TimeCamp a go!</p>
   <button className={styles.btn2} style={{backgroundColor:'rgb(247,184,1)',}}>Try TimeCmp for free </button>
   <button className={styles.btn3} style={{marginLeft:"30px"}}>Contact Sale</button>
   </div>
   </Box> */}
   <Footer/>

    </Flex>
    
  );
};

export default Integration;
