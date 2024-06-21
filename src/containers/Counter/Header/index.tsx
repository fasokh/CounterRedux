import { FC } from "react";
import { Box, ButtonGroup, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { authAction } from "@/store/AuthStore/insdex";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

// interface Show {
//   onShowup: () => void;
// }

const Header: FC = () => {
  const headerShow = useSelector((state: RootState) => state.auth.isShown);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    // onShowup();
    dispatch(authAction.authentication());
  };
  return (
    <Box>
      <Flex
        bg="red.700" // Use Chakra UI color scheme for consistency
        height="6rem"
        // width={"100%"}
        align="center"
        paddingX="2rem"
        justifyContent="space-around"
      >
        <Text
          fontSize={{ base: "1rem", sm: "2rem" }}
          fontWeight="bold"
          color="white"
          textAlign="left"
        >
          Redux Auth
        </Text>
        {headerShow && (
          <ButtonGroup spacing={5}>
            <Button>My Products</Button>
            <Button>My Sales</Button>
            <Button onClick={logoutHandler}>Log Out</Button>
          </ButtonGroup>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
