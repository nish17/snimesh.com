import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
const AboutMe = () => {
  return (
    <div className='container'>
      <Container fluid>
        <h2>About me</h2>
        <Row>
          <Col>
            <img
              className='my-pic'
              src='https://avatars1.githubusercontent.com/u/12984120?v=4'
            />
          </Col>
          <Col>
            <p>
              I'm a developer at heart with experience in{' '}
              <a href='https://nodejs.org/'>Node.js</a> on the backend and{' '}
              <a href='https://developers.google.com/assistant'>
                Google Assistant
              </a>
              /
              <a href='https://developer.amazon.com/en-US/alexa'>
                Amazon Alexa
              </a>
              /
              <a href='https://www.samsung.com/us/explore/bixby/'>
                Samsung Bixby
              </a>{' '}
              on the VoiceEnd. I am actively looking for opportunities in web
              development and voice space
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
