import React from 'react';
import { Container } from 'react-bootstrap';
import '../../assets/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <Container>
      <h1 className='paragraph text-center pt-5'>Get in touch</h1>
      <h5 className='text-center'>Email:mahmodlte@gmail.com</h5>
      <div className='d-flex justify-content-center social-media'>
        <a href='https://github.com/mahmodlte'>
          <FontAwesomeIcon
            className='col'
            size='5x'
            icon={faGithub}
          ></FontAwesomeIcon>
        </a>
        <a href='https://www.linkedin.com/in/mahmoodma/'>
          <FontAwesomeIcon
            className='col'
            size='5x'
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </a>

        <a href='https://twitter.com/mahmodlte'>
          <FontAwesomeIcon
            className='col'
            size='5x'
            icon={faTwitter}
          ></FontAwesomeIcon>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
