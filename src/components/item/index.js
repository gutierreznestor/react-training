import React from 'react';
import './Item.css';
import ReactCardFlip from 'react-card-flip';

class Item extends React.Component  {

    render() {
        return (
        <div>
            <ReactCardFlip isFlipped={this.props.item.isFlipped && !this.props.item.match} >
                <div className="item" 
                    onClick={ this.props.handleClick }>
                </div>
                <div className="icon" 
                    onClick={ this.props.handleClick }>
                    <i className={`fa-5x ${ this.props.item.icon}`}></i>
                </div>
            </ReactCardFlip>
        </div>)
    }
}

export default Item;