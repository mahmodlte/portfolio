import React from 'react';
import { Container } from 'react-bootstrap';
import '../../assets/style.css';
const About = () => {
  return (
    <Container className=' my-5  about'>
      <h1 className='pt-5 text-center pt-5   paragraph'>About Me</h1>
      <p className='lead text-center pt-5  paragraph'>
        A Front-End Web Developer and the world is my place of living, I
        Graduated from a five-month Front-End Development Bootcamp through a
        partnership between Re:Coded Iraq and the Flatiron School in New York,
        United States. I believe that technology can change many things and can
        touch many people lives this is why I love technology and I believe that
        I can make change in my community throughout technology and this is why
        I always seek change even if it is a small change
      </p>
      <h1 className='pt-5 text-center pt-5 py-3  paragraph'>What I can do</h1>
      <p className='lead text-center py-3  paragraph'>
        I do Front-end web development using Javascript,React,HTML,CSS and
        bootsrtap
      </p>
    </Container>
  );
};
export default About;
