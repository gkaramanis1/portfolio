import React from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <Tabs variant="unstyled" justifyContent="center">
      <TabList>
        <Tab
          onClick={() => handlePageChange('About')}
          _selected={{ color: 'blue.500' }}
          color={currentPage === 'About' ? 'blue.500' : 'gray.500'}
        >
          About Me
        </Tab>
        <Tab
          onClick={() => handlePageChange('Portfolio')}
          _selected={{ color: 'blue.500' }}
          color={currentPage === 'Portfolio' ? 'blue.500' : 'gray.500'}
        >
          Portfolio
        </Tab>
        <Tab
          onClick={() => handlePageChange('Contact')}
          _selected={{ color: 'blue.500' }}
          color={currentPage === 'Contact' ? 'blue.500' : 'gray.500'}
        >
          Contact Me
        </Tab>
        <Tab
          onClick={() => handlePageChange('Resume')}
          _selected={{ color: 'blue.500' }}
          color={currentPage === 'Resume' ? 'blue.500' : 'gray.500'}
        >
          Resume
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default NavBar;
