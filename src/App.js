import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './pages/About';
import Projects from './pages/Portfolio';

import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "blue";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Projects color={color} />

      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;