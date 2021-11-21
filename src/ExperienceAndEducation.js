import React from 'react';
import * as ga from './analytics';

const ExperienceAndEducation = () => {
  return (
    <div className='col-2-container'>
      <div className='experience'>
        <h3>Experience</h3>
        <article>
          <h5 className='small-box'>November 2020 - Present</h5>
          <div className='card-title-1'>
            <h4>
              SDE-{'1 '} @ {' '}
              <a onClick={() => ga.logEvent('Company', 'Nova')} href='https://getnovaapp.com' target='_blank'>
                Nova Benefits
              </a>
            </h4>
          </div>
          <div className='card-desc-1'>
            <p>
              I work on Frontend as well as on Backend. With Vue2 in the Frontend and communicating with GraphQL API with Postgres, Typescript in the Backend worked on various interfaces and integrations. 
              Also helped the company in adding RASA as the NLU Layer in one of the internal applications. 
            </p>
          </div>
        </article>
        <article>
          <h5 className='small-box'>January 2020 - April 2020</h5>
          <div className='card-title-1'>
            <h4>
              SDE Intern @{' '}
              <a onClick={() => ga.logEvent('Company', 'TapChief')} href='https://tapchief.com' target='_blank'>
                TapChief
              </a>
            </h4>
          </div>
          <div className='card-desc-1'>
            <p>
              For the major part of the internship, I worked on building the
              onboarding flow for businesses and consultants (i.e. users). Also
              helped the company to deploy it on Heroku
            </p>
          </div>
        </article>
        <article>
          <h5 className='small-box'>June 2019 - July 2019</h5>
          <div className='card-title-1'>
            <h4>
              SDE Intern @{' '}
              <a onClick={() => ga.logEvent('Company', 'WinimyAI')} href='https://winimy.ai' target='_blank'>
                Winimy AI
              </a>
            </h4>
          </div>
          <div className='card-desc-1'>
            <p>
              I worked on developing voice applications on Amazon Alexa for
              Dominos. I also developed the Hindi Alexa skill for Isha Sadhguru.
            </p>
          </div>
        </article>
        <article>
          <h5 className='small-box'>January 2019 - January 2019</h5>
          <div className='card-title-1'>
            <h4>
              Backend Developer Intern @{' '}
              <a onClick={() => ga.logEvent('Company', 'Espresso Labs')} href='https://espressolabs.in/' target='_blank'>
                Espresso Labs
              </a>
            </h4>
          </div>
          <div className='card-desc-1'>
            <p>
              Explored JOVO Framework for cross-platform development of voice
              application. I also developed a grocery store voice application on
              Amazon Alexa.
            </p>
          </div>
        </article>
      </div>
      <div className='education'>
        <h3>Education</h3>
        <article className='exp-1'>
          <h5 className='small-box'>August 2016 - June 2020</h5>
          <div className='card-title-1'>
            <h4>B.Tech in Information & Communication Technology</h4>
          </div>
          <div className='card-desc-1'>
            <p>
              Batch 2016,{' '}
              <a onClick={() => ga.logEvent('Education', 'PDPU')} href='http://pdpu.ac.in/' target='_blank'>
                {' '}
                Pandit Deendayal Petroleum Univeristy, Gandhinagar
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ExperienceAndEducation;
