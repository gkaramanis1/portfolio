import { useState, useEffect } from "react";

import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

import { FaGithub, FaLink } from "react-icons/fa";

const NoPMS = require("../assets/Screenshot.png");
const Password = require("../assets/password.png");
const Schedule = require("../assets/schedule.jpeg");

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div
    style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "0 auto",
        width: "100%",
        maxWidth: "1200px",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          transform: isMounted ? "translateY(0)" : "translateY(100px)",
          transition: "transform 1s ease-out",
        }}
        maxW="sm"
        m="2"
      >
        <CardBody>
          <Image src={NoPMS} alt="NoPMS" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Project Management System</Heading>
            <Text>
              This application allows you to manage and organize your GitHub
              projects! Additionaly, you can collaborate with team memebers and
              stay up to date with the current projects you are working on.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <ButtonGroup spacing="2">
            <IconButton
              as="a"
              href="https://github.com/Ale-Miret/NoPMS"
              aria-label="GitHub"
              icon={<FaGithub fontSize="2rem" />}
            />
            <IconButton
              as="a"
              href="https://calm-waters-92102.herokuapp.com/"
              aria-label="Link"
              icon={<FaLink fontSize="2rem" />}
            />
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card
        style={{
          transform: isMounted ? "translateY(0)" : "translateY(100px)",
          transition: "transform 1s ease-out",
        }}
        maxW="sm"
        m="2"
      >
        <CardBody>
          <Image src={Password} alt="Password Generator" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Password Generator</Heading>
            <Text>Do you need a secure password? Generate one here!</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <ButtonGroup spacing="2">
            <IconButton
              as="a"
              href="https://github.com/gkaramanis1/password-gen"
              aria-label="GitHub"
              icon={<FaGithub fontSize="2rem" />}
            />
            <IconButton
              as="a"
              href="https://gkaramanis1.github.io/password-generator/"
              aria-label="Link"
              icon={<FaLink fontSize="2rem" />}
            />
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card
        style={{
          transform: isMounted ? "translateY(0)" : "translateY(100px)",
          transition: "transform 1s ease-out",
        }}
        maxW="sm"
        m="2"
      >
        <CardBody>
          <Image
            src={Schedule}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Work Day Scheduler</Heading>
            <Text>Keep track of your busy day!</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <ButtonGroup spacing="2">
            <IconButton
              as="a"
              href="https://github.com/gkaramanis1/day-scheduler"
              aria-label="GitHub"
              icon={<FaGithub fontSize="2rem" />}
            />
            <IconButton
              as="a"
              href="https://gkaramanis1.github.io/day-scheduler/"
              aria-label="Link"
              icon={<FaLink fontSize="2rem" />}
            />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
