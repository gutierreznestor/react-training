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

    render() {
        return (
        <div>
            <ReactCardFlip isFlipped={this.props.isFlipped && !this.props.match} >
                <div className="item" onClick={() => this.props.handleClick()}>
                </div>
                <div className="icon" onClick={() => this.props.handleClick()}>
                    <i className={`fa-5x ${ this.props.icon}`}></i>
                </div>
            </ReactCardFlip>
        </div>)
    }
}

export default Item;