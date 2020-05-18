import React from 'react';
import './Board.css';
import Item from '../item/Item';
import { initializeBoard } from './initializeBoard';

class Board extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            board: initializeBoard()
        }
    }

    render() {
        return (<div className="board">
            { this.state.board.map( item => (
                <Item key={item.index} 
                    icon={item.icon}/>
            ))}
        </div>)
    }

}

export default Board;