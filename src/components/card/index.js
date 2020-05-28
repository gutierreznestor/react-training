import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, CardFront, CardBack } from './Card';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.item);
  }

  render() {
    const { isFlipped, match, icon } = this.props.item;
    return (
      <Card>
        <ReactCardFlip isFlipped={isFlipped && !match}>
          <CardFront onClick={this.handleClick}></CardFront>
          <CardBack>
            <i className={`fa-5x fas ${icon}`}></i>
          </CardBack>
        </ReactCardFlip>
      </Card>
    );
  }
}

export default Item;
