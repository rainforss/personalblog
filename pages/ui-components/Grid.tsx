import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface GridProps {}

const Grid: React.FC<GridProps> = React.memo(({}) => {
  const MotionBox = motion(Box);
  return (
    <>
      <MotionBox
        w="1px"
        h="100%"
        bgColor="hsla(0,0%,100%,0.1)"
        position="absolute"
        top="0"
        left="25%"
        animate={{ translateY: ["-100%", "0%"] }}
        transition={{ delay: 0.1 }}
      ></MotionBox>
      <MotionBox
        w="1px"
        h="100%"
        bgColor="hsla(0,0%,100%,0.05)"
        position="absolute"
        top="0"
        left="50%"
        animate={{ translateY: ["-100%", "0%"] }}
        transition={{ delay: 0.3 }}
      ></MotionBox>
      <MotionBox
        w="1px"
        h="100%"
        bgColor="hsla(0,0%,100%,0.05)"
        position="absolute"
        top="0"
        left="75%"
        animate={{ translateY: ["-100%", "0%"] }}
        transition={{ delay: 0.5 }}
      ></MotionBox>
      <MotionBox
        w="100%"
        h="1px"
        bgColor="hsla(0,0%,100%,0.05)"
        position="absolute"
        top="25%"
        left="0"
        animate={{ translateX: ["-100%", "0%"] }}
        transition={{ delay: 0.7 }}
      ></MotionBox>
      <MotionBox
        w="100%"
        h="1px"
        bgColor="hsla(0,0%,100%,0.05)"
        position="absolute"
        top="50%"
        left="0"
        animate={{ translateX: ["-100%", "0%"] }}
        transition={{ delay: 0.9 }}
      ></MotionBox>
      <MotionBox
        w="100%"
        h="1px"
        bgColor="hsla(0,0%,100%,0.05)"
        position="absolute"
        top="75%"
        left="0"
        animate={{ translateX: ["-100%", "0%"] }}
        transition={{ delay: 1.1 }}
      ></MotionBox>
    </>
  );
});

Grid.displayName = "Grid";

export default Grid;
