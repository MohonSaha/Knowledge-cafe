import React from 'react';
import Logo from '../../../public/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='header'>
                <img src={Logo} alt="" />
                <div>
                    <a href="1">Blog</a>
                    <a href="/order">News</a>
                    <a href="/inventory">About Us</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;