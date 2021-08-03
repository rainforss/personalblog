import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Grid } from "./Grid";

interface LayoutProps {
  gridOn?: boolean;
  children?: ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ gridOn, children }) => {
  return (
    <Box
      height="100vh"
      width="100%"
      position="fixed"
      top="0"
      left="0"
      bgImage="/main_image.jpg"
    >
      <Box
        height="100%"
        width="100%"
        bgColor="rgba(0,0,0,0.7)"
        position="relative"
      >
        <Box
          bgImage="/rainforss.svg"
          width="100px"
          height="100px"
          position="absolute"
          top="20px"
          left="20px"
          bgSize="cover"
          bgColor="transparent"
          zIndex="99"
        ></Box>
        {gridOn && <Grid />}
        {children}
      </Box>
    </Box>
  );
};
