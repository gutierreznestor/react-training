import React from 'react';
import './Board.css';
import Item from '../item';

class Board extends React.Component {
    render() {
        return (<div className="container">
            <div className="board">
            { this.props.board.map( (item, idx) => (
                <Item item={item}
                    key={item.code}
                    handleClick={ () => !item.disabled? this.props.handleClick(idx,item.icon): undefined }
                />
            ))}
            </div>
        </div>)
    }
}

export default Board;