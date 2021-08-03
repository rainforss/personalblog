import { Box } from "@chakra-ui/react";
import { AnimationControls, motion } from "framer-motion";
import React from "react";
import AboutScreen from "./AboutScreen";
import BlogScreen from "./BlogScreen";
import ContactScreen from "./ContactScreen";
import HomeScreen from "./HomeScreen";
import ProjectScreen from "./ProjectScreen";

interface HomeBodyProps {
  controls: AnimationControls;
}

const HomeBody: React.FC<HomeBodyProps> = React.memo(({ controls }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox animate={controls}>
      <HomeScreen />
      <AboutScreen />
      <ProjectScreen />
      <BlogScreen />
      <ContactScreen />
      <HomeScreen />
    </MotionBox>
  );
});

HomeBody.displayName = "HomeBody";

export default HomeBody;
