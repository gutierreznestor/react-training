import React from 'react';
import { PanelPositions, PositionItems } from './Positions';

const Positions = ({ positions = [] }) => {
  return (
    <PanelPositions>
      <h3>Positions</h3>
      <div>
        {positions.map(({ key, player, attempts }) => {
          return (
            <PositionItems key={key}>
              <div>{player}</div>
              <div>{attempts}</div>
            </PositionItems>
          );
        })}
      </div>
    </PanelPositions>
  );
};

export default Positions;
