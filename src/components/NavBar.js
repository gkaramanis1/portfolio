import React from 'react';
import { Flex, Tabs, TabList, Tab } from "@chakra-ui/react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <Flex justifyContent="center">
    <Tabs variant="unstyled" justifyContent="center">
      <TabList>
        <Tab
          onClick={() => handlePageChange('About')}
          _selected={{ color: 'blue.500', borderBottomWidth: '2px', borderColor: 'blue.500' }}
          color={currentPage === 'About' ? 'blue.500' : 'gray.500'}
          _hover={{ color: 'blue.500' }}
          borderBottomWidth={currentPage === 'About' ? '2px' : ''}
          borderColor={currentPage === 'About' ? 'blue.500' : ''}
        >
          About Me
        </Tab>
        <Tab
          onClick={() => handlePageChange('Portfolio')}
          _selected={{ color: 'blue.500', borderBottomWidth: '2px', borderColor: 'blue.500' }}
          color={currentPage === 'Portfolio' ? 'blue.500' : 'gray.500'}
          _hover={{ color: 'blue.500' }}
          borderBottomWidth={currentPage === 'Portfolio' ? '2px' : ''}
          borderColor={currentPage === 'Portfolio' ? 'blue.500' : ''}
        >
          Portfolio
        </Tab>
        <Tab
          onClick={() => handlePageChange('Resume')}
          _selected={{ color: 'blue.500', borderBottomWidth: '2px', borderColor: 'blue.500' }}
          color={currentPage === 'Resume' ? 'blue.500' : 'gray.500'}
          _hover={{ color: 'blue.500' }}
          borderBottomWidth={currentPage === 'Resume' ? '2px' : ''}
          borderColor={currentPage === 'Resume' ? 'blue.500' : ''}
        >
          Resume
        </Tab>
      </TabList>
    </Tabs>
    </Flex>
  );
}


export default NavBar;
