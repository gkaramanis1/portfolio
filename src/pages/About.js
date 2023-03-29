import React from 'react';
import { Image, Box, Text } from '@chakra-ui/react'

const profile = require('../assets/profile.png');

export default function About() {
    return(
        <div style={{ textAlign: "center" }}>
            <Box maxWidth="800px" display="inline-block" mt={8} mb={8}>
         <Text
            bgGradient='linear(to-l, #ee6c4d, #98c1d9)'
            bgClip='text'
            fontSize='5xl'
            fontWeight='extrabold'
            mb={4}
            >
            Hey! I'm George
        </Text>
         <Box maxWidth="800px" display="inline-block">
            <Image
                borderRadius='full'
                boxSize='300px'
                src={profile}
                alt='George Karamanis'
                mb={6}
            />
            </Box>
            <p className="bio" mt={4}>
            I'm a problem-solver at heart who thrives in team-oriented environments. With a certificate from the coding bootcamp at the University of Central Florida, I bring a unique perspective to full-stack web development that emphasizes creativity, collaboration, and innovation.

            </p>
            </Box>
        </div>
        )
    };

