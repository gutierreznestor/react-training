import React from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import { background, color, FlexCenter } from '../../variables/global';

const Card = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px;
  color: ${color.black};
`;

const CardCenter = styled(FlexCenter)`
  width: 100px;
  height: 100px;
  margin: 5px;
  color: ${color.black};
`;

const CardItem = styled(Card)`
  background-color: ${background.item_orange};
  flex-grow: 1;
`;

const CardIcon = styled(CardCenter)`
  display: flex;
  justify-content: center;
  align-items: center;
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
          <CardItem onClick={this.handleClick}></CardItem>
          <CardIcon>
            <i className={`fa-5x fas ${icon}`}></i>
          </CardIcon>
        </ReactCardFlip>
      </Card>
    );
  }
}

export default Item;
