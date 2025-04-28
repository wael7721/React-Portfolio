import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import img from '../images/avatarImg.jpg'

const greeting = "Hello, I am Wael!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="2xl" src={img}></Avatar>
    <Heading>{greeting}</Heading>
    <Text>{bio1}</Text>
    <Text>{bio2}</Text>
  </FullScreenSection>
);

export default LandingSection;
