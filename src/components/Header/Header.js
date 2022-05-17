import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/aboutUs'>About Us</NavLink>
                <NavLink to='/recipes'>Recipes</NavLink>
            </nav>
        </div>
    );
};

export default Header;