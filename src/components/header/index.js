import React from 'react';
import styled from 'styled-components';
import { border, color } from '../../variables/global';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.2rem;
  border-bottom: 1px solid ${border.white};
`;

const Logo = styled.div`
  background-color: ${color.white};
  color: ${color.black};
  padding: 3px 20px;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ActionsButton = styled.div`
  padding: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.newGame = this.newGame.bind(this);
    this.resetPositions = this.resetPositions.bind(this);
  }

  newGame() {
    this.props.newGame();
  }

  resetPositions() {
    this.props.resetPositions();
  }

  render() {
    return (
      <StyledHeader>
        <Logo>Logo</Logo>
        <Actions>
          <ActionsButton onClick={this.resetPositions}>
            Reset positions
          </ActionsButton>
          <ActionsButton onClick={this.newGame}>New Game</ActionsButton>
          <ActionsButton onClick={this.props.changePlayer}>
            Change Player
          </ActionsButton>
        </Actions>
      </StyledHeader>
    );
  }
}

export default Header;
