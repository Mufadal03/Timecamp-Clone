import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "./Loginavbar";
import { FcGoogle } from "react-icons/fc";
import styles from "../Styles/Signup.module.css";
import { useRef } from "react";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";
//import {useNavigate} from "react-router-dom";
export const Signup = () => {
  const [response, setResponse] = useState("")
  const [error,setError] = useState("")
  const [userExist, setUserExist] = useState(false)
  const [passError, setPassError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [serverError,setServerError] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [isEmpty, setEmpty] = useState(false)
  const navigate = useNavigate()
  const[isLoading,setLoading]= useState(false)
  const [formData, setFromData] = useState({
    email: "",
    password:""
  })

  useEffect(() => {
    console.log(response)
    if (response[0] == "U") {
      setError("User already exist")
      setUserExist(true)
    }
    else if (response[0] == "P") {
      setError("Password should be greater than 8")
      setPassError(true)
    }
    else if (response[0] == "E") {
      setError("Email is invalid")
      setEmailError(true)
    }
    else if(response=="Signup Successfull"){
      navigate("/login")
    }
    else {
      setError("Something went wrong")
      setServerError(true)
    }
  }, [clicked])
  
  const handleChange = (e) => {
    const { name, value } = e.target
       setFromData({
         ...formData,
         [name]:value
       })
    }
    const handleSubmit = () => {
      if (formData.email && formData.password) {
        setEmpty(false)
        setLoading(true)
        axios.post("/user/signup", formData)
          .then((r) => setResponse(r.data.msg))
          .catch((e) => console.log(e))
          .finally(() => setClicked(!clicked),setLoading(false))
      }
      else setEmpty(true)
    }
    return (
      <div style={{ paddingBottom: "20px" }}>
        <Navbar />
        <Box className={styles.signupdiv}>
          <Text className={styles.heading}>Start tracking time</Text>
          <Text className={styles.subheading}>
            Create an account and start with a free 14-day trial
          </Text>
          <Text className={styles.subsubheading}>
            All features. No credit card required
          </Text>
          <Box
            className={styles.googlebtn}
            _hover={{ backgroundColor: "gray.100" }}
          // onClick={() => handlegoogleauth()}
          >
            <FcGoogle className={styles.googlelogo} />
            <Text className={styles.googletext} color="#8f7e77">
              Sign up with Google
            </Text>
          </Box>
          <Text marginTop="20px" fontSize="14px">
            Or
          </Text>
          <Box
            hidden={
              !isEmpty && !userExist && !emailError && !passError && !serverError == false ? true : false
            }
          
            backgroundColor="#f2dede"
            border="1px solid #f2dede"
            color="brown"
            margin="auto"
            marginTop="15px"
            borderRadius="10px"
            width="75%"
            height="70px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="14px"
          >
            <Text width="90%" textAlign="justify">
              {
                isEmpty ? "Provide All field" : error
              }
            </Text>
          </Box>
          <Box className={styles.inputdiv}>
            <Input
              name="email"
              focusBorderColor="#25cf60"
              placeholder="Email"
              type="email"
              fontWeight="lighter"
              fontSize="14px"
              onChange={(e) => handleChange(e)}
            />
            <Input
              name="password"
              focusBorderColor="#25cf60"
              placeholder="Password"
              type="password"
              marginTop="15px"
              fontWeight="lighter"
              fontSize="14px"
              onChange={(e) => handleChange(e)}
            />
            <Input
              focusBorderColor="#25cf60"
              placeholder="Phone (optional)"
              type="phone"
              maxLength="10"
              marginTop="15px"
              fontWeight="lighter"
              fontSize="14px"
            />
          </Box>
          <Button
            backgroundColor="#25cf60"
            marginTop="40px"
            padding="25px 35px 25px 35px"
            borderRadius="25px"
            fontSize="15px"
            color="white"
            fontWeight="700"
            _hover={{ backgroundColor: "#25cf60" }}
             isLoading={isLoading}
            loadingText='Submitting'
            colorScheme='teal'
            variant='outline'
            onClick={() => handleSubmit()}
          >
            Sign up for free
          </Button>
          <Text className={styles.note}>
            By signing up you agree to our{" "}
            <a href="https://www.timecamp.com/terms-conditions/">
              <span style={{ color: "#25cf60" }}>Terms of Service</span>{" "}
            </a>{" "}
            and{" "}
            <a href="https://www.timecamp.com/privacy-policy/">
              <span style={{ color: "#25cf60" }}>Privacy Policy</span>
            </a>
          </Text>
        </Box>
      </div>
    )
  }