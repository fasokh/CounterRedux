import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
// import { UseSelector, useSelector } from "react-redux";
// import { RootState } from "@/store";


const Profile: FC = () => {
    // const authSelctore = useSelector((state: RootState) => state.auth.isShown)
  return (
    <Box
      display="flex"
      justifyContent="center"
      borderRadius="xl"
      alignContent="center"
      bg="white"
      p="2rem"
      w="40%"
    >
      <Text>This is a user profile</Text>
    </Box>
  );
};

export default Profile;
