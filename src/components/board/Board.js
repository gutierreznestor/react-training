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
    
    handleClick(index) {
        let board = this.state.board.map( item => {
            if(item.index === index) return {
                ...item,
                isFlipped: !item.isFlipped
            }
            return item;
        });
        this.setState({
            board
        });
        this.props.addAttempt();
    }

    resetBoard() {
        this.setState({
            board: this.state.board.map( item => ({...item, isFlipped: false}))
        }); 
        const waitForAnimationToFinish = 1000;
        setTimeout(() => {
            this.setState({
                board: initializeBoard()
            });   
        }, waitForAnimationToFinish);
    }

    render() {
        return (<div>
            <button onClick={ () => this.resetBoard()}>
                Reiniciar
            </button>
            <div className="board">
            { this.state.board.map( item => (
                <Item key={item.index} 
                    icon={item.icon}
                    disabled={item.disabled}
                    isFlipped={item.isFlipped}
                    index={item.index}
                    handleClick={(idx) => { this.handleClick(idx)}}
                    addAttempt={() => this.props.addAttempt()}
                />
            ))}
            </div>
        </div>)
    }
}

export default Board;