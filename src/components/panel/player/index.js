import React from 'react';
import './Player.scss';

const Player = (props) => {
  return (
    <div className='panel__player'>
      <h3>Current player</h3>
      <div>Name: Guty</div>
      <div># Attempts: {props.attempts}</div>
    </div>
  );
};

export default Player;
