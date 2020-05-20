import React from 'react';
import './Card.scss';
import ReactCardFlip from 'react-card-flip';

class Card extends React.Component  {
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
                <div className="card card__item" onClick={() => this.props.handleClick()}>
                </div>
                <div className="card card__icon" onClick={() => this.props.handleClick()}>
                    <i className={`fa-5x fas ${ this.props.icon}`}></i>
                </div>
            </ReactCardFlip>
        </div>)
    }
}

export default Card;