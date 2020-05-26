import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../../variables/global';

const PanelPositions = styled(FlexCenter)`
  flex-direction: column;
  border: $border;
  margin: 10px 0px;
  padding: 20px;
  width: 100%;
`;

const PositionItems = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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
