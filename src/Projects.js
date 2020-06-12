import React from 'react';

import nodeIcon from './assets/nodejs-icon.svg';
import twilioIcon from './assets/twilio.png';
import awsIcon from './assets/aws.png';
import bbIcon from './assets/BigBasketIcon.png';
import chromeDevIcon from './assets/chrome-dev.png';
import AoGIcon from './assets/AoG.png';
import FirebaseIcon from './assets/firebase.png';
import DialogFlowIcon from './assets/dialogflow.png';
import MomentIcon from './assets/moment.png';

const Projects = () => {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='projects-container'>
        <div className='project-1'>
          <div className='project-title-1'>
            <a href='https://github.com/nish17/bigBasket-notifier'>
              <h4>Big Basket Notifier</h4>
            </a>
          </div>
          <div className='tech-stack-1'>
            <h6>Frontend:</h6>
            N/A
            <h6>Backend:</h6>
            <a
              className='tech-icons-container'
              title='Node.js'
              href='https://nodejs.org/'
            >
              <img className='tech-icons' src={nodeIcon} />
            </a>
            <a
              className='tech-icons-container'
              title='Twilio'
              href='https://www.twilio.com/'
            >
              <img className='tech-icons' src={twilioIcon} />
            </a>
            <a
              className='tech-icons-container'
              title='AWS'
              href='https://aws.amazon.com/'
            >
              <img className='tech-icons' src={awsIcon} />
            </a>
            <a
              className='tech-icons-container'
              title='Chrome Dev Tools'
              href='https://developers.google.com/web/tools/chrome-devtools'
            >
              <img className='tech-icons' src={chromeDevIcon} />
            </a>
            <br />
          </div>
          <div className='project-desc-1'>
            Developed during COVID-19 to notify the user once a slot to buy
            groceries is available. Used Chrome Dev Tools to learn how to use
            BigBasket's API.
          </div>
          <img className='project-img-1' src={bbIcon} />
        </div>
        <div className='project-2'>
          <div className='project-title-1'>
            <a href='https://github.com/nish17/scheduler'>
              <h4>PDPU Scheduler</h4>
            </a>
          </div>
          <div className='tech-stack-1'>
            <h6>VUI:</h6>
            <a
              className='tech-icons-container'
              title='Google Assistant'
              href='https://developers.google.com/assistant'
            >
              <img className='tech-icons' src={AoGIcon} />
            </a>
            <a
              className='tech-icons-container'
              title='DialogFlow'
              href='https://dialogflow.com/'
            >
              <img className='tech-icons' src={DialogFlowIcon} />
            </a>
            <h6>Backend:</h6>
            <a
              className='tech-icons-container'
              title='Node.js'
              href='https://nodejs.org/'
            >
              <img className='tech-icons' src={nodeIcon} />
            </a>
            <a
              className='tech-icons-container'
              title='Firebase Cloud Functions'
              href='https://firebase.google.com/docs/functions'
            >
              <img className='tech-icons' src={FirebaseIcon} />
            </a>
            <a
              className='tech-icons-container inc-width'
              title='Momentjs'
              href='https://momentjs.com/'
            >
              <img className='tech-icons' src={MomentIcon} />
            </a>
            {/* <br /> */}
          </div>
          <div className='project-desc-1'>
            Voice App for Google Assistant which tells the students about their
            day to day schedule including their lectures and labs.
          </div>
          <img className='project-img-2' src={AoGIcon} />
        </div>
        <div className='project-3'>
          <div className='project-title-1'>
            <a href='https://github.com/nish17/GDG-Ahmedabad-Action'>
              <h4>GDG Ahmedabad</h4>
            </a>
          </div>
          <div className='tech-stack-1'>
            <h6>VUI:</h6>
            <a
              className='tech-icons-container'
              title='Google Assistant'
              href='https://developers.google.com/assistant'
            >
              <img className='tech-icons' src={AoGIcon} />
            </a>
            <a
              className='tech-icons-container'
              title='DialogFlow'
              href='https://dialogflow.com/'
            >
              <img className='tech-icons' src={DialogFlowIcon} />
            </a>
            <h6>Backend:</h6>
            <a
              className='tech-icons-container'
              title='Node.js'
              href='https://nodejs.org/'
            >
              <img className='tech-icons' src={nodeIcon} />
            </a>
            <a
              className='tech-icons-container'
              title='Firebase Cloud Functions'
              href='https://firebase.google.com/docs/functions'
            >
              <img className='tech-icons' src={FirebaseIcon} />
            </a>
          </div>
          <div className='project-desc-1'>
            Voice app that tells the users all the information about Google
            Developers Group, DevFests and core-committe members of GDG
            Ahmedabad. It also shows information about the past meetups, shows
            the schedule of all talks.
          </div>
          <img className='project-img-2' src={AoGIcon} />
        </div>
        <div className='project-4'>4</div>
      </div>
    </div>
  );
};

export default Projects;

// src='/../assets/nodejs_icon.jpeg'
