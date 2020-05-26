import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import { background, color, FlexCenter } from '../../variables/global';

const Card = styled(FlexCenter)`
  width: 100px;
  height: 100px;
  margin: 5px;
  color: ${color.black};
  border-radius: 5px;
`;

const CardFront = styled(Card)`
  background-color: ${background.item_orange};
  flex-grow: 1;
`;

const CardBack = styled(Card)`
  background-color: ${background.item_blue};
  flex-grow: 1;
`;

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
