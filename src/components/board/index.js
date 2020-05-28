import React from 'react';
import Card from '../card';
import { StyledBoard, Content } from './Board';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    if (!item.disable) {
      this.props.handleClick(item);
    }
  }

  render() {
    return (
      <StyledBoard>
        <Content>
          {this.props.board.map((item) => (
            <Card item={item} key={item.code} handleClick={this.handleClick} />
          ))}
        </Content>
      </StyledBoard>
    );
  }
}

export default Board;
