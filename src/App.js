import React from 'react';
import './App.css';
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
          this.setState({current: null});
          match = true;
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
      <div className="App">
        <header className="App-header">
          <div>React Memoria</div>
          <div>Intentos: { this.state.attempts }</div>
          <div>
            <button onClick={ this.onResetBoard }>
              Reset
            </button>
          </div>
        </header>
        <div className="container">
          <Board 
            board= {this.state.board}
            handleClick={ this.onHandleClick }
          />
        </div>
      </div>
    );
  }
}

export default App;
