import { Box, ChakraProps } from "@chakra-ui/react";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import React from "react";

interface ProgressBarProps extends ChakraProps {
  isRepeating?: boolean;
  repeatingInterval?: number;
  max?: number;
  current?: number;
  previous?: number;
  controls?: AnimationControls;
}

export const ProgressBar: React.FC<ProgressBarProps> = React.memo(
  ({
    isRepeating,
    repeatingInterval,
    max,
    current,
    previous,
    controls,
    ...chakraProps
  }) => {
    const MotionBox = motion(Box);
    console.log(repeatingInterval);

    if (!isRepeating) {
      return (
        <Box
          w={chakraProps.width}
          height="3px"
          position="relative"
          overflow="hidden"
          bg="hsla(0,0%,100%,.1)"
        >
          <MotionBox
            initial={
              current < previous
                ? previous === max && current === 1
                  ? { translateX: "100%" }
                  : { translateX: `${((current + 1) / max) * 100}%` }
                : { translateX: `${((current - 1) / max) * 100}%` }
            }
            animate={
              previous === max && current === 1
                ? {
                    translateX: [
                      "100%",
                      "200%",
                      "0%",
                      `${(current / max) * 100}%`,
                    ],
                  }
                : {
                    translateX: `${(current / max) * 100}%`,
                  }
            }
            transition={
              current !== 1
                ? {
                    duration: 0.5,
                    ease: "easeInOut",
                  }
                : { duration: 0.8, ease: "easeInOut", times: [0, 0.2, 0.2, 1] }
            }
            bg="hsla(0,0%,100%,.6)"
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="-100%"
          />
        </Box>
      );
    }
    return (
      <Box
        w={chakraProps.width}
        height="3px"
        position="relative"
        overflow="hidden"
        bg="hsla(0,0%,100%,.1)"
      >
        <MotionBox
          animate={controls}
          bg="hsla(0,0%,100%,.6)"
          width="100%"
          height="3px"
          position="absolute"
          top="0"
          left="-100%"
        />
      </Box>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
