import React from 'react';
import { Image, Box } from '@chakra-ui/react'

const profile = require('../assets/profile.png');

export default function About() {
    return(
        <div>
         <h1 style={{fontWeight: 'bold', fontSize: '25px'}}>Hi! I'm George Karamanis</h1>
         <Box mx='auto' my={10}>
            <Image
                borderRadius='full'
                boxSize='300px'
                src={profile}
                alt='George Karamanis'
            />
            </Box>
            <p className="bio">
                I'm a Full Stack developer that got a certificate from the University of Central Florida coding bootcamp. I'm also an UCF alumni with a Bachelor of Science in Kinesiology. Go Knights! Trying to improve and learn new skills that can be applied to my professional goals is something that I focus on daily. When I'm away from my desk, I enjoy going on runs, playing basketball, and spending time with my family.
            </p>
        </div>
        )
    };

