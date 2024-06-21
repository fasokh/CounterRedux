import { FC, useState } from "react";
import {
  Box,
  FormControl,
  Button,
  FormLabel,
  Input,
  InputProps,
  ButtonProps,
  Flex,
} from "@chakra-ui/react";
import authSlice from "@/store/AuthStore/insdex";
import { useDispatch } from "react-redux";
import { authAction } from "@/store/AuthStore/insdex";

// interface Show {
//   onShowup: () => void;
// }

const Form: FC = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch();

  const emailHandler: InputProps["onChange"] = (event) => {
    const value = event.target.value;
    setInputEmail(value);
  };

  const passwordHandler: InputProps["onChange"] = (event) => {
    const value = event.target.value;

    setInputPassword(value);
  };

  const sendImformationHandler: ButtonProps["onClick"] = (event) => {
    event.preventDefault();
    dispatch(authAction.authentication());
    // onShowup()
  };
  return (
    <Box
      width="60%"
      border="none"
      borderRadius="xl"
      bg="white"
      padding={4}
      m="0 auto"
    >
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input value={inputEmail} onChange={emailHandler} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input value={inputPassword} onChange={passwordHandler} />
      </FormControl>
      <Flex mt={4} justifyContent="center">
        <Button color="white" bg="blue.600" onClick={sendImformationHandler}>
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default Form;
