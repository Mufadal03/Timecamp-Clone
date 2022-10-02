import React from "react";
import styles from "./Sidebar.module.css";
import analyzeg from '../Images/analyze-gy.png';
import trackg from '../Images/track-gr.png';
import manageg from '../Images/manage-gy.png';
import tagg from '../Images/tag-gr.png';
import teamg from '../Images/team-gy.png';
import client1 from '../Images/clients-1.png';
import client2 from '../Images/clients-2.png';
import {Link} from "react-router-dom";

const  Sidebar =()=>{

  
    return(
      
            <div className={styles.sidebar}>
               <div className={styles.timecamp_logo}>
               <Link to='/timestamp'>
               <button>
               <img className={styles.logo3} src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/b6c746ae-3291-42e9-9999-8a9184285267.png?ixlib=react-9.0.3&ch=Width%2CDPR&auto=format&w=926" alt="timecamp" /></button>
               </Link>
               </div>
               <div className={styles.track}>
                 <p className={styles.type}>TRACK</p>
                 <Link to="/timestamp"><button> <img className={styles.logo} src={trackg} alt="clock" /></button></Link>
               </div>
               <div className={styles.analyze}>
              
                 <p className={styles.type}>ANALYZE</p>
                <button><img className={styles.logo} src={analyzeg} alt="analyze" /></button>
               </div>
               <div className={styles.manage}>
              
                 <p className={styles.type}>MANAGE</p>
                <Link to="/tags"><button><img className={styles.logo1} src={tagg} alt="tag" /></button> </Link>
                <Link to="/project"><button><img className={styles.logo1} src={manageg} alt="manageg" /></button></Link>             
               </div>
               <div className={styles.team}>
              
                 <p className={styles.type}>TEAM</p>
                 <button><img className={styles.logo1} src={teamg} alt="analyze" /></button>
               </div>
               <div className={styles.clients}>
              
                 <p className={styles.type}>CLIENTS</p>
                 <button><img className={styles.logo1} src={client1} alt="analyze" /></button> 
                 <button><img className={styles.logo1} src={client2} alt="analyze" /></button> 
               </div>
            </div>
      
    )
}


export {Sidebar};