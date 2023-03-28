import React from 'react';
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
            
            <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
              <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="center">
                  <ButtonGroup variant="ghost">
                    <IconButton
                      as="a"
                      href="https://www.linkedin.com/in/georgekaramanis/"
                      aria-label="LinkedIn"
                      icon={<FaLinkedin fontSize="2rem" />}
                    />
                    <IconButton as="a" href="https://github.com/gkaramanis1" aria-label="GitHub" icon={<FaGithub fontSize="2rem" />} />
                    <IconButton
                      as="a"
                      href="https://www.instagram.com/giorgokaramanis/"
                      aria-label="Instagram"
                      icon={<FaInstagram fontSize="2rem" />}
                    />
                  </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="subtle">
                  Connect with me!
                </Text>
              </Stack>
            </Container>
    );
  };
  
  export default Footer;
  