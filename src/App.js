import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Box, useColorMode, IconButton, ColorModeScript } from '@chakra-ui/react';
import './App.css';
import { FaSun, FaMoon } from 'react-icons/fa'

// Dark and Light Mode
function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      position="absolute"
      top="0.5rem"
      right="1rem"
    />
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <ColorModeScript />
    <ChakraProvider>
      <ColorModeSwitcher />
      <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Box p={8}>
          {currentPage === 'About' && <About />}
          {currentPage === 'Portfolio' && <Portfolio />}
          {currentPage === 'Resume' && <Resume />}
          {currentPage === 'Contact' && <Contact />}
        </Box>
        <Footer />
      </div>
    </ChakraProvider>
    </>
  );
}


