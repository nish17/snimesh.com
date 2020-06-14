import React, { useEffect } from 'react';

const GithubCard = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://cdn.jsdelivr.net/github-cards/latest/widget.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className='github-card'
        data-github='nish17'
        data-width='400'
        data-height=''
        data-theme='default'
      ></div>
    </div>
  );
};

export default GithubCard;
