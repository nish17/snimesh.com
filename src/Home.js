import React from 'react';
import Typical from 'react-typical';

const Home = () => {
  return (
    <div className='child-center'>
      <div className='text-center'>
        <h5>Hello there!</h5>
        <h1 className='glitch playful' data-text="I'm Nimesh Solanki" >
            I'm Nimesh Solanki
        </h1>
        <h5>
          {/* <span> */}
            <Typical
              loop={Infinity}
              steps={[
                'Full Stack Web Developer.',
                1000,
                '',
                'Full Stack Voice Developer.',
                1000,
                '',
                'Tech speaker.',
                1000,
                '',
                'Conversational AI Enthusiast.',
                1000,
                '',
              ]}
            />
          {/* </span> */}
        </h5>
      </div>
    </div>
  );
};

export default Home;
