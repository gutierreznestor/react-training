import React from 'react';
import './Card.scss';
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
                <div className="card card__item" 
                    onClick={ this.handleClick }>
                </div>
                <div className="card card__icon" 
                    onClick={ this.handleClick }>
                    <i className={`fa-5x fas ${ this.props.item.icon}`}></i>
                </div>
            </ReactCardFlip>
        </div>)
    }
}

export default Item;