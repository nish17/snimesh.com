import React, { useEffect } from 'react';

const StackOverFlowCard = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      '//mudassir0909.github.io/stackoverflow-card/dist/1.0.0/so-card-widget.min.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id='so-card-widget' data-userid='5539913' data-theme='minimal'></div>
    </div>
  );
};

export default StackOverFlowCard;
