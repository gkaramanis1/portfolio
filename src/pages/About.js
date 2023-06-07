import { Box, Text, Image } from "@chakra-ui/react";

const profile = require("../assets/profile4.png");

export default function About() {
  

  return (
    <div style={{ textAlign: "center" }}>
      <Box
  maxWidth="800px"
  display="inline-block"
  mt={8}
  mb={8}
  
>
  <Text
    bgGradient="linear(to-l, #ee6c4d, #98c1d9)"
    bgClip="text"
    fontSize="5xl"
    fontWeight="extrabold"
    mb={4}
    
  >
    George Karamanis
  </Text>
  <Box maxWidth="800px" display="inline-block"
    
  >
    <Image
  borderRadius="5px"
  boxSize="250px"
  src={profile}
  alt="George Karamanis"
  mb={6}
  objectFit="cover"
  objectPosition="center"
  style={{ maxWidth: "100%", height: "auto" }}
/>

  </Box>

        <p
          className="bio"
          mt={4}
          
        >
          I'm a problem-solver at heart who thrives in team-oriented
          environments. With a certificate from the coding bootcamp at the
          University of Central Florida, I bring a unique perspective to
          full-stack web development that emphasizes creativity, collaboration,
          and innovation.
        </p>

        <Box 
        textAlign="center" mt={10} mb={4}>
          <Text bgGradient="linear(to-l, #ee6c4d, #98c1d9)"
          bgClip="text"
          fontSize="xl"
          fontWeight="semibold" mb={4}>
            Some things I enjoy doing when I'm not coding
          </Text>
          <Box display="flex" flexDirection="column" alignItems="center">
          <Box display="flex" alignItems="center" mb={2}>
              <span
                role="img"
                aria-label="family"
                style={{ marginRight: "8px" }}
              >
                👨‍👩‍👧‍👦
              </span>
              <span>Spending time with my family</span>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <span
                role="img"
                aria-label="running"
                style={{ marginRight: "8px" }}
              >
                🏃
              </span>
              <span>Running</span>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <span
                role="img"
                aria-label="basketball"
                style={{ marginRight: "8px" }}
              >
                🏀
              </span>
              <span>Basketball</span>
            </Box>
            <Box display="flex" alignItems="center">
              <span
                role="img"
                aria-label="soccer"
                style={{ marginRight: "8px" }}
              >
                ⚽️
              </span>
              <span>Soccer</span>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <span
                role="img"
                aria-label="dog"
                style={{ marginRight: "8px" }}
              >
                🐾
              </span>
              <span>Hanging out with my wheaten terrier</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
