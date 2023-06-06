import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Tabs,
  TabList,
  Tab
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';



export default function Navbar({ currentPage, handlePageChange }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Tabs>
        <TabList>
        <Tab
          onClick={() => handlePageChange('About')}
          _selected={{ color: 'blue.500', borderBottomWidth: '2px', borderColor: 'blue.500' }}
          color={currentPage === 'About' ? 'blue.500' : 'gray.500'}
          _hover={{ color: 'blue.500' }}
         
        >
          About Me
        </Tab>
        <Tab
          onClick={() => handlePageChange('Portfolio')}
          _selected={{ color: 'blue.500', borderBottomWidth: '2px', borderColor: 'blue.500' }}
          color={currentPage === 'Portfolio' ? 'blue.500' : 'gray.500'}
          _hover={{ color: 'blue.500' }}
          
        >
          Portfolio
        </Tab>
        <Tab
          onClick={() => handlePageChange('Resume')}
          _selected={{ color: 'blue.500', borderBottomWidth: '2px', borderColor: 'blue.500' }}
          color={currentPage === 'Resume' ? 'blue.500' : 'gray.500'}
          _hover={{ color: 'blue.500' }}
  
        >
          Resume
        </Tab>
      </TabList>
      </Tabs>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
