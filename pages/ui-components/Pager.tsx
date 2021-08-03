import { Box, Center, ChakraProps, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ProgressBar from "./ProgressBar";
import ScrollText from "./ScrollText";

interface PagerProps extends ChakraProps {
  max: number;
  current: number;
  previous: number;
}

const Pager: React.FC<PagerProps> = ({
  max,
  current,
  previous,
  ...chakraProps
}) => {
  const texts: string[] = [];
  for (let i = 1; i <= max; i++) {
    texts.push(i + "");
  }

  return (
    <Flex
      width="50px"
      height="110px"
      direction="column"
      justifyContent="center"
      transform="translateY(-50%)"
      align="center"
      color="hsla(0,0%,100%,.6)"
      {...chakraProps}
    >
      <ScrollText
        currentIndex={current - 1}
        texts={texts}
        width="100%"
        height="50px"
        fontSize="1.2rem"
      />
      <ProgressBar
        max={max}
        current={current}
        previous={previous}
        width="100%"
      />
      <Center width="100%" height="50px" fontSize="1.2rem">
        {max}
      </Center>
    </Flex>
  );
};

export default Pager;
