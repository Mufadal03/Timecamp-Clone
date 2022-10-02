import React, { useState } from "react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { AiFillEdit } from "react-icons/ai";
import { TopNavbar } from "./TopNavbar.jsx";
import { useEffect } from "react";
import { Sidebar } from "./Sidebar.jsx";
import axios from "../../axios/axios"
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Image,
  Alert,
  AlertIcon
} from "@chakra-ui/react";


const Tags = () => {
  const baseUrl = "http://localhost:4000/tags";

  const [looding, setLooding] = useState(false);
  const [check, setcheck] = useState(false);
  const [textupdate, setTextupdate] = useState("");
  const [text, setText] = useState("");
  const [tagdata, setTagData] = useState([]);
  const [alert, setAlert] = useState(false);
  const [resShow, setResShow] = useState("");



  const token = localStorage.getItem("token"); 
  
  const getData = () => {
    setLooding(true);

    axios.get('/tags',
    {headers :{Authorization: `Bearer ${token}`}
  })
    .then((res) => {
      setLooding(false);
      console.log(res.data)
      setTagData(res.data);
      console.log("after delete data .....")
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    console.log("before delete ...... data")
    console.log(tagdata)
    setLooding(true);
    setAlert(false)

    axios.delete('/tags/' + id,{ headers :{Authorization: `Bearer ${token}`}})
    .then((res) => {
      setAlert(true)
      setLooding(false);
      setResShow("Tags Delete successfully")
      window.location.reload();

  })
  .catch((err) => console.error(err))
}

  const handleTasks = () => {
    setLooding(true);
    setAlert(false)
    const payload = { tagTitle: text };

    axios.post('/tags/create',payload,{ headers :{Authorization: `Bearer ${token}`}})
    .then((res) => {
      setLooding(true);
      setAlert(true)
      setResShow("Data added sussfully")
      getData();
      })
      .catch((err) => console.log(err));
  };
  const handleAdd = () => {
    if (check == false) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  };

  const handleupdate = (id) => {
    setAlert(false)
    setLooding(true);
    console.log(textupdate);
    const payload = { tagTitle: textupdate };
    console.log(id);

    axios.patch('/tags/'+id ,payload,{ headers :{Authorization: `Bearer ${token}`}})
      .then((res) => {
        setAlert(true)
        setResShow(res.data.msg)
        setLooding(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box w="100%">
        <Flex>
        <Sidebar />
        <Box>
        <TopNavbar />
        <Box w="50%" m="auto" pt="1rem" pb="1rem">
          <Box pb="2rem">
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
            <Box pb="3rem" pt="1rem">
              <Text>
                Manage your tags, like list of customers or activities. All
                workspace members can assign tags to time entries, when they
                track time. Project managers can set lists of tags for projects.
                Reports can be filtered and grouped by tags.
              </Text>
            </Box>
            { alert == true ? 
            <Box pb="1.5rem" pt="-1rem">
            <Alert status="success" w="50%" m="auto" borderRadius="1rem">
              <AlertIcon  />
              {resShow}
            </Alert> 
            </Box>: null}
            {looding === true ? (
              <Image
                ml="auto"
                mr="auto"
                display="block"
                pb="3rem"
                src="https://app.timecamp.com/res/css/images/loader.gif"
              />
            ) : null}
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
                        onClick={() => handleTasks()}
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

          {tagdata.length > 0 &&
            tagdata.map((e) => {
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
                          defaultValue={e.tagTitle}
                          onChange={(e) => setTextupdate(e.target.value)}
                        />
                      </Box>
                      {/* ------ remove ----------- */}
                      <Box mr={"1rem"}>
                        <Flex justifyContent={"space-between"}>
                          <Box pr="1rem" pt="0.4rem" cursor="pointer">
                            <AiFillEdit onClick={() => handleupdate(e._id)} />
                          </Box>
                          <Box cursor="pointer">
                            <DeleteIcon onClick={() => handleDelete(e._id)} />
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              );
            })}
        </Box>
        </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Tags;
