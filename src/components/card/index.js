import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, CardFront, CardBack } from './Card';

const Item = ({ item, flipItem }) => {
  const { isFlipped, match, icon } = item;

  const onCardClick = () => {
    flipItem(item);
  };

  return (
    <Card>
      <ReactCardFlip isFlipped={isFlipped && !match}>
        <CardFront onClick={onCardClick}></CardFront>
        <CardBack>
          <i className={`fa-5x fas ${icon}`}></i>
        </CardBack>
      </ReactCardFlip>
    </Card>
  );
};

export default Item;
