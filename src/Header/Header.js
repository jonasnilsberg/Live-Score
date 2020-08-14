import React from 'react';
import './Header.css';
import HeaderImg from './header.jpg';

function Header() {
    return (
        <header>
            <img className="header-img" src={HeaderImg} alt="header"></img>
            <h2 className="header-title">Live Score</h2>
        </header>
        
    );
}

export default Header;
