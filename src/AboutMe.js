import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
// import { Container, Row, Col } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import ExperienceAndEducation from './ExperienceAndEducation';
import GithubCard from './GithubCard';
const AboutMe = () => {
  return (
    <div>
      <div className='grid-container'>
        <div class='about-title-1'>
          <h3>About</h3>
        </div>
        <div className='img'>
          <img
            className='my-pic-1'
            src='https://avatars1.githubusercontent.com/u/12984120?v=4'
          />
        </div>
        <div className='content-1'>
          <p>
            I'm a developer at heart with experience in{' '}
            <a href='https://nodejs.org/'>Node.js</a> on the backend and{' '}
            <a href='https://developers.google.com/assistant'>
              Google Assistant
            </a>{' '}
            /<a href='https://developer.amazon.com/en-US/alexa'>Amazon Alexa</a>
            /{' '}
            <a href='https://www.samsung.com/us/explore/bixby/'>
              Samsung Bixby
            </a>{' '}
            on the VoiceEnd. <br /> I am seeking for opportunity with a
            competitive and challenging enivronment where I can serve your
            organization and establish an enjoyable career for myself.
          </p>
        </div>
        <div className='button-1'>
          {/* <a href='mailto:nimesh3536@gmail.com'>Email me</a> */}
          <a href='#Resume'>Checkout Resume</a>
        </div>
        <GithubCard />
      </div>
      <div>
        <ExperienceAndEducation />
      </div>
    </div>
  );
};

export default AboutMe;
// =======================
/* working condition */

{
  /* <Container fluid={true}>
  <h3 className='about-title'>About</h3>
  <Row>
    <Col md='4'>
      <img
        className='my-pic'
        src='https://avatars1.githubusercontent.com/u/12984120?v=4'
      />
    </Col>
    <Col md='6' md-offset='3'>
      <p className='content'>
        I'm a developer at heart with experience in{' '}
        <a href='https://nodejs.org/'>Node.js</a> on the backend and{' '}
        <a href='https://developers.google.com/assistant'>Google Assistant</a> /
        <a href='https://developer.amazon.com/en-US/alexa'>Amazon Alexa</a>/{' '}
        <a href='https://www.samsung.com/us/explore/bixby/'>Samsung Bixby</a> on
        the VoiceEnd. <br /> I am seeking for opportunity with a competitive and
        challenging enivronment where I can serve your organization and
        establish an enjoyable career for myself.
        <div className='links'>
          <a href='mailto:nimesh3536@gmail.com'>Email me</a>
          <a href='#Resume'>Checkout Resume</a>
        </div>
      </p>
    </Col>
  </Row>
  <div className='clear-float'></div>
  <section className='new-sec'>
    <Row>
      <div className='float-left'>
        <Col md='1'>
          <Experience />
        </Col>
      </div>
      <div className='float-right'>
        <Col md='1'>
          <Education />
        </Col>
      </div>
    </Row>
  </section>
</Container>; */
}

// ======================
/*     <div className='container'>
      <div className='full-width'>
        <h2>About me</h2>
      </div>
      <Row>
        <Col>
          <img
            className='my-pic'
            src='https://avatars1.githubusercontent.com/u/12984120?v=4'
          />
        </Col>
        <Col className='about-desc'>
          <p>
            I'm a developer at heart with experience in{' '}
            <a href='https://nodejs.org/'>Node.js</a> on the backend and{' '}
            <a href='https://developers.google.com/assistant'>
              Google Assistant
            </a>
            /<a href='https://developer.amazon.com/en-US/alexa'>Amazon Alexa</a>
            /
            <a href='https://www.samsung.com/us/explore/bixby/'>
              Samsung Bixby
            </a>{' '}
            on the VoiceEnd. I am actively looking for opportunities in web
            development and voice space
          </p>
        </Col>
      </Row>
    </div>
 */
