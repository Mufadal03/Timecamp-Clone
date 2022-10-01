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

const Addtasks = () => {
  const [isHovering, setIsHovering] = useState(false);
  const projectcontext = useContext(ProjectContext);
  console.log(projectcontext);
  const { edit, setEdit } = projectcontext;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box
      height={"24"}
      p="6"
      width="50%"
      // zIndex={-1}
      display={"flex"}
      justifyContent={"space-between"}
      border="0.5px solid gray"
      borderRadius={"10px"}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <Box>
        <Text width="58%">NEM111</Text>
      </Box>

      {isHovering && <Hovershow />}
    </Box>
  );
};

export default Addtasks;

const Hovershow = () => {
  const projectcontext = useContext(ProjectContext);
  const { edit, setEdit } = projectcontext;
  console.log(edit, setEdit);
  return (
    <Box display={"flex"} gap="3%">
      <Button
        onClick={() => setEdit(!edit)}
        color={"aliceblue"}
        bgColor="#25cf60"
        _hover={{ opacity: "0.7" }}
      >
        Add task
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
            onClick={() => setEdit(true)}
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
