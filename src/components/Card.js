import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
  <VStack maxW="m" spacing={4} borderRadius="xl" boxShadow="md" bg="white" overflow="hidden">
    <Image src={imageSrc} borderRadius="lg"></Image>
    <Heading pl={4} width="100%" as="h3" size="md" color="black" textAlign="left">{title}</Heading>
      <Text pl={4} pr={2} textAlign="left" borderRadius="lg" objectFit="cover"  color="gray.600" >{description}</Text>
      <HStack pb={2} width="100%" spacing={2} cursor="pointer" color="black" _hover={{ color: "blue.500" }} fontSize="sm">
        <Text fontSize="lg" textAlign="justify" pl={4}> See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
      </HStack>
  </VStack>
  )
};

export default Card;
