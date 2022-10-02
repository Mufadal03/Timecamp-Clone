import {
  Box,
  Button,
  Input,
  Popover,
  PopoverBody,
  Text,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";
import axios from "../../axios/axios";

const Edittasks = () => {
  const projectcontext = useContext(ProjectContext);
  const {
    edit,
    setEdit,
    addtask,
    setAddtask,
    id,
    setId,
    userId,
    setuserId,
    tasklist,
    gettasks,
    setTasklist,
  } = projectcontext;
  //console.log(edit,  addtask, id,  userId, );
  const [edittask, setEdittask] = useState("");
  const [editdesc, setEditdesc] = useState("");
  const remove = () => {
    setAddtask(false);
    setEdit(false);
  };

  const handleEditTask = (e) => {
    setEdittask(e.target.value);
  };

  const handleEditDesc = (e) => {
    setEditdesc(e.target.value);
  };

  const handleEditSubmit = () => {
    axios
      .patch(
        `/projects/${id}`
        ,
        { title: edittask },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
        setTasklist(res.data);
        gettasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {edit || addtask ? (
        <Box
          border={"1px solid black"}
          marginLeft="1%"
          padding="10px"
          borderRadius={"8px"}
        >
          <Box
            display={"flex"}
            marginBottom="3%"
            justifyContent="space-between"
          >
            <Text>{edit ? "Edit Task" : "Add Tasks"}</Text>
            <Box onClick={remove} marginRight={"0.5%"}>
              <IoCloseOutline />
            </Box>
          </Box>

          <Input
            bgColor={"#e5ecfb"}
            onChange={handleEditTask}
            border="1px solid gray"
          ></Input>
          <Box color={"gray"} borderBottom="1px solid gray"></Box>
          <Box
            marginTop={"6%"}
            height="50vh"
            width={"100%"}
            overflow={"scroll"}
          >
            <Box
              display={"flex"}
              justifyContent="space-between"
              marginTop="10px"
            >
              <Box width={"20%"} display="flex" justifyContent={"flex-start"}>
                <Text>People</Text>
              </Box>
              <Box width="70%">
                <Button
                  bgColor={"white"}
                  border="1px solid gray"
                  borderRadius={"5px"}
                  marginRight={"3%"}
                >
                  Assign group
                </Button>
                <Button
                  bgColor={"white"}
                  border="1px solid gray"
                  borderRadius={"5px"}
                >
                  Assign people
                </Button>
              </Box>
            </Box>

            <Box
              display={"flex"}
              marginTop={"6%"}
              justifyContent="space-between"
            >
              <Box width={"30%"} display="flex" justifyContent={"flex-start"}>
                <Text>Sandipgk2999</Text>
              </Box>
              <Box width={"70%"}>
                <Button
                  bgColor={"white"}
                  border="1px solid gray"
                  borderRadius={"5px"}
                  marginRight="4%"
                >
                  Project Manager
                </Button>

                <Button
                  bgColor={"white"}
                  border="1px solid gray"
                  borderRadius={"5px"}
                >
                  <RiDeleteBin5Line />
                </Button>
              </Box>
            </Box>
            <Box
              color={"gray"}
              marginTop="2%"
              borderBottom="1px solid gray"
            ></Box>
            <Box display={"flex"} marginTop="6%" justifyContent="flex-start">
              {" "}
              <Text>Description</Text>
            </Box>

            <Input
              marginTop="3%"
              placeholder="Click here to edit description..."
              onChange={handleEditDesc}
            ></Input>
            <Box
              color={"gray"}
              marginTop="2%"
              borderBottom="1px solid gray"
            ></Box>
            <Box display={"flex"} marginTop="6%" justifyContent="flex-start">
              <Text>Budget</Text>
              <Box marginTop={"5px"} marginLeft="5px">
                <FiSettings />
              </Box>
            </Box>

            <Box
              display={"flex"}
              justifyContent="space-between"
              marginBottom={"3%"}
              marginTop="3%"
            >
              <Popover placement="bottom-start" isLazy>
                <PopoverTrigger>
                  <Box display={"flex"}>
                    <Button
                      variant={"outline"}
                      fontWeight="normal"
                      bgColor={"#fff"}
                      color="gray.600"
                    >
                      Estimated fee
                      <HiChevronDown />
                    </Button>
                  </Box>
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
                      Estimated hours
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
                        Estimated fee
                      </Text>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <Input width={"50%"}></Input>
            </Box>
            <Box display={"flex"}>
              <input type="checkbox" />
              <Text>Time from this task is billable by default</Text>
            </Box>

            <Box
              color={"gray"}
              marginTop={"3%"}
              borderBottom="1px solid gray"
            ></Box>
            <Box display={"flex"} marginTop={"5%"} justifyContent="flex-start">
              <Text>Tags</Text>
            </Box>

            <Box
              display={"flex"}
              marginTop={"4%"}
              justifyContent="space-between"
            >
              <Text fontSize={"13px"} width="60%">
                All tags allowed to be selected when users track time.
              </Text>
              <Button
                bgColor={"white"}
                border="1px solid gray"
                borderRadius={"5px"}
              >
                Define tag list
              </Button>
            </Box>

            <Box
              color={"gray"}
              marginTop={"3%"}
              borderBottom="1px solid gray"
            ></Box>
            <Button
              bgColor={"white"}
              border="1px solid gray"
              borderRadius={"5px"}
              width="100%"
              marginTop={"5%"}
              marginBottom="6%"
            >
              Enable keywords
            </Button>
            <Box></Box>
          </Box>
          <Box color={"gray"} borderBottom="1px solid gray"></Box>
          <Box display={"flex"} marginTop={"4%"}>
            <Button
              marginRight={"3%"}
              onClick={handleEditSubmit}
              bgColor="#25cf60"
              color={"white"}
            >
              Save
            </Button>
            <Button
              bgColor={"white"}
              border="1px solid gray"
              borderRadius={"5px"}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          padding={"30px"}
          width={"100%"}
          marginLeft="1%"
          border="1px solid gray"
          borderRadius="9px"
        >
          Choose project or task to edit
        </Box>
      )}
    </>
  );
};

export default Edittasks;
