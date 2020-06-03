import React from 'react';

const GithubCard = () => {
  return (
    <div>
      <div
        class='github-card'
        data-github='nish17'
        data-width='400'
        data-height=''
        data-theme='default'
      ></div>
      <script src='//cdn.jsdelivr.net/github-cards/latest/widget.js'></script>
    </div>
  );
};

export default GithubCard;
