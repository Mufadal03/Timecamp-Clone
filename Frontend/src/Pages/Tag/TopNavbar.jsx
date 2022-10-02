import React from "react";
import styles from './Topnavbar.module.css';

const TopNavbar =()=>{

    return(
        <div className={styles.mainDiv} >      
            <div className={styles.topBar}>
                  <div className={styles.dayLeft}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.-gqO_DmGNqenzpMoIfLYWwHaHa&pid=Api&P=0" alt="sandClock" />
                    <p className={styles.days}>10 days</p>
                    <p>left in your Pro trial</p>
                  </div>
                  <div className={styles.Btn}>
                    <button>Subscribe to Pro</button>
                  </div>
                  <div className={styles.Btn1}>
                  <button>Book a Demo</button>
                  </div>
            </div>
            <div className={styles.bottomBar}>
                 <div className={styles.title}>
                    <p>Tags</p>
                 </div>
                 <div className={styles.userSection}>
                    <button>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.5ScCoOfxgfDnm7teabWjkwAAAA&pid=Api&P=0" alt="" />
                    </button>
                    <button>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.GDwRoQbAMKqRROV_YxqHkQHaHa&pid=Api&P=0" alt="" />
                    </button>
                    <button>
                        <img src="http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-add-icon.png" alt="" />
                    </button>
                    <button>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.1yoSL-WO0YU5mQKROudvswHaHa&pid=Api&P=0" alt="" />
                    </button>
                 </div>
            </div>
        </div>
    )
}
export {TopNavbar};