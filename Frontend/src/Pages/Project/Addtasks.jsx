import {
  Box,
  Button,
  Popover,
  PopoverBody,
  Text,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GrAnalytics } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { TbTriangleInverted } from "react-icons/tb";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";
import axios from "../../axios/axios";

import { useEffect } from "react";

const Addtasks = () => {
  const [isHovering, setIsHovering] = useState(false);
  //const [tasklist, setTasklist] = useState([]);
  const projectcontext = useContext(ProjectContext);
  //console.log(projectcontext);
  const { tasklist, gettasks } = projectcontext;

  useEffect(() => {
    gettasks();
  }, []);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(true);
  };

  return (
    <Box
      height={"1%"}
      p="6"
      width="50%"
      
      justifyContent={"space-between"}
      border="1px solid green"
      display={"flex"}
      flexDirection={"column"}
      gap={"5%"}
      borderRadius={"10px"}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      {tasklist.length > 0 &&
        tasklist.map((el, i) => (
          <Box display={"flex"} key={el.id} marginTop={"3%"}>
            {" "}
            <Text width="58%">{el.title}</Text>
            {isHovering && <Hovershow info={el} />}
          </Box>
        ))}
    </Box>
  );
};

export default Addtasks;

const Hovershow = ({ info }) => {
  //console.log("info",info)
  const projectcontext = useContext(ProjectContext);
  const { edit, setEdit, addtask, setAddtask, id, setId, userId, setuserId,setTasklist,gettasks } =
    projectcontext;
 //console.log(edit, addtask, id, userId);
 // console.log(info._id, info.userId);
  const handletask = () => {
    setAddtask(true);
    setEdit(false);
    setId(info._id);
    setuserId(info.userId);
  };

  const handledit = () => {
    setAddtask(false);
    setEdit(true);
    setId(info._id);
    setuserId(info.userId);
  };

  const handleDelete = () => {
    axios
      .delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("response", res.data);
        setTasklist(res.data);
        gettasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box display={"flex"} gap="3%">
      <Button
        onClick={handletask}
        color={"aliceblue"}
        bgColor="#25cf60"
        _hover={{ opacity: "0.7" }}
      >
        Add tasks
      </Button>

      <Button
        variant={"outline"}
        fontWeight="normal"
        bgColor={"#fff"}
        color="gray.600"
      >
        <GrAnalytics size={"20px"} />
      </Button>

      <Popover placement="bottom-start" isLazy>
        <PopoverTrigger>
          <Button
            variant={"outline"}
            fontWeight="normal"
            bgColor={"#fff"}
            color="gray.600"
            onClick={handledit}
          >
            <BsThreeDots />
          </Button>
        </PopoverTrigger>
        <PopoverContent width="200px">
          <PopoverBody p="2">
            <Text
              fontWeight={"semibold"}
              color={"blackAlpha.900"}
              _hover={{
                bgColor: "#25cf60",
                cursor: "pointer",
                borderRadius: "5px",
                color: "aliceblue",
              }}
              p="2"
            >
              Change color
            </Text>
            <Box
              _hover={{
                bgColor: "#25cf60",
                cursor: "pointer",
                borderRadius: "5px",
                color: "aliceblue",
              }}
              p="2"
            >
              <Text
                _hover={{ color: "aliceblue" }}
                fontWeight={"semibold"}
                color={"blackAlpha.900"}
              >
                Clone it
              </Text>
              <Text fontSize={"10px"} color="gray.600">
                Clone this project with substasks
              </Text>
            </Box>

            <Text
              fontWeight={"semibold"}
              color={"blackAlpha.900"}
              _hover={{
                bgColor: "#25cf60",
                cursor: "pointer",
                borderRadius: "5px",
                color: "aliceblue",
              }}
              p="2"
              onClick={handleDelete}
            >
              Delete
            </Text>

            <Text
              fontWeight={"semibold"}
              color={"blackAlpha.900"}
              _hover={{
                bgColor: "#25cf60",
                cursor: "pointer",
                borderRadius: "5px",
                color: "aliceblue",
              }}
              p="2"
            >
              Move
            </Text>

            <Text
              fontWeight={"semibold"}
              color={"blackAlpha.900"}
              _hover={{
                bgColor: "#25cf60",
                cursor: "pointer",
                borderRadius: "5px",
                color: "aliceblue",
              }}
              p="2"
            >
              Archive
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Button
        variant={"outline"}
        fontWeight="normal"
        bgColor={"#25cf60"}
        color="gray.600"
      >
        <TbTriangleInverted size={"20px"} color="white" bgColor="white" />
      </Button>
    </Box>
  );
};
