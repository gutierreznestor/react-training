import React from 'react';
import './Item.css';
import ReactCardFlip from 'react-card-flip';

class Item extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        }
    }

    handleClick() {
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
        <div>
            <ReactCardFlip isFlipped={this.props.isFlipped} >
                <div className="item" onClick={() => this.handleClick()}>
                </div>
                <div className="icon" onClick={() => this.handleClick()}>
                    <i className={`fa-5x ${ this.props.icon}`}></i>
                </div>
            </ReactCardFlip>
        </div>)
    }
}

export default Item;