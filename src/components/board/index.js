import React from 'react';
import Card from '../card';
import { StyledBoard, Content } from './Board';

const Board = ({ board, flipItem }) => {
  const onFlipItem = (item) => {
    if (!item.disable) {
      flipItem(item);
    }
  };

  return (
    <StyledBoard>
      <Content>
        {board.map((item) => (
          <Card item={item} key={item.code} flipItem={onFlipItem} />
        ))}
      </Content>
    </StyledBoard>
  );
};

export default Board;
