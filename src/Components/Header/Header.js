import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='logo'></div>
            <div className='menu'>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;