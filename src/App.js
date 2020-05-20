import React from 'react';
import './App.scss';
import Board from './components/board/Board';
import Header from './components/header/Header';

const initialState = {
  attempts: 0
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addAttempt () {
    this.setState({
      attempts: this.state.attempts+1
    });
  }

  resetScore() {
    this.setState({
      attempts: 0
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__content">
          <Board 
            addAttempt={ () => {this.addAttempt()}}
            resetScore={ () => {this.resetScore()}}
          />
        </div>
      </div>
    );
  }
}

export default App;
