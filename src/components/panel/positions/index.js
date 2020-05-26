import React from 'react';
import './Positions.scss';

const Positions = (props) => {
  let positions = props.positions ? props.positions : [];
  return (
    <div className='panel__positions'>
      <h3>Positions</h3>
      <div>
        {positions.map((pos) => {
          return (
            <div key={pos.key}>
              <div className='positions__items'>
                <div>{pos.player}</div>
                <div>{pos.attempts}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Positions;
