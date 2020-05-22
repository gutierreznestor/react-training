import React from 'react';
import './App.scss';
import Header from './components/header';
import Board from './components/board';
import { initializeBoard } from './components/board/initializeBoard';

const {board, items} = initializeBoard();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board,
      current: null,
      items,
      matched: 0,
      attempts: 0
    };
    this.addAttempt = this.addAttempt.bind(this);
    this.onResetBoard = this.onResetBoard.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.flipItem = this.flipItem.bind(this);
    this.areEquals = this.areEquals.bind(this);
    this.hasWon = this.hasWon.bind(this);
  }

  hasWon (matched, items) {
    return matched === items;
  }

  addAttempt (match) {
    const newMatched = match? this.state.matched+1 : this.state.matched;
    this.setState( prevState => ({
        attempts: prevState.attempts+1
    }));
    if (this.hasWon(newMatched, this.state.items)) {
        setTimeout(() => {
            this.onResetBoard();
        }, 3000);           
    } else {
        this.setState({
            matched: newMatched
        })
    }
  }

  onResetBoard () {
    this.setState(prevState => ({
        board: prevState.board.map( item => ({...item, isFlipped: false}))
    }));         
    const {board, items} = initializeBoard()
    setTimeout(() => {
        this.setState({
            board,
            current: null,
            items,
            matched: 0,
            attempts: 0
        });   
    }, 1000);
  }

  flipItem (code) {
    const board = this.state.board.reduce((acc, item) => {
      item.code === code ?
        acc.push({
          ...item,
          isFlipped: !item.isFlipped,
          disabled: !item.disabled
        }) :
        acc.push(item);
      return acc;
    }, []);
    this.setState({board})
  }

  areEquals (icon1, icon2) {
    return icon1 === icon2;
  }

  onHandleClick ({code, icon}) {
    
    this.flipItem(code);
    if (!this.state.current) {
        this.setState({
            current: {
                code,
                icon
            }
        })
    } else {
      let match = false;
      const areEquals = this.areEquals(this.state.current.icon, icon);
      if (areEquals) {
          match = true;
          this.setState({current: null})                
      } else {
          setTimeout(() => {      
              this.flipItem(code);
              this.flipItem(this.state.current.code)              
              this.setState({current: null})                
            }, 1200);
      }
      this.addAttempt(match);            
    }
  }

  render() {
    return (
      <div className="app">
        <Header 
          newGame={ this.onResetBoard }
        />
        <div className="app__content">
          <Board 
            board= {this.state.board}
            handleClick={ this.onHandleClick }
          />
          <div className="app__panel">
            <div className="panel__player">
              <h3>Current player</h3>
              <div>Name: Guty</div>
              <div># Attempts: { this.state.attempts }</div>
            </div>
            <div className="panel__positions">
              <h3>Positions</h3>
              <ol>
                <li>player: 12</li>
                <li>player: 12</li>
                <li>player: 12</li>
                <li>player: 12</li>
                <li>player: 12</li>
                <li>player: 12</li>
                <li>player: 12</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="app__footer">
          Training 2020
        </div>
      </div>
    );
  }
}

export default App;
