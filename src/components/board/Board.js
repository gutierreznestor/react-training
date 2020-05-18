import React from 'react';
import './Board.css';
import Item from '../item/Item';

class Board extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div className="board">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>)
    }

}

export default Board;