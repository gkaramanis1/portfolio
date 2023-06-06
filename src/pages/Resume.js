import { Box, Center, Heading, List, ListItem } from "@chakra-ui/react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaDownload, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { useState, useEffect } from "react";

export default function Resume() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Center py={10}>
      <Box
        w={{ base: "90%", md: "80%", lg: "50%" }}
        
      >
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
        >
          Skills
        </Heading>
        <List
          fontSize={{ base: "lg", md: "xl" }}
          mt={5}
          spacing={2}
          textAlign="center"
          flexDirection="column"
        >
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "0.2s",
  }}
          bg="gray.50" borderRadius="md" p={2} color="black">
            <FaJsSquare size="1.5em" color="#F7DF1E" /> JavaScript
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "0.5s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <FaPython size="1.5em" color="#3776AB" /> Python
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "0.8s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <FaReact size="1.5em" color="#61DAFB" /> ReactJS
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "1.1s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <FaNodeJs size="1.5em" color="#339933" /> NodeJS
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "1.4s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <SiExpress size="1.5em" color="#333" /> Express
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "1.7s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <FaGitAlt size="1.5em" color="#F05032" /> Git
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "2.0s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <FaDatabase size="1.5em" color="#4479A1" /> MySQL
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "2.3s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <SiMongodb size="1.5em" color="#3FA037" /> MongoDB
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "2.6s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <FaHtml5 size="1.5em" color="#E34F26" /> HTML
          </ListItem>
          <ListItem style={{
    transform: isMounted ? "translateY(0)" : "translateY(100px)",
    opacity: isMounted ? 1 : 0,
    transition: "transform 2s ease-out, opacity 2s ease-out",
    transitionDelay: "2.9s",
  }}
           bg="gray.50" borderRadius="md" p={2} color="black">
            <FaCss3Alt size="1.5em" color="#1572B6" /> CSS
          </ListItem>
        </List>
        <Center mt={10}>
          <a href={require("../assets/resume.pdf")} download style={{ textDecoration: "none" }}>
            <Heading
              as="h3"
              fontSize={{ base: "lg", md: "xl" }} display="inline-flex" alignItems="center">
              Download My Resume <FaDownload ml={2} />
            </Heading>
          </a>
        </Center>
      </Box>
    </Center>
  );
}
