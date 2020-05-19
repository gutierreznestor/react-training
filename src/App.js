import React from 'react';
import './App.css';
import Board from './components/board/Board';

const initialState = {
  attempts: 0
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addAttempt() {
    this.setState({
        attempts: this.state.attempts+1
    });
  }

  reset() {
    this.setState({
      attempts: 0
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>React Memoria</div>
          <div>Intentos: { this.state.attempts }</div>
        </header>
        <div className="container">
          <Board 
            addAttempt={ () => {this.addAttempt()}}
            reset={ () => {this.reset()}}
          />
        </div>
      </div>
    );
  }
}

export default App;
