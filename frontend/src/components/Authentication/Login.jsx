import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  const submitHandler = (pics) => {};

  return (
    <VStack spacing={"5px"}>
    <FormControl id="email" isRequired padding={"5px"}>
      <FormLabel>Email</FormLabel>
      <Input
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired padding={"5px"}>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5em">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    
    

  <Button colorScheme={"orange"} width="100%" style={{marginTop: 15}} onChlick={submitHandler}>
    Login
  </Button>
  <Button colorScheme={"red"} width="100%" style={{marginTop: 15}} onChlick={submitHandler}>
    Get Guest User Credentials
  </Button>

  </VStack>
  )
}

export default Login