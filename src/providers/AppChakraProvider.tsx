import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const AppChakraProvider: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppChakraProvider;
