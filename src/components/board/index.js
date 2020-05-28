import React from 'react';
import './Board.css';
import Item from '../item';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        if (!item.disable) {
            this.props.handleClick(item);
        }
    }

    render() {
        return (<div className="container">
            <div className="board">
            { this.props.board.map( item => (
                <Item item={item}
                    key={item.code}
                    handleClick={ this.handleClick }
                />
            ))}
            </div>
        </div>)
    }
}

export default Board;