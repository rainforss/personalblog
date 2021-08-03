import { Box } from "@chakra-ui/react";
import React from "react";
import TextBox from "../ui-components/TextBox";
import UnderlineLink from "../ui-components/UnderlineLink";

interface AboutScreenProps {}

const AboutScreen: React.FC<AboutScreenProps> = ({}) => {
  return (
    <Box h="100vh" position="relative">
      <UnderlineLink
        linkText="About Me"
        linkUrl="/test"
        width="200px"
        position="absolute"
        zIndex="99"
        top="150px"
        left="350px"
      />
      <Box
        w="250px"
        h="250px"
        position="absolute"
        zIndex="1"
        top="50px"
        left="220px"
        bgImage="/speed.svg"
        bgSize="cover"
        borderRadius="100%"
        bgColor="rgba(221,105,63,.1)"
      ></Box>
      <TextBox
        position="absolute"
        w="50vw"
        height="200px"
        top="50%"
        left="50%"
        fontSize="4.2rem"
        color="white"
        texts={["STAY UP TO CHANGE", "WITH ADAPTIVE FORCE"]}
      />
    </Box>
  );
};

export default AboutScreen;
