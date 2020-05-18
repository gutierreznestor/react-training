import React from 'react';
import './Item.css';
import ReactCardFlip from 'react-card-flip';

class Item extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            disabled: false,
            icon: props.icon
        }
    }

    render() {
        return (<div>
            <ReactCardFlip isFlipped={this.state.isFlipped} >
                <div className="item" onClick={() => this.setState({
                    isFlipped: !this.state.isFlippedd,
                    disabled: !this.state.isFlipped
                    })}>
                </div>
                <div className="icon" onClick={() => this.setState({
                    isFlipped: !this.state.isFlippedd,
                    disabled: !this.state.isFlipped
                    })}>
                    <i className={`fa-5x ${ this.state.icon}`}></i>
                </div>
            </ReactCardFlip>
        </div>)
    }
}

export default Item;