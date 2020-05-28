import React from 'react';
import { StyledHeader, Logo, Actions, ActionsButton } from './Header';

const Header = ({ newGame, resetPositions, changePlayer }) => {
  return (
    <StyledHeader>
      <Logo>Logo</Logo>
      <Actions>
        <ActionsButton onClick={resetPositions}>Reset positions</ActionsButton>
        <ActionsButton onClick={newGame}>New Game</ActionsButton>
        <ActionsButton onClick={changePlayer}>Change Player</ActionsButton>
      </Actions>
    </StyledHeader>
  );
};

export default Header;
