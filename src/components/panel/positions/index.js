import React from 'react';
import { PanelPositions, PositionItems } from './Positions';

const Positions = (props) => {
  let positions = props.positions ? props.positions : [];
  return (
    <PanelPositions>
      <h3>Positions</h3>
      <div>
        {positions.map((pos) => {
          return (
            <PositionItems key={pos.key}>
              <div>{pos.player}</div>
              <div>{pos.attempts}</div>
            </PositionItems>
          );
        })}
      </div>
    </PanelPositions>
  );
};

export default Positions;
