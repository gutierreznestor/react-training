import React from 'react';
import './Header.scss';

class Header extends React.Component {

    render() {
        return (
            <header className="app__header">
                <div className="header__logo">Logo</div>
                <div className="header__actions">
                    <div className="header__actions__button">Reset positions</div>
                    <div className="header__actions__button">New Game</div>
                    <div className="header__actions__button">Change Player</div>
                </div>
            </header>
        );
    }
}

export default Header;