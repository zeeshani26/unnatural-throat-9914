import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myicon from "../Data/Proper_icon.jpg";
import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";

export default function Login() {
  const value = useContext(AppContext);
  let navigate = useNavigate();
  const { authState, handleLogin } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    console.log(authState)
    if (handleLogin(user) === true) {
      alert("SIGN UP SUCCESSFUL");
      navigate("/support");
    }
    else{
      alert("Wrong Credentials. Please try again")
    }
  };

  return (
    <Box w={"100%"} mt="5">
      <Box w={"40%"} m="auto" boxShadow="2xl" p="30px" mb="100px">
        <Box display={"flex"} justifyContent={"center"}>
          <Image w={"328px"} src={myicon} />
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack gap={"10px"} w={"100%"} m={"auto"}>
            <Input
              type="email"
              required
              defaultValue={email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              name="email"
              height={"45px"}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              defaultValue={password}
              onChange={handleChange}
              height={"45px"}
            />

            <Button
              type={"submit"}
              w={"100%"}
              color={"white"}
              fontSize={"xl"}
              bg={"#67AC5B"}
              _hover={{
                bg: "green.600",
              }}
              height="45px"
            >
              Log In
            </Button>

            <VStack fontSize="17.5px">
              <Flex>
                Not a member?
                <Text ml={"7px"} color="red">
                  <Link to={"/signup"}>Sign Up Now </Link>
                </Text>
                <Text ml="60px" color="red">
                  Forgot password?
                </Text>
              </Flex>
            </VStack>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
