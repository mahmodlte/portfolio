import React from 'react';
import Header from './componets/Header/Header';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Skills from './containers/skills/Skills';
import Projects from './containers/projects/Projects';
import Contact from './containers/contact/Contact';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container className='shadow-lg'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
