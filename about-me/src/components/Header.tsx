import React, { useState } from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () :any => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <button className="menu-toggle" onClick={() :void => setIsMenuOpen(!isMenuOpen)}>
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <NavLink to="/" className={({ isActive }:NavLinkRenderProps):"active"|"" => isActive ? 'active' : ''} onClick={():void => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/biography" className={({ isActive }:NavLinkRenderProps):"active"|"" => isActive ? 'active' : ''} onClick={():void => setIsMenuOpen(false)}>About me</NavLink>
                <NavLink to="/resume" className={({ isActive }:NavLinkRenderProps):"active"|"" => isActive ? 'active' : ''} onClick={():void => setIsMenuOpen(false)}>Resume</NavLink>
                <NavLink to="/interest" className={({ isActive }:NavLinkRenderProps):"active"|"" => isActive ? 'active' : ''} onClick={():void => setIsMenuOpen(false)}>My Interests</NavLink>
                <NavLink to="/gallery" className={({ isActive }:NavLinkRenderProps):"active"|"" => isActive ? 'active' : ''} onClick={():void => setIsMenuOpen(false)}>Gallery</NavLink>
                <a href="https://woojin-cs601.netlify.app/" className='CS601'>CS601</a>
            </nav>
        </header>
    );
};

export default Header;