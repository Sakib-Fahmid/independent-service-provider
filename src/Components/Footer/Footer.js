import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='text-center navbar-dark bg-primary text-white footer-style font-bold' >
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;