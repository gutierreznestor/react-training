import React from 'react';
import styled from 'styled-components';
import Card from '../card';
import { FlexCenter } from '../../variables/global';

const StyledBoard = styled(FlexCenter)`
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 550px;
`;

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
