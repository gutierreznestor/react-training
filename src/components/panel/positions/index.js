import React from 'react';

const Positions = (props) => {
  let positions = props.positions ? props.positions : [];
  return (
    <div className='panel__positions'>
      <h3>Positions</h3>
      <ol>
        {positions.map((pos) => {
          return (
            <li key={pos.key}>
              {pos.player}: {pos.attempts}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Positions;
