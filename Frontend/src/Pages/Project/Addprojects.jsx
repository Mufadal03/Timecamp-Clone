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
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import Addtasks from "./Addtasks";
import Edittasks from "./Edittasks";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext";
import axios from "axios";

const Addprojects = () => {
  const [edit, setEdit] = useState(true);
  const projectcontext = useContext(ProjectContext);
  console.log(projectcontext);
  const [project, setProject] = useState("");
  console.log(project);

  const handleChange = (e) => {
    setProject(e.target.value);
  };

  const handleCreateProject = () => {
    axios
      .post("http://localhost:4000/projects/create", { project: project })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      minHeight={"100vh"}
      marginLeft={"3%"}
      width={"80%"}
      overflow={"scroll"}
    >
      <Box height={"24"} p="6" width="70%" zIndex={-1}>
        <Box display={"flex"} gap="15px" alignItems={"center"}>
          <Input
            focusBorderColor="#25cf60"
            border={"0.2px solid gray"}
            placeholder="Search"
            width="230px"
            onChange={handleChange}
          />

          <Button
            onClick={handleCreateProject}
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
      <CreateNewproject/>
      <Box display={"flex"}>
        <Addtasks />
        {edit ? (
          <Edittasks />
        ) : (
          <Box
            padding={"30px"}
            width={"40%"}
            marginLeft="1%"
            border="1px solid gray"
            borderRadius="9px"
          >
            Choose project or task to edit
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Addprojects;

const CreateNewproject = () => {
  return (
    <Box display={"flex"} gap="15px" alignItems={"center"}>
      <Input
        focusBorderColor="#25cf60"
        border={"0.2px solid gray"}
        placeholder="Enter the name for new project"
        width="230px"
        //onChange={handleChange}
      />

      <Button
        //onClick={handleCreateProject}
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
