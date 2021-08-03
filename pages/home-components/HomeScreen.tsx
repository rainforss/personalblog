import { Box } from "@chakra-ui/react";
import React from "react";
import ScrollingTextDisplay from "../ui-components/ScrollingTextDisplay";
import DigitalClock from "./DigitalClock";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <Box h="100vh" position="relative" zIndex={10}>
      <ScrollingTextDisplay
        texts={["test1", "test2", "test3"]}
        staticText="To"
        scrollingInterval={5}
        position="absolute"
        top="150px"
        left="250px"
      />
      <Box
        bgImage="/drawing.svg"
        width="500px"
        height="500px"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        bgSize="cover"
        bgColor="transparent"
      ></Box>

      <DigitalClock position="absolute" top="40px" right="40px" />
    </Box>
  );
};

export default HomeScreen;
