import React from 'react';
import './App.css';
import Board from './components/board/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>React Memoria</div>
        <div>
          <button>Reiniciar</button>
        </div>
        <div>Intentos</div>
      </header>
      <div className="container">
        <Board />
      </div>
    </div>
  );
}

export default App;
