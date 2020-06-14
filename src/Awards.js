import React from 'react';

import VOICE from './assets/Voice.webp';
import VoiceAwards from './assets/inside_voice_awards.png';
import RisingStar from './assets/risingStar.png';
import bixbyPD from './assets/bixbyPD.png';

const Awards = () => {
  return (
    <div className='awards'>
      <h3>Awards</h3>
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
                Podcast{' '}
                <a
                  href='https://podcasts.apple.com/us/podcast/developing-voice-skills-as-a-student/id1447407838?i=1000447426808'
                  target='_blank'
                >
                  Link
                </a>
              </div>
            </div>
          </div>
          <div className='award-right-side'>
            <figure>
              <img className='award-img-1' src={VoiceAwards} />
              <img className='show-img-1' src={RisingStar} />
            </figure>
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
        <div className='award-3'>3</div>
        <div className='award-4'>4</div>
        <div className='award-5'>5</div>
        <div className='award-6'>6</div>
      </div>
    </div>
  );
};

export default Awards;
