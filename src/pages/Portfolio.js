import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
  Wrap,
  WrapItem

} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

import ProjectsArray from "../components/ProjectsArray";



export default function Projects({ color }) {
    const projects = ProjectsArray();


  
    
  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade cascade damping={0.1}>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                      <Wrap>
                        {project.badges.map((badge) => (
                          <WrapItem key={badge.text}>
                            <Badge colorScheme={badge.colorScheme}>{badge.text}</Badge>
                          </WrapItem>
                          ))}
                      </Wrap>
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
          
          
        </Stack>
      </Container>
    </>
  );
}
