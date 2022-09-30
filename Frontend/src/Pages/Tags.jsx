import React, { useState } from "react";

import { DeleteIcon, AddIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

let data = [];
let subdata = [];
let chidata = [];
const Tags = () => {
  const [check, setcheck] = useState(false);
  const [subcheck, setsubcheck] = useState(false);
  const [childcheck, setchildcheck] = useState(false);
  const [text, setText] = useState("");
  const [subtext, setsubtext] = useState("");
  const [child, setchild] = useState("");

  const handlecheckchildata = () => {
    if (childcheck === true) {
      setchildcheck(false);
    } else {
      setchildcheck(true);
    }
  };

  const handleTasks = () => {
    // ---  links ---
    data.push(text);
    console.log(data);
  };
  const handleAdd = () => {
    if (check == false) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  };
  const handleSubSaskCheck = () => {
    if (subcheck == false) {
      setsubcheck(true);
    } else {
      setsubcheck(false);
    }
  };

  const handlechild = () => {};
  console.log(data);

  return (
    <>
      <Box w="100%">
        <Box w="50%" m="auto" pt="2rem" pb="1rem">
          <Box pb="3rem">
            <Box>
              <Flex justifyContent="right">
                <Button
                  onClick={handleAdd}
                  bg="#4BB063"
                  p="1rem"
                  borderRadius="1rem"
                  color="white"
                >
                  + Add tag list
                </Button>
              </Flex>
            </Box>
            <Box pb="4rem" pt="1rem">
              <Text>
                Manage your tags, like list of customers or activities. All
                workspace members can assign tags to time entries, when they
                track time. Project managers can set lists of tags for projects.
                Reports can be filtered and grouped by tags.
              </Text>
            </Box>
            {check === true ? (
              <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                p="0.8rem 1rem"
                borderRadius="0.7rem"
                bg="#f8f8f8"
              >
                <Flex justifyContent={"space-between"}>
                  <Input
                    bg="#f8f8f8"
                    type="text"
                    placeholder="New list name"
                    outline="none"
                    variant="Flushed"
                    focusBorderColor="lime"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <Flex justifyContent={"space-between"}>
                    <Box pr="1rem">
                      <Button
                        bg="#4BB063"
                        p="0.5rem 1rem"
                        borderRadius="0.5rem"
                        color="white"
                        onClick={handleTasks}
                      >
                        Add
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
                        p="0.5rem 2rem "
                        borderRadius={"0.5rem"}
                        onClick={handleAdd}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            ) : null}
          </Box>

          {data.length > 0 &&
            data.map((e) => {
              return (
                <Box pb="1rem">
                  <Box
                    p="1rem"
                    borderRadius="0.5rem"
                    shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
                    bg="#f8f8f8"
                  >
                    <Flex justifyContent={"space-between"}>
                      <Box>
                        <Input
                          bg="#f8f8f8"
                          type="text"
                          placeholder="New list name"
                          outline="none"
                          variant="Flushed"
                          value={e}
                          onChange={handlecheckchildata}
                        />
                      </Box>
                      <Box mr={"1rem"}>
                        <Flex justifyContent={"space-between"}>
                          <Box pr="0.8rem" cursor="pointer">
                            <AddIcon onClick={handleSubSaskCheck} />
                          </Box>
                          <Box cursor="pointer">
                            <DeleteIcon />
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>

                  {subcheck === true ? (
                    <Box borderRadius={"1rem"} pb="1rem" pt="1rem">
                      <Flex justifyContent="space-between">
                        <Box>
                          <Input
                            w="250px"
                            borderRadius="1rem"
                            p="1rem"
                            type="text"
                            placeholder=" New tag new"
                            bg="#f8f8f8"
                            onChange={(e) => setchild(e.target.value)}
                          />
                        </Box>
                        <Box>
                          <Box pb="1rem">
                            <Box pr="1rem">
                              <Button
                                bg="#4BB063"
                                p="0.5rem 1rem"
                                borderRadius="0.5rem"
                                color="white"
                                onClick={handleTasks}
                              >
                                Add
                              </Button>
                            </Box>
                            <Box>
                              <Button
                                p="0.5rem 1.2rem "
                                borderRadius={"0.5rem"}
                                onClick={handleSubSaskCheck}
                              >
                                Cancel
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                  ) : null}
                </Box>
              );
            })}

          <Box></Box>

          <Box>
            <Flex justifyContent="space-between">
              <Box>
                <Text>sdfghsdf</Text>
              </Box>
              <Box>
                <DeleteIcon cursor="pointer" />
              </Box>
            </Flex>
          </Box>

          <Box>
            <Flex justifyContent="space-between">
              <Box>
                <Text>sdfghsdf</Text>
              </Box>
              <Box>
                <DeleteIcon cursor="pointer" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Tags;
