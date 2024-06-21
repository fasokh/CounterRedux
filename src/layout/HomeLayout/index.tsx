import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <Box
      bg="blue.800"
      height={{ base: "250vh", sm: "100vh" }}
      width={{ base: "100vh", sm: "100%" }}
    >
      {children}
    </Box>
  );
};

export default HomeLayout;
