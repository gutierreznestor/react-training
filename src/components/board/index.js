import React from 'react';
import './Board.scss';
import Card from '../card';

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
        return (
            <div className="board">
                <div className="board__content">
                    { this.props.board.map( item => (
                        <Card item={item}
                            key={item.code}
                            handleClick={ this.handleClick }
                        />
                    ))}
                </div>
            </div>)
    }
}

export default Board;