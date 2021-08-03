import { Box, Center, ChakraProps, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TextBoxProps extends ChakraProps {
  texts: string[];
}

const TextBox: React.FC<TextBoxProps> = ({ texts, ...chakraProps }) => {
  return (
    <Box {...chakraProps}>
      {texts.map((t) => (
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="flex-start"
          h={`${100 / texts.length}%`}
          key={t}
        >
          {t}
        </Flex>
      ))}
    </Box>
  );
};

export default TextBox;
