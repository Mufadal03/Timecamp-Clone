import {
  Box,
  Button,
  Input,
  Popover,
  PopoverBody,
  Text,
  PopoverContent,
  PopoverTrigger,Flex
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import Addtasks from "./Addtasks";
import Edittasks from "./Edittasks";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";
import axios from "../../axios/axios";
import { Sidebar } from "../Timestamp/Sidebar";
import { TopNavbar } from "../Timestamp/TopNavbar";

const Addprojects = () => {
  const [edit, setEdit] = useState(true);
  const projectcontext = useContext(ProjectContext);
  //console.log(projectcontext);
  const [project, setProject] = useState("");
  //console.log(project);
  const [createProject, setCreateProject] = useState(false);

  const handleChange = (e) => {
    setProject(e.target.value);
  };

  const handleCreateProject = () => {
    axios
      .post(
        "/projects/create",
        { title: project },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <Box>
        <Flex>
      <Sidebar/> 
      <Box
        minHeight={"100vh"}
       
        width={"100%"}
        overflow={"scroll"}
        border={"1px solid black"}
      >
        <TopNavbar />

        <Box
          height={"24"}
          p="6"
          width="60%"
          border={"1px solid black"}
          zIndex={-1}
        >
          <Box display={"flex"} gap="15px" alignItems={"center"}>
            <Input
              focusBorderColor="#25cf60"
              border={"0.2px solid gray"}
              placeholder="Search"
              width="20%"
              onChange={handleChange}
            />

            <Button
              onClick={() => setCreateProject(!createProject)}
              color={"aliceblue"}
              bgColor="#25cf60"
              _hover={{ opacity: "0.7" }}
            >
              Add project
            </Button>

            <Popover placement="bottom-start" isLazy>
              <PopoverTrigger>
                <Box display={"flex"}>
                  <FiFilter />
                  <Text>Filter</Text>
                  <HiChevronDown />
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
                    All tasks
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
                      My tasks
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Button
              variant={"outline"}
              fontWeight="normal"
              bgColor={"#fff"}
              color="gray.600"
            >
              <AiOutlineArrowsAlt size={"20px"} />
            </Button>
            <Button
              variant={"outline"}
              fontWeight="normal"
              bgColor={"#fff"}
              color="gray.600"
            >
              Archived
            </Button>

            <Popover placement="bottom-start" isLazy>
              <PopoverTrigger>
                <Button
                  variant={"outline"}
                  fontWeight="normal"
                  bgColor={"#fff"}
                  color="gray.600"
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
                    Import From CSV
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
                      Import From add-ons
                    </Text>
                    <Text fontSize={"10px"} color="gray.600">
                      Trello,Basecamp,Asana,Insightly,jira,podio and more...
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        {createProject && <CreateNewproject />}
        <Box display={"flex"}>
          <Addtasks />
          <Box>
            {edit ? (
              <Edittasks />
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
          </Box>
        </Box>
      </Box>
      </Flex>
      </Box>
    </Box>
  );
};

export default Addprojects;

const CreateNewproject = () => {
  const [project, setProject] = useState("");
  const projectcontext = useContext(ProjectContext);
  const { gettasks, setTasklist } = projectcontext;
  //console.log(project);

  const handleChange = (e) => {
    setProject(e.target.value);
  };

  const handleCreateProject = () => {
    axios
      .post(
        "/projects/create",
        { title: project },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
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
    <Box
      display={"flex"}
      gap="15px"
      marginLeft={"2%"}
      marginBottom={"2%"}
      alignItems={"center"}
    >
      <Input
        focusBorderColor="#25cf60"
        border={"0.2px solid gray"}
        placeholder="Enter the name for new project"
        width="20%"
        onChange={handleChange}
      />

      <Button
        onClick={handleCreateProject}
        color={"aliceblue"}
        bgColor="#25cf60"
        _hover={{ opacity: "0.7" }}
      >
        Create new project
      </Button>

      <Button
        //onClick={handleCreateProject}
        color={"aliceblue"}
        bgColor="#25cf60"
        _hover={{ opacity: "0.7" }}
      >
        Cancel
      </Button>
    </Box>
  );
};
