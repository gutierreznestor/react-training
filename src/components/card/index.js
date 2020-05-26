import React from 'react';
import './Card.scss';
import ReactCardFlip from 'react-card-flip';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.item);
  }

  render() {
    const { isFlipped, match, icon } = this.props.item;
    return (
      <div>
        <ReactCardFlip isFlipped={isFlipped && !match}>
          <div className='card card__item' onClick={this.handleClick}></div>
          <div className='card card__icon'>
            <i className={`fa-5x fas ${icon}`}></i>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Item;
