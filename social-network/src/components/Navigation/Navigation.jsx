import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
    return <nav className={style.navigation} >
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/dialogs'>Messages</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
    </nav>
}

export default Navigation;