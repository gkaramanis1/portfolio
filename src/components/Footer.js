import React from 'react';
import { Container, Stack, ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: '12', md: '16' }}
      style={{ marginTop: 'auto' }} // add inline style to stick the footer to the bottom
    >
      <Stack
        spacing={{ base: '4', md: '5' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
      >
        <Stack
          direction="row"
          align="center"
          justify="center"
        >
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            color="gray.500"
            mr="2"
          >
            Connect With Me!
          </Text>
        </Stack>
        <ButtonGroup variant="ghost">  
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/georgekaramanis/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="2rem" color="0077b6"/>}
          />
          <IconButton
            as="a"
            href="https://github.com/gkaramanis1"
            aria-label="GitHub"
            icon={<FaGithub fontSize="2rem" color="0077b6"/>}
          />
          
        </ButtonGroup>
      </Stack>
    </Container>
  );
}

export default Footer;
