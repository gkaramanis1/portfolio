import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Image
  } from "@chakra-ui/react";
  import ProfileArray from "./ProfileArray";
  
  const Profile = require("../images/Subject.png");
  
  export default function Header({ color }) {
    const profile = ProfileArray();
    const scrollToContact = () => {
      const contactSection = document.querySelector("#contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
    };
    const linkedin = () => {
      window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
    };
    return (
      <>
        <Heading>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
            rel="stylesheet"
          />
        </Heading>
  
        <Container maxW={"3xl"} id="hero">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
            pt={{ base: 36, md: 52 }}
            align={"center"} // Added alignment to center the content horizontally
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              {profile.headerName} <br />
              <Text as={"span"} color={`${color}.400`}>
                {profile.headerRole}
              </Text>
            </Heading>
            <Box alignSelf="center"> {/* Wrapped the image inside a Box component */}
              <Image
                src={Profile}
                alt='George Karamanis'
                boxSize={{ base: "400px", sm: "400px", md: "400px" }} // Adjust the sizes based on your requirements
                objectFit="contain"
                objectPosition="50% 10%"
              />
            </Box>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={color}
                bg={`${color}.400`}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: `${color}.500`,
                }}
                onClick={linkedin}
              >
                Let's connect!
              </Button>
              <Button
                variant={"link"}
                colorScheme={"blue"}
                size={"sm"}
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  
  