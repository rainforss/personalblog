import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { motion, useAnimation, Variants } from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { throttle } from "../utils/throttle";
import { usePrevious } from "../utils/usePrevious";
import { AboutScreen } from "./home-components/AboutScreen";
import { BlogScreen } from "./home-components/BlogScreen";
import { ContactScreen } from "./home-components/ContactScreen";
import { HomeScreen } from "./home-components/HomeScreen";
import { ProjectScreen } from "./home-components/ProjectScreen";
import { Layout } from "./ui-components/Layout";
import { NavButton } from "./ui-components/NavButton";
import { Pager } from "./ui-components/Pager";
import { ProgressBar } from "./ui-components/ProgressBar";
import { ScrollingTextDisplay } from "./ui-components/ScrollingTextDisplay";
import { ScrollText } from "./ui-components/ScrollText";
import { UnderlineLink } from "./ui-components/UnderlineLink";

export default function Home() {
  const MotionBox = motion(Box);
  const controls = useAnimation();
  // const variants:Variants = {
  //   scrollDown:{translateY: ["0%", "100%", "-100%", "0%"],
  //   transition: { duration: 0.5, times: [0, 0.5, 0.5, 1] },},scrollUp:{},reset:{}
  // }
  const numberOfPages = 5;
  const [current, setCurrent] = useState<number>(1);
  const prevPage = usePrevious(current);
  const thrott = 800;
  const time = Date.now();
  const handleScroll = useCallback(
    (e) => {
      const now = Date.now();
      if (now - time < thrott) return;
      if (e.wheelDelta > 0) {
        if (current === 1) {
          return;
        } else {
          setCurrent(current - 1);
        }
      } else if (e.wheelDelta < 0) {
        if (current === numberOfPages) {
          setCurrent(1);
        } else {
          setCurrent(current + 1);
        }
      }
    },
    [current, numberOfPages, time]
  );

  const handleClick = () => {
    const now = Date.now();
    if (now - time < thrott) return;
    if (current === numberOfPages) {
      setCurrent(1);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    if (prevPage !== 5 || current !== 1) {
      if (prevPage) {
        controls.start({
          translateY: [
            `-${(prevPage - 1) * 100}vh`,
            `-${(current - 1) * 100}vh`,
          ],
          transition: { duration: 0.6 },
        });
      }
    } else {
      controls.start({
        translateY: [
          `-${(prevPage - 1) * 100}vh`,
          `-${prevPage * 100}vh`,
          "0vh",
        ],
        transition: { duration: 0.6, times: [0, 1, 1] },
      });
    }

    console.log(current);
    // let timeOut;
    // if (prevPage === 5 && current === 1) {
    //   timeOut = setTimeout(
    //     () =>
    //       controls.start({ translateY: "0vh", transition: { duration: 0 } }),
    //     800
    //   );
    // }
    return () => {
      window.removeEventListener("wheel", handleScroll);
      // clearTimeout(timeOut);
    };
  }, [handleScroll]);

  // useEffect(() => {
  //   if (prevPage !== 5 || current !== 1) {
  //     if (prevPage) {
  //       controls.start({
  //         translateY: [
  //           `-${(prevPage - 1) * 100}vh`,
  //           `-${(current - 1) * 100}vh`,
  //         ],
  //         transition: { duration: 0.6 },
  //       });
  //     }
  //   } else {
  //     controls.start({
  //       translateY: [
  //         `-${(prevPage - 1) * 100}vh`,
  //         `-${prevPage * 100}vh`,
  //         "0vh",
  //       ],
  //       transition: { duration: 0.6, times: [0, 1, 1] },
  //     });
  //   }
  // }, [prevPage, current, controls]);

  return (
    <Layout>
      <>
        <Pager
          current={current}
          previous={prevPage}
          max={numberOfPages}
          position="fixed"
          top="50%"
          right="70px"
          zIndex="99"
        />
        <Box h="100vh" w="100%" overflow="hidden" bg="transparent">
          <NavButton position="fixed" top="50%" left="70px" zIndex="99" />
          <IconButton
            fontSize="2.5rem"
            position="fixed"
            bottom="70px"
            left="50%"
            zIndex="99"
            bg="transparent"
            color="whiteAlpha.800"
            _hover={{ bg: "transparent", transform: "scale(1.5)" }}
            _focus={{ border: "none", bg: "transparent" }}
            _active={{ bg: "transparent" }}
            aria-label="Next Page"
            icon={<ChevronDownIcon />}
            onClick={() => handleClick()}
          />
          <MotionBox animate={controls}>
            <HomeScreen />
            <AboutScreen />
            <ProjectScreen />
            <BlogScreen />
            <ContactScreen />
            <HomeScreen />
          </MotionBox>
        </Box>
      </>
    </Layout>
  );
}
