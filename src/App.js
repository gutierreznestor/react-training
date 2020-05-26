import React from 'react';
import './App.scss';
import Header from './components/header';
import Board from './components/board';
import { initializeBoard } from './components/board/initializeBoard';
import Player from './components/panel/player';
import Positions from './components/panel/positions';

const { board, items } = initializeBoard();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board,
      current: null,
      items,
      matched: 0,
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
    this.areEquals = this.areEquals.bind(this);
    this.hasWon = this.hasWon.bind(this);
    this.onChangePlayer = this.onChangePlayer.bind(this);
    this.onSetPlayer = this.onSetPlayer.bind(this);
    this.onResetPositions = this.onResetPositions.bind(this);
  }

  hasWon(matched, items) {
    return matched === items;
  }

  addAttempt(match) {
    const { matched, items } = this.state;
    const newMatched = match ? matched + 1 : matched;
    this.setState((prevState) => ({
      attempts: prevState.attempts + 1,
    }));
    if (this.hasWon(newMatched, items)) {
      setTimeout(() => {
        const newPosition = {
          player: this.state.currentPlayer,
          attempts: this.state.attempts,
          key: this.state.gameNumber,
        };
        this.setState((prevState) => ({
          positions: [...prevState.positions, newPosition],
        }));
        this.onResetBoard();
      }, 3000);
    } else {
      this.setState({
        matched: newMatched,
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
    const { board, items } = initializeBoard();
    setTimeout(() => {
      this.setState((prevState) => ({
        board,
        current: null,
        items,
        matched: 0,
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

  areEquals(icon1, icon2) {
    return icon1 === icon2;
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
      const areEquals = this.areEquals(this.state.current.icon, icon);
      if (areEquals) {
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

  render() {
    return (
      <div className='app'>
        <Header
          newGame={this.onResetBoard}
          changePlayer={this.onChangePlayer}
          resetPositions={this.onResetPositions}
        />
        <div className='app__content'>
          <Board board={this.state.board} handleClick={this.onFlipItem} />
          <div className='app__panel'>
            <Player
              attempts={this.state.attempts}
              changePlayer={this.state.changePlayer}
              currentPlayer={this.state.currentPlayer}
              setPlayer={this.onSetPlayer}
            ></Player>
            <Positions positions={this.state.positions} />
          </div>
        </div>
        <div className='app__footer'>Training 2020</div>
      </div>
    );
  }
}

export default App;
