import React from 'react';
import ExperienceAndEducation from './ExperienceAndEducation';
import GithubCard from './GithubCard';
import StackOverFlowCard from './StackOverFlowCard';
import Resume from './assets/Resume-Nimesh-Solanki.pdf';
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
            <a href={Resume} download='Nimesh_Resume'>Checkout Resume</a>
          </div>
        </div>
      <div className='exp-and-edu-1'>
        <ExperienceAndEducation />
        <div className='cards-container'>
          <div className='cards-grid'>
            <div className='gh-card'>
              <GithubCard />
            </div>
            <div className='so-card'>
              <StackOverFlowCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;