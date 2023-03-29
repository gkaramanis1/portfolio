import React from 'react';
import { FaDownload } from "react-icons/fa";
import { Box, Center, Heading, List, ListItem } from "@chakra-ui/react";

export default function Resume() {
  return (
    <Center py={10}>
      <Box w={{ base: "90%", md: "80%", lg: "50%" }}>
        <Heading as="h1" fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }} textAlign="center">
          Skills:
        </Heading>
        <List fontSize={{ base: "lg", md: "xl" }} mt={5} spacing={2} textAlign="center">
          <ListItem>JavaScript</ListItem>
          <ListItem>ReactJS</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>NodeJS</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>REST APIs</ListItem>
        </List>
        <Center mt={10}>
          <a href={require("../assets/resume.pdf")} download style={{ textDecoration: 'none' }}>
            <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} display="inline-flex" alignItems="center">
              Download My Resume <FaDownload ml={2} />
            </Heading>
          </a>
        </Center>
      </Box>
    </Center>
  )
}
