import React from "react";
import styles from "./Price.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Box,
} from '@chakra-ui/react'
const Price = () => {

    const [value , setValue] = React.useState(true);
    const [value1 ,setValue1] = React.useState(false);
    const handleClick =()=>{
      setValue(!value);
      setValue1(!value1);
    }
  return (
    <div>
      <div className={styles.topBox}>
        <div className={styles.headBox}>
          <h1 className={styles.heading}>
            TimeCamp fits perfectly for companies big and small. Regardless of
            your budget.
          </h1>
        </div>
        <div className={styles.headBox}>
          <p className={styles.subheading}>
            Choose the most accurate pricing for you and start gaining crucial
            insights for your business.
            <p className={styles.subheading_part2}>
              You can also start with a free 14-day trial.
            </p>
          </p>
        </div>
      </div>
      <div className={styles.pricingBox}>
        <div className={styles.pricingBox_child1}>
          <p>PRICING</p>
        </div>
        <div className={styles.pricingBox_child2}>
          <p>Your time costs more</p>
        </div>
        <div className={styles.pricingBox_child3}>
          <p>
            Use free forever plan or subscribe to a paid plan to get more
            features!
          </p>
        </div>
        <div className={styles.pricingBox_child4}>
          <button onClick={handleClick} style={value?{backgroundColor:"#25cf60" , color:"white"}:{backgroundColor:"white" , color:"#25cf60"}}>Anually 10% discount</button>
          <button onClick={handleClick} style={value1?{backgroundColor:"#25cf60" , color:"white"}:{backgroundColor:"white" , color:"#25cf60"}}>Monthly</button>
        </div>
      </div>
      <div className={styles.priceListBox}>
        <div className={styles.priceDiv}>
          <div className={styles.listTop}>
            <p className={styles.type}>Free</p>
            <p>Free forever plan</p>
          </div>
          <hr size="2" width="100%" color="#25cf60" />
          <div className={styles.listAbout}>
            <p>Measure on which activities you spend time while working</p>
          </div>
          <button className={styles.listBtn}>
            Join for free
          </button>
          <div className={styles.listPoints}>
            <ul>
              <li>Unlimited users</li>
              <li>Unlimited Projects & tasks</li>
              <li>Desktop & Mobile app</li>
            </ul>
          </div>
        </div>
        <div className={styles.priceDiv}>
          <div className={styles.listTop}>
            {value?<p className={styles.type1}>$6.3</p> :<p className={styles.type1}>$7</p> }
            <p>user/mo</p>
          </div>
          <hr size="2" width="100%" color="#25cf60" />
          <div className={styles.listAbout}>
            <p>Be more transparent and gain customers' trust</p>
          </div>
          <div className={styles.listBtn}>
            <p>Start your free trial</p>
          </div>
          <div className={styles.listPoints}>
            <ul>
              <li>Time rounding</li>
              <li>Custom report</li>
              <li>Hide time from users</li>
              <li>Management roles</li>
              <li>Team productivity tracking</li>
              <li>XLS reports export</li>
              <li>Unlimited integrations</li>
              <li>Billable time & budgeting</li>
            </ul>
          </div>
        </div>
        <div className={styles.pro}>
          <div className={styles.listTop}>
            {!value1?<p className={styles.type1}>$9</p>:<p className={styles.type1}>$10</p>}
            <p>user/mo</p>
          </div>
          <hr size="2" width="100%" color="white" />
          <div className={styles.listAbout1}>
            <p>Get full control on your business</p>
          </div>
          <div className={styles.listBtn1}>
            <p>Start your free trial</p>
          </div>
          <div className={styles.listPoints}>
          <p style={{ fontWeight: "bold" }}>Everything in Basic plus</p>
            <ul>
             
              <li>Custom user roles</li>
              <li>Biling rates</li>
              <li>Invoicing</li>
              <li>Timesheet approvals</li>
              <li>Screenshots</li>
              <li>SSO login</li>
              <li>2-factor authentication</li>
            </ul>
          </div>
        </div>
        <div className={styles.priceDiv}>
          <div className={styles.listTop2}>
            <p className={styles.type2}>Let's discuss</p>
            <p>user/mo</p>
          </div>
          <hr size="2" width="100%" color="#25cf60" />
          <div className={styles.listAbout}>
            <p>Customize TimeCamp to your custom needs</p>
          </div>
          <div className={styles.listBtn}>
            <p>Contact us</p>
          </div>
          <div className={styles.listPoints1}>
          <p style={{ fontWeight: "bold" }}>Everything in Pro plus</p>
            <ul> 
              <li>Personalized training</li>
              <li>Private cloud implementation</li>
              <li>Self hosted server</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.logoshead}>
        <p>
          Trusted by 18,000 teams from all over the world (and still growing!)
        </p>
      </div>
      <div className={styles.logosDiv}>
        <div className={styles.stars}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
            alt="logo"
          />
          <br />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg"
            alt="logo"
          />
        </div>
        <div>
          <img src="https://cdn-m.timecamp.com/img/logos/dsv.png" alt="logo1" />
        </div>
        <div>
          <img src="https://cdn-m.timecamp.com/img/logos/usp.png" alt="logo1" />
        </div>
        <div>
          <img
            src="https://cdn-m.timecamp.com/img/logos/saatchi.png"
            alt="logo1"
          />
        </div>
        <div>
          <img
            src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png"
            alt="logo1"
          />
        </div>
        <div>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
            alt="logo"
          />
          <br />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className={styles.demo}>
        <p className={styles.demoHead}>
          If you want a product tour, here you can book a call demo with our
          experts.
        </p>
        <p>
          Hop on a call with TimeCamp's top minds to get the best possible
          introduction to our product.
        </p>
        <button className={styles.demoBtn}>Book a demo</button>
      </div>
      <div className={styles.customer}>
        <p className={styles.customerHead}>What customer say</p>
        <div className={styles.reviews}>
          <div>
            <h3 className={styles.reviewshead}>Improving your records every day</h3>
            <p className={styles.reviewsContent}>
              "Being able to measure the time each task takes or each activity
              that takes place during the day, brings control to your time and
              improves your own records to grow professionally every day more."
            </p>
            <br />
            <br />
            <p className={styles.author}>
              Felipe
              <br />
              Software Developer
            </p>
          </div>
          <div>
            <h3 className={styles.reviewshead}>A huge asset for our remote business</h3>
            <p className={styles.reviewsContent}>
              "TimeCamp was a recent implementation for us after using a
              different time tracking system. It is a clean easy to use software
              with barely any learning curve. It has everything we need, min by
              min tracking, notes, projects, tasks, multiple reports, etc. It
              has been a huge asset to our remote business"
            </p>
            <br />
            <br />
            <p className={styles.author}>
              Michelle
              <br />
              Recruiting Director
            </p>
          </div>
          <div>
            <h3 className={styles.reviewshead}>We can distribute workload in a fair basis</h3>
            <p className={styles.reviewsContent}>
              "With TimeCamp we are capable to understand exactly which part of
              the project require more time so we can find a solution and also
              the saturation of the team so we can distribute workload in a fair
              basis."
            </p>
            <br />
            <br />
            <p className={styles.author}>
              Capterra user
              <br />
              Freelancer
            </p>
          </div>
        </div>
      </div>
      <div className={styles.try}>
        <div>
          <h4 className={styles.trybold}>Just when you had enough.</h4>
          <p>Try TimeCamp.</p>
        </div>
        <button className={styles.tryBtn}>Start tracking time</button>
      </div>
      <div className={styles.communities}>
        <div className={styles.commLogo}>
          <div className={styles.logos}>
           <a href="https://crozdesk.com/software/timecamp">
           <img src="https://cdn-m.timecamp.com/img/greenbranding/crozdesk.jpg" alt="logoCommunities1" /></a> 
          </div>
          <div className={styles.logos}>
            <a href="https://www.capterra.com/p/129847/TimeCamp/">
            <img src="https://cdn-m.timecamp.com/img/greenbranding/capterra.svg" alt="logoCommunities2" />
            </a>
           
          </div>
          <div className={styles.logos}>
          <a href="https://www.g2.com/products/timecamp/reviews">
          <img src="https://cdn-m.timecamp.com/img/greenbranding/g2crowd.svg" alt="logoCommunities3" />
          </a>
           
          </div>
          <div className={styles.logos}>
          <a href="https://www.getapp.com/project-management-planning-software/a/timecamp/reviews/">
          <img src="https://cdn-m.timecamp.com/img/greenbranding/getapp.svg" alt="logoCommunities4" />
          </a>
          
          </div>
        </div>
        <div className={styles.commLogo2}>
          <div className={styles.commHead}>
            <p>Loved by customers and recognized among online communities</p>
          </div>
          <div className={styles.commInt}>
            <p>While shiny and classy awards are always appreciated, it's the great feedback from our customers that makes us proud. Nothing beats knowing that we're helping improve our customer's work life.</p>
          </div>
          <div className={styles.logosItem}>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/leader-summer-reviews-signup.svg" alt="logo1" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/sourceforce.svg" alt="logo2" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/recommended.png" alt="logo3" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/easiest-to-use-icon-review-signup.svg" alt="logo4" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/front.png" alt="logo5" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <p className={styles.faqHead}>Frequently Asked Questions</p>
        <Accordion defaultIndex={[0]} allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontWeight={"600"} fontSize='xl'>
       What forms of payment do you accept?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign={"left"} >
    We accept all major credit cards - Visa, Mastercard, American Express, PayPal. We also accept wire transfers and check that cover annual payments over $2000. You'll receive an invoice for each charge made.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight={"600"} fontSize='xl'>
          Can I change my plans?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  textAlign={"left"}>
    You can switch plans, change the number of seats, upgrade or cancel your subscription any time you want or during the billing period, without any consequences. Additional charges will be automatically prorated. According to our policy, we do not grant any refunds.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight={"600"} fontSize='xl' >
      Do you offer discount ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign={"left"} >
    We offer a 10% discount when billed annually. You can also contact us for an additional discount for larger (greater than 50) volume of seats. Please contact us at sales@timecamp.com.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight={"600"}  fontSize='xl'>
         Do you offer discounts for non-profit organizations?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  textAlign={"left"}>
    We offer an additional 30% discount for non-profits, universities, students and schools. Please contact our support at help@timecamp.com with a copy of your 501(c)(3) paperwork.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontWeight={"600"} fontSize='xl'>
         Do you offer on-premise version of TimeCamp?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  textAlign={"left"}>
    Yes, for bigger organizations with more than 100 employees. For more information please contact us at sales@timecamp.com.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </div>
    </div>
  );
};

export { Price };
