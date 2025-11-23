import React, { useEffect } from 'react';
import * as ga from './analytics';

import nodeIcon from './assets/nodejs-icon.svg';
import twilioIcon from './assets/twilio.jp2';
import awsIcon from './assets/aws.jp2';
import bbIcon from './assets/BigBasketIcon.jp2';
import chromeDevIcon from './assets/chrome-dev.jp2';
import FirebaseIcon from './assets/firebase.jp2';
import DialogFlowIcon from './assets/dialogflow.jp2';
import MomentIcon from './assets/momentjs.jp2';
import BixbyIcon from './assets/bixbyIcon.jp2';
import BixbyLogo from './assets/bixby.jp2';
import AoG from './assets/AoG.gif';

const projectsData = [
  {
    title: 'Big Basket Notifier',
    githubLink: 'https://github.com/nish17/bigBasket-notifier',
    gaCategory: 'Github',
    gaLabel: 'BigBasket Notifier',
    description:
      "Developed during COVID-19 to notify the user once a slot to buy groceries is available. Used Chrome Dev Tools to learn how to use BigBasket's API.",
    imgSrc: bbIcon,
    imgClass: 'project-img',
    techStack: [
      { type: 'title', label: 'Frontend:' },
      { type: 'text', label: 'N/A' },
      { type: 'title', label: 'Backend:' },
      {
        type: 'icon',
        title: 'Node.js',
        href: 'https://nodejs.org/',
        src: nodeIcon,
        gaLabel: 'Node.js in projects section',
      },
      {
        type: 'icon',
        title: 'Twilio',
        href: 'https://www.twilio.com/',
        src: twilioIcon,
        gaLabel: 'Twilio in projects section',
      },
      {
        type: 'icon',
        title: 'AWS',
        href: 'https://aws.amazon.com/',
        src: awsIcon,
        gaLabel: 'AWS in projects section',
      },
      {
        type: 'icon',
        title: 'Chrome Dev Tools',
        href: 'https://developers.google.com/web/tools/chrome-devtools',
        src: chromeDevIcon,
        gaLabel: 'Chrome Dev Tools in projects section',
      },
    ],
  },
  {
    title: 'PDPU Scheduler',
    githubLink: 'https://github.com/nish17/scheduler',
    gaCategory: 'Github',
    gaLabel: 'PDPU Scheduler',
    description:
      'Voice App for Google Assistant which tells the students about their day to day schedule including their lectures and labs.',
    imgSrc: AoG,
    imgClass: 'project-img',
    techStack: [
      { type: 'title', label: 'VUI:' },
      {
        type: 'icon',
        title: 'Google Assistant',
        href: 'https://developers.google.com/assistant',
        src: AoG,
        gaLabel: 'Google Assitant in projects section',
      },
      {
        type: 'icon',
        title: 'DialogFlow',
        href: 'https://dialogflow.com/',
        src: DialogFlowIcon,
        gaLabel: 'Dialogflow in projects section',
      },
      { type: 'title', label: 'Backend:' },
      {
        type: 'icon',
        title: 'Node.js',
        href: 'https://nodejs.org/',
        src: nodeIcon,
        gaLabel: 'Node.js in projects section',
      },
      {
        type: 'icon',
        title: 'Firebase Cloud Functions',
        href: 'https://firebase.google.com/docs/functions',
        src: FirebaseIcon,
        gaLabel: 'Firebase in projects section',
      },
      {
        type: 'icon',
        title: 'Momentjs',
        href: 'https://momentjs.com/',
        src: MomentIcon,
        gaLabel: 'Moment.js in projects section',
        extraClass: 'inc-width',
      },
    ],
  },
  {
    title: 'GDG Ahmedabad',
    githubLink: 'https://github.com/nish17/GDG-Ahmedabad-Action',
    gaCategory: 'Github',
    gaLabel: 'GDG Ahmedabad Action',
    description:
      'Voice app that gives the information about GDG, DevFests and core-committe members of GDG Ahmedabad. It also shows information about the schedule of all talks.',
    imgSrc: AoG,
    imgClass: 'project-img',
    techStack: [
      { type: 'title', label: 'VUI:' },
      {
        type: 'icon',
        title: 'Google Assistant',
        href: 'https://developers.google.com/assistant',
        src: AoG,
        gaLabel: 'Google Assistant in projects section',
      },
      {
        type: 'icon',
        title: 'DialogFlow',
        href: 'https://dialogflow.com/',
        src: DialogFlowIcon,
        gaLabel: 'Dialogflow in projects section',
      },
      { type: 'title', label: 'Backend:' },
      {
        type: 'icon',
        title: 'Node.js',
        href: 'https://nodejs.org/',
        src: nodeIcon,
        gaLabel: 'Node.js in projects section',
      },
      {
        type: 'icon',
        title: 'Firebase Cloud Functions',
        href: 'https://firebase.google.com/docs/functions',
        src: FirebaseIcon,
        gaLabel: 'Firebase in projects section',
      },
    ],
  },
  {
    title: 'DataStructure Visualizer',
    githubLink: 'https://github.com/nish17/bixby-DataStructure-Visualizer',
    gaCategory: 'Github',
    gaLabel: 'DataStructure Visualizer',
    description:
      'Voice app that gives the information about Linear Data Structure, Non-Linear Data Structure. It also shows visual representation of all the data structures.',
    imgSrc: BixbyLogo,
    imgClass: 'project-img',
    techStack: [
      { type: 'title', label: 'VUI:' },
      {
        type: 'icon',
        title: 'Samsung Bixby',
        href: 'http://bixbydevelopers.com/',
        src: BixbyIcon,
        gaLabel: 'Bixby in projects section',
      },
      { type: 'title', label: 'Backend:' },
      {
        type: 'icon',
        title: 'Node.js',
        href: 'https://nodejs.org/',
        src: nodeIcon,
        gaLabel: 'Node.js in projects section',
      },
    ],
  },
];

const Projects = () => {
  useEffect(() => {
    ga.logPageView();
  }, []);

  return (
    <div className='projects'>
      <h3>Projects</h3>
      <div className='projects-container'>
        {projectsData.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='project-title'>
              <a
                onClick={() =>
                  ga.logCustomEvent(project.gaCategory, project.gaLabel)
                }
                href={project.githubLink}
              >
                <div>{project.title}</div>
              </a>
            </div>
            <div className='tech-stack'>
              {project.techStack.map((tech, i) => (
                <React.Fragment key={i}>
                  {tech.type === 'title' && (
                    <div className='tech-title'>{tech.label}</div>
                  )}
                  {tech.type === 'text' && tech.label}
                  {tech.type === 'icon' && (
                    <a
                      className={`tech-icons-container ${tech.extraClass ? tech.extraClass : ''
                        }`}
                      title={tech.title}
                      href={tech.href}
                      onClick={() =>
                        ga.logCustomEvent('techStack', tech.gaLabel)
                      }
                    >
                      <img className='tech-icons' src={tech.src} alt={tech.title} />
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className='project-desc'>{project.description}</div>
            <img className={project.imgClass} src={project.imgSrc} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
// src='/../assets/nodejs_icon.jpeg'
