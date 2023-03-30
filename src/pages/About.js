import { useState, useEffect } from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const profile = require("../assets/profile.png");

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
    setIsMounted(true);
  }, 500);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Box
        maxWidth="800px"
        display="inline-block"
        mt={8}
        mb={8}
        style={{
          transform: isMounted ? "translateY(0)" : "translateY(100px)",
          transition: "transform 1s ease-out",
        }}
      >
        <Text
          bgGradient="linear(to-l, #ee6c4d, #98c1d9)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
          mb={4}
        >
          Hey! I'm George Karamanis
        </Text>
        <Box maxWidth="800px" display="inline-block">
          <Image
            borderRadius="full"
            boxSize="300px"
            src={profile}
            alt="George Karamanis"
            mb={6}
          />
        </Box>
        <p
          className="bio"
          mt={4}
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          I'm a problem-solver at heart who thrives in team-oriented
          environments. With a certificate from the coding bootcamp at the
          University of Central Florida, I bring a unique perspective to
          full-stack web development that emphasizes creativity, collaboration,
          and innovation.
        </p>

        <Box style={{
          transform: isMounted ? "translateY(0)" : "translateY(100px)",
          transition: "transform 1s ease-out",
            }}
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
              <span>Spending time with my Family</span>
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
              <span>Hanging out with my Wheaten Terrier</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
