import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = ():any => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Woojin Kwak</p>
            <a href="https://woojink-contact.netlify.app/">Contact Me</a>
        </footer>
    )
}

export default Footer;