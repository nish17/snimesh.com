import React from 'react';
import ExperienceAndEducation from './ExperienceAndEducation';
import GithubCard from './GithubCard';
import StackOverFlowCard from './StackOverFlowCard';

const AboutMe = () => {
  return (
    <div className='aboutMe-container'>
        <div className='grid-container'>
          <div className='about-title-1'>
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
              /
              <a href='https://developer.amazon.com/en-US/alexa'>
                Amazon Alexa
              </a>
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
            <a href='mailto:nimesh3536@gmail.com'>Email me</a>
            <a href='#Resume'>Checkout Resume</a>
          </div>
        </div>
      <div className='exp-and-edu-1'>
        <ExperienceAndEducation />
        {/* <div className='cards-container'>
          <div className='cards-grid'>
            <div className='gh-card'>
              <GithubCard />
            </div>
            <div className='so-card'>
              <StackOverFlowCard />
            </div>
          </div>
        </div> */}
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
