import React from 'react';
import Logo from '../../../public/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='header'>
                <div className='brand-name'>
                    <h1>Knowledge Store</h1>
                </div>
                <div className='nav-item'>
                    <div>
                        <a href="1">Blog</a>
                        <a href="/order">News</a>
                        <a href="/login">Login</a>
                    </div>
                    <img src={Logo} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Navbar;