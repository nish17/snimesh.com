import React from 'react';

import VOICE from './assets/Voice.webp';
import RisingStar from './assets/risingStar.png';
import bixbyPD from './assets/bixbyPD.png';
import gdg from './assets/gdgahm.jpeg';
import alexa from './assets/alexa.png';
// import VoiceAwards from './assets/inside_voice_awards.png';

const Awards = () => {
  return (
    <div className='awards'>
      <h3>Awards & Achievements</h3>
      <div className='awards-container'>
        <div className='award-1'>
          <div className='award-left-side'>
            <div className='award-title'>Rising Star in Voice</div>
            <div className='award-program'>Inside Voice Podcast Awards</div>
            <div className='award-org'>VOICE Summit 2019</div>
            <div className='award-link'>
              <div>
                Link:{' '}
                <a
                  href='https://www.voicesummit.ai/blog/the-winners-of-the-inside-voice-podcast-awards-are'
                  target='_blank'
                >
                  VOICE Summit Blog
                </a>
              </div>
              <div>
                Link:{' '}
                <a
                  href='https://podcasts.apple.com/us/podcast/developing-voice-skills-as-a-student/id1447407838?i=1000447426808'
                  target='_blank'
                >
                  Podcast
                </a>
              </div>
            </div>
          </div>
          <div className='award-right-side'>
              <img className='award-img-1' src={RisingStar} />
          </div>
        </div>
        <div className='award-2'>
          <div className='award-left-side'>
            <div className='award-title'>First Class Premier Developer</div>
            <div className='award-program'>
              Samsung Bixby Premier Developer Program 2019
            </div>
            <div className='award-org'>Samsung Electronics America</div>
          </div>
          <div className='award-right-side'>
            <img className='award-img-2' src={bixbyPD} />
          </div>
        </div>
        <div className='award-3'>
          <div className='award-left-side'>
            <div className='award-title'>#1 VOICE Ambassador Globally</div>
            <div className='award-program'>Voice Event Ambassador Program</div>
            <div className='award-org'>Voice Summit 2019</div>
          </div>
          <div className='award-right-side'>
            <img className='award-img-3' src={VOICE} />
          </div>
        </div>
        <div className='award-4'>
          <div className='award-left-side'>
            <div className='award-title'>Tech-Speaker</div>
            <div className='award-program'>DevFest Ahmedabad 2019</div>
            <div className='award-org'>GDG Ahmedabad</div>
            <div className='award-link'>
              <div>
                Link:{' '}
                <a
                  href='https://speakerdeck.com/nimeshs17/best-practices-of-vui-design'
                  target='_blank'
                >
                  SpeakerDeck
                </a>
              </div>
              <div>
                Link: {' '}
                <a href='https://youtu.be/JMbSDu80TlU' target='_blank'>Recorded Session</a>
              </div>
            </div>
          </div>
          <div className='award-right-side'>
            <img className='award-img-4' src={gdg} />
          </div>
        </div>
        <div className='award-5'>
          <div className='award-left-side'>
            <div className='award-title'>Tech-Speaker</div>
            <div className='award-program'>DevFest Ahmedabad 2018</div>
            <div className='award-org'>GDG Ahmedabad</div>
            <div className='award-link'>
              <div>
                Link:{' '}
                <a
                  href='https://speakerdeck.com/jaldeepasodariya/codelab-actions-on-google-devfestahm18'
                  target='_blank'
                >
                  SpeakerDeck
                </a>
              </div>
            </div>
          </div>
          <div className='award-right-side'>
            <img className='award-img-4' src={gdg} />
          </div>
        </div>
        <div className='award-6'>
        <div className='award-left-side'>
            <div className='award-title'>Conducted Workshop </div>
            <div className='award-program'>Alexa Skill Development</div>
            <div className='award-org'>PDPU's TechFest 2019</div>
            <div className='award-link'>
              <div>
                Link:{' '}
                <a
                  href='https://speakerdeck.com/nimeshs17/alexa-workshop-pdpu-2019'
                  target='_blank'
                >
                  SpeakerDeck
                </a>
              </div>
            </div>
          </div>
          <div className='award-right-side'>
            <img className='award-img-5' src={alexa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
