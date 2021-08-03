import { Box, ChakraProps } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface DigitalClockProps extends ChakraProps {}

export const DigitalClock: React.FC<DigitalClockProps> = ({
  ...chakraProps
}) => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(new Date());
  let hr: number | string = time.getHours();
  let min: number | string = time.getMinutes();
  let sec: number | string = time.getSeconds();
  let day = "AM";
  if (hr > 12) {
    day = "PM";
    hr = hr - 12;
  }
  if (hr === 0) {
    hr = 12;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }

  useEffect(() => {
    const countTime = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(countTime);
  }, [start]);
  return (
    <Box
      {...chakraProps}
      width="260px"
      height="80px"
      display="flex"
      color="whiteAlpha.800"
      justifyContent="center"
      alignItems="center"
      boxShadow="-3px -3px 7px rgba(255, 255, 255, 0.05),
      3px 3px 5px rgba(0, 0, 0, 0.5)"
      onLoad={() => setStart(true)}
    >
      <Box
        width="100%"
        height="100%"
        fontSize="2rem"
        opacity={0.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="48%">{`${hr}:${min}:${sec}`}</Box>
        <Box>{day}</Box>
      </Box>
    </Box>
  );
};
