import { Box, ChakraProps, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import NextLink from "next/link";

interface UnderlineLinkProps extends ChakraProps {
  linkText: string;
  linkUrl: string;
}

const UnderlineLink: React.FC<UnderlineLinkProps> = ({
  linkText,
  linkUrl,
  ...chakraProps
}) => {
  const MotionBox = motion(Box);
  const controls = useAnimation();
  return (
    <Box {...chakraProps}>
      <Box
        position="relative"
        cursor="pointer"
        color="white"
        onMouseEnter={() =>
          controls.start({
            translateX: ["0px", `100%`, `200%`],
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              times: [0, 0.6, 1],
            },
          })
        }
      >
        <NextLink href={linkUrl}>
          <Text fontSize="2rem" textAlign="center" p={2}>
            {linkText}
          </Text>
        </NextLink>
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
            height="100%"
            position="absolute"
            top="0"
            left="-100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UnderlineLink;
