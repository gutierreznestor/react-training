import React from 'react';
import './Board.scss';
import Card from '../card/Card';
import { initializeBoard } from './initializeBoard';

const {board, items} = initializeBoard();
const initialState = {
    board,
    current: null,
    items,
    matched: 0,
    attempts: 0
}

class Board extends React.Component  {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.waitForAnimation = 1000;
    }

    addAttempt(match) {
        const newMatched = match? this.state.matched+1 : this.state.matched;
        this.setState({
            attempts: this.state.attempts+1
        });
        if (newMatched === this.state.items) {
            setTimeout(() => {
                this.resetBoard();
            }, 3000);           
        } else {
            this.setState({
                matched: newMatched
            })
        }
        this.props.addAttempt();
    }

    areEquals( icon1, icon2 ) {
        return icon1 === icon2;
    }
    
    flipItem (idx) {
        const board = [...this.state.board];
        board[idx].isFlipped = !board[idx].isFlipped;
        board[idx].disabled = !board[idx].disabled;
        this.setState({board})
    }

    handleClick (idx, icon) {
        if (!this.state.current) {
            this.flipItem(idx);
            this.setState({
                current: {
                    idx, icon
                }
            })
        } else {
            this.flipItem(idx);
            const areEquals = this.areEquals(this.state.current.icon, this.state.board[idx].icon);
            let match = false;
            if (areEquals) {
                this.setState({current: null});
                match = true;
            } else {
                setTimeout(() => {      
                    this.flipItem(idx);
                    this.flipItem(this.state.current.idx)              
                    this.setState({current: null})                
                }, this.waitForAnimation);
            }
            this.addAttempt(match);            
        }
    }

    resetBoard() {
        this.setState({
            board: this.state.board.map( item => ({...item, isFlipped: false}))
        });         
        const {board, items} = initializeBoard()
        setTimeout(() => {
            this.setState({
                board: board,
                current: null,
                items,
                matched: 0
            });   
        }, this.waitForAnimation);
        this.props.resetScore();
    }

    render() {
        return (<div className="board">
            <button 
                onClick={ () => this.resetBoard()}
                className="board__button">
                Reiniciar
            </button>
            <div className="board__content">
            { this.state.board.map( (item, idx) => (
                <Card key={item.code} 
                    icon={item.icon}
                    isFlipped={item.isFlipped}
                    handleClick={() => { if (!item.disabled) this.handleClick (idx,item.icon)}}
                    match={item.match}
                />
            ))}
            </div>
        </div>)
    }
}

export default Board;