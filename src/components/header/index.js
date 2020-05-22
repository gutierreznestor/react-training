import React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.newGame = this.newGame.bind(this);
    }

    newGame() {
        this.props.newGame();
    }

    render() {
        return (
            <header className="app__header">
                <div className="header__logo">Logo</div>
                <div className="header__actions">
                    <div className="header__actions__button">Reset positions</div>
                    <div onClick={ this.newGame } 
                        className="header__actions__button">
                        New Game
                    </div>
                    <div className="header__actions__button">Change Player</div>
                </div>
            </header>
        );
    }
}

export default Header;