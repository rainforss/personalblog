import { Box, Center, ChakraProps, Flex } from "@chakra-ui/react";
import React from "react";

interface ScrollTextProps extends ChakraProps {
  texts: string[];
  currentIndex?: number;
  isAuto?: boolean;
}

const ScrollText: React.FC<ScrollTextProps> = ({
  texts,
  currentIndex,
  isAuto,
  ...chakraProps
}) => {
  if (isAuto) {
    return (
      <Box overflow="hidden" {...chakraProps}>
        <Box position="relative" width="100%" height="100%">
          {texts.map((t, index) => (
            <Flex
              width="100%"
              height="100%"
              position="absolute"
              alignItems="center"
              top={currentIndex === index ? "100%" : "-100%"}
              opacity={currentIndex === index ? 1 : 0}
              left="0"
              transform={
                currentIndex === index ? "translateY(-100%)" : "translateY(0)"
              }
              transition={
                currentIndex === index
                  ? "transform 1s ease-out, opacity 1s ease-out"
                  : "transform 1s ease-out, opacity 1s ease-out, top 1s ease-out"
              }
              key={t}
            >
              {t}
            </Flex>
          ))}
        </Box>
      </Box>
    );
  }
  return (
    <Box overflow="hidden" {...chakraProps}>
      <Box position="relative" width="100%" height="100%">
        {texts.map((t, index) => (
          <Center
            width="100%"
            height="100%"
            position="absolute"
            top={currentIndex === index ? "100%" : "-100%"}
            opacity={currentIndex === index ? 1 : 0}
            left="0"
            transform={
              currentIndex === index ? "translateY(-100%)" : "translateY(0)"
            }
            transition={
              currentIndex === index
                ? "transform 1s, opacity 1s"
                : "transform 1s, opacity 1s, top 1s"
            }
            key={t}
          >
            {t}
          </Center>
        ))}
      </Box>
    </Box>
  );
};

export default ScrollText;
