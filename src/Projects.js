import React from 'react';
import nodeIcon from './assets/nodejs-icon.svg';
import twilioIcon from './assets/twilio.png';
import awsIcon from './assets/aws.png';
import bbIcon from './assets/BigBasketIcon.png';
import chromeDevIcon from './assets/chrome-dev.png';
const Projects = () => {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='projects-container'>
        <div className='project-1'>
            <div className='project-title-1'>
            <a href='https://github.com/nish17/bigBasket-notifier'><h4>Big Basket Notifier</h4></a>
            </div>
            <div className='tech-stack-1'>
              <h6>Frontend:</h6>
              N/A
             <h6>Backend:</h6>
              <a className='tech-icons-container' title='Node.js' href='https://nodejs.org/'><img className='tech-icons' src={nodeIcon}/></a>
              <a className='tech-icons-container' title='Twilio' href='https://www.twilio.com/'><img className='tech-icons' src={twilioIcon}/></a>
              <a className='tech-icons-container' title='AWS' href='https://aws.amazon.com/'><img className='tech-icons' src={awsIcon}/></a>
              <a className='tech-icons-container' title='Chrome Dev Tools' href='https://developers.google.com/web/tools/chrome-devtools'><img className='tech-icons' src={chromeDevIcon}/></a>
              <br />
            </div>
            <div className='project-desc-1'>
              Developed during COVID-19 to notify the user once a slot to buy
              groceries is available. Used Chrome Dev Tools to learn how to use
              BigBasket's API.
              </div>
              <img className='project-img-1' src={bbIcon} />
        </div>
        <div className='project-2'>2</div>
        <div className='project-3'>3</div>
        <div className='project-4'>4</div>
      </div>
    </div>
  );
};

export default Projects;

// src='/../assets/nodejs_icon.jpeg'