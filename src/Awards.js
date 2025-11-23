import React, { useEffect } from 'react';
import * as ga from './analytics';

import VOICE from './assets/Voice.webp';
import RisingStar from './assets/risingStar.jp2';
import bixbyPD from './assets/bixbyPD.jp2';
import gdg from './assets/gdgahm.jp2';
import alexa from './assets/alexa.jp2';

const awardsData = [
  {
    title: 'Rising Star in Voice',
    program: 'Inside Voice Podcast Awards',
    org: 'VOICE Summit 2019',
    imgSrc: RisingStar,
    imgClass: 'award-img',
    links: [
      {
        label: 'VOICE Summit Blog',
        href: 'https://www.voicesummit.ai/blog/the-winners-of-the-inside-voice-podcast-awards-are',
        gaCategory: 'Blog',
        gaLabel: 'Winners of Podcast Awards',
      },
      {
        label: 'Podcast',
        href: 'https://podcasts.apple.com/us/podcast/developing-voice-skills-as-a-student/id1447407838?i=1000447426808',
        gaCategory: 'Podcast',
        gaLabel: "Nimesh's Podcast",
      },
    ],
  },
  {
    title: 'First Class Premier Developer',
    program: 'Samsung Bixby Premier Developer Program 2019',
    org: 'Samsung Electronics America',
    imgSrc: bixbyPD,
    imgClass: 'award-img',
    links: [],
  },
  {
    title: '#1 VOICE Ambassador Globally',
    program: 'Voice Event Ambassador Program',
    org: 'Voice Summit 2019',
    imgSrc: VOICE,
    imgClass: 'award-img',
    links: [],
  },
  {
    title: 'Tech-Speaker',
    program: 'DevFest Ahmedabad 2019',
    org: 'GDG Ahmedabad',
    imgSrc: gdg,
    imgClass: 'award-img',
    links: [
      {
        label: 'SpeakerDeck',
        href: 'https://speakerdeck.com/nimeshs17/best-practices-of-vui-design',
        gaCategory: 'SpeakerDeck',
        gaLabel: 'devfest19',
      },
      {
        label: 'Recorded Session',
        href: 'https://youtu.be/JMbSDu80TlU',
        gaCategory: 'Youtube',
        gaLabel: 'devfest19 session',
      },
    ],
  },
  {
    title: 'Tech-Speaker',
    program: 'DevFest Ahmedabad 2018',
    org: 'GDG Ahmedabad',
    imgSrc: gdg,
    imgClass: 'award-img',
    links: [
      {
        label: 'SpeakerDeck',
        href: 'https://speakerdeck.com/jaldeepasodariya/codelab-actions-on-google-devfestahm18',
        gaCategory: 'SpeakerDeck',
        gaLabel: 'devfest18',
      },
    ],
  },
  {
    title: 'Conducted Workshop',
    program: 'Alexa Skill Development',
    org: "PDPU's TechFest 2019",
    imgSrc: alexa,
    imgClass: 'award-img',
    links: [
      {
        label: 'SpeakerDeck',
        href: 'https://speakerdeck.com/nimeshs17/alexa-workshop-pdpu-2019',
        gaCategory: 'SpeakerDeck',
        gaLabel: 'Alexa Workshop',
      },
    ],
  },
];

const Awards = () => {
  useEffect(() => {
    ga.logPageView();
  }, []);

  return (
    <div className='awards'>
      <h3>Awards & Achievements</h3>
      <div className='awards-container'>
        {awardsData.map((award, index) => (
          <div className='award-card' key={index}>
            <div className='award-left-side'>
              <div className='award-title'>{award.title}</div>
              <div className='award-program'>{award.program}</div>
              <div className='award-org'>{award.org}</div>
              {award.links.length > 0 && (
                <div className='award-link'>
                  {award.links.map((link, i) => (
                    <div key={i}>
                      Link:{' '}
                      <a
                        onClick={() =>
                          ga.logCustomEvent(link.gaCategory, link.gaLabel)
                        }
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='award-right-side'>
              <img className={award.imgClass} src={award.imgSrc} alt={award.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
