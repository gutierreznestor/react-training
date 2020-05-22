import React from 'react';
import './Item.css';
import ReactCardFlip from 'react-card-flip';

class Item extends React.Component  {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.item);
    }

    render() {
        return (
        <div>
            <ReactCardFlip isFlipped={this.props.item.isFlipped && !this.props.item.match} >
                <div className="item" 
                    onClick={ this.handleClick }>
                    <i className={`fa-5x ${ this.props.item.icon}`}></i>
                </div>
                <div className="icon" 
                    onClick={ this.handleClick }>
                    <i className={`fa-5x ${ this.props.item.icon}`}></i>
                </div>
            </ReactCardFlip>
        </div>)
    }
}

export default Item;