import { Box } from "@chakra-ui/react";
import React from "react";
import { UnderlineLink } from "../ui-components/UnderlineLink";

interface BlogScreenProps {}

export const BlogScreen: React.FC<BlogScreenProps> = ({}) => {
  return (
    <Box h="100vh" position="relative">
      <UnderlineLink
        linkText="My Thoughts"
        linkUrl="/test"
        width="200px"
        position="absolute"
        bottom="150px"
        right="250px"
      />
    </Box>
  );
};
