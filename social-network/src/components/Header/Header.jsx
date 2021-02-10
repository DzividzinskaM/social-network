import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return (<header>
        <div className={s.loginBlock}>
            {
                isAuth ? <div>{login} - <button onClick={logout}>Log out</button></div>
                    : <NavLink to='/login'>Login</NavLink>
            }
        </div>

        <img className={s.img} src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
             alt="logo"/>
    </header>);
}

export default Header;