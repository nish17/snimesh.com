import React from 'react';

import nodeIcon from './assets/nodejs-icon.svg';
import twilioIcon from './assets/twilio.png';
import awsIcon from './assets/aws.png';
import bbIcon from './assets/BigBasketIcon.png';
import chromeDevIcon from './assets/chrome-dev.png';
import AoGIcon from './assets/AoG.png';
import FirebaseIcon from './assets/firebase.png';
import DialogFlowIcon from './assets/dialogflow.png';
import MomentIcon from './assets/momentjs.png';
import BixbyIcon from './assets/bixby.png';
import BixbyLogo from './assets/bixby.jpg';
import jsIcon from './assets/js.png';

const Projects = () => {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='projects-container'>
        <div className='project-1'>
          <div className='project-title-1'>
            <a href='https://github.com/nish17/bigBasket-notifier'>
              <div>Big Basket Notifier</div>
            </a>
          </div>
          <div className='tech-stack-1'>
            <div className='tech-title' >Frontend:</div>
            N/A
            <div className='tech-title' >Backend:</div>
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
              <div>PDPU Scheduler</div>
            </a>
          </div>
          <div className='tech-stack-1'>
          <div className='tech-title' >VUI:</div>
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
            <div className='tech-title' >Backend:</div>
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
              <div>GDG Ahmedabad</div>
            </a>
          </div>
          <div className='tech-stack-1'>
          <div className='tech-title' >VUI:</div>
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
            <div className='tech-title' >Backend:</div>
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
            Voice app that gives the information about GDG, DevFests and core-committe members of GDG
            Ahmedabad. It also shows information about the schedule of all talks.
          </div>
          <img className='project-img-2' src={AoGIcon} />
        </div>
        <div className='project-4'>
        <div className='project-title-1'>
            <a href='https://github.com/nish17/bixby-DataStructure-Visualizer'>
              <div>DataStructure Visualizer</div>
            </a>
          </div>
          <div className='tech-stack-1'>
          <div className='tech-title' >VUI:</div>
            <a
              className='tech-icons-container'
              title='Samsung Bixby'
              href='http://bixbydevelopers.com/'
            >
              <img className='tech-icons' src={BixbyLogo} />
            </a>
            <div className='tech-title' >Backend:</div>
            <a
              className='tech-icons-container'
              title='Node.js'
              href='https://nodejs.org/'
            >
              <img className='tech-icons' src={nodeIcon} />
            </a>
          </div>
          <div className='project-desc-1'>
            Voice app that gives the information about Linear Data Structure, 
            Non-Linear Data Structure. It also shows visual representation of all the data structures.
          </div>
          <img className='project-img-4' src={BixbyIcon} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

// src='/../assets/nodejs_icon.jpeg'
