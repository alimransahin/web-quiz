import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=' bg-emerald-300 '>
            <div className='md:w-11/12 mx-auto flex items-center p-7 justify-between flex-col sm:flex-row'>
            <div className='logo'>
                <h1 className="text-5xl font-bold">Web Quiz</h1>
            </div>
            <div className='menu font-semibold text-xl mt-3'>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
            </div>
            </div>
        </div>
    );
};

export default Header;