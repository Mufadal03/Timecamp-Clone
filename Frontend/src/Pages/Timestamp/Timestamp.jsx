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
  const [play, setPlay] = React.useState(false);
  const [hide, setHide] = React.useState(false);
  const [todo, setTodo] = React.useState("");
  const [startTime] = React.useState(new Date());
  const [EndTime , setEndTime] = React.useState("");

  let time = useRef(new Date());
  let StartTime = startTime.getHours() + ":" + startTime.getMinutes();
  

  let data = [
    { id: 1, task: "nem" },
    { id: 2, task: "nem-111" },
    {id : 3, task:"hello"}
  ];
  let tag = [
    { id: 1, tag: "imp" },
    { id: 2, tag: "not-imp" },
  ];

  const handleChange = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const handlePlay = () => {
    setPlay(!play);

  };

  const handleSubmit = (task) => {
    console.log(task);
    setTodo(task);
    if (!todo) {
      setHide(!hide);
    }
  };
 
  useEffect(() => {
    setDate(new Date());

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
                      {tag.map((el) => {
                        return <option key={el.id}>{el.tag}</option>;
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
                      {data.map((el) => {
                        return (
                          <div className={styles.indtask} key={el.id}>
                            <Text
                              marginLeft={"10px"}
                              onClick={() => handleSubmit(el.task)}
                            >
                              {el.task}
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
              rightIcon={play ? <BsFillStopFill /> : <FaPlay />}
              colorScheme={play ? "red" : "green"}
              variant="outline"
              onClick={handlePlay}
            >
              {play ? "STOP TIMER" : "START TIMER"}
            </Button>
          </div>

          <div className={styles.data}>
            {data.map((el) => {
              return (
                <div className={styles.childDiv} key={el.id}>
                  <div className={styles.div1}>
                    <div>{el.task}</div>
                    <Flex className={styles.tags}>
                      <AttachmentIcon />
                      <select className={styles.tagBtn}>
                        <option value="--">select a tag</option>
                        {tag.map((el) => {
                          return <option key={el.id}>{el.tag}</option>;
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
                    <div className={styles.fnctn}><button><RiDeleteBin5Line/></button></div>
                  </div>
                  <div className={styles.div3}>
                    <div className={styles.time}>
                         <div className={styles.start}>
                          {StartTime}
                         </div>
                         <div className={styles.hyphen}>-</div>
                         <div className={styles.start}>
                         {EndTime}
                         </div>
                    </div>
                    <div className={styles.stopwatch}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Timestamp };
