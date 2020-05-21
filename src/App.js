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
          <div className="app__panel">
            <div className="panel__player">
              <h3>Current player</h3>
              <div>Name: Guty</div>
              <div># Attempts: 12</div>
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
