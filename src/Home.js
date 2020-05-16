import React from 'react';
import Typical from 'react-typical';

const Home = () => {
  return (
    <div className='child-center'>
      <div className='text-center'>
        <h5>Hello there!</h5>
        <h1 class='glitch' data-text="I'm Nimesh Solanki" >
            I'm Nimesh Solanki
        </h1>
        <h5>
          {/* <strong>

          I'm a{' '}
          </strong> */}
          <span>
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                'Full Stack Web Developer.',
                1000,
                '',
                'Full Stack Chatbot/Voice Developer.',
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
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Home;
