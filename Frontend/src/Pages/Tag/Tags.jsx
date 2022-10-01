import React, { useState } from "react";

import { DeleteIcon, AddIcon,  } from "@chakra-ui/icons";
import { AiFillEdit } from "react-icons/ai";

import {
  Box,
  Flex,
  Text,
  Input,
  Button,

} from "@chakra-ui/react";
import { useEffect } from "react";

const Tags = () => {
  
  const baseUrl = "http://localhost:4000/tags"


  const [check, setcheck] = useState(false);
  const [textupdate, setTextupdate] = useState("");
  const [text, setText] = useState("");
 const  [tagdata, setTagData] = useState([])

  // const token = localStorage.getItem("token"); <----- add hare
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM3MGNmZWUxMWZjYjZmZjM1MGM1MGIiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE2NjQ2MzUyMDh9.rI6Togmr3lEqz038FYXOsv5Q-CqFmiCf-1vqgrdR6Aw"
  
  
  const getData =()=>{
      fetch(baseUrl + "/",{
          method:"GET",
          headers:{'Authorization': `Bearer ${token}`},
      })
      .then((res) => res.json())
          .then((res) => setTagData(res))
          .catch((err) => console.log(err))
  }
  
  useEffect(()=>{
      getData()
  },[])


const handleDelete = (id) =>{
    fetch(baseUrl + "/" +id,{
        method: "DELETE",
        headers:{'Authorization': `Bearer ${token}`}
    })
    .then((res) => res.json())
    .then((res) =>
    {
      console.log(res)
      alert(res.msg)
      window.location.reload()
    } )
    .catch((err) => console.error(err))
}


  const handleTasks = () => {
    
    const payload = {"tagTitle": text}
    fetch("http://localhost:4000/tags/create",{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'},
      body:JSON.stringify(payload)
  })
  .then(res => {
    let r = res.json()
    setTagData(r)
    getData()
  })
  .catch((err) => console.log(err))
    
  };
  const handleAdd = () => {
    if (check == false) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  };

  const handleupdate =(id) =>{
    console.log(textupdate)
    const payload = {"tagTitle": textupdate}
    console.log(id)

    fetch("http://localhost:4000/tags/"+`${id}`,{
      method:"PATCH",
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
        ,
      body:JSON.stringify(payload)
  })
  .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => console.log(err))

  }

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
                        onClick={()=> handleTasks()}
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

          {tagdata.length > 0  &&
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
                            <AiFillEdit onClick={()=>handleupdate(e._id)} />
                          </Box>
                          <Box cursor="pointer">
                            <DeleteIcon onClick={() => handleDelete(e._id)}/>
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
    </>
  );
};

export default Tags;
