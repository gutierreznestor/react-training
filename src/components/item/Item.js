import React, {useState} from 'react';
import './Item.css';
import ReactCardFlip from 'react-card-flip';

const Item = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (<div>
        <ReactCardFlip isFlipped={isFlipped} >
            <div className="item" onClick={() => setIsFlipped(!isFlipped)}>
            </div>
            <div className="icon" onClick={() => setIsFlipped(!isFlipped)}>
                <i className="fas fa-headphones fa-5x"></i>
            </div>
        </ReactCardFlip>
    </div>)
}

export default Item;