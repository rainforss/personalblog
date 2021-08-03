import { Box, Center, ChakraProps } from "@chakra-ui/react";
import { motion, useAnimation, Variants } from "framer-motion";
import React from "react";

interface NavButtonProps extends ChakraProps {
  onOpen?: () => void;
  onClose?: () => void;
}

const NavButton: React.FC<NavButtonProps> = React.memo(
  ({ onOpen, onClose, ...chakraProps }) => {
    const MotionBox = motion(Box);
    const controls = useAnimation();
    const rightVariants: Variants = {
      shiftRight: {
        translateX: ["0%", "100%", "-100%", "0%"],
        transition: { duration: 0.5, times: [0, 0.5, 0.5, 1] },
      },
    };
    const leftVariants: Variants = {
      shiftLeft: {
        translateX: ["0%", "-100%", "100%", "0%"],
        transition: { duration: 0.5, times: [0, 0.5, 0.5, 1] },
      },
    };
    return (
      <Center
        width="50px"
        height="50px"
        cursor="pointer"
        transform="translateY(-50%)"
        {...chakraProps}
        onMouseEnter={() => {
          controls.start("shiftRight");
          controls.start("shiftLeft");
        }}
      >
        <Box
          width="50px"
          height="25px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          overflow="hidden"
        >
          <MotionBox
            variants={rightVariants}
            animate={controls}
            width="100%"
            height="3px"
            bg="hsla(0,0%,100%,.6)"
          ></MotionBox>
          <MotionBox
            width="100%"
            height="3px"
            bg="hsla(0,0%,100%,.6)"
          ></MotionBox>
          <MotionBox
            variants={leftVariants}
            animate={controls}
            width="100%"
            height="3px"
            bg="hsla(0,0%,100%,.6)"
          ></MotionBox>
        </Box>
      </Center>
    );
  }
);

NavButton.displayName = "NavButton";

export default NavButton;
