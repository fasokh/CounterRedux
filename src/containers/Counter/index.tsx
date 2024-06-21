import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import BoxCounter from "./BoxCounter";
import Header from "./Header";
import Form from "./Form";
import { FC, useState } from "react";
import Profile from "../Profile";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "@/store";
import HomeLayout from "@/layout/HomeLayout";

// type showSecongPage = () => void;

const Counter: NextPage = () => {
  const authSelectore = useSelector((state: RootState) => state.auth.isShown);
  //   const [isShown, setIsShown] = useState(false);

  //   const showSecongPageHandler: showSecongPage = () => {
  //     setIsShown(true);
  //   };
  return (
    <Box>
      <HomeLayout>
        {/* {!isShown && <Header onShowup={showSecongPageHandler} />}
      {!isShown && <Form onShowup={showSecongPageHandler} />}
      {!isShown && <BoxCounter />}
      {isShown && <Profile />} */}
        <Header />
        {!authSelectore && <Form />}
        {!authSelectore && <BoxCounter />}
        {authSelectore && <Profile />}
      </HomeLayout>
    </Box>
  );
};

export default Counter;
