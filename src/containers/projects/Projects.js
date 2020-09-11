import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Train from '../../assets/Train.png';
const Projects = () => {
  return (
    <Container className='pt-5 my-5 projects'>
      <h1 className='text-center paragraph'>Projects</h1>

      <Card className='pt-5  mx-auto shadow-lg' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={Train} />
        <Card.Body>
          <Card.Title>Train To Maintain</Card.Title>
          <Card.Text>
            This project is to educate people on how to exercise and i have
            built this project along with a team
          </Card.Text>
          <a
            href='https://traintomaintains.netlify.app/'
            target={'_blank'}
            rel='noopener noreferrer'
          >
            <Button variant='primary'>Demo</Button>
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Projects;
