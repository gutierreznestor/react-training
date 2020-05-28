import React from 'react';
import axios from 'axios';

import Header from './components/header';
import Board from './components/board';
import { initializeBoard } from './components/board/initializeBoard';
import Player from './components/panel/player';
import Positions from './components/panel/positions';
import { StyledApp } from './app-styles';
import { AppContent } from './app-styles';
import { AppPanel } from './app-styles';
import { AppFooter } from './app-styles';
import { API_URL } from './variables/global';

const { board, totalItems } = initializeBoard();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board,
      current: null,
      totalItems,
      itemsMatched: 0,
      attempts: 0,
      currentPlayer: 'Player 01',
      changePlayer: false,
      positions: [],
      gameNumber: 0,
    };
    this.addAttempt = this.addAttempt.bind(this);
    this.onResetBoard = this.onResetBoard.bind(this);
    this.onFlipItem = this.onFlipItem.bind(this);
    this.flipItem = this.flipItem.bind(this);
    this.onChangePlayer = this.onChangePlayer.bind(this);
    this.onSetPlayer = this.onSetPlayer.bind(this);
    this.onResetPositions = this.onResetPositions.bind(this);
    this.orderPositions = this.orderPositions.bind(this);
    this.loadPositions = this.loadPositions.bind(this);
  }

  async loadPositions() {
    const url = `${API_URL}positions`;
    let { data: positions } = await axios.get(url);
    positions = this.orderPositions(positions);
    this.setState({ positions });
  }

  orderPositions(positions) {
    positions = positions.sort((a, b) => {
      const compare =
        a.attempts < b.attempts ? -1 : a.attempts > b.attempts ? 1 : 0;
      return compare;
    });
    return positions;
  }

  addAttempt(match) {
    const { itemsMatched, totalItems } = this.state;
    const newItemsMatched = match ? itemsMatched + 1 : itemsMatched;
    this.setState((prevState) => ({
      attempts: prevState.attempts + 1,
    }));
    if (newItemsMatched === totalItems) {
      setTimeout(() => {
        const { currentPlayer, attempts, gameNumber } = this.state;
        const newPosition = {
          player: currentPlayer,
          attempts: attempts,
          key: gameNumber,
        };
        this.setState((prevState) => {
          let newPositions = [...prevState.positions, newPosition];
          return {
            positions: this.orderPositions(newPositions),
          };
        });
        this.onResetBoard();
      }, 2000);
    } else {
      this.setState({
        itemsMatched: newItemsMatched,
      });
    }
  }

  onResetBoard() {
    this.setState((prevState) => ({
      board: prevState.board.map((item) => ({
        ...item,
        isFlipped: false,
      })),
    }));
    const { board, totalItems } = initializeBoard();
    setTimeout(() => {
      this.setState((prevState) => ({
        board,
        current: null,
        totalItems,
        itemsMatched: 0,
        attempts: 0,
        gameNumber: prevState.gameNumber + 1,
      }));
    }, 1000);
  }

  flipItem(code) {
    const board = this.state.board.reduce((acc, item) => {
      item.code === code
        ? acc.push({
            ...item,
            isFlipped: !item.isFlipped,
            disabled: !item.disabled,
          })
        : acc.push(item);
      return acc;
    }, []);
    this.setState({ board });
  }

  onFlipItem({ code, icon }) {
    this.flipItem(code);
    if (!this.state.current) {
      this.setState({
        current: {
          code,
          icon,
        },
      });
    } else {
      let match = false;
      if (this.state.current.icon === icon) {
        match = true;
        this.setState({ current: null });
      } else {
        setTimeout(() => {
          this.flipItem(code);
          this.flipItem(this.state.current.code);
          this.setState({ current: null });
        }, 1200);
      }
      this.addAttempt(match);
    }
  }

  onChangePlayer() {
    this.setState({ changePlayer: true });
  }

  onSetPlayer(name) {
    this.setState({ currentPlayer: name, changePlayer: false });
  }

  onResetPositions() {
    this.setState({ positions: [] });
  }

  async componentDidMount() {
    this.loadPositions();
  }

  render() {
    const {
      board,
      attempts,
      changePlayer,
      currentPlayer,
      positions,
    } = this.state;
    return (
      <StyledApp>
        <Header
          newGame={this.onResetBoard}
          changePlayer={this.onChangePlayer}
          resetPositions={this.onResetPositions}
        />
        <AppContent>
          <Board board={board} flipItem={this.onFlipItem} />
          <AppPanel>
            <Player
              attempts={attempts}
              changePlayer={changePlayer}
              currentPlayer={currentPlayer}
              setPlayer={this.onSetPlayer}
            ></Player>
            <Positions positions={positions} />
          </AppPanel>
        </AppContent>
        <AppFooter>Training 2020</AppFooter>
      </StyledApp>
    );
  }
}

export default App;
