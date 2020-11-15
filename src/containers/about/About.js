import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/style.css";
const About = () => {
  return (
    <Container className=" my-5  about">
      <h1 className="pt-5 text-center pt-5   paragraph">About Me</h1>
      <p className="lead text-center pt-5  paragraph">
        A Front-End Web Developer Graduated from a five-month Front-End
        Development Bootcamp through a a partnership between Re:Coded Iraq and
        the Flatiron School I believe that technology can change many things and
        can touch many people lives this is why I love technology
      </p>
      <h1 className="pt-5 text-center pt-5 py-3  paragraph">What I can do</h1>
      <p className="lead text-center py-3  paragraph">
        I do Front-end web development using Javascript,React,HTML,CSS and
        bootsrtap
      </p>
    </Container>
  );
};
export default About;
