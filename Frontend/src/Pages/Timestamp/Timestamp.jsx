import React from "react";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import styles from "./Timestamp.module.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useEffect } from "react";
import { FiRefreshCw, FiUser, FiMoreVertical } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { Input, Button, Box } from "@chakra-ui/react";
import {AddIcon,AttachmentIcon} from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Portal,Text,Flex
} from '@chakra-ui/react'
import { BsFillStopFill } from "react-icons/bs";




const Timestamp = () => {
  const [date, setDate] = React.useState("");
  const [play, setPlay] = React.useState(false);
  const [hide , setHide] = React.useState(false);
  const [todo , setTodo] = React.useState("");


  
  let data =[
    {"id" : 1, task : "nem"},
    {"id": 2 , task: "nem-111"}
  ]
  let tag =[
    {"id" : 1, tag : "imp"},
    {"id": 2 , tag: "not-imp"}
  ]


  const handleChange = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleSubmit=(task)=>{ 

    console.log(task);    
       setTodo(task);      
       if(!todo){
        setHide(!hide);
       }      
  }


  useEffect(() => {
    setDate(new Date());
  //  console.log(typeof date);
  }, []);

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
                  onChange={handleChange}
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
              {
              hide?<Box className={styles.text} >
                  <Text className={styles.textChild}>{todo}</Text>
              </Box>:<Input width={"100%"} marginLeft={"2%"}/>
              }
              </PopoverTrigger>
              {hide?<Flex className={styles.tags}>
                  <AttachmentIcon/>
                  <select className={styles.tagBtn}>
                    <option value="--">select a tag</option>
                    {tag.map((el)=>{
                      return <option key={el.id}>{el.tag}</option>
                    })}
                   return  
                  </select>
                 
                 
                  </Flex>:""}
              <Portal>
                <PopoverContent width={"xl"} >
                  <PopoverHeader className={styles.popContent}>
                    <Input width={"80%"}/>
                    <Button><AddIcon/></Button>
                  </PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                  </PopoverBody>
                  <PopoverFooter>
                    {data.map((el)=>{
                      return <div  className={styles.indtask} key={el.id}>
                          <Text marginLeft={"10px"} onClick={()=>handleSubmit(el.task)}>{el.task}</Text>
                      </div>
                    })}
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            </div>
            <Button
              marginRight={"2%"}
              rightIcon={play ? <BsFillStopFill /> : <FaPlay />}
              colorScheme={play ? "red" : "green"}
              variant="outline"
              onClick={handlePlay}
            >
              {play ? "STOP TIMER" : "START TIMER"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Timestamp };
