import { Box } from "@chakra-ui/react";
import React from "react";
import UnderlineLink from "../ui-components/UnderlineLink";

interface ProjectScreenProps {}

const ProjectScreen: React.FC<ProjectScreenProps> = ({}) => {
  return (
    <Box h="100vh" position="relative">
      <UnderlineLink
        linkText="My Work"
        linkUrl="/test"
        width="200px"
        position="absolute"
        bottom="150px"
        left="250px"
      />
      <Box
        bgImage="/project.svg"
        width="600px"
        height="300px"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        bgSize="cover"
        bgColor="transparent"
      ></Box>
    </Box>
  );
};

export default ProjectScreen;
