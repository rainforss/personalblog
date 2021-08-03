import { ChakraProps, Flex, Text } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import ScrollText from "./ScrollText";

interface ScrollingTextDisplayProps extends ChakraProps {
  texts: string[];
  staticText?: string;
  scrollingInterval: number;
}

const ScrollingTextDisplay: React.FC<ScrollingTextDisplayProps> = ({
  texts,
  staticText,
  scrollingInterval,
  ...chakraProps
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      translateX: ["100%", `200%`, `0%`, "100%"],
      transition: {
        translateX: {
          duration: 5,
          ease: "easeOut",
          times: [0, 0.2, 0.2, 1],
        },
      },
    });
    const scrollTimer = setInterval(() => {
      if (internalIndex === texts.length - 1) {
        return setInternalIndex(0);
      }
      return setInternalIndex(internalIndex + 1);
    }, scrollingInterval * 1000);
    return () => {
      clearInterval(scrollTimer);
    };
  }, [internalIndex, scrollingInterval, texts.length, controls]);
  return (
    <Flex
      width="200px"
      height="50px"
      align="center"
      justifyContent="space-around"
      {...chakraProps}
    >
      <ProgressBar width="15px" isRepeating controls={controls} />
      {staticText && (
        <Text color="whiteAlpha.900" fontSize="1.2rem">
          To
        </Text>
      )}
      <ScrollText
        width="130px"
        height="100%"
        color="whiteAlpha.600"
        fontSize="1.2rem"
        texts={texts}
        isAuto
        currentIndex={internalIndex}
      />
    </Flex>
  );
};

export default ScrollingTextDisplay;
