import { Box } from "@chakra-ui/react";
import React from "react";
import UnderlineLink from "../ui-components/UnderlineLink";

interface ContactScreenProps {}

const ContactScreen: React.FC<ContactScreenProps> = ({}) => {
  return (
    <Box h="100vh" position="relative">
      <UnderlineLink
        linkText="Contacts"
        linkUrl="/test"
        width="200px"
        position="absolute"
        bottom="150px"
        left="250px"
      />
      <Box
        bgImage="/contact.svg"
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

export default ContactScreen;
