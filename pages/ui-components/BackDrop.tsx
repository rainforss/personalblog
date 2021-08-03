import { Box } from "@chakra-ui/react";
import React from "react";

interface BackDropProps {}

const BackDrop: React.FC<BackDropProps> = ({}) => {
  return <Box height="100vh" width="100%" bgImage="/main_image.jpg"></Box>;
};

export default BackDrop;
