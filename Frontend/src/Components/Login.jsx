import { Box, Input, Text, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Navbar from "./Loginavbar";
import styles from "../Styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../axios/axios";
const Login = () => {
  return (
    <div>
      <Navbar login="true" />
      <Box display="flex" marginTop={"3%"} marginLeft={"7%"}>
        <Loghead />
        <LoginBox />
      </Box>
    </div>
  );
};

export default Login;

const Loghead = () => {
  const handlesubmit = () => {
    window.open(
      "https://chrome.google.com/webstore/detail/time-tracker-by-timecamp/ohbkdjmhoegleofcohdjagmcnkimfdaa"
    );
  };
  return (
    <Box width="40%">
      <Text
        color="black"
        fontSize="45px"
        fontWeight="700"
        justifyContent={"start"}
        display={"inline-block"}
        width="60%"
      >
        TimeCamp Plugin for Google Chrome
      </Text>
      <Text
        olor="gray"
        fontSize="25px"
        fontWeight="500"
        width="60%"
        display={"inline-block"}
      >
        Track time without leaving Chrome in 70+ online apps.
      </Text>

      <Box
        className={styles.loginbtn}
        backgroundColor="#25cf60"
        cursor="pointer"
        _hover={{ backgroundColor: "#25cf60" }}
        onClick={() => handlesubmit()}
      >
        Add TimeCamp for Chrome
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingTop={"4%"}
        width="70%"
        margin={"auto"}
        b
      >
        <Image
          width="25%"
          src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1664454267.png"
          alt=""
        />
        <Image
          width="25%"
          src="https://cdn.timecamp.com/res/css/images/capterra-icon.1664454267.png"
          alt=""
        />
        <Image
          width="25%"
          src="https://cdn.timecamp.com/res/css/images/crowd-icon.1664454267.png"
          alt=""
        />
        <Image
          width="25%"
          src="https://cdn.timecamp.com/res/css/images/get-app-icon.1664454267.png"
          alt=""
        />
      </Box>
    </Box>
  );
};

const LoginBox = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();

  const [flag, setFlag] = useState("Login Successfull");

  const [routeflag, setRouteflag] = useState(false);

  const handlesubmit = () => {
    let usercreds = {
      email: emailref.current.value,
      password: passwordref.current.value,
    };

    axios
      .post("/user/login", usercreds)
      .then(
        (res) => (
          console.log(res.data),
          localStorage.setItem("token", res.data.token),
          setFlag(res.data.msg),
          setRouteflag(res.data.msg)
        )
      )
    .catch((err)=>{
      console.log(err)
    })
    }

  const handlesignup = () => {
    navigate("/signup", { replace: true });
  };

  useEffect(() => {
    if (routeflag === "Login Successfull") {
      navigate("/timestamp", { replace: true });
    }
  }, [routeflag]);

  return (
    <Box className={styles.logindiv}>
      <Text className={styles.loginheading}>Log in to TimeCamp</Text>

      <Box
        className={styles.googlebtn}
        _hover={{ backgroundColor: "gray.100" }}
      >
        <FcGoogle fontSize="30px" />
        <Text fontSize="14px" fontWeight="700" color="#8f7e77">
          Log in with Google
        </Text>
      </Box>

      <Text marginTop="20px" fontSize="14px">
        Or
      </Text>

      <Box margin="auto" width="75%" marginTop="20px">
        <Input
          ref={emailref}
          focusBorderColor="#25cf60"
          placeholder="email"
          type="email"
        />
        <Input
          ref={passwordref}
          focusBorderColor="#25cf60"
          placeholder="password"
          type="password"
          marginTop="15px"
        />
      </Box>

      <Box
        hidden={flag === "Login Successfull" ? true : false}
        backgroundColor="#f2dede"
        border="1px solid #f2dede"
        color="brown"
        margin="auto"
        marginTop="15px"
        borderRadius="10px"
        width="75%"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="14px"
      >
        <Text>Wrong e-mail or password.</Text>
      </Box>

      {/* <Link to="/forgotten_password">
        <Text color="#25cf60" marginTop="15px" fontSize="14px" cursor="pointer">
          Forgotten Password?
        </Text>
      </Link> */}

      <Box
        className={styles.loginbtn}
        backgroundColor="#25cf60"
        cursor="pointer"
        _hover={{ backgroundColor: "#25cf60" }}
        onClick={() => handlesubmit()}
      >
        Log in
      </Box>

      <Text
        color="gray"
        fontSize="14px"
        width="65%"
        margin="auto"
        marginTop="20px"
        textAlign="center"
      >
        <span
          onClick={() => handlesignup()}
          style={{ color: "#25cf60", cursor: "pointer" }}
        >
          No account? Sign up
        </span>{" "}
        or
        <span style={{ color: "#25cf60", cursor: "pointer" }}>
          {" "}
          Log in with SSO
        </span>
      </Text>
    </Box>
  );
};
