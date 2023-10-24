import React from 'react';

const ExperienceCard = ({from, to, role, company, url, description }) => {
  return (
      <article>
      <h5 className='small-box'>{from} - {to}</h5>
      <div className='card-title-1'>
        <h4>
          {role} @ {' '}
          <a onClick={() => ga.logCustomEvent('Company', company)} href={url} target='_blank'>
            {company}
          </a>
        </h4>
      </div>
      <div className='card-desc-1'>
        <p>
        {description}
        </p>
      </div>
    </article>
  )
};

export default ExperienceCard;