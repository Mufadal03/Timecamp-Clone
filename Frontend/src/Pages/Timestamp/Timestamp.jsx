import React from "react";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import styles from "./Timestamp.module.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useRef } from "react";
import { FiRefreshCw, FiUser, FiMoreVertical } from "react-icons/fi";
import { FaPlay ,FaRegClone} from "react-icons/fa";
import { Input, Button, Box } from "@chakra-ui/react";
import { AddIcon, AttachmentIcon } from "@chakra-ui/icons";
import {GrPieChart} from "react-icons/gr";
import {GiBackwardTime} from "react-icons/gi";
import {RiDeleteBin5Line} from "react-icons/ri";
import {BiCalendar,BiDollar} from "react-icons/bi";
import axios from "../../axios/axios";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Portal,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BsFillStopFill } from "react-icons/bs";

const Timestamp = () => {
  const [date, setDate] = React.useState("");
  const [start ,setStart] = React.useState("");
  const [stop , setStop] = React.useState("");
  const [play, setPlay] = React.useState(true);
  const [hide, setHide] = React.useState(false);
  const [todo, setTodo] = React.useState("");
  const [working , setWorking] = React.useState({});
  const [timerId ,setTimerId] =React.useState(null);
  const [timer ,setTimer] = React.useState(1);
  const [tags , setTags] = React.useState([]);
  const [selected , setSelected] = React.useState("");
  const [projects , setProjects ] = React.useState([]);
  const [duration , setDuration] = React.useState("");

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }

  const startingTime =()=>{

    if(!timerId){

        let id = setInterval(() =>{
            setTimer((prev)=>prev+1000);
        },1000);
        setTimerId(id);
        
    }
    
};
const pauseTimer =()=>{
    clearInterval(timerId);     
    setTimerId(null);

};


  const handleDate = (e) => {

    let now = new Date();
    let day =now.toLocaleDateString();
    setDate(day);
  };

  const handlePlay = () => {

    setPlay(!play);

    if(play === true){
      startingTime();
      
    }
    else if(play === false){
      pauseTimer();
      let endTime = new Date();
      let end = endTime.getHours() + ":" + endTime.getMinutes();
      setStop(end);
      let timings = msToTime(timer);
      setDuration(timings);

      const token =localStorage.getItem("token");

      axios.patch(`/projects/${working._id}`,{
        startTime : start,
        endTime:stop, 
        tags:selected     
   }, {headers : {Authorization :`Bearer ${token}`}},).then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  };

  const handleSubmit = (el) => {
    // console.log(el.task);
    setTodo(el.title);
    if (!todo) {
      setHide(!hide);
    }
    setWorking(el);
    const startTime = new Date();
    let starting = startTime.getHours() + ":" + startTime.getMinutes();
    setStart(starting);
  };
 
  const fetchTags=()=>{
      const token =localStorage.getItem("token")
    axios.get("/tags" , {headers : {Authorization :`Bearer ${token}` }})
    .then((res) =>{
      console.log("projects")
      // console.log(res.data);
      setTags(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const fetchProjects =()=>{
    const token =localStorage.getItem("token")
    axios.get("/projects" ,{headers : {Authorization :`Bearer ${token}` }})
    .then((res)=>{
      // console.log(res.data);
      setProjects(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

const reset =()=>{
    clearInterval(timerId);
 
    setTimer(0);
    setTimerId(null);
};

   const handleDelete=()=>{
       
    setWorking({});
    reset();
 
  }

const selectTag=(e)=>{
     setSelected(e.target.value);
}
  useEffect(() => {

    fetchTags();
    fetchProjects();
    console.log(duration);
  }, [duration]);


  return (
    <div className={styles.mainDiv}>
      <Sidebar />
      <div className={styles.mainPage}>
        <TopNavbar />

        <div className={styles.workingDiv}>
          <div className={styles.Details}>
            <div className={styles.calenderdiv}>
              <button className={styles.calenderPrev}>
                <div>
                  <MdArrowBackIos style={{ alignContent: "center" }} />
                </div>
              </button>
              <button className={styles.CalenderDate}>
                <input
                  type="date"
                  className={styles.Calender}
                  onChange={handleDate}
                />
              </button>
              <button className={styles.calenderNext}>
                <div>
                  <MdArrowForwardIos />
                </div>
              </button>
            </div>
            <div className={styles.editing}>
              <div className={styles.type}>
                <button className={styles.day}>Day</button>
                <button>Calendar</button>
              </div>
              <div className={styles.refresh}>
                <button>
                  <FiRefreshCw />
                </button>
              </div>
              <div className={styles.people}>
                <button>
                  <FiUser />
                </button>
              </div>
              <div className={styles.bulk}>
                <button>Bulk edit</button>
              </div>
              <div className={styles.sort}>
                <button>
                  <FiMoreVertical />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.Timer}>
            <div className={styles.leftdiv}>
              <Popover>
                <PopoverTrigger>
                  {hide ? (
                    <Box className={styles.text}>
                      <Text className={styles.textChild}>{todo}</Text>
                    </Box>
                  ) : (
                    <Input width={"100%"} marginLeft={"2%"} />
                  )}
                </PopoverTrigger>
                {hide ? (
                  <Flex className={styles.tags}>
                    <AttachmentIcon />
                    <select className={styles.tagBtn}>
                      <option value="--">select a tag</option>
                      {tags.map((el) => {
                        return <option key={el._id}>{el.tagTitle}</option>;
                      })}
                    </select>
                  </Flex>
                ) : (
                  ""
                )}
                <Portal>
                  <PopoverContent width={"xl"}>
                    <PopoverHeader className={styles.popContent}>
                      <Input width={"80%"} />
                      <Button>
                        <AddIcon />
                      </Button>
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody></PopoverBody>
                    <PopoverFooter>
                      {projects.map((el) => {
                        return (
                          <div className={styles.indtask} key={el._id}>
                            <Text
                              marginLeft={"10px"}
                              onClick={() => handleSubmit(el)}
                            >
                              {el.title}
                            </Text>
                          </div>
                        );
                      })}
                    </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </div>
            <Button
              marginRight={"2%"}
              rightIcon={play ? <FaPlay  /> : <BsFillStopFill /> }
              colorScheme={play ? "green" : "red"}
              variant="outline"
              onClick={handlePlay}
              disabled={!working._id}
            >
              {play ? "START TIMER" : "STOP TIMER"}
            </Button>
          </div>

          <div className={styles.data}>
            
          { working._id && <div className={styles.childDiv} key={working._id}>
                  <div className={styles.div1}>
                    <div>{working.title}</div>
                    <Flex className={styles.tags}>
                      <AttachmentIcon />
                      <select className={styles.tagBtn} onChange={selectTag}>
                        <option value="--">select a tag</option>
                        {tags.map((el) => {
                          return <option key={el._id}>{el.tagTitle}</option>;
                        })}
                      </select>
                    </Flex>
                  </div>
                  <div className={styles.div2}>
                    <div className={styles.fnctn}><button><GrPieChart/></button></div>
                    <div className={styles.fnctn}><button><BiCalendar/></button></div>
                    <div className={styles.fnctn}><button><GiBackwardTime/></button></div>
                    <div className={styles.fnctn}><button><BiDollar/></button></div>
                    <div className={styles.fnctn}><button><FaRegClone/></button></div>
                    <div className={styles.fnctn}><button onClick={handleDelete} disabled={play === false}><RiDeleteBin5Line/></button></div>
                  </div>
                  <div className={styles.div3}>
                    <div className={styles.time}>
                         <div className={styles.start} >
                        {start}
                         </div>
                         <div className={styles.hyphen}>-</div>
                         <div className={styles.start} >
                         {stop}
                         </div>
                    </div>
                    <div className={styles.stopwatch}>
                      <div className={styles.timerSection}>
                      {msToTime(timer)}
                      </div>
                      <div className={styles.watchBtn}>
                      <button  onClick={handlePlay}>
                        {play ?  <FaPlay /> : <BsFillStopFill /> }
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                }
          </div>
        </div>
      </div>
    </div>
  );
};

export { Timestamp };
