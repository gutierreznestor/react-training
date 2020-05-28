import React from 'react';
import { StyledHeader, Logo, Actions, ActionsButton } from './Header';

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
