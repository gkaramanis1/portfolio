import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Box } from '@chakra-ui/react';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider>
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
  );
}


