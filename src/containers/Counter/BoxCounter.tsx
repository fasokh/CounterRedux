import React, { FC } from "react";
import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../../store/counterStore";
import { RootState } from "@/store";

const BoxCounter: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.counter);
  const show = useSelector((state: RootState) => state.counter.showCounter);

  const increaseHandler = () => {
    dispatch(counterAction.increment());
  };
  const decreaseHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increaseByPayloadHandler = () => {
    dispatch(counterAction.increase(5));
  };
  const toggleHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  const resetHandler = () => {
    dispatch(counterAction.reset());
  };

  return (
    <Box
      m="2rem auto"
      border="none"
      p="3rem"
      width="40rem"
      borderRadius="1rem"
      bg="white"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        bg="white"
      >
        <Text fontWeight="bolder" fontSize="large" bg="white">
          REDUX COUNTER
        </Text>
        {show && (
          <Text bg="white" fontSize="3rem">
            {counter}
          </Text>
        )}
        <ButtonGroup>
          <Button colorScheme="blue" onClick={increaseHandler}>
            Increase
          </Button>
          <Button colorScheme="blue" onClick={decreaseHandler}>
            Decrease
          </Button>
          <Button colorScheme="blue" onClick={increaseByPayloadHandler}>
            Increase + 5
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button colorScheme="blue" onClick={toggleHandler}>
            Toggle Counter
          </Button>
          <Button colorScheme="blue" onClick={resetHandler}>
            Reset
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default BoxCounter;
