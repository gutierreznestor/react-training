import React from 'react';
import './Board.css';
import Item from '../item/Item';
import { initializeBoard } from './initializeBoard';

class Board extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            board: initializeBoard(),
            current: null
        }
        this.waitForAnimation = 1000;
    }

    areEquals( icon1, icon2 ) {
        return icon1 === icon2;
    }
    
    flipItem (idx) {
        const board = [...this.state.board];
        board[idx].isFlipped = !board[idx].isFlipped;
        this.setState({board})
    }

    handleClick (code, idx, icon) {
        if (!this.state.current) {
            this.flipItem(idx);
            this.setState({
                current: {
                    code, idx, icon
                }
            })
        } else {
            this.flipItem(idx);
            const areEquals = this.areEquals(this.state.current.icon, this.state.board[idx].icon);
            if (areEquals) {
                this.setState({current: null})
            } else {
                setTimeout(() => {      
                    this.flipItem(idx);
                    this.flipItem(this.state.current.idx)              
                    this.setState({current: null})                
                }, this.waitForAnimation);
            }
            this.props.addAttempt();
        }
    }

    resetBoard() {
        this.setState({
            board: this.state.board.map( item => ({...item, isFlipped: false}))
        });         
        setTimeout(() => {
            this.setState({
                board: initializeBoard(),
                current: null
            });   
        }, this.waitForAnimation);
        this.props.reset();
    }

    render() {
        return (<div className="container">
            <button 
                onClick={ () => this.resetBoard()}
                className="resetButton">
                Reiniciar
            </button>
            <div className="board">
            { this.state.board.map( (item, idx) => (
                <Item key={item.code} 
                    icon={item.icon}
                    disabled={item.disabled}
                    isFlipped={item.isFlipped}
                    code={item.code}
                    handleClick={() => { this.handleClick(item.code,idx,item.icon)}}
                    match={item.match}
                    addAttempt={() => this.props.addAttempt()}
                />
            ))}
            </div>
        </div>)
    }
}

export default Board;