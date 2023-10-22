import React from 'react';
import * as ga from './analytics';
import ExperienceCard from './Components/ExperienceCard';
import { experiences } from './constants/data';

const ExperienceAndEducation = () => {

  return (
    <div className='col-2-container'>
      <div className='experience'>
        <h3>Experience</h3>
        { experiences.map(experience => <ExperienceCard from={experience.from} to={experience.to} role={experience.role} company={experience.company} url={experience.url} description={experience.description} />)}
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
