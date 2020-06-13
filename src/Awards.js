import React from 'react';

import VOICE from './assets/Voice.webp';
import VoiceAwards from './assets/inside_voice_awards.png';
const Awards = () => {
  return (
    <div className='awards'>
      <h3>Awards</h3>
      <div className='awards-container'>
        <div className='award-1'>
          <div className='award-left-side' >
          <div>Rising Star in Voice</div>
          <div>Awarded by Inside Voice Podcast (VOICE Summit 2019)</div>
          </div>
          <div className='award-right-side' >
          <img  className='award-img-1' src={VoiceAwards} />
          </div>
        </div>
        <div className='award-2'>2</div>
        <div className='award-3'>3</div>
        <div className='award-4'>4</div>
        <div className='award-5'>5</div>
        <div className='award-6'>6</div>
      </div>
    </div>
  );
}

export default Awards;