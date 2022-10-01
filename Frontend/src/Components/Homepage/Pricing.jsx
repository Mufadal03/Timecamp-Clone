import React from "react";
import styles from "../../Pages/Pricing/Price.module.css";
const Pricing = () => {

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
      </div>
  )
}

export default Pricing